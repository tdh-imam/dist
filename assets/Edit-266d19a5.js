import{D as X,A as Y,f as g,B as Z,g as ee,h as se,j as ae,_ as le,r as oe,o as n,c as i,a as l,k as e,b as f,q as c,e as S,t as u,n as _,F as R,p as C,m as D,w as te,C as re,s as P,y as ne,z as ie}from"./index-10004dec.js";import{s as M}from"./dropdown.esm-3baf45ad.js";import{s as de,a as ue}from"./radiobutton.esm-440e1dfc.js";import{p as T,s as me}from"./placeholder-511ebf3f.js";import{s as N}from"./inputtext.esm-79fddaaa.js";import{s as ce}from"./password.esm-b16394da.js";import{L as pe}from"./Loading-c780426d.js";import{r as O,c as W,m as j,e as _e,n as ve,a as fe,u as he}from"./index-b824d938.js";import{u as $e}from"./store-622e7ebf.js";import{u as we}from"./globalStore-3658649f.js";import{E as ge}from"./serverValidation-35937a0f.js";import"./index.esm-d3e4ddef.js";const be=()=>{const h=$e(),b=we(),s=X(),q=Y(),p=g(!0),V=new ge,o=Z({username:"",full_name:"",password:null,email:"",mobile_number:"",avatar:null,role_id:null,status:"Active",avatar_updated:!1,parent_user_id:null,township:"Hlaingtharya",ward_villages:null}),y=g(T),A=g([]),r=g([]),w=g([]),U=g(!0),F=g([]),I=g([{name:"Active",code:"Active"},{name:"Inactive",code:"Inactive"},{name:"Locked",code:"Locked"}]),E={username:{required:O},full_name:{required:O},password:{minLength:W.withMessage("Value should be at least 8 characters",j(8))},email:{email:_e},mobile_number:{numeric:ve,minLength:W.withMessage("Value should be at least 6 characters",j(6)),maxLength:fe(12)},role_id:{required:O},status:{required:O},parent_user_id:{},township:{},ward_villages:{}},v=g(!1),d=he(E,o);ee(()=>{a(),x(),L(),z(),B()}),se(()=>{h.$dispose()});const x=async()=>{p.value=!0,V.clear(),await h.fetchOne({id:s.params.id});const t=h.getOneResponse;t&&(o.username=t.data.username,o.full_name=t.data.full_name,o.email=t.data.email,o.mobile_number=t.data.mobile_number,o.avatar=t.data.avatar,o.role_id=t.data.role_id,o.status=t.data.status,o.parent_user_id=t.data.parent_user_id,o.township=t.data.township,o.ward_villages=JSON.parse(t.data.ward_villages),o.avatar!=null&&(y.value=o.avatar)),p.value=!1},a=async()=>{p.value=!0,await h.fetchAllRole();const t=h.getAllRoleResponse;if(t){const{options:m}=t.data;for(let $=0;$<m.length;$+=1)A.value.push({name:m[$].name,code:m[$].id})}},L=async()=>{p.value=!0,await b.fetchAllUser();const t=b.getAllUserResponse;if(t){const{options:m}=t.data;for(let $=0;$<m.length;$+=1)r.value.push({name:m[$].full_name,code:m[$].id})}p.value=!1},z=async()=>{p.value=!0,await b.fetchAllTownship();const t=b.getAllTownshipResponse;if(t){const{options:m}=t.data;w.value=m}p.value=!1};ae(()=>o.township,()=>{B()});const B=async()=>{U.value=!0,await b.fetchAllWards({township:o.township});const t=b.getAllWardResponse;if(t){const{options:m}=t.data;F.value=m,U.value=!1}},J=t=>{const m=t.files[0];if(m){o.avatar_updated=!0,o.avatar=m;const $=new FileReader;$.onload=Q=>{y.value=Q.target.result},$.readAsDataURL(m)}},G=()=>{o.avatar=null,y.value=T},H=t=>{v.value=!0,t&&(p.value||K())},K=async()=>{V.clear(),p.value=!0;try{await h.update({id:s.params.id,full_name:o.full_name,password:o.password,email:o.email,mobile_number:o.mobile_number,avatar:o.avatar instanceof File?o.avatar:null,role_id:o.role_id,status:o.status,avatar_updated:o.avatar_updated,parent_user_id:o.parent_user_id,township:o.township,ward_villages:JSON.stringify(o.ward_villages)}),h.getUpdateResponse&&q.push({name:"userList"}),p.value=!1}catch(t){if(console.log(t),p.value=!1,t.status===422){const m=t.data.data;V.record(m)}}};return{isLoading:p,state:o,statuses:I,roles:A,onFileChange:J,onFileRemove:G,avatarPreview:y,v$:d,handleSubmit:H,submitted:v,errors:V,townshipOptions:w,userOptions:r,fetchWards:B,wardOptions:F,wardDisabled:U}};const k=h=>(ne("data-v-47ae8aa5"),h=h(),ie(),h),Ve={class:"card"},ye=k(()=>l("h5",{class:"text-start"},null,-1)),ke={class:"grid"},Ue={class:"field col-12 flex align-items-center"},Le={class:"flex align-items-center"},Se=["src"],Re={class:"field col-12 md:col-6 lg:col-6"},Ce=k(()=>l("span",{class:"p-error"},"*",-1)),Ae={key:0,class:"p-error"},Fe={key:1,class:"p-error"},Ne={class:"field col-12 md:col-6 lg:col-6"},Oe=k(()=>l("span",{class:"p-error"},"*",-1)),qe={key:0,class:"p-error"},Ie={key:1,class:"p-error"},Ee={class:"field col-12 md:col-6 lg:col-6"},xe=k(()=>l("span",{class:"p-error"},"*",-1)),Be={key:0,class:"p-error"},Me={key:0},De={key:1},Pe={class:"field col-12 md:col-6 lg:col-6"},Te={key:0},We={class:"p-error"},je={class:"field col-12 md:col-6 lg:col-6"},ze={key:0,class:"p-error"},Je={key:1,class:"p-error"},Ge={class:"field col-12 md:col-6 lg:col-6"},He=k(()=>l("span",{class:"p-error"},"*",-1)),Ke={key:0,class:"p-error"},Qe={class:"field col-12 md:col-6 lg:col-6"},Xe={class:"field col-12 md:col-6 lg:col-6"},Ye={class:"field col-12 md:col-6 lg:col-6"},Ze={class:"field col-12 md:col-6 lg:col-6"},es=k(()=>l("span",{class:"p-error"},"*",-1)),ss={class:"flex flex-wrap gap-3 mt-2"},as=["for"],ls={key:0,class:"p-error"},os={class:"flex justify-content-end"},ts={class:"m-2"},rs={class:"m-2"},ns={__name:"Edit",setup(h){const{isLoading:b,v$:s,statuses:q,roles:p,onFileChange:V,onFileRemove:o,avatarPreview:y,handleSubmit:A,submitted:r,errors:w,userOptions:U,townshipOptions:F,wardOptions:I,wardDisabled:E}=be();return(v,d)=>{const x=oe("router-link");return n(),i("div",Ve,[ye,l("form",{class:"p-fluid",onSubmit:d[9]||(d[9]=re(a=>e(A)(!e(s).$invalid),["prevent"]))},[l("div",ke,[l("div",Ue,[l("div",Le,[l("img",{src:e(y),class:"mr-4 avatar"},null,8,Se),f(e(me),{mode:"basic",customUpload:"true",name:"avatar",accept:"image/*",class:"p-button-outlined p-button-plain",chooseLabel:"Browse",onClear:e(o),onSelect:e(V)},null,8,["onClear","onSelect"])])]),l("div",Re,[l("label",{for:"username",class:c({"p-error":e(s).username.$invalid&&e(r)})},[S("Username"),Ce],2),f(e(N),{id:"username",modelValue:e(s).username.$model,"onUpdate:modelValue":d[0]||(d[0]=a=>e(s).username.$model=a),class:c({"p-invalid":e(s).username.$invalid&&e(r)}),readonly:"true"},null,8,["modelValue","class"]),e(s).username.$invalid&&e(r)||e(s).username.$pending.$response?(n(),i("small",Ae,u(e(s).username.required.$message.replace("Value","Username")),1)):_("",!0),e(w).has("username")?(n(),i("small",Fe,[(n(!0),i(R,null,C(e(w).get("username"),a=>(n(),i("div",{key:a},u(a),1))),128))])):_("",!0)]),l("div",Ne,[l("label",{for:"full_name",class:c({"p-error":e(s).full_name.$invalid&&e(r)})},[S(u(v.$t("Full Name")),1),Oe],2),f(e(N),{id:"full_name",modelValue:e(s).full_name.$model,"onUpdate:modelValue":d[1]||(d[1]=a=>e(s).full_name.$model=a),class:c({"p-invalid":e(s).full_name.$invalid&&e(r)})},null,8,["modelValue","class"]),e(s).full_name.$invalid&&e(r)||e(s).full_name.$pending.$response?(n(),i("small",qe,u(e(s).full_name.required.$message.replace("Value","Full Name")),1)):_("",!0),e(w).has("full_name")?(n(),i("small",Ie,[(n(!0),i(R,null,C(e(w).get("full_name"),a=>(n(),i("div",{key:a},u(a),1))),128))])):_("",!0)]),l("div",Ee,[l("label",{for:"password",class:c({"p-error":e(s).password.$invalid&&e(r)})},[S(u(v.$t("Password")),1),xe],2),f(e(ce),{id:"password",modelValue:e(s).password.$model,"onUpdate:modelValue":d[2]||(d[2]=a=>e(s).password.$model=a),autocomplete:"new-password",placeholder:"Password",class:c({"p-invalid":e(s).password.$invalid&&e(r)}),feedback:!1,toggleMask:""},null,8,["modelValue","class"]),e(s).password.$invalid&&e(r)||e(s).password.$pending.$response?(n(),i("small",Be,[e(s).password.required.$invalid?(n(),i("span",Me,u(e(s).password.required.$message.replace("Value","User password")),1)):_("",!0),e(s).password.minLength.$invalid?(n(),i("span",De,u(e(s).password.minLength.$message.replace("Value","User password")),1)):_("",!0)])):_("",!0)]),l("div",Pe,[l("label",{for:"email",class:c({"p-error":e(s).email.$invalid&&e(r)})},u(v.$t("Email")),3),f(e(N),{id:"email",modelValue:e(s).email.$model,"onUpdate:modelValue":d[3]||(d[3]=a=>e(s).email.$model=a),class:c({"p-invalid":e(s).email.$invalid&&e(r)}),"aria-describedby":"email-error"},null,8,["modelValue","class"]),e(s).email.$error&&e(r)?(n(),i("span",Te,[(n(!0),i(R,null,C(e(s).email.$errors,(a,L)=>(n(),i("span",{id:"email-error",key:L},[l("small",We,u(a.$message),1)]))),128))])):_("",!0)]),l("div",je,[l("label",{for:"mobile_number",class:c({"p-error":e(s).mobile_number.$invalid&&e(r)})},u(v.$t("Mobile Number")),3),f(e(N),{id:"mobile_number",modelValue:e(s).mobile_number.$model,"onUpdate:modelValue":d[4]||(d[4]=a=>e(s).mobile_number.$model=a),class:c({"p-invalid":e(s).mobile_number.$invalid&&e(r)})},null,8,["modelValue","class"]),e(s).mobile_number.$invalid&&e(r)||e(s).mobile_number.$pending.$response?(n(),i("small",ze,u(e(s).mobile_number.required.$message.replace("Value","PhoneNumber")),1)):_("",!0),e(w).has("phone_number")?(n(),i("small",Je,[(n(!0),i(R,null,C(e(w).get("phone_number"),a=>(n(),i("div",{key:a},u(a),1))),128))])):_("",!0)]),l("div",Ge,[l("label",{for:"role",class:c({"p-error":e(s).role_id.$invalid&&e(r)})},[S(u(v.$t("Role")),1),He],2),f(e(M),{modelValue:e(s).role_id.$model,"onUpdate:modelValue":d[5]||(d[5]=a=>e(s).role_id.$model=a),options:e(p),optionLabel:"name",optionValue:"code",placeholder:"Select role",class:"w-full",showClear:""},null,8,["modelValue","options"]),e(s).role_id.$invalid&&e(r)||e(s).role_id.$pending.$response?(n(),i("small",Ke,u(e(s).role_id.required.$message.replace("Value","User role")),1)):_("",!0)]),l("div",Qe,[l("label",{for:"supervisor",class:c({"p-error":e(s).parent_user_id.$invalid&&e(r)})},u(v.$t("Supervisor")),3),f(e(M),{id:"supervisor",modelValue:e(s).parent_user_id.$model,"onUpdate:modelValue":d[6]||(d[6]=a=>e(s).parent_user_id.$model=a),options:e(U),optionLabel:"name",optionValue:"code",placeholder:"Select supervisor",class:"w-full",showClear:"",filter:""},null,8,["modelValue","options"])]),l("div",Xe,[l("label",{for:"township",class:c({"p-error":e(s).township.$invalid&&e(r)})},u(v.$t("Township")),3),f(e(M),{id:"township",modelValue:e(s).township.$model,"onUpdate:modelValue":d[7]||(d[7]=a=>e(s).township.$model=a),options:e(F),optionLabel:"name",optionValue:"name",class:"w-full",showClear:"",filter:""},null,8,["modelValue","options"])]),l("div",Ye,[l("label",{for:"ward_villages",class:c({"p-error":e(s).ward_villages.$invalid&&e(r)})},u(v.$t("Wards/Village")),3),f(e(de),{display:"chip",disabled:e(E),id:"ward_villages",modelValue:e(s).ward_villages.$model,"onUpdate:modelValue":d[8]||(d[8]=a=>e(s).ward_villages.$model=a),options:e(I),optionLabel:"name_mm",optionValue:"name_en",class:"w-full",showClear:"",filter:""},null,8,["disabled","modelValue","options"])]),l("div",Ze,[l("label",{for:"status",class:c({"p-error":e(s).status.$invalid&&e(r)})},[S(u(v.$t("Status")),1),es],2),l("div",ss,[(n(!0),i(R,null,C(e(q),a=>(n(),i("div",{key:a.code,class:"flex align-items-center"},[f(e(ue),{modelValue:e(s).status.$model,"onUpdate:modelValue":L=>e(s).status.$model=L,inputId:a.code,name:"status",value:a.name},null,8,["modelValue","onUpdate:modelValue","inputId","value"]),l("label",{for:a.code,class:"ml-2"},u(a.name),9,as)]))),128))]),e(s).status.$invalid&&e(r)||e(s).status.$pending.$response?(n(),i("small",ls,u(e(s).status.required.$message.replace("Value","User status")),1)):_("",!0)])]),l("div",os,[v.$can("index","User")?(n(),D(x,{key:0,to:{name:"userList"}},{default:te(()=>[l("div",ts,[f(e(P),{label:"Cancel",severity:"secondary",text:"",class:"shadow-1"})])]),_:1})):_("",!0),l("div",rs,[f(e(P),{type:"submit",label:"Save",severity:"primary"})])])],32),e(b)?(n(),D(pe,{key:0})):_("",!0)])}}},gs=le(ns,[["__scopeId","data-v-47ae8aa5"]]);export{gs as default};
