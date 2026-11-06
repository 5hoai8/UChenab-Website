export type PublishedVersion={version:string;builtAt:string};
export const RELOAD_MARKER='__preview_version';
export function isPublishedVersion(value:unknown):value is PublishedVersion{
 if(!value||typeof value!=='object')return false;
 const candidate=value as Partial<PublishedVersion>;
 return typeof candidate.version==='string'&&/^[a-zA-Z0-9._:-]{1,128}$/.test(candidate.version)&&typeof candidate.builtAt==='string'&&Number.isFinite(Date.parse(candidate.builtAt));
}
export function shouldRefresh(current:PublishedVersion,remote:PublishedVersion,lastAttempt:string|null,marker:string|null){
 // If a reload still served old HTML, stop rather than retrying in a loop.
 if(marker&&marker!==current.version)return false;
 return remote.version!==current.version&&Date.parse(remote.builtAt)>Date.parse(current.builtAt)&&lastAttempt!==remote.version;
}
export function refreshedUrl(currentUrl:string,version:string){
 const url=new URL(currentUrl);url.searchParams.set(RELOAD_MARKER,version);return url.toString();
}
