export type BadgeState={pinned:boolean;hovered:boolean;intro:boolean;suppressed:boolean};
export type BadgeEvent='preview'|'leave'|'toggle'|'close'|'intro'|'intro-end';
export const initialBadgeState:BadgeState={pinned:false,hovered:false,intro:false,suppressed:false};
export function isBadgeExpanded(state:BadgeState){return state.pinned||state.hovered||state.intro;}
export function developerBadgeReducer(state:BadgeState,event:BadgeEvent):BadgeState{
 switch(event){
  case 'preview':return state.suppressed||state.hovered?state:{...state,hovered:true};
  case 'leave':return {...state,hovered:false,suppressed:false,intro:false};
  case 'toggle':return state.pinned?{...initialBadgeState,suppressed:true}:{...state,pinned:true,intro:false,suppressed:false};
  case 'close':return {...initialBadgeState,suppressed:true};
  case 'intro':return state.suppressed||state.pinned?state:{...state,intro:true};
  case 'intro-end':return state.intro?{...state,intro:false}:state;
 }
}
