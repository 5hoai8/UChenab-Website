import {execFileSync,spawnSync} from 'node:child_process';
import {mkdirSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let version;
try{version=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim();}
catch{version=process.env.GITHUB_SHA||process.env.VERCEL_GIT_COMMIT_SHA||new Date().toISOString();}
const builtAt=new Date().toISOString();
mkdirSync('public',{recursive:true});
writeFileSync('public/version.json',JSON.stringify({version,builtAt})+'\n');
const result=spawnSync(process.execPath,[require.resolve('next/dist/bin/next'),'build','--webpack'],{
 stdio:'inherit',env:{...process.env,NEXT_PUBLIC_SITE_VERSION:version,NEXT_PUBLIC_SITE_BUILT_AT:builtAt}
});
if(result.error)throw result.error;
process.exit(result.status??1);
