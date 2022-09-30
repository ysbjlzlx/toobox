"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[911],{86015:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(95266),o=t(72406),l=t(81107),r=t(40301),u=t(63313),s=t(70865),c=t.n(s),i=t(55151),f=t(72075);function d(e){var n=e.content,t=(e.onSuccess,(0,i.useRef)(null)),s=(0,i.useState)(!1),d=(0,a.Z)(s,2),Z=d[0],h=d[1];return(0,i.useEffect)((function(){if(t.current){var e=new(c())(t.current);e.on("success",(function(e){h(!0)})),e.on("error",(function(e){console.error(e)}))}}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{position:"end",children:(0,f.jsx)(r.Z,{ref:t,"data-clipboard-text":n,"aria-label":"Copy content",children:(0,f.jsx)(o.Z,{})})}),(0,f.jsx)(u.Z,{open:Z,onClose:function(){return h(!1)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}},56834:function(e,n,t){var a=t(86068),o=t(81107),l=t(40301),r=t(72075);n.Z=function(e){var n=e.onClick;return(0,r.jsx)(o.Z,{position:"end",children:(0,r.jsx)(l.Z,{"aria-label":"Refresh hex",onClick:n,children:(0,r.jsx)(a.Z,{})})})}},57911:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(79105),o=t(95266),l=t(36330),r=t(92919),u=t(98618),s=t(36202),c=t(19418),i=t(67939),f=t(27810),d=t(55151),Z=(0,t(46094).ZP)("div")({position:"relative",padding:"24px",margin:"auto",border:"1px solid rgba(0, 0, 0, 0.12)",borderRadius:"10px"}),h=t(86015),v=t(56834),x=t(48171);function b(e,n){var t=Math.ceil(e),a=Math.floor(n);return Math.floor(Math.random()*(a-t))+t}var j=["0","1","2","3","4","5","6","7","8","9"],p=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],C=function(e){var n=e.length,t=void 0===n?8:n,a=e.numeric,o=void 0===a||a,l=e.lowercase,r=void 0===l||l,u=e.uppercase,s=void 0===u||u,c=e.symbol,i=void 0!==c&&c,f=e.symbolChars,d=void 0===f?"!@#$%^&*":f;if("undefined"===typeof t||null===t||t<=0)return"";var Z=[];if(o&&(Z=Z.concat(j)),r&&(Z=Z.concat(p)),s&&(Z=Z.concat(m)),i&&d&&(Z=Z.concat(d.split(""))),Z.length<1)return"";x.shuffle(Z);for(var h="",v=0;v<t;v++)h+=Z[b(0,Z.length)];return h},g=t(72075);function k(){var e=(0,d.useState)(""),n=(0,o.Z)(e,2),t=n[0],x=n[1],b=(0,d.useState)(!0),j=(0,o.Z)(b,2),p=j[0],m=j[1],k=(0,d.useState)(!0),S=(0,o.Z)(k,2),y=S[0],w=S[1],M=(0,d.useState)(!0),P=(0,o.Z)(M,2),E=P[0],R=P[1],z=(0,d.useState)(!1),A=(0,o.Z)(z,2),D=A[0],F=A[1],H=(0,d.useState)(8),I=(0,o.Z)(H,2),L=I[0],V=I[1],W=(0,d.useState)("!@#$%^&*"),$=(0,o.Z)(W,2),q=$[0],B=$[1],G=(0,d.useState)({}),J=(0,o.Z)(G,2),K=J[0],N=J[1];(0,d.useEffect)((function(){N({length:L,numeric:p,lowercase:E,uppercase:y,symbol:D,symbolChars:q})}),[L,p,E,y,D,q]);var O=function(){var e=C(K);x(e)};(0,d.useEffect)(O,[L,p,y,E,D,q,K]);var Q={inputProps:{"aria-label":"Checkbox"}};return(0,g.jsx)(l.Z,{children:(0,g.jsxs)(Z,{sx:{mt:2},children:[(0,g.jsxs)(r.Z,{row:!0,children:[(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,a.Z)((0,a.Z)({},Q),{},{defaultChecked:!0})),label:"\u6570\u5b57 0 \uff5e 9",value:p,onChange:function(){m(!p)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,a.Z)((0,a.Z)({},Q),{},{defaultChecked:!0})),label:"\u5c0f\u5199\u5b57\u6bcd a ~ z",value:E,onChange:function(){R(!E)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,a.Z)((0,a.Z)({},Q),{},{defaultChecked:!0})),label:"\u5927\u5199\u5b57\u6bcd A ~ Z",value:y,onChange:function(){w(!y)}}),(0,g.jsx)(u.Z,{control:(0,g.jsx)(s.Z,(0,a.Z)({},Q)),label:"\u7b26\u53f7",value:D,onChange:function(){F(!D)}}),(0,g.jsx)(c.Z,{label:"\u7b26\u53f7",value:q,onChange:function(e){B(e.target.value)},size:"small"})]}),(0,g.jsx)(i.Z,{sx:{mt:3},children:(0,g.jsx)(f.ZP,{defaultValue:8,valueLabelDisplay:"on",value:L,min:6,max:64,step:1,marks:[{value:6,label:"6"},{value:8,label:"8"},{value:16,label:"16"},{value:32,label:"32"},{value:64,label:"64"}],onChange:function(e,n){"number"===typeof n&&V(n)}})}),(0,g.jsx)(i.Z,{sx:{mt:2},children:(0,g.jsx)(c.Z,{variant:"outlined",label:"\u968f\u673a\u7ed3\u679c",value:t,InputProps:{endAdornment:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{onClick:O}),(0,g.jsx)(h.Z,{content:t})]})},onChange:function(e){x(e.target.value)},fullWidth:!0})})]})})}}}]);
//# sourceMappingURL=911.00a406af.chunk.js.map