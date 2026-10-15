import lighthouse from 'lighthouse';
import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';

const directory = 'docs/evidence/production/lighthouse';
await mkdir(directory, { recursive: true });
const server = spawn(process.execPath, ['scripts/serve-build.mjs'], { stdio: 'inherit' });
let browser;
try {
  let ready = false;
  for (let i = 0; i < 40; i++) {
    try { ready = (await fetch('http://127.0.0.1:4173/notth-web/')).ok; } catch {}
    if (ready) break;
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  if (!ready) throw Error('Build fixture did not become ready');
  browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9222'] });
  const runs = [];
  for (let run = 1; run <= 3; run++) {
    const result = await lighthouse('http://127.0.0.1:4173/notth-web/', {
      port: 9222, output: ['json', 'html'], logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      formFactor: 'mobile', throttlingMethod: 'simulate',
    });
    if (!result || result.lhr.runtimeError) throw Error(JSON.stringify(result?.lhr.runtimeError ?? 'No Lighthouse result'));
    await writeFile(`${directory}/run-${run}.json`, result.report[0]);
    await writeFile(`${directory}/run-${run}.html`, result.report[1]);
    const lhr = result.lhr;
    runs.push({ run, lighthouseVersion: lhr.lighthouseVersion, userAgent: lhr.userAgent,
      fetchTime: lhr.fetchTime, configSettings: lhr.configSettings,
      scores: Object.fromEntries(Object.entries(lhr.categories).map(([key, value]) => [key, Math.round(value.score * 100)])),
      metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time'].map(key => [key, lhr.audits[key].numericValue])),
      failedAudits: Object.entries(lhr.audits).filter(([,v]) => v.score !== null && v.score < 1).map(([id,v]) => ({ id, score: v.score, title: v.title, displayValue: v.displayValue })),
    });
    console.log(JSON.stringify(runs.at(-1).scores));
  }
  const median = key => runs.map(r => r.scores[key]).sort((a,b) => a-b)[1];
  const medians = Object.fromEntries(['performance','accessibility','best-practices','seo'].map(key => [key, median(key)]));
  const passed = medians.performance >= 90 && medians.accessibility >= 95 && medians.seo >= 95;
  await writeFile(`${directory}/summary.json`, JSON.stringify({ scope: 'Local production build; mobile simulation; not deployed origin', runs, medians, targets: { performance: 90, accessibility: 95, seo: 95 }, passed }, null, 2));
  if (!passed) process.exitCode = 1;
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
