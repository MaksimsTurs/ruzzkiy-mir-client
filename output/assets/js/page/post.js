import{j as e,L as a,S as t,g as r}from"../react.js";import{u as s}from"./about.js";import{P as o,a as n}from"./home.js";import{D as i,_ as l,f as m,A as c,M as d,P as h,E as u}from"./admin.js";import{I as x}from"./database.js";const _={author_preview_loader_avatar:"aa",loader:"ba",author_preview_loader_text:"ca"};function j(){return e.jsxs("div",{className:"main-content-container flex-column-center-center-medium",children:[e.jsx("div",{className:_.author_preview_loader_avatar}),e.jsx("div",{style:{width:"6rem",height:"1rem"},className:_.author_preview_loader_text}),e.jsx("div",{style:{width:"4rem",height:"1rem"},className:_.author_preview_loader_text}),e.jsx("div",{style:{width:"12rem",height:"1rem"},className:_.author_preview_loader_text})]})}const g="U",p={author_avatar:"Ia",author_name:"Ja",author_registrate_data:"Ka"};function f({author:r}){const s="Admin"===r.role?"#F48023":"#1682FD",o=i.getDifference(r.createdAt).getSortDate({year:"[year] year [month] months ago!",month:"[month] month [day] days ago!",day:"[day] day [hour] hours ago!",hour:"[hour] hour [minute] minutes ago!",minute:"days [minute] minutes [second] seconds ago!",second:"[second] seconds ago!"});return e.jsxs("div",{style:{height:"fit-content",flexShrink:0},className:"flex-column-center-normal-none main-content-container",children:[e.jsx(x,{classNames:{img:p.author_avatar},src:r.avatar,alt:r.name}),e.jsxs("div",{className:"flex-column-center-normal-none",children:[e.jsx(a,{to:`/user/${r._id}`,className:p.author_name,children:r.name}),e.jsxs("div",{className:"flex-row-center-center-medium",style:{color:s},children:[e.jsx(t,{size:17}),e.jsx("p",{className:p.author_role,children:r.role})]}),e.jsx("p",{className:p.author_registrate_data,children:o})]})]})}const v=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const{id:a}=r(),{data:t,isPending:i,isMutating:x,isFetching:_,error:p}=l({deps:[`post-${a}`],request:async()=>m.get(`/post/${a}`,c)});return s({title:t?.title,description:"Hier kannst du vollständige version von gewählte post sehen und ihn kommentieren."}),e.jsxs(e.Fragment,{children:[x?e.jsx(d,{}):null,p?e.jsx(h,{error:p}):e.jsxs("div",{className:`${g} flex-row-normal-normal-medium`,children:[e.jsx("div",{style:{flexGrow:"1"},className:"flex-column-normal-normal-medium",children:e.jsxs(e.Fragment,{children:[i?e.jsx(o,{}):e.jsx(n,{post:t,type:"post"}),e.jsx(u,{option:{height:"FULL",flexCenterCenter:!0},label:"Kommentar funktion ist zu zeit aus!"})]})}),_?e.jsx(j,{}):t&&t?.author?e.jsx(f,{author:t.author}):null]})]})}},Symbol.toStringTag,{value:"Module"}));export{j as P,v as p};
