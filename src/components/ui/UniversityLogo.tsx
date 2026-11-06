import Image from 'next/image';
import {asset} from '@/lib/assets';
export default function UniversityLogo({light=false}:{light?:boolean}){
  return light
    ? <Image className="university-logo light-logo" src={asset('/images/university-logo.webp')} width={2048} height={648} alt="The University of Chenab" sizes="280px"/>
    : <span className="university-logo blue-logo" role="img" aria-label="The University of Chenab" style={{maskImage:`url("${asset('/images/university-logo.webp')}")`,WebkitMaskImage:`url("${asset('/images/university-logo.webp')}")`}}/>;
}
