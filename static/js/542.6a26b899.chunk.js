"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[542],{1675:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(9439),o=a(5759),l=a(3466),r=a(3400),u=a(5646),s=a(2791),i=a(8029),c=a(184);function d(e){var n=e.content,a=e.onCopy,d=(0,s.useState)(!1),f=(0,t.Z)(d,2),Z=f[0],h=f[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.CopyToClipboard,{text:n,onCopy:function(e,n){h(!0),a&&a(e,n)},children:(0,c.jsx)(l.Z,{position:"end",children:(0,c.jsx)(r.Z,{"aria-label":"Copy content",children:(0,c.jsx)(o.Z,{})})})}),(0,c.jsx)(u.Z,{open:Z,onClose:function(){h(!Z)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}},7491:function(e,n,a){var t=a(3439),o=a(3466),l=a(3400),r=a(184);n.Z=function(e){var n=e.onClick;return(0,r.jsx)(o.Z,{position:"end",children:(0,r.jsx)(l.Z,{"aria-label":"Refresh hex",onClick:n,children:(0,r.jsx)(t.Z,{})})})}},542:function(e,n,a){a.r(n),a.d(n,{default:function(){return k}});var t=a(1413),o=a(9439),l=a(1614),r=a(9012),u=a(5523),s=a(9174),i=a(4530),c=a(4554),d=a(6633),f=a(2791),Z=(0,a(6934).ZP)("div")({position:"relative",padding:"24px",margin:"auto",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"10px"}),h=a(1675),x=a(7491),v=a(763);function b(e,n){var a=Math.ceil(e),t=Math.floor(n);return Math.floor(Math.random()*(t-a))+a}var p=["0","1","2","3","4","5","6","7","8","9"],j=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],C=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],m=function(e){var n=e.length,a=void 0===n?8:n,t=e.numeric,o=void 0===t||t,l=e.lowercase,r=void 0===l||l,u=e.uppercase,s=void 0===u||u,i=e.symbol,c=void 0!==i&&i,d=e.symbolChars,f=void 0===d?"!@#$%^&*":d;if("undefined"===typeof a||null===a||a<=0)return"";var Z=[];if(o&&(Z=Z.concat(p)),r&&(Z=Z.concat(j)),s&&(Z=Z.concat(C)),c&&f&&(Z=Z.concat(f.split(""))),Z.length<1)return"";v.shuffle(Z);for(var h="",x=0;x<a;x++)h+=Z[b(0,Z.length)];return h},g=a(184);function k(){var e=(0,f.useState)(""),n=(0,o.Z)(e,2),a=n[0],v=n[1],b=(0,f.useState)(!0),p=(0,o.Z)(b,2),j=p[0],C=p[1],k=(0,f.useState)(!0),y=(0,o.Z)(k,2),S=y[0],w=y[1],M=(0,f.useState)(!0),P=(0,o.Z)(M,2),z=P[0],A=P[1],D=(0,f.useState)(!1),E=(0,o.Z)(D,2),F=E[0],R=E[1],H=(0,f.useState)(8),I=(0,o.Z)(H,2),L=I[0],T=I[1],V=(0,f.useState)("!@#$%^&*"),W=(0,o.Z)(V,2),$=W[0],q=W[1],B=(0,f.useState)({}),G=(0,o.Z)(B,2),J=G[0],K=G[1];(0,f.useEffect)((function(){K({length:L,numeric:j,lowercase:z,uppercase:S,symbol:F,symbolChars:$})}),[L,j,z,S,F,$]);var N=function(){var e=m(J);v(e)};(0,f.useEffect)(N,[L,j,S,z,F,$,J]);var O={inputProps:{"aria-label":"Checkbox"}};return(0,g.jsx)(l.Z,{children:(0,g.jsxs)(Z,{sx:{mt:2},children:[(0,g.jsxs)(r.Z,{row:!0,children:[(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,t.Z)((0,t.Z)({},O),{},{defaultChecked:!0})),label:"\u6570\u5b57 0 \uff5e 9",value:j,onChange:function(){C(!j)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,t.Z)((0,t.Z)({},O),{},{defaultChecked:!0})),label:"\u5c0f\u5199\u5b57\u6bcd a ~ z",value:z,onChange:function(){A(!z)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,t.Z)((0,t.Z)({},O),{},{defaultChecked:!0})),label:"\u5927\u5199\u5b57\u6bcd A ~ Z",value:S,onChange:function(){w(!S)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,t.Z)({},O)),label:"\u7b26\u53f7",value:F,onChange:function(){R(!F)}}),(0,g.jsx)(i.Z,{label:"\u7b26\u53f7",value:$,onChange:function(e){q(e.target.value)},size:"small"})]}),(0,g.jsx)(c.Z,{sx:{mt:3},children:(0,g.jsx)(d.ZP,{defaultValue:8,valueLabelDisplay:"on",value:L,min:6,max:64,step:1,marks:[{value:6,label:"6"},{value:8,label:"8"},{value:16,label:"16"},{value:32,label:"32"},{value:64,label:"64"}],onChange:function(e,n){"number"===typeof n&&T(n)}})}),(0,g.jsx)(c.Z,{sx:{mt:2},children:(0,g.jsx)(i.Z,{variant:"outlined",label:"\u968f\u673a\u7ed3\u679c",value:a,InputProps:{endAdornment:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.Z,{onClick:N}),(0,g.jsx)(h.Z,{content:a})]})},onChange:function(e){v(e.target.value)},fullWidth:!0})})]})})}}}]);
//# sourceMappingURL=542.6a26b899.chunk.js.map