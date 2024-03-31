import{C as K,g as $,D as Q,f as X,m as Y,p as Z,_ as ee,r as se,o as t,c as d,a as l,u as e,b as _,x as c,e as L,t as u,k as h,F,v as I,j as D,w as le,G as ae,s as T,A as oe,B as re}from"./index-1c6f1511.js";import{s as M}from"./dropdown.esm-ecbf973e.js";import{s as te,a as ne}from"./radiobutton.esm-7ab5b7a0.js";import{s as ie}from"./fileupload.esm-04ae5857.js";import{s as x}from"./inputtext.esm-076d0f09.js";import{s as de}from"./password.esm-6ecf0dcc.js";import{L as ue}from"./Loading-b35f5d61.js";import{r as S,c as E,m as P,e as me,n as ce,a as pe,u as _e}from"./index-44873c96.js";import{u as ve}from"./store-d2cceaf1.js";import{u as fe}from"./globalStore-31e677fe.js";import{E as he}from"./serverValidation-35937a0f.js";import{p as W}from"./placeholder-716a2605.js";import"./index.esm-d2e0e523.js";const we=()=>{const w=ve(),g=fe(),s=K(),p=$(!1),k=new he,n=Q({username:"",full_name:"",password:"",email:"",mobile_number:"",avatar:null,role_id:null,status:"Active",parent_user_id:null,township:"Hlaingtharya",ward_villages:null}),U=$(W),A=$([]),C=$([]),o=$([]),b=$(!0),R=$([]),q=$([{name:"Active",code:"Active"},{name:"Inactive",code:"Inactive"},{name:"Locked",code:"Locked"}]),B={username:{required:S},full_name:{required:S},password:{required:S,minLength:E.withMessage("Value should be at least 8 characters",P(8))},email:{email:me},mobile_number:{numeric:ce,minLength:E.withMessage("Value should be at least 6 characters",P(6)),maxLength:pe(12)},role_id:{required:S},status:{required:S},parent_user_id:{},township:{},ward_villages:{}},N=$(!1),v=_e(B,n);X(()=>{r(),O(),a(),V()}),Y(()=>{w.$dispose()});const r=async()=>{p.value=!0,await w.fetchAllRole();const i=w.getAllRoleResponse;if(i){const{options:m}=i.data;for(let f=0;f<m.length;f+=1)A.value.push({name:m[f].name,code:m[f].id})}p.value=!1},O=async()=>{p.value=!0,await g.fetchAllUser();const i=g.getAllUserResponse;if(i){const{options:m}=i.data;for(let f=0;f<m.length;f+=1)C.value.push({name:m[f].full_name,code:m[f].id})}p.value=!1},a=async()=>{p.value=!0,await g.fetchAllTownship();const i=g.getAllTownshipResponse;if(i){const{options:m}=i.data;o.value=m}p.value=!1};Z(()=>n.township,()=>{V()});const V=async()=>{b.value=!0,await g.fetchAllWards({township:n.township});const i=g.getAllWardResponse;i&&(R.value=i,b.value=!1)},j=i=>{const m=i.files[0];if(m){n.avatar=m;const f=new FileReader;f.onload=J=>{U.value=J.target.result},f.readAsDataURL(m)}},G=()=>{n.avatar=null,U.value=W},z=i=>{N.value=!0,i&&(p.value||H())},H=async()=>{k.clear(),p.value=!0;try{await w.add({username:n.username,full_name:n.full_name,password:n.password,email:n.email,mobile_number:n.mobile_number,avatar:n.avatar,role_id:n.role_id,status:n.status,parent_user_id:n.parent_user_id,township:n.township,ward_villages:JSON.stringify(n.ward_villages)}),w.getAddResponse&&s.push({name:"userList"}),p.value=!1}catch(i){if(p.value=!1,i.status===422){const m=i.data.data;k.record(m)}}};return{isLoading:p,state:n,statuses:q,roles:A,onFileChange:j,onFileRemove:G,avatarPreview:U,v$:v,handleSubmit:z,submitted:N,errors:k,townshipOptions:o,userOptions:C,fetchWards:V,wardOptions:R,wardDisabled:b}};const y=w=>(oe("data-v-6c084964"),w=w(),re(),w),$e={class:"card"},ge=y(()=>l("h5",{class:"text-start"},null,-1)),be={class:"grid"},Ve={class:"field col-12 flex align-items-center"},ye={class:"flex align-items-center"},ke=["src"],Ue={class:"field col-12 md:col-6 lg:col-6"},Le=y(()=>l("span",{class:"p-error"},"*",-1)),Se={key:0,class:"p-error"},Ae={key:1,class:"p-error"},Ce={class:"field col-12 md:col-6 lg:col-6"},Re=y(()=>l("span",{class:"p-error"},"*",-1)),Ne={key:0,class:"p-error"},Fe={key:1,class:"p-error"},Ie={class:"field col-12 md:col-6 lg:col-6"},xe=y(()=>l("span",{class:"p-error"},"*",-1)),qe={key:0,class:"p-error"},Be={key:0},Oe={key:1},Me={class:"field col-12 md:col-6 lg:col-6"},De={key:0},Te={class:"p-error"},Ee={class:"field col-12 md:col-6 lg:col-6"},Pe={class:"field col-12 md:col-6 lg:col-6"},We=y(()=>l("span",{class:"p-error"},"*",-1)),je={key:0,class:"p-error"},Ge={class:"field col-12 md:col-6 lg:col-6"},ze={class:"field col-12 md:col-6 lg:col-6"},He={class:"field col-12 md:col-6 lg:col-6"},Je={class:"field col-12 md:col-6 lg:col-6"},Ke=y(()=>l("span",{class:"p-error"},"*",-1)),Qe={class:"flex flex-wrap gap-3 mt-2"},Xe=["for"],Ye={key:0,class:"p-error"},Ze={class:"flex justify-content-end"},es={class:"m-2"},ss={class:"m-2"},ls={__name:"New",setup(w){const{isLoading:g,v$:s,statuses:p,roles:k,onFileChange:n,onFileRemove:U,avatarPreview:A,handleSubmit:C,submitted:o,errors:b,userOptions:R,townshipOptions:q,wardOptions:B,wardDisabled:N}=we();return(v,r)=>{const O=se("router-link");return t(),d("div",$e,[ge,l("form",{class:"p-fluid",onSubmit:r[9]||(r[9]=ae(a=>e(C)(!e(s).$invalid),["prevent"]))},[l("div",be,[l("div",Ve,[l("div",ye,[l("img",{src:e(A),class:"mr-4 avatar"},null,8,ke),_(e(ie),{mode:"basic",customUpload:"true",name:"avatar",accept:"image/*",class:"p-button-outlined p-button-plain",chooseLabel:"Browse",onClear:e(U),onSelect:e(n)},null,8,["onClear","onSelect"])])]),l("div",Ue,[l("label",{for:"username",class:c({"p-error":e(s).username.$invalid&&e(o)})},[L("Username"),Le],2),_(e(x),{id:"username",modelValue:e(s).username.$model,"onUpdate:modelValue":r[0]||(r[0]=a=>e(s).username.$model=a),class:c({"p-invalid":e(s).username.$invalid&&e(o)})},null,8,["modelValue","class"]),e(s).username.$invalid&&e(o)||e(s).username.$pending.$response?(t(),d("small",Se,u(e(s).username.required.$message.replace("Value","Username")),1)):h("",!0),e(b).has("username")?(t(),d("small",Ae,[(t(!0),d(F,null,I(e(b).get("username"),a=>(t(),d("div",{key:a},u(a),1))),128))])):h("",!0)]),l("div",Ce,[l("label",{for:"full_name",class:c({"p-error":e(s).full_name.$invalid&&e(o)})},[L(u(v.$t("Full Name")),1),Re],2),_(e(x),{id:"full_name",modelValue:e(s).full_name.$model,"onUpdate:modelValue":r[1]||(r[1]=a=>e(s).full_name.$model=a),class:c({"p-invalid":e(s).full_name.$invalid&&e(o)})},null,8,["modelValue","class"]),e(s).full_name.$invalid&&e(o)||e(s).full_name.$pending.$response?(t(),d("small",Ne,u(e(s).full_name.required.$message.replace("Value","Full Name")),1)):h("",!0),e(b).has("full_name")?(t(),d("small",Fe,[(t(!0),d(F,null,I(e(b).get("full_name"),a=>(t(),d("div",{key:a},u(a),1))),128))])):h("",!0)]),l("div",Ie,[l("label",{for:"password",class:c({"p-error":e(s).password.$invalid&&e(o)})},[L(u(v.$t("Password")),1),xe],2),_(e(de),{id:"password",modelValue:e(s).password.$model,"onUpdate:modelValue":r[2]||(r[2]=a=>e(s).password.$model=a),autocomplete:"new-password",placeholder:"Password",class:c({"p-invalid":e(s).password.$invalid&&e(o)}),feedback:!1,toggleMask:""},null,8,["modelValue","class"]),e(s).password.$invalid&&e(o)||e(s).password.$pending.$response?(t(),d("small",qe,[e(s).password.required.$invalid?(t(),d("span",Be,u(e(s).password.required.$message.replace("Value","User password")),1)):h("",!0),e(s).password.minLength.$invalid?(t(),d("span",Oe,u(e(s).password.minLength.$message.replace("Value","User password")),1)):h("",!0)])):h("",!0)]),l("div",Me,[l("label",{for:"email",class:c({"p-error":e(s).email.$invalid&&e(o)})},u(v.$t("Email")),3),_(e(x),{id:"email",modelValue:e(s).email.$model,"onUpdate:modelValue":r[3]||(r[3]=a=>e(s).email.$model=a),class:c({"p-invalid":e(s).email.$invalid&&e(o)}),"aria-describedby":"email-error"},null,8,["modelValue","class"]),e(s).email.$error&&e(o)?(t(),d("span",De,[(t(!0),d(F,null,I(e(s).email.$errors,(a,V)=>(t(),d("span",{id:"email-error",key:V},[l("small",Te,u(a.$message),1)]))),128))])):h("",!0)]),l("div",Ee,[l("label",{for:"mobile_number",class:c({"p-error":e(s).mobile_number.$invalid&&e(o)})},u(v.$t("Mobile Number")),3),_(e(x),{id:"mobile_number",modelValue:e(s).mobile_number.$model,"onUpdate:modelValue":r[4]||(r[4]=a=>e(s).mobile_number.$model=a),class:c({"p-invalid":e(s).mobile_number.$invalid&&e(o)})},null,8,["modelValue","class"])]),l("div",Pe,[l("label",{for:"role",class:c({"p-error":e(s).role_id.$invalid&&e(o)})},[L(u(v.$t("Role")),1),We],2),_(e(M),{id:"role",modelValue:e(s).role_id.$model,"onUpdate:modelValue":r[5]||(r[5]=a=>e(s).role_id.$model=a),options:e(k),optionLabel:"name",optionValue:"code",placeholder:"Select role",class:"w-full",showClear:""},null,8,["modelValue","options"]),e(s).role_id.$invalid&&e(o)||e(s).role_id.$pending.$response?(t(),d("small",je,u(e(s).role_id.required.$message.replace("Value","User role")),1)):h("",!0)]),l("div",Ge,[l("label",{for:"supervisor",class:c({"p-error":e(s).parent_user_id.$invalid&&e(o)})},u(v.$t("Supervisor")),3),_(e(M),{id:"supervisor",modelValue:e(s).parent_user_id.$model,"onUpdate:modelValue":r[6]||(r[6]=a=>e(s).parent_user_id.$model=a),options:e(R),optionLabel:"name",optionValue:"code",placeholder:"Select supervisor",class:"w-full",showClear:"",filter:""},null,8,["modelValue","options"])]),l("div",ze,[l("label",{for:"township",class:c({"p-error":e(s).township.$invalid&&e(o)})},u(v.$t("Township")),3),_(e(M),{id:"township",modelValue:e(s).township.$model,"onUpdate:modelValue":r[7]||(r[7]=a=>e(s).township.$model=a),options:e(q),optionLabel:"name",optionValue:"name",class:"w-full",showClear:"",filter:""},null,8,["modelValue","options"])]),l("div",He,[l("label",{for:"ward_villages",class:c({"p-error":e(s).ward_villages.$invalid&&e(o)})},u(v.$t("Wards/Village")),3),_(e(te),{display:"chip",disabled:e(N),id:"ward_villages",modelValue:e(s).ward_villages.$model,"onUpdate:modelValue":r[8]||(r[8]=a=>e(s).ward_villages.$model=a),options:e(B),optionLabel:"name_en",optionValue:"name_en",class:"w-full",showClear:"",filter:""},null,8,["disabled","modelValue","options"])]),l("div",Je,[l("label",{for:"status",class:c({"p-error":e(s).status.$invalid&&e(o)})},[L(u(v.$t("Status")),1),Ke],2),l("div",Qe,[(t(!0),d(F,null,I(e(p),a=>(t(),d("div",{key:a.code,class:"flex align-items-center"},[_(e(ne),{modelValue:e(s).status.$model,"onUpdate:modelValue":V=>e(s).status.$model=V,inputId:a.code,name:"status",value:a.name},null,8,["modelValue","onUpdate:modelValue","inputId","value"]),l("label",{for:a.code,class:"ml-2"},u(a.name),9,Xe)]))),128))]),e(s).status.$invalid&&e(o)||e(s).status.$pending.$response?(t(),d("small",Ye,u(e(s).status.required.$message.replace("Value","User status")),1)):h("",!0)])]),l("div",Ze,[v.$can("index","User")?(t(),D(O,{key:0,to:{name:"userList"}},{default:le(()=>[l("div",es,[_(e(T),{label:"Cancel",severity:"secondary",text:"",class:"shadow-1"})])]),_:1})):h("",!0),l("div",ss,[_(e(T),{type:"submit",label:"Save",severity:"primary"})])])],32),e(g)?(t(),D(ue,{key:0})):h("",!0)])}}},fs=ee(ls,[["__scopeId","data-v-6c084964"]]);export{fs as default};
