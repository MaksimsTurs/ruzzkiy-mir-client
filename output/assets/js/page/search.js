import{j as e,r as a,J as s,K as t,O as n,G as r,E as o,D as l}from"../react.js";import{u as i}from"./about.js";import{L as c,a as m}from"./home.js";import{b as u,u as d,U as g,_ as p,f as x,A as j,P as h,m as f,n as v,E as N,B as D}from"./admin.js";import{A as C,u as b}from"./database.js";const S="He",w="Ie";function T({removeTag:a,tags:s}){return e.jsx("ul",{className:`${S} flex-row-flex-start-normal-small`,children:s.map((s=>{const t=s.replace(/\-\d*/g,"");return t.trim()?e.jsx("li",{onClick:()=>a(s),className:w,children:t},s):null}))})}const $=function(e){return e.split(/,/).map((e=>0===e.length?e:`${e}-${Math.round(9999*Math.random())}`))},y=function(e){return e.map((e=>e.trim().replace(/\-\d*/g,"")))},I=a.forwardRef((function({getTags:s,placeholder:t,value:n},r){const[o,l]=a.useState(n||[]);return a.useImperativeHandle(r,(()=>({clearTagsArray:function(){l([])}})),[]),e.jsxs(a.Fragment,{children:[e.jsx(u,{name:"tags",onInput:e=>{const a=$(e.currentTarget.value);l(a),s&&s(y(a))},placeholder:t,value:y(o).join(", ")}),e.jsx(T,{removeTag:e=>{l((a=>{const t=C.removeDuplicates(a,[e]);return s&&s(t),t}))},tags:o})]})})),F="Q",L="R",O="S",R="T",k="U",z="V",A="X";function E({changeSortData:a,sortData:s,sortDataName:t}){return e.jsx(u,{name:t,placeholder:`Find by ${t}...`,value:s[t],onInput:e=>a(t,e.currentTarget.value)})}const M=[{name:"Likes",icon:e.jsx(r,{size:17})},{name:"Views",icon:e.jsx(o,{size:17})},{name:"Comments",icon:e.jsx(l,{size:17})}],_=window.matchMedia("(width <= 930px)").matches;const P=Object.freeze(Object.defineProperty({__proto__:null,default:function(){i({title:"Finden",description:"Hier kannst du posts mit gegebenen sortierung optionen finden."});const[r,o]=a.useState({author:"",content:"",title:""}),[l,u]=a.useState(),C=d(),S=C.get("tag"),w=parseInt(C.get("page")||"0"),T=a.useRef(S?[S]:[]),$=a.useRef(null),y=a.useRef(),P=!_||b(g["IS-FILTER-MODAL-OPEN"],$),{isPending:H,data:U,error:q,request:V}=p({deps:[`sort-${w}`],noCache:!0,request:async()=>await x.post(`/sort/${w}`,{...r,sortOption:l,tags:T.current},j)}),B=(e,a)=>{o((s=>({...s,[e]:a})))};return e.jsx(a.Fragment,{children:q?e.jsx(h,{error:q}):e.jsxs("div",{style:{height:"100%"},className:"flex-row-normal-normal-medium",children:[e.jsxs("div",{style:{width:"100%",minHeight:"100%"},className:"flex-column-normal-normal-small",children:[_?e.jsx(s,{onClick:()=>{C.set({[g["IS-FILTER-MODAL-OPEN"]]:!0})},className:O}):null,H?e.jsx(f,{}):U&&U.pagesCount>1?e.jsx(v,{pagesCount:U.pagesCount}):null,H?e.jsx(c,{}):U&&0===U.posts.length?e.jsx(N,{option:{flexCenterCenter:!0,height:"FULL"},label:"Nothing found!"}):U&&U.posts.map((a=>e.jsx(m,{post:a,type:"preview"},a._id))),H?e.jsx(f,{}):U&&U.pagesCount>1?e.jsx(v,{pagesCount:U.pagesCount}):null]}),e.jsx("div",{ref:$,className:P?F:`${F} ${L}`,children:e.jsxs("div",{className:"main-content-container flex-column-normal-normal-small",children:[e.jsx("p",{className:R,children:"Sort by"}),e.jsx("div",{className:"flex-column-normal-normal-small",children:M.map((a=>e.jsxs("button",{onClick:()=>{return e=a.name,void u("descending"===l?.[e]?{[e]:"ascending"}:"ascending"===l?.[e]?{[e]:void 0}:{[e]:"descending"});var e},className:l?.[a.name]?`${k} ${z} flex-row-center-center-medium`:`${k} flex-row-center-center-medium`,children:[a.icon,e.jsx("p",{children:a.name}),"descending"===l?.[a.name]?e.jsx(t,{size:14}):"ascending"===l?.[a.name]?e.jsx(n,{size:14}):null]},a.name)))}),e.jsx(E,{changeSortData:B,sortData:r,sortDataName:"content"}),e.jsx(E,{changeSortData:B,sortData:r,sortDataName:"author"}),e.jsx(E,{changeSortData:B,sortData:r,sortDataName:"title"}),e.jsx(I,{ref:y,getTags:e=>{T.current=e},placeholder:"Find by tags"}),e.jsxs("div",{className:`${A} flex-row-normal-normal-small`,children:[e.jsx(D,{onClick:()=>{0===w?V():C.set({page:0})},label:"Sort"}),e.jsx(D,{onClick:()=>{T.current=[],o({author:"",content:"",title:""}),u(void 0),C.set({page:0}),y.current&&y.current.clearTagsArray()},label:"Reset"})]})]})})]})})}},Symbol.toStringTag,{value:"Module"}));export{I as T,P as p};
