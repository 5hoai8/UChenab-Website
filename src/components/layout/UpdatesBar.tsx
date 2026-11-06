'use client';
import {useState} from 'react';
import Link from 'next/link';
import {universityUpdates,admissionsPortal} from '@/data/updates';
export default function UpdatesBar(){
  const [active,setActive]=useState(0);
  const update=universityUpdates[active];
  return <section className="updates-bar" aria-label="University updates"><div className="updates-inner">
    <div className="updates-primary">
      <span className="updates-badge"><span aria-hidden="true"/>Updates</span>
      <div className="updates-selectors" role="group" aria-label="Choose an update">{universityUpdates.map((item,index)=><button key={item.href} type="button" aria-label={'Show update: '+item.label} aria-pressed={active===index} onClick={()=>setActive(index)}><span/></button>)}</div>
      <p className="updates-message" aria-live="polite" aria-atomic="true"><span>{update.prefix}</span> <Link href={update.href}>{update.label}</Link></p>
    </div>
    <p className="updates-support">For academic queries and support, <Link href="/contact">contact the Admissions Office</Link>.</p>
    <nav className="updates-links" aria-label="Quick links"><Link href="/academic-calendar">Academic calendar</Link><Link href="/news">News & events</Link><Link href="/contact">Contact us ↗</Link></nav>
    <a className="updates-login" href={admissionsPortal} aria-label="Login to the official admissions portal">Login</a>
  </div></section>;
}
