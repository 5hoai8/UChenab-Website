'use client';
import Image from 'next/image';
import {useEffect,useReducer,useRef,useState,type CSSProperties} from 'react';
import {GithubLogoIcon,CaretLeftIcon,XIcon,ArrowUpRightIcon} from '@phosphor-icons/react';
import {developerProfile as profile} from '@/data/developer';
import {asset} from '@/lib/assets';
import {developerBadgeReducer,initialBadgeState,isBadgeExpanded} from '@/lib/developerBadgeState';

const SESSION_KEY='uchenab-developer-badge-introduced-v1';
export default function DeveloperProfileBadge(){
 const [state,dispatch]=useReducer(developerBadgeReducer,initialBadgeState);
 const [avatarFailed,setAvatarFailed]=useState(false);
 const [position,setPosition]=useState({top:220,obscured:true});
 const root=useRef<HTMLElement>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 const leaveTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const open=isBadgeExpanded(state);
 const cancelLeave=()=>{if(leaveTimer.current){clearTimeout(leaveTimer.current);leaveTimer.current=null;}};
 const close=(restoreFocus=false)=>{cancelLeave();dispatch('close');if(restoreFocus)trigger.current?.focus({preventScroll:true});};

 useEffect(()=>{
  const header=document.querySelector<HTMLElement>('header');
  const updates=document.querySelector<HTMLElement>('.updates-bar');
  let frame=0;
  const measure=()=>{
   frame=0;
   const top=Math.max(16,(header?.offsetHeight??0)+(updates?.offsetHeight??0)+12);
   const obscured=!!document.querySelector('#main-navigation.open,dialog[open],[aria-modal="true"]')||window.innerHeight-top<145;
   setPosition(current=>current.top===top&&current.obscured===obscured?current:{top,obscured});
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(measure);};
  const resize=new ResizeObserver(schedule);
  if(header)resize.observe(header);
  if(updates)resize.observe(updates);
  const mutations=new MutationObserver(schedule);
  mutations.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','open','aria-modal']});
  window.addEventListener('resize',schedule);schedule();
  return ()=>{resize.disconnect();mutations.disconnect();window.removeEventListener('resize',schedule);if(frame)cancelAnimationFrame(frame);};
 },[]);

 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  try{if(sessionStorage.getItem(SESSION_KEY))return;sessionStorage.setItem(SESSION_KEY,'1');}catch{/* Storage is optional; the root component still mounts only once per navigation session. */}
  const enter=setTimeout(()=>dispatch('intro'),250);
  const settle=setTimeout(()=>{if(!root.current?.contains(document.activeElement))dispatch('intro-end');},3250);
  return ()=>{clearTimeout(enter);clearTimeout(settle);};
 },[]);
 useEffect(()=>()=>{if(leaveTimer.current)clearTimeout(leaveTimer.current);},[]);
 useEffect(()=>{
  if(!open||position.obscured)return;
  const outside=(event:PointerEvent)=>{if(event.target instanceof Node&&!root.current?.contains(event.target))dispatch('close');};
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){dispatch('close');if(root.current?.contains(document.activeElement))trigger.current?.focus({preventScroll:true});}};
  document.addEventListener('pointerdown',outside,true);document.addEventListener('keydown',escape);
  return ()=>{document.removeEventListener('pointerdown',outside,true);document.removeEventListener('keydown',escape);};
 },[open,position.obscured]);

 const avatar=<span className="developer-avatar"><span className="developer-initials" aria-hidden="true">{profile.initials}</span>{!avatarFailed&&<Image src={asset(profile.avatar)} alt="GitHub profile photograph of Engr Shoaib Ahmad" width={44} height={44} loading="lazy" onError={()=>setAvatarFailed(true)}/>}</span>;
 return <aside ref={root} className="developer-badge" aria-label="Developer credit overlay" data-open={open} data-obscured={position.obscured} inert={position.obscured} style={{'--developer-badge-top':position.top+'px'} as CSSProperties}
  onPointerEnter={event=>{if(event.pointerType==='mouse'&&window.matchMedia('(hover: hover)').matches){cancelLeave();dispatch('preview');}}}
  onPointerLeave={event=>{if(event.pointerType==='mouse'){cancelLeave();leaveTimer.current=setTimeout(()=>{if(!open||!root.current?.contains(document.activeElement))dispatch('leave');},240);}}}
  onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))close();}}>
  <button ref={trigger} type="button" className="developer-tab" aria-label="Show developer profile: Engr Shoaib Ahmad" aria-controls="developer-profile-panel" aria-expanded={open} tabIndex={open?-1:0} onClick={()=>{cancelLeave();dispatch('toggle');}}>{avatar}<span className="developer-tab-github"><GithubLogoIcon size={14} weight="fill" aria-hidden="true"/></span><CaretLeftIcon className="developer-tab-arrow" size={10} weight="fill" aria-hidden="true"/></button>
  <div id="developer-profile-panel" className="developer-card" role="region" aria-label="Developer profile" aria-hidden={!open} inert={!open}>
   <button type="button" className="developer-close" aria-label="Collapse developer profile" onClick={()=>close(true)}><XIcon size={14} weight="fill" aria-hidden="true"/></button>
   <div className="developer-identity">{avatar}<div><span className="developer-credit">{profile.credit}</span><strong className="developer-name">{profile.name}</strong><span className="developer-experience">{profile.experience}</span></div></div>
   <div className="developer-card-bottom"><div className="developer-stack" role="group" aria-label="Website technology stack"><span>{profile.technologyLabel}</span><div>{profile.technologies.map(technology=><span className="developer-tech" title={technology.name} key={technology.name}><Image src={asset(technology.icon)} alt={technology.name+' — website technology'} width={17} height={17}/></span>)}</div></div><a className="developer-github" href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Engr Shoaib Ahmad on GitHub (opens in a new tab)"><GithubLogoIcon size={17} weight="fill" aria-hidden="true"/>GitHub<ArrowUpRightIcon size={12} weight="fill" aria-hidden="true"/></a></div>
  </div>
 </aside>;
}
