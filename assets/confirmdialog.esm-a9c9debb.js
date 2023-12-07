import{ab as a,s as k,r as b,o as s,m as f,w as r,b as h,q as l,x as g,W as m,a as p,H as u,c as j,F as y,$ as v,n as B,t as L,a3 as S}from"./index-60f3997a.js";import{s as F}from"./dialog.esm-0e18fd0d.js";var I={root:"p-confirm-dialog",icon:function(e){var o=e.instance;return["p-confirm-dialog-icon",o.confirmation?o.confirmation.icon:null]},message:"p-confirm-dialog-message",rejectButton:function(e){var o=e.instance;return["p-confirm-dialog-reject",o.confirmation&&!o.confirmation.rejectClass?"p-button-text":null]},acceptButton:"p-confirm-dialog-accept"},D={name:"BaseConfirmDialog",extends:S,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},css:{classes:I},provide:function(){return{$parentInstance:this}}},O={name:"ConfirmDialog",extends:D,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var e=this;this.confirmListener=function(o){o&&o.group===e.group&&(e.confirmation=o,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},a.on("confirm",this.confirmListener),a.on("close",this.closeListener)},beforeUnmount:function(){a.off("confirm",this.confirmListener),a.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},getCXOptions:function(e,o){return{contenxt:{icon:e,iconClass:o.class}}}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel:function(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon:function(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon:function(){return this.confirmation?this.confirmation.rejectIcon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{CDialog:F,CDButton:k}};function E(n,e,o,H,c,t){var d=b("CDButton"),C=b("CDialog");return s(),f(C,{visible:c.visible,"onUpdate:visible":[e[2]||(e[2]=function(i){return c.visible=i}),t.onHide],role:"alertdialog",class:l(n.cx("root")),modal:!0,header:t.header,blockScroll:t.blockScroll,position:t.position,breakpoints:n.breakpoints,closeOnEscape:t.closeOnEscape,draggable:n.draggable,pt:n.pt,unstyled:n.unstyled},{footer:r(function(){return[h(d,{label:t.rejectLabel,class:l([n.cx("rejectButton"),c.confirmation.rejectClass]),onClick:e[0]||(e[0]=function(i){return t.reject()}),autofocus:t.autoFocusReject,unstyled:n.unstyled,pt:n.ptm("rejectButton"),"data-pc-name":"rejectbutton"},g({_:2},[t.rejectIcon||n.$slots.rejecticon?{name:"icon",fn:r(function(i){return[m(n.$slots,"rejecticon",{},function(){return[p("span",u({class:[t.rejectIcon,i.class]},n.ptm("rejectButton").icon,{"data-pc-name":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"]),h(d,{label:t.acceptLabel,class:l([n.cx("acceptButton"),c.confirmation.acceptClass]),onClick:e[1]||(e[1]=function(i){return t.accept()}),autofocus:t.autoFocusAccept,unstyled:n.unstyled,pt:n.ptm("acceptButton"),"data-pc-name":"acceptbutton"},g({_:2},[t.acceptIcon||n.$slots.accepticon?{name:"icon",fn:r(function(i){return[m(n.$slots,"accepticon",{},function(){return[p("span",u({class:[t.acceptIcon,i.class]},n.ptm("acceptButton").icon,{"data-pc-name":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"])]}),default:r(function(){return[n.$slots.message?(s(),f(v(n.$slots.message),{key:1,message:c.confirmation},null,8,["message"])):(s(),j(y,{key:0},[m(n.$slots,"icon",{},function(){return[n.$slots.icon?(s(),f(v(n.$slots.icon),{key:0,class:l(n.cx("icon"))},null,8,["class"])):c.confirmation.icon?(s(),j("span",u({key:1,class:n.cx("icon")},n.ptm("icon")),null,16)):B("",!0)]}),p("span",u({class:n.cx("message")},n.ptm("message")),L(t.message),17)],64))]}),_:3},8,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}O.render=E;export{O as s};
