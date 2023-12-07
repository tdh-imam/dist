import{a4 as s,a5 as r}from"./index-10004dec.js";const n={users:"/users",option_data:"/options"},a={getAll:async e=>{try{return(await s.get(n.users,{params:e})).data}catch{return null}},getOne:async e=>{try{return(await s.get(`${n.users}/${e.id}`)).data}catch{return null}},add:async e=>{try{return(await s.post(n.users,e)).data}catch{return null}},update:async e=>{try{return(await s.post(`${n.users}/${e.id}/update`,e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch{return null}},delete:async e=>{try{return await s.delete(`${n.users}/${e.id}`)}catch{return null}},getAllRole:async e=>{try{return(await s.get(`${n.option_data}/role`,{params:e})).data}catch{return null}}},o=r({id:"useUserStore",state:()=>({listResponse:null,oneResponse:null,updateResponse:null,addResponse:null,deleteResponse:null,allRoleResponse:null}),getters:{getAllResponse(e){return e.listResponse},getOneResponse(e){return e.oneResponse},getAddResponse(e){return e.addResponse},getUpdateResponse(e){return e.updateResponse},getDeleteResponse(e){return e.deleteResponse},getAllRoleResponse(e){return e.allRoleResponse}},actions:{async fetchAll(e){const t=await a.getAll(e);this.listResponse=t},async fetchOne(e){const t=await a.getOne(e);this.oneResponse=t},async update(e){const t=await a.update(e);this.updateResponse=t},async add(e){const t=await a.add(e);this.addResponse=t},async delete(e){const t=await a.delete(e);this.deleteResponse=t},async fetchAllRole(e){const t=await a.getAllRole(e);this.allRoleResponse=t}}});export{o as u};
