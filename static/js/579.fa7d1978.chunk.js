"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[579],{5579:function(t,e,i){i.r(e),i.d(e,{default:function(){return Q}});var l=i(9439),o=i(1413),n=i(5987),c=i(4554),h=i(1614),r=i(1889),x=i(4530),a=i(8096),s=i(4925),u=i(7198),d=i(3903),g=i(5228),f=i(3896),b=i(2791),Z=i(1134),p=i(763),C=i.n(p),v=i(964),m=i(184),j={width:150,height:150,suffix:".png",bgColor:"#cccccc",textColor:"#969696",text:""},w=function(t){var e=(0,b.useState)(""),i=(0,l.Z)(e,2),o=i[0],n=i[1],c=(0,b.useState)(j),h=(0,l.Z)(c,2),r=h[0],x=h[1];return(0,b.useEffect)((function(){x((function(e){var i=C().clone(e);return t.width&&t.width>0&&(i.width=t.width),t.height&&t.height>0?i.height=t.height:i.height=j.height,t.suffix&&(i.suffix=t.suffix),t.bgColor&&(i.bgColor=t.bgColor),t.textColor&&(i.textColor=t.textColor),t.text&&""!==t.text?i.text=t.text:i.text="",i}))}),[t]),(0,b.useEffect)((function(){var t,e,i="https://dummyimage.com/".concat(r.width,"x").concat(r.height)+"/".concat(null===(t=r.bgColor)||void 0===t?void 0:t.substring(1),"/").concat(null===(e=r.textColor)||void 0===e?void 0:e.substring(1))+"?text=".concat(encodeURIComponent(r.text||"img"));n(i)}),[r]),(0,m.jsx)(v.Z,{src:o,style:{width:"".concat(r.width,"px"),height:"".concat(r.height,"px")},alt:r.text||"placeholder img"})},S={width:150,height:150,suffix:".png",bgColor:"#cccccc",textColor:"#969696",text:""},y=function(t){var e=(0,b.useState)(""),i=(0,l.Z)(e,2),o=i[0],n=i[1],c=(0,b.useState)(S),h=(0,l.Z)(c,2),r=h[0],x=h[1];return(0,b.useEffect)((function(){x((function(e){var i=C().clone(e);return t.width&&t.width>0&&(i.width=t.width),t.height&&t.height>0?i.height=t.height:i.height=S.height,t.suffix&&(i.suffix=t.suffix),t.bgColor&&(i.bgColor=t.bgColor),t.textColor&&(i.textColor=t.textColor),t.text&&""!==t.text?i.text=t.text:i.text="",i}))}),[t]),(0,b.useEffect)((function(){var t,e,i="https://iph.href.lu/".concat(r.width,"x").concat(r.height)+"?bg=".concat(null===(t=r.bgColor)||void 0===t?void 0:t.substring(1))+"&fg=".concat(null===(e=r.textColor)||void 0===e?void 0:e.substring(1))+"&text=".concat(encodeURIComponent(r.text||"img"));n(i)}),[r]),(0,m.jsx)(v.Z,{src:o,style:{width:"".concat(r.width,"px"),height:"".concat(r.height,"px")},alt:r.text||"placeholder img"})},P={width:150,height:150,suffix:".png",bgColor:"#cccccc",textColor:"#969696",text:""},E=function(t){var e=(0,b.useState)(""),i=(0,l.Z)(e,2),o=i[0],n=i[1],c=(0,b.useState)(P),h=(0,l.Z)(c,2),r=h[0],x=h[1];return(0,b.useEffect)((function(){x((function(e){var i=C().clone(e);return t.width&&t.width>0&&(i.width=t.width),t.height&&t.height>0?i.height=t.height:i.height=P.height,t.suffix&&(i.suffix=t.suffix),t.bgColor&&(i.bgColor=t.bgColor),t.textColor&&(i.textColor=t.textColor),t.text&&""!==t.text?i.text=t.text:i.text="",i}))}),[t]),(0,b.useEffect)((function(){var t,e,i="https://via.placeholder.com/".concat(r.width,"x").concat(r.height)+"/".concat(null===(t=r.bgColor)||void 0===t?void 0:t.substring(1),"/").concat(null===(e=r.textColor)||void 0===e?void 0:e.substring(1))+"?text=".concat(encodeURIComponent(r.text||"img"))+r.suffix;n(i)}),[r]),(0,m.jsx)(v.Z,{src:o,style:{width:"".concat(r.width,"px"),height:"".concat(r.height,"px")},alt:r.text||"placeholder img"})},W=["children","value","index"],k={width:320,height:320,suffix:".png",bgColor:"#cccccc",textColor:"#969696",text:"img"},I=[{label:".png",value:".png"},{label:".jpg",value:".jpg"},{label:".gif",value:".gif"}];function R(t){var e=t.children,i=t.value,l=t.index,h=(0,n.Z)(t,W);return(0,m.jsx)("div",(0,o.Z)((0,o.Z)({role:"tabpanel",hidden:i!==l,id:"simple-tabpanel-".concat(l),"aria-labelledby":"simple-tab-".concat(l)},h),{},{children:i===l&&(0,m.jsx)(c.Z,{sx:{p:3},children:e})}))}function U(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}var Q=function(){var t=(0,b.useState)(0),e=(0,l.Z)(t,2),i=e[0],n=e[1],p=(0,b.useState)(k),C=(0,l.Z)(p,2),v=C[0],j=C[1],S=(0,Z.cI)({defaultValues:k}),P=S.register,W=S.handleSubmit,Q=S.control;return(0,m.jsxs)(h.Z,{sx:{mt:2},children:[(0,m.jsxs)("form",{onChange:W(j),children:[(0,m.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(x.Z,(0,o.Z)({type:"number",label:"\u5bbd\u5ea6",fullWidth:!0},P("width")))}),(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(x.Z,(0,o.Z)({type:"number",label:"\u9ad8\u5ea6",fullWidth:!0},P("height")))}),(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(Z.Qr,{name:"suffix",control:Q,render:function(t){var e=t.field;return(0,m.jsxs)(a.Z,{fullWidth:!0,children:[(0,m.jsx)(s.Z,{children:"\u540e\u7f00\u540d"}),(0,m.jsx)(u.Z,(0,o.Z)((0,o.Z)({},e),{},{label:"\u540e\u7f00\u540d",onChange:function(t){j((0,o.Z)((0,o.Z)({},v),{},{suffix:t.target.value}))},children:I.map((function(t){return(0,m.jsx)(d.Z,{value:t.value,children:t.label},t.label)}))}))]})}})})]}),(0,m.jsxs)(r.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(x.Z,(0,o.Z)((0,o.Z)({label:"\u80cc\u666f\u989c\u8272",fullWidth:!0},P("bgColor")),{},{disabled:!0}))}),(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(x.Z,(0,o.Z)((0,o.Z)({label:"\u6587\u672c\u989c\u8272",fullWidth:!0},P("textColor")),{},{disabled:!0}))}),(0,m.jsx)(r.ZP,{item:!0,xs:4,children:(0,m.jsx)(x.Z,(0,o.Z)({label:"\u6587\u672c",fullWidth:!0},P("text")))})]})]}),(0,m.jsxs)(c.Z,{children:[(0,m.jsxs)(g.Z,{value:i,onChange:function(t,e){return n(e)},"aria-label":"basic tabs example",children:[(0,m.jsx)(f.Z,(0,o.Z)({label:"iph.href.lu"},U(0))),(0,m.jsx)(f.Z,(0,o.Z)({label:"via.placeholder.com"},U(1))),(0,m.jsx)(f.Z,(0,o.Z)({label:"dummyimage.com"},U(2)))]}),(0,m.jsx)(R,{value:i,index:0,children:(0,m.jsx)(y,(0,o.Z)({},v))}),(0,m.jsx)(R,{value:i,index:1,children:(0,m.jsx)(E,(0,o.Z)({},v))}),(0,m.jsx)(R,{value:i,index:2,children:(0,m.jsx)(w,(0,o.Z)({},v))})]})]})}}}]);
//# sourceMappingURL=579.fa7d1978.chunk.js.map