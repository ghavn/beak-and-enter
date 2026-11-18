import test from 'node:test';
import assert from 'node:assert/strict';
import {moveBody,tether,inNest} from './physics.js';
test('loot follows the tether and heavier cake accelerates less',()=>{const p={x:200,y:100};const light={x:100,y:100,vx:0,vy:0,mass:1};const heavy={...light,mass:2.6};tether(p,light,.016);tether(p,heavy,.016);assert.ok(light.vx>heavy.vx);assert.ok(heavy.vx>0);});
test('collisions keep a carried item outside benches and inside park',()=>{const b={x:95,y:115,vx:100,vy:0,r:15};moveBody(b,.1,[{x:100,y:100,w:100,h:40}]);assert.ok(b.x<=85||b.y<=85||b.y>=155);b.x=-100;moveBody(b,0,[]);assert.equal(b.x,15);});
test('nest requires food itself to reach the delivery area',()=>{assert.equal(inNest({x:115,y:525}),true);assert.equal(inNest({x:250,y:525}),false);});
