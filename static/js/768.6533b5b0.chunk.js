(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[768],{1675:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(9439),i=n(5759),o=n(3466),s=n(3400),a=n(5646),f=n(2791),u=n(8029),c=n(184);function h(t){var e=t.content,n=t.onCopy,h=(0,f.useState)(!1),d=(0,r.Z)(h,2),l=d[0],g=d[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.CopyToClipboard,{text:e,onCopy:function(t,e){g(!0),n&&n(t,e)},children:(0,c.jsx)(o.Z,{position:"end",children:(0,c.jsx)(s.Z,{"aria-label":"Copy content",children:(0,c.jsx)(i.Z,{})})})}),(0,c.jsx)(a.Z,{open:l,onClose:function(){g(!l)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}},7491:function(t,e,n){"use strict";var r=n(3439),i=n(3466),o=n(3400),s=n(184);e.Z=function(t){var e=t.onClick;return(0,s.jsx)(i.Z,{position:"end",children:(0,s.jsx)(o.Z,{"aria-label":"Refresh hex",onClick:e,children:(0,s.jsx)(r.Z,{})})})}},8768:function(t,e,n){"use strict";n.r(e);var r=n(9439),i=n(1614),o=n(890),s=n(4554),a=n(4530),f=n(1300),u=n.n(f),c=n(2791),h=n(1675),d=n(7491),l=n(184);e.default=function(){var t=(0,c.useState)(""),e=(0,r.Z)(t,2),n=e[0],f=e[1];(0,c.useEffect)((function(){g()}),[]);var g=function(){f(u()().toHexString())};return(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{variant:"h2",children:"BSON ObjectID"}),(0,l.jsx)(s.Z,{sx:{mt:2},children:(0,l.jsx)(a.Z,{label:"hex",value:n,fullWidth:!0,InputProps:{endAdornment:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Z,{onClick:g}),(0,l.jsx)(h.Z,{content:n})]})}})})]})}},3439:function(t,e,n){"use strict";var r=n(6189),i=n(184);e.Z=(0,r.Z)((0,i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh")},1300:function(t){for(var e=Math.floor(16777215*Math.random()),n=u.index=parseInt(16777215*Math.random(),10),r=("undefined"===typeof process||"number"!==typeof process.pid?Math.floor(1e5*Math.random()):process.pid)%65535,i=function(t){return!(null==t||!t.constructor||"function"!==typeof t.constructor.isBuffer||!t.constructor.isBuffer(t))},o=[],s=0;s<256;s++)o[s]=(s<=15?"0":"")+s.toString(16);var a=new RegExp("^[0-9a-fA-F]{24}$"),f=[];for(s=0;s<10;)f[48+s]=s++;for(;s<16;)f[55+s]=f[87+s]=s++;function u(t){if(!(this instanceof u))return new u(t);if(t&&(t instanceof u||"ObjectID"===t._bsontype))return t;if(this._bsontype="ObjectID",null!=t&&"number"!==typeof t){var e=u.isValid(t);if(!e&&null!=t)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(e&&"string"===typeof t&&24===t.length)return u.createFromHexString(t);if(null==t||12!==t.length){if(null!=t&&"function"===typeof t.toHexString)return t;throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")}this.id=t}else this.id=this.generate(t)}t.exports=u,u.default=u,u.createFromTime=function(t){return t=parseInt(t,10)%4294967295,new u((e=8,((n=(n=t).toString(16)).length===e?n:"00000000".substring(n.length,e)+n)+"0000000000000000"));var e,n},u.createFromHexString=function(t){if("undefined"===typeof t||null!=t&&24!==t.length)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");for(var e="",n=0;n<24;)e+=String.fromCharCode(f[t.charCodeAt(n++)]<<4|f[t.charCodeAt(n++)]);return new u(e)},u.isValid=function(t){return null!=t&&("number"===typeof t||("string"===typeof t?12===t.length||24===t.length&&a.test(t):t instanceof u||(!!i(t)||"function"===typeof t.toHexString&&(t.id instanceof _Buffer||"string"===typeof t.id)&&(12===t.id.length||24===t.id.length&&a.test(t.id)))))},u.prototype={constructor:u,toHexString:function(){if(!this.id||!this.id.length)throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is ["+JSON.stringify(this.id)+"]");if(24===this.id.length)return this.id;if(i(this.id))return this.id.toString("hex");for(var t="",e=0;e<this.id.length;e++)t+=o[this.id.charCodeAt(e)];return t},equals:function(t){return t instanceof u?this.toString()===t.toString():"string"===typeof t&&u.isValid(t)&&12===t.length&&i(this.id)?t===this.id.toString("binary"):"string"===typeof t&&u.isValid(t)&&24===t.length?t.toLowerCase()===this.toHexString():"string"===typeof t&&u.isValid(t)&&12===t.length?t===this.id:!(null==t||!(t instanceof u||t.toHexString))&&t.toHexString()===this.toHexString()},getTimestamp:function(){var t,e=new Date;return t=i(this.id)?this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24:this.id.charCodeAt(3)|this.id.charCodeAt(2)<<8|this.id.charCodeAt(1)<<16|this.id.charCodeAt(0)<<24,e.setTime(1e3*Math.floor(t)),e},generate:function(t){"number"!==typeof t&&(t=~~(Date.now()/1e3)),t=parseInt(t,10)%4294967295;var i=n=(n+1)%16777215;return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t,e>>16&255,e>>8&255,255&e,r>>8&255,255&r,i>>16&255,i>>8&255,255&i)}};var c=Symbol&&Symbol.for&&Symbol.for("nodejs.util.inspect.custom")||"inspect";u.prototype[c]=function(){return"ObjectID("+this+")"},u.prototype.toJSON=u.prototype.toHexString,u.prototype.toString=u.prototype.toHexString}}]);
//# sourceMappingURL=768.6533b5b0.chunk.js.map