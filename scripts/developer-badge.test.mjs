import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const compile=async file=>{
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
 return import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
};
const {developerProfile:profile}=await compile('src/data/developer.ts');
test('user identity is exact and the configured GitHub avatar and project icons are local',()=>{
 assert.equal(profile.credit,'Developed by');assert.equal(profile.name,'Engr Shoaib Ahmad');assert.equal(profile.experience,'Senior Developer · Since 2015');
 assert.equal(profile.githubUrl,'https://github.com/5hoai8');assert.equal(profile.technologyLabel,'Website stack');
 assert.ok(fs.existsSync(path.join('public',profile.avatar)));
 assert.equal(profile.technologies.length,4);for(const t of profile.technologies)assert.ok(fs.existsSync(path.join('public',t.icon)));
});
test('every exported page mounts a single non-modal overlay with secure profile link and permanently visible content',()=>{
 const routes=['','about','leadership','faculties','programs','degree-finder','admissions','scholarships','campus-life','research','news','academic-calendar','offices','contact','sources'];
 for(const route of routes){
  const html=fs.readFileSync(path.join('out',route,'index.html'),'utf8');
  assert.equal((html.match(/aria-label="Developer credit overlay"/g)||[]).length,1,route);
  assert.match(html,/data-persistent="true"/);
  assert.match(html,/class="developer-card" role="region" aria-label="Developer profile"/);
  assert.ok(!html.includes('Collapse developer profile'));
  assert.ok(!html.includes('Show developer profile:'));
  assert.ok(!html.includes('aria-label="Developer profile" aria-hidden="true"'));
  assert.match(html,/href="https:\/\/github.com\/5hoai8" target="_blank" rel="noopener noreferrer"/);
  assert.ok(html.indexOf('Developer credit overlay')>html.indexOf('</footer>'));
 }
});
