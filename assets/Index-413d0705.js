import{f as a,g as i,o as n,c,a as o,h as u,u as p,i as d,t as m,s as f}from"./index-9a20ac30.js";const v={class:"grid"},B={__name:"Index",setup(_){const t=a(!1),s=a("");let e=null;i(()=>{window.addEventListener("beforeinstallprompt",l=>{l.preventDefault(),t.value=!0,s.value("beforeinstallprompt event, showInstallButton is "+t.value),e=l})});const r=()=>{e&&(e.prompt(),e.userChoice.then(l=>{l.outcome==="accepted"?console.log("PWA installed"):console.log("PWA installation declined"),t.value=!1,e=null}))};return(l,h)=>(n(),c("div",null,[o("div",v,[t.value?(n(),u(p(f),{key:0,onClick:r,class:"mb-2 flex-2",label:"Install",icon:"pi pi-plus",severity:"primary"})):d("",!0),o("p",null,m(s.value),1)])]))}};export{B as default};