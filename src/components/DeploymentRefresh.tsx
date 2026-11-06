'use client';
import {useEffect} from 'react';
import {asset} from '@/lib/assets';
import {isPublishedVersion,shouldRefresh,refreshedUrl,RELOAD_MARKER} from '@/lib/siteVersion';

const current={version:process.env.NEXT_PUBLIC_SITE_VERSION||'',builtAt:process.env.NEXT_PUBLIC_SITE_BUILT_AT||''};
/** Invisible, once-per-deployment refresh for static previews that already loaded this feature. */
export default function DeploymentRefresh(){
 useEffect(()=>{
  if(!isPublishedVersion(current))return;
  const storageKey='uchenab-preview-reload:'+(process.env.NEXT_PUBLIC_BASE_PATH||'/');
  const initialUrl=new URL(window.location.href);
  if(initialUrl.searchParams.get(RELOAD_MARKER)===current.version){
   initialUrl.searchParams.delete(RELOAD_MARKER);
   window.history.replaceState(window.history.state,'',initialUrl.pathname+initialUrl.search+initialUrl.hash);
  }
  let disposed=false;
  let checking=false;
  let reloading=false;
  let lastChecked=0;
  let controller:AbortController|null=null;
  let timeout:ReturnType<typeof setTimeout>|undefined;
  const check=async()=>{
   if(disposed||checking||reloading||document.visibilityState!=='visible'||!navigator.onLine||Date.now()-lastChecked<15000)return;
   checking=true;lastChecked=Date.now();controller=new AbortController();
   timeout=setTimeout(()=>controller?.abort(),8000);
   try{
    const endpoint=new URL(asset('/version.json'),window.location.origin);
    endpoint.searchParams.set('t',Date.now().toString(36));
    const response=await fetch(endpoint,{cache:'no-store',signal:controller.signal,credentials:'same-origin'});
    if(!response.ok||disposed)return;
    const remote:unknown=await response.json();
    if(!isPublishedVersion(remote)||disposed)return;
    let lastAttempt:string|null=null;
    try{lastAttempt=sessionStorage.getItem(storageKey);}catch{/* The URL marker also prevents loops when storage is unavailable. */}
    const marker=new URL(window.location.href).searchParams.get(RELOAD_MARKER);
    if(!shouldRefresh(current,remote,lastAttempt,marker))return;
    reloading=true;
    try{sessionStorage.setItem(storageKey,remote.version);}catch{/* No storage permission is required. */}
    // Preserve the current route, existing query parameters and anchor. The new URL bypasses cached HTML.
    window.location.replace(refreshedUrl(window.location.href,remote.version));
   }catch{/* Offline, blocked, malformed or temporarily unavailable metadata never interrupts the visitor. */}
   finally{checking=false;if(timeout)clearTimeout(timeout);controller=null;}
  };
  const wake=()=>{void check();};
  const initial=setTimeout(wake,12000);
  const interval=setInterval(wake,60000);
  document.addEventListener('visibilitychange',wake);window.addEventListener('focus',wake);window.addEventListener('online',wake);
  return ()=>{disposed=true;clearTimeout(initial);clearInterval(interval);if(timeout)clearTimeout(timeout);controller?.abort();document.removeEventListener('visibilitychange',wake);window.removeEventListener('focus',wake);window.removeEventListener('online',wake);};
 },[]);
 return null;
}
