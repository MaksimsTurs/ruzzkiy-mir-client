const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/page/home.js","assets/js/react.js","assets/js/__commonjsHelpers__.js","assets/js/page/admin.js","assets/css/page/admin.css","assets/css/page/home.css","assets/js/page/post.js","assets/css/page/post.css","assets/js/page/write-new.js","assets/css/page/write-new.css","assets/js/page/search.js","assets/css/page/search.css","assets/js/page/user.js","assets/css/page/user.css"])))=>i.map(i=>d[i]);
import{j as e,L as s,D as a,a as r,z as t,G as n,I as i,J as o,m as l,r as m,K as d,Q as c,R as h,V as u,W as x}from"./react.js";import{u as j,g as p,F as _,T as f,h as g,i as w,d as N,m as y,R as v}from"./page/admin.js";import{c as b,a as P,b as E,W as L}from"./page/write-new.js";import{b as $,I as S,c as k,P as R,u as z,A,L as O,E as M}from"./page/home.js";import{P as T}from"./page/post.js";import{U as D,a as I}from"./page/user.js";import"./__commonjsHelpers__.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();const W={},C=function(e,s,a){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),a=e?.nonce||e?.getAttribute("nonce");r=Promise.all(s.map((e=>{if((e=function(e){return"/"+e}(e))in W)return;W[e]=!0;const s=e.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const t=document.createElement("link");return t.rel=s?"stylesheet":"modulepreload",s||(t.as="script",t.crossOrigin=""),t.href=e,a&&t.setAttribute("nonce",a),document.head.appendChild(t),s?new Promise(((s,a)=>{t.addEventListener("load",s),t.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}return r.then((()=>e())).catch((e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e}))},U=P({reducer:b({creator:E})}),V={header_container:"t",header_website_name:"u",header_user_action_container:"v",header_user_text:"w",header_user_link:"x"},H={loader_element_animation:"da",loader:"ea",loader_container:"fa",loader_button:"ga",loader_avatar:"ha"};function q(){return e.jsxs("div",{className:H.loader_container,children:[e.jsx("div",{className:`${H.loader_element_animation} ${H.loader_button}`}),e.jsx("div",{className:`${H.loader_element_animation} ${H.loader_button}`}),e.jsx("div",{className:`${H.loader_element_animation} ${H.loader_avatar}`})]})}const F={authorization_modal_container:"ia",authorization_modal_body:"ja",authorization_modal_container_hidden:"ka"};function J(){const s=$(),a=j(),{submit:r,reset:t,formState:{errors:n}}=p([["email","isPattern:^[^\\s@]+@[^\\s@]+.[^\\s@]+$:Email is incorrect!"],["name",["isMax:12:Name is to long!","isMin:3:Name is to short!"]],["password","isMin:8:Password is to short!"]]),i=JSON.parse(a.get("login-modal")||"false");return s.clearError(),e.jsx("div",{className:i?F.authorization_modal_container:F.authorization_modal_container_hidden,children:e.jsxs(_,{errors:s.error?.message?[s.error.message]:[],className:F.authorization_modal_body,onSubmit:r((e=>{s.create({apiURL:"/login",body:e,redirectURL:"/",setToken:!0}),t()})),isPending:s.isLoading,buttonLabel:"Log in",children:[e.jsx(f,{name:"name",errors:n,placeholder:"Write you name here..."}),e.jsx(f,{name:"email",type:"email",errors:n,placeholder:"Write you email here..."}),e.jsx(f,{name:"password",type:"password",errors:n,placeholder:"Write you password here..."})]})})}function B(){const s=j(),a=$(),{submit:r,reset:t,formState:{errors:n}}=p([["email","isPattern:^[^\\s@]+@[^\\s@]+.[^\\s@]+$:Email is incorrect!"],["name",["isMax:12:Name is to long!","isMin:3:Name is to short!"]],["password",["isMin:8:Password is to short!","isEqualWith:confirmPassword:Passwords does match!"]],["confirmPassword",["isMin:8:Password is to short!"]]]),i=JSON.parse(s.get("registration-modal")||"false");return a.clearError(),e.jsx("div",{className:i?F.authorization_modal_container:F.authorization_modal_container_hidden,children:e.jsxs(_,{isPending:a.isLoading,buttonLabel:"Registrate",errors:a.error?.message?[a.error.message]:[],className:F.authorization_modal_body,onSubmit:r((e=>{const s=w(e);0===s.get("avatar").size&&s.set("avatar",function(e){const s=220,a=["#166bfd","#0e49ad","#3266bf","#0c3d91","#0040e3","#265be0","#1f45a3","#0235b3","#2268c9","#1b529e","#F48023","#bf641b","#9e5f2c","#b57948","#b86725","#fa8c32","#ff7300","#c74d06","#ed6e24","#bf6836"],r=document.createElement("canvas"),t=r.getContext("2d");return r.width=s,r.height=s,t.fillStyle=a[Math.floor(Math.random()*a.length-1)],t.fillRect(0,0,s,s),t.font="100px Arial",t.fillStyle="white",t.textBaseline="middle",t.fillText(e[0],s/3.1,110),r.toDataURL("image/webp",50).replace("data:image/webp;base64,","")}(e.name)),a.create({apiURL:"/registrate",body:s,redirectURL:"/",setToken:!0})})),children:[e.jsx(f,{errors:n,name:"name",placeholder:"You name"}),e.jsx(f,{errors:n,name:"email",placeholder:"You e-mail",type:"email"}),e.jsx(f,{errors:n,name:"password",placeholder:"You password",type:"password"}),e.jsx(f,{errors:n,name:"confirmPassword",placeholder:"Confirm you password",type:"password"}),e.jsx(g,{name:"avatar",label:"Chose you avatar!"})]})})}function Y(){const r=$(),t=j(),n=e=>{t.set({[`${e}-modal`]:!JSON.parse(t.get(`${e}-modal`)||"false")})};return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(B,{}),e.jsxs("header",{className:`${V.header_container} flex-row-center-space-between-none`,children:[e.jsx(s,{className:V.header_website_name,to:"/",children:"Ruzzkyi Mir"}),r.isAuthPending?e.jsx(q,{}):r.user?e.jsx("section",{className:`${V.header_user_container} flex-row-center-center-medium`,children:e.jsx(s,{className:V.header_user_link,to:`/user/${r.user._id}`,children:e.jsx(S,{styles:{loader:{width:"2rem",height:"2rem"}},src:r.user.avatar,alt:r.user.name})})}):e.jsxs("section",{className:`${V.header_user_action_container} flex-row-center-normal-none`,children:[e.jsx("button",{className:"flex-row-center-center-none",onClick:()=>n("registration"),children:e.jsxs("section",{className:`${V.header_user_text} flex-row-center-normal-medium`,children:[e.jsx(a,{}),"Registrate"]})}),e.jsx("button",{onClick:()=>n("login"),children:"Login"})]})]})]})}const G="g",K="i",Q="j",X="k",Z={side_menu_loader_container:"N",side_menu_loader_item:"O",loader:"P"};function ee(){return e.jsxs("div",{className:Z.side_menu_loader_container,children:[e.jsx("div",{className:Z.side_menu_loader_item}),e.jsx("div",{className:Z.side_menu_loader_item}),e.jsx("div",{className:Z.side_menu_loader_item}),e.jsx("div",{className:Z.side_menu_loader_item})]})}function se(){const{pathname:a}=r(),m=$(),d=k(),c=t((e=>e.creator)),h=/[\#\[\]\{\}\(\)]/g,u=[{title:"Home",path:"/",icon:e.jsx(n,{})},{title:"Search",path:"/search",icon:e.jsx(i,{})}];return d.isHaveRole(["Admin"]).result()&&u.push({title:"Admin",path:"/admin/post",icon:e.jsx(o,{})},{title:"Write post",path:"/write-post",icon:e.jsx(l,{})}),d.isHaveRole(["Creator"]).result()&&u.push({title:"Write post",path:"/write-post",icon:e.jsx(l,{})}),e.jsxs("aside",{className:`${G} flex-column-normal-normal-medium`,children:[e.jsxs("div",{className:"flex-column-normal-normal-none",children:[e.jsx("p",{className:K,children:"Menu"}),m.isAuthPending?e.jsx(ee,{}):e.jsx("section",{className:"flex-column-normal-normal-small",children:u.map((r=>e.jsxs(s,{className:a.split("/")[1]===r.path.split("/")[1]?`${X} flex-row-center-normal-medium`:"flex-row-center-normal-medium",to:r.path,children:[r.icon,e.jsx("p",{className:Q,children:r.title})]},r.title)))})]}),c.contentDraft.length>0?e.jsxs("div",{className:"flex-column-normal-normal-none",children:[e.jsx("p",{className:K,children:"Draft"}),e.jsx("section",{className:"flex-column-normal-normal-small",children:c.contentDraft.slice(0,5).map((a=>e.jsx(s,{className:Q,to:`/write-post?draft-id=${a._id}`,children:a.content.replace(h,"").trim()},a._id)))})]}):null]})}function ae(){return e.jsxs("div",{style:{width:"100%"},className:"flex-row-normal-normal-medium",children:[e.jsxs("div",{style:{width:"100%"},className:"flex-column-normal-normal-medium",children:[e.jsx(R,{}),e.jsx(N,{}),e.jsx(R,{}),e.jsx(R,{}),e.jsx(N,{})]}),e.jsx(T,{})]})}const re="m",te="n";function ne(){return z({title:"Finden",description:"Hier kannst du posts mit gegebenen sortierung optionen finden."}),e.jsxs("div",{className:`${re} flex-row-normal-normal-medium`,children:[e.jsxs("div",{style:{width:"100%"},className:"flex-column-normal-normal-small",children:[e.jsx(N,{}),e.jsx(R,{}),e.jsx(R,{}),e.jsx(R,{})]}),e.jsxs("div",{style:{width:"20rem",height:"fit-content"},className:"main-content-container flex-column-normal-normal-medium",children:[e.jsxs("div",{className:"flex-row-normal-normal-medium",children:[e.jsx("div",{style:{width:"5rem"},className:te}),e.jsx("div",{style:{width:"5rem"},className:te}),e.jsx("div",{style:{width:"5rem"},className:te})]}),e.jsxs("div",{className:"flex-column-normal-normal-medium",children:[e.jsx("div",{style:{width:"100%"},className:te}),e.jsx("div",{style:{width:"100%"},className:te}),e.jsx("div",{style:{width:"100%"},className:te}),e.jsx("div",{style:{width:"100%"},className:te})]}),e.jsxs("div",{className:"flex-row-normal-normal-medium",children:[e.jsx("div",{style:{width:"50%"},className:te}),e.jsx("div",{style:{width:"50%"},className:te})]})]})]})}function ie(){return e.jsxs("div",{style:{width:"100%"},className:"flex-column-center-center-medium",children:[e.jsx(D,{}),e.jsx(I,{})]})}const oe="_",le="a";function me(){return z({title:"Admin panel"}),e.jsxs("div",{style:{width:"100%"},className:"flex-row-normal-normal-none",children:[e.jsxs("div",{style:{paddingRight:"11rem",width:"100%"},className:"flex-column-normal-normal-medium",children:[e.jsx(N,{}),e.jsx(y,{}),e.jsx(N,{})]}),e.jsxs("div",{className:`${oe} flex-column-normal-normal-medium`,children:[e.jsx("div",{style:{width:"100%",height:"2rem"},className:le}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:le}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:le}),e.jsx("div",{style:{width:"100%",height:"2rem"},className:le})]})]})}const de=m.lazy((()=>C((()=>import("./page/home.js").then((e=>e.p))),__vite__mapDeps([0,1,2,3,4,5])))),ce=m.lazy((()=>C((()=>import("./page/post.js").then((e=>e.p))),__vite__mapDeps([6,1,2,3,4,0,5,7])))),he=m.lazy((()=>C((()=>import("./page/write-new.js").then((e=>e.p))),__vite__mapDeps([8,1,2,3,4,0,5,9])))),ue=m.lazy((()=>C((()=>import("./page/search.js")),__vite__mapDeps([10,1,2,3,4,0,5,11])))),xe=m.lazy((()=>C((()=>import("./page/user.js").then((e=>e.p))),__vite__mapDeps([12,1,2,3,4,0,5,13])))),je=m.lazy((()=>C((()=>import("./page/admin.js").then((e=>e.p))),__vite__mapDeps([3,1,2,4]))));d(document.getElementById("root")).render(e.jsx(c,{children:e.jsx(A,{children:e.jsx(v,{children:e.jsxs(h,{store:U,children:[e.jsx(Y,{}),e.jsxs("div",{className:"flex-row-normal-normal-medium",style:{padding:"0rem 1rem 0rem 0rem",flexGrow:"1"},children:[e.jsx(se,{}),e.jsx("main",{children:e.jsxs(u,{children:[e.jsx(x,{path:"/",element:e.jsx(m.Suspense,{fallback:e.jsx(O,{}),children:e.jsx(de,{})})}),e.jsx(x,{path:"/post/:id",element:e.jsx(m.Suspense,{fallback:e.jsx(ae,{}),children:e.jsx(ce,{})})}),e.jsx(x,{path:"/write-post",element:e.jsx(m.Suspense,{fallback:e.jsx(L,{}),children:e.jsx(he,{})})}),e.jsx(x,{path:"/search",element:e.jsx(m.Suspense,{fallback:e.jsx(ne,{}),children:e.jsx(ue,{})})}),e.jsx(x,{path:"/user/:id",element:e.jsx(m.Suspense,{fallback:e.jsx(ie,{}),children:e.jsx(xe,{})})}),e.jsx(x,{path:"/admin/:tab",element:e.jsx(m.Suspense,{fallback:e.jsx(me,{}),children:e.jsx(je,{})})}),e.jsx(x,{path:"*",element:e.jsx(M,{code:404,message:"Page not found!",underText:"Site there you search is not implemented or not exist!"})})]})})]})]})})})}));
