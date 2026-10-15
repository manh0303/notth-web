import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve('dist');
const asset = path => resolve(root, path.replace(/^\/notth-web\//, '').replace(/^\//, ''));
let html = await readFile(resolve(root, 'index.html'), 'utf8');
for (const match of [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g)]) {
  let css = await readFile(asset(match[1]), 'utf8');
  for (const url of [...css.matchAll(/url\(([^)]+)\)/g)]) {
    const path = url[1].replace(/["']/g, '');
    if (!path.startsWith('data:')) {
      const file = path.startsWith('/') ? asset(path) : resolve(root, '_astro', path);
      const data = await readFile(file);
      css = css.replaceAll(url[0], `url(data:font/woff2;base64,${data.toString('base64')})`);
    }
  }
  html = html.replace(match[0], `<style>${css}</style>`);
}
for (const match of [...html.matchAll(/<script[^>]+src="([^"]+)"[^>]*><\/script>/g)]) html = html.replace(match[0], `<script type="module">${await readFile(asset(match[1]), 'utf8')}</script>`);
html = html.replace('href="/notth-web/favicon.svg"', `href="data:image/svg+xml;base64,${(await readFile(resolve(root,'favicon.svg'))).toString('base64')}"`).replace('href="/notth-web/" aria-label="NOTTH home"','href="#" aria-label="NOTTH home"');
html += '\n<!-- Font licenses\n' + (await readFile('public/font-licenses.txt', 'utf8')).replaceAll('--', '—') + '\n-->';
await writeFile('docs/design/notth-preview.html', html);
console.log('Exported self-contained docs/design/notth-preview.html');
