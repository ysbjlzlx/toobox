if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-958fa2bd"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App.87accddd.css",revision:null},{url:"assets/App.a1f7baa6.js",revision:null},{url:"assets/Base64.9dbed80b.js",revision:null},{url:"assets/BSONObjectID.e7f9820d.js",revision:null},{url:"assets/Button.64e30e29.js",revision:null},{url:"assets/ButtonGroup.2f360eb1.js",revision:null},{url:"assets/CardContent.9e83ecea.js",revision:null},{url:"assets/Code.4b2499f5.js",revision:null},{url:"assets/CodeFormatter.3dac0645.js",revision:null},{url:"assets/Container.b95bc245.js",revision:null},{url:"assets/ContentCopyAdornment.3780d983.js",revision:null},{url:"assets/DocEditor.55ea9b7e.js",revision:null},{url:"assets/Excel.cac71758.js",revision:null},{url:"assets/ext-searchbox.b1d209ee.js",revision:null},{url:"assets/FormControlLabel.b6fdc4ed.js",revision:null},{url:"assets/Grid.3f3aae6f.js",revision:null},{url:"assets/Hash.efe5858f.js",revision:null},{url:"assets/index.2690614e.js",revision:null},{url:"assets/index.407d9a22.css",revision:null},{url:"assets/index.8ec00933.js",revision:null},{url:"assets/index.93c17c70.js",revision:null},{url:"assets/index.b7b17a20.js",revision:null},{url:"assets/index.e9d08af1.js",revision:null},{url:"assets/InputAdornment.9b9d7c8a.js",revision:null},{url:"assets/JSON.e9578536.js",revision:null},{url:"assets/JSON2Yaml.c7cecca3.js",revision:null},{url:"assets/jsx-runtime_commonjs-proxy.82c9568e.js",revision:null},{url:"assets/Markdown.6aab32e4.js",revision:null},{url:"assets/MenuItem.54756752.js",revision:null},{url:"assets/mode-json.f1af9600.js",revision:null},{url:"assets/PlaceholderImg.b06d3592.js",revision:null},{url:"assets/QrCode.a815103d.js",revision:null},{url:"assets/Random.3b91710d.js",revision:null},{url:"assets/RefreshAdornment.0698cfb1.js",revision:null},{url:"assets/Select.99c6be75.js",revision:null},{url:"assets/TextField.ffb7b0bf.js",revision:null},{url:"assets/theme-textmate.aabf6e1a.js",revision:null},{url:"assets/URL.d2b8b706.js",revision:null},{url:"assets/web-vitals.67dce932.js",revision:null},{url:"index.html",revision:"b5d046e5ed6399be7f14017d3589631f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"d0503a9b182277d9096a283444a82277"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
