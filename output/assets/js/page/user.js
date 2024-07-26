import{j as e,w as s,S as a,n as r,e as t,r as n,x as l,L as i,i as o}from"../react.js";import{D as d,g as m,_ as c,M as _,F as u,T as h,h as x,f as j,i as g,P as p,E as v,u as N}from"./admin.js";import{I as b,b as f,c as y,B as $,u as w,E as C}from"./home.js";const R={user_loader_body:"-_",user_loader_header:"a_",user_loader_animation:"b_",loader:"c_",user_loader_data:"d_"};function S(){return e.jsxs("div",{style:{padding:"0rem"},className:`${R.user_loader_body} main-content-container`,children:[e.jsxs("div",{className:`${R.user_loader_header} flex-row-normal-center-none`,children:[e.jsxs("div",{style:{flexGrow:1},className:"flex-column-center-center-small",children:[e.jsx("div",{style:{width:"5rem",height:"5rem"},className:`${R.user_loader_animation}`}),e.jsx("div",{style:{width:"7rem",height:"1.5rem"},className:`${R.user_loader_animation}`})]}),e.jsx("div",{style:{width:"2rem",height:"2rem"},className:`${R.user_loader_animation}`})]}),e.jsxs("div",{className:"flex-row-normal-normal-none",children:[e.jsxs("div",{className:`${R.user_loader_data} flex-column-normal-normal-small`,children:[e.jsx("div",{style:{borderRadius:"5px",width:"4rem",height:"1rem"},className:R.user_loader_animation}),e.jsx("div",{style:{borderRadius:"5px",width:"5rem",height:"1rem"},className:R.user_loader_animation})]}),e.jsxs("div",{className:`${R.user_loader_data} flex-column-normal-normal-small`,children:[e.jsx("div",{style:{borderRadius:"5px",width:"3rem",height:"1rem"},className:R.user_loader_animation}),e.jsx("div",{style:{borderRadius:"5px",width:"8rem",height:"1rem"},className:R.user_loader_animation})]}),e.jsxs("div",{className:`${R.user_loader_data} flex-column-normal-normal-small`,children:[e.jsx("div",{style:{borderRadius:"5px",width:"6rem",height:"1rem"},className:R.user_loader_animation}),e.jsx("div",{style:{borderRadius:"5px",width:"6.5rem",height:"1rem"},className:R.user_loader_animation})]})]})]})}function k(){return e.jsxs("div",{className:`${R.user_loader_body} main-content-container`,children:[e.jsxs("div",{style:{marginBottom:"0.5rem",paddingBottom:"0.5rem",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"},className:"flex-row-center-normal-small",children:[e.jsx("div",{style:{borderRadius:"5px",width:"1.5rem",height:"1.5rem"},className:R.user_loader_animation}),e.jsx("div",{style:{borderRadius:"5px",width:"9rem",height:"1.5rem"},className:R.user_loader_animation})]}),e.jsxs("div",{className:"flex-column-normal-normal-small",children:[e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:R.user_loader_animation})]})]})}const F="_",I={user_data_header:"h_",user_data_img_loader:"i_",user_data_header_top:"j_",user_data_img_container:"k_",user_data_img:"l_",user_data_role_container:"m_",user_data_header_edit_button:"n_",user_data_header_bottom:"o_"};function V({user:t,setIsVisible:n}){const l="Admin"===t?.role,i=l?e.jsx(a,{}):e.jsx(r,{}),o=l?"#F48023":"#1682FD";return e.jsxs("div",{className:`${I.user_data_header} main-content-container flex-column-normal-normal-small`,children:[e.jsxs("div",{className:`${I.user_data_header_top} flex-row-normal-center-none`,children:[e.jsxs("div",{className:`${I.user_data_img_container} flex-column-normal-normal-small`,children:[e.jsx(b,{classNames:{img:I.user_data_img,loader:I.user_data_img_loader},src:t.avatar,alt:t.name}),e.jsxs("div",{style:{color:o},className:`${I.user_data_role_container} flex-row-center-normal-small`,children:[i,e.jsx("p",{children:t.role})]})]}),e.jsx(s,{className:I.user_data_header_edit_button,size:30,onClick:()=>{n(!0)}})]}),e.jsxs("div",{className:I.user_data_header_bottom,children:[e.jsxs("section",{children:[e.jsx("p",{children:"Name"}),e.jsx("p",{children:t.name})]}),e.jsxs("section",{children:[e.jsx("p",{children:"Registrated"}),e.jsx("p",{children:d.getDifference(t.createdAt)})]}),e.jsxs("section",{children:[e.jsx("p",{children:"Contents"}),e.jsx("p",{children:t.myContent.length})]})]})]})}const A={edit_user_container:"x",edit_user_body:"y",edit_user_log_out:"z",edit_user_container_visible:"A"};function B({isVisible:s,_id:a,setIsVisible:r}){const{submit:l,reset:i,formState:{errors:o}}=m([]),{mutate:d,isMutating:p}=c({deps:[`user-${a}`]}),v=t(),N=f(),b=n.useRef(null),w=y().isHaveRoleOrIsIDEqual(["Admin"],a).result(),C=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[p?e.jsx(_,{}):null,e.jsx("div",{className:`${s?A.edit_user_container_visible:""} ${A.edit_user_container} flex-row-center-center-none`,children:e.jsx("div",{ref:b,children:e.jsxs(u,{onSubmit:l((e=>{w&&d({key:[`user-${a}`],request:async function(s){const r=await j.post("/update/user",g({...e,_id:a}));return N.create({setSession:r}),C(),i(),{...s.state,...r}}})})),className:A.edit_user_body,children:[e.jsx(h,{errors:o,name:"name",placeholder:"You name"}),e.jsx(x,{name:"avatar",label:"Chose you avatar!",isChange:p}),e.jsxs("div",{className:"flex-row-normal-normal-small",children:[e.jsx($,{className:A.edit_user_log_out,onClick:()=>{N.out(),v("/")},label:"Log out"}),e.jsx($,{onClick:C,label:"Stop editing"}),e.jsx($,{type:"submit",label:"Save changes"})]})]})})})]})}const q={user_data_user_content:"Z",user_data_link:"__"};function z({userContent:s,user:a}){return e.jsxs("ul",{className:`${q.user_data_user_content} main-content-container flex-column-normal-normal-small`,children:[e.jsxs("li",{className:"flex-row-center-normal-medium",children:[e.jsx(l,{}),a.name," content"]}),(s.content||[]).length>0?e.jsx(p,{pagesCount:s.pagesCount||0}):null,0===(s.content||[]).length?e.jsx(v,{option:{size:"SMALL",flexCenterCenter:!0},label:"This author have no content!"}):s.content.map((s=>{const a=Boolean(s.title)?`/post/${s._id}`:`/post/${s.post?._id}#${s._id}`,r=s.post?.content||s.content;return e.jsx("li",{className:"flex-column-normal-normal-small",children:e.jsxs(i,{className:q.user_data_link,to:a,children:[e.jsx("p",{children:s.title||s.post?.title}),e.jsx("p",{children:r})]})},s._id)})),(s.content||[]).length>0?e.jsx(p,{pagesCount:s.pagesCount||0}):null]})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{id:s}=o(),a=N(),[r,t]=n.useState(!1),l=parseInt(a.get("list-page")||"0"),i=c({deps:[`user-${s}`],request:async()=>j.get(`/user/${s}`)}),d=c({prev:[`user-${s}-content-${l>0?l-1:l}`],deps:[`user-${s}-content-${l}`],request:async()=>await j.get(`/user/${s}/content/${l}`)});return w({title:i.data?.name,description:`Hier kannst du detalierte daten von ${i.data?.name} ansehen.`}),e.jsx(e.Fragment,{children:i.error||d.error?e.jsx(C,{code:(i.error||d.error).code,message:(i.error||d.error).message}):e.jsxs(e.Fragment,{children:[i.data?e.jsx(B,{isVisible:r,setIsVisible:t,_id:i.data._id}):null,e.jsx("div",{className:"flex-row-normal-center-none",children:e.jsxs("div",{className:`${F} flex-column-normal-normal-medium`,children:[!i.isFetching&&i.data?e.jsx(V,{user:i.data,setIsVisible:t}):e.jsx(S,{}),!d.isFetching&&i.data&&d.data?e.jsx(z,{user:i.data,userContent:d.data}):e.jsx(k,{})]})})]})})}},Symbol.toStringTag,{value:"Module"}));export{S as U,k as a,D as p};
