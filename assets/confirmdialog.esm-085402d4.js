import{ac as a,s as C,r as b,o as s,j as f,w as r,b as h,x as l,z as g,X as m,a as p,J as u,c as j,F as y,Y as v,k as B,t as L,a3 as S}from"./index-1c6f1511.js";import{a as F}from"./dialog.esm-2c140e9f.js";var I={root:"p-confirm-dialog",icon:function(n){var o=n.instance;return["p-confirm-dialog-icon",o.confirmation?o.confirmation.icon:null]},message:"p-confirm-dialog-message",rejectButton:function(n){var o=n.instance;return["p-confirm-dialog-reject",o.confirmation&&!o.confirmation.rejectClass?"p-button-text":null]},acceptButton:"p-confirm-dialog-accept"},D={name:"BaseConfirmDialog",extends:S,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},css:{classes:I},provide:function(){return{$parentInstance:this}}},O={name:"ConfirmDialog",extends:D,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var n=this;this.confirmListener=function(o){o&&o.group===n.group&&(n.confirmation=o,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},a.on("confirm",this.confirmListener),a.on("close",this.closeListener)},beforeUnmount:function(){a.off("confirm",this.confirmListener),a.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},getCXOptions:function(n,o){return{contenxt:{icon:n,iconClass:o.class}}}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel:function(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon:function(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon:function(){return this.confirmation?this.confirmation.rejectIcon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{CDialog:F,CDButton:C}};function E(e,n,o,H,i,t){var d=b("CDButton"),k=b("CDialog");return s(),f(k,{visible:i.visible,"onUpdate:visible":[n[2]||(n[2]=function(c){return i.visible=c}),t.onHide],role:"alertdialog",class:l(e.cx("root")),modal:!0,header:t.header,blockScroll:t.blockScroll,position:t.position,breakpoints:e.breakpoints,closeOnEscape:t.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},{footer:r(function(){return[h(d,{label:t.rejectLabel,class:l([e.cx("rejectButton"),i.confirmation.rejectClass]),onClick:n[0]||(n[0]=function(c){return t.reject()}),autofocus:t.autoFocusReject,unstyled:e.unstyled,pt:e.ptm("rejectButton"),"data-pc-name":"rejectbutton"},g({_:2},[t.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:r(function(c){return[m(e.$slots,"rejecticon",{},function(){return[p("span",u({class:[t.rejectIcon,c.class]},e.ptm("rejectButton").icon,{"data-pc-name":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"]),h(d,{label:t.acceptLabel,class:l([e.cx("acceptButton"),i.confirmation.acceptClass]),onClick:n[1]||(n[1]=function(c){return t.accept()}),autofocus:t.autoFocusAccept,unstyled:e.unstyled,pt:e.ptm("acceptButton"),"data-pc-name":"acceptbutton"},g({_:2},[t.acceptIcon||e.$slots.accepticon?{name:"icon",fn:r(function(c){return[m(e.$slots,"accepticon",{},function(){return[p("span",u({class:[t.acceptIcon,c.class]},e.ptm("acceptButton").icon,{"data-pc-name":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"])]}),default:r(function(){return[e.$slots.message?(s(),f(v(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(s(),j(y,{key:0},[m(e.$slots,"icon",{},function(){return[e.$slots.icon?(s(),f(v(e.$slots.icon),{key:0,class:l(e.cx("icon"))},null,8,["class"])):i.confirmation.icon?(s(),j("span",u({key:1,class:e.cx("icon")},e.ptm("icon")),null,16)):B("",!0)]}),p("span",u({class:e.cx("message")},e.ptm("message")),L(t.message),17)],64))]}),_:3},8,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}O.render=E;export{O as s};
