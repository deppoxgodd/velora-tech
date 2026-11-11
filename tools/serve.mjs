import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const host=process.argv[2]||'127.0.0.1';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.md':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(path.endsWith('/'))path+='index.html';const file=resolve(root,'.'+path);const publicFile=/^\/(?:index\.html|catalog\.html|product\.html|about\.html|style\.css|app\.js|assets\/[a-z0-9-]+\.(?:png|svg))$/.test(path);if(!publicFile||!file.startsWith(root)||file.split(sep).some(part=>part.startsWith('.'))){res.writeHead(403);return res.end('Forbidden');}if(!(await stat(file)).isFile())throw Error();res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,host,()=>console.log(`VELORA preview: http://${host}:4173`));
