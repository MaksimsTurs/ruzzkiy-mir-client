import{j as e,y as t,e as r,z as n,N as o,r as i}from"../react.js";import{l as c,u as s,h as a,a as u,_ as f,k as l,M as d,F as p,T as y,m as h,n as _,f as m,c as w}from"./admin.js";import{b,u as g,B as v}from"./home.js";function j(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var O=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),E=()=>Math.random().toString(36).substring(7).split("").join("."),S={INIT:`@@redux/INIT${E()}`,REPLACE:`@@redux/REPLACE${E()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${E()}`};function C(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function P(e,t,r){if("function"!=typeof e)throw new Error(j(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(j(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(j(1));return r(P)(e,t)}let n=e,o=t,i=new Map,c=i,s=0,a=!1;function u(){c===i&&(c=new Map,i.forEach(((e,t)=>{c.set(t,e)})))}function f(){if(a)throw new Error(j(3));return o}function l(e){if("function"!=typeof e)throw new Error(j(4));if(a)throw new Error(j(5));let t=!0;u();const r=s++;return c.set(r,e),function(){if(t){if(a)throw new Error(j(6));t=!1,u(),c.delete(r),i=null}}}function d(e){if(!C(e))throw new Error(j(7));if(void 0===e.type)throw new Error(j(8));if("string"!=typeof e.type)throw new Error(j(17));if(a)throw new Error(j(9));try{a=!0,o=n(o,e)}finally{a=!1}return(i=c).forEach((e=>{e()})),e}d({type:S.INIT});return{dispatch:d,subscribe:l,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error(j(10));n=e,d({type:S.REPLACE})},[O]:function(){const e=l;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(j(11));function r(){const e=t;e.next&&e.next(f())}r();return{unsubscribe:e(r)}},[O](){return this}}}}}function x(e){const t=Object.keys(e),r={};for(let c=0;c<t.length;c++){const n=t[c];"function"==typeof e[n]&&(r[n]=e[n])}const n=Object.keys(r);let o;try{!function(e){Object.keys(e).forEach((t=>{const r=e[t];if(void 0===r(void 0,{type:S.INIT}))throw new Error(j(12));if(void 0===r(void 0,{type:S.PROBE_UNKNOWN_ACTION()}))throw new Error(j(13))}))}(r)}catch(i){o=i}return function(e={},t){if(o)throw o;let i=!1;const c={};for(let o=0;o<n.length;o++){const s=n[o],a=r[s],u=e[s],f=a(u,t);if(void 0===f)throw t&&t.type,new Error(j(14));c[s]=f,i=i||f!==u}return i=i||n.length!==Object.keys(e).length,i?c:e}}function N(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}var T=Symbol.for("immer-nothing"),R=Symbol.for("immer-draftable"),D=Symbol.for("immer-state");function k(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var z=Object.getPrototypeOf;function A(e){return!!e&&!!e[D]}function M(e){return!!e&&(F(e)||Array.isArray(e)||!!e[R]||!!e.constructor?.[R]||U(e)||L(e))}var $=Object.prototype.constructor.toString();function F(e){if(!e||"object"!=typeof e)return!1;const t=z(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===$}function I(e,t){0===B(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function B(e){const t=e[D];return t?t.type_:Array.isArray(e)?1:U(e)?2:L(e)?3:0}function W(e,t){return 2===B(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function K(e,t,r){const n=B(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function U(e){return e instanceof Map}function L(e){return e instanceof Set}function q(e){return e.copy_||e.base_}function V(e,t){if(U(e))return new Map(e);if(L(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&F(e)){if(!z(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const r=Object.getOwnPropertyDescriptors(e);delete r[D];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){const t=n[o],i=r[t];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[t]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[t]})}return Object.create(z(e),r)}function X(e,t=!1){return G(e)||A(e)||!M(e)||(B(e)>1&&(e.set=e.add=e.clear=e.delete=H),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>X(t,!0)))),e}function H(){k(2)}function G(e){return Object.isFrozen(e)}var J,Q={};function Y(e){const t=Q[e];return t||k(0),t}function Z(){return J}function ee(e,t){t&&(Y("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function te(e){re(e),e.drafts_.forEach(oe),e.drafts_=null}function re(e){e===J&&(J=e.parent_)}function ne(e){return J={drafts_:[],parent_:J,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function oe(e){const t=e[D];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ie(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[D].modified_&&(te(t),k(4)),M(e)&&(e=ce(t,e),t.parent_||ae(t,e)),t.patches_&&Y("Patches").generateReplacementPatches_(r[D].base_,e,t.patches_,t.inversePatches_)):e=ce(t,r,[]),te(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==T?e:void 0}function ce(e,t,r){if(G(t))return t;const n=t[D];if(!n)return I(t,((o,i)=>se(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return ae(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),I(o,((o,c)=>se(e,n,t,o,c,r,i))),ae(e,t,!1),r&&e.patches_&&Y("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function se(e,t,r,n,o,i,c){if(A(o)){const c=ce(e,o,i&&t&&3!==t.type_&&!W(t.assigned_,n)?i.concat(n):void 0);if(K(r,n,c),!A(c))return;e.canAutoFreeze_=!1}else c&&r.add(o);if(M(o)&&!G(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ce(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||ae(e,o)}}function ae(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&X(t,r)}var ue={get(e,t){if(t===D)return e;const r=q(e);if(!W(r,t))return function(e,t,r){const n=de(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!M(n)?n:n===le(e.base_,t)?(ye(e),e.copy_[t]=he(n,e)):n},has:(e,t)=>t in q(e),ownKeys:e=>Reflect.ownKeys(q(e)),set(e,t,r){const n=de(q(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=le(q(e),t),c=n?.[D];if(c&&c.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((o=r)===(i=n)?0!==o||1/o==1/i:o!=o&&i!=i)&&(void 0!==r||W(e.base_,t)))return!0;ye(e),pe(e)}var o,i;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==le(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,ye(e),pe(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=q(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){k(11)},getPrototypeOf:e=>z(e.base_),setPrototypeOf(){k(12)}},fe={};function le(e,t){const r=e[D];return(r?q(r):e)[t]}function de(e,t){if(!(t in e))return;let r=z(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=z(r)}}function pe(e){e.modified_||(e.modified_=!0,e.parent_&&pe(e.parent_))}function ye(e){e.copy_||(e.copy_=V(e.base_,e.scope_.immer_.useStrictShallowCopy_))}I(ue,((e,t)=>{fe[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),fe.deleteProperty=function(e,t){return fe.set.call(this,e,t,void 0)},fe.set=function(e,t,r){return ue.set.call(this,e[0],t,r,e[0])};function he(e,t){const r=U(e)?Y("MapSet").proxyMap_(e,t):L(e)?Y("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Z(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=ue;r&&(o=[n],i=fe);const{revoke:c,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=c,s}(e,t);return(t?t.scope_:Z()).drafts_.push(r),r}function _e(e){return A(e)||k(10),me(e)}function me(e){if(!M(e)||G(e))return e;const t=e[D];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=V(e,t.scope_.immer_.useStrictShallowCopy_)}else r=V(e,!0);return I(r,((e,t)=>{K(r,e,me(t))})),t&&(t.finalized_=!1),r}var we=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&k(6),void 0!==r&&"function"!=typeof r&&k(7),M(e)){const o=ne(this),i=he(e,void 0);let c=!0;try{n=t(i),c=!1}finally{c?te(o):re(o)}return ee(o,r),ie(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===T&&(n=void 0),this.autoFreeze_&&X(n,!0),r){const t=[],o=[];Y("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}k(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){M(e)||k(8),A(e)&&(e=_e(e));const t=ne(this),r=he(e,void 0);return r[D].isManual_=!0,re(t),r}finishDraft(e,t){const r=e&&e[D];r&&r.isManual_||k(9);const{scope_:n}=r;return ee(n,t),ie(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=Y("Patches").applyPatches_;return A(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},be=we.produce;we.produceWithPatches.bind(we),we.setAutoFreeze.bind(we),we.setUseStrictShallowCopy.bind(we),we.applyPatches.bind(we),we.createDraft.bind(we),we.finishDraft.bind(we);var ge=e=>Array.isArray(e)?e:[e];function ve(e){const t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every((e=>"function"==typeof e))){const r=e.map((e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}var je="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}},Oe=0,Ee=1;function Se(){return{s:Oe,v:void 0,o:null,p:null}}function Ce(e,t={}){let r=Se();const{resultEqualityCheck:n}=t;let o,i=0;function c(){let t=r;const{length:c}=arguments;for(let e=0,r=c;e<r;e++){const r=arguments[e];if("function"==typeof r||"object"==typeof r&&null!==r){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(r);void 0===n?(t=Se(),e.set(r,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(r);void 0===n?(t=Se(),e.set(r,t)):t=n}}const s=t;let a;if(t.s===Ee?a=t.v:(a=e.apply(null,arguments),i++),s.s=Ee,n){const e=o?.deref?.()??o;null!=e&&n(e,a)&&(a=e,0!==i&&i--);o="object"==typeof a&&null!==a||"function"==typeof a?new je(a):a}return s.v=a,a}return c.clearCache=()=>{r=Se(),c.resetResultsCount()},c.resultsCount=()=>i,c.resetResultsCount=()=>{i=0},c}function Pe(e,...t){const r="function"==typeof e?{memoize:e,memoizeOptions:t}:e,n=(...e)=>{let t,n=0,o=0,i={},c=e.pop();"object"==typeof c&&(i=c,c=e.pop()),function(e,t="expected a function, instead received "+typeof e){if("function"!=typeof e)throw new TypeError(t)}(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const s={...r,...i},{memoize:a,memoizeOptions:u=[],argsMemoize:f=Ce,argsMemoizeOptions:l=[],devModeChecks:d={}}=s,p=ge(u),y=ge(l),h=ve(e),_=a((function(){return n++,c.apply(null,arguments)}),...p),m=f((function(){o++;const e=function(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(h,arguments);return t=_.apply(null,e),t}),...y);return Object.assign(m,{resultFunc:c,memoizedResultFunc:_,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>t,recomputations:()=>n,resetRecomputations:()=>{n=0},memoize:a,argsMemoize:f})};return Object.assign(n,{withTypes:()=>n}),n}var xe=Pe(Ce),Ne=Object.assign(((e,t=xe)=>{!function(e,t="expected an object, instead received "+typeof e){if("object"!=typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const r=Object.keys(e);return t(r.map((t=>e[t])),((...e)=>e.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})))}),{withTypes:()=>Ne});function Te(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var Re=Te(),De=Te;((...e)=>{const t=Pe(...e),r=Object.assign(((...e)=>{const r=t(...e),n=(e,...t)=>r(A(e)?_e(e):e,...t);return Object.assign(n,r),n}),{withTypes:()=>r})})(Ce);var ke="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?N:N.apply(null,arguments)};function ze(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(et(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>function(e){return C(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,r}var Ae=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Me(e){return M(e)?be(e,(()=>{})):e}function $e(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw new Error(et(10));const n=r.insert(t,e);return e.set(t,n),n}var Fe=e=>t=>{setTimeout(t,e)},Ie="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Fe(10),Be=e=>function(t){const{autoBatch:r=!0}=t??{};let n=new Ae(e);return r&&n.push(((e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,c=!1;const s=new Set,a="tick"===e.type?queueMicrotask:"raf"===e.type?Ie:"callback"===e.type?e.queueNotification:Fe(e.timeout),u=()=>{c=!1,i&&(i=!1,s.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>o&&e()));return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return o=!e?.meta?.RTK_autoBatch,i=!o,i&&(c||(c=!0,a(u))),n.dispatch(e)}finally{o=!0}}})})("object"==typeof r?r:void 0)),n};function We(e){const t=function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{};let i=new Ae;return t&&("boolean"==typeof t?i.push(Re):i.push(De(t.extraArgument))),i},{reducer:r,middleware:n,devTools:o=!0,preloadedState:i,enhancers:c}=e||{};let s,a;if("function"==typeof r)s=r;else{if(!C(r))throw new Error(et(1));s=x(r)}a="function"==typeof n?n(t):t();let u=N;o&&(u=ke({trace:!1,..."object"==typeof o&&o}));const f=function(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(j(15))};const c={getState:o.getState,dispatch:(e,...t)=>i(e,...t)},s=e.map((e=>e(c)));return i=N(...s)(o.dispatch),{...o,dispatch:i}}}(...a),l=Be(f);return P(s,i,u(..."function"==typeof c?c(l):l()))}function Ke(e){const t={},r=[];let n;const o={addCase(e,r){const n="string"==typeof e?e:e.type;if(!n)throw new Error(et(28));if(n in t)throw new Error(et(29));return t[n]=r,o},addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(n=e,o)};return e(o),[t,r,n]}var Ue=Symbol.for("rtk-slice-createasyncthunk");function Le(e,t){return`${e}/${t}`}function qe({creators:e}={}){const t=e?.asyncThunk?.[Ue];return function(e){const{name:r,reducerPath:n=r}=e;if(!r)throw new Error(et(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error(et(12));if(r in c.sliceCaseReducersByType)throw new Error(et(13));return c.sliceCaseReducersByType[r]=t,s},addMatcher:(e,t)=>(c.sliceMatchers.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(c.actionCreators[e]=t,s),exposeCaseReducer:(e,t)=>(c.sliceCaseReducersByName[e]=t,s)};function a(){const[t={},r=[],n]="function"==typeof e.extraReducers?Ke(e.extraReducers):[e.extraReducers],o={...t,...c.sliceCaseReducersByType};return function(e,t){let r,[n,o,i]=Ke(t);if("function"==typeof e)r=()=>Me(e());else{const t=Me(e);r=()=>t}function c(e=r(),t){let c=[n[t.type],...o.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===c.filter((e=>!!e)).length&&(c=[i]),c.reduce(((e,r)=>{if(r){if(A(e)){const n=r(e,t);return void 0===n?e:n}if(M(e))return be(e,(e=>r(e,t)));{const n=r(e,t);if(void 0===n){if(null===e)return e;throw new Error(et(9))}return n}}return e}),e)}return c.getInitialState=r,c}(e.initialState,(e=>{for(let t in o)e.addCase(t,o[t]);for(let t of c.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}))}i.forEach((n=>{const i=o[n],c={reducerName:n,type:Le(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function({type:e,reducerName:t,createNotation:r},n,o){let i,c;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(et(17));i=n.reducer,c=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,c?ze(e,c):ze(e))}(c,i,s):function({type:e,reducerName:t},r,n,o){if(!o)throw new Error(et(18));const{payloadCreator:i,fulfilled:c,pending:s,rejected:a,settled:u,options:f}=r,l=o(e,i,f);n.exposeAction(t,l),c&&n.addCase(l.fulfilled,c);s&&n.addCase(l.pending,s);a&&n.addCase(l.rejected,a);u&&n.addMatcher(l.settled,u);n.exposeCaseReducer(t,{fulfilled:c||He,pending:s||He,rejected:a||He,settled:u||He})}(c,i,s,t)}));const u=e=>e,f=new Map;let l;function d(e,t){return l||(l=a()),l(e,t)}function p(){return l||(l=a()),l.getInitialState()}function y(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=p()),n}function o(t=u){const n=$e(f,r,{insert:()=>new WeakMap});return $e(n,t,{insert:()=>{const n={};for(const[o,i]of Object.entries(e.selectors??{}))n[o]=Ve(i,t,p,r);return n}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const h={name:r,reducer:d,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...y(n),injectInto(e,{reducerPath:t,...r}={}){const o=t??n;return e.inject({reducerPath:o,reducer:d},r),{...h,...y(o,!0)}}};return h}}function Ve(e,t,r,n){function o(o,...i){let c=t(o);return void 0===c&&n&&(c=r()),e(c,...i)}return o.unwrapped=e,o}var Xe=qe();function He(){}var Ge="listenerMiddleware",Je=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=ze(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(et(21));return(e=>{if("function"!=typeof e)throw new Error(et(32))})(i),{predicate:o,type:t,effect:i}},Qe=Object.assign((e=>{const{type:t,predicate:r,effect:n}=Je(e);return{id:((e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t})(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(et(22))}}}),{withTypes:()=>Qe}),Ye=Object.assign(ze(`${Ge}/add`),{withTypes:()=>Ye});ze(`${Ge}/removeAll`);var Ze=Object.assign(ze(`${Ge}/remove`),{withTypes:()=>Ze});function et(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const tt=Xe({name:"creator",initialState:{contentDraft:c.get("content-draft","[]")},reducers:{editOrinsertContentDraft:(e,{payload:t})=>{if(0===e.contentDraft.length)return c.set("content-draft",e.contentDraft=[t]);e.contentDraft.find(((e,r)=>e._id===t._id?{_id:e._id,index:r}:void 0))?c.set("content-draft",e.contentDraft=e.contentDraft.map((e=>e._id===t._id?t:e))):c.set("content-draft",e.contentDraft=[...e.contentDraft,t])},removeContentDraft:(e,{payload:t})=>{0!==e.contentDraft.length&&c.set("content-draft",e.contentDraft=e.contentDraft.filter((e=>e._id!==t)))}}}),{editOrinsertContentDraft:rt,removeContentDraft:nt}=tt.actions,ot=tt.reducer,it={write_new_loader_container:"M",write_new_loader_body:"N",loader:"O",write_new_loader_input:"P"};function ct(){return e.jsx("div",{className:`${it.write_new_loader_container} flex-row-normal-center-medium`,children:e.jsxs("div",{className:`${it.write_new_loader_body} flex-column-normal-normal-small`,children:[e.jsx("div",{className:it.write_new_loader_input}),e.jsx("div",{className:it.write_new_loader_input}),e.jsxs("div",{className:"flex-row-normal-normal-small",children:[e.jsx("button",{}),e.jsx("button",{}),e.jsx("button",{})]}),e.jsx("div",{style:{height:"10rem"},className:it.write_new_loader_input})]})})}const st="F",at="G",ut="H";const ft=Object.freeze(Object.defineProperty({__proto__:null,default:function(){const j=t(),O=r(),E=n((e=>e.creator)),S=s(),C=b(),{submit:P}=a([]),x=u(),N=S.get("content-id"),T=S.get("draft-id"),R=JSON.parse(S.get("is-edit")||"false");if(!x.role(["Admin","Creator"]).permited())return e.jsx(o,{to:"/"});const D=R&&N?c.get(N,"null"):T?E.contentDraft.find((e=>e._id===T)):void 0,k="post"===D?.contentType;g({title:R&&D?`${k?D.title:"Comment"} ändern`:T&&D?`${k?D.title:"Entwurf"} ändern`:"Neue post schreiben",description:"Hier kannst neue post oder entwurfe schreiben oder ändern."});const z="comment"===D?.contentType?[`post-${D.onPost}-comments-${D.onPage}`]:["all-posts"],{mutate:A,isMutating:M,error:$}=f({deps:z}),F=$||(R&&!D?{code:404,message:"Content not found!"}:void 0),I=i.useRef(D?.tags||[]),B=i.useRef("");return e.jsxs(i.Fragment,{children:[e.jsx(l,{error:F}),M?e.jsx(d,{}):null,C.isAuthPending?e.jsx(ct,{}):e.jsx("div",{className:`${st} flex-row-normal-center-big`,children:e.jsxs(p,{className:at,onSubmit:P((async e=>{delete e.alt,delete e.uploadImg,delete e.url,A({key:z,request:async function(t){if(R){const r=await m.post(`/admin/update/${D?.contentType}`,{...e,tags:I.current,id:N},{Authorization:`Bearer ${w.getOne("PR_TOKEN")}`});if(c.remove(r._id),"post"===D?.contentType){const e=t.state||[];return t.removeCache(`post-${r._id}`),O(`/post/${r._id}`),e.map((e=>e._id===r._id?r:e))}if("comment"===D?.contentType){const e=t.state||{pagesCount:0,comments:[]};return O(`/post/${D?.onPost}?page=${D?.onPage}`),{...e,comments:e.comments.map((e=>e._id===r._id?r:e))}}}const r=await m.post("/insert/post",{...e,tags:I.current},{Authorization:`Bearer ${C?.user?.token}`}),n=t.state||[];return O(`/post/${r._id}`),n.length%10==0?n:[...n||[],r]}})})),isPending:!1,children:["comment"!==D?.contentType?e.jsxs(i.Fragment,{children:[e.jsx(y,{name:"title",defaultValue:D?.title,placeholder:"Post title"}),e.jsx(h,{getTags:e=>{I.current=e},placeholder:"Post tags",value:I.current})]}):null,e.jsx(_,{defaultValue:D?.content,placeholder:"Write content body here...",getValue:e=>{B.current=e}}),e.jsxs("div",{className:ut,children:[e.jsx(v,{label:R?`Edit ${D?.contentType}`:"Create post",type:"submit"}),e.jsx(v,{label:D&&!N?"Save draft changes":"Save as draft",onClick:()=>{const e=T||N||window.crypto.randomUUID();j(rt({...D,_id:e,content:B.current})),S.set({"draft-id":e}),S.remove(["content-id"]),c.remove(N)}}),e.jsx(v,{label:"Delete draft",onClick:()=>{j(nt(T||N)),S.remove(["draft-id"])}})]})]})})]})}},Symbol.toStringTag,{value:"Module"}));export{ct as W,We as a,ot as b,x as c,ft as p};
