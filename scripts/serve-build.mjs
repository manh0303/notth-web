import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = resolve('dist');
const types = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.woff2':'font/woff2','.woff':'font/woff'};
createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (!pathname.startsWith('/notth-web/')) { res.writeHead(404).end(); return; }
  const path = resolve(root, '.' + pathname.slice('/notth-web'.length) + (pathname.endsWith('/') ? 'index.html' : ''));
  if (!path.startsWith(root + '/')) { res.writeHead(403).end(); return; }
  try { const file = await readFile(path); res.writeHead(200, {'Content-Type':types[extname(path)] || 'application/octet-stream'}).end(file); }
  catch { res.writeHead(404).end(); }
}).listen(4173,'127.0.0.1',()=>console.log('Static build: http://127.0.0.1:4173/notth-web/'));
