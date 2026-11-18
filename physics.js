export const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
export function moveBody(b,dt,obstacles){
 b.x+=b.vx*dt;b.y+=b.vy*dt;
 b.x=clamp(b.x,b.r,1000-b.r);b.y=clamp(b.y,b.r,650-b.r);
 for(const o of obstacles){const nx=clamp(b.x,o.x,o.x+o.w),ny=clamp(b.y,o.y,o.y+o.h);let dx=b.x-nx,dy=b.y-ny,d=Math.hypot(dx,dy);if(d<b.r){if(d<0.001){const edges=[{d:b.x-o.x,x:o.x-b.r,y:b.y},{d:o.x+o.w-b.x,x:o.x+o.w+b.r,y:b.y},{d:b.y-o.y,x:b.x,y:o.y-b.r},{d:o.y+o.h-b.y,x:b.x,y:o.y+o.h+b.r}].sort((a,c)=>a.d-c.d);b.x=edges[0].x;b.y=edges[0].y;}else{b.x+=dx/d*(b.r-d);b.y+=dy/d*(b.r-d);}b.vx*=.5;b.vy*=.5;}}
}
export function tether(player,loot,dt){const dx=player.x-loot.x,dy=player.y-loot.y,d=Math.hypot(dx,dy);if(d>35){const force=(d-35)*18/loot.mass;loot.vx+=dx/d*force*dt;loot.vy+=dy/d*force*dt;}const decay=Math.exp(-3*dt);loot.vx*=decay;loot.vy*=decay;}
export const inNest=b=>Math.hypot(b.x-115,b.y-525)<76;
