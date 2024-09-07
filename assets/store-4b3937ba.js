import{x as t,y as a}from"./index-b346202b.js";const n={cases:"/cases",case_report:"/all-cases",bulk_transfer:"/transfer-ongoing-cases"},r={getAll:async e=>{try{return(await t.get(n.case_report,{params:e})).data}catch{return null}},getOne:async e=>{try{return(await t.get(`${n.cases}/${e.id}`)).data}catch{return null}},transferCase:async e=>{try{return await t.patch(`${n.cases}/${e.case_id}/transfer`,e)}catch(s){return console.log(s),null}},transferBulkCase:async e=>{try{return await t.post(n.bulk_transfer,e)}catch(s){return console.log(s),null}}},c=a({id:"useCaseStore",state:()=>({listResponse:null,oneResponse:null}),getters:{getAllResponse(e){return e.listResponse},getOneResponse(e){return e.oneResponse}},actions:{async fetchAll(e){const s=await r.getAll(e);this.listResponse=s},async fetchOne(e){const s=await r.getOne(e);this.oneResponse=s},async transferCase(e){const s=await r.transferCase(e);this.transferCaseResponse=s},async transferBulkCase(e){const s=await r.transferBulkCase(e);this.transferCaseResponse=s}}});export{c as u};
