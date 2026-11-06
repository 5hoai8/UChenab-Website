import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const compile=async file=>{
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
 return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
};
const {developerBadgeReducer:reduce,initialBadgeState:initial,isBadgeExpanded:expanded}=await compile('src/lib/developerBadgeState.ts');
const {developerProfile:profile}=await compile('src/data/developer.ts');
test('hover preview collapses after leave and can reopen',()=>{
 let state=reduce(initial,'preview');assert.equal(expanded(state),true);
 state=reduce(state,'leave');assert.equal(expanded(state),false);
 assert.equal(expanded(reduce(state,'preview')),true);
});
test('tap/click pins the card through pointer leave, and toggles closed',()=>{
 let state=reduce(initial,'toggle');state=reduce(state,'leave');assert.equal(expanded(state),true);
 state=reduce(state,'toggle');assert.equal(expanded(state),false);
});
test('intro timeout cannot collapse a manually pinned or hovered card',()=>{
 let state=reduce(initial,'intro');state=reduce(state,'toggle');state=reduce(state,'intro-end');assert.equal(expanded(state),true);
 state=reduce(initial,'intro');state=reduce(state,'preview');state=reduce(state,'intro-end');assert.equal(expanded(state),true);
});
test('explicit or outside dismissal suppresses hover reopening until a genuine pointer leave',()=>{
 let state=reduce(reduce(initial,'preview'),'close');assert.equal(expanded(reduce(state,'preview')),false);
 state=reduce(state,'leave');assert.equal(expanded(reduce(state,'preview')),true);
 assert.equal(expanded(reduce(reduce(initial,'close'),'intro')),false);
});
test('user identity is exact and the configured GitHub avatar and project icons are local',()=>{
 assert.equal(profile.credit,'Developed by');assert.equal(profile.name,'Engr Shoaib Ahmad');assert.equal(profile.experience,'Senior Developer · Since 2015');
 assert.equal(profile.githubUrl,'https://github.com/5hoai8');assert.equal(profile.technologyLabel,'Website stack');
 assert.ok(fs.existsSync(path.join('public',profile.avatar)));
 assert.equal(profile.technologies.length,4);for(const t of profile.technologies)assert.ok(fs.existsSync(path.join('public',t.icon)));
});
test('every exported page mounts a single non-modal overlay with secure profile link and collapsed controls',()=>{
 const routes=['','about','leadership','faculties','programs','degree-finder','admissions','scholarships','campus-life','research','news','academic-calendar','offices','contact','sources'];
 for(const route of routes){
  const html=fs.readFileSync(path.join('out',route,'index.html'),'utf8');
  assert.equal((html.match(/aria-label="Developer credit overlay"/g)||[]).length,1,route);
  assert.match(html,/aria-controls="developer-profile-panel" aria-expanded="false"/);
  assert.match(html,/aria-label="Developer profile" aria-hidden="true" inert=""/);
  assert.match(html,/href="https:\/\/github.com\/5hoai8" target="_blank" rel="noopener noreferrer"/);
  assert.ok(html.indexOf('Developer credit overlay')>html.indexOf('</footer>'));
 }
});
