import{C as Me,H as Oe,g as v,l as Ae,f as Ne,m as Se,D as De,p as N,E as Ge,_ as Ue,n as ue,h as ge,o as u,c as _,a as o,b as m,u as e,x as y,i as E,w as ie,e as C,t as d,k as p,q as Be,j as z,F as xe,a6 as ze,s as U,A as Fe,B as Te}from"./index-1c6f1511.js";import{s as b}from"./dropdown.esm-ecbf973e.js";import{s as F}from"./inputtext.esm-076d0f09.js";import{s as pe}from"./dialog.esm-2c140e9f.js";import{s as fe}from"./calendar.esm-341abf1d.js";import{L as Le}from"./Loading-b35f5d61.js";import{s as me,a as Re}from"./tabpanel.esm-204ba6e4.js";import{s as We}from"./confirmdialog.esm-085402d4.js";import{u as Pe,r as $,i as he}from"./index-44873c96.js";import{u as Ye}from"./store-4fb9208d.js";import{u as Ie}from"./globalStore-31e677fe.js";import{E as qe}from"./serverValidation-35937a0f.js";import{w as Je}from"./zscore-9e188e39.js";import{i as Ee}from"./mm-phone-validate-fed13507.js";import"./index.esm-c3e0ffb5.js";const He=()=>{const S=Ye(),D=Ie(),t=Me(),T=Oe(),c=v(!0),k=v(!1),H=new qe,j=v(0),ne=Ae(),L=v([{code:"Yangon",name:"Yangon"}]),Z=v([]),K=v([]),W=v(!0),Q=v([]),O=v([]),G=v(),M=v([]),X=v([]),ee=v([]),B=v([]),te=v([]),oe=v([]),P=v([]),ae=v([]),h=v([]),r=v([]),se=v([]),w=v([]),re=async()=>{k.value=!0,await D.fetchAllEnums();const g=D.getAllEnumResponse;if(g){const{options:f}=g.data;Q.value=f.screening_type.map(l=>({name:l,code:l})),O.value=f.type.map(l=>({name:l,code:l})),G.value=f.gender.map(l=>({name:l,code:l})),M.value=f.age_group.map(l=>({name:l,code:l})),X.value=f.yes_no.map(l=>({name:l,code:l})),ee.value=f.donar.map(l=>({name:l,code:l})),B.value=f.wfh_zscore.map(l=>({name:l,code:l})),oe.value=f.bilateral_pitting_odema.map(l=>({name:l,code:l})),te.value=f.appetite_test.map(l=>({name:l,code:l})),P.value=f.immunization_status.map(l=>({name:l,code:l})),ae.value=f.type_of_case.map(l=>({name:l,code:l})),h.value=f.case_category.map(l=>({name:l,code:l,visible:!0})),r.value=f.admission_criteria.map(l=>({name:l,code:l,visible:!0})),se.value=f.category_of_criteria.map(l=>({name:l,code:l})),w.value=f.criteria_group.map(l=>({name:l,code:l,visible:!0}))}k.value=!1},de=async()=>{k.value=!0,await D.fetchAllTownship();const g=D.getAllTownshipResponse;if(g){const{options:f}=g.data;Z.value=f}k.value=!1},Y=async()=>{W.value=!0,await D.fetchAllWards({township:a.township});const g=D.getAllWardResponse;g&&(K.value=g,W.value=!1)},x=()=>{const g="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";return new Promise(f=>{var l=new Image;l.onload=function(){f(!0)},l.onerror=function(){f(!1)};const J=g+"?t="+new Date().getTime();l.timeout=5e3,l.src=J})};Ne(async()=>{await x().then(g=>{c.value=g}),c.value=T.query.online!==void 0?JSON.parse(T.query.online):c.value,re(),de(),Y()}),Se(()=>{S.$dispose()});const I=JSON.parse(localStorage.getItem("userData")),a=De({am_number:"",screening_type:"",state:"Yangon",township:I.township,village:I.ward_villages!=null?JSON.parse(I.ward_villages)[0]:"",patient_name:"",type:"",gender:"",date_of_birth:"",age_group:"",age_month:"",age_year:"",disability:"",phone_number:"",father_name:"",husband_name:"",receiving_cash_assistant:"",yes_which_donar:"",muac_cm:0,weight_kg:0,height_cm:0,wfh_zscore:"",bilateral_pitting_oedema:"",medical_illness_complication:"",appetite_test:"N/A",immunization_status:"",deworming:"",vit_a_supplement:"",type_of_case:"",case_category:"",admission_criteria:"",category_of_criteria:"",criteria_group:"",date_of_admission:null,admitted_year:null,admitted_month:null});function R(){const g=["John","Jane","Sarah","Michael","Emily","David","Anna","James","Laura","Robert"],f=["Doe","Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Wilson"],l=g[Math.floor(Math.random()*g.length)],J=f[Math.floor(Math.random()*f.length)];return`${l} ${J}`}function V(){a.screening_type="Active Screening",a.state="Yangon",a.township="Hlaingtharya",a.village="No (9) Ward",a.patient_name=R(),a.type="Girl",a.gender=Math.random()>.5?"Male":"Female",a.date_of_birth="1990-01-01",a.age_group="12-17 Years",a.disability=Math.random()>.5?"Yes":"No",a.phone_number="09912345678",a.father_name=R(),a.husband_name=R(),a.receiving_cash_assistant=Math.random()>.5?"Yes":"No",a.yes_which_donar=Math.random()>.5?"WFP":"Other",a.muac_cm=(Math.random()*(30-8)+8).toFixed(1),a.weight_kg=(Math.random()*(25-1.5)+1.5).toFixed(1),a.height_cm=(Math.random()*(120-45)+45).toFixed(1),a.wfh_zscore=Math.random()>.5?"SAM":"MAM",a.bilateral_pitting_oedema=Math.random()>.5?"1":"3",a.medical_illness_complication=Math.random()>.5?"Yes":"No",a.appetite_test=Math.random()>.5?"Passed":"Failed",a.immunization_status=Math.random()>.5?"Ongoing":"Complete",a.deworming=Math.random()>.5?"Yes":"No",a.vit_a_supplement=Math.random()>.5?"Yes":"No",a.type_of_case=Math.random()>.5?"MAM":"SAM with Complication",a.case_category=Math.random()>.5?"MAM Refer to SFP":"SAM Refer to OTP",a.category_of_criteria=Math.random()>.5?"New":"Relapse",a.criteria_group=Math.random()>.5?"New":"Relapse",a.date_of_admission=new Date().toISOString().slice(0,10),a.admitted_year=new Date().getFullYear(),a.admitted_month=new Date().getMonth()+1}const s={screening_type:{required:$},state:{required:$},township:{required:$},village:{required:$},patient_name:{required:$},type:{required:$},gender:{required:$},date_of_birth:{required:$},age_group:{required:$},age_month:{},age_year:{},disability:{required:$},phone_number:{required:$},father_name:{},husband_name:{},receiving_cash_assistant:{},yes_which_donar:{},muac_cm:{},weight_kg:{},height_cm:{},wfh_zscore:{},bilateral_pitting_oedema:{},medical_illness_complication:{},appetite_test:{},immunization_status:{},deworming:{},vit_a_supplement:{},type_of_case:{},case_category:{},admission_criteria:{},category_of_criteria:{},criteria_group:{},date_of_admission:{required:$},admitted_year:{integer:he,required:$},admitted_month:{integer:he,required:$}},A=v(!1),q=Pe(s,a),i=g=>{if(A.value=!0,console.log("submit"),!g){j.value=0;return}k.value||ve()},ve=async()=>{H.clear(),k.value=!0;try{await S.add({screening_type:a.screening_type,state:a.state,township:a.township,village:a.village,patient_name:a.patient_name,type:a.type,gender:a.gender,date_of_birth:a.date_of_birth,age_month:a.age_month,age_year:a.age_year,age_group:a.age_group,disability:a.disability,phone_number:a.phone_number,father_name:a.father_name,husband_name:a.husband_name,receiving_cash_assistant:a.receiving_cash_assistant,yes_which_donar:a.yes_which_donar,muac_cm:a.muac_cm,weight_kg:a.weight_kg,height_cm:a.height_cm,wfh_zscore:a.wfh_zscore,bilateral_pitting_oedema:a.bilateral_pitting_oedema,medical_illness_complication:a.medical_illness_complication,appetite_test:a.appetite_test,immunization_status:a.immunization_status,deworming:a.deworming,vit_a_supplement:a.vit_a_supplement,type_of_case:a.type_of_case,case_category:a.case_category,admission_criteria:a.admission_criteria,category_of_criteria:a.category_of_criteria,criteria_group:a.criteria_group,date_of_admission:a.date_of_admission,admitted_year:a.admitted_year,admitted_month:a.admitted_month},c.value),S.getAddResponse&&(le("Case for patient "+a.patient_name+" is created.","success"),t.push({name:"caseList",query:{online:c.value}})),k.value=!1}catch(g){k.value=!1,g.status===422&&le(g.data.message,1e4)}};N([c],async()=>{c.value==!0&&await x().then(g=>{c.value=g}),console.log(c.value),t.push({path:T.path,query:{...T.query,online:c.value}})}),N(()=>a.township,()=>{Y()}),N(()=>a.date_of_admission,()=>{Ve()}),N(()=>a.date_of_birth,()=>{const g=new Date(a.date_of_birth),f=new Date;let l=(f.getFullYear()-g.getFullYear())*12;if(l-=g.getMonth(),l+=f.getMonth(),f.getDate()<g.getDate()&&l--,l<6){le("At lease, 6 Months of Age is required");return}if(["Boy","Girl"].includes(a.type)?(a.age_month=l,a.age_year=""):(a.age_year=parseInt(l/12),a.age_month=""),l>=6&&l<=23){a.age_group=M.value[0].name;return}else if(l>=24&&l<=59){a.age_group=M.value[1].name;return}else if(l>=12*12&&l<=17*12){a.age_group=M.value[2].name;return}else if(l>=18*12&&l<=59*12){a.age_group=M.value[3].name;return}else a.age_group=""}),N(()=>a.type,()=>{switch(a.type){case O.value[0].name:a.gender=G.value[0].name;break;case O.value[1].name:a.gender=G.value[1].name;break;case O.value[2].name:a.gender=G.value[1].name,_e();break;case O.value[3].name:a.gender=G.value[1].name,_e();break}}),N(()=>[a.age_group,a.height_cm,a.weight_kg],()=>{be()}),N(()=>[a.type_of_case],()=>{ye()}),N(()=>[a.criteria_group],()=>{$e()}),N(()=>[a.case_category],()=>{we()});const _e=()=>{a.father_name="",a.muac_cm=0,a.weight_kg=0,a.height_cm=0,a.wfh_zscore="",a.appetite_test="",a.immunization_status="",a.vit_a_supplement=""},be=()=>{if(M.value.some(f=>f.name==a.age_group)){if(a.weight_kg!==0&&a.height_cm!==0){const f=a.age_group===M.value[0].name?"m24under":"m24to59",l=a.type===O.value[0].name?"boy":"girl",J=Math.round(a.height_cm),ce=Je[f][l].find(Ce=>Ce.length===J);if(ce!==void 0)if(a.weight_kg<ce.minus3){a.wfh_zscore=B.value[0].name;return}else if(a.weight_kg<ce.minus2){a.wfh_zscore=B.value[1].name;return}else a.wfh_zscore=B.value[2].name}}else le("Firstly, you need to set Date of Birth, then Age Group will be defined and WFH ZScore will be automatically selected","warn")},ye=()=>{switch(a.type_of_case){case"New":w.value[0].visible=!0,w.value[1].visible=!1,w.value[2].visible=!1,w.value[3].visible=!1,a.criteria_group="New";break;case"Old":a.criteria_group="Re-admission",w.value[0].visible=!1,w.value[1].visible=!0,w.value[2].visible=!0,w.value[3].visible=!0;break}},$e=()=>{switch(a.criteria_group){case"New":a.case_category="MAM New",h.value[0].visible=!0,h.value[1].visible=!1,h.value[2].visible=!1,h.value[3].visible=!1,h.value[4].visible=!1;break;case"Re-admission":a.case_category="MAM Old",h.value[0].visible=!1,h.value[1].visible=!0,h.value[2].visible=!0,h.value[3].visible=!1,h.value[4].visible=!1;break;case"Relapse":a.case_category="Relapse",h.value[0].visible=!1,h.value[1].visible=!1,h.value[2].visible=!1,h.value[3].visible=!0,h.value[4].visible=!1;break;case"Transfer":a.case_category="Transfer",h.value[0].visible=!1,h.value[1].visible=!1,h.value[2].visible=!1,h.value[3].visible=!1,h.value[4].visible=!0;break}},we=()=>{switch(a.case_category){case"MAM New":a.admission_criteria="New",r.value[0].visible=!0,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"MAM Old":a.admission_criteria="Return from Cured within 2 month",r.value[0].visible=!1,r.value[1].visible=!0,r.value[2].visible=!0,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Return form Defaulter":a.admission_criteria="Return from Default within 2 month",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!0,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Relapse":a.admission_criteria="Return from Cured after 2 month",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!0,r.value[5].visible=!0,r.value[6].visible=!1,r.value[7].visible=!1,r.value[8].visible=!1;break;case"Transfer":a.admission_criteria="Transfer in Other SFP",r.value[0].visible=!1,r.value[1].visible=!1,r.value[2].visible=!1,r.value[3].visible=!1,r.value[4].visible=!1,r.value[5].visible=!1,r.value[6].visible=!0,r.value[7].visible=!0,r.value[8].visible=!0;break}},Ve=()=>{const g=new Date(a.date_of_admission);a.admitted_year=g.getFullYear(),a.admitted_month=g.getMonth()+1},ke=()=>{ne.require({message:"Are you sure you want to cancel?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectClass:"p-button-primary p-button-text",acceptClass:"p-button-danger p-button-text",accept:()=>{t.push({name:"caseList",query:{online:c.value}})},reject:()=>{}})},le=(g,f="error",l=5e3)=>{Ge.emit("show-toast",{severity:f,summary:"",detail:g,life:l})};return{isLoading:k,v$:q,submitted:A,handleSubmit:i,errors:H,villageDisabled:W,stateOptions:L,townshipOptions:Z,villageOptions:K,donarOptions:ee,yesNoOptions:X,ageGroupOptions:M,genderOptions:G,typeOptions:O,screeningTypeOptions:Q,bilateralPittingOedemaOptions:oe,zScoreOptions:B,appetiteTestOptions:te,immunizationStatusOptions:P,typeOfCasesOptions:ae,caseCategoriesOptions:h,admissionCriteriaOptions:r,criteriaOptions:se,criteriaGroupsOptions:w,confirmCancel:ke,generateFakeData:V,isOnline:c,activeTab:j}};const n=S=>(Fe("data-v-6e608da1"),S=S(),Te(),S),je={class:"card"},Ze={class:"flex align-items-right"},Ke={class:"flex-1"},Qe={class:"flex-2"},Xe={class:"flex-2"},et={class:"field col-12 md:col-6 lg:col-6"},tt=n(()=>o("span",{class:"p-error"},"*",-1)),ot={key:0,class:"p-error"},at={class:"field col-12 md:col-6 lg:col-6"},st=n(()=>o("span",{class:"p-error"},"*",-1)),lt={key:0,class:"p-error"},it={class:"field col-12 md:col-6 lg:col-6"},nt=n(()=>o("span",{class:"p-error"},"*",-1)),rt={key:0,class:"p-error"},dt={class:"field col-12 md:col-6 lg:col-6"},ct=n(()=>o("span",{class:"p-error"},"*",-1)),ut={key:0,class:"p-error"},pt={class:"field col-12 md:col-6 lg:col-6"},mt=n(()=>o("span",{class:"p-error"},"*",-1)),_t={key:0,class:"p-error"},gt={class:"field col-12 md:col-6 lg:col-6"},ft=n(()=>o("span",{class:"p-error"},"*",-1)),ht={key:0,class:"p-error"},vt={class:"field col-12 md:col-6 lg:col-6"},bt=n(()=>o("span",{class:"p-error"},"*",-1)),yt={key:0,class:"p-error"},$t={class:"field col-12 md:col-6 lg:col-6"},wt=n(()=>o("span",{class:"p-error"},"*",-1)),Vt={key:0,class:"p-error"},kt={key:0,class:"field col-12 md:col-6 lg:col-6"},Ct={key:1,class:"field col-12 md:col-6 lg:col-6"},Mt={class:"field col-12 md:col-6 lg:col-6"},Ot=n(()=>o("span",{class:"p-error"},"*",-1)),At={key:0,class:"p-error"},Nt={class:"field col-12 md:col-6 lg:col-6"},St=n(()=>o("span",{class:"p-error"},"*",-1)),Dt={key:0,class:"p-error"},Gt={class:"field col-12 md:col-6 lg:col-6"},Ut=n(()=>o("span",{class:"p-error"},"*",-1)),Bt={key:0,class:"p-error"},xt={key:2,class:"field col-12 md:col-6 lg:col-6"},zt={key:0,class:"p-error"},Ft={key:3,class:"field col-12 md:col-6 lg:col-6"},Tt={key:0,class:"p-error"},Lt={class:"field col-12 md:col-6 lg:col-6"},Rt=n(()=>o("label",{for:"receiving_cash_assistant"},"Receiving Cash Assistant",-1)),Wt={key:0,class:"p-error"},Pt={key:4,class:"field col-12 md:col-6 lg:col-6"},Yt=n(()=>o("label",{for:"yes_which_donar"},"If Yes, Which Donar?",-1)),It={key:0,class:"p-error"},qt={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},Jt={class:"field col-12 md:col-6 lg:col-6"},Et=n(()=>o("label",{for:"muac_cm"},"MUAC in cm [8 to 30]",-1)),Ht={key:0,class:"field col-12 md:col-6 lg:col-6"},jt=n(()=>o("label",{for:"weight_kg"},"Weight in kg [1.5 to 25]",-1)),Zt={key:1,class:"field col-12 md:col-6 lg:col-6"},Kt=n(()=>o("label",{for:"height_cm"},"Height in cm [45 to 120]",-1)),Qt={key:2,class:"field col-12 md:col-6 lg:col-6"},Xt={key:0,class:"p-error"},eo={key:3,class:"field col-12 md:col-6 lg:col-6"},to=n(()=>o("label",{for:"immunization_status"},"Immunization Status",-1)),oo={class:"field col-12 md:col-6 lg:col-6"},ao=n(()=>o("label",{for:"deworming"},"Deworming",-1)),so={key:4,class:"field col-12 md:col-6 lg:col-6"},lo=n(()=>o("label",{for:"vit_a_supplement"},"Vitamin A Supplement",-1)),io={class:"field col-12 md:col-6 lg:col-6"},no=n(()=>o("label",{for:"type_of_case"},"Type of Case",-1)),ro={class:"field col-12 md:col-6 lg:col-6"},co=n(()=>o("label",{for:"criteria_group"},"Criteria Group",-1)),uo={class:"field col-12 md:col-6 lg:col-6"},po=n(()=>o("label",{for:"case_category"},"Case Category",-1)),mo={class:"field col-12 md:col-6 lg:col-6"},_o=n(()=>o("label",{for:"admission_criteria"},"Admission Criteria",-1)),go={class:"field col-12 md:col-6 lg:col-6"},fo=n(()=>o("label",{for:"category_of_criteria"},"Category of Criteria",-1)),ho={class:"field col-12 md:col-6 lg:col-6"},vo=n(()=>o("label",{for:"date_of_admission"},"Date of Admission",-1)),bo={class:"field col-12 md:col-6 lg:col-6"},yo=n(()=>o("label",{for:"admitted_year"},"Admitted Year",-1)),$o={class:"field col-12 md:col-6 lg:col-6"},wo=n(()=>o("label",{for:"admitted_month"},"Admitted Month",-1)),Vo={class:"p-inputtext p-component"},ko={class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},Co={class:"w-full"},Mo=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Biographic Info")],-1)),Oo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Screening Type",-1)),Ao={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},No=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"State",-1)),So={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Do=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Township",-1)),Go={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Uo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Village/Ward",-1)),Bo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Patient Name",-1)),zo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Fo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type",-1)),To={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Lo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Gender",-1)),Ro={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Wo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Birth",-1)),Po={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Yo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Group",-1)),Io={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},qo={key:0},Jo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Month",-1)),Eo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ho={key:1},jo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Age Year",-1)),Zo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ko=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Disability",-1)),Qo={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Xo=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Phone Number",-1)),ea={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ta={key:2},oa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Father's Name",-1)),aa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},sa={key:3},la=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Husband's Name",-1)),ia={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},na=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Receiving Cash Assistant",-1)),ra={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},da={key:4},ca=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"If Yes, Which Donar?",-1)),ua={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},pa=n(()=>o("tr",null,[o("th",{colspan:"2"},"...")],-1)),ma=n(()=>o("tr",null,[o("th",{class:"bg-primary",colspan:"2"},"Screening")],-1)),_a=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"MUAC in cm",-1)),ga={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},fa={key:5},ha=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Weight in kg",-1)),va={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},ba={key:6},ya=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Height (cm)",-1)),$a={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},wa={key:7},Va=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"WFH Z-Score",-1)),ka={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ca=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Bilateral Pitting Oedema",-1)),Ma={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Oa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Medical Illness Complication",-1)),Aa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Na={key:8},Sa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Appetite Test",-1)),Da={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ga={key:9},Ua=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Immunization Status",-1)),Ba={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},xa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Deworming",-1)),za={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Fa={key:10},Ta=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Vitamin A Supplement",-1)),La={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ra=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Type of Case",-1)),Wa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Pa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Case Category",-1)),Ya={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ia=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Category of Criteria",-1)),qa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ja=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Criteria Group",-1)),Ea={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Ha=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Date of Admission",-1)),ja={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Za=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Year",-1)),Ka={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},Qa=n(()=>o("td",{class:"pt-1 pb-1 pl-1 surface-ground"},"Admitted Month",-1)),Xa={class:"pt-1 pb-1 pl-1 surface-ground font-bold"},es={class:"flex justify-content-end"},ts={class:"mr-2"},os={class:"mr-2"},as={class:"mr-2"},ss={class:"mr-2"},ls={class:"mr-2"},is={__name:"New",setup(S){const{isLoading:D,v$:t,handleSubmit:T,submitted:c,villageDisabled:k,stateOptions:H,townshipOptions:j,villageOptions:ne,yesNoOptions:L,donarOptions:Z,ageGroupOptions:K,genderOptions:W,typeOptions:Q,screeningTypeOptions:O,zScoreOptions:G,immunizationStatusOptions:M,typeOfCasesOptions:X,caseCategoriesOptions:ee,admissionCriteriaOptions:B,criteriaOptions:te,criteriaGroupsOptions:oe,confirmCancel:P,generateFakeData:ae,isOnline:h,activeTab:r}=He(),se=ue(()=>oe.value.filter(s=>s.visible)),w=ue(()=>ee.value.filter(s=>s.visible)),re=ue(()=>B.value.filter(s=>s.visible)),de=()=>{R(),T(!t.value.$invalid)},Y=v("yy-mm-dd"),x=v(null),I=()=>{setTimeout(()=>{x.value&&(x.value.scrollTop=x.value.scrollHeight)},100)},a=V=>{const s=["January","February","March","April","May","June","July","August","September","October","November","December"],A=V-1;return A>=0&&A<12?s[A]:"..."},R=()=>{const V=document.getElementById("phone_number");V.value&&!Ee(V.value)?(window.alert("Invalid Phone Number, Please enter the right one"),V.focus()):r.value=1};return(V,s)=>{const A=ge("tooltip"),q=ge("select-all-on-focus");return u(),_(xe,null,[o("div",je,[o("div",Ze,[o("div",Ke,[m(e(ze),{value:e(h)?"Online Mode":"Offline Mode",class:y(e(h)?"p-badge-success":"badge-secondary")},null,8,["value","class"])]),o("div",Qe,[E(m(e(U),{onClick:e(ae),icon:"pi pi-database",text:"",rounded:""},null,8,["onClick"]),[[A,"Fake Data for Testing",void 0,{top:!0}]])]),o("div",Xe,[E(m(e(U),{onClick:e(P),severity:"secondary",icon:"pi pi-times",text:"",rounded:""},null,8,["onClick"]),[[A,"Cancel",void 0,{top:!0}]])])]),m(e(Re),{activeIndex:e(r),"onUpdate:activeIndex":s[32]||(s[32]=i=>Be(r)?r.value=i:null),scrollable:!0},{default:ie(()=>[m(e(me),{header:"Biographic Info"},{default:ie(()=>[o("div",{ref_key:"biContainer",ref:x,class:"grid p-fluid mt-1 overflow-scroll",style:{height:"65vh"}},[o("div",et,[o("label",{for:"screening_type",class:y({"p-error":e(t).screening_type.$invalid&&e(c)})},[C("Screening Type"),tt],2),m(e(b),{id:"screening_type",modelValue:e(t).screening_type.$model,"onUpdate:modelValue":s[0]||(s[0]=i=>e(t).screening_type.$model=i),options:e(O),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).screening_type.$invalid&&e(c)||e(t).screening_type.$pending.$response?(u(),_("small",ot,d(e(t).screening_type.required.$message.replace("Value","Screening Type")),1)):p("",!0)]),o("div",at,[o("label",{for:"state",class:y({"p-error":e(t).state.$invalid&&e(c)})},[C("State"),st],2),m(e(b),{id:"state",modelValue:e(t).state.$model,"onUpdate:modelValue":s[1]||(s[1]=i=>e(t).state.$model=i),options:e(H),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).state.$invalid&&e(c)||e(t).state.$pending.$response?(u(),_("small",lt,d(e(t).state.required.$message.replace("Value","State")),1)):p("",!0)]),o("div",it,[o("label",{for:"township",class:y({"p-error":e(t).township.$invalid&&e(c)})},[C("Township"),nt],2),m(e(b),{filter:"",id:"township",modelValue:e(t).township.$model,"onUpdate:modelValue":s[2]||(s[2]=i=>e(t).township.$model=i),options:e(j),optionLabel:"name_mm",optionValue:"name"},null,8,["modelValue","options"]),e(t).township.$invalid&&e(c)?(u(),_("small",rt,d(e(t).township.$message),1)):p("",!0)]),o("div",dt,[o("label",{for:"village",class:y({"p-error":e(t).village.$invalid&&e(c)})},[C("Village/Ward"),ct],2),m(e(b),{filter:"",disabled:e(k),id:"village",modelValue:e(t).village.$model,"onUpdate:modelValue":s[3]||(s[3]=i=>e(t).village.$model=i),options:e(ne),optionLabel:"name_mm",optionValue:"name_en"},null,8,["disabled","modelValue","options"]),e(t).village.$invalid&&e(c)?(u(),_("small",ut,d(e(t).village.required.$message.replace("Value","Village or Ward")),1)):p("",!0)]),o("div",pt,[o("label",{for:"patient_name",class:y({"p-error":e(t).patient_name.$invalid&&e(c)})},[C("Patient Name"),mt],2),m(e(F),{id:"patient_name",modelValue:e(t).patient_name.$model,"onUpdate:modelValue":s[4]||(s[4]=i=>e(t).patient_name.$model=i)},null,8,["modelValue"]),e(t).patient_name.$invalid&&e(c)?(u(),_("small",_t,d(e(t).patient_name.required.$message.replace("Value","Patient Name")),1)):p("",!0)]),o("div",gt,[o("label",{for:"type",class:y({"p-error":e(t).type.$invalid&&e(c)})},[C("Type"),ft],2),m(e(b),{id:"type",modelValue:e(t).type.$model,"onUpdate:modelValue":s[5]||(s[5]=i=>e(t).type.$model=i),options:e(Q),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(c)?(u(),_("small",ht,d(e(t).type.required.$message.replace("Value","Type")),1)):p("",!0)]),o("div",vt,[o("label",{for:"gender",class:y({"p-error":e(t).gender.$invalid&&e(c)})},[C("Gender"),bt],2),m(e(b),{id:"gender",modelValue:e(t).gender.$model,"onUpdate:modelValue":s[6]||(s[6]=i=>e(t).gender.$model=i),options:e(W),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).gender.$invalid&&e(c)?(u(),_("small",yt,d(e(t).gender.required.$message.replace("Value","Type")),1)):p("",!0)]),o("div",$t,[o("label",{for:"date_of_birth",class:y({"p-error":e(t).date_of_birth.$invalid&&e(c)})},[C("Date of Birth"),wt],2),m(e(fe),{id:"date_of_birth",modelValue:e(t).date_of_birth.$model,"onUpdate:modelValue":s[7]||(s[7]=i=>e(t).date_of_birth.$model=i),dateFormat:Y.value,manualInput:"true"},null,8,["modelValue","dateFormat"]),e(t).date_of_birth.$invalid&&e(c)?(u(),_("small",Vt,d(e(t).date_of_birth.required.$message.replace("Value","Date of Birth")),1)):p("",!0)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",kt,[o("label",{for:"age_month",class:y({"p-error":e(t).age_month.$invalid&&e(c)})},"Age Month",2),m(e(F),{id:"age_month",modelValue:e(t).age_month.$model,"onUpdate:modelValue":s[8]||(s[8]=i=>e(t).age_month.$model=i),readonly:""},null,8,["modelValue"])])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),_("div",Ct,[o("label",{for:"age_year",class:y({"p-error":e(t).age_year.$invalid&&e(c)})},"Age Year",2),m(e(F),{id:"age_year",modelValue:e(t).age_year.$model,"onUpdate:modelValue":s[9]||(s[9]=i=>e(t).age_year.$model=i),readonly:""},null,8,["modelValue"])])):p("",!0),o("div",Mt,[o("label",{for:"age_group",class:y({"p-error":e(t).age_group.$invalid&&e(c)})},[C("Age Group"),Ot],2),m(e(b),{id:"age_group",modelValue:e(t).age_group.$model,"onUpdate:modelValue":s[10]||(s[10]=i=>e(t).age_group.$model=i),options:e(K),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).age_group.$invalid&&e(c)?(u(),_("small",At,d(e(t).age_group.required.$message.replace("Value","Age Group")),1)):p("",!0)]),o("div",Nt,[o("label",{for:"disability",class:y({"p-error":e(t).disability.$invalid&&e(c)})},[C("Disability"),St],2),m(e(b),{id:"disability",modelValue:e(t).disability.$model,"onUpdate:modelValue":s[11]||(s[11]=i=>e(t).disability.$model=i),options:e(L),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).disability.$invalid&&e(c)?(u(),_("small",Dt,d(e(t).disability.required.$message.replace("Value","Disability")),1)):p("",!0)]),o("div",Gt,[o("label",{for:"phone_number",class:y({"p-error":e(t).phone_number.$invalid&&e(c)})},[C("Phone Number"),Ut],2),m(e(F),{ref:"phoneNumber",id:"phone_number",modelValue:e(t).phone_number.$model,"onUpdate:modelValue":s[12]||(s[12]=i=>e(t).phone_number.$model=i)},null,8,["modelValue"]),e(t).phone_number.$invalid&&e(c)?(u(),_("small",Bt,d(e(t).phone_number.required.$message.replace("Value","Phone Number")),1)):p("",!0)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",xt,[o("label",{for:"father_name",class:y({"p-error":e(t).father_name.$invalid&&e(c)})},"Father's Name",2),m(e(F),{id:"father_name",modelValue:e(t).father_name.$model,"onUpdate:modelValue":s[13]||(s[13]=i=>e(t).father_name.$model=i)},null,8,["modelValue"]),e(t).father_name.$invalid&&e(c)?(u(),_("small",zt,d(e(t).father_name.$message),1)):p("",!0)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),_("div",Ft,[o("label",{for:"husband_name",class:y({"p-error":e(t).husband_name.$invalid&&e(c)})},"Husband's Name",2),m(e(F),{id:"husband_name",modelValue:e(t).husband_name.$model,"onUpdate:modelValue":s[14]||(s[14]=i=>e(t).husband_name.$model=i)},null,8,["modelValue"]),e(t).husband_name.$invalid&&e(c)?(u(),_("small",Tt,d(e(t).husband_name.$message),1)):p("",!0)])):p("",!0),o("div",Lt,[Rt,m(e(b),{id:"receiving_cash_assistant",onChange:s[15]||(s[15]=i=>I()),modelValue:e(t).receiving_cash_assistant.$model,"onUpdate:modelValue":s[16]||(s[16]=i=>e(t).receiving_cash_assistant.$model=i),options:e(L),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).receiving_cash_assistant.$invalid&&e(c)?(u(),_("small",Wt,d(e(t).receiving_cash_assistant.$message),1)):p("",!0)]),e(t).receiving_cash_assistant.$model=="Yes"?(u(),_("div",Pt,[Yt,m(e(b),{id:"yes_which_donar",modelValue:e(t).yes_which_donar.$model,"onUpdate:modelValue":s[17]||(s[17]=i=>e(t).yes_which_donar.$model=i),options:e(Z),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).yes_which_donar.$invalid&&e(c)?(u(),_("small",It,d(e(t).yes_which_donar.$message),1)):p("",!0)])):p("",!0)],512)]),_:1}),m(e(me),{header:"Screening"},{default:ie(()=>[o("div",qt,[o("div",Jt,[Et,E(m(e(pe),{modelValue:e(t).muac_cm.$model,"onUpdate:modelValue":s[18]||(s[18]=i=>e(t).muac_cm.$model=i),id:"muac_cm",minFractionDigits:2},null,8,["modelValue"]),[[q]])]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",Ht,[jt,E(m(e(pe),{modelValue:e(t).weight_kg.$model,"onUpdate:modelValue":s[19]||(s[19]=i=>e(t).weight_kg.$model=i),id:"weight_kg",minFractionDigits:2},null,8,["modelValue"]),[[q]])])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",Zt,[Kt,E(m(e(pe),{type:"number",modelValue:e(t).height_cm.$model,"onUpdate:modelValue":s[20]||(s[20]=i=>e(t).height_cm.$model=i),id:"height_cm",minFractionDigits:2},null,8,["modelValue"]),[[q]])])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",Qt,[o("label",{for:"wfh_zscore",class:y({"p-error":e(t).wfh_zscore.$invalid&&e(c)})},"WFH Z-Score",2),m(e(b),{id:"wfh_zscore",modelValue:e(t).wfh_zscore.$model,"onUpdate:modelValue":s[21]||(s[21]=i=>e(t).wfh_zscore.$model=i),options:e(G),optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"]),e(t).type.$invalid&&e(c)?(u(),_("small",Xt,d(e(t).type.$message),1)):p("",!0)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",eo,[to,m(e(b),{modelValue:e(t).immunization_status.$model,"onUpdate:modelValue":s[22]||(s[22]=i=>e(t).immunization_status.$model=i),options:e(M),id:"immunization_status",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):p("",!0),o("div",oo,[ao,m(e(b),{modelValue:e(t).deworming.$model,"onUpdate:modelValue":s[23]||(s[23]=i=>e(t).deworming.$model=i),options:e(L),id:"deworming",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("div",so,[lo,m(e(b),{modelValue:e(t).vit_a_supplement.$model,"onUpdate:modelValue":s[24]||(s[24]=i=>e(t).vit_a_supplement.$model=i),options:e(L),id:"vit_a_supplement",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])])):p("",!0),o("div",io,[no,m(e(b),{modelValue:e(t).type_of_case.$model,"onUpdate:modelValue":s[25]||(s[25]=i=>e(t).type_of_case.$model=i),options:e(X),id:"type_of_case",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",ro,[co,m(e(b),{modelValue:e(t).criteria_group.$model,"onUpdate:modelValue":s[26]||(s[26]=i=>e(t).criteria_group.$model=i),options:se.value,id:"criteria_group",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",uo,[po,m(e(b),{modelValue:e(t).case_category.$model,"onUpdate:modelValue":s[27]||(s[27]=i=>e(t).case_category.$model=i),options:w.value,id:"case_category",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",mo,[_o,m(e(b),{modelValue:e(t).admission_criteria.$model,"onUpdate:modelValue":s[28]||(s[28]=i=>e(t).admission_criteria.$model=i),options:re.value,id:"admission_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",go,[fo,m(e(b),{modelValue:e(t).category_of_criteria.$model,"onUpdate:modelValue":s[29]||(s[29]=i=>e(t).category_of_criteria.$model=i),options:e(te),id:"category_of_criteria",optionLabel:"name",optionValue:"code"},null,8,["modelValue","options"])]),o("div",ho,[vo,m(e(fe),{modelValue:e(t).date_of_admission.$model,"onUpdate:modelValue":s[30]||(s[30]=i=>e(t).date_of_admission.$model=i),id:"date_of_admission",dateFormat:Y.value,maxDate:new Date},null,8,["modelValue","dateFormat","maxDate"])]),o("div",bo,[yo,m(e(F),{modelValue:e(t).admitted_year.$model,"onUpdate:modelValue":s[31]||(s[31]=i=>e(t).admitted_year.$model=i),id:"admitted_year",disabled:""},null,8,["modelValue"])]),o("div",$o,[wo,o("p",Vo,d(a(e(t).admitted_month.$model)),1)])])]),_:1}),m(e(me),{header:"Review"},{default:ie(()=>[o("div",ko,[o("table",Co,[Mo,o("tr",null,[Oo,o("td",Ao,d(e(t).screening_type.$model),1)]),o("tr",null,[No,o("td",So,d(e(t).state.$model),1)]),o("tr",null,[Do,o("td",Go,d(e(t).township.$model),1)]),o("tr",null,[Uo,o("td",Bo,d(e(t).village.$model),1)]),o("tr",null,[xo,o("td",zo,d(e(t).patient_name.$model),1)]),o("tr",null,[Fo,o("td",To,d(e(t).type.$model),1)]),o("tr",null,[Lo,o("td",Ro,d(e(t).gender.$model),1)]),o("tr",null,[Wo,o("td",Po,d(e(t).date_of_birth.$model),1)]),o("tr",null,[Yo,o("td",Io,d(e(t).age_group.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",qo,[Jo,o("td",Eo,d(e(t).age_month.$model),1)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),_("tr",Ho,[jo,o("td",Zo,d(e(t).age_year.$model),1)])):p("",!0),o("tr",null,[Ko,o("td",Qo,d(e(t).disability.$model),1)]),o("tr",null,[Xo,o("td",ea,d(e(t).phone_number.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",ta,[oa,o("td",aa,d(e(t).father_name.$model),1)])):p("",!0),e(t).type.$model=="Pregnant Woman or Girl"||e(t).type.$model=="Breastfeeding Woman or Girl"?(u(),_("tr",sa,[la,o("td",ia,d(e(t).husband_name.$model),1)])):p("",!0),o("tr",null,[na,o("td",ra,d(e(t).receiving_cash_assistant.$model),1)]),e(t).receiving_cash_assistant.$model=="Yes"?(u(),_("tr",da,[ca,o("td",ua,d(e(t).yes_which_donar.$model),1)])):p("",!0),pa,ma,o("tr",null,[_a,o("td",ga,d(e(t).muac_cm.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",fa,[ha,o("td",va,d(e(t).weight_kg.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",ba,[ya,o("td",$a,d(e(t).height_cm.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",wa,[Va,o("td",ka,d(e(t).wfh_zscore.$model),1)])):p("",!0),o("tr",null,[Ca,o("td",Ma,d(e(t).bilateral_pitting_oedema.$model),1)]),o("tr",null,[Oa,o("td",Aa,d(e(t).medical_illness_complication.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",Na,[Sa,o("td",Da,d(e(t).appetite_test.$model),1)])):p("",!0),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",Ga,[Ua,o("td",Ba,d(e(t).immunization_status.$model),1)])):p("",!0),o("tr",null,[xa,o("td",za,d(e(t).deworming.$model),1)]),e(t).type.$model=="Boy"||e(t).type.$model=="Girl"?(u(),_("tr",Fa,[Ta,o("td",La,d(e(t).vit_a_supplement.$model),1)])):p("",!0),o("tr",null,[Ra,o("td",Wa,d(e(t).type_of_case.$model),1)]),o("tr",null,[Pa,o("td",Ya,d(e(t).case_category.$model),1)]),o("tr",null,[Ia,o("td",qa,d(e(t).category_of_criteria.$model),1)]),o("tr",null,[Ja,o("td",Ea,d(e(t).criteria_group.$model),1)]),o("tr",null,[Ha,o("td",ja,d(e(t).date_of_admission.$model),1)]),o("tr",null,[Za,o("td",Ka,d(e(t).admitted_year.$model),1)]),o("tr",null,[Qa,o("td",Xa,d(e(t).admitted_month.$model),1)])])])]),_:1})]),_:1},8,["activeIndex"]),o("div",es,[o("div",ts,[V.$can("index","User")?(u(),z(e(U),{key:0,label:"Cancel",severity:"secondary",text:"",onClick:e(P)},null,8,["onClick"])):p("",!0)]),o("div",os,[e(r)==0?(u(),z(e(U),{key:0,label:"Next  >>",onClick:R,severity:"primary",text:""})):p("",!0)]),o("div",as,[e(r)==1?(u(),z(e(U),{key:0,label:"<<  Prev",onClick:s[33]||(s[33]=i=>r.value=0),severity:"primary",text:""})):p("",!0)]),o("div",ss,[e(r)==2?(u(),z(e(U),{key:0,label:"<<  Prev",onClick:s[34]||(s[34]=i=>r.value=1),severity:"primary",text:""})):p("",!0)]),o("div",ls,[e(r)==1?(u(),z(e(U),{key:0,label:"Next  >>",onClick:s[35]||(s[35]=i=>r.value=2),severity:"primary",text:""})):p("",!0)]),o("div",null,[e(r)==2?(u(),z(e(U),{key:0,onClick:de,label:"Create",severity:"primary"})):p("",!0)])]),e(D)?(u(),z(Le,{key:0})):p("",!0)]),m(e(We))],64)}}},ws=Ue(is,[["__scopeId","data-v-6e608da1"]]);export{ws as default};