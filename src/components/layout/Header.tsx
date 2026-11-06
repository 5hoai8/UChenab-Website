'use client';
import UniversityLogo from '@/components/ui/UniversityLogo';
import UpdatesBar from '@/components/layout/UpdatesBar';
import Link from 'next/link';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {Menu,X,ArrowUpRight,ChevronDown} from 'lucide-react';
import {navigation,titles} from '@/data/content';
export default function Header(){const [open,setOpen]=useState(false);const pathname=usePathname();return <><UpdatesBar/><header><Link href="/" className="brand" aria-label="University of Chenab home"><UniversityLogo/></Link><button className="mobile-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="main-navigation" className={open?'nav open':'nav'} aria-label="Main navigation">{navigation.map(n=><div className="nav-item" key={n.label}><Link href={n.href} onClick={()=>setOpen(false)} aria-current={pathname===n.href?'page':undefined}>{n.label}{n.children.length>0&&<ChevronDown size={12}/>}</Link>{n.children.length>0&&<div className="dropdown">{n.children.map(c=><Link key={c} href={'/'+c} onClick={()=>setOpen(false)}>{titles[c]}</Link>)}</div>}</div>)}<Link className="button small" href="https://uchenab.edu.pk/apply/">Apply now <ArrowUpRight size={15}/></Link></nav></header></>}
