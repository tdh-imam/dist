import{z as o,A as Z,L as ee,M as se,B as K,N as te,_ as le,r as ae,o as d,c,a,b as r,G as e,I as Q,i as _,w as u,F as Y,p as q,e as x,n as oe,t as L,k as w,g as j,H as re,P as ie,Q as ne}from"./index-b346202b.js";import{m as de,u as ue,a as ce,s as fe,b as pe,c as me,d as ve}from"./device-46b6d17a.js";import{s as _e}from"./selectbutton.esm-e3324ef2.js";import{s as ge}from"./inputtext.esm-87cb256c.js";import{s as J}from"./dropdown.esm-bede0c7a.js";import{s as be}from"./confirmdialog.esm-d428c5c3.js";import{a as W}from"./dialog.esm-93e0c1c7.js";import{u as he}from"./store-4b3937ba.js";import{u as Ce}from"./globalStore-bfd5e58c.js";import"./paginator.esm-86984172.js";import"./index.esm-25726bfa.js";const ye=()=>{const n=o(!0),f=he(),b=o(),h=o(),i=o({}),S=o(),B=o(0),P=o(""),R=Ce(),T=o(["Ongoing","Completed","Discharged"]),U=o([{field:"id",header:"ID",selected:!1,style:"min-width: 5rem",frozen:!1},{field:"am_number",header:"AM Number",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"user_full_name",header:"CM",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"patient_name",header:"Patient",sortable:!0,selected:!0,style:"min-width: 5rem"},{field:"actions",header:"Transfers",sortable:!1,selected:!0,style:"min-width: 10rem",frozen:!0,alignFrozen:"right"}]),C=o("Ongoing"),p=o(null),O=o(null),D=o("Transfer case to:"),g=o(!1);Z(()=>{y(),v(),E()}),ee(()=>{f.$dispose()});const v=async()=>{n.value=!0,await f.fetchAll({page:i.value.page+=1,per_page:i.value.rows,order:de(i.value.multiSortMeta),search:P.value,status:C.value,user_id:p.value});const t=f.getAllResponse;t&&(S.value=t.data,B.value=t.meta.total),n.value=!1},y=()=>{i.value={page:0,rows:h.value.rows,multiSortMeta:[],first:0}},M=t=>{i.value=t,i.value.multiSortMeta=[],v()},I=t=>{i.value=t,i.value.page=0,i.value.first=0,v()},N=t=>{b.value.toggle(t)},A=se(()=>U.value.filter(t=>t.selected)),V=o(!1),$=o([]);K([P],ue(()=>{y(),v()},500)),K([p],()=>{O.value=$.value.find(t=>t.id==p.value).full_name}),K([p,C],()=>{y(),v()});const E=async()=>{console.log("fetching users"),n.value=!0,await R.fetchAllUser({role:4});const t=R.getAllUserResponse;if(t){const{options:H}=t.data;$.value=H}n.value=!1},k=()=>{if(p.value==null){alert("You need to choose CM");return}if(C.value!="Ongoing"){alert("Only Ongoing cases can be transferred");return}V.value=!0,D.value=`Transfer Ongoing Cases of [${O.value}] to:`,g.value=!0},l=o({user_id:"",case_id:""}),G=async()=>{if(l.value.user_id==""){alert("Select CM");return}n.value=!0;try{if(g.value===!1){await f.transferCase({case_id:l.value.case_id,user_id:l.value.user_id});const t=f.getTransferCaseResponse;t&&F("Case is transferred to "+t.data.data.full_name,"success")}else{await f.transferBulkCase({from_user_id:p.value,to_user_id:l.value.user_id});const t=f.getTransferCaseResponse;t&&F("Case is transferred to "+t.data.data.full_name,"success")}n.value=!1,V.value=!1,i.value.page=i.value.page-1,l.value.user_id="",v()}catch(t){n.value=!1,F(t,"error")}},s=o(!1),m=()=>{},F=(t,H="error",X=5e3)=>{te.emit("show-toast",{severity:H,summary:"",detail:t,life:X})};return{dt:h,lazyParams:i,totalRecords:B,records:S,isLoading:n,search:P,statusOptions:T,selectedStatus:C,selectedUser:p,onPage:M,onSort:I,toggleColumnMenu:N,selectedColumns:A,columns:U,columnMenu:b,transferTo:l,cmUserOptions:$,transferCase:G,visibleTransfer:V,downloadCases:m,visibleDownload:s,transferTitle:D,isBulkTransfer:g,transferBulkCaseClick:k}};const z=n=>(ie("data-v-bcdb833a"),n=n(),ne(),n),ke={class:"card mb-4"},we={class:"grid"},Se={class:"field col-12 md:col-6 lg:col-4"},Pe=z(()=>a("label",{class:"label-sm"},[a("i",{class:"pi pi-filter"}),x("  Status ")],-1)),Te={key:0,class:"field col-12 md:col-6 lg:col-4"},Me=z(()=>a("label",{class:"label-sm"},[a("i",{class:"pi pi-filter"}),x("  CM ")],-1)),Ve={key:1,class:"field col-12 md:col-6 lg:col-4"},$e=z(()=>a("label",{class:"label-sm"},[a("i",{class:"pi pi-filter"}),x("  Bulk Transfer ")],-1)),Le={class:"card"},xe={class:"flex flex-wrap flex-row-reverse align-items-center"},ze={class:"p-input-icon-left mr-2 mb-2 flex-1"},Be=z(()=>a("i",{class:"pi pi-search"},null,-1)),Re=["for"],Ue={key:0},Oe={key:1},De={key:2},Ne={key:1},Ae={class:"text-center w-full"},Fe={class:"mt-2"},Ie={class:"field col-12"},Ee=z(()=>a("div",{class:"field col-12"},null,-1)),Ge={__name:"List",setup(n){const{statusOptions:f,selectedStatus:b,selectedUser:h,dt:i,lazyParams:S,totalRecords:B,records:P,isLoading:R,search:T,onPage:U,onSort:C,selectedColumns:p,columns:O,columnMenu:D,transferTo:g,transferCase:v,cmUserOptions:y,visibleTransfer:M,downloadCases:I,visibleDownload:N,transferTitle:A,isBulkTransfer:V,transferBulkCaseClick:$}=ye(),{isMobile:E}=ce();return(k,l)=>{const G=ae("router-link");return d(),c(Y,null,[a("div",null,[a("div",ke,[a("div",we,[a("div",Se,[Pe,r(e(_e),{modelValue:e(b),"onUpdate:modelValue":l[0]||(l[0]=s=>Q(b)?b.value=s:null),options:e(f),"aria-labelledby":"basic",class:"w-full"},null,8,["modelValue","options"])]),k.$can("transfer","BulkCase")?(d(),c("div",Te,[Me,r(e(J),{modelValue:e(h),"onUpdate:modelValue":l[1]||(l[1]=s=>Q(h)?h.value=s:null),options:e(y),optionLabel:"full_name",optionValue:"id",placeholder:"Select CM",class:"w-full",showClear:""},null,8,["modelValue","options"])])):_("",!0),k.$can("transfer","BulkCase")?(d(),c("div",Ve,[$e,r(e(w),{class:"w-full",label:"All Ongoing Cases",icon:"pi pi-arrow-up-right",onClick:e($),severity:"primary",outlined:""},null,8,["onClick"])])):_("",!0)])]),a("div",Le,[r(e(ve),{ref_key:"dt",ref:i,dataKey:"id",lazy:!0,paginator:!0,value:e(P),onPage:l[3]||(l[3]=s=>e(U)(s)),onSort:l[4]||(l[4]=s=>e(C)(s)),sortMode:"multiple",multiSortMeta:e(S).multiSortMeta,totalRecords:e(B),rows:5,rowsPerPageOptions:[5,10,20,50,100],scrollable:!0,first:e(S).first,scrollHeight:"60vh",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"{first} to {last} of total {totalRecords}",loading:e(R),responsiveLayout:"scroll"},{header:u(()=>[a("div",xe,[a("span",ze,[Be,r(e(ge),{modelValue:e(T),"onUpdate:modelValue":l[2]||(l[2]=s=>Q(T)?T.value=s:null),placeholder:"Keyword Search",class:"w-full md:w-auto"},null,8,["modelValue"])]),r(e(fe),{ref_key:"columnMenu",ref:D,appendTo:"body",id:"columnPanel",style:{width:"250px"}},{default:u(()=>[(d(!0),c(Y,null,q(e(O),s=>(d(),c("div",{key:s.field,class:"field-checkbox"},[r(e(pe),{inputId:s.field,name:"column",modelValue:s.selected,binary:!0,onChange:m=>s.selected=!s.selected,disabled:s.frozen},null,8,["inputId","modelValue","onChange","disabled"]),a("label",{for:s.field},L(s.header),9,Re)]))),128))]),_:1},512)])]),empty:u(()=>[x(" No records found. ")]),loading:u(()=>[x(" Loading records data. Please wait. ")]),default:u(()=>[(d(!0),c(Y,null,q(e(p),s=>(d(),j(e(me),{key:s.field,field:s.field,header:s.header,sortable:s.sortable,frozen:!e(E)&&s.frozen,alignFrozen:s.alignFrozen,style:re(s.style)},{body:u(({data:m})=>[k.$can("view","Case")?(d(),j(G,{key:0,class:"text-black-alpha-90",to:{name:"viewCase",params:{id:m.id}}},{default:u(()=>[s.field==="am_number"?(d(),c("div",Ue,L(m.am_number),1)):_("",!0),s.field==="user_full_name"?(d(),c("div",Oe,L(m.user_full_name),1)):_("",!0),s.field==="patient_name"?(d(),c("div",De,L(m.patient_name),1)):_("",!0)]),_:2},1032,["to"])):_("",!0),s.field==="actions"?(d(),c("div",Ne,[k.$can("transfer","Case")?(d(),j(e(w),{key:0,type:"button",icon:"pi pi-arrow-up-right",class:"p-button-primary",text:"",rounded:"",onClick:F=>(M.value=!0,e(g).case_id=m.id,A.value=`Transfer Case [${m.id}] to: `,V.value=!1)},null,8,["onClick"])):_("",!0)])):_("",!0)]),_:2},1032,["field","header","sortable","frozen","alignFrozen","style"]))),128))]),_:1},8,["value","multiSortMeta","totalRecords","first","loading"])])]),r(e(be),null,{message:u(s=>[a("div",Ae,[a("i",{class:oe([s.message.icon,"mt-2 text-red-500 text-5xl"])},null,2),a("div",Fe,L(s.message.message),1)])]),_:1}),r(e(W),{closable:!1,visible:e(M),modal:"",style:{width:"25rem"},header:e(A)},{footer:u(()=>[r(e(w),{label:"Cancel",icon:"pi pi-times",onClick:l[6]||(l[6]=s=>M.value=!1),text:""}),r(e(w),{label:"Transfer",icon:"pi pi-check",onClick:e(v),autofocus:""},null,8,["onClick"])]),default:u(()=>[a("div",Ie,[r(e(J),{id:"transfer_to",modelValue:e(g).user_id,"onUpdate:modelValue":l[5]||(l[5]=s=>e(g).user_id=s),options:e(y),optionLabel:"full_name",optionValue:"id",class:"w-full",filter:""},null,8,["modelValue","options"])])]),_:1},8,["visible","header"]),r(e(W),{closable:!1,visible:e(N),modal:"",style:{width:"25rem"},header:"Download Cases Report"},{footer:u(()=>[r(e(w),{label:"Cancel",icon:"pi pi-times",onClick:l[7]||(l[7]=s=>N.value=!1),text:""}),r(e(w),{label:"Download",icon:"pi pi-check",onClick:e(I),autofocus:""},null,8,["onClick"])]),default:u(()=>[Ee]),_:1},8,["visible"])],64)}}},ss=le(Ge,[["__scopeId","data-v-bcdb833a"]]);export{ss as default};
