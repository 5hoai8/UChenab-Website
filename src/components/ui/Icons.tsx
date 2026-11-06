'use client';
import {
 ArrowUpRightIcon,BookOpenIcon,CompassIcon,MicroscopeIcon,MapPinIcon,
 MagnifyingGlassIcon,SlidersHorizontalIcon,ListIcon,XIcon,CaretDownIcon,CaretRightIcon,
 GraduationCapIcon,BuildingsIcon,HandshakeIcon,CodeIcon,BriefcaseIcon,FlaskIcon,
 TranslateIcon,StethoscopeIcon,CheckCircleIcon,ArrowRightIcon,ShieldCheckIcon,
 type Icon,type IconProps
} from '@phosphor-icons/react';
function filled(Component:Icon){
 return function FilledIcon(props:IconProps){const size=typeof props.size==='number'?Math.round(props.size*1.25):(props.size??30);return <Component aria-hidden={props['aria-label']?undefined:true} {...props} size={size} weight="fill" style={{flexShrink:0,...props.style}}/>;};
}
export const ArrowUpRight=filled(ArrowUpRightIcon);
export const BookOpen=filled(BookOpenIcon);
export const Compass=filled(CompassIcon);
export const Microscope=filled(MicroscopeIcon);
export const MapPin=filled(MapPinIcon);
export const Search=filled(MagnifyingGlassIcon);
export const SlidersHorizontal=filled(SlidersHorizontalIcon);
export const Menu=filled(ListIcon);
export const X=filled(XIcon);
export const ChevronDown=filled(CaretDownIcon);
export const ChevronRight=filled(CaretRightIcon);
export const GraduationCap=filled(GraduationCapIcon);
export const Building2=filled(BuildingsIcon);
export const HeartHandshake=filled(HandshakeIcon);
export const Code2=filled(CodeIcon);
export const BriefcaseBusiness=filled(BriefcaseIcon);
export const FlaskConical=filled(FlaskIcon);
export const Languages=filled(TranslateIcon);
export const Stethoscope=filled(StethoscopeIcon);
export const CheckCircle2=filled(CheckCircleIcon);
export const ArrowRight=filled(ArrowRightIcon);
export const ShieldCheck=filled(ShieldCheckIcon);
