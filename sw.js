if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Access-de034e56.js",revision:null},{url:"assets/calendar.esm-36d622d2.js",revision:null},{url:"assets/confirmdialog.esm-0964fc28.js",revision:null},{url:"assets/dataview.esm-97d50aa0.js",revision:null},{url:"assets/device-f162a82b.js",revision:null},{url:"assets/dialog.esm-1ce94932.js",revision:null},{url:"assets/dropdown.esm-9cdf464a.js",revision:null},{url:"assets/Edit-06c42490.js",revision:null},{url:"assets/Edit-48d7b75e.css",revision:null},{url:"assets/Edit-61a8b123.js",revision:null},{url:"assets/Edit-6660245a.css",revision:null},{url:"assets/Edit-7ae569f9.js",revision:null},{url:"assets/Edit-cb6990b2.css",revision:null},{url:"assets/EditOffline-576ebc0e.js",revision:null},{url:"assets/EditOffline-97510285.css",revision:null},{url:"assets/Error-a33bd4fe.js",revision:null},{url:"assets/globalStore-0e28fa4f.js",revision:null},{url:"assets/index-0d87f86c.js",revision:null},{url:"assets/index-227c361b.js",revision:null},{url:"assets/Index-53a67170.js",revision:null},{url:"assets/index-896979b7.css",revision:null},{url:"assets/index.esm-a6a413bd.js",revision:null},{url:"assets/index.esm-f963a70d.js",revision:null},{url:"assets/inputtext.esm-85981b17.js",revision:null},{url:"assets/List-120e10ab.css",revision:null},{url:"assets/List-240dc7ce.css",revision:null},{url:"assets/List-30ee9d96.js",revision:null},{url:"assets/List-40f695c5.css",revision:null},{url:"assets/List-912b624d.js",revision:null},{url:"assets/List-b5ca7600.js",revision:null},{url:"assets/List-c39169a7.js",revision:null},{url:"assets/List-e687b846.js",revision:null},{url:"assets/List-ea88e635.css",revision:null},{url:"assets/List-fbe12c23.css",revision:null},{url:"assets/Loading-06509e4c.css",revision:null},{url:"assets/Loading-87622124.js",revision:null},{url:"assets/Login-33a81ef7.css",revision:null},{url:"assets/Login-ba8a7204.js",revision:null},{url:"assets/logo-f7699efc.js",revision:null},{url:"assets/New-8eda52d7.js",revision:null},{url:"assets/New-aa4dbae0.css",revision:null},{url:"assets/New-b85a283b.css",revision:null},{url:"assets/New-c4747581.js",revision:null},{url:"assets/NotFound-c1bb52dd.js",revision:null},{url:"assets/paginator.esm-2893582a.js",revision:null},{url:"assets/password.esm-51eb82ce.js",revision:null},{url:"assets/placeholder-79dc20f5.js",revision:null},{url:"assets/Profile-34a41126.css",revision:null},{url:"assets/Profile-54a3419c.js",revision:null},{url:"assets/radiobutton.esm-8974951a.js",revision:null},{url:"assets/selectbutton.esm-08894e85.js",revision:null},{url:"assets/serverValidation-35937a0f.js",revision:null},{url:"assets/store-1c8556b7.js",revision:null},{url:"assets/store-245bfb61.js",revision:null},{url:"assets/store-68fa6fe6.js",revision:null},{url:"assets/store-efe8f8bf.js",revision:null},{url:"assets/tabpanel.esm-9e66714a.js",revision:null},{url:"assets/View-2969fc5e.js",revision:null},{url:"assets/View-37dfa202.css",revision:null},{url:"assets/zscore-9e188e39.js",revision:null},{url:"index.html",revision:"b7ed1caa027d92260fe0a93ef1294b6f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"themes/lara-dark-indigo/theme-teal.css",revision:"e63fe6dbea5512eefadd504fd483ebed"},{url:"themes/lara-dark-indigo/theme.css",revision:"a809701a0ad391e8e9cf6a81f78c5cc0"},{url:"themes/lara-light-indigo/theme-teal.css",revision:"9533ab3a04b73ccd9bfb1f265fd8b64d"},{url:"themes/lara-light-indigo/theme.css",revision:"22a098e1fda1071a35b9c29a47e3f83d"},{url:"layout/images/logo192.png",revision:"ce538dea2b62cc55fa816c945a9a4a1c"},{url:"layout/images/logo256.png",revision:"f7e4cd69304693db8e41bae436a5b57d"},{url:"layout/images/logo512.png",revision:"e2bea5c150d911b71e6100ff747006a2"},{url:"manifest.webmanifest",revision:"daf10b880e0bf9d2d3517b897f12b4bd"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
