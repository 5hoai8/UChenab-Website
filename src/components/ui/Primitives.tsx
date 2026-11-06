import Link from 'next/link';
import {ArrowUpRight} from '@/components/ui/Icons';
export function Button({href,children,outline=false}:{href:string;children:React.ReactNode;outline?:boolean}){return <Link href={href} className={'button'+(outline?' outline':'')}>{children}<ArrowUpRight size={17}/></Link>}
export function SectionTitle({eyebrow,title,body}:{eyebrow:string;title:string;body?:string}){return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body&&<p>{body}</p>}</div>}
