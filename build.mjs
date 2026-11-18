import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for (const f of ['index.html','style.css','game.js','physics.js']) await copyFile(f,`dist/${f}`);
console.log('Built static game in dist/');
