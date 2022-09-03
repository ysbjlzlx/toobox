(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[768],{91675:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(29439),i=n(35759),o=n(38254),s=n(13811),u=n(11647),a=n(50033),c=n.n(a),f=n(72791),h=n(80184);function l(t){var e=t.content,n=(t.onSuccess,(0,f.useRef)(null)),a=(0,f.useState)(!1),l=(0,r.Z)(a,2),d=l[0],g=l[1];return(0,f.useEffect)((function(){if(n.current){var t=new(c())(n.current);t.on("success",(function(t){g(!0)})),t.on("error",(function(t){console.error(t)}))}}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{position:"end",children:(0,h.jsx)(s.Z,{ref:n,"data-clipboard-text":e,"aria-label":"Copy content",children:(0,h.jsx)(i.Z,{})})}),(0,h.jsx)(u.Z,{open:d,onClose:function(){return g(!1)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}},97491:function(t,e,n){"use strict";var r=n(33439),i=n(38254),o=n(13811),s=n(80184);e.Z=function(t){var e=t.onClick;return(0,s.jsx)(i.Z,{position:"end",children:(0,s.jsx)(o.Z,{"aria-label":"Refresh hex",onClick:e,children:(0,s.jsx)(r.Z,{})})})}},28768:function(t,e,n){"use strict";n.r(e);var r=n(29439),i=n(476),o=n(4565),s=n(96015),u=n(75017),a=n(76633),c=n.n(a),f=n(72791),h=n(91675),l=n(97491),d=n(80184);e.default=function(){var t=(0,f.useState)(""),e=(0,r.Z)(t,2),n=e[0],a=e[1];(0,f.useEffect)((function(){g()}),[]);var g=function(){a(c()().toHexString())};return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(o.Z,{variant:"h2",children:"BSON ObjectID"}),(0,d.jsx)(s.Z,{sx:{mt:2},children:(0,d.jsx)(u.Z,{label:"hex",value:n,fullWidth:!0,InputProps:{endAdornment:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{onClick:g}),(0,d.jsx)(h.Z,{content:n})]})}})})]})}},33439:function(t,e,n){"use strict";var r=n(81245),i=n(80184);e.Z=(0,r.Z)((0,i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh")},76633:function(t){for(var e=Math.floor(16777215*Math.random()),n=c.index=parseInt(16777215*Math.random(),10),r=("undefined"===typeof process||"number"!==typeof process.pid?Math.floor(1e5*Math.random()):process.pid)%65535,i=function(t){return!(null==t||!t.constructor||"function"!==typeof t.constructor.isBuffer||!t.constructor.isBuffer(t))},o=[],s=0;s<256;s++)o[s]=(s<=15?"0":"")+s.toString(16);var u=new RegExp("^[0-9a-fA-F]{24}$"),a=[];for(s=0;s<10;)a[48+s]=s++;for(;s<16;)a[55+s]=a[87+s]=s++;function c(t){if(!(this instanceof c))return new c(t);if(t&&(t instanceof c||"ObjectID"===t._bsontype))return t;if(this._bsontype="ObjectID",null!=t&&"number"!==typeof t){var e=c.isValid(t);if(!e&&null!=t)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(e&&"string"===typeof t&&24===t.length)return c.createFromHexString(t);if(null==t||12!==t.length){if(null!=t&&"function"===typeof t.toHexString)return t;throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")}this.id=t}else this.id=this.generate(t)}t.exports=c,c.default=c,c.createFromTime=function(t){return t=parseInt(t,10)%4294967295,new c((e=8,((n=(n=t).toString(16)).length===e?n:"00000000".substring(n.length,e)+n)+"0000000000000000"));var e,n},c.createFromHexString=function(t){if("undefined"===typeof t||null!=t&&24!==t.length)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");for(var e="",n=0;n<24;)e+=String.fromCharCode(a[t.charCodeAt(n++)]<<4|a[t.charCodeAt(n++)]);return new c(e)},c.isValid=function(t){return null!=t&&("number"===typeof t||("string"===typeof t?12===t.length||24===t.length&&u.test(t):t instanceof c||(!!i(t)||"function"===typeof t.toHexString&&(t.id instanceof _Buffer||"string"===typeof t.id)&&(12===t.id.length||24===t.id.length&&u.test(t.id)))))},c.prototype={constructor:c,toHexString:function(){if(!this.id||!this.id.length)throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is ["+JSON.stringify(this.id)+"]");if(24===this.id.length)return this.id;if(i(this.id))return this.id.toString("hex");for(var t="",e=0;e<this.id.length;e++)t+=o[this.id.charCodeAt(e)];return t},equals:function(t){return t instanceof c?this.toString()===t.toString():"string"===typeof t&&c.isValid(t)&&12===t.length&&i(this.id)?t===this.id.toString("binary"):"string"===typeof t&&c.isValid(t)&&24===t.length?t.toLowerCase()===this.toHexString():"string"===typeof t&&c.isValid(t)&&12===t.length?t===this.id:!(null==t||!(t instanceof c||t.toHexString))&&t.toHexString()===this.toHexString()},getTimestamp:function(){var t,e=new Date;return t=i(this.id)?this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24:this.id.charCodeAt(3)|this.id.charCodeAt(2)<<8|this.id.charCodeAt(1)<<16|this.id.charCodeAt(0)<<24,e.setTime(1e3*Math.floor(t)),e},generate:function(t){"number"!==typeof t&&(t=~~(Date.now()/1e3)),t=parseInt(t,10)%4294967295;var i=n=(n+1)%16777215;return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t,e>>16&255,e>>8&255,255&e,r>>8&255,255&r,i>>16&255,i>>8&255,255&i)}};var f=Symbol&&Symbol.for&&Symbol.for("nodejs.util.inspect.custom")||"inspect";c.prototype[f]=function(){return"ObjectID("+this+")"},c.prototype.toJSON=c.prototype.toHexString,c.prototype.toString=c.prototype.toHexString}}]);
//# sourceMappingURL=768.7c849586.chunk.js.map