import{af as I,H as q,C as E,g as y,D as A,f as j,m as z,_ as G,o,c as t,a as r,u as e,b as f,x as p,t as m,k as u,F as k,v as V,G as H,j as J,s as B,A as K,B as O}from"./index-227c361b.js";import{p as C,s as Q}from"./placeholder-79dc20f5.js";import{s as L}from"./inputtext.esm-85981b17.js";import{s as T}from"./password.esm-51eb82ce.js";import{L as W}from"./Loading-87622124.js";import{r as F,c as x,m as N,e as X,n as Y,a as Z,u as ee}from"./index-0d87f86c.js";import{E as ae}from"./serverValidation-35937a0f.js";import"./index.esm-f963a70d.js";const se=()=>{const c=I(),U=q(),a=E(),_=y(!0),b=new ae,l=A({username:"",full_name:"",password:null,email:"",mobile_number:"",avatar:null,avatar_updated:!1}),$=y(C),n=y([]),v={username:{required:F},full_name:{required:F},password:{minLength:x.withMessage("Value should be at least 8 characters",N(8))},email:{email:X},mobile_number:{numeric:Y,minLength:x.withMessage("Value should be at least 6 characters",N(6)),maxLength:Z(12)}},w=y(!1),g=ee(v,l);j(()=>{d()}),z(()=>{c.$dispose()});const d=async()=>{_.value=!0,b.clear(),await c.fetchProfile();const i=c.getUserData;i&&(l.username=i.username,l.full_name=i.full_name,l.email=i.email,l.mobile_number=i.mobile_number,l.avatar=i.avatar,l.avatar!=null&&($.value=l.avatar)),_.value=!1},s=i=>{const h=i.files[0];if(h){l.avatar_updated=!0,l.avatar=h;const S=new FileReader;S.onload=D=>{$.value=D.target.result},S.readAsDataURL(h)}},P=()=>{l.avatar=null,$.value=C},R=i=>{w.value=!0,i&&(_.value||M())},M=async()=>{b.clear(),_.value=!0;try{await c.update({id:U.params.id,full_name:l.full_name,password:l.password,email:l.email,mobile_number:l.mobile_number,avatar:l.avatar instanceof File?l.avatar:null,avatar_updated:l.avatar_updated});const i=c.userData;_.value=!1}catch(i){if(console.log(i),_.value=!1,i.status===422){const h=i.data.data;b.record(h)}}};return{isLoading:_,state:l,roles:n,onFileChange:s,onFileRemove:P,avatarPreview:$,v$:g,handleSubmit:R,submitted:w,errors:b,goBack:()=>{a.back()}}};const le=c=>(K("data-v-983e0f0d"),c=c(),O(),c),oe={class:"card"},re=le(()=>r("h5",{class:"text-start"},null,-1)),te={class:"grid"},ne={class:"field col-12 flex align-items-center"},ie={class:"flex align-items-center"},de=["src"],me={class:"field col-12 md:col-6 lg:col-6"},ue={key:0,class:"p-error"},ce={key:1,class:"p-error"},pe={class:"field col-12 md:col-6 lg:col-6"},_e={key:0,class:"p-error"},ve={key:1,class:"p-error"},fe={class:"field col-12 md:col-6 lg:col-6"},be={key:0,class:"p-error"},$e={key:0},ge={key:1},he={class:"field col-12 md:col-6 lg:col-6"},we={key:0},ye={class:"p-error"},ke={class:"field col-12 md:col-6 lg:col-6"},Ve={key:0,class:"p-error"},Le={key:1,class:"p-error"},Ue={class:"flex justify-content-end"},Pe={class:"m-2"},Se={class:"m-2"},Be={__name:"Profile",setup(c){const{isLoading:U,v$:a,onFileChange:_,onFileRemove:b,avatarPreview:l,handleSubmit:$,submitted:n,errors:v,goBack:w}=se();return(g,d)=>(o(),t("div",oe,[re,r("form",{class:"p-fluid",onSubmit:d[5]||(d[5]=H(s=>e($)(!e(a).$invalid),["prevent"]))},[r("div",te,[r("div",ne,[r("div",ie,[r("img",{src:e(l),class:"mr-4 avatar"},null,8,de),f(e(Q),{mode:"basic",customUpload:"true",name:"avatar",accept:"image/*",class:"p-button-outlined p-button-plain",chooseLabel:"Browse",onClear:e(b),onSelect:e(_)},null,8,["onClear","onSelect"])])]),r("div",me,[r("label",{for:"username",class:p({"p-error":e(a).username.$invalid&&e(n)})},"Username",2),f(e(L),{id:"username",modelValue:e(a).username.$model,"onUpdate:modelValue":d[0]||(d[0]=s=>e(a).username.$model=s),class:p({"p-invalid":e(a).username.$invalid&&e(n)}),readonly:"true"},null,8,["modelValue","class"]),e(a).username.$invalid&&e(n)||e(a).username.$pending.$response?(o(),t("small",ue,m(e(a).username.required.$message.replace("Value","Username")),1)):u("",!0),e(v).has("username")?(o(),t("small",ce,[(o(!0),t(k,null,V(e(v).get("username"),s=>(o(),t("div",{key:s},m(s),1))),128))])):u("",!0)]),r("div",pe,[r("label",{for:"full_name",class:p({"p-error":e(a).full_name.$invalid&&e(n)})},m(g.$t("Full Name")),3),f(e(L),{id:"full_name",modelValue:e(a).full_name.$model,"onUpdate:modelValue":d[1]||(d[1]=s=>e(a).full_name.$model=s),class:p({"p-invalid":e(a).full_name.$invalid&&e(n)})},null,8,["modelValue","class"]),e(a).full_name.$invalid&&e(n)||e(a).full_name.$pending.$response?(o(),t("small",_e,m(e(a).full_name.required.$message.replace("Value","Full Name")),1)):u("",!0),e(v).has("full_name")?(o(),t("small",ve,[(o(!0),t(k,null,V(e(v).get("full_name"),s=>(o(),t("div",{key:s},m(s),1))),128))])):u("",!0)]),r("div",fe,[r("label",{for:"password",class:p({"p-error":e(a).password.$invalid&&e(n)})},m(g.$t("Password")),3),f(e(T),{id:"password",modelValue:e(a).password.$model,"onUpdate:modelValue":d[2]||(d[2]=s=>e(a).password.$model=s),autocomplete:"new-password",placeholder:"Password",class:p({"p-invalid":e(a).password.$invalid&&e(n)}),feedback:!1,toggleMask:""},null,8,["modelValue","class"]),e(a).password.$invalid&&e(n)||e(a).password.$pending.$response?(o(),t("small",be,[e(a).password.minLength.$invalid?(o(),t("span",$e,m(e(a).password.minLength.$message.replace("Value","User password")),1)):u("",!0),e(a).password.minLength.$invalid?(o(),t("span",ge,m(e(a).password.minLength.$message.replace("Value","User password")),1)):u("",!0)])):u("",!0)]),r("div",he,[r("label",{for:"email",class:p({"p-error":e(a).email.$invalid&&e(n)})},m(g.$t("Email")),3),f(e(L),{id:"email",modelValue:e(a).email.$model,"onUpdate:modelValue":d[3]||(d[3]=s=>e(a).email.$model=s),class:p({"p-invalid":e(a).email.$invalid&&e(n)}),"aria-describedby":"email-error"},null,8,["modelValue","class"]),e(a).email.$error&&e(n)?(o(),t("span",we,[(o(!0),t(k,null,V(e(a).email.$errors,(s,P)=>(o(),t("span",{id:"email-error",key:P},[r("small",ye,m(s.$message),1)]))),128))])):u("",!0)]),r("div",ke,[r("label",{for:"mobile_number",class:p({"p-error":e(a).mobile_number.$invalid&&e(n)})},m(g.$t("Mobile Number")),3),f(e(L),{id:"mobile_number",modelValue:e(a).mobile_number.$model,"onUpdate:modelValue":d[4]||(d[4]=s=>e(a).mobile_number.$model=s),class:p({"p-invalid":e(a).mobile_number.$invalid&&e(n)})},null,8,["modelValue","class"]),e(a).mobile_number.$invalid&&e(n)||e(a).mobile_number.$pending.$response?(o(),t("small",Ve,m(e(a).mobile_number.required.$message.replace("Value","PhoneNumber")),1)):u("",!0),e(v).has("phone_number")?(o(),t("small",Le,[(o(!0),t(k,null,V(e(v).get("phone_number"),s=>(o(),t("div",{key:s},m(s),1))),128))])):u("",!0)])]),r("div",Ue,[r("div",Pe,[f(e(B),{label:"Close",severity:"secondary",onClick:e(w),text:"",class:"shadow-1"},null,8,["onClick"])]),r("div",Se,[f(e(B),{type:"submit",label:"Save",severity:"primary"})])])],32),e(U)?(o(),J(W,{key:0})):u("",!0)]))}},Ee=G(Be,[["__scopeId","data-v-983e0f0d"]]);export{Ee as default};
