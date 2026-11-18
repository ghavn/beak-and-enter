import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript'};
http.createServer(async(req,res)=>{try{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname); const file=name==='/'?'index.html':name.slice(1); if(file.includes('..')) throw Error(); const body=await readFile(file); res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(body);}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'0.0.0.0',()=>console.log('Local: http://localhost:4173'));
