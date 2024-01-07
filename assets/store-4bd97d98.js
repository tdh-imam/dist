import{a4 as t,a5 as r}from"./index-a9437654.js";const a={cases:"/cases",case_edit_requests:"/case-edit-requests",option_data:"/options",follow_ups:"/follow-ups"},n={getAll:async e=>{try{return(await t.get(a.case_edit_requests,{params:e})).data}catch{return null}},getOne:async e=>{try{return(await t.get(`${a.cases}/${e.id}`)).data}catch{return null}},updateBi:async e=>{try{return(await t.patch(`${a.cases}/${e.case_id}/biographic-info/${e.id}/response`,e)).data}catch{return null}},updateMe:async e=>{try{return(await t.patch(`${a.cases}/${e.case_id}/medical-examination/${e.id}/response`,e)).data}catch{return null}},updateDischarge:async e=>{try{return(await t.patch(`${a.cases}/${e.case_id}/discharge/${e.id}/response`,e)).data}catch{return null}}},c=r({id:"useCaseStore",state:()=>({listResponse:null,oneResponse:null,updateBiResponse:null,updateMeResponse:null,updateDischargeResponse:null}),getters:{getAllResponse(e){return e.listResponse},getOneResponse(e){return e.oneResponse},getUpdateBiResponse(e){return e.updateBiResponse},getUpdateMeResponse(e){return e.updateMeResponse},getUpdateDischargeResponse(e){return e.updateDischargeResponse}},actions:{async fetchAll(e){const s=await n.getAll(e);this.listResponse=s},async fetchOne(e){const s=await n.getOne(e);this.oneResponse=s},async updateBi(e){const s=await n.updateBi(e);this.updateBiResponse=s},async updateMe(e){const s=await n.updateMe(e);this.updateMeResponse=s},async updateDischarge(e){const s=await n.updateDischarge(e);this.updateDischargeResponse=s}}});export{c as u};
