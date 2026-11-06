import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const code=ts.transpileModule(fs.readFileSync('src/lib/siteVersion.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {isPublishedVersion,shouldRefresh,refreshedUrl,RELOAD_MARKER}=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
const current={version:'release-a',builtAt:'2026-11-06T06:00:00Z'};
const newer={version:'release-b',builtAt:'2026-11-06T06:10:00Z'};
test('a newer deployment refreshes once, while the same deployment does not',()=>{
 assert.equal(shouldRefresh(current,newer,null,null),true);
 assert.equal(shouldRefresh(current,current,null,null),false);
 assert.equal(shouldRefresh(current,newer,newer.version,null),false);
});
test('stale metadata cannot send a new page back to an older deployment',()=>{
 assert.equal(shouldRefresh(newer,current,null,null),false);
});
test('stale HTML after a reload cannot create a loop even if storage is unavailable',()=>{
 assert.equal(shouldRefresh(current,newer,null,newer.version),false);
 assert.equal(shouldRefresh(current,{version:'release-c',builtAt:'2026-11-06T06:20:00Z'},null,newer.version),false);
});
test('reload keeps preview branch, route, query filters and hash',()=>{
 const result=new URL(refreshedUrl('https://5hoai8.github.io/UChenab-Website/academy-style/degree-finder/?department=Computer+Science#main',newer.version));
 assert.equal(result.pathname,'/UChenab-Website/academy-style/degree-finder/');assert.equal(result.searchParams.get('department'),'Computer Science');assert.equal(result.hash,'#main');assert.equal(result.searchParams.get(RELOAD_MARKER),newer.version);
});
test('invalid version responses are rejected',()=>{
 for(const value of [null,{},'<html>',{version:'',builtAt:newer.builtAt},{version:'release-b',builtAt:'invalid'}])assert.equal(isPublishedVersion(value),false);
 assert.equal(isPublishedVersion(newer),true);
});
test('static export contains the exact generated build metadata',()=>{
 const generated=JSON.parse(fs.readFileSync('public/version.json','utf8'));const exported=JSON.parse(fs.readFileSync('out/version.json','utf8'));
 assert.ok(isPublishedVersion(exported));assert.deepEqual(exported,generated);
});
