import{r as e,j as s,e as t,o as a,a as n,L as r,p as o,k as i,P as l,E as c,q as d,i as m,s as u,t as p,X as _}from"../react.js";import{f as x,c as h,u as j,_ as g,D as v,a as f,C as N,P as w,E as $,M as y}from"./admin.js";const b={get:(e,s)=>JSON.parse(localStorage.getItem(e)||s),set:(e,s)=>{localStorage.setItem(e,JSON.stringify(s))},remove:e=>{localStorage.removeItem(e)}},C=e.createContext(void 0);function S({children:t}){const[a,n]=e.useState({isAuthPending:!1,isLoading:!1});return e.useEffect((()=>{!async function(){try{if(!a.user){n({isAuthPending:!0,isLoading:!1});const e=await x.get("/authenticate",{Authorization:`Bearer ${h.getOne("PR_TOKEN")}`}),s=Object.hasOwn(e,"token");n({isAuthPending:!1,isLoading:!1,error:void 0,user:s?e:void 0})}}catch(e){n({isAuthPending:!1,isLoading:!1,error:void 0,user:void 0})}}()}),[]),s.jsx(C.Provider,{value:{updateUserState:n,userState:a},children:t})}function k(){const s=t(),a=e.useContext(C),n=j(),r=n.get("login-modal"),o=n.get("registration-modal");return{...a?.userState,create:async function(e){try{if(e.setSession)return a?.updateUserState({user:e.setSession,isAuthPending:!1,isLoading:!1});a?.updateUserState({isAuthPending:!1,isLoading:!0});const t=await x.post(e.apiURL,e.body);a?.updateUserState({isAuthPending:!1,isLoading:!1,error:void 0,user:t}),e?.setToken&&h.set("PR_TOKEN",t.token),e?.redirectURL&&s(e.redirectURL)}catch(t){a.updateUserState((e=>({...e,isAuthPending:!1,isLoading:!1,error:t instanceof Error?{code:503,message:"Service Unavailable!"}:JSON.parse(t)})))}},out:function(){a?.updateUserState({isAuthPending:!1,isLoading:!1})},clearError:function(){e.useEffect((()=>{a?.updateUserState((e=>({...e,error:void 0})))}),[r,o])}}}const E={default_image:"Ea",default_image_loader:"Fa",loader:"Ga"};function A({className:e,style:t}){return s.jsx("div",{style:t,className:`${E.default_image_loader} ${e}`})}function P({alt:t,classNames:n,src:r,styles:o}){const[i,l]=e.useState(!1),c=e.useRef("default"),d=e.useRef(null),m=(c.current?.search(/\http(s)/)||-1)>-1;return e.useEffect((()=>{d.current&&(d.current.addEventListener("loadstart",(()=>{l(!1)})),d.current.addEventListener("load",(e=>{const s=e.target;c.current=r,l(s.complete)}),{once:!0}),d.current.addEventListener("error",(()=>{c.current=void 0,l(!1)}),{once:!0}))}),[d.current]),s.jsxs(e.Fragment,{children:[m||i?!i&&m&&s.jsx(A,{className:n?.loader,style:o?.loader}):s.jsx(a,{className:`${n?.img} ${E.default_image}`,size:40}),s.jsx("img",{ref:d,src:r,alt:t,className:n?.img,style:{...o?.img,display:(m?c.current:i)?"block":"none"}})]})}function R(){const s=e.useContext(C);let t=[];return{isHaveRole:function(e){return e.includes(s?.userState.user?.role||"User")||t.push(1),this},isIDEqual:function(e){return s?.userState.user?._id===e||t.push(1),this},isHaveRoleAndIsIDEqual:function(e,a){return s?.userState.user?._id===a&&e.includes(s?.userState.user?.role||"User")||t.push(1),this},isHaveRoleOrIsIDEqual:function(e,a){return s?.userState.user?._id===a||e.includes(s?.userState.user?.role||"User")||t.push(1),this},result:function(){const e=t.length<=0;return t=[],e}}}const I={post_loader_container:"d_",post_loader_text:"e_",loader:"f_",post_loader_tag:"g_",post_loader_avatar:"h_"};function O(){return s.jsxs("div",{className:`${I.post_loader_container} main-content-container flex-column-normal-normal-medium`,children:[s.jsxs("div",{className:"flex-row-normal-normal-medium",children:[s.jsx("div",{className:I.post_loader_avatar}),s.jsxs("div",{className:"flex-column-normal-normal-medium",children:[s.jsx("div",{style:{width:"4rem"},className:I.post_loader_text}),s.jsx("div",{style:{width:"7rem"},className:I.post_loader_text})]})]}),s.jsx("div",{style:{width:"11rem"},className:I.post_loader_text}),s.jsxs("div",{className:"flex-column-normal-normal-medium",children:[s.jsx("div",{style:{width:"50%"},className:I.post_loader_text}),s.jsx("div",{style:{width:"20%"},className:I.post_loader_text})]}),s.jsxs("div",{className:"flex-row-normal-space-between-none",children:[s.jsxs("div",{className:"flex-row-normal-normal-medium",children:[s.jsx("div",{className:I.post_loader_tag}),s.jsx("div",{className:I.post_loader_tag}),s.jsx("div",{className:I.post_loader_tag})]}),s.jsxs("div",{className:"flex-row-normal-normal-medium",children:[s.jsx("div",{className:I.post_loader_tag}),s.jsx("div",{className:I.post_loader_tag}),s.jsx("div",{className:I.post_loader_tag})]})]})]})}function H(s){e.useEffect((()=>{s.title&&(document.title=s.title)}),[s]),e.useEffect((()=>{delete s.title;const e=Object.entries(s);for(let[s,t]of e){const e=document.createElement("meta");e.name=s,e.content=t,document.head.appendChild(e)}}),[])}function L({containersCount:e}){return H({title:"Home",description:"Hier kannst du alle letzt geschriebene posts ansehen."}),s.jsx("div",{className:"flex-column-normal-normal-small",children:[...Array(e||3)].map(((e,t)=>s.jsx(O,{},t)))})}const T={error_container:"d",error_body:"e",error_error:"f"};function U({code:e,message:t,underText:a}){return s.jsx("div",{className:`${T.error_container} flex-row-center-center-none`,children:s.jsxs("div",{className:T.error_body,children:[s.jsxs("div",{className:`${T.error_error} flex-column-normal-normal-none`,children:[s.jsxs("p",{children:["Error - ",e,"!"]}),s.jsx("p",{children:t})]}),a?s.jsx("p",{children:a}):null]})})}const D={post_content_container:"Q",post_short_view:"R",post_content_date:"S",post_data:"T",post_hidden:"U",post_statistic_data:"V",post_liked:"W",like:"X"},q={post_header:"Pa",post_header_author_not_defined:"Qa",post_action_button:"Ra",post_action_container:"Sa",post_create_date:"Ta"};function z({user:e,createdAt:a,type:m,contentID:u,postID:p,content:_,tags:N,title:w,isHidden:$}){const y=R(),{mutate:C,changeError:S}=g({deps:[]}),k=j(),E=t(),{pathname:A}=n(),I=y.isHaveRoleOrIsIDEqual(["Admin","Creator"],e?._id)?.result(),O=A.search("/post/")>-1,H=A.search("/")>-1,L=A.search("/search")>-1,T="preview"===m?"post":m,U=parseInt(k.get("page")||"0"),D=e=>{const s=O&&"comment"===m?[`post-${p}-comments-${k.get("page")||0}`]:H?["all-posts"]:[];if(!y.isHaveRole(["Creator","Admin"]).result())return S(s,{code:403,message:"You have no edit and remove permission!"});if("edit"===e){if(y.isHaveRole(["Creator"]).result())return b.set(u,{content:_,tags:N,title:w,contentType:T,onPage:U,onPost:p}),E(`/write-post?is-edit=true&content-id=${u}`);if(y.isHaveRole(["Admin"]).result())return E(`/admin/${T}?id=${u}&${T}-edit-modal=true`)}C({key:s,request:async s=>{if("remove"===e){const e=await x.get(`/admin/remove/${f(T)}/${u}`,{Authorization:`Bearer ${h.getOne("PR_TOKEN")}`});if(O&&"comment"===m){const t=s.state||{comments:[],pagesCount:0};if(1===t.comments.length&&t.pagesCount>=1){for(let e=t.pagesCount-1;e>=0;e--)e!==U&&s.removeCache(`post-${p}-comments-${e}`);return E(`/post/${p}?page=${+U-1}`),{pagesCount:0,comments:[]}}return{...t,comments:t.comments.filter((s=>s._id!==e._id))}}if(H){return(s.state||[]).filter((s=>s._id!==e._id))}}const t=await x.post(`/admin/${T}/update`,{id:u,isHidden:"hidde"===e},{Authorization:`Bearer ${h.getOne("PR_TOKEN")}`});if(O){const e=s.state||{pagesCount:0,comments:[]};return{...e,comments:e.comments.map((e=>e._id===t._id?{...e,...t}:e))}}return(s.state||[]).map((e=>e._id===t._id?t:e))}})};return s.jsxs("div",{className:`${q.post_header} flex-row-center-space-between-none`,children:[e?s.jsxs("div",{className:"flex-row-normal-normal-medium",children:[s.jsx(P,{src:e?.avatar,alt:e?.name||"User avatar"}),s.jsxs("div",{className:q.post_author,children:[s.jsx(r,{to:`/user/${e?._id}`,children:e?.name}),s.jsx("p",{className:q.post_create_date,children:v.getDifference(a)})]})]}):s.jsxs("div",{className:`${q.post_header_author_not_defined} flex-row-center-normal-medium`,children:[s.jsx(o,{}),s.jsx("p",{children:"Author is possibly deleted!"})]}),I&&!L?s.jsxs("button",{className:q.post_action_button,children:[s.jsx("svg",{viewBox:"0 0 128 512",children:s.jsx("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})}),s.jsxs("ul",{className:`${q.post_action_container} flex-column-normal-normal-none`,children:[s.jsxs("li",{onClick:()=>D("remove"),className:"flex-row-center-normal-medium",children:[s.jsx(i,{}),s.jsx("p",{children:"Remove"})]}),s.jsxs("li",{onClick:()=>D("edit"),className:"flex-row-center-normal-medium",children:[s.jsx(l,{}),s.jsx("p",{children:"Edit"})]}),s.jsxs("li",{onClick:()=>D($?"show":"hidde"),className:"flex-row-center-normal-medium",children:[$?s.jsx(c,{}):s.jsx(d,{}),s.jsx("p",{children:$?"Show":"Hidden"})]})]})]}):null]})}const B={post_wrapper_container:"Ja",post_is_hidden:"Ka"};function F({children:e,className:t}){return s.jsxs("section",{className:`${B.post_wrapper_container} ${t} main-content-container`,children:[t?s.jsxs("div",{className:`${B.post_is_hidden} flex-row-center-center-medium`,children:[s.jsx(d,{}),s.jsx("p",{children:"Hidden"})]}):null,s.jsx("div",{style:{padding:"1rem"},children:e})]})}const K={post_tags:"Oa"};function M({tags:e}){return s.jsx("div",{className:`${K.post_tags} flex-row-normal-normal-medium`,children:e.map((e=>e.trim()?s.jsx(r,{to:`/search?tag=${e}`,children:e},e):null))})}function G({post:e,type:a}){const{id:o}=m(),{pathname:i}=n(),l=k(),d=j(),_=R(),f=t(),{mutate:w}=g({deps:[]}),$=i.search("/post")>-1,y="/"===i,b=e.likedBy.includes(l.user?._id||""),C=_.isHaveRoleAndIsIDEqual(["Creator"],e?.author?._id).result(),S=_.isHaveRole(["Admin"]).result(),E=e.isHidden,A="preview"===a||"post"===a?e._id:o,P="comment"===a?parseInt(d.get("page")||"0"):0,I=E&&S||C&&E?D.post_hidden:"";E&&$&&!S&&!C&&"post"===a&&f("/");const O=s=>{d.set({type:s,"post-id":e._id,"list-page":0})};return s.jsx(s.Fragment,{children:y&&!C&&!S&&E?null:s.jsxs(F,{className:I,children:["comment"===a||"preview"===a?s.jsx(z,{tags:e.tags||[],title:e.title||"",content:e.content,isHidden:e.isHidden,postID:A,contentID:e._id,type:a,createdAt:e.createdAt,user:e?.author}):null,"post"===a?s.jsxs("div",{className:D.post_content_container,children:[s.jsx("h4",{children:e.title}),s.jsx("p",{className:D.post_content_date,children:v.getDifference(e.createdAt)}),s.jsx(N,{className:D.post_short_view,content:e.content})]}):null,"preview"===a?s.jsxs("div",{className:D.post_content_container,children:[s.jsx(r,{to:`/post/${e._id}`,children:e.title}),s.jsx(N,{className:D.post_short_view,content:e.content})]}):null,"comment"===a?s.jsx("div",{className:D.post_data,children:s.jsx(N,{content:e.content})}):null,s.jsxs("div",{className:"flex-row-center-space-between-none",children:["post"!==a&&"preview"!==a||!e.tags?null:s.jsx(M,{tags:e.tags}),s.jsxs("div",{className:"flex-row-center-normal-big",children:["preview"===a?s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:`${D.post_statistic_data} flex-row-center-normal-small`,onClick:y?()=>O("views"):void 0,children:[s.jsx(c,{}),e.viewedBy?.length]}),s.jsxs("p",{className:`${D.post_statistic_data} flex-row-center-normal-small`,onClick:y?()=>O("comments"):void 0,children:[s.jsx(u,{}),e.comments?.length]}),s.jsxs("p",{className:`${D.post_statistic_data} flex-row-center-normal-small`,onClick:y?()=>O("likes"):void 0,children:[s.jsx(p,{}),e.likedBy?.length]})]}):null,"comment"!==a&&"post"!==a||!l.user?null:s.jsxs("button",{onClick:async()=>{if(e.isHidden&&!l.user)return;const s="post"===a?[`post-${e._id}`]:[`post-${A}-comments-${P}`];w({key:s,request:async s=>{const t=await x.get(`/${a}/${e._id}/like`,{Authorization:`Bearer ${h.getOne("PR_TOKEN")}`});if("post"===a)return t;const n=s.state,r=n.comments||[];return{...n,comments:r.map((e=>e._id===t._id?t:e))}}})},className:`${b?D.post_liked:""} ${D.post_statistic_data} flex-row-center-normal-small`,children:[s.jsx(p,{}),e.likedBy.length]})]})]})]})})}const J={button:"F",button_label:"G"};function Q({label:e,className:t,onClick:a,type:n,isDisable:r}){return s.jsx("button",{type:n||"button",style:{width:13*e.length+"px"},disabled:r,className:`${J.button} ${t}`,onClick:a,children:s.jsx("section",{className:J.button_label,children:e})})}const Y={preview_container:"Y",preview_header:"Z",preview_item_count:"__"},V={pagintion_list_button:"dc",loader:"ec"};function W(){return s.jsxs("div",{className:"flex-row-normal-space-between-medium",children:[s.jsx("div",{className:V.pagintion_list_button}),s.jsxs("div",{className:"flex-row-normal-normal-small",children:[s.jsx("div",{className:V.pagintion_list_button}),s.jsx("div",{className:V.pagintion_list_button}),s.jsx("div",{className:V.pagintion_list_button})]}),s.jsx("div",{className:V.pagintion_list_button})]})}const X={preview_loader:"Ha",loader:"Ia"};function Z(){return s.jsxs("div",{style:{paddingTop:"1rem"},className:"flex-column-normal-normal-medium",children:[s.jsx("div",{className:X.preview_loader}),s.jsx("div",{className:X.preview_loader}),s.jsx("div",{className:X.preview_loader}),s.jsx("div",{className:X.preview_loader}),s.jsx("div",{className:X.preview_loader}),s.jsx("div",{className:X.preview_loader})]})}function ee({type:e}){const t=j(),a=t.get("post-id"),n=parseInt(t.get("list-page")||"0"),o={views:s.jsx(c,{}),likes:s.jsx(p,{}),comments:s.jsx(u,{})},{data:i,prev:l,isPending:d}=g({deps:[`preview-${e}-${a}-${n}`],prev:[`preview-${e}-${a}-${n-1<0?0:n-1}`],request:async()=>x.get(`/post/preview/${e}/${a}/${n}`)}),m=l?.pagesCount||i?.pagesCount||0;return s.jsxs("section",{className:`${Y.preview_container} main-content-container`,children:[s.jsxs("div",{className:`${Y.preview_header} flex-row-center-space-between-none`,children:[s.jsxs("div",{className:"flex-row-center-normal-medium",children:[o[e],s.jsx("h4",{className:Y.preview_type,children:f(e||"")})]}),s.jsx(_,{onClick:()=>{t.remove(["type","post-id","list-page"])}})]}),d?s.jsx(W,{}):m>1?s.jsx(w,{pagesCount:m}):null,d?s.jsx(Z,{}):s.jsx("div",{style:{paddingTop:m>1?"0.5rem":"0rem"},className:Y.preview_item_count_list,children:0===i?.items?.length?s.jsx($,{label:"Nothing found!"}):i?.items?.map((e=>s.jsxs(r,{to:`/user/${e._id}`,className:"flex-row-center-space-between-none",children:[s.jsxs("div",{className:"flex-row-center-normal-medium",children:[s.jsx(P,{src:e.avatar,alt:e.name}),s.jsx("p",{children:e.name})]}),s.jsx("p",{className:Y.preview_item_count,children:e.count})]},200*Math.random())))})]})}const se=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const t=j(),{isFetching:a,isMutating:n,data:r,error:o,mutate:i}=g({deps:["all-posts"],request:async()=>await x.get(`/home/${l}`,{Authorization:`Bearer ${h.getOne("PR_TOKEN")}`})}),l=parseInt(t.get("posts-count")||String(10)),c=t.get("type");return s.jsxs(e.Fragment,{children:[n?s.jsx(y,{}):null,s.jsxs("div",{style:{height:"100%",marginRight:c?"17rem":"0rem"},className:"flex-row-normal-normal-medium",children:[s.jsx("div",{style:{flexGrow:1},className:"flex-column-normal-normal-small",children:a?s.jsx(L,{}):o?s.jsx(U,{underText:"Go back or reload the page!",code:o.code,message:o.message}):r&&0===r.length?s.jsx($,{option:{flexCenterCenter:!0},label:"No post would founded!"}):r&&s.jsxs(e.Fragment,{children:[r.map((e=>s.jsx(G,{post:e,type:"preview"},e._id))),r.length%10==0?s.jsx("div",{className:"flex-row-center-center-none",children:s.jsx(Q,{onClick:async()=>{const e=l+10;t.set({"posts-count":e}),await i({key:["all-posts"],request:async()=>await x.get(`/home/${e}`)}),a||n||setTimeout((()=>window.scrollTo({behavior:"smooth",top:document.body.scrollHeight})),100)},label:"Load More"})}):null]})}),c?s.jsx(ee,{type:c}):null]})]})}},Symbol.toStringTag,{value:"Module"}));export{S as A,Q as B,U as E,P as I,L,O as P,G as a,k as b,R as c,b as l,se as p,H as u};
