"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1542],{58405:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(13428),r=n(2265),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},a=n(46750),l=r.forwardRef(function(e,t){return r.createElement(a.Z,(0,o.Z)({},e,{ref:t,icon:i}))})},11024:function(e,t,n){n.d(t,{Z:function(){return s},i:function(){return l}});var o=n(73310),r=n(2265),i=n(60745),a=n(19056);function l(e){return function(t){return r.createElement(i.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},r.createElement(e,Object.assign({},t)))}}function s(e,t,n,i){return l(function(l){let{prefixCls:s,style:d}=l,c=r.useRef(null),[p,u]=r.useState(0),[m,f]=r.useState(0),[g,b]=(0,o.Z)(!1,{value:l.open}),{getPrefixCls:$}=r.useContext(a.E_),v=$(t||"select",s);r.useEffect(()=>{if(b(!0),"undefined"!=typeof ResizeObserver){let e=new ResizeObserver(e=>{let t=e[0].target;u(t.offsetHeight+8),f(t.offsetWidth)}),t=setInterval(()=>{var o;let r=n?`.${n(v)}`:`.${v}-dropdown`,i=null===(o=c.current)||void 0===o?void 0:o.querySelector(r);i&&(clearInterval(t),e.observe(i))},10);return()=>{clearInterval(t),e.disconnect()}}},[]);let h=Object.assign(Object.assign({},l),{style:Object.assign(Object.assign({},d),{margin:0}),open:g,visible:g,getPopupContainer:()=>c.current});return i&&(h=i(h)),r.createElement("div",{ref:c,style:{paddingBottom:p,position:"relative",minWidth:m}},r.createElement(e,Object.assign({},h)))})}},5624:function(e,t,n){var o=n(16141),r=n(43197);t.Z=function(e){let t;let n=n=>()=>{t=null,e.apply(void 0,(0,o.Z)(n))},i=function(){if(null==t){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];t=(0,r.Z)(n(o))}};return i.cancel=()=>{r.Z.cancel(t),t=null},i}},38972:function(e,t,n){n.d(t,{Z:function(){return C}});var o,r,i=n(49034),a=n(88755),l=n(75904),s=n(20994),d=n(54440),c=n.n(d),p=n(14535),u=n(54925),m=n(2265),f=n(5624),g=n(19056),b=n(12088),$=n(43744);let v=e=>{let{componentCls:t}=e;return{[t]:{position:"fixed",zIndex:e.zIndexPopup}}};var h=(0,b.Z)("Affix",e=>{let t=(0,$.TS)(e,{zIndexPopup:e.zIndexBase+10});return[v(t)]});function y(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function x(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function w(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n){let e=window.innerHeight-t.bottom;return n+e}}let k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function O(){return"undefined"!=typeof window?window:null}(o=r||(r={}))[o.None=0]="None",o[o.Prepare=1]="Prepare";let S=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,i.Z)(this,n),e=t.apply(this,arguments),e.state={status:r.None,lastAffix:!1,prevTarget:null},e.placeholderNodeRef=(0,m.createRef)(),e.fixedNodeRef=(0,m.createRef)(),e.addListeners=()=>{let t=e.getTargetFunc(),n=null==t?void 0:t(),{prevTarget:o}=e.state;o!==n&&(k.forEach(t=>{null==o||o.removeEventListener(t,e.lazyUpdatePosition),null==n||n.addEventListener(t,e.lazyUpdatePosition)}),e.updatePosition(),e.setState({prevTarget:n}))},e.removeListeners=()=>{e.timer&&(clearTimeout(e.timer),e.timer=null);let{prevTarget:t}=e.state,n=e.getTargetFunc(),o=null==n?void 0:n();k.forEach(n=>{null==o||o.removeEventListener(n,e.lazyUpdatePosition),null==t||t.removeEventListener(n,e.lazyUpdatePosition)}),e.updatePosition.cancel(),e.lazyUpdatePosition.cancel()},e.getOffsetTop=()=>{let{offsetBottom:t,offsetTop:n}=e.props;return void 0===t&&void 0===n?0:n},e.getOffsetBottom=()=>e.props.offsetBottom,e.measure=()=>{let{status:t,lastAffix:n}=e.state,{onChange:o}=e.props,i=e.getTargetFunc();if(t!==r.Prepare||!e.fixedNodeRef.current||!e.placeholderNodeRef.current||!i)return;let a=e.getOffsetTop(),l=e.getOffsetBottom(),s=i();if(s){let t={status:r.None},i=y(e.placeholderNodeRef.current);if(0===i.top&&0===i.left&&0===i.width&&0===i.height)return;let d=y(s),c=x(i,d,a),p=w(i,d,l);void 0!==c?(t.affixStyle={position:"fixed",top:c,width:i.width,height:i.height},t.placeholderStyle={width:i.width,height:i.height}):void 0!==p&&(t.affixStyle={position:"fixed",bottom:p,width:i.width,height:i.height},t.placeholderStyle={width:i.width,height:i.height}),t.lastAffix=!!t.affixStyle,o&&n!==t.lastAffix&&o(t.lastAffix),e.setState(t)}},e.prepareMeasure=()=>{e.setState({status:r.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.updatePosition=(0,f.Z)(()=>{e.prepareMeasure()}),e.lazyUpdatePosition=(0,f.Z)(()=>{let t=e.getTargetFunc(),{affixStyle:n}=e.state;if(t&&n){let o=e.getOffsetTop(),r=e.getOffsetBottom(),i=t();if(i&&e.placeholderNodeRef.current){let t=y(i),a=y(e.placeholderNodeRef.current),l=x(a,t,o),s=w(a,t,r);if(void 0!==l&&n.top===l||void 0!==s&&n.bottom===s)return}}e.prepareMeasure()}),e}return(0,a.Z)(n,[{key:"getTargetFunc",value:function(){let{getTargetContainer:e}=this.context,{target:t}=this.props;return void 0!==t?t:null!=e?e:O}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(e){this.addListeners(),(e.offsetTop!==this.props.offsetTop||e.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){let{affixStyle:e,placeholderStyle:t}=this.state,{affixPrefixCls:n,rootClassName:o,children:r}=this.props,i=c()(e&&o,{[n]:!!e}),a=(0,u.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return m.createElement(p.default,{onResize:this.updatePosition},m.createElement("div",Object.assign({},a,{ref:this.placeholderNodeRef}),e&&m.createElement("div",{style:t,"aria-hidden":"true"}),m.createElement("div",{className:i,ref:this.fixedNodeRef,style:e},m.createElement(p.default,{onResize:this.updatePosition},r))))}}]),n}(m.Component);S.contextType=g.E_;let _=(0,m.forwardRef)((e,t)=>{let{prefixCls:n,rootClassName:o}=e,{getPrefixCls:r}=(0,m.useContext)(g.E_),i=r("affix",n),[a,l]=h(i),s=Object.assign(Object.assign({},e),{affixPrefixCls:i,rootClassName:c()(o,l)});return a(m.createElement(S,Object.assign({},s,{ref:t})))});var C=_},34983:function(e,t,n){n.d(t,{Z:function(){return j}});var o=n(54440),r=n.n(o),i=n(79173),a=n(75018),l=n(2265),s=n(66284),d=n(19056),c=n(58405),p=n(39679);let u=e=>{let{children:t}=e,{getPrefixCls:n}=l.useContext(d.E_),o=n("breadcrumb");return l.createElement("li",{className:`${o}-separator`,"aria-hidden":"true"},""===t?t:t||"/")};u.__ANT_BREADCRUMB_SEPARATOR=!0;var m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function f(e,t,n,o){if(null==n)return null;let{className:i,onClick:s}=t,d=m(t,["className","onClick"]),c=Object.assign(Object.assign({},(0,a.Z)(d,{data:!0,aria:!0})),{onClick:s});return void 0!==o?l.createElement("a",Object.assign({},c,{className:r()(`${e}-link`,i),href:o}),n):l.createElement("span",Object.assign({},c,{className:r()(`${e}-link`,i)}),n)}var g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let b=e=>{let{prefixCls:t,separator:n="/",children:o,menu:r,overlay:i,dropdownProps:a,href:s}=e,d=(e=>{if(r||i){let n=Object.assign({},a);if(r){let e=r||{},{items:t}=e,o=g(e,["items"]);n.menu=Object.assign(Object.assign({},o),{items:null==t?void 0:t.map((e,t)=>{var{key:n,title:o,label:r,path:i}=e,a=g(e,["key","title","label","path"]);let d=null!=r?r:o;return i&&(d=l.createElement("a",{href:`${s}${i}`},d)),Object.assign(Object.assign({},a),{key:null!=n?n:t,label:d})})})}else i&&(n.overlay=i);return l.createElement(p.Z,Object.assign({placement:"bottom"},n),l.createElement("span",{className:`${t}-overlay-link`},e,l.createElement(c.Z,null)))}return e})(o);return null!=d?l.createElement(l.Fragment,null,l.createElement("li",null,d),n&&l.createElement(u,null,n)):null},$=e=>{let{prefixCls:t,children:n,href:o}=e,r=g(e,["prefixCls","children","href"]),{getPrefixCls:i}=l.useContext(d.E_),a=i("breadcrumb",t);return l.createElement(b,Object.assign({},r,{prefixCls:a}),f(a,r,n,o))};$.__ANT_BREADCRUMB_ITEM=!0;var v=n(27734),h=n(12088),y=n(43744);let x=e=>{let{componentCls:t,iconCls:n}=e;return{[t]:Object.assign(Object.assign({},(0,v.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,v.Qy)(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}};var w=(0,h.Z)("Breadcrumb",e=>{let t=(0,y.TS)(e,{});return[x(t)]},e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS})),k=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function O(e){let{breadcrumbName:t,children:n}=e,o=k(e,["breadcrumbName","children"]),r=Object.assign({title:t},o);return n&&(r.menu={items:n.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},k(e,["breadcrumbName"])),{title:t})})}),r}var S=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let _=(e,t)=>{if(void 0===t)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{n=n.replace(`:${t}`,e[t])}),n},C=e=>{let t;let{prefixCls:n,separator:o="/",style:c,className:p,rootClassName:m,routes:g,items:$,children:v,itemRender:h,params:y={}}=e,x=S(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:k,direction:C,breadcrumb:j}=l.useContext(d.E_),R=k("breadcrumb",n),[E,P]=w(R),z=(0,l.useMemo)(()=>$||(g?g.map(O):null),[$,g]),T=(e,t,n,o,r)=>{if(h)return h(e,t,n,o);let i=function(e,t){if(void 0===e.title||null===e.title)return null;let n=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(`:(${n})`,"g"),(e,n)=>t[n]||e)}(e,t);return f(R,e,i,r)};if(z&&z.length>0){let e=[],n=$||g;t=z.map((t,r)=>{let{path:i,key:s,type:d,menu:c,overlay:p,onClick:m,className:f,separator:g,dropdownProps:$}=t,v=_(y,i);void 0!==v&&e.push(v);let h=null!=s?s:r;if("separator"===d)return l.createElement(u,{key:h},g);let x={},w=r===z.length-1;c?x.menu=c:p&&(x.overlay=p);let{href:k}=t;return e.length&&void 0!==v&&(k=`#/${e.join("/")}`),l.createElement(b,Object.assign({key:h},x,(0,a.Z)(t,{data:!0,aria:!0}),{className:f,dropdownProps:$,href:k,separator:w?"":o,onClick:m,prefixCls:R}),T(t,y,n,e,k))})}else if(v){let e=(0,i.Z)(v).length;t=(0,i.Z)(v).map((t,n)=>t?(0,s.Tm)(t,{separator:n===e-1?"":o,key:n}):t)}let I=r()(R,null==j?void 0:j.className,{[`${R}-rtl`]:"rtl"===C},p,m,P),L=Object.assign(Object.assign({},null==j?void 0:j.style),c);return E(l.createElement("nav",Object.assign({className:I,style:L},x),l.createElement("ol",null,t)))};C.Item=$,C.Separator=u;var j=C},39679:function(e,t,n){var o=n(71773),r=n(54440),i=n.n(r),a=n(23803),l=n(28788),s=n(73310),d=n(54925),c=n(2265),p=n(11024),u=n(39972),m=n(66284),f=n(19056),g=n(26523),b=n(45440),$=n(82641),v=n(52659);let h=e=>{let t;let{menu:n,arrow:r,prefixCls:p,children:h,trigger:y,disabled:x,dropdownRender:w,getPopupContainer:k,overlayClassName:O,rootClassName:S,open:_,onOpenChange:C,visible:j,onVisibleChange:R,mouseEnterDelay:E=.15,mouseLeaveDelay:P=.1,autoAdjustOverflow:z=!0,placement:T="",overlay:I,transitionName:L}=e,{getPopupContainer:N,getPrefixCls:B,direction:M}=c.useContext(f.E_),Z=c.useMemo(()=>{let e=B();return void 0!==L?L:T.includes("top")?`${e}-slide-down`:`${e}-slide-up`},[B,T,L]),D=c.useMemo(()=>{if(!T)return"rtl"===M?"bottomRight":"bottomLeft";if(T.includes("Center")){let e=T.slice(0,T.indexOf("Center"));return e}return T},[T,M]),X=B("dropdown",p),[H,W]=(0,v.Z)(X),{token:A}=$.default.useToken(),G=c.Children.only(h),F=(0,m.Tm)(G,{className:i()(`${X}-trigger`,{[`${X}-rtl`]:"rtl"===M},G.props.className),disabled:x}),K=x?[]:y;K&&K.includes("contextMenu")&&(t=!0);let[U,q]=(0,s.Z)(!1,{value:null!=_?_:j}),Q=(0,l.Z)(e=>{null==C||C(e),null==R||R(e),q(e)}),V=i()(O,S,W,{[`${X}-rtl`]:"rtl"===M}),Y=(0,u.Z)({arrowPointAtCenter:"object"==typeof r&&r.pointAtCenter,autoAdjustOverflow:z,offset:A.marginXXS,arrowWidth:r?A.sizePopupArrow:0,borderRadius:A.borderRadius}),J=c.useCallback(()=>{q(!1)},[]);return H(c.createElement(a.Z,Object.assign({alignPoint:t},(0,d.Z)(e,["rootClassName"]),{mouseEnterDelay:E,mouseLeaveDelay:P,visible:U,builtinPlacements:Y,arrow:!!r,overlayClassName:V,prefixCls:X,getPopupContainer:k||N,transitionName:Z,trigger:K,overlay:()=>{let e;return e=(null==n?void 0:n.items)?c.createElement(g.Z,Object.assign({},n)):"function"==typeof I?I():I,w&&(e=w(e)),e=c.Children.only("string"==typeof e?c.createElement("span",null,e):e),c.createElement(b.J,{prefixCls:`${X}-menu`,expandIcon:c.createElement("span",{className:`${X}-menu-submenu-arrow`},c.createElement(o.Z,{className:`${X}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:J,validator:e=>{let{mode:t}=e}},e)},placement:D,onVisibleChange:Q}),F))},y=(0,p.Z)(h,"dropdown",e=>e,function(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})});h._InternalPanelDoNotUseOrYouWillBeFired=e=>c.createElement(y,Object.assign({},e),c.createElement("span",null)),t.Z=h},52659:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(27734),r=n(25086),i=n(80497),a=n(18037),l=n(91910),s=n(12088),d=n(43744),c=e=>{let{componentCls:t,menuCls:n,colorError:o,colorTextLightSolid:r}=e,i=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${i}`]:{[`&${i}-danger:not(${i}-disabled)`]:{color:o,"&:hover":{color:r,backgroundColor:o}}}}}};let p=e=>{let{componentCls:t,menuCls:n,zIndexPopup:s,dropdownArrowDistance:d,sizePopupArrow:c,antCls:p,iconCls:u,motionDurationMid:m,dropdownPaddingVertical:f,fontSize:g,dropdownEdgeChildPadding:b,colorTextDisabled:$,fontSizeIcon:v,controlPaddingHorizontal:h,colorBgElevated:y}=e;return[{[t]:Object.assign(Object.assign({},(0,o.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:s,display:"block","&::before":{position:"absolute",insetBlock:-d+c/2,zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${p}-btn`]:{[`& > ${u}-down, & > ${p}-btn-icon > ${u}-down`]:{fontSize:v}},[`${t}-wrap`]:{position:"relative",[`${p}-btn > ${u}-down`]:{fontSize:v},[`${u}-down::before`]:{transition:`transform ${m}`}},[`${t}-wrap-open`]:{[`${u}-down::before`]:{transform:"rotate(180deg)"}},[`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]:{display:"none"},[`&${p}-slide-down-enter${p}-slide-down-enter-active${t}-placement-bottomLeft,
          &${p}-slide-down-appear${p}-slide-down-appear-active${t}-placement-bottomLeft,
          &${p}-slide-down-enter${p}-slide-down-enter-active${t}-placement-bottom,
          &${p}-slide-down-appear${p}-slide-down-appear-active${t}-placement-bottom,
          &${p}-slide-down-enter${p}-slide-down-enter-active${t}-placement-bottomRight,
          &${p}-slide-down-appear${p}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:r.fJ},[`&${p}-slide-up-enter${p}-slide-up-enter-active${t}-placement-topLeft,
          &${p}-slide-up-appear${p}-slide-up-appear-active${t}-placement-topLeft,
          &${p}-slide-up-enter${p}-slide-up-enter-active${t}-placement-top,
          &${p}-slide-up-appear${p}-slide-up-appear-active${t}-placement-top,
          &${p}-slide-up-enter${p}-slide-up-enter-active${t}-placement-topRight,
          &${p}-slide-up-appear${p}-slide-up-appear-active${t}-placement-topRight`]:{animationName:r.Qt},[`&${p}-slide-down-leave${p}-slide-down-leave-active${t}-placement-bottomLeft,
          &${p}-slide-down-leave${p}-slide-down-leave-active${t}-placement-bottom,
          &${p}-slide-down-leave${p}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:r.Uw},[`&${p}-slide-up-leave${p}-slide-up-leave-active${t}-placement-topLeft,
          &${p}-slide-up-leave${p}-slide-up-leave-active${t}-placement-top,
          &${p}-slide-up-leave${p}-slide-up-leave-active${t}-placement-topRight`]:{animationName:r.ly}})},(0,l.ZP)(e,{colorBg:y,limitVerticalRadius:!0,arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:s,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:{[n]:Object.assign(Object.assign({padding:b,listStyleType:"none",backgroundColor:y,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},(0,o.Qy)(e)),{[`${n}-item-group-title`]:{padding:`${f}px ${h}px`,color:e.colorTextDescription,transition:`all ${m}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${n}-item-icon`]:{minWidth:g,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${m}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${f}px ${h}px`,color:e.colorText,fontWeight:"normal",fontSize:g,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${m}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},(0,o.Qy)(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:$,cursor:"not-allowed","&:hover":{color:$,backgroundColor:y,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:v,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:h+e.fontSizeSM},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:$,backgroundColor:y,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[(0,r.oN)(e,"slide-up"),(0,r.oN)(e,"slide-down"),(0,i.Fm)(e,"move-up"),(0,i.Fm)(e,"move-down"),(0,a._y)(e,"zoom-big")]]};var u=(0,s.Z)("Dropdown",(e,t)=>{let{rootPrefixCls:n}=t,{marginXXS:o,sizePopupArrow:r,controlHeight:i,fontSize:a,lineHeight:s,paddingXXS:u,componentCls:m,borderRadiusLG:f}=e,{dropdownArrowOffset:g}=(0,l.fS)({contentRadius:f}),b=(0,d.TS)(e,{menuCls:`${m}-menu`,rootPrefixCls:n,dropdownArrowDistance:r/2+o,dropdownArrowOffset:g,dropdownPaddingVertical:(i-a*s)/2,dropdownEdgeChildPadding:u});return[p(b),c(b)]},e=>({zIndexPopup:e.zIndexPopupBase+50}))},80497:function(e,t,n){n.d(t,{Fm:function(){return f}});var o=n(66532),r=n(92386);let i=new o.Keyframes("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),a=new o.Keyframes("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),l=new o.Keyframes("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),s=new o.Keyframes("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),d=new o.Keyframes("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),c=new o.Keyframes("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),p=new o.Keyframes("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),u=new o.Keyframes("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),m={"move-up":{inKeyframes:p,outKeyframes:u},"move-down":{inKeyframes:i,outKeyframes:a},"move-left":{inKeyframes:l,outKeyframes:s},"move-right":{inKeyframes:d,outKeyframes:c}},f=(e,t)=>{let{antCls:n}=e,o=`${n}-${t}`,{inKeyframes:i,outKeyframes:a}=m[t];return[(0,r.R)(o,i,a,e.motionDurationMid),{[`
        ${o}-enter,
        ${o}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}},57597:function(e,t,n){n.d(t,{Z:function(){return I}});var o=n(73297),r=n(51842),i=n(13428),a=n(2265),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(46750),d=a.forwardRef(function(e,t){return a.createElement(s.Z,(0,i.Z)({},e,{ref:t,icon:l}))}),c=n(54440),p=n.n(c),u=n(80031),m=n(19056),f=n(4157),g=n(33613);let b={motionAppear:!1,motionEnter:!0,motionLeave:!0};var $=n(79173),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},h=n(27734),y=n(12088),x=n(43744),w=n(25086),k=e=>{let{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,w.oN)(e,"slide-up"),(0,w.oN)(e,"slide-down")]]};let O=e=>{let{componentCls:t,tabsCardPadding:n,cardBg:o,cardGutter:r,colorBorderSecondary:i,itemSelectedColor:a}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:o,border:`${e.lineWidth}px ${e.lineType} ${i}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:a,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${r}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${r}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},S=e=>{let{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:o}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,h.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${o}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},h.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},_=e=>{let{componentCls:t,margin:n,colorBorderSecondary:o,horizontalMargin:r,verticalItemPadding:i,verticalItemMargin:a}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:r,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${o}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${n}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:i,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:a},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},C=e=>{let{componentCls:t,cardPaddingSM:n,cardPaddingLG:o,horizontalItemPaddingSM:r,horizontalItemPaddingLG:i}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o}}}}}},j=e=>{let{componentCls:t,itemActiveColor:n,itemHoverColor:o,iconCls:r,tabsHorizontalItemMargin:i,horizontalItemPadding:a,itemSelectedColor:l}=e,s=`${t}-tab`;return{[s]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:a,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,h.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:o},[`&${s}-active ${s}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${s}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${s}-remove ${r}`]:{margin:0},[r]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${s} + ${s}`]:{margin:{_skip_check_:!0,value:i}}}},R=e=>{let{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:o,cardGutter:r}=e,i=`${t}-rtl`;return{[i]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[o]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[o]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:r},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},E=e=>{let{componentCls:t,tabsCardPadding:n,cardHeight:o,cardGutter:r,itemHoverColor:i,itemActiveColor:a,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:o,marginLeft:{_skip_check_:!0,value:r},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${l}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:i},"&:active, &:focus:not(:focus-visible)":{color:a}},(0,h.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),j(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var P=(0,y.Z)("Tabs",e=>{let t=(0,x.TS)(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[C(t),R(t),_(t),S(t),O(t),E(t),k(t)]},e=>{let t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),z=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let T=e=>{let t;let{type:n,className:i,rootClassName:l,size:s,onEdit:c,hideAdd:h,centered:y,addIcon:x,popupClassName:w,children:k,items:O,animated:S,style:_}=e,C=z(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style"]),{prefixCls:j,moreIcon:R=a.createElement(r.Z,null)}=C,{direction:E,tabs:T,getPrefixCls:I,getPopupContainer:L}=a.useContext(m.E_),N=I("tabs",j),[B,M]=P(N);"editable-card"===n&&(t={onEdit:(e,t)=>{let{key:n,event:o}=t;null==c||c("add"===e?o:n,e)},removeIcon:a.createElement(o.Z,null),addIcon:x||a.createElement(d,null),showAdd:!0!==h});let Z=I(),D=function(e,t){if(e)return e;let n=(0,$.Z)(t).map(e=>{if(a.isValidElement(e)){let{key:t,props:n}=e,o=n||{},{tab:r}=o,i=v(o,["tab"]),a=Object.assign(Object.assign({key:String(t)},i),{label:r});return a}return null});return n.filter(e=>e)}(O,k),X=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{})).tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},b),{motionName:(0,g.m)(e,"switch")})),t}(N,S),H=(0,f.Z)(s),W=Object.assign(Object.assign({},null==T?void 0:T.style),_);return B(a.createElement(u.default,Object.assign({direction:E,getPopupContainer:L,moreTransitionName:`${Z}-slide-up`},C,{items:D,className:p()({[`${N}-${H}`]:H,[`${N}-card`]:["card","editable-card"].includes(n),[`${N}-editable-card`]:"editable-card"===n,[`${N}-centered`]:y},null==T?void 0:T.className,i,l,M),popupClassName:p()(w,M),style:W,editable:t,moreIcon:R,prefixCls:N,animated:X})))};T.TabPane=()=>null;var I=T}}]);