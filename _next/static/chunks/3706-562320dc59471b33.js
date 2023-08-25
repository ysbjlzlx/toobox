"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3706],{93706:function(e,n,t){t.d(n,{iz:function(){return eT},ck:function(){return ev},BW:function(){return eD},sN:function(){return ev},Wd:function(){return eP},ZP:function(){return eF},Xl:function(){return N}});var r=t(13428),o=t(21076),i=t(10870),l=t(16141),u=t(98961),a=t(12258),c=t(54440),s=t.n(c),f=t(62944),d=t(73310),v=t(54812),p=t(2265),m=t(54887),b=t(41595),h=p.createContext(null);function y(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function Z(e){return y(p.useContext(h),e)}var C=t(69320),g=["children","locked"],E=p.createContext(null);function M(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,g),o=p.useContext(E),l=(0,C.Z)(function(){var e;return e=(0,i.Z)({},o),Object.keys(r).forEach(function(n){var t=r[n];void 0!==t&&(e[n]=t)}),e},[o,r],function(e,n){return!t&&(e[0]!==n[0]||!(0,b.Z)(e[1],n[1],!0))});return p.createElement(E.Provider,{value:l},n)}var w=p.createContext(null);function k(){return p.useContext(w)}var I=p.createContext([]);function N(e){var n=p.useContext(I);return p.useMemo(function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n},[n,e])}var x=p.createContext(null),K=p.createContext({}),P=t(89017),S=t(43197),R=t(42120);function A(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,R.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),l=null;return o&&!Number.isNaN(i)?l=i:r&&null===l&&(l=0),r&&e.disabled&&(l=null),null!==l&&(l>=0||n&&l<0)}return!1}var O=P.Z.LEFT,D=P.Z.RIGHT,T=P.Z.UP,L=P.Z.DOWN,_=P.Z.ENTER,z=P.Z.ESC,V=P.Z.HOME,F=P.Z.END,j=[T,L,O,D];function B(e,n){return(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,l.Z)(e.querySelectorAll("*")).filter(function(e){return A(e,n)});return A(e,n)&&t.unshift(e),t})(e,!0).filter(function(e){return n.has(e)})}function W(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=B(e,n),i=o.length,l=o.findIndex(function(e){return t===e});return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}var q="__RC_UTIL_PATH_SPLIT__",H=function(e){return e.join(q)},G="rc-menu-more";function U(e){var n=p.useRef(e);n.current=e;var t=p.useCallback(function(){for(var e,t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))},[]);return e?t:void 0}var X=Math.random().toFixed(5).toString().slice(2),Y=0,J=t(49034),Q=t(88755),$=t(75904),ee=t(20994),en=t(54925),et=t(17146);function er(e,n,t,r){var o=p.useContext(E),i=o.activeKey,l=o.onActive,u=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),l(e)},a.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),u(e)}),a}function eo(e){var n=p.useContext(E),t=n.mode,r=n.rtl,o=n.inlineIndent;return"inline"!==t?null:r?{paddingRight:e*o}:{paddingLeft:e*o}}function ei(e){var n=e.icon,t=e.props,r=e.children;return("function"==typeof n?p.createElement(n,(0,i.Z)({},t)):n)||r||null}var el=["item"];function eu(e){var n=e.item,t=(0,a.Z)(e,el);return Object.defineProperty(t,"item",{get:function(){return(0,v.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var ea=["title","attribute","elementRef"],ec=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],es=["active"],ef=function(e){(0,$.Z)(t,e);var n=(0,ee.Z)(t);function t(){return(0,J.Z)(this,t),n.apply(this,arguments)}return(0,Q.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,ea),l=(0,en.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,v.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(f.Z.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},l,{ref:o}))}}]),t}(p.Component),ed=p.forwardRef(function(e,n){var t,u=e.style,c=e.className,f=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,m=e.children,b=e.role,h=e.onMouseEnter,y=e.onMouseLeave,C=e.onClick,g=e.onKeyDown,M=e.onFocus,w=(0,a.Z)(e,ec),k=Z(f),I=p.useContext(E),x=I.prefixCls,S=I.onItemClick,R=I.disabled,A=I.overflowDisabled,O=I.itemIcon,D=I.selectedKeys,T=I.onActive,L=p.useContext(K)._internalRenderMenuItem,_="".concat(x,"-item"),z=p.useRef(),V=p.useRef(),F=R||d,j=(0,et.x1)(n,V),B=N(f),W=function(e){return{key:f,keyPath:(0,l.Z)(B).reverse(),item:z.current,domEvent:e}},q=er(f,F,h,y),H=q.active,G=(0,a.Z)(q,es),U=D.includes(f),X=eo(B.length),Y={};"option"===e.role&&(Y["aria-selected"]=U);var J=p.createElement(ef,(0,r.Z)({ref:z,elementRef:j,role:null===b?"none":b||"menuitem",tabIndex:d?null:-1,"data-menu-id":A&&k?null:k},w,G,Y,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},X),u),className:s()(_,(t={},(0,o.Z)(t,"".concat(_,"-active"),H),(0,o.Z)(t,"".concat(_,"-selected"),U),(0,o.Z)(t,"".concat(_,"-disabled"),F),t),c),onClick:function(e){if(!F){var n=W(e);null==C||C(eu(n)),S(n)}},onKeyDown:function(e){if(null==g||g(e),e.which===P.Z.ENTER){var n=W(e);null==C||C(eu(n)),S(n)}},onFocus:function(e){T(f),null==M||M(e)}}),m,p.createElement(ei,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:U}),icon:v||O}));return L&&(J=L(J,e,{selected:U})),J}),ev=p.forwardRef(function(e,n){var t=e.eventKey,o=k(),i=N(t);return(p.useEffect(function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}},[i]),o)?null:p.createElement(ed,(0,r.Z)({},e,{ref:n}))}),ep=["className","children"],em=p.forwardRef(function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,ep),l=p.useContext(E),u=l.prefixCls,c=l.mode,f=l.rtl;return p.createElement("ul",(0,r.Z)({className:s()(u,f&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)});em.displayName="SubMenuList";var eb=t(79173);function eh(e,n){return(0,eb.Z)(e).map(function(e,t){if(p.isValidElement(e)){var r,o,i=e.key,u=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==u&&(u="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var a={key:u,eventKey:u};return p.cloneElement(e,a)}return e})}var ey=t(16758),eZ={adjustX:1,adjustY:1},eC={topLeft:{points:["bl","tl"],overflow:eZ},topRight:{points:["br","tr"],overflow:eZ},bottomLeft:{points:["tl","bl"],overflow:eZ},bottomRight:{points:["tr","br"],overflow:eZ},leftTop:{points:["tr","tl"],overflow:eZ},leftBottom:{points:["br","bl"],overflow:eZ},rightTop:{points:["tl","tr"],overflow:eZ},rightBottom:{points:["bl","br"],overflow:eZ}},eg={topLeft:{points:["bl","tl"],overflow:eZ},topRight:{points:["br","tr"],overflow:eZ},bottomLeft:{points:["tl","bl"],overflow:eZ},bottomRight:{points:["tr","br"],overflow:eZ},rightTop:{points:["tr","tl"],overflow:eZ},rightBottom:{points:["br","bl"],overflow:eZ},leftTop:{points:["tl","tr"],overflow:eZ},leftBottom:{points:["bl","br"],overflow:eZ}};function eE(e,n,t){return n||(t?t[e]||t.other:void 0)}var eM={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ew(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,a=e.popupClassName,c=e.popupOffset,f=e.disabled,d=e.mode,v=e.onVisibleChange,m=p.useContext(E),b=m.getPopupContainer,h=m.rtl,y=m.subMenuOpenDelay,Z=m.subMenuCloseDelay,C=m.builtinPlacements,g=m.triggerSubMenuAction,M=m.forceSubMenuRender,w=m.rootClassName,k=m.motion,I=m.defaultMotions,N=p.useState(!1),x=(0,u.Z)(N,2),K=x[0],P=x[1],R=h?(0,i.Z)((0,i.Z)({},eg),C):(0,i.Z)((0,i.Z)({},eC),C),A=eM[d],O=eE(d,k,I),D=p.useRef(O);"inline"!==d&&(D.current=O);var T=(0,i.Z)((0,i.Z)({},D.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),L=p.useRef();return p.useEffect(function(){return L.current=(0,S.Z)(function(){P(t)}),function(){S.Z.cancel(L.current)}},[t]),p.createElement(ey.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),h),a,w),stretch:"horizontal"===d?"minWidth":null,getPopupContainer:b,builtinPlacements:R,popupPlacement:A,popupVisible:K,popup:l,popupAlign:c&&{offset:c},action:f?[]:[g],mouseEnterDelay:y,mouseLeaveDelay:Z,onPopupVisibleChange:v,forceRender:M,popupMotion:T},r)}var ek=t(52640);function eI(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,a="inline",c=p.useContext(E),s=c.prefixCls,f=c.forceSubMenuRender,d=c.motion,v=c.defaultMotions,m=c.mode,b=p.useRef(!1);b.current=m===a;var h=p.useState(!b.current),y=(0,u.Z)(h,2),Z=y[0],C=y[1],g=!!b.current&&t;p.useEffect(function(){b.current&&C(!1)},[m]);var w=(0,i.Z)({},eE(a,d,v));o.length>1&&(w.motionAppear=!1);var k=w.onVisibleChanged;return(w.onVisibleChanged=function(e){return b.current||e||C(!0),null==k?void 0:k(e)},Z)?null:p.createElement(M,{mode:a,locked:!b.current},p.createElement(ek.default,(0,r.Z)({visible:g},w,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(e){var t=e.className,r=e.style;return p.createElement(em,{id:n,className:t,style:r},l)}))}var eN=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ex=["active"],eK=function(e){var n,t=e.style,l=e.className,c=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),m=e.internalPopupClose,b=e.children,h=e.itemIcon,y=e.expandIcon,C=e.popupClassName,g=e.popupOffset,w=e.onClick,k=e.onMouseEnter,I=e.onMouseLeave,P=e.onTitleClick,S=e.onTitleMouseEnter,R=e.onTitleMouseLeave,A=(0,a.Z)(e,eN),O=Z(d),D=p.useContext(E),T=D.prefixCls,L=D.mode,_=D.openKeys,z=D.disabled,V=D.overflowDisabled,F=D.activeKey,j=D.selectedKeys,B=D.itemIcon,W=D.expandIcon,q=D.onItemClick,H=D.onOpenChange,G=D.onActive,X=p.useContext(K)._internalRenderSubMenuItem,Y=p.useContext(x).isSubPathKey,J=N(),Q="".concat(T,"-submenu"),$=z||v,ee=p.useRef(),en=p.useRef(),et=y||W,el=_.includes(d),ea=!V&&el,ec=Y(j,d),es=er(d,$,S,R),ef=es.active,ed=(0,a.Z)(es,ex),ev=p.useState(!1),ep=(0,u.Z)(ev,2),eb=ep[0],eh=ep[1],ey=function(e){$||eh(e)},eZ=p.useMemo(function(){return ef||"inline"!==L&&(eb||Y([F],d))},[L,ef,F,eb,d,Y]),eC=eo(J.length),eg=U(function(e){null==w||w(eu(e)),q(e)}),eE=O&&"".concat(O,"-popup"),eM=p.createElement("div",(0,r.Z)({role:"menuitem",style:eC,className:"".concat(Q,"-title"),tabIndex:$?null:-1,ref:ee,title:"string"==typeof c?c:null,"data-menu-id":V&&O?null:O,"aria-expanded":ea,"aria-haspopup":!0,"aria-controls":eE,"aria-disabled":$,onClick:function(e){$||(null==P||P({key:d,domEvent:e}),"inline"===L&&H(d,!el))},onFocus:function(){G(d)}},ed),c,p.createElement(ei,{icon:"horizontal"!==L?et:null,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:ea,isSubMenu:!0})},p.createElement("i",{className:"".concat(Q,"-arrow")}))),ek=p.useRef(L);if("inline"!==L&&J.length>1?ek.current="vertical":ek.current=L,!V){var eK=ek.current;eM=p.createElement(ew,{mode:eK,prefixCls:Q,visible:!m&&ea&&"inline"!==L,popupClassName:C,popupOffset:g,popup:p.createElement(M,{mode:"horizontal"===eK?"vertical":eK},p.createElement(em,{id:eE,ref:en},b)),disabled:$,onVisibleChange:function(e){"inline"!==L&&H(d,e)}},eM)}var eP=p.createElement(f.Z.Item,(0,r.Z)({role:"none"},A,{component:"li",style:t,className:s()(Q,"".concat(Q,"-").concat(L),l,(n={},(0,o.Z)(n,"".concat(Q,"-open"),ea),(0,o.Z)(n,"".concat(Q,"-active"),eZ),(0,o.Z)(n,"".concat(Q,"-selected"),ec),(0,o.Z)(n,"".concat(Q,"-disabled"),$),n)),onMouseEnter:function(e){ey(!0),null==k||k({key:d,domEvent:e})},onMouseLeave:function(e){ey(!1),null==I||I({key:d,domEvent:e})}}),eM,!V&&p.createElement(eI,{id:eE,open:ea,keyPath:J},b));return X&&(eP=X(eP,e,{selected:ec,active:eZ,open:ea,disabled:$})),p.createElement(M,{onItemClick:eg,mode:"horizontal"===L?"vertical":L,itemIcon:h||B,expandIcon:et},eP)};function eP(e){var n,t=e.eventKey,r=e.children,o=N(t),i=eh(r,o),l=k();return p.useEffect(function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}},[o]),n=l?i:p.createElement(eK,e,i),p.createElement(I.Provider,{value:o},n)}var eS=t(60075),eR=["className","title","eventKey","children"],eA=["children"],eO=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,eR),l=p.useContext(E).prefixCls,u="".concat(l,"-item-group");return p.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(u,n)}),p.createElement("div",{role:"presentation",className:"".concat(u,"-title"),title:"string"==typeof t?t:void 0},t),p.createElement("ul",{role:"group",className:"".concat(u,"-list")},o))};function eD(e){var n=e.children,t=(0,a.Z)(e,eA),r=eh(n,N(t.eventKey));return k()?r:p.createElement(eO,(0,en.Z)(t,["warnKey"]),r)}function eT(e){var n=e.className,t=e.style,r=p.useContext(E).prefixCls;return k()?null:p.createElement("li",{className:s()("".concat(r,"-item-divider"),n),style:t})}var eL=["label","children","key","type"],e_=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],ez=[],eV=p.forwardRef(function(e,n){var t,c,v,Z,C,g,E,k,I,N,P,R,A,J,Q,$,ee,en,et,er,eo,ei,el,ea,ec,es,ef,ed=e.prefixCls,ep=void 0===ed?"rc-menu":ed,em=e.rootClassName,eb=e.style,ey=e.className,eZ=e.tabIndex,eC=e.items,eg=e.children,eE=e.direction,eM=e.id,ew=e.mode,ek=void 0===ew?"vertical":ew,eI=e.inlineCollapsed,eN=e.disabled,ex=e.disabledOverflow,eK=e.subMenuOpenDelay,eR=e.subMenuCloseDelay,eA=e.forceSubMenuRender,eO=e.defaultOpenKeys,eV=e.openKeys,eF=e.activeKey,ej=e.defaultActiveFirst,eB=e.selectable,eW=void 0===eB||eB,eq=e.multiple,eH=void 0!==eq&&eq,eG=e.defaultSelectedKeys,eU=e.selectedKeys,eX=e.onSelect,eY=e.onDeselect,eJ=e.inlineIndent,eQ=e.motion,e$=e.defaultMotions,e0=e.triggerSubMenuAction,e1=e.builtinPlacements,e2=e.itemIcon,e4=e.expandIcon,e5=e.overflowedIndicator,e7=void 0===e5?"...":e5,e9=e.overflowedIndicatorPopupClassName,e3=e.getPopupContainer,e6=e.onClick,e8=e.onOpenChange,ne=e.onKeyDown,nn=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),nt=e._internalRenderSubMenuItem,nr=(0,a.Z)(e,e_),no=p.useMemo(function(){var e;return e=eg,eC&&(e=function e(n){return(n||[]).map(function(n,t){if(n&&"object"===(0,eS.Z)(n)){var o=n.label,i=n.children,l=n.key,u=n.type,c=(0,a.Z)(n,eL),s=null!=l?l:"tmp-".concat(t);return i||"group"===u?"group"===u?p.createElement(eD,(0,r.Z)({key:s},c,{title:o}),e(i)):p.createElement(eP,(0,r.Z)({key:s},c,{title:o}),e(i)):"divider"===u?p.createElement(eT,(0,r.Z)({key:s},c)):p.createElement(ev,(0,r.Z)({key:s},c),o)}return null}).filter(function(e){return e})}(eC)),eh(e,ez)},[eg,eC]),ni=p.useState(!1),nl=(0,u.Z)(ni,2),nu=nl[0],na=nl[1],nc=p.useRef(),ns=(t=(0,d.Z)(eM,{value:eM}),v=(c=(0,u.Z)(t,2))[0],Z=c[1],p.useEffect(function(){Y+=1;var e="".concat(X,"-").concat(Y);Z("rc-menu-uuid-".concat(e))},[]),v),nf="rtl"===eE,nd=(0,d.Z)(eO,{value:eV,postState:function(e){return e||ez}}),nv=(0,u.Z)(nd,2),np=nv[0],nm=nv[1],nb=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){nm(e),null==e8||e8(e)}n?(0,m.flushSync)(t):t()},nh=p.useState(np),ny=(0,u.Z)(nh,2),nZ=ny[0],nC=ny[1],ng=p.useRef(!1),nE=p.useMemo(function(){return("inline"===ek||"vertical"===ek)&&eI?["vertical",eI]:[ek,!1]},[ek,eI]),nM=(0,u.Z)(nE,2),nw=nM[0],nk=nM[1],nI="inline"===nw,nN=p.useState(nw),nx=(0,u.Z)(nN,2),nK=nx[0],nP=nx[1],nS=p.useState(nk),nR=(0,u.Z)(nS,2),nA=nR[0],nO=nR[1];p.useEffect(function(){nP(nw),nO(nk),ng.current&&(nI?nm(nZ):nb(ez))},[nw,nk]);var nD=p.useState(0),nT=(0,u.Z)(nD,2),nL=nT[0],n_=nT[1],nz=nL>=no.length-1||"horizontal"!==nK||ex;p.useEffect(function(){nI&&nC(np)},[np]),p.useEffect(function(){return ng.current=!0,function(){ng.current=!1}},[]);var nV=(C=p.useState({}),g=(0,u.Z)(C,2)[1],E=(0,p.useRef)(new Map),k=(0,p.useRef)(new Map),I=p.useState([]),P=(N=(0,u.Z)(I,2))[0],R=N[1],A=(0,p.useRef)(0),J=(0,p.useRef)(!1),Q=function(){J.current||g({})},$=(0,p.useCallback)(function(e,n){var t=H(n);k.current.set(t,e),E.current.set(e,t),A.current+=1;var r=A.current;Promise.resolve().then(function(){r===A.current&&Q()})},[]),ee=(0,p.useCallback)(function(e,n){var t=H(n);k.current.delete(t),E.current.delete(e)},[]),en=(0,p.useCallback)(function(e){R(e)},[]),et=(0,p.useCallback)(function(e,n){var t=(E.current.get(e)||"").split(q);return n&&P.includes(t[0])&&t.unshift(G),t},[P]),er=(0,p.useCallback)(function(e,n){return e.some(function(e){return et(e,!0).includes(n)})},[et]),eo=(0,p.useCallback)(function(e){var n="".concat(E.current.get(e)).concat(q),t=new Set;return(0,l.Z)(k.current.keys()).forEach(function(e){e.startsWith(n)&&t.add(k.current.get(e))}),t},[]),p.useEffect(function(){return function(){J.current=!0}},[]),{registerPath:$,unregisterPath:ee,refreshOverflowKeys:en,isSubPathKey:er,getKeyPath:et,getKeys:function(){var e=(0,l.Z)(E.current.keys());return P.length&&e.push(G),e},getSubPathKeys:eo}),nF=nV.registerPath,nj=nV.unregisterPath,nB=nV.refreshOverflowKeys,nW=nV.isSubPathKey,nq=nV.getKeyPath,nH=nV.getKeys,nG=nV.getSubPathKeys,nU=p.useMemo(function(){return{registerPath:nF,unregisterPath:nj}},[nF,nj]),nX=p.useMemo(function(){return{isSubPathKey:nW}},[nW]);p.useEffect(function(){nB(nz?ez:no.slice(nL+1).map(function(e){return e.key}))},[nL,nz]);var nY=(0,d.Z)(eF||ej&&(null===(es=no[0])||void 0===es?void 0:es.key),{value:eF}),nJ=(0,u.Z)(nY,2),nQ=nJ[0],n$=nJ[1],n0=U(function(e){n$(e)}),n1=U(function(){n$(void 0)});(0,p.useImperativeHandle)(n,function(){return{list:nc.current,focus:function(e){var n,t,r,o,i=null!=nQ?nQ:null===(n=no.find(function(e){return!e.props.disabled}))||void 0===n?void 0:n.key;i&&(null===(t=nc.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(y(ns,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}});var n2=(0,d.Z)(eG||[],{value:eU,postState:function(e){return Array.isArray(e)?e:null==e?ez:[e]}}),n4=(0,u.Z)(n2,2),n5=n4[0],n7=n4[1],n9=function(e){if(eW){var n,t=e.key,r=n5.includes(t);n7(n=eH?r?n5.filter(function(e){return e!==t}):[].concat((0,l.Z)(n5),[t]):[t]);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null==eY||eY(o):null==eX||eX(o)}!eH&&np.length&&"inline"!==nK&&nb(ez)},n3=U(function(e){null==e6||e6(eu(e)),n9(e)}),n6=U(function(e,n){var t=np.filter(function(n){return n!==e});if(n)t.push(e);else if("inline"!==nK){var r=nG(e);t=t.filter(function(e){return!r.has(e)})}(0,b.Z)(np,t,!0)||nb(t,!0)}),n8=(ei=function(e,n){var t=null!=n?n:!np.includes(e);n6(e,t)},el=p.useRef(),(ea=p.useRef()).current=nQ,ec=function(){S.Z.cancel(el.current)},p.useEffect(function(){return function(){ec()}},[]),function(e){var n=e.which;if([].concat(j,[_,z,V,F]).includes(n)){var t=function(){return a=new Set,c=new Map,s=new Map,nH().forEach(function(e){var n=document.querySelector("[data-menu-id='".concat(y(ns,e),"']"));n&&(a.add(n),s.set(n,e),c.set(e,n))}),a};t();var r=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(c.get(nQ),a),i=s.get(r),l=function(e,n,t,r){var i,l,u,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===_)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,T,c),(0,o.Z)(i,L,s),i),p=(l={},(0,o.Z)(l,O,t?s:c),(0,o.Z)(l,D,t?c:s),(0,o.Z)(l,L,f),(0,o.Z)(l,_,f),l),m=(u={},(0,o.Z)(u,T,c),(0,o.Z)(u,L,s),(0,o.Z)(u,_,f),(0,o.Z)(u,z,d),(0,o.Z)(u,O,t?f:d),(0,o.Z)(u,D,t?d:f),u);switch(null===(a=({inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m})["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(nK,1===nq(i,!0).length,nf,n);if(!l&&n!==V&&n!==F)return;(j.includes(n)||[V,F].includes(n))&&e.preventDefault();var u=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var r=s.get(e);n$(r),ec(),el.current=(0,S.Z)(function(){ea.current===r&&n.focus()})}};if([V,F].includes(n)||l.sibling||!r){var a,c,s,f,d=B(f=r&&"inline"!==nK?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(r):nc.current,a);u(n===V?d[0]:n===F?d[d.length-1]:W(f,a,r,l.offset))}else if(l.inlineTrigger)ei(i);else if(l.offset>0)ei(i,!0),ec(),el.current=(0,S.Z)(function(){t();var e=r.getAttribute("aria-controls");u(W(document.getElementById(e),a))},5);else if(l.offset<0){var v=nq(i,!0),p=v[v.length-2],m=c.get(p);ei(p,!1),u(m)}}null==ne||ne(e)});p.useEffect(function(){na(!0)},[]);var te=p.useMemo(function(){return{_internalRenderMenuItem:nn,_internalRenderSubMenuItem:nt}},[nn,nt]),tn="horizontal"!==nK||ex?no:no.map(function(e,n){return p.createElement(M,{key:e.key,overflowDisabled:n>nL},e)}),tt=p.createElement(f.Z,(0,r.Z)({id:eM,ref:nc,prefixCls:"".concat(ep,"-overflow"),component:"ul",itemComponent:ev,className:s()(ep,"".concat(ep,"-root"),"".concat(ep,"-").concat(nK),ey,(ef={},(0,o.Z)(ef,"".concat(ep,"-inline-collapsed"),nA),(0,o.Z)(ef,"".concat(ep,"-rtl"),nf),ef),em),dir:eE,style:eb,role:"menu",tabIndex:void 0===eZ?0:eZ,data:tn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?no.slice(-n):null;return p.createElement(eP,{eventKey:G,title:e7,disabled:nz,internalPopupClose:0===n,popupClassName:e9},t)},maxCount:"horizontal"!==nK||ex?f.Z.INVALIDATE:f.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){n_(e)},onKeyDown:n8},nr));return p.createElement(K.Provider,{value:te},p.createElement(h.Provider,{value:ns},p.createElement(M,{prefixCls:ep,rootClassName:em,mode:nK,openKeys:np,rtl:nf,disabled:eN,motion:nu?eQ:null,defaultMotions:nu?e$:null,activeKey:nQ,onActive:n0,onInactive:n1,selectedKeys:n5,inlineIndent:void 0===eJ?24:eJ,subMenuOpenDelay:void 0===eK?.1:eK,subMenuCloseDelay:void 0===eR?.1:eR,forceSubMenuRender:eA,builtinPlacements:e1,triggerSubMenuAction:void 0===e0?"hover":e0,getPopupContainer:e3,itemIcon:e2,expandIcon:e4,onItemClick:n3,onOpenChange:n6},p.createElement(x.Provider,{value:nX},tt),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(w.Provider,{value:nU},no)))))});eV.Item=ev,eV.SubMenu=eP,eV.ItemGroup=eD,eV.Divider=eT;var eF=eV}}]);