'use client';
import Image from 'next/image';
import {useEffect,useState,type CSSProperties} from 'react';
import {GithubLogoIcon,ArrowUpRightIcon} from '@phosphor-icons/react';
import {developerProfile as profile} from '@/data/developer';
import {asset} from '@/lib/assets';

export default function DeveloperProfileBadge(){
 const [avatarFailed,setAvatarFailed]=useState(false);
 const [position,setPosition]=useState({top:220,obscured:false});

 useEffect(()=>{
  const header=document.querySelector<HTMLElement>('header');
  const updates=document.querySelector<HTMLElement>('.updates-bar');
  let frame=0;
  const measure=()=>{
   frame=0;
   const top=Math.max(16,(header?.offsetHeight??0)+(updates?.offsetHeight??0)+12);
   const obscured=!!document.querySelector('#main-navigation.open,dialog[open],[aria-modal="true"]');
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

 const avatar=<span className="developer-avatar"><span className="developer-initials" aria-hidden="true">{profile.initials}</span>{!avatarFailed&&<Image src={asset(profile.avatar)} alt="GitHub profile photograph of Engr Shoaib Ahmad" width={44} height={44} loading="lazy" onError={()=>setAvatarFailed(true)}/>}</span>;
 return <aside className="developer-badge" aria-label="Developer credit overlay" data-persistent="true" data-obscured={position.obscured} inert={position.obscured} style={{'--developer-badge-top':position.top+'px'} as CSSProperties}>
  <div id="developer-profile-panel" className="developer-card" role="region" aria-label="Developer profile">
   <div className="developer-identity">{avatar}<div><span className="developer-credit">{profile.credit}</span><strong className="developer-name">{profile.name}</strong><span className="developer-experience">{profile.experience}</span></div></div>
   <div className="developer-card-bottom"><div className="developer-stack" role="group" aria-label="Website technology stack"><span>{profile.technologyLabel}</span><div>{profile.technologies.map(technology=><span className="developer-tech" title={technology.name} key={technology.name}><Image src={asset(technology.icon)} alt={technology.name+' — website technology'} width={17} height={17}/></span>)}</div></div><a className="developer-github" href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Engr Shoaib Ahmad on GitHub (opens in a new tab)"><GithubLogoIcon size={17} weight="fill" aria-hidden="true"/>GitHub<ArrowUpRightIcon size={12} weight="fill" aria-hidden="true"/></a></div>
  </div>
 </aside>;
}
