import{j as e,V as t,c as n,W as r,N as s,r as o}from"../react.js";import{l as a,u as i,e as d,d as c,c as l,M as m,g as u,b as f,B as p,L as _,f as g,A as j}from"./admin.js";import{d as x,T as w}from"./database.js";import{T as h}from"./search.js";import{u as v}from"./about.js";import{c as b}from"./website-settings.js";import{u as y}from"./home.js";const D=b({name:"creator",initialState:{contentDraft:a.get("content-draft","[]")},reducers:{editOrinsertContentDraft:(e,{payload:t})=>{if(0===e.contentDraft.length)return a.set("content-draft",e.contentDraft=[t]);e.contentDraft.find(((e,n)=>e._id===t._id?{_id:e._id,index:n}:void 0))?a.set("content-draft",e.contentDraft=e.contentDraft.map((e=>e._id===t._id?t:e))):a.set("content-draft",e.contentDraft=[...e.contentDraft,t])},removeContentDraft:(e,{payload:t})=>{0!==e.contentDraft.length&&a.set("content-draft",e.contentDraft=e.contentDraft.filter((e=>e._id!==t)))}}}),{editOrinsertContentDraft:$,removeContentDraft:C}=D.actions,T=D.reducer,N={write_new_loader_container:"C",write_new_loader_body:"D",loader:"E",write_new_loader_input:"F"};function P(){return e.jsx("div",{className:`${N.write_new_loader_container} flex-row-normal-center-medium`,children:e.jsxs("div",{className:`${N.write_new_loader_body} flex-column-normal-normal-small`,children:[e.jsx("div",{className:N.write_new_loader_input}),e.jsx("div",{className:N.write_new_loader_input}),e.jsxs("div",{className:"flex-row-normal-normal-small",children:[e.jsx("button",{}),e.jsx("button",{}),e.jsx("button",{})]}),e.jsx("div",{style:{height:"10rem"},className:N.write_new_loader_input})]})})}const E="_",S="a",A="b",F={title:{isMin:{message:"Title is to short!",value:4}}};const H=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const b=t(),D=n(),T=r((e=>e.creator)),N=i(),H=y(),M=d(),O=N.get("content-id"),k=N.get("draft-id");if(!M.role(["Admin","Creator"]).permited())return e.jsx(s,{to:"/"});const V=O?a.get(O,"null"):k?T.contentDraft.find((e=>e._id===k)):void 0,W="post"===V?.contentType;v({title:V?.isEdit&&V?`${W?V.title:"Comment"} ändern`:k&&V?`${W?V.title:"Entwurf"} ändern`:"Neue post schreiben",description:"Hier kannst neue post oder entwurfe schreiben oder ändern."});const I=V?.isFromAdmin?"":"comment"===V?.contentType?`post-${V.onPost}-comments-${V.onPage}`:"all-posts",{mutate:R,isMutating:U,error:z}=c(I),{submit:B,reset:L,register:q,formState:{errors:G}}=l(F,{title:V?.title,isHidden:V?.isHidden}),J=z||(V?.isEdit&&!V?{code:404,message:"Content not found!"}:void 0),K=o.useRef(V?.tags||[]),Q=o.useRef(V?.content||"");return e.jsxs(o.Fragment,{children:[U&&e.jsx(m,{}),H.isAuthPending?e.jsx(P,{}):e.jsx("div",{className:`${E} flex-row-normal-center-big`,children:e.jsxs(u,{className:S,onSubmit:B((async e=>{delete e.alt,delete e.uploadImg,delete e.url,R((async function(t){if(V?.isEdit){const n=await g.post(`/admin/${V?.contentType}/update`,{...e,content:Q.current,tags:K.current,id:k||O},j);if(a.remove(n._id),"post"===V?.contentType){const e=t.state||[];t.removeCache(`/post-${n._id}`);for(let n=(V?.onPage||0)+1;n>=0;n--)t.removeCache(`${V.contentType}-${n}`);return V.isFromAdmin?D(`/admin/${V.contentType}`):D(`/post/${n._id}`),e.map((e=>e._id===n._id?n:e))}if("comment"===V?.contentType){const e=t.state||{pagesCount:0,comments:[]};return V.isFromAdmin?void D("/admin/comment"):(D(`/post/${V?.onPost}?page=${V?.onPage}`),{...e,comments:e.comments.map((e=>e._id===n._id?n:e))})}}const n=await g.post("/insert/post",{...e,content:Q.current,tags:K.current},j),r=t.state||[];return D(`/post/${n._id}`),[...r||[],n]}))})),isPending:!1,children:["comment"!==V?.contentType?e.jsxs(o.Fragment,{children:[e.jsx(f,{register:q,name:"title",errors:G,placeholder:"Post title"}),e.jsx(x,{register:q,name:"isHidden",label:"Hidde post"}),e.jsx(h,{getTags:e=>{K.current=e},placeholder:"Post tags",value:K.current})]}):null,e.jsx(w,{defaultValue:Q.current,placeholder:"Write content body here...",getValue:e=>{Q.current=e}}),e.jsxs("div",{className:A,children:[e.jsx(p,{label:V?.isEdit?`Edit ${V?.contentType}`:"Create post",type:"submit"}),e.jsx(p,{label:V&&!O?"Save draft changes":"Save as draft",onClick:()=>{const e=k||O||window.crypto.randomUUID();b($({...V,_id:e,content:Q.current})),N.set({"draft-id":e}),N.remove(["content-id"]),a.remove(O)}}),e.jsx(p,{label:"Delete draft",onClick:()=>{b(C(k||O)),N.remove(["draft-id"]),K.current=[],Q.current="",L()}})]}),J&&e.jsx(_,{error:J.message})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{P as W,T as c,H as p};
