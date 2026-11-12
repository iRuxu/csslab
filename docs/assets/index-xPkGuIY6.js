(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Ti(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ne={},Ot=[],$e=()=>{},Gs=()=>!1,Nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Ii=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gr=Object.prototype.hasOwnProperty,U=(e,t)=>gr.call(e,t),B=Array.isArray,bt=e=>gn(e)==="[object Map]",On=e=>gn(e)==="[object Set]",Ji=e=>gn(e)==="[object Date]",j=e=>typeof e=="function",re=e=>typeof e=="string",Qe=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Ws=e=>(Y(e)||j(e))&&j(e.then)&&j(e.catch),qs=Object.prototype.toString,gn=e=>qs.call(e),br=e=>gn(e).slice(8,-1),Ys=e=>gn(e)==="[object Object]",ki=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},xr=/-\w/g,Re=Mn(e=>e.replace(xr,t=>t.slice(1).toUpperCase())),vr=/\B([A-Z])/g,Pt=Mn(e=>e.replace(vr,"-$1").toLowerCase()),Dn=Mn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Mn(e=>e?`on${Dn(e)}`:""),Ye=(e,t)=>!Object.is(e,t),Xn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$s=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let es;const jn=()=>es||(es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=re(i)?Er(i):Pi(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(re(e)||Y(e))return e}const yr=/;(?![^(]*\))/g,Rr=/:([^]+)/,_r=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Er(e){const t={};return e.replace(_r,n=>n.startsWith("/*")?"":n).split(yr).forEach(n=>{if(n){const i=n.split(Rr);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function xt(e){let t="";if(re(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const i=xt(e[n]);i&&(t+=i+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Cr="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Sr=Ti(Cr);function Qs(e){return!!e||e===""}function Or(e,t,n){if(e.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<e.length;s++)i=Vn(e[s],t[s],n);return i}function ts(e,t,n){if(e.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const o of e){let r=-1;for(let l=0;l<i.length;l++)if(!s[l]&&Vn(o,i[l],n)){r=l;break}if(r<0)return!1;s[r]=1}return!0}function Ar(e,t,n){let i=bt(e),s=bt(t);if(i||s||(i=On(e),s=On(t),i||s))return i&&s?ts(e,t,n):!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const l in e){const a=e.hasOwnProperty(l),u=t.hasOwnProperty(l);if(a&&!u||!a&&u||!Vn(e[l],t[l],n))return!1}return String(e)===String(t)}function ns(e,t,n,i){n||(n=[new Map,new Map]);const[s,o]=n;if(s.has(e)||o.has(t))return s.get(e)===t&&o.get(t)===e;s.set(e,t),o.set(t,e);const r=i(e,t,n);return s.delete(e),o.delete(t),r}function Vn(e,t,n){if(e===t)return!0;let i=Ji(e),s=Ji(t);return i||s?i&&s?e.getTime()===t.getTime():!1:(i=Qe(e),s=Qe(t),i||s?e===t:(i=B(e),s=B(t),i||s?i&&s?ns(e,t,n,Or):!1:(i=Y(e),s=Y(t),i||s?!i||!s?!1:ns(e,t,n,Ar):String(e)===String(t))))}const Xs=e=>!!(e&&e.__v_isRef===!0),Ee=e=>re(e)?e:e==null?"":B(e)||Y(e)&&(e.toString===qs||!j(e.toString))?Xs(e)?Ee(e.value):JSON.stringify(e,Zs,2):String(e),Zs=(e,t)=>Xs(t)?Zs(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],o)=>(n[Zn(i,o)+" =>"]=s,n),{})}:On(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zn(n))}:Qe(t)?Zn(t):Y(t)&&!B(t)&&!Ys(t)?String(t):t,Zn=(e,t="")=>{var n;return Qe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let pe;class Tr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&pe&&(pe.active?(this.parent=pe,this.index=(pe.scopes||(pe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){++this._on===1&&(this.prevScope=pe,pe=this)}off(){if(this._on>0&&--this._on===0){if(pe===this)pe=this.prevScope;else{let t=pe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ir(){return pe}let ee;const Jn=new WeakSet;class Js{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&(pe.active?pe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jn.has(this)&&(Jn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||to(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,is(this),no(this);const t=ee,n=Le;ee=this,Le=!0;try{return this.fn()}finally{io(this),ee=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)zi(t);this.deps=this.depsTail=void 0,is(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hi(this)&&this.run()}get dirty(){return hi(this)}}let eo=0,Xt,Zt;function to(e,t=!1){if(e.flags|=8,t){e.next=Zt,Zt=e;return}e.next=Xt,Xt=e}function Fi(){eo++}function Li(){if(--eo>0)return;if(Zt){let t=Zt;for(Zt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xt;){let t=Xt;for(Xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function no(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function io(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),zi(i),kr(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function hi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(so(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function so(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===rn)||(e.globalVersion=rn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!hi(e))))return;e.flags|=2;const t=e.dep,n=ee,i=Le;ee=e,Le=!0;try{no(e);const s=e.fn(e._value);(t.version===0||Ye(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ee=n,Le=i,io(e),e.flags&=-3}}function zi(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)zi(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function kr(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const oo=[];function Xe(){oo.push(Le),Le=!1}function Ze(){const e=oo.pop();Le=e===void 0?!0:e}function is(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ee;ee=void 0;try{t()}finally{ee=n}}}let rn=0;class Pr{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ni{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ee||!Le||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new Pr(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,ro(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=i)}return n}trigger(t){this.version++,rn++,this.notify(t)}notify(t){Fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Li()}}}function ro(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ro(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const mi=new WeakMap,It=Symbol(""),gi=Symbol(""),ln=Symbol("");function he(e,t,n){if(Le&&ee){let i=mi.get(e);i||mi.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Ni),s.map=i,s.key=n),s.track()}}function rt(e,t,n,i,s,o){const r=mi.get(e);if(!r){rn++;return}const l=a=>{a&&a.trigger()};if(Fi(),t==="clear")r.forEach(l);else{const a=B(e),u=a&&ki(n);if(a&&n==="length"){const d=Number(i);r.forEach((p,m)=>{(m==="length"||m===ln||!Qe(m)&&m>=d)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),u&&l(r.get(ln)),t){case"add":a?u&&l(r.get("length")):(l(r.get(It)),bt(e)&&l(r.get(gi)));break;case"delete":a||(l(r.get(It)),bt(e)&&l(r.get(gi)));break;case"set":bt(e)&&l(r.get(It));break}}Li()}function zt(e){const t=q(e);return t===e||(he(t,"iterate",ln),Oe(e))?t:Je(e)?vt(e)?t.map(n=>wt(Ae(n))):t.map(wt):t.map(Ae)}function Hn(e){return he(e=q(e),"iterate",ln),e}function Ge(e,t){return Je(e)?wt(vt(e)?Ae(t):t):Ae(t)}const Fr={__proto__:null,[Symbol.iterator](){return ei(this,Symbol.iterator,e=>Ge(this,e))},concat(...e){return zt(this).concat(...e.map(t=>B(t)?zt(t):t))},entries(){return ei(this,"entries",e=>(e[1]=Ge(this,e[1]),e))},every(e,t){return nt(this,"every",e,t,void 0,arguments)},filter(e,t){return nt(this,"filter",e,t,n=>n.map(i=>Ge(this,i)),arguments)},find(e,t){return nt(this,"find",e,t,n=>Ge(this,n),arguments)},findIndex(e,t){return nt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return nt(this,"findLast",e,t,n=>Ge(this,n),arguments)},findLastIndex(e,t){return nt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return nt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ti(this,"includes",e)},indexOf(...e){return ti(this,"indexOf",e)},join(e){return zt(this).join(e)},lastIndexOf(...e){return ti(this,"lastIndexOf",e)},map(e,t){return nt(this,"map",e,t,void 0,arguments)},pop(){return Ut(this,"pop")},push(...e){return Ut(this,"push",e)},reduce(e,...t){return os(this,"reduce",e,t)},reduceRight(e,...t){return os(this,"reduceRight",e,t)},shift(){return Ut(this,"shift")},some(e,t){return nt(this,"some",e,t,void 0,arguments)},splice(...e){return Ut(this,"splice",e)},toReversed(){return zt(this).toReversed()},toSorted(e){return zt(this).toSorted(e)},toSpliced(...e){return zt(this).toSpliced(...e)},unshift(...e){return Ut(this,"unshift",e)},values(){return ei(this,"values",e=>Ge(this,e))}};function ei(e,t,n){const i=Hn(e),s=i[t],o=s.call(i);if(i!==e&&!Oe(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const r=Object.create(Object.getPrototypeOf(o));return r.next=()=>ss(o.next(),n),s!==lo[t]&&Object.defineProperties(r,{return:{get(){const l=o.return;return typeof l=="function"?l.bind(o):l}},throw:{get(){const l=o.throw;return typeof l=="function"?l.bind(o):l}}}),r}o._next=o.next,o.next=()=>ss(o._next(),n)}return o}function ss(e,t){return e.done||(e.value=t(e.value)),e}const lo=Array.prototype;function nt(e,t,n,i,s,o){const r=Hn(e),l=r!==e&&!Oe(e),a=r[t];if(a!==lo[t]){const p=a.apply(e,o);return l?Ae(p):p}let u=n;r!==e&&(l?u=function(p,m){return n.call(this,Ge(e,p),m,e)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,e)}));const d=a.call(r,u,i);return l&&s?s(d):d}function os(e,t,n,i){const s=Hn(e),o=s!==e&&!Oe(e);let r=n,l=!1;s!==e&&(o?(l=i.length===0,r=function(u,d,p){return l&&(l=!1,u=Ge(e,u)),n.call(this,u,Ge(e,d),p,e)}):n.length>3&&(r=function(u,d,p){return n.call(this,u,d,p,e)}));const a=s[t](r,...i);return l?Ge(e,a):a}function ti(e,t,n){const i=q(e);he(i,"iterate",ln);const s=i[t](...n);return(s===-1||s===!1)&&Di(n[0])?(n[0]=q(n[0]),i[t](...n)):s}function Ut(e,t,n=[]){Xe(),Fi();const i=q(e)[t].apply(e,n);return Li(),Ze(),i}const Lr=Ti("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qe));function zr(e){Qe(e)||(e=String(e));const t=q(this);return he(t,"has",e),t.hasOwnProperty(e)}class co{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Gr:ho:o?po:fo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=B(t);if(!s){let a;if(r&&(a=Fr[n]))return a;if(n==="hasOwnProperty")return zr}const l=Reflect.get(t,n,ge(t)?t:i);if((Qe(n)?ao.has(n):Lr(n))||(s||he(t,"get",n),o))return l;if(ge(l)){const a=r&&ki(n)?l:l.value;return s&&Y(a)?xi(a):a}return Y(l)?s?xi(l):Kn(l):l}}class uo extends co{constructor(t=!1){super(!1,t)}set(t,n,i,s){let o=t[n];const r=B(t)&&ki(n);if(!this._isShallow){const u=Je(o);if(!Oe(i)&&!Je(i)&&(o=q(o),i=q(i)),!r&&ge(o)&&!ge(i))return u||(o.value=i),!0}const l=r?Number(n)<t.length:U(t,n),a=Reflect.set(t,n,i,ge(t)?t:s);return t===q(s)&&a&&(l?Ye(i,o)&&rt(t,"set",n,i):rt(t,"add",n,i)),a}deleteProperty(t,n){const i=U(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&rt(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!Qe(n)||!ao.has(n))&&he(t,"has",n),i}ownKeys(t){return he(t,"iterate",B(t)?"length":It),Reflect.ownKeys(t)}}class Nr extends co{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Br=new uo,Mr=new Nr,Dr=new uo(!0);const bi=e=>e,vn=e=>Reflect.getPrototypeOf(e);function jr(e,t,n){return function(...i){const s=this.__v_raw,o=q(s),r=bt(o),l=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,u=s[e](...i),d=n?bi:t?wt:Ae;return!t&&he(o,"iterate",a?gi:It),ce(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vr(e,t){const n={get(s){const o=this.__v_raw,r=q(o),l=q(s);e||(Ye(s,l)&&he(r,"get",s),he(r,"get",l));const{has:a}=vn(r),u=t?bi:e?wt:Ae;if(a.call(r,s))return u(o.get(s));if(a.call(r,l))return u(o.get(l));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&he(q(s),"iterate",It),s.size},has(s){const o=this.__v_raw,r=q(o),l=q(s);return e||(Ye(s,l)&&he(r,"has",s),he(r,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const r=this,l=r.__v_raw,a=q(l),u=t?bi:e?wt:Ae;return!e&&he(a,"iterate",It),l.forEach((d,p)=>s.call(o,u(d),u(p),r))}};return ce(n,e?{add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear")}:{add(s){const o=q(this),r=vn(o),l=q(s),a=!t&&!Oe(s)&&!Je(s)?l:s;return r.has.call(o,a)||Ye(s,a)&&r.has.call(o,s)||Ye(l,a)&&r.has.call(o,l)||(o.add(a),rt(o,"add",a,a)),this},set(s,o){!t&&!Oe(o)&&!Je(o)&&(o=q(o));const r=q(this),{has:l,get:a}=vn(r);let u=l.call(r,s);u||(s=q(s),u=l.call(r,s));const d=a.call(r,s);return r.set(s,o),u?Ye(o,d)&&rt(r,"set",s,o):rt(r,"add",s,o),this},delete(s){const o=q(this),{has:r,get:l}=vn(o);let a=r.call(o,s);a||(s=q(s),a=r.call(o,s)),l&&l.call(o,s);const u=o.delete(s);return a&&rt(o,"delete",s,void 0),u},clear(){const s=q(this),o=s.size!==0,r=s.clear();return o&&rt(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jr(s,e,t)}),n}function Bi(e,t){const n=Vr(e,t);return(i,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(U(n,s)&&s in i?n:i,s,o)}const Hr={get:Bi(!1,!1)},Kr={get:Bi(!1,!0)},Ur={get:Bi(!0,!1)};const fo=new WeakMap,po=new WeakMap,ho=new WeakMap,Gr=new WeakMap;function Wr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kn(e){return Je(e)?e:Mi(e,!1,Br,Hr,fo)}function mo(e){return Mi(e,!1,Dr,Kr,po)}function xi(e){return Mi(e,!0,Mr,Ur,ho)}function Mi(e,t,n,i,s){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const r=Wr(br(e));if(r===0)return e;const l=new Proxy(e,r===2?i:n);return s.set(e,l),l}function vt(e){return Je(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Je(e){return!!(e&&e.__v_isReadonly)}function Oe(e){return!!(e&&e.__v_isShallow)}function Di(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function qr(e){return!U(e,"__v_skip")&&Object.isExtensible(e)&&$s(e,"__v_skip",!0),e}const Ae=e=>Y(e)?Kn(e):e,wt=e=>Y(e)?xi(e):e;function ge(e){return e?e.__v_isRef===!0:!1}function Yr(e){return go(e,!1)}function $r(e){return go(e,!0)}function go(e,t){return ge(e)?e:new Qr(e,t)}class Qr{constructor(t,n){this.dep=new Ni,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:q(t),this._value=n?t:Ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Oe(t)||Je(t);t=i?t:q(t),Ye(t,n)&&(this._rawValue=t,this._value=i?t:Ae(t),this.dep.trigger())}}function Mt(e){return ge(e)?e.value:e}const Xr={get:(e,t,n)=>t==="__v_raw"?e:Mt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function bo(e){return vt(e)?e:new Proxy(e,Xr)}class Zr{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ni(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=rn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return to(this,!0),!0}get value(){const t=this.dep.track();return so(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jr(e,t,n=!1){let i,s;return j(e)?i=e:(i=e.get,s=e.set),new Zr(i,s,n)}const yn={},An=new WeakMap;let St;function el(e,t=!1,n=St){if(n){let i=An.get(n);i||An.set(n,i=[]),i.push(e)}}function tl(e,t,n=ne){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:l,call:a}=n,u=I=>s?I:Oe(I)||s===!1||s===0?gt(I,1):gt(I);let d,p,m,b,k=!1,O=!1;if(ge(e)?(p=()=>e.value,k=Oe(e)):vt(e)?(p=()=>u(e),k=!0):B(e)?(O=!0,k=e.some(I=>vt(I)||Oe(I)),p=()=>e.map(I=>{if(ge(I))return I.value;if(vt(I))return u(I);if(j(I))return a?a(I,2):I()})):j(e)?t?p=a?()=>a(e,2):e:p=()=>{if(m){Xe();try{m()}finally{Ze()}}const I=St;St=d;try{return a?a(e,3,[b]):e(b)}finally{St=I}}:p=$e,t&&s){const I=p,Z=s===!0?1/0:s;p=()=>gt(I(),Z)}const D=Ir(),N=()=>{d.stop(),D&&D.active&&Ii(D.effects,d)};if(o&&t){const I=t;t=(...Z)=>{try{return I(...Z)}finally{N()}}}let A=O?new Array(e.length).fill(yn):yn;const F=I=>{if(!(!(d.flags&1)||!d.dirty&&!I))if(t){const Z=d.run();if(I||s||k||(O?Z.some((ue,ie)=>Ye(ue,A[ie])):Ye(Z,A))){const ue=St;Xe();try{m&&m(),St=d;const ie=[Z,A===yn?void 0:O&&A[0]===yn?[]:A,b];A=Z,a?a(t,3,ie):t(...ie)}finally{St=ue,Ze()}}}else d.run()};return l&&l(F),d=new Js(p),d.scheduler=r?()=>r(F,!1):F,b=I=>el(I,!1,d),m=d.onStop=()=>{const I=An.get(d);if(I){if(a)a(I,4);else for(const Z of I)Z();An.delete(d)}},t?i?F(!0):A=d.run():r?r(F.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function gt(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ge(e))gt(e.value,t,n);else if(B(e))for(let i=0;i<e.length;i++)gt(e[i],t,n);else if(On(e)||bt(e))e.forEach(i=>{gt(i,t,n)});else if(Ys(e)){for(const i in e)gt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&gt(e[i],t,n)}return e}function bn(e,t,n,i){try{return i?e(...i):e()}catch(s){Un(s,t,n)}}function ze(e,t,n,i){if(j(e)){const s=bn(e,t,n,i);return s&&Ws(s)&&s.catch(o=>{Un(o,t,n,void 0,!0)}),s}if(B(e)){const s=[];for(let o=0;o<e.length;o++)s.push(ze(e[o],t,n,i));return s}}function Un(e,t,n,i=!0,s=!1){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||ne;if(t){let a=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const p=a.ec;if(p&&!a.isUnmounted&&(!s||a.scope.active)){for(let m=0;m<p.length;m++)if(p[m](e,u,d)===!1)return}a=a.parent}if(r){Xe(),bn(r,null,10,[e,u,d]),Ze();return}}nl(e,n,o,i,l)}function nl(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const ye=[];let Ie=-1;const We=[];let pt=null,Nt=0;const xo=Promise.resolve();let Tn=null;function ji(e){const t=Tn||xo;return e?t.then(this?e.bind(this):e):t}function il(e){let t=Ie+1,n=ye.length;for(;t<n;){const i=t+n>>>1,s=ye[i],o=an(s);o<e||o===e&&s.flags&2?t=i+1:n=i}return t}function Vi(e){if(!(e.flags&1)){const t=an(e),n=ye[ye.length-1];!n||!(e.flags&2)&&t>=an(n)?ye.push(e):ye.splice(il(t),0,e),e.flags|=1,vo()}}function vo(){Tn||(Tn=xo.then(Ro))}function sl(e){if(!B(e))pt&&e.id===-1?pt.splice(Nt+1,0,e):e.flags&1||(We.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)We.push(e[t]);vo()}function wo(e,t,n,i=Ie+1){for(;i<ye.length;i++){const s=ye[i];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;ye.splice(i,1),i=e?i-1:Ie,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function yo(e,t,n=0){if(We.length){let i=We,s=0;if(t){i=[];for(let r=0;r<We.length;r++){const l=We[r];(l.i!==void 0?!l.i||l.i.uid<n:t.has(l))?We[s++]=l:i.push(l)}}const o=[...new Set(i)].sort((r,l)=>an(r)-an(l));if(We.length=s,pt){for(let r=0;r<o.length;r++)pt.push(o[r]);return}for(pt=o,Nt=0;Nt<pt.length;Nt++){const r=pt[Nt];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}pt=null,Nt=0}}let ni=!1;function ol(e,t){if(ni){e();return}const n=t===void 0?void 0:new Set(We);e(),ni=!0;try{wo(void 0,t),yo(void 0,n,t)}finally{ni=!1}}const an=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ro(e){try{for(Ie=0;Ie<ye.length;Ie++){const t=ye[Ie];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ie<ye.length;Ie++){const t=ye[Ie];t&&(t.flags&=-2)}Ie=-1,ye.length=0,yo(),Tn=null,(ye.length||We.length)&&Ro()}}let Fe=null,_o=null;function In(e){const t=Fe;return Fe=e,_o=e&&e.type.__scopeId||null,t}function At(e,t=Fe,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Fn(-1);const o=In(t),r=kt.length;let l;try{l=e(...s)}finally{for(let a=kt.length;a>r;a--)qo();In(o),i._d&&Fn(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function Et(e,t,n,i){let s=e;if(i==="beforeMount")e._mount=e;else if(i==="beforeUpdate"){const l=t&&t._mount;l&&(l._latest=e,e._mount=l)}else if(i==="mounted"){const l=e._latest;e._mount=e._latest=void 0,l&&(s=l,l._mount=void 0)}const o=s.dirs,r=t&&t.dirs;for(let l=0;l<o.length;l++){let a=o[l];r?a.oldValue=r[l].value:i==="mounted"&&a.oldValue!==void 0&&(a=ce({},a,{oldValue:void 0}));let u=a.dir[i];u&&(Xe(),ze(u,n,8,[e.el,a,s,t]),Ze())}}function _n(e,t){if(me){let n=me.provides;const i=me.parent&&me.parent.provides;i===n&&(n=me.provides=Object.create(i)),n[e]=t}}function lt(e,t,n=!1){const i=ra();if(i||Dt){let s=Dt?Dt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&j(t)?t.call(i&&i.proxy):t}}const rl=Symbol.for("v-scx"),ll=()=>lt(rl);function En(e,t,n){return Eo(e,t,n)}function Eo(e,t,n=ne){const{immediate:i,deep:s,flush:o,once:r}=n,l=ce({},n),a=t&&i||!t&&o!=="post";let u;if(hn){if(o==="sync"){const b=ll();u=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=$e,b.resume=$e,b.pause=$e,b}}const d=me;l.call=(b,k,O)=>ze(b,d,k,O);let p=!1;o==="post"?l.scheduler=b=>{b.i=d,ve(b,d&&d.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(b,k)=>{k?b():Vi(b)}),l.augmentJob=b=>{t&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const m=tl(e,t,l);return hn&&(u?u.push(m):a&&m()),m}function al(e,t,n){const i=this.proxy,s=re(e)?e.includes(".")?Co(i,e):()=>i[e]:e.bind(i,i);let o;j(t)?o=t:(o=t.handler,n=t);const r=xn(this),l=Eo(s,o.bind(i),n);return r(),l}function Co(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const cl=Symbol("_vte"),Gn=e=>e.__isTeleport,ii=Symbol("_leaveCb");function dl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ne){t=n;break}}return t}function So(e){if(!Hi(e))return Gn(e.type)&&e.children?dl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&j(n.default))return n.default()}}function Jt(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Jt(Gn(n.type)&&So(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const i=n.isHydrating?n.pendingBranch:n.activeBranch;i&&Jt(i,t.clone(i))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===te&&B(e.children)){const n=Lo(e.children,!1);n&&Jt(n,t)}}function vi(e){if(e.component)return vi(e.component.subTree);if(e.type===te){const t=B(e.children)&&Lo(e.children,!1);return t?vi(t):void 0}if(e.type!==Ne)return e}function Oo(e,t){return j(e)?ce({name:e.name},t,{setup:e}):e}function Ao(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function rs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const kn=new WeakMap;function en(e,t,n,i,s=!1){if(B(e)){e.forEach((O,D)=>en(O,t&&(B(t)?t[D]:t),n,i,s));return}if(tn(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&en(e,t,n,i.component.subTree);return}const o=i.shapeFlag&4?Wi(i.component):i.el,r=s?null:o,{i:l,r:a}=e,u=t&&t.r,d=l.refs===ne?l.refs={}:l.refs,p=l.setupState,m=q(p),b=p===ne?Gs:O=>rs(d,O)?!1:U(m,O),k=(O,D)=>!(D&&rs(d,D));if(u!=null&&u!==a){if(ls(t),re(u))d[u]=null,b(u)&&(p[u]=null);else if(ge(u)){const O=t;k(u,O.k)&&(u.value=null),O.k&&(d[O.k]=null)}}if(j(a))bn(a,l,12,[r,d]);else{const O=re(a),D=ge(a);if(O||D){const N=()=>{if(e.f){const A=O?b(a)?p[a]:d[a]:k()||!e.k?a.value:d[e.k];if(s)B(A)&&Ii(A,o);else if(B(A))A.includes(o)||A.push(o);else if(O)d[a]=[o],b(a)&&(p[a]=d[a]);else{const F=[o];k(a,e.k)&&(a.value=F),e.k&&(d[e.k]=F)}}else O?(d[a]=r,b(a)&&(p[a]=r)):D&&(k(a,e.k)&&(a.value=r),e.k&&(d[e.k]=r))};if(r){const A=()=>{N(),kn.delete(e)};A.id=-1,kn.set(e,A),ve(A,n)}else ls(e),N()}}}function ls(e){const t=kn.get(e);t&&(t.flags|=8,kn.delete(e))}jn().requestIdleCallback;jn().cancelIdleCallback;const tn=e=>!!e.type.__asyncLoader,Hi=e=>e.type.__isKeepAlive;function ul(e,t){To(e,"a",t)}function fl(e,t){To(e,"da",t)}function To(e,t,n=me){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(cn(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Hi(s.parent.vnode)&&pl(i,t,n,s),s=s.parent}}function pl(e,t,n,i){const s=cn(t,e,i,!0),o=cn("um",()=>Ii(i[t],s),n);o.flags=16}function cn(e,t,n=me,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Xe();const l=xn(n),a=ze(t,n,e,r);return l(),Ze(),a});return i?s.unshift(o):s.push(o),o}}const at=e=>(t,n=me)=>{(!hn||e==="sp")&&cn(e,(...i)=>t(...i),n)},hl=at("bm"),ml=at("m"),gl=at("bu"),bl=at("u"),xl=at("bum"),vl=at("um"),wl=at("sp"),yl=at("rtg"),Rl=at("rtc");function _l(e,t=me){cn("ec",e,t)}const El="components";function dn(e,t){return Sl(El,e,!0,t)||e}const Cl=Symbol.for("v-ndc");function Sl(e,t,n=!0,i=!1){const s=Fe||me;if(s){const o=s.type;{const l=ua(o,!1);if(l&&(l===t||l===Re(t)||l===Dn(Re(t))))return o}const r=as(s[e]||o[e],t)||as(s.appContext[e],t);return!r&&i?o:r}}function as(e,t){return e&&(e[t]||e[Re(t)]||e[Dn(Re(t))])}function ht(e,t,n,i){let s;const o=n,r=B(e);if(r||re(e)){const l=r&&vt(e);let a=!1,u=!1;l&&(a=!Oe(e),u=Je(e),e=Hn(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=t(a?u?wt(Ae(e[d])):Ae(e[d]):e[d],d,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,o)}else if(Y(e))if(e[Symbol.iterator])s=Array.from(e,(l,a)=>t(l,a,void 0,o));else{const l=Object.keys(e);s=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const d=l[a];s[a]=t(e[d],d,a,o)}}else s=[];return s}const wi=e=>e?Xo(e)?Wi(e):wi(e.parent):null,nn=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wi(e.parent),$root:e=>wi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ko(e),$forceUpdate:e=>e.f||(e.f=()=>{Vi(e.update)}),$nextTick:e=>e.n||(e.n=ji.bind(e.proxy)),$watch:e=>al.bind(e)}),si=(e,t)=>e!==ne&&!e.__isScriptSetup&&U(e,t),Ol={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:r,type:l,appContext:a}=e;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(si(i,t))return r[t]=1,i[t];if(s!==ne&&U(s,t))return r[t]=2,s[t];if(U(o,t))return r[t]=3,o[t];if(n!==ne&&U(n,t))return r[t]=4,n[t];yi&&(r[t]=0)}}const u=nn[t];let d,p;if(u)return t==="$attrs"&&he(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ne&&U(n,t))return r[t]=4,n[t];if(p=a.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return si(s,t)?(s[t]=n,!0):i!==ne&&U(i,t)?(i[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:o,type:r}},l){let a;return!!(n[l]||e!==ne&&l[0]!=="$"&&U(e,l)||si(t,l)||U(o,l)||U(i,l)||U(nn,l)||U(s.config.globalProperties,l)||(a=r.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function cs(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let yi=!0;function Al(e){const t=ko(e),n=e.proxy,i=e.ctx;yi=!1,t.beforeCreate&&ds(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:l,provide:a,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:b,updated:k,activated:O,deactivated:D,beforeDestroy:N,beforeUnmount:A,destroyed:F,unmounted:I,render:Z,renderTracked:ue,renderTriggered:ie,errorCaptured:Me,serverPrefetch:ct,expose:De,inheritAttrs:dt,components:yt,directives:je,filters:Kt}=t;if(u&&Tl(u,i,null),r)for(const $ in r){const G=r[$];j(G)&&(i[$]=G.bind(n))}if(s){const $=s.call(n,n);Y($)&&(e.data=Kn($))}if(yi=!0,o)for(const $ in o){const G=o[$],et=j(G)?G.bind(n,n):j(G.get)?G.get.bind(n,n):$e,ut=!j(G)&&j(G.set)?G.set.bind(n):$e,Ve=Pe({get:et,set:ut});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:be=>Ve.value=be})}if(l)for(const $ in l)Io(l[$],i,n,$);if(a){const $=j(a)?a.call(n):a;Reflect.ownKeys($).forEach(G=>{_n(G,$[G])})}d&&ds(d,e,"c");function de($,G){B(G)?G.forEach(et=>$(et.bind(n))):G&&$(G.bind(n))}if(de(hl,p),de(ml,m),de(gl,b),de(bl,k),de(ul,O),de(fl,D),de(_l,Me),de(Rl,ue),de(yl,ie),de(xl,A),de(vl,I),de(wl,ct),B(De))if(De.length){const $=e.exposed||(e.exposed={});De.forEach(G=>{Object.defineProperty($,G,{get:()=>n[G],set:et=>n[G]=et,enumerable:!0})})}else e.exposed||(e.exposed={});Z&&e.render===$e&&(e.render=Z),dt!=null&&(e.inheritAttrs=dt),yt&&(e.components=yt),je&&(e.directives=je),ct&&Ao(e)}function Tl(e,t,n=$e){B(e)&&(e=Ri(e));for(const i in e){const s=e[i];let o;Y(s)?"default"in s?o=lt(s.from||i,s.default,!0):o=lt(s.from||i):o=lt(s),ge(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function ds(e,t,n){ze(B(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,i){let s=i.includes(".")?Co(n,i):()=>n[i];if(re(e)){const o=t[e];j(o)&&En(s,o)}else if(j(e))En(s,e.bind(n));else if(Y(e))if(B(e))e.forEach(o=>Io(o,t,n,i));else{const o=j(e.handler)?e.handler.bind(n):t[e.handler];j(o)&&En(s,o,e)}}function ko(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let a;return l?a=l:!s.length&&!n&&!i?a=t:(a={},s.length&&s.forEach(u=>Pn(a,u,r,!0)),Pn(a,t,r)),Y(t)&&o.set(t,a),a}function Pn(e,t,n,i=!1){const{mixins:s,extends:o}=t;o&&Pn(e,o,n,!0),s&&s.forEach(r=>Pn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const l=Il[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Il={data:us,props:fs,emits:fs,methods:qt,computed:qt,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:qt,directives:qt,watch:Pl,provide:us,inject:kl};function us(e,t){return t?e?function(){return ce(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function kl(e,t){return qt(Ri(e),Ri(t))}function Ri(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?ce(Object.create(null),e,t):t}function fs(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ce(Object.create(null),cs(e),cs(t??{})):t}function Pl(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const i in t)n[i]=xe(e[i],t[i]);return n}function Po(){return{app:null,config:{isNativeTag:Gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fl=0;function Ll(e,t){return function(i,s=null){j(i)||(i=ce({},i)),s!=null&&!Y(s)&&(s=null);const o=Po(),r=new WeakSet,l=[];let a=!1;const u=o.app={_uid:Fl++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:pa,get config(){return o.config},set config(d){},use(d,...p){return r.has(d)||(d&&j(d.install)?(r.add(d),d.install(u,...p)):j(d)&&(r.add(d),d(u,...p))),u},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),u},component(d,p){return p?(o.components[d]=p,u):o.components[d]},directive(d,p){return p?(o.directives[d]=p,u):o.directives[d]},mount(d,p,m){if(!a){const b=u._ceVNode||oe(i,s);return b.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(b,d,m),a=!0,u._container=d,d.__vue_app__=u,Wi(b.component)}},onUnmount(d){l.push(d)},unmount(){a&&(ze(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,p){return o.provides[d]=p,u},runWithContext(d){const p=Dt;Dt=u;try{return d()}finally{Dt=p}}};return u}}let Dt=null;const zl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Re(t)}Modifiers`]||e[`${Pt(t)}Modifiers`];function Nl(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ne;let s=n;const o=t.startsWith("update:"),r=o&&zl(i,t.slice(7));r&&(r.trim&&(s=n.map(d=>re(d)?d.trim():d)),r.number&&(s=s.map(wr)));let l,a=i[l=Qn(t)]||i[l=Qn(Re(t))];!a&&o&&(a=i[l=Qn(Pt(t))]),a&&ze(a,e,6,s);const u=i[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ze(u,e,6,s)}}const Bl=new WeakMap;function Fo(e,t,n=!1){const i=n?Bl:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const o=e.emits;let r={},l=!1;if(!j(e)){const a=u=>{const d=Fo(u,t,!0);d&&(l=!0,ce(r,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(Y(e)&&i.set(e,null),null):(B(o)?o.forEach(a=>r[a]=null):ce(r,o),Y(e)&&i.set(e,r),r)}function Wn(e,t){return!e||!Nn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Pt(t))||U(e,t))}function ps(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:l,emit:a,render:u,renderCache:d,props:p,data:m,setupState:b,ctx:k,inheritAttrs:O}=e,D=In(e);let N,A;try{if(n.shapeFlag&4){const I=s||i,Z=I;N=qe(u.call(Z,I,d,p,b,m,k)),A=l}else{const I=t;N=qe(I.length>1?I(p,{attrs:l,slots:r,emit:a}):I(p,null)),A=t.props?l:Ml(l)}}catch(I){kt.length=0,Un(I,e,1),N=oe(Ne)}let F=N;if(A&&O!==!1){const I=Object.keys(A),{shapeFlag:Z}=F;I.length&&Z&7&&(o&&I.some(Bn)&&(A=Dl(A,o)),F=jt(F,A,!1,!0))}if(n.dirs&&(F=jt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition){const I=Gn(F.type)&&So(F)||F;Jt(I,n.transition)}return N=F,In(D),N}function Lo(e,t=!0){let n;for(let i=0;i<e.length;i++){const s=e[i];if(fn(s)){if(s.type!==Ne||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Ml=e=>{let t;for(const n in e)(n==="class"||n==="style"||Nn(n))&&((t||(t={}))[n]=e[n]);return t},Dl=(e,t)=>{const n={};for(const i in e)(!Bn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function jl(e,t,n){const{props:i,children:s,component:o}=e,{props:r,children:l,patchFlag:a}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?hs(i,r,u):!!r;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(zo(r,i,m)&&!Wn(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===r?!1:i?r?hs(i,r,u):!0:!!r;return!1}function hs(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(!U(e,o)||zo(t,e,o)&&!Wn(n,o))return!0}return!1}function zo(e,t,n){const i=e[n],s=t[n];return n==="style"&&Y(i)&&Y(s)?!Vn(i,s):i!==s}function Vl({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const No={},Bo=()=>Object.create(No),Mo=e=>Object.getPrototypeOf(e)===No;function Hl(e,t,n,i=!1){const s={},o=Bo();e.propsDefaults=Object.create(null),Do(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:mo(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Kl(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,l=q(s),[a]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Wn(e.emitsOptions,m))continue;const b=t[m];if(a)if(U(o,m))b!==o[m]&&(o[m]=b,u=!0);else{const k=Re(m);s[k]=_i(a,l,k,b,e,!1)}else b!==o[m]&&(o[m]=b,u=!0)}}}else{Do(e,t,s,o)&&(u=!0);let d;for(const p in l)(!t||!U(t,p)&&((d=Pt(p))===p||!U(t,d)))&&(a?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=_i(a,l,p,void 0,e,!0)):delete s[p]);if(o!==l)for(const p in o)(!t||!U(t,p))&&(delete o[p],u=!0)}u&&rt(e.attrs,"set","")}function Do(e,t,n,i){const[s,o]=e.propsOptions;let r=!1,l;if(t)for(let a in t){if(Qt(a))continue;const u=t[a];let d;s&&U(s,d=Re(a))?!o||!o.includes(d)?n[d]=u:(l||(l={}))[d]=u:Wn(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,r=!0)}if(o){const a=q(n),u=l||ne;for(let d=0;d<o.length;d++){const p=o[d];n[p]=_i(s,a,p,u[p],e,!U(u,p))}}return r}function _i(e,t,n,i,s,o){const r=e[n];if(r!=null){const l=U(r,"default");if(l&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&j(a)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const d=xn(s);i=u[n]=a.call(null,t),d()}}else i=a;s.ce&&s.ce._setProp(n,i)}r[0]&&(o&&!l?i=!1:r[1]&&(i===""||i===Pt(n))&&(i=!0))}return i}const Ul=new WeakMap;function jo(e,t,n=!1){const i=n?Ul:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,r={},l=[];let a=!1;if(!j(e)){const d=p=>{a=!0;const[m,b]=jo(p,t,!0);ce(r,m),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!a)return Y(e)&&i.set(e,Ot),Ot;if(B(o))for(let d=0;d<o.length;d++){const p=Re(o[d]);ms(p)&&(r[p]=ne)}else if(o)for(const d in o){const p=Re(d);if(ms(p)){const m=o[d],b=r[p]=B(m)||j(m)?{type:m}:ce({},m),k=b.type;let O=!1,D=!0;if(B(k))for(let N=0;N<k.length;++N){const A=k[N],F=j(A)&&A.name;if(F==="Boolean"){O=!0;break}else F==="String"&&(D=!1)}else O=j(k)&&k.name==="Boolean";b[0]=O,b[1]=D,(O||U(b,"default"))&&l.push(p)}}const u=[r,l];return Y(e)&&i.set(e,u),u}function ms(e){return e[0]!=="$"&&!Qt(e)}const Ki=e=>e==="_"||e==="_ctx"||e==="$stable",Ui=e=>B(e)?e.map(qe):[qe(e)],Gl=(e,t,n)=>{if(t._n)return t;const i=At((...s)=>Ui(t(...s)),n);return i._c=!1,i},Vo=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Ki(s))continue;const o=e[s];if(j(o))t[s]=Gl(s,o,i);else if(o!=null){const r=Ui(o);t[s]=()=>r}}},Ho=(e,t)=>{const n=Ui(t);e.slots.default=()=>n},Ko=(e,t,n)=>{for(const i in t)(n||!Ki(i))&&(e[i]=t[i])},Wl=(e,t,n)=>{const i=e.slots=Bo();if(e.vnode.shapeFlag&32){const s=t._;s?(Ko(i,t,n),n&&$s(i,"_",s,!0)):Vo(t,i)}else t&&Ho(e,t)},ql=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,r=ne;if(i.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Ko(s,t,n):(o=!t.$stable,Vo(t,s)),r=t}else t&&(Ho(e,t),r={default:1});if(o)for(const l in s)!Ki(l)&&r[l]==null&&delete s[l]},ve=Jl;function Yl(e){return $l(e)}function $l(e,t){const n=jn();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:l,createComment:a,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:b=$e,insertStaticContent:k}=e,O=(c,f,h,g=null,x=null,w=null,R=void 0,E=null,_=!!f.dynamicChildren)=>{if(c===f)return;c&&!Gt(c,f)&&(g=v(c),be(c,x,w,!0),c=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null),f.dynamicChildren&&c&&c.dynamicChildren&&c.dynamicChildren.hasOnce&&(f.dynamicChildren===Ot&&(f.dynamicChildren=[]),f.dynamicChildren.hasOnce=!0);const{type:y,ref:P,shapeFlag:S}=f;switch(y){case qn:D(c,f,h,g);break;case Ne:N(c,f,h,g);break;case ri:c==null&&A(f,h,g,R);break;case te:yt(c,f,h,g,x,w,R,E,_);break;default:S&1?Z(c,f,h,g,x,w,R,E,_):S&6?je(c,f,h,g,x,w,R,E,_):(S&64||S&128)&&y.process(c,f,h,g,x,w,R,E,_,C)}P!=null&&x?en(P,c&&c.ref,w,f||c,!f):P==null&&c&&c.ref!=null&&en(c.ref,null,w,c,!0)},D=(c,f,h,g)=>{if(c==null)i(f.el=l(f.children),h,g);else{const x=f.el=c.el;f.children!==c.children&&u(x,f.children)}},N=(c,f,h,g)=>{c==null?i(f.el=a(f.children||""),h,g):f.el=c.el},A=(c,f,h,g)=>{[c.el,c.anchor]=k(c.children,f,h,g,c.el,c.anchor)},F=({el:c,anchor:f},h,g)=>{let x;for(;c&&c!==f;)x=m(c),i(c,h,g),c=x;i(f,h,g)},I=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=m(c),s(c),c=h;s(f)},Z=(c,f,h,g,x,w,R,E,_)=>{if(f.type==="svg"?R="svg":f.type==="math"&&(R="mathml"),c==null)ue(f,h,g,x,w,R,E,_);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),ct(c,f,x,w,R,E,_)}finally{y&&y._endPatch()}}},ue=(c,f,h,g,x,w,R,E)=>{let _,y;const{props:P,shapeFlag:S,transition:L,dirs:M}=c;if(_=c.el=r(c.type,w,P&&P.is,P),S&8?d(_,c.children):S&16&&Me(c.children,_,null,g,x,oi(c,w),R,E),M&&Et(c,null,g,"created"),ie(_,c,c.scopeId,R,g),P){for(const J in P)J!=="value"&&!Qt(J)&&o(_,J,null,P[J],w,g);"value"in P&&o(_,"value",null,P.value,w),(y=P.onVnodeBeforeMount)&&Ue(y,g,c)}M&&Et(c,null,g,"beforeMount");const H=Ql(x,L);H?L.beforeEnter(_):L&&!L.persisted&&(_[Zl]=!0),i(_,f,h),((y=P&&P.onVnodeMounted)||H||M)&&ve(()=>{y&&Ue(y,g,c),H&&L.enter(_),M&&Et(c,null,g,"mounted")},x)},ie=(c,f,h,g,x)=>{if(h&&b(c,h),g)for(let w=0;w<g.length;w++)b(c,g[w]);if(x){let w=x.subTree;if(f===w||Wo(w.type)&&(w.ssContent===f||w.ssFallback===f)){const R=x.vnode;ie(c,R,R.scopeId,R.slotScopeIds,x.parent)}}},Me=(c,f,h,g,x,w,R,E,_=0)=>{for(let y=_;y<c.length;y++){const P=c[y]=E?ot(c[y]):qe(c[y]);O(null,P,f,h,g,x,w,R,E)}},ct=(c,f,h,g,x,w,R)=>{const E=f.el=c.el;let{patchFlag:_,dynamicChildren:y,dirs:P}=f;_|=c.patchFlag&16;const S=c.props||ne,L=f.props||ne;let M;if(h&&Ct(h,!1),(M=L.onVnodeBeforeUpdate)&&Ue(M,h,f,c),P&&Et(f,c,h,"beforeUpdate"),h&&Ct(h,!0),y&&(!c.dynamicChildren||c.dynamicChildren.length!==y.length)&&(_=0,R=!1,y=null),(S.innerHTML&&L.innerHTML==null||S.textContent&&L.textContent==null)&&d(E,""),y?De(c.dynamicChildren,y,E,h,g,oi(f,x),w):R||G(c,f,E,null,h,g,oi(f,x),w,!1),_>0){if(_&16)dt(E,S,L,h,x);else if(_&2&&S.class!==L.class&&o(E,"class",null,L.class,x),_&4&&o(E,"style",S.style,L.style,x),_&8){const H=f.dynamicProps;for(let J=0;J<H.length;J++){const Q=H[J],le=S[Q],fe=L[Q];(fe!==le||Q==="value")&&o(E,Q,le,fe,x,h)}}_&1&&c.children!==f.children&&d(E,f.children)}else!R&&y==null&&dt(E,S,L,h,x);((M=L.onVnodeUpdated)||P)&&ve(()=>{M&&Ue(M,h,f,c),P&&Et(f,c,h,"updated")},g)},De=(c,f,h,g,x,w,R)=>{for(let E=0;E<f.length;E++){const _=c[E],y=f[E],P=_.el||sn(_),S=P&&(_.type===te||!Gt(_,y)||_.shapeFlag&198)?p(P):h;O(_,y,S,null,g,x,w,R,!0)}},dt=(c,f,h,g,x)=>{if(f!==h){if(f!==ne)for(const w in f)!Qt(w)&&!(w in h)&&o(c,w,f[w],null,x,g);for(const w in h){if(Qt(w))continue;const R=h[w],E=f[w];R!==E&&w!=="value"&&o(c,w,E,R,x,g)}"value"in h&&o(c,"value",f.value,h.value,x)}},yt=(c,f,h,g,x,w,R,E,_)=>{const y=f.el=c?c.el:l(""),P=f.anchor=c?c.anchor:l("");let{patchFlag:S,dynamicChildren:L,slotScopeIds:M}=f;M&&(E=E?E.concat(M):M),c==null?(i(y,h,g),i(P,h,g),Me(f.children||[],h,P,x,w,R,E,_)):S>0&&S&64&&L&&c.dynamicChildren&&c.dynamicChildren.length===L.length?(De(c.dynamicChildren,L,h,x,w,R,E),(f.key!=null||x&&f===x.subTree)&&Uo(c,f,!0)):G(c,f,h,P,x,w,R,E,_)},je=(c,f,h,g,x,w,R,E,_)=>{f.slotScopeIds=E,c==null?f.shapeFlag&512?x.ctx.activate(f,h,g,R,_):Kt(f,h,g,x,w,R,_):Ft(c,f,_)},Kt=(c,f,h,g,x,w,R)=>{const E=c.component=oa(c,g,x);if(Hi(c)&&(E.ctx.renderer=C),la(E,!1,R),E.asyncDep){if(x&&x.registerDep(E,de,R,w),!c.el){const _=E.subTree=oe(Ne);N(null,_,f,h),c.placeholder=_.el}}else de(E,c,f,h,x,w,R)},Ft=(c,f,h)=>{const g=f.component=c.component;if(jl(c,f,h))if(g.asyncDep&&!g.asyncResolved){f.el=c.el,f.placeholder=c.placeholder,$(g,f,h);return}else g.next=f,g.update();else f.el=c.el,f.placeholder=c.placeholder,g.vnode=f},de=(c,f,h,g,x,w,R)=>{const E=()=>{if(c.isMounted){let{next:S,bu:L,u:M,parent:H,vnode:J}=c;{const He=Go(c);if(He){S&&(S.el=J.el,$(c,S,R)),He.asyncDep.then(()=>{const tt=()=>{c.job.flags&8||(x&&x.pendingBranch?ve(tt,x):y())};tt.flags=48,ve(tt,x)});return}}let Q=S,le;Ct(c,!1),S?(S.el=J.el,$(c,S,R)):S=J,L&&Xn(L),(le=S.props&&S.props.onVnodeBeforeUpdate)&&Ue(le,H,S,J),Ct(c,!0);const fe=ps(c),Te=c.subTree;c.subTree=fe,O(Te,fe,p(Te.el||sn(Te)),v(Te),c,x,w),S.el=fe.el,Q===null&&Vl(c,fe.el),M&&ve(M,x),(le=S.props&&S.props.onVnodeUpdated)&&ve(()=>Ue(le,H,S,J),x)}else{let S;const{el:L,props:M}=f,{bm:H,m:J,parent:Q,root:le,type:fe}=c,Te=tn(f);Ct(c,!1),H&&Xn(H),!Te&&(S=M&&M.onVnodeBeforeMount)&&Ue(S,Q,f),Ct(c,!0);{le.ce&&le.ce._hasShadowRoot()&&le.ce._injectChildStyle(fe,c.parent?c.parent.type:void 0);const He=c.subTree=ps(c);O(null,He,h,g,c,x,w),f.el=He.el}if(J&&ve(J,x),!Te&&(S=M&&M.onVnodeMounted)){const He=f;ve(()=>Ue(S,Q,He),x)}(f.shapeFlag&256||Q&&tn(Q.vnode)&&Q.vnode.shapeFlag&256)&&c.a&&ve(c.a,x),c.isMounted=!0,f=h=g=null}};c.scope.on();const _=c.effect=new Js(E);c.scope.off();const y=c.update=_.run.bind(_),P=c.job=_.runIfDirty.bind(_);P.i=c,P.id=c.uid,_.scheduler=()=>Vi(P),Ct(c,!0),y()},$=(c,f,h)=>{f.component=c;const g=c.vnode.props;c.vnode=f,c.next=null,Kl(c,f.props,g,h),ql(c,f.children,h),Xe(),wo(c),Ze()},G=(c,f,h,g,x,w,R,E,_=!1)=>{const y=c&&c.children,P=c?c.shapeFlag:0,S=f.children,{patchFlag:L,shapeFlag:M}=f;if(L>0){if(L&128){ut(y,S,h,g,x,w,R,E,_);return}else if(L&256){et(y,S,h,g,x,w,R,E,_);return}}M&8?(P&16&&Se(y,x,w),S!==y&&d(h,S)):P&16?M&16?ut(y,S,h,g,x,w,R,E,_):Se(y,x,w,!0):(P&8&&d(h,""),M&16&&Me(S,h,g,x,w,R,E,_))},et=(c,f,h,g,x,w,R,E,_)=>{c=c||Ot,f=f||Ot;const y=c.length,P=f.length,S=Math.min(y,P);let L;for(L=0;L<S;L++){const M=f[L]=_?ot(f[L]):qe(f[L]);O(c[L],M,h,null,x,w,R,E,_)}y>P?Se(c,x,w,!0,!1,S):Me(f,h,g,x,w,R,E,_,S)},ut=(c,f,h,g,x,w,R,E,_)=>{let y=0;const P=f.length;let S=c.length-1,L=P-1;for(;y<=S&&y<=L;){const M=c[y],H=f[y]=_?ot(f[y]):qe(f[y]);if(Gt(M,H))O(M,H,h,null,x,w,R,E,_);else break;y++}for(;y<=S&&y<=L;){const M=c[S],H=f[L]=_?ot(f[L]):qe(f[L]);if(Gt(M,H))O(M,H,h,null,x,w,R,E,_);else break;S--,L--}if(y>S){if(y<=L){const M=L+1,H=M<P?f[M].el:g;for(;y<=L;)O(null,f[y]=_?ot(f[y]):qe(f[y]),h,H,x,w,R,E,_),y++}}else if(y>L)for(;y<=S;)be(c[y],x,w,!0),y++;else{const M=y,H=y,J=new Map;for(y=H;y<=L;y++){const _e=f[y]=_?ot(f[y]):qe(f[y]);_e.key!=null&&J.set(_e.key,y)}let Q,le=0;const fe=L-H+1;let Te=!1,He=0;const tt=new Array(fe);for(y=0;y<fe;y++)tt[y]=0;for(y=M;y<=S;y++){const _e=c[y];if(le>=fe){be(_e,x,w,!0);continue}let Ke;if(_e.key!=null)Ke=J.get(_e.key);else for(Q=H;Q<=L;Q++)if(tt[Q-H]===0&&Gt(_e,f[Q])){Ke=Q;break}Ke===void 0?be(_e,x,w,!0):(tt[Ke-H]=y+1,Ke>=He?He=Ke:Te=!0,O(_e,f[Ke],h,null,x,w,R,E,_),le++)}const Qi=Te?Xl(tt):Ot;for(Q=Qi.length-1,y=fe-1;y>=0;y--){const _e=H+y,Ke=f[_e],Xi=f[_e+1],Zi=_e+1<P?Xi.el||sn(Xi):g;tt[y]===0?O(null,Ke,h,Zi,x,w,R,E,_):Te&&(Q<0||y!==Qi[Q]?Ve(Ke,h,Zi,2):Q--)}}},Ve=(c,f,h,g,x=null)=>{const{el:w,type:R,transition:E,children:_,shapeFlag:y}=c;if(y&6){Ve(c.component.subTree,f,h,g);return}if(y&128){c.suspense.move(f,h,g);return}if(y&64){R.move(c,f,h,C);return}if(R===te){i(w,f,h);for(let S=0;S<_.length;S++)Ve(_[S],f,h,g);i(c.anchor,f,h);return}if(R===ri){F(c,f,h);return}if(g!==2&&y&1&&E)if(g===0)E.persisted&&!w[ii]?i(w,f,h):(E.beforeEnter(w),i(w,f,h),ve(()=>E.enter(w),x));else{const{leave:S,delayLeave:L,afterLeave:M}=E,H=()=>{c.ctx.isUnmounted?s(w):i(w,f,h)},J=()=>{const Q=w._isLeaving||!!w[ii];w._isLeaving&&w[ii](!0),E.persisted&&!Q?H():S(w,()=>{H(),M&&M()})};L?L(w,H,J):J()}else i(w,f,h)},be=(c,f,h,g=!1,x=!1)=>{const{type:w,props:R,ref:E,children:_,dynamicChildren:y,shapeFlag:P,patchFlag:S,dirs:L,cacheIndex:M,memo:H}=c;if((S===-2||y&&y.hasOnce)&&(x=!1),E!=null&&(Xe(),en(E,null,h,c,!0),Ze()),M!=null&&(!c.ctx||c.ctx===f)&&(f.renderCache[M]=void 0),P&256&&f.ctx.deactivate(c))return;const J=P&1&&L,Q=!tn(c);let le;if(Q&&(le=R&&R.onVnodeBeforeUnmount)&&Ue(le,f,c),P&6)_t(c.component,h,g);else{if(P&128){c.suspense.unmount(h,g);return}J&&Et(c,null,f,"beforeUnmount"),P&64?c.type.remove(c,f,h,C,g):y&&!y.hasOnce&&(w!==te||S>0&&S&64)?Se(y,f,h,!1,!0):(w===te&&S&384||!x&&P&16)&&Se(_,f,h),g&&Lt(c)}const fe=H!=null&&M==null;(Q&&(le=R&&R.onVnodeUnmounted)||J||fe)&&ve(()=>{le&&Ue(le,f,c),J&&Et(c,null,f,"unmounted"),fe&&(c.el=null)},h)},Lt=c=>{const{type:f,el:h,anchor:g,transition:x}=c,w=f===te;if(w&&!x){Rt(h,g);return}if(f===ri){I(c),x&&!x.persisted&&x.afterLeave&&x.afterLeave();return}const R=w?vi(c):c,E=()=>{w?p(h)&&Rt(h,g):s(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(R&&R.shapeFlag&1&&x&&!x.persisted){const{leave:_,delayLeave:y}=x,P=R.el,S=()=>_(P,E);y?y(P,E,S):S()}else E()},Rt=(c,f)=>{let h;for(;c!==f;)h=m(c),s(c),c=h;s(f)},_t=(c,f,h)=>{const{bum:g,scope:x,job:w,subTree:R,um:E,m:_,a:y}=c;gs(_),gs(y),g&&Xn(g),x.stop(),w?(w.flags|=8,be(R,c,f,h)):R&&(R.transition=c.vnode.transition,be(R,c,f,h)),E&&ve(E,f);const P=()=>{c.isUnmounted=!0};P.flags=16,ve(P,f)},Se=(c,f,h,g=!1,x=!1,w=0)=>{for(let R=w;R<c.length;R++)be(c[R],f,h,g,x)},v=c=>{if(c.shapeFlag&6)return v(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=m(c.anchor||c.el),h=f&&f[cl];return h?m(h):f},T=(c,f,h)=>{const g=c&&f._vnode?void 0:c&&c.component?c.component.uid:sa();ol(()=>{c==null?f._vnode&&be(f._vnode,null,null,!0):O(f._vnode||null,c,f,null,null,null,h),f._vnode=c},g)},C={p:O,um:be,m:Ve,r:Lt,mt:Kt,mc:Me,pc:G,pbc:De,n:v,o:e};return{render:T,hydrate:void 0,createApp:Ll(T)}}function oi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ct({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ql(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Uo(e,t,n=!1){const i=e.children,s=t.children;if(B(i)&&B(s))for(let o=0;o<i.length;o++){const r=i[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=ot(s[o]),l.el=r.el),!n&&l.patchFlag!==-2&&Uo(r,l)),l.type===qn&&(l.patchFlag===-1&&(l=s[o]=ot(l)),l.el=r.el),l.type===Ne&&!l.el&&(l.el=r.el)}}function Xl(e){const t=e.slice(),n=[0];let i,s,o,r,l;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(s=n[n.length-1],e[s]<u){t[i]=s,n.push(i);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<u?o=l+1:r=l;u<e[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Go(t)}function gs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function sn(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return sn(t.subTree);const n=e.suspense;return n&&n.activeBranch?sn(n.activeBranch):null}const Wo=e=>e.__isSuspense,Zl=Symbol("_deferredEnter");function Jl(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):sl(e)}const te=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),ri=Symbol.for("v-stc"),kt=[];let Ce=null;function K(e=!1){kt.push(Ce=e?null:[])}function qo(){kt.pop(),Ce=kt[kt.length-1]||null}let un=1;function Fn(e,t=!1){un+=e,e<0&&Ce&&t&&(Ce.hasOnce=!0)}function Yo(e){return e.dynamicChildren=un>0?Ce||Ot:null,qo(),un>0&&Ce&&Ce.push(e),e}function X(e,t,n,i,s,o){return Yo(V(e,t,n,i,s,o,!0))}function Gi(e,t,n,i,s){return Yo(oe(e,t,n,i,s,!0))}function fn(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const $o=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ge(e)||j(e)?{i:Fe,r:e,k:t,f:!!n}:e:null);function V(e,t=null,n=null,i=0,s=null,o=e===te?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$o(t),ref:t&&Cn(t),scopeId:_o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Fe};return l?(Ln(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),un>0&&!r&&Ce&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ce.push(a),a}const oe=ea;function ea(e,t=null,n=null,i=0,s=null,o=!1){if((!e||e===Cl)&&(e=Ne),fn(e)){const l=jt(e,t,!0);return n&&Ln(l,n),un>0&&!o&&Ce&&(l.shapeFlag&6?Ce[Ce.indexOf(e)]=l:Ce.push(l)),l.patchFlag=-2,l}if(fa(e)&&(e=e.__vccOpts),t){t=ta(t);let{class:l,style:a}=t;l&&!re(l)&&(t.class=xt(l)),Y(a)&&(Di(a)&&!B(a)&&(a=ce({},a)),t.style=Pi(a))}const r=re(e)?1:Wo(e)?128:Gn(e)?64:Y(e)?4:j(e)?2:0;return V(e,t,n,i,s,r,o,!0)}function ta(e){return e?Di(e)?ce({},e):Mo(e)?ce({},e[Jo]||e):e:null}function jt(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:l,transition:a}=e,u=t?na(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&$o(u),ref:t&&t.ref?n&&o?B(o)?o.concat(Cn(t)):[o,Cn(t)]:Cn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==te?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return a&&i&&Jt(d,a.clone(d)),d}function ke(e=" ",t=0){return oe(qn,null,e,t)}function Yt(e="",t=!1){return t?(K(),Gi(Ne,null,e)):oe(Ne,null,e)}function qe(e){return e==null||typeof e=="boolean"?oe(Ne):B(e)?oe(te,null,e.slice()):fn(e)?ot(e):oe(qn,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Ln(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ln(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Mo(t)?t._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(j(t)){if(i&65){Ln(e,{default:t});return}t={default:t,_ctx:Fe},n=32}else t=String(t),i&64?(n=16,t=[ke(t)]):n=8;e.children=t,e.shapeFlag|=n}function na(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=xt([t.class,i.class]));else if(s==="style")t.style=Pi([t.style,i.style]);else if(Nn(s)){const o=t[s],r=i[s];r&&o!==r&&!(B(o)&&o.includes(r))?t[s]=o?[].concat(o,r):r:r==null&&o==null&&!Bn(s)&&(t[s]=r)}else s!==""&&(t[s]=i[s])}return t}function Ue(e,t,n,i=null){ze(e,t,7,[n,i])}const ia=Po();let Qo=0;function sa(){return Qo}function oa(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||ia,o={uid:Qo++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jo(i,s),emitsOptions:Fo(i,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:i.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Nl.bind(null,o),e.ce&&e.ce(o),o}let me=null;const ra=()=>me||Fe;let zn,pn;{const e=jn(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};zn=t("__VUE_INSTANCE_SETTERS__",n=>me=n),pn=t("__VUE_SSR_SETTERS__",n=>hn=n)}const xn=e=>{const t=me;return zn(e),e.scope.on(),()=>{e.scope.off(),zn(t)}},bs=()=>{me&&me.scope.off(),zn(null)};function Xo(e){return e.vnode.shapeFlag&4}let hn=!1;function la(e,t=!1,n=!1){t&&pn(t);const{props:i,children:s}=e.vnode,o=Xo(e);Hl(e,i,o,t),Wl(e,s,n||t);const r=o?aa(e,t):void 0;return t&&pn(!1),r}function aa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ol);const{setup:i}=n;if(i){Xe();const s=e.setupContext=i.length>1?da(e):null,o=xn(e),r=bn(i,e,0,[e.props,s]),l=Ws(r);if(Ze(),o(),(l||e.sp)&&!tn(e)&&Ao(e),l){if(r.then(bs,bs),t)return r.then(a=>{pn(!0);try{xs(e,a,t)}finally{pn(!1)}}).catch(a=>{Un(a,e,0,void 0,!0),e.ssrRender=(u,d)=>d("<!---->")});e.asyncDep=r}else xs(e,r)}else Zo(e)}function xs(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=bo(t)),Zo(e)}function Zo(e,t,n){const i=e.type;e.render||(e.render=i.render||$e);{const s=xn(e);Xe();try{Al(e)}finally{Ze(),s()}}}const Jo=Symbol(),ca={get(e,t){return he(e,"get",""),t===Jo?e:e[t]}};function da(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ca),slots:e.slots,emit:e.emit,expose:t}}function Wi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(bo(qr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}})):e.proxy}function ua(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function fa(e){return j(e)&&"__vccOpts"in e}const Pe=(e,t)=>Jr(e,t,hn);function er(e,t,n){try{Fn(-1);const i=arguments.length;return i===2?Y(t)&&!B(t)?fn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&fn(n)&&(n=[n]),oe(e,t,n))}finally{Fn(1)}}const pa="3.5.45";let Ei;const vs=typeof window<"u"&&window.trustedTypes;if(vs)try{Ei=vs.createPolicy("vue",{createHTML:e=>e})}catch{}const tr=Ei?e=>Ei.createHTML(e):e=>e,ha="http://www.w3.org/2000/svg",ma="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,ws=st&&st.createElement("template"),ga={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?st.createElementNS(ha,e):t==="mathml"?st.createElementNS(ma,e):n?st.createElement(e,{is:n}):st.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ws.innerHTML=tr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=ws.content;if(i==="svg"||i==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ba=Symbol("_vtc");function xa(e,t,n){const i=e[ba];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ys=Symbol("_vod"),va=Symbol("_vsh"),wa=Symbol(""),ya=/(?:^|;)\s*display\s*:/;function Ra(e,t,n){const i=e.style,s=re(n);let o=!1;if(n&&!s){if(t)if(re(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&$t(i,l,"")}else for(const r in t)n[r]==null&&$t(i,r,"");for(const r in n){r==="display"&&(o=!0);const l=n[r];l!=null?Ea(e,r,!re(t)&&t?t[r]:void 0,l)||$t(i,r,l):$t(i,r,"")}}else if(s){if(t!==n){const r=i[wa];r&&(n+=";"+r),i.cssText=n,o=ya.test(n)}}else t&&e.removeAttribute("style");ys in e&&((!s||t!==n)&&(e[ys]=o?i.display:""),e[va]&&(i.display="none"))}const Rn=/\s*!important$/;function $t(e,t,n){if(B(n))n.forEach(i=>$t(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))Rn.test(n)?e.setProperty(t,n.replace(Rn,""),"important"):e.setProperty(t,n);else{const i=_a(e,t);Rn.test(n)?e.setProperty(Pt(i),n.replace(Rn,""),"important"):e[i]=n}}const Rs=["Webkit","Moz","ms"],li={};function _a(e,t){const n=li[t];if(n)return n;let i=Re(t);if(i!=="filter"&&i in e)return li[t]=i;i=Dn(i);for(let s=0;s<Rs.length;s++){const o=Rs[s]+i;if(o in e)return li[t]=o}return t}function Ea(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&re(i)&&n===i}const _s="http://www.w3.org/1999/xlink";function Es(e,t,n,i,s,o=Sr(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_s,t.slice(6,t.length)):e.setAttributeNS(_s,t,n):n==null||o&&!Qs(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Qe(n)?String(n):n)}function Cs(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?tr(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Qs(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Ca(e,t,n,i){e.addEventListener(t,n,i)}function Sa(e,t,n,i){e.removeEventListener(t,n,i)}const Ss=Symbol("_vei");function Oa(e,t,n,i,s=null){const o=e[Ss]||(e[Ss]={}),r=o[t];if(i&&r)r.value=i;else{const[l,a]=Ia(t);if(i){const u=o[t]=Fa(i,s);Ca(e,l,u,a)}else r&&(Sa(e,l,r,a),o[t]=void 0)}}const Aa=/(Once|Passive|Capture)$/,Ta=/^on:?(?:Once|Passive|Capture)$/;function Ia(e){let t,n;for(;(n=e.match(Aa))&&!Ta.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let ai=0;const ka=Promise.resolve(),Pa=()=>ai||(ka.then(()=>ai=0),ai=Date.now());function Fa(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(B(s)){const o=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{o.call(i),i._stopped=!0};const r=s.slice(),l=[i];for(let a=0;a<r.length&&!i._stopped;a++){const u=r[a];u&&ze(u,t,5,l)}}else ze(s,t,5,[i])};return n.value=e,n.attached=Pa(),n}const Os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,La=(e,t,n,i,s,o)=>{const r=s==="svg";t==="class"?xa(e,i,r):t==="style"?Ra(e,n,i):Nn(t)?Bn(t)||Oa(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):za(e,t,i,r))?(Cs(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Es(e,t,i,r,o,t!=="value")):e._isVueCE&&(Na(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!re(i)))?Cs(e,Re(t),i,o,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Es(e,t,i,r))};function za(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Os(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Os(t)&&re(n)?!1:t in e}function Na(e,t){const n=e._def.props;if(!n)return!1;const i=Re(t);return Array.isArray(n)?n.some(s=>Re(s)===i):Object.keys(n).some(s=>Re(s)===i)}const Ba=ce({patchProp:La},ga);let As;function Ma(){return As||(As=Yl(Ba))}const Da=((...e)=>{const t=Ma().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Va(i);if(!s)return;const o=t._component;!j(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,ja(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function ja(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Va(e){return re(e)?document.querySelector(e):e}const Sn={releases:[{label:"v5",tag:"v5.0.2",directory:"v5/"},{label:"v6",tag:"v6.0.6",directory:""}],documents:[{version:"v5",page:"base",title:"Base",path:"/v5/index.html",kind:"mixins",groups:[{title:"字体",items:[{id:".fz",label:".fz"},{id:".lh",label:".lh"},{id:".bold",label:".bold"},{id:".italic",label:".italic"},{id:".normal",label:".normal"},{id:".smooth",label:".smooth"},{id:".color",label:".color"}]},{title:"文本",items:[{id:".nobreak",label:".nobreak"},{id:".break",label:".break"},{id:".retext",label:".retext"},{id:".indent",label:".indent"}]},{title:"对齐",items:[{id:".x",label:".x"},{id:".y",label:".y"},{id:".auto",label:".auto"},{id:".z",label:".z"}]},{title:"尺寸与表现",items:[{id:".w",label:".w"},{id:".h",label:".h"},{id:".size",label:".size"},{id:".db",label:".db"},{id:".none",label:".none"},{id:".r",label:".r"}]},{title:"布局与定位",items:[{id:".flex",label:".flex"},{id:".grid",label:".grid"},{id:".ps",label:".ps"},{id:".pr",label:".pr"},{id:".pa",label:".pa"},{id:".pf",label:".pf"},{id:".lt",label:".lt"},{id:".rt",label:".rt"},{id:".lb",label:".lb"},{id:".rb",label:".rb"}]},{title:"交互",items:[{id:".pointer",label:".pointer"}]},{title:"旧版兼容",items:[{id:".min-width",label:".min-width"},{id:".min-height",label:".min-height"},{id:".dbi",label:".dbi"},{id:".clip",label:".clip"},{id:".fl",label:".fl"},{id:".fr",label:".fr"},{id:".clearfix",label:".clearfix"},{id:".clear",label:".clear"}]},{title:"已弃用",items:[{id:".pl",label:".pl"},{id:".pr-padding",label:".pr(@padding)"},{id:".pt",label:".pt"},{id:".pb",label:".pb"},{id:".ml",label:".ml"},{id:".mr",label:".mr"},{id:".mt",label:".mt"},{id:".mb",label:".mb"},{id:".tm",label:".tm"}]}],sections:[{id:".fz",name:".fz",title:"字号",description:"依次设置字号、行高和高度。省略后两项时仍输出 line-height: inherit 和 height: auto。",code:`.example { .fz(16px); }
.example { .fz(16px, 24px); }
.example { .fz(16px, 24px, 32px); }`,signatures:"(@font-size, @line-height: inherit, @height: auto)",preview:""},{id:".lh",name:".lh",title:"行高",description:"设置行高和高度。省略第二个参数时输出 height: auto。",code:".example { .lh(24px, 32px); }",signatures:"(@line-height, @height: auto)",preview:""},{id:".bold",name:".bold",title:"字重",description:"默认使用 bold，也可传入数字字重。",code:".example { .bold(700); }",signatures:"(@bold:bold)",preview:""},{id:".italic",name:".italic",title:"斜体",description:"将字体设为 italic。",code:".example { .italic(); }",signatures:"()",preview:""},{id:".normal",name:".normal",title:"普通字形",description:"将字重和字形还原为 normal。",code:".example { .normal(); }",signatures:"()",preview:""},{id:".smooth",name:".smooth",title:"字体平滑",description:"输出 WebKit 和 Firefox 的字体平滑属性。",code:".example { .smooth(); }",signatures:"()",preview:""},{id:".color",name:".color",title:"文字颜色",description:"传纯色可加第二个纯色作为悬停颜色。传渐变时用背景裁剪填充文字。",code:`.example { .color(#333, #f60); }
.example { .color(linear-gradient(90deg, #f60, #09f)); }`,signatures:"(@color, @hovercolor: null)",preview:""},{id:".nobreak",name:".nobreak",title:"单行溢出",description:"禁止折行并隐藏溢出。默认显示省略号，传 clip 可直接截断。",code:`.example { .nobreak(); }
.example { .nobreak(clip); }`,signatures:"(@style:ellipsis)",preview:""},{id:".break",name:".break",title:"折行与多行截断",description:"默认允许文本折行。传行数时使用 -webkit-line-clamp 截断，第二个参数为 true 时使用 -webkit-inline-box。",code:`.example { .break(); }
.example { .break(3); }
.example { .break(2, true); }`,signatures:"(@lines: auto, @inline: false)",preview:""},{id:".retext",name:".retext",title:"书写方向",description:"x 为从右向左的水平排版，y 为从右向左的竖排。",code:`.example { .retext(x); }
.example { .retext(y); }`,signatures:"(x) / (y)",preview:""},{id:".indent",name:".indent",title:"文本缩进",description:"默认缩进 -200% 并隐藏溢出，可传入其他缩进值。",code:".example { .indent(2em); }",signatures:"(@indent:-200%)",preview:""},{id:".x",name:".x",title:"水平文本对齐",description:"设置 text-align，默认居中。",code:".example { .x(left); }",signatures:"(@align:center)",preview:""},{id:".y",name:".y",title:"行内垂直对齐",description:"设置 vertical-align，默认 middle。",code:".example { .y(top); }",signatures:"(@align:middle)",preview:""},{id:".auto",name:".auto",title:"容器对齐",description:"x 将左右外边距设为 auto，y 使用 table-cell 和 vertical-align: middle。",code:`.example { .auto(x); }
.example { .auto(y); }`,signatures:"(x) / (y)",preview:""},{id:".z",name:".z",title:"层叠顺序",description:"设置 z-index，默认 1。",code:".example { .z(10); }",signatures:"(@index:1)",preview:""},{id:".w",name:".w",title:"宽度",description:"设置 width。",code:".example { .w(20rem); }",signatures:"(@width)",preview:""},{id:".h",name:".h",title:"高度",description:"设置 height。",code:".example { .h(4rem); }",signatures:"(@height)",preview:""},{id:".size",name:".size",title:"宽高",description:"省略第二个参数时，高度与宽度相同。",code:`.example { .size(32px); }
.example { .size(160px, 90px); }`,signatures:"(@width,@height:@width)",preview:""},{id:".db",name:".db",title:"块级显示",description:"设置 display: block。",code:".example { .db(); }",signatures:"（无参数）",preview:""},{id:".none",name:".none",title:"隐藏",description:"设置 display: none。",code:".example { .none(); }",signatures:"（无参数）",preview:""},{id:".r",name:".r",title:"圆角",description:"设置 border-radius。",code:".example { .r(6px); }",signatures:"(@radius)",preview:""},{id:".flex",name:".flex",title:"弹性布局",description:"无参开启 Flex。x 在主轴居中，y 在交叉轴居中，o 同时居中。",code:`.example { .flex(); }
.example { .flex(x); }
.example { .flex(y); }
.example { .flex(o); }`,signatures:"（无参数） / (x) / (y) / (o)",preview:""},{id:".grid",name:".grid",title:"网格布局",description:"无参开启 Grid。传行数和列数时，两轴分别生成等分轨道。 .grid(x, 3) 使用 repeat(3, 1fr) 固定三列。 x 重载也会命中通用重载，生成的 grid-template-rows: repeat(x, 1fr) 会被浏览器忽略。",code:`.example { .grid(); }
.example { .grid(2, 3); }
.example { .grid(x, 3); }`,signatures:"（无参数） / (x,@count) / (@rows, @cols)",preview:""},{id:".ps",name:".ps",title:"静态定位",description:"设置 position: static。",code:".example { .ps(); }",signatures:"（无参数）",preview:""},{id:".pr",name:".pr",title:"相对定位",description:"设置 position: relative，并输出旧 IE 的 *zoom: 1。",code:".example { .pr(); }",signatures:"（无参数）",preview:""},{id:".pa",name:".pa",title:"绝对定位",description:"设置 position: absolute。",code:".example { .pa(); }",signatures:"（无参数）",preview:""},{id:".pf",name:".pf",title:"固定定位",description:"设置 position: fixed。",code:".example { .pf(); }",signatures:"（无参数）",preview:""},{id:".lt",name:".lt",title:"左上定位",description:"依次设置 left、top。省略第二个参数时复用第一个值。",code:".example { .lt(8px, 12px); }",signatures:"(@l,@t:@l)",preview:""},{id:".rt",name:".rt",title:"右上定位",description:"依次设置 right、top。省略第二个参数时复用第一个值。",code:".example { .rt(8px); }",signatures:"(@r,@t:@r)",preview:""},{id:".lb",name:".lb",title:"左下定位",description:"依次设置 left、bottom。省略第二个参数时复用第一个值。",code:".example { .lb(8px); }",signatures:"(@l,@b:@l)",preview:""},{id:".rb",name:".rb",title:"右下定位",description:"依次设置 right、bottom。省略第二个参数时复用第一个值。",code:".example { .rb(8px); }",signatures:"(@r,@b:@r)",preview:""},{id:".pointer",name:".pointer",title:"手形指针",description:"设置 cursor: pointer。",code:".example { .pointer(); }",signatures:"()",preview:""},{id:".min-width",name:".min-width",title:"最小宽度",description:"输出 min-width 和 IE6 使用的 _width 写法。",code:".example { .min-width(240px); }",signatures:"(@min-width)",preview:""},{id:".min-height",name:".min-height",title:"最小高度",description:"输出 min-height 和 IE6 使用的 _height 写法。",code:".example { .min-height(48px); }",signatures:"(@min-height)",preview:""},{id:".dbi",name:".dbi",title:"行内块",description:"设置 display: inline-block，并输出旧 IE 的 *display: inline 和 *zoom: 1。",code:".example { .dbi(); }",signatures:"()",preview:""},{id:".clip",name:".clip",title:"裁切溢出",description:"设置 overflow: hidden，并输出旧 IE 的 *zoom: 1。",code:".example { .clip(); }",signatures:"()",preview:""},{id:".fl",name:".fl",title:"左浮动",description:"设置 float: left，并输出旧 IE 的 *display: inline。",code:".example { .fl(); }",signatures:"（无参数）",preview:""},{id:".fr",name:".fr",title:"右浮动",description:"设置 float: right，并输出旧 IE 的 *display: inline。",code:".example { .fr(); }",signatures:"（无参数）",preview:""},{id:".clearfix",name:".clearfix",title:"清除浮动塌陷",description:"通过 ::after 伪元素清除两侧浮动。 同时输出旧 IE 的 *zoom: 1。",code:".example { .clearfix(); }",signatures:"（无参数）",preview:""},{id:".clear",name:".clear",title:"清除浮动",description:"设置 clear，默认 both。",code:".example { .clear(left); }",signatures:"(@clear:both)",preview:""},{id:".pl",name:".pl",title:"左内边距",description:"设置 padding-left。",code:".example { .pl(8px); }",signatures:"(@padding)",preview:""},{id:".pr-padding",name:".pr",title:"右内边距",description:"设置 padding-right。",code:".example { .pr(8px); }",signatures:"(@padding)",preview:""},{id:".pt",name:".pt",title:"上内边距",description:"设置 padding-top。",code:".example { .pt(8px); }",signatures:"(@padding)",preview:""},{id:".pb",name:".pb",title:"下内边距",description:"设置 padding-bottom。",code:".example { .pb(8px); }",signatures:"(@padding)",preview:""},{id:".ml",name:".ml",title:"左外边距",description:"设置 margin-left。",code:".example { .ml(8px); }",signatures:"(@margin)",preview:""},{id:".mr",name:".mr",title:"右外边距",description:"设置 margin-right。",code:".example { .mr(8px); }",signatures:"(@margin)",preview:""},{id:".mt",name:".mt",title:"上外边距",description:"设置 margin-top。",code:".example { .mt(8px); }",signatures:"(@margin)",preview:""},{id:".mb",name:".mb",title:"下外边距",description:"设置 margin-bottom。",code:".example { .mb(8px); }",signatures:"(@margin)",preview:""},{id:".tm",name:".tm",title:"透明度",description:"传入 0 到 1 的数值设置 opacity，同时输出旧 IE 的 alpha 滤镜。",code:".example { .tm(0.5); }",signatures:"(@tm)",preview:""}],tips:["<code>npm install csslab@5.0.2</code>","<code>@import &quot;csslab/base.less&quot;;</code>","签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。"]},{version:"v5",page:"shape",title:"Shape",path:"/v5/shape.html",kind:"mixins",groups:[{title:"箭头",items:[{id:".arrow",label:".arrow"},{id:".arrows",label:".arrows"},{id:".arrowtg",label:".arrowtg"},{id:".arrowstg",label:".arrowstg"},{id:".tg",label:".tg"}]},{title:"圆形",items:[{id:".disc",label:".disc"},{id:".circle",label:".circle"},{id:".pie",label:".pie"},{id:".leaf",label:".leaf"}]}],sections:[{id:".arrow",name:".arrow",title:"箭头",description:"t、b、l、r 分别表示上、下、左、右。请先给容器设置 position: relative。偏移默认 50%，横向从左、纵向从上计算。",code:`.example { position: relative; .arrow(l, 10px, #333); }
.example { position: relative; .arrow(t, 10px, #333, 80%); }`,signatures:"(t,@width,@color,@x:50%) / (b,@width,@color,@x:50%) / (l,@width,@color,@y:50%) / (r,@width,@color,@y:50%)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(l,10px,#333);</div>
	<p>&#x9700;&#x8981;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x4F4D;&#x7F6E;&#x65F6;&#xFF1A;</p>
	<pre><code class="less">
		.test{.pr;.arrow(t,10px,#333,80%);}
	</code></pre>
	<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test2">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(t,10px,#333,80%);</div>
	<p>&#x989C;&#x8272;&#x53EF;&#x4EE5;&#x4F20;&#x5165;&#x534A;&#x900F;&#x660E;&#xFF1A;</p>
	<pre><code class="less">
		.test{.pr;.arrow(r,10px,rgba(0,0,0,0.5));}
	</code></pre>
	<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test3">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(r,10px,rgba(0,0,0,0.5));</div>`},{id:".arrows",name:".arrows",title:"带边框的箭头",description:"t、b、l、r 分别表示上、下、左、右。请先给容器设置 position: relative。偏移默认 50%，横向从左、纵向从上计算。依次传入箭头宽度、填充色、边框宽度和边框颜色。容器的背景和边框需自行设置。",code:".example { position: relative; .arrows(b, 10px, #74e2fe, 1px, #09f); }",signatures:"(t,@width,@color,@bo-width,@bo-color,@x:50%) / (b,@width,@color,@bo-width,@bo-color,@x:50%) / (l,@width,@color,@bo-width,@bo-color,@y:50%) / (r,@width,@color,@bo-width,@bo-color,@y:50%)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test4">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrows(b,10px,#74e2fe,1px,#09f);</div>`},{id:".arrowtg",name:".arrowtg",title:"调整箭头位置",description:"用于 .arrow()。上下箭头用 x，左右箭头用 y。",code:".example { .arrowtg(x, 20%); }",signatures:"(x,@x:50%) / (y,@y:50%)",preview:""},{id:".arrowstg",name:".arrowstg",title:"调整带边框箭头的位置",description:"用于 .arrows()。上下箭头用 x，左右箭头用 y。",code:".example { .arrowstg(y, 20%); }",signatures:"(x,@x:50%) / (y,@y:50%)",preview:""},{id:".tg",name:".tg",title:"三角形",description:"t、b、l、r 分别表示上、下、左、右。lt、rt、lb、rb 对应四角。上下左右方向的第四个参数传 1 可生成等边三角形。",code:`.example { .tg(t, 20px, #f39); }
.example { .tg(t, 20px, #f39, 1); }
.example { .tg(lt, 20px, #f39); }`,signatures:"(...) / (t,@width,@color,@equilateral:0) / (b,@width,@color,@equilateral:0) / (l,@width,@color,@equilateral:0) / (r,@width,@color,@equilateral:0) / (lt,@width,@color) / (rt,@width,@color) / (lb,@width,@color) / (rb,@width,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="tg-test">
		<div class="tg-test1">L</div>
		<div class="tg-test2">T</div>
		<div class="tg-test3">B</div>
		<div class="tg-test4">R</div>
		<div class="tg-test5">LT</div>
		<div class="tg-test6">RT</div>
		<div class="tg-test7">LB</div>
		<div class="tg-test8">RB</div>
	</div>`},{id:".disc",name:".disc",title:"实心圆",description:"o 生成整圆，t、b、l、r 生成半圆。@r 表示整圆直径，按像素输出。",code:".example { .disc(o, 80px, #93f); }",signatures:"(o,@r,@color) / (l,@r,@color) / (r,@r,@color) / (t,@r,@color) / (b,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="disc-test">
		<div class="disc-test1">O</div>
		<div class="disc-test2">L</div>
		<div class="disc-test3">T</div>
		<div class="disc-test4">B</div>
		<div class="disc-test5">R</div>
	</div>`},{id:".circle",name:".circle",title:"空心圆",description:"o 生成整圆，t、b、l、r 生成半圆。@r 表示直径，@border 接收完整的 border 声明。",code:".example { .circle(o, 80px, 2px solid #f39); }",signatures:"(o,@r,@border) / (l,@r,@border) / (r,@r,@border) / (t,@r,@border) / (b,@r,@border)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="circle-test">
		<div class="circle-test1">O</div>
		<div class="circle-test2">L</div>
		<div class="circle-test3">T</div>
		<div class="circle-test4">B</div>
		<div class="circle-test5">R</div>
	</div>`},{id:".pie",name:".pie",title:"四分之一圆",description:"lt、rt、lb、rb 选择圆角所在方位，@r 按像素设置图形尺寸。",code:".example { .pie(lt, 80px, #f39); }",signatures:"(lt,@r,@color) / (rt,@r,@color) / (lb,@r,@color) / (rb,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="pie-test">
		<div class="pie-test1">LT</div>
		<div class="pie-test2">RT</div>
		<div class="pie-test3">LB</div>
		<div class="pie-test4">RB</div>
	</div>`},{id:".leaf",name:".leaf",title:"叶片",description:"使用 l、r、lr、rl 选择圆角组合，再指定尺寸和背景色。",code:".example { .leaf(lr, 80px, #f39); }",signatures:"(l,@r,@color) / (r,@r,@color) / (lr,@r,@color) / (rl,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="leaf-test">
		<div class="leaf-test1">L</div>
		<div class="leaf-test2">R</div>
		<div class="leaf-test3">LR</div>
		<div class="leaf-test4">RL</div>
	</div>`}],tips:["<code>npm install csslab@5.0.2</code>","<code>@import &quot;csslab/shape.less&quot;;</code>","签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。","在 Less 4 中，圆形和叶片等 mixin 的旧式除法需要 math: always，命令行对应 --math=always。"]},{version:"v5",page:"animation",title:"Animation",path:"/v5/animation.html",kind:"mixins",groups:[{title:"位移",items:[{id:".goTop",label:".goTop"},{id:".goBottom",label:".goBottom"},{id:".goLeft",label:".goLeft"},{id:".goRight",label:".goRight"}]},{title:"淡入",items:[{id:".fadeIn",label:".fadeIn"},{id:".fadeInTop",label:".fadeInTop"},{id:".fadeInBottom",label:".fadeInBottom"},{id:".fadeInLeft",label:".fadeInLeft"},{id:".fadeInRight",label:".fadeInRight"}]},{title:"淡出",items:[{id:".fadeOut",label:".fadeOut"},{id:".fadeOutTop",label:".fadeOutTop"},{id:".fadeOutBottom",label:".fadeOutBottom"},{id:".fadeOutLeft",label:".fadeOutLeft"},{id:".fadeOutRight",label:".fadeOutRight"}]},{title:"舞台",items:[{id:".lightSpeedIn",label:".lightSpeedIn"},{id:".lightSpeedOut",label:".lightSpeedOut"}]},{title:"尺寸",items:[{id:".widthTo",label:".widthTo"},{id:".heightTo",label:".heightTo"}]},{title:"缩放",items:[{id:".zoomTo",label:".zoomTo"},{id:".zoomIn",label:".zoomIn"},{id:".zoomOut",label:".zoomOut"}]},{title:"旋转",items:[{id:".rotateTo",label:".rotateTo"},{id:".rotateRound",label:".rotateRound"}]},{title:"翻转",items:[{id:".flipInX",label:".flipInX"},{id:".flipInY",label:".flipInY"},{id:".flipOutX",label:".flipOutX"},{id:".flipOutY",label:".flipOutY"}]}],sections:[{id:".goTop",name:".goTop",title:"向上移动",description:"默认从原位移动到 -100%。",code:".example { .goTop(500ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmBrK" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="wgmBrK" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmBrK/">wgmBrK</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".goBottom",name:".goBottom",title:"向下移动",description:"默认从原位移动到 100%。",code:".example { .goBottom(500ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".goLeft",name:".goLeft",title:"向左移动",description:"默认从原位移动到 -100%。",code:".example { .goLeft(500ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".goRight",name:".goRight",title:"向右移动",description:"默认从原位移动到 100%。",code:".example { .goRight(500ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeIn",name:".fadeIn",title:"淡入",description:"透明度从 0 过渡到 1。第二个参数是缓动函数。",code:".example { .fadeIn(400ms, ease-in); }",signatures:"(@time:1s,@ease:ease-out,@fillmode:backwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="OWQeja" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="Animation Test for CssLab" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/OWQeja/">Animation Test for CssLab</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".fadeInTop",name:".fadeInTop",title:"从上方淡入",description:"从上方偏移处进入原位，默认偏移 -100%。",code:".example { .fadeInTop(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInBottom",name:".fadeInBottom",title:"从下方淡入",description:"从下方偏移处进入原位，默认偏移 100%。",code:".example { .fadeInBottom(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInLeft",name:".fadeInLeft",title:"从左侧淡入",description:"从左侧偏移处进入原位，默认偏移 -100%。",code:".example { .fadeInLeft(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInRight",name:".fadeInRight",title:"从右侧淡入",description:"从右侧偏移处进入原位，默认偏移 100%。",code:".example { .fadeInRight(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeOut",name:".fadeOut",title:"淡出",description:"透明度从 1 过渡到 0。第二个参数是缓动函数。",code:".example { .fadeOut(400ms, ease-in); }",signatures:"(@time:1s,@ease:ease-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="EZQqER" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="EZQqER" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/EZQqER/">EZQqER</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".fadeOutTop",name:".fadeOutTop",title:"向上淡出",description:"离开原位并淡出，默认偏移 -100%。",code:".example { .fadeOutTop(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutBottom",name:".fadeOutBottom",title:"向下淡出",description:"离开原位并淡出，默认偏移 100%。",code:".example { .fadeOutBottom(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutLeft",name:".fadeOutLeft",title:"向左淡出",description:"离开原位并淡出，默认偏移 -100%。",code:".example { .fadeOutLeft(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutRight",name:".fadeOutRight",title:"向右淡出",description:"离开原位并淡出，默认偏移 100%。",code:".example { .fadeOutRight(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".lightSpeedIn",name:".lightSpeedIn",title:"快速入场",description:"从水平偏移处入场，带有倾斜和透明度变化。",code:".example { .lightSpeedIn(600ms, 50%); }",signatures:"(@time:1s,@offset:100%,@ease:ease-out,@fillmode:both)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="WRzbWj" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="WRzbWj" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/WRzbWj/">WRzbWj</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".lightSpeedOut",name:".lightSpeedOut",title:"快速离场",description:"水平移出，带有倾斜和透明度变化。",code:".example { .lightSpeedOut(600ms, 50%); }",signatures:"(@time:1s,@offset:100%,@ease:ease-out,@fillmode:both)",preview:""},{id:".widthTo",name:".widthTo",title:"宽度动画",description:"指定起始和结束宽度。",code:".example { .widthTo(500ms, 0, 160px); }",signatures:"(@time:1s,@from:0,@to:100%,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="NdYKZL" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="NdYKZL" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/NdYKZL/">NdYKZL</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".heightTo",name:".heightTo",title:"高度动画",description:"指定起始和结束高度。",code:".example { .heightTo(500ms, 0, 80px); }",signatures:"(@time:1s,@from:0,@to:100%,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmvZL" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="wgmvZL" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmvZL/">wgmvZL</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomTo",name:".zoomTo",title:"缩放到指定倍数",description:"指定起始和结束缩放倍数。",code:".example { .zoomTo(500ms, 1, 1.2); }",signatures:"(@time:1s,@from:1,@to:1.5,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="LxdVOV" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="zoomTo" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/LxdVOV/">zoomTo</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomIn",name:".zoomIn",title:"缩放进入",description:"从给定倍数放大到原尺寸并淡入。参数名 @sacle 沿用源码拼写。",code:".example { .zoomIn(500ms, 0.3); }",signatures:"(@time:1s,@sacle:.3,@ease:ease-in-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgROMm" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="zoomIn/zoomOut" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgROMm/">zoomIn/zoomOut</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomOut",name:".zoomOut",title:"缩放离开",description:"从原尺寸缩放到给定倍数并淡出。",code:".example { .zoomOut(500ms, 1.8); }",signatures:"(@time:1s,@sacle:1.8,@ease:ease-in-out,@fillmode:forwards)",preview:""},{id:".rotateTo",name:".rotateTo",title:"旋转到指定角度",description:"指定起始角度和结束角度。",code:".example { .rotateTo(500ms, 0deg, 90deg); }",signatures:"(@time:1s,@from:0,@to:180deg,@ease:ease-in-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="apYvdN" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="rotateTo" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/apYvdN/">rotateTo</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".rotateRound",name:".rotateRound",title:"按圈旋转",description:"第二个参数为旋转圈数。",code:".example { .rotateRound(1s, 2); }",signatures:"(@time:1s,@count:1,@ease:ease-in-out,@fillmode:forwards)",preview:""},{id:".flipInX",name:".flipInX",title:"绕 X 轴翻转进入",description:"可指定动画时长。",code:".example { .flipInX(600ms); }",signatures:"(@time:1s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgRNpR" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="flip" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgRNpR/">flip</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".flipInY",name:".flipInY",title:"绕 Y 轴翻转进入",description:"可指定动画时长。",code:".example { .flipInY(600ms); }",signatures:"(@time:1s)",preview:""},{id:".flipOutX",name:".flipOutX",title:"绕 X 轴翻转离开",description:"可指定动画时长。",code:".example { .flipOutX(600ms); }",signatures:"(@time:0.75s)",preview:""},{id:".flipOutY",name:".flipOutY",title:"绕 Y 轴翻转离开",description:"可指定动画时长。",code:".example { .flipOutY(600ms); }",signatures:"(@time:0.75s)",preview:""}],tips:["<code>npm install csslab@5.0.2</code>","<code>@import &quot;csslab/animation.less&quot;;</code>","签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。","动画调用会用 Less 内联 JavaScript 生成关键帧名称。编译时需启用 javascriptEnabled，命令行对应 --js。@time、@ease 和 @fillmode 分别表示时长、缓动和填充模式。"]},{version:"v5",page:"twinkle",title:"Twinkle",path:"/v5/twinkle.html",kind:"mixins",groups:[{title:"边框效果",items:[{id:".twinkle-border",label:".twinkle-border"},{id:".twinkle-borderTop",label:".twinkle-borderTop"},{id:".twinkle-borderBottom",label:".twinkle-borderBottom"}]},{title:"图像效果",items:[{id:".twinkle-glimpse",label:".twinkle-glimpse"}]},{title:"文字效果",items:[{id:".twinkle-textFlip",label:".twinkle-textFlip"},{id:".twinkle-textGotop",label:".twinkle-textGotop"}]}],sections:[{id:".twinkle-border",name:".twinkle-border",title:"绘制边框",description:"在父元素悬停时绘制四条边。@child 必填，传入子元素的类名，省略开头的点。",code:".example { .twinkle-border(0.6s, 2px, #fff, label); }",signatures:"(@time:0.6s,@border:2px,@color:#fff,@child)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="dNmMZY" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title=".twinkle-borderdraw" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/dNmMZY/">.twinkle-borderdraw</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-borderTop",name:".twinkle-borderTop",title:"顶部划线",description:"悬停时从顶部中央向两侧延伸。@length 是每一侧的长度。",code:".example { .twinkle-borderTop(0.2s, 2px, #0cf, 50%); }",signatures:"(@time:0.2s,@border:2px,@color:#0cf,@length:50%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmGLj" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-borderTop" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmGLj/">twinkle-borderTop</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-borderBottom",name:".twinkle-borderBottom",title:"底部划线",description:"悬停时从底部中央向两侧延伸。@length 是每一侧的长度。",code:".example { .twinkle-borderBottom(0.2s, 2px, #0cf, 50%); }",signatures:"(@time:0.2s,@border:2px,@color:#0cf,@length:50%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="VPXjLb" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-borderBottom" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/VPXjLb/">twinkle-borderBottom</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-glimpse",name:".twinkle-glimpse",title:"扫光",description:"悬停时倾斜的高光从 @from 移动到 @to。",code:".example { .twinkle-glimpse(0.5s, -100%, 100%); }",signatures:"(@time:0.5s,@from:-100%,@to:100%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="BprKQR" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-glimpse" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/BprKQR/">twinkle-glimpse</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-textFlip",name:".twinkle-textFlip",title:"翻转显示",description:"绕 Y 轴翻转文字并调整透明度。",code:".example { .twinkle-textFlip(1s); }",signatures:"(@time:1s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgRLao" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="flip" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgRLao/">flip</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-textGotop",name:".twinkle-textGotop",title:"向上切换",description:"先向上移出，再从下方移回。可在容器上设置 overflow: hidden 裁切边界。",code:".example { .twinkle-textGotop(0.2s); }",signatures:"(@time:0.2s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="QdmEvP" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="QdmEvP" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/QdmEvP/">QdmEvP</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'}],tips:["<code>npm install csslab@5.0.2</code>","<code>@import &quot;csslab/twinkle.less&quot;;</code>","签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。"]},{version:"v5",page:"reset",title:"Reset",path:"/v5/reset.html",kind:"reset",groups:[{items:[{id:"Charset",label:"Charset"},{id:"Document",label:"Document"},{id:"Sections",label:"Sections"},{id:"Embedded",label:"Embedded content"},{id:"Text",label:"Text"},{id:"Form",label:"Forms"},{id:"CSS",label:"reset.css"}]}],sections:[{id:"Charset",title:"Charset",language:"less",code:'@charset "utf-8";'},{id:"Document",title:"Document",language:"less",code:`//Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS
html{
	-webkit-overflow-scrolling:touch;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}`},{id:"Sections",title:"Sections",language:"less",code:`//Remove the margin in all browsers (opinionated).
body,
h1,h2,h3,h4,h5,h6,
hr,p,blockquote,
th,td{
	margin:0;padding:0;
}

//Add the correct display in IE 9-.
article,aside,details,figcaption,figure,footer,header,hgroup,nav,menu,section{
  display: block;
}

hr{
  box-sizing: content-box;height: 0; //Add the correct box sizing in Firefox.
  overflow: visible;	//Show the overflow in Edge and IE.
}

//Remove iframe content borders
iframe{
	border:none;
}

//Remove quote style
blockquote,q{
	quotes:none;
}

//collapse table border
table{
	border-collapse:collapse;
	border-spacing:0;
}

//Reset list style
ul,ul li{
	margin:0;
	padding:0;
	list-style:none;
}
dl,dd,dt{
  margin:0;
  padding: 0;
}`},{id:"Embedded",title:"Embedded content",language:"less",code:`//Add the correct display in IE 9-.
audio,video,canvas{
  display: inline-block;
  *display:inline;
  *zoom:1;
}

//Add the correct display in iOS 4-7.
audio:not([controls]){
  display: none;
  height: 0;
}

//Remove the border on images inside links in IE 10-.
img{
  border:none;
  -ms-interpolation-mode:bicubic;
  max-width:100%;
}

//Hide the overflow in IE.
svg:not(:root){
  overflow: hidden;
}

//Add the correct display in IE.
template{
  display: none;
}`},{id:"Text",title:"Text",language:"less",code:`a{
  background-color: transparent; //Remove the gray background on active links in IE 10
  -webkit-text-decoration-skip: objects; //Remove gaps in links underline in iOS 8+ and Safari 8+.
  text-decoration:none;	//Remove the underline effect.
}

//Remove the outline on focused links when they are also active or hovered in all browsers (opinionated).
a:active,a:hover{
  outline-width:0;
}

//Remove the h1~h6 title style
h1,h2,h3,h4,h5,h6{
	font-size:100%;font-weight:normal;
}

//Remove bold style.
b,strong{
	font-weight:normal;
}

//Remove italic style.
i,em{
	font-style:normal;
}

abbr[title]{
  border-bottom: none; //Remove the bottom border in Firefox 39-.
  text-decoration: underline;text-decoration: underline dotted; //Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
}

code,kbd,samp{
  font-family: monospace, monospace; //Correct the inheritance and scaling of font size in all browsers.
  font-size: 1em; //Correct the odd \`em\` font sizing in all browsers.
}

//Add the correct font style in Android 4.3-.
dfn{
  font-style: italic;
}

//Add the correct background and color in IE 9-.
mark{
  background-color: #ff0;
  color: #000;
}

//Add the correct font size in all browsers.
small{
  font-size: 80%;
}

//Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
sub,
sup{
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub{
  bottom: -0.25em;
}
sup{
  top: -0.5em;
}`},{id:"Form",title:"Forms",language:"less",code:`input,button,select,textarea{
  outline:none;//Remove webkit outline
	margin: 0;//Remove the margin in Firefox and Safari.
  padding: 0;//Remove the padding in different browser.
	color:inherit;
}

button{
  box-sizing:content-box; //ie6~8
  *line-height:normal;  //ie7 text position
}

select{
  padding-right:0 !important; //ie arrow
}


button[disabled],input[disabled]{
	cursor: default;
}

button,//Show the overflow in IE.
input{//Show the overflow in Edge.
  overflow: visible;
}

button,//Remove the inheritance of text transform in Edge, Firefox, and IE.
select{//Remove the inheritance of text transform in Firefox.
  text-transform: none;
}

button,
html [type="button"],//Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\` controls in Android 4.
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; //Correct the inability to style clickable types in iOS and Safari.
}

//Remove the inner border and padding in Firefox.
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

//Restore the focus styles unset by the previous rule.
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

//Change the border, margin, and padding in all browsers (opinionated).
fieldset{
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend{
  display: table;max-width: 100%;box-sizing: border-box;white-space: normal; //Correct the text wrapping in Edge and IE.
  color: inherit; //Correct the color inheritance from \`fieldset\` elements in IE.
  padding: 0; //Remove the padding so developers are not caught out when they zero out \`fieldset\` elements in all browsers.
}

progress {
  display: inline-block; //Add the correct display in IE 9-.
  vertical-align: baseline; //Add the correct vertical alignment in Chrome, Firefox, and Opera.
}

//Remove the default vertical scrollbar in IE.
textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; //Add the correct box sizing in IE 10-.
  padding: 0; //Remove the padding in IE 10-.
}

//Correct the cursor style of increment and decrement buttons in Chrome.
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; //Correct the odd appearance in Chrome and Safari.
  outline-offset: -2px; //Correct the outline style in Safari.
}

//Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; //Correct the inability to style clickable types in iOS and Safari.
  font: inherit; //Change font properties to \`inherit\` in Safari.
}


[hidden] {
  display: none;
}`},{id:"CSS",title:"reset.css",code:'@charset "utf-8";html{-webkit-overflow-scrolling:touch;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,th,td{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,nav,menu,section,summary{display:block}hr{box-sizing:content-box;height:0;overflow:visible}iframe{border:none}blockquote,q{quotes:none}table{border-collapse:collapse;border-spacing:0}ul,ul li{margin:0;padding:0;list-style:none}dl,dd,dt{margin:0;padding:0}audio,video,canvas{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none;height:0}img{border:none;-ms-interpolation-mode:bicubic;max-width:100%}svg:not(:root){overflow:hidden}template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}a:active,a:hover{outline-width:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}b,strong{font-weight:normal}i,em{font-style:normal}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}input,button,select,textarea{outline:none;margin:0;padding:0;color:inherit}button{box-sizing:content-box;*line-height:normal}select{padding-right:0 !important}button[disabled],input[disabled]{cursor:default}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{display:table;max-width:100%;box-sizing:border-box;white-space:normal;color:inherit;padding:0}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden]{display:none}',language:"css"}],tips:["此版包含文档、区块、嵌入内容、文字和表单的全局重置，并保留旧浏览器的兼容声明。","在 Less 中引入 <code>csslab/reset.less</code>，或直接加载包内的 <code>reset.css</code>。"]},{version:"v5",page:"gradient",title:"Gradient",path:"/v5/gradient.html",kind:"gradient",groups:[],sections:[],tips:[]},{version:"v6",page:"base",title:"Base",path:"/index.html",kind:"mixins",groups:[{title:"字体",items:[{id:".fz",label:".fz"},{id:".lh",label:".lh"},{id:".bold",label:".bold"},{id:".italic",label:".italic"},{id:".normal",label:".normal"},{id:".smooth",label:".smooth"},{id:".number",label:".number"},{id:".fontface",label:".fontface"},{id:".color",label:".color"},{id:".underline",label:".underline"}]},{title:"文本",items:[{id:".nobreak",label:".nobreak"},{id:".break",label:".break"},{id:".retext",label:".retext"},{id:".indent",label:".indent"}]},{title:"对齐",items:[{id:".x",label:".x"},{id:".y",label:".y"},{id:".auto",label:".auto"},{id:".z",label:".z"}]},{title:"尺寸与表现",items:[{id:".w",label:".w"},{id:".h",label:".h"},{id:".size",label:".size"},{id:".ratio",label:".ratio"},{id:".db",label:".db"},{id:".none",label:".none"},{id:".r",label:".r"}]},{title:"布局与定位",items:[{id:".flex",label:".flex"},{id:".grid",label:".grid"},{id:".gap",label:".gap"},{id:".ps",label:".ps"},{id:".pr",label:".pr"},{id:".pa",label:".pa"},{id:".pf",label:".pf"},{id:".lt",label:".lt"},{id:".rt",label:".rt"},{id:".lb",label:".lb"},{id:".rb",label:".rb"}]},{title:"交互",items:[{id:".pointer",label:".pointer"},{id:".noclick",label:".noclick"},{id:".scrollbar",label:".scrollbar"}]},{title:"旧版兼容",items:[{id:".min-width",label:".min-width"},{id:".min-height",label:".min-height"},{id:".dbi",label:".dbi"},{id:".clip",label:".clip"},{id:".fl",label:".fl"},{id:".fr",label:".fr"},{id:".clearfix",label:".clearfix"},{id:".clear",label:".clear"}]},{title:"已弃用",items:[{id:".pl",label:".pl"},{id:".pr-padding",label:".pr(@padding)"},{id:".pt",label:".pt"},{id:".pb",label:".pb"},{id:".ml",label:".ml"},{id:".mr",label:".mr"},{id:".mt",label:".mt"},{id:".mb",label:".mb"},{id:".tm",label:".tm"}]}],sections:[{id:".fz",name:".fz",title:"字号",description:"设置字号。省略行高时只输出 font-size，可使用 .lh() 单独设置高度。",code:".example { .fz(16px, 24px); }",signatures:"(@font-size, @line-height: false)",preview:""},{id:".lh",name:".lh",title:"行高",description:"设置行高。只有传入第二个参数时才输出 height。",code:".example { .lh(24px, 32px); }",signatures:"(@line-height, @height: false)",preview:""},{id:".bold",name:".bold",title:"字重",description:"默认使用 bold，也可传入数字字重。",code:".example { .bold(700); }",signatures:"(@bold:bold)",preview:""},{id:".italic",name:".italic",title:"斜体",description:"将字体设为 italic。",code:".example { .italic(); }",signatures:"()",preview:""},{id:".normal",name:".normal",title:"普通字形",description:"将字重和字形还原为 normal。",code:".example { .normal(); }",signatures:"()",preview:""},{id:".smooth",name:".smooth",title:"字体平滑",description:"输出 WebKit 和 Firefox 的字体平滑属性。",code:".example { .smooth(); }",signatures:"()",preview:""},{id:".number",name:".number",title:"等宽数字",description:"默认保留当前字体，启用等宽数字和斜线零。传 true 使用预设等宽字体，传字符串自定义字体。",code:`.example { .number(); }
.example { .number(true); }
.example { .number("Consolas, monospace"); }`,signatures:"(@font-family: false)",preview:""},{id:".fontface",name:".fontface",title:"字体声明",description:"第一个分号分隔字体名和来源列表，多个来源以逗号分隔。生成的声明使用 font-display: swap。",code:'.example { .fontface("Demo"; url("demo.woff2") format("woff2"), url("demo.woff") format("woff")); }',signatures:"(@name; @sources...)",preview:""},{id:".color",name:".color",title:"文字颜色",description:"传纯色可加第二个纯色作为悬停颜色。传渐变时用背景裁剪填充文字。",code:`.example { .color(#333, #f60); }
.example { .color(linear-gradient(90deg, #f60, #09f)); }`,signatures:"(@color, @hovercolor: null)",preview:""},{id:".underline",name:".underline",title:"下划线",description:"默认使用当前文字颜色、实线和 3px 偏移。可单传颜色，或依次指定偏移、线型和颜色。",code:`.example { .underline(); }
.example { .underline(#f60); }
.example { .underline(4px, dotted, currentColor); }`,signatures:"() / (@color) / (@offset, @style, @color)",preview:""},{id:".nobreak",name:".nobreak",title:"单行溢出",description:"禁止折行并隐藏溢出。默认显示省略号，传 clip 可直接截断。",code:`.example { .nobreak(); }
.example { .nobreak(clip); }`,signatures:"(@style:ellipsis)",preview:""},{id:".break",name:".break",title:"折行与多行截断",description:"默认允许文本折行。传行数时使用 -webkit-line-clamp 截断，第二个参数为 true 时使用 -webkit-inline-box。",code:`.example { .break(); }
.example { .break(3); }
.example { .break(2, true); }`,signatures:"(@lines: auto, @inline: false)",preview:""},{id:".retext",name:".retext",title:"书写方向",description:"x 为从右向左的水平排版，y 为从右向左的竖排。",code:`.example { .retext(x); }
.example { .retext(y); }`,signatures:"(x) / (y)",preview:""},{id:".indent",name:".indent",title:"文本缩进",description:"默认缩进 -200% 并隐藏溢出，可传入其他缩进值。",code:".example { .indent(2em); }",signatures:"(@indent:-200%)",preview:""},{id:".x",name:".x",title:"水平文本对齐",description:"设置 text-align，默认居中。",code:".example { .x(left); }",signatures:"(@align:center)",preview:""},{id:".y",name:".y",title:"行内垂直对齐",description:"设置 vertical-align，默认 middle。",code:".example { .y(top); }",signatures:"(@align:middle)",preview:""},{id:".auto",name:".auto",title:"容器对齐",description:"x 将左右外边距设为 auto，y 使用 table-cell 和 vertical-align: middle。",code:`.example { .auto(x); }
.example { .auto(y); }`,signatures:"(x) / (y)",preview:""},{id:".z",name:".z",title:"层叠顺序",description:"设置 z-index，默认 1。",code:".example { .z(10); }",signatures:"(@index:1)",preview:""},{id:".w",name:".w",title:"宽度",description:"设置 width。",code:".example { .w(20rem); }",signatures:"(@width)",preview:""},{id:".h",name:".h",title:"高度",description:"设置 height。",code:".example { .h(4rem); }",signatures:"(@height)",preview:""},{id:".size",name:".size",title:"宽高",description:"省略第二个参数时，高度与宽度相同。",code:`.example { .size(32px); }
.example { .size(160px, 90px); }`,signatures:"(@width,@height:@width)",preview:""},{id:".ratio",name:".ratio",title:"宽高比",description:"将比例传给 aspect-ratio。可用 Less 转义字符串保留斜杠。",code:'.example { .ratio(~"16 / 9"); }',signatures:"(@ratio)",preview:""},{id:".db",name:".db",title:"块级显示",description:"设置 display: block。",code:".example { .db(); }",signatures:"()",preview:""},{id:".none",name:".none",title:"隐藏",description:"设置 display: none。",code:".example { .none(); }",signatures:"()",preview:""},{id:".r",name:".r",title:"圆角",description:"设置 border-radius。",code:".example { .r(6px); }",signatures:"(@radius)",preview:""},{id:".flex",name:".flex",title:"弹性布局",description:"无参开启 Flex。x 在主轴居中，y 在交叉轴居中，o 同时居中。",code:`.example { .flex(); }
.example { .flex(x); }
.example { .flex(y); }
.example { .flex(o); }`,signatures:"() / (x) / (y) / (o)",preview:""},{id:".grid",name:".grid",title:"网格布局",description:"无参开启 Grid。传行数和列数时，两轴分别生成等分轨道。 .grid(x, 3) 使用 minmax(0, 1fr) 固定三列，.grid(x, 240px) 用 auto-fill 按最小列宽自动排布。 x 重载也会命中通用重载，生成的 grid-template-rows: repeat(x, 1fr) 会被浏览器忽略。",code:`.example { .grid(); }
.example { .grid(2, 3); }
.example { .grid(x, 3); }
.example { .grid(x, 240px); }`,signatures:"() / (@rows, @cols) / (x, @count)",preview:""},{id:".gap",name:".gap",title:"布局间距",description:"浏览器支持 gap 声明时使用原生间距，否则对除最后一项外的直接子元素加右外边距。回退仅覆盖横向排列，特性检测也无法区分浏览器是否支持 Flex gap。",code:".example { .gap(12px); }",signatures:"(@value)",preview:""},{id:".ps",name:".ps",title:"静态定位",description:"设置 position: static。",code:".example { .ps(); }",signatures:"()",preview:""},{id:".pr",name:".pr",title:"相对定位",description:"设置 position: relative。",code:".example { .pr(); }",signatures:"()",preview:""},{id:".pa",name:".pa",title:"绝对定位",description:"设置 position: absolute。",code:".example { .pa(); }",signatures:"()",preview:""},{id:".pf",name:".pf",title:"固定定位",description:"设置 position: fixed。",code:".example { .pf(); }",signatures:"()",preview:""},{id:".lt",name:".lt",title:"左上定位",description:"依次设置 left、top。省略第二个参数时复用第一个值。",code:".example { .lt(8px, 12px); }",signatures:"(@l,@t:@l)",preview:""},{id:".rt",name:".rt",title:"右上定位",description:"依次设置 right、top。省略第二个参数时复用第一个值。",code:".example { .rt(8px); }",signatures:"(@r,@t:@r)",preview:""},{id:".lb",name:".lb",title:"左下定位",description:"依次设置 left、bottom。省略第二个参数时复用第一个值。",code:".example { .lb(8px); }",signatures:"(@l,@b:@l)",preview:""},{id:".rb",name:".rb",title:"右下定位",description:"依次设置 right、bottom。省略第二个参数时复用第一个值。",code:".example { .rb(8px); }",signatures:"(@r,@b:@r)",preview:""},{id:".pointer",name:".pointer",title:"手形指针",description:"设置 cursor: pointer。",code:".example { .pointer(); }",signatures:"()",preview:""},{id:".noclick",name:".noclick",title:"指针事件",description:"设置 pointer-events: none，元素本身不再是指针事件的目标。",code:".example { .noclick(); }",signatures:"()",preview:""},{id:".scrollbar",name:".scrollbar",title:"滚动条",description:"依次设置 WebKit 滚动条的宽度、轨道颜色和滑块颜色。",code:".example { .scrollbar(6px, #fafafa, #bbb); }",signatures:"(@w:4px,@color:#fafafa,@thumb:#eee)",preview:""},{id:".min-width",name:".min-width",title:"最小宽度",description:"输出 min-width 和 IE6 使用的 _width 写法。",code:".example { .min-width(240px); }",signatures:"(@min-width)",preview:""},{id:".min-height",name:".min-height",title:"最小高度",description:"输出 min-height 和 IE6 使用的 _height 写法。",code:".example { .min-height(48px); }",signatures:"(@min-height)",preview:""},{id:".dbi",name:".dbi",title:"行内块",description:"设置 display: inline-block。",code:".example { .dbi(); }",signatures:"()",preview:""},{id:".clip",name:".clip",title:"裁切溢出",description:"设置 overflow: hidden。",code:".example { .clip(); }",signatures:"()",preview:""},{id:".fl",name:".fl",title:"左浮动",description:"设置 float: left。",code:".example { .fl(); }",signatures:"()",preview:""},{id:".fr",name:".fr",title:"右浮动",description:"设置 float: right。",code:".example { .fr(); }",signatures:"()",preview:""},{id:".clearfix",name:".clearfix",title:"清除浮动塌陷",description:"通过 ::after 伪元素清除两侧浮动。",code:".example { .clearfix(); }",signatures:"()",preview:""},{id:".clear",name:".clear",title:"清除浮动",description:"设置 clear，默认 both。",code:".example { .clear(left); }",signatures:"(@clear:both)",preview:""},{id:".pl",name:".pl",title:"左内边距",description:"设置 padding-left。",code:".example { .pl(8px); }",signatures:"(@padding)",preview:""},{id:".pr-padding",name:".pr",title:"右内边距",description:"设置 padding-right。",code:".example { .pr(8px); }",signatures:"(@padding)",preview:""},{id:".pt",name:".pt",title:"上内边距",description:"设置 padding-top。",code:".example { .pt(8px); }",signatures:"(@padding)",preview:""},{id:".pb",name:".pb",title:"下内边距",description:"设置 padding-bottom。",code:".example { .pb(8px); }",signatures:"(@padding)",preview:""},{id:".ml",name:".ml",title:"左外边距",description:"设置 margin-left。",code:".example { .ml(8px); }",signatures:"(@margin)",preview:""},{id:".mr",name:".mr",title:"右外边距",description:"设置 margin-right。",code:".example { .mr(8px); }",signatures:"(@margin)",preview:""},{id:".mt",name:".mt",title:"上外边距",description:"设置 margin-top。",code:".example { .mt(8px); }",signatures:"(@margin)",preview:""},{id:".mb",name:".mb",title:"下外边距",description:"设置 margin-bottom。",code:".example { .mb(8px); }",signatures:"(@margin)",preview:""},{id:".tm",name:".tm",title:"透明度",description:"传入 0 到 1 的数值设置 opacity，同时输出旧 IE 的 alpha 滤镜。",code:".example { .tm(0.5); }",signatures:"(@tm)",preview:""}],tips:[]},{version:"v6",page:"shape",title:"Shape",path:"/shape.html",kind:"mixins",groups:[{title:"箭头",items:[{id:".arrow",label:".arrow"},{id:".arrows",label:".arrows"},{id:".arrowtg",label:".arrowtg"},{id:".arrowstg",label:".arrowstg"},{id:".tg",label:".tg"}]},{title:"圆形",items:[{id:".disc",label:".disc"},{id:".circle",label:".circle"},{id:".pie",label:".pie"},{id:".leaf",label:".leaf"}]}],sections:[{id:".arrow",name:".arrow",title:"箭头",description:"t、b、l、r 分别表示上、下、左、右。请先给容器设置 position: relative。偏移默认 50%，横向从左、纵向从上计算。",code:`.example { position: relative; .arrow(l, 10px, #333); }
.example { position: relative; .arrow(t, 10px, #333, 80%); }`,signatures:"(t,@width,@color,@x:50%) / (b,@width,@color,@x:50%) / (l,@width,@color,@y:50%) / (r,@width,@color,@y:50%)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(l,10px,#333);</div>
	<p>&#x9700;&#x8981;&#x6307;&#x5B9A;&#x504F;&#x79FB;&#x4F4D;&#x7F6E;&#x65F6;&#xFF1A;</p>
	<pre><code class="less">
		.test{.pr;.arrow(t,10px,#333,80%);}
	</code></pre>
	<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test2">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(t,10px,#333,80%);</div>
	<p>&#x989C;&#x8272;&#x53EF;&#x4EE5;&#x4F20;&#x5165;&#x534A;&#x900F;&#x660E;&#xFF1A;</p>
	<pre><code class="less">
		.test{.pr;.arrow(r,10px,rgba(0,0,0,0.5));}
	</code></pre>
	<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test3">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrow(r,10px,rgba(0,0,0,0.5));</div>`},{id:".arrows",name:".arrows",title:"带边框的箭头",description:"t、b、l、r 分别表示上、下、左、右。请先给容器设置 position: relative。偏移默认 50%，横向从左、纵向从上计算。依次传入箭头宽度、填充色、边框宽度和边框颜色。容器的背景和边框需自行设置。",code:".example { position: relative; .arrows(b, 10px, #74e2fe, 1px, #09f); }",signatures:"(t,@width,@color,@bo-width,@bo-color,@x:50%) / (b,@width,@color,@bo-width,@bo-color,@x:50%) / (l,@width,@color,@bo-width,@bo-color,@y:50%) / (r,@width,@color,@bo-width,@bo-color,@y:50%)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="arrow-test4">&#x6B22;&#x8FCE;&#x6F14;&#x793A;.arrows(b,10px,#74e2fe,1px,#09f);</div>`},{id:".arrowtg",name:".arrowtg",title:"调整箭头位置",description:"用于 .arrow()。上下箭头用 x，左右箭头用 y。",code:".example { .arrowtg(x, 20%); }",signatures:"(x,@x:50%) / (y,@y:50%)",preview:""},{id:".arrowstg",name:".arrowstg",title:"调整带边框箭头的位置",description:"用于 .arrows()。上下箭头用 x，左右箭头用 y。",code:".example { .arrowstg(y, 20%); }",signatures:"(x,@x:50%) / (y,@y:50%)",preview:""},{id:".tg",name:".tg",title:"三角形",description:"t、b、l、r 分别表示上、下、左、右。lt、rt、lb、rb 对应四角。上下左右方向的第四个参数传 1 可生成等边三角形。",code:`.example { .tg(t, 20px, #f39); }
.example { .tg(t, 20px, #f39, 1); }
.example { .tg(lt, 20px, #f39); }`,signatures:"(...) / (t,@width,@color,@equilateral:0) / (b,@width,@color,@equilateral:0) / (l,@width,@color,@equilateral:0) / (r,@width,@color,@equilateral:0) / (lt,@width,@color) / (rt,@width,@color) / (lb,@width,@color) / (rb,@width,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="tg-test">
		<div class="tg-test1">L</div>
		<div class="tg-test2">T</div>
		<div class="tg-test3">B</div>
		<div class="tg-test4">R</div>
		<div class="tg-test5">LT</div>
		<div class="tg-test6">RT</div>
		<div class="tg-test7">LB</div>
		<div class="tg-test8">RB</div>
	</div>`},{id:".disc",name:".disc",title:"实心圆",description:"o 生成整圆，t、b、l、r 生成半圆。@r 表示整圆直径，按像素输出。",code:".example { .disc(o, 80px, #93f); }",signatures:"(o,@r,@color) / (l,@r,@color) / (r,@r,@color) / (t,@r,@color) / (b,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="disc-test">
		<div class="disc-test1">O</div>
		<div class="disc-test2">L</div>
		<div class="disc-test3">T</div>
		<div class="disc-test4">B</div>
		<div class="disc-test5">R</div>
	</div>`},{id:".circle",name:".circle",title:"空心圆",description:"o 生成整圆，t、b、l、r 生成半圆。@r 表示直径，@border 接收完整的 border 声明。",code:".example { .circle(o, 80px, 2px solid #f39); }",signatures:"(o,@r,@border) / (l,@r,@border) / (r,@r,@border) / (t,@r,@border) / (b,@r,@border)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="circle-test">
		<div class="circle-test1">O</div>
		<div class="circle-test2">L</div>
		<div class="circle-test3">T</div>
		<div class="circle-test4">B</div>
		<div class="circle-test5">R</div>
	</div>`},{id:".pie",name:".pie",title:"四分之一圆",description:"lt、rt、lb、rb 选择圆角所在方位，@r 按像素设置图形尺寸。",code:".example { .pie(lt, 80px, #f39); }",signatures:"(lt,@r,@color) / (rt,@r,@color) / (lb,@r,@color) / (rb,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="pie-test">
		<div class="pie-test1">LT</div>
		<div class="pie-test2">RT</div>
		<div class="pie-test3">LB</div>
		<div class="pie-test4">RB</div>
	</div>`},{id:".leaf",name:".leaf",title:"叶片",description:"使用 l、r、lr、rl 选择圆角组合，再指定尺寸和背景色。",code:".example { .leaf(lr, 80px, #f39); }",signatures:"(l,@r,@color) / (r,@r,@color) / (lr,@r,@color) / (rl,@r,@color)",preview:`<h4>&#x6548;&#x679C;&#x9884;&#x89C8;&#xFF1A;</h4>
	<div class="leaf-test">
		<div class="leaf-test1">L</div>
		<div class="leaf-test2">R</div>
		<div class="leaf-test3">LR</div>
		<div class="leaf-test4">RL</div>
	</div>`}],tips:["在 Less 4 中，圆形和叶片等 mixin 的旧式除法需要 math: always，命令行对应 --math=always。"]},{version:"v6",page:"animation",title:"Animation",path:"/animation.html",kind:"mixins",groups:[{title:"位移",items:[{id:".goTop",label:".goTop"},{id:".goBottom",label:".goBottom"},{id:".goLeft",label:".goLeft"},{id:".goRight",label:".goRight"}]},{title:"淡入",items:[{id:".fadeIn",label:".fadeIn"},{id:".fadeInTop",label:".fadeInTop"},{id:".fadeInBottom",label:".fadeInBottom"},{id:".fadeInLeft",label:".fadeInLeft"},{id:".fadeInRight",label:".fadeInRight"}]},{title:"淡出",items:[{id:".fadeOut",label:".fadeOut"},{id:".fadeOutTop",label:".fadeOutTop"},{id:".fadeOutBottom",label:".fadeOutBottom"},{id:".fadeOutLeft",label:".fadeOutLeft"},{id:".fadeOutRight",label:".fadeOutRight"}]},{title:"舞台",items:[{id:".lightSpeedIn",label:".lightSpeedIn"},{id:".lightSpeedOut",label:".lightSpeedOut"}]},{title:"尺寸",items:[{id:".widthTo",label:".widthTo"},{id:".heightTo",label:".heightTo"}]},{title:"缩放",items:[{id:".zoomTo",label:".zoomTo"},{id:".zoomIn",label:".zoomIn"},{id:".zoomOut",label:".zoomOut"}]},{title:"旋转",items:[{id:".rotateTo",label:".rotateTo"},{id:".rotateRound",label:".rotateRound"}]},{title:"翻转",items:[{id:".flipInX",label:".flipInX"},{id:".flipInY",label:".flipInY"},{id:".flipOutX",label:".flipOutX"},{id:".flipOutY",label:".flipOutY"}]}],sections:[{id:".goTop",name:".goTop",title:"向上移动",description:"默认从原位移动到 -100%。",code:".example { .goTop(500ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmBrK" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="wgmBrK" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmBrK/">wgmBrK</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".goBottom",name:".goBottom",title:"向下移动",description:"默认从原位移动到 100%。",code:".example { .goBottom(500ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".goLeft",name:".goLeft",title:"向左移动",description:"默认从原位移动到 -100%。",code:".example { .goLeft(500ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".goRight",name:".goRight",title:"向右移动",description:"默认从原位移动到 100%。",code:".example { .goRight(500ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeIn",name:".fadeIn",title:"淡入",description:"透明度从 0 过渡到 1。第二个参数是缓动函数。",code:".example { .fadeIn(400ms, ease-in); }",signatures:"(@time:1s,@ease:ease-out,@fillmode:backwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="OWQeja" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="Animation Test for CssLab" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/OWQeja/">Animation Test for CssLab</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".fadeInTop",name:".fadeInTop",title:"从上方淡入",description:"从上方偏移处进入原位，默认偏移 -100%。",code:".example { .fadeInTop(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInBottom",name:".fadeInBottom",title:"从下方淡入",description:"从下方偏移处进入原位，默认偏移 100%。",code:".example { .fadeInBottom(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInLeft",name:".fadeInLeft",title:"从左侧淡入",description:"从左侧偏移处进入原位，默认偏移 -100%。",code:".example { .fadeInLeft(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeInRight",name:".fadeInRight",title:"从右侧淡入",description:"从右侧偏移处进入原位，默认偏移 100%。",code:".example { .fadeInRight(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:backwards)",preview:""},{id:".fadeOut",name:".fadeOut",title:"淡出",description:"透明度从 1 过渡到 0。第二个参数是缓动函数。",code:".example { .fadeOut(400ms, ease-in); }",signatures:"(@time:1s,@ease:ease-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="EZQqER" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="EZQqER" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/EZQqER/">EZQqER</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".fadeOutTop",name:".fadeOutTop",title:"向上淡出",description:"离开原位并淡出，默认偏移 -100%。",code:".example { .fadeOutTop(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutBottom",name:".fadeOutBottom",title:"向下淡出",description:"离开原位并淡出，默认偏移 100%。",code:".example { .fadeOutBottom(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutLeft",name:".fadeOutLeft",title:"向左淡出",description:"离开原位并淡出，默认偏移 -100%。",code:".example { .fadeOutLeft(400ms, -20px); }",signatures:"(@time:1s,@position:-100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".fadeOutRight",name:".fadeOutRight",title:"向右淡出",description:"离开原位并淡出，默认偏移 100%。",code:".example { .fadeOutRight(400ms, 20px); }",signatures:"(@time:1s,@position:100%,@ease:ease-out,@fillmode:forwards)",preview:""},{id:".lightSpeedIn",name:".lightSpeedIn",title:"快速入场",description:"从水平偏移处入场，带有倾斜和透明度变化。",code:".example { .lightSpeedIn(600ms, 50%); }",signatures:"(@time:1s,@offset:100%,@ease:ease-out,@fillmode:both)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="WRzbWj" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="WRzbWj" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/WRzbWj/">WRzbWj</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".lightSpeedOut",name:".lightSpeedOut",title:"快速离场",description:"水平移出，带有倾斜和透明度变化。",code:".example { .lightSpeedOut(600ms, 50%); }",signatures:"(@time:1s,@offset:100%,@ease:ease-out,@fillmode:both)",preview:""},{id:".widthTo",name:".widthTo",title:"宽度动画",description:"指定起始和结束宽度。",code:".example { .widthTo(500ms, 0, 160px); }",signatures:"(@time:1s,@from:0,@to:100%,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="NdYKZL" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="NdYKZL" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/NdYKZL/">NdYKZL</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".heightTo",name:".heightTo",title:"高度动画",description:"指定起始和结束高度。",code:".example { .heightTo(500ms, 0, 80px); }",signatures:"(@time:1s,@from:0,@to:100%,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmvZL" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="wgmvZL" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmvZL/">wgmvZL</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomTo",name:".zoomTo",title:"缩放到指定倍数",description:"指定起始和结束缩放倍数。",code:".example { .zoomTo(500ms, 1, 1.2); }",signatures:"(@time:1s,@from:1,@to:1.5,@ease:ease,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="LxdVOV" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="zoomTo" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/LxdVOV/">zoomTo</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomIn",name:".zoomIn",title:"缩放进入",description:"从给定倍数放大到原尺寸并淡入。参数名 @sacle 沿用源码拼写。",code:".example { .zoomIn(500ms, 0.3); }",signatures:"(@time:1s,@sacle:.3,@ease:ease-in-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgROMm" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="zoomIn/zoomOut" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgROMm/">zoomIn/zoomOut</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".zoomOut",name:".zoomOut",title:"缩放离开",description:"从原尺寸缩放到给定倍数并淡出。",code:".example { .zoomOut(500ms, 1.8); }",signatures:"(@time:1s,@sacle:1.8,@ease:ease-in-out,@fillmode:forwards)",preview:""},{id:".rotateTo",name:".rotateTo",title:"旋转到指定角度",description:"指定起始角度和结束角度。",code:".example { .rotateTo(500ms, 0deg, 90deg); }",signatures:"(@time:1s,@from:0,@to:180deg,@ease:ease-in-out,@fillmode:forwards)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="apYvdN" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="rotateTo" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/apYvdN/">rotateTo</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".rotateRound",name:".rotateRound",title:"按圈旋转",description:"第二个参数为旋转圈数。",code:".example { .rotateRound(1s, 2); }",signatures:"(@time:1s,@count:1,@ease:ease-in-out,@fillmode:forwards)",preview:""},{id:".flipInX",name:".flipInX",title:"绕 X 轴翻转进入",description:"可指定动画时长。",code:".example { .flipInX(600ms); }",signatures:"(@time:1s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgRNpR" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="flip" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgRNpR/">flip</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".flipInY",name:".flipInY",title:"绕 Y 轴翻转进入",description:"可指定动画时长。",code:".example { .flipInY(600ms); }",signatures:"(@time:1s)",preview:""},{id:".flipOutX",name:".flipOutX",title:"绕 X 轴翻转离开",description:"可指定动画时长。",code:".example { .flipOutX(600ms); }",signatures:"(@time:0.75s)",preview:""},{id:".flipOutY",name:".flipOutY",title:"绕 Y 轴翻转离开",description:"可指定动画时长。",code:".example { .flipOutY(600ms); }",signatures:"(@time:0.75s)",preview:""}],tips:["动画调用会用 Less 内联 JavaScript 生成关键帧名称。编译时需启用 javascriptEnabled，命令行对应 --js。@time、@ease 和 @fillmode 分别表示时长、缓动和填充模式。"]},{version:"v6",page:"twinkle",title:"Twinkle",path:"/twinkle.html",kind:"mixins",groups:[{title:"边框效果",items:[{id:".twinkle-border",label:".twinkle-border"},{id:".twinkle-borderTop",label:".twinkle-borderTop"},{id:".twinkle-borderBottom",label:".twinkle-borderBottom"}]},{title:"图像效果",items:[{id:".twinkle-glimpse",label:".twinkle-glimpse"}]},{title:"文字效果",items:[{id:".twinkle-textFlip",label:".twinkle-textFlip"},{id:".twinkle-textGotop",label:".twinkle-textGotop"}]}],sections:[{id:".twinkle-border",name:".twinkle-border",title:"绘制边框",description:"在父元素悬停时绘制四条边。@child 必填，传入子元素的类名，省略开头的点。",code:".example { .twinkle-border(0.6s, 2px, #fff, label); }",signatures:"(@time:0.6s,@border:2px,@color:#fff,@child)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="dNmMZY" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title=".twinkle-borderdraw" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/dNmMZY/">.twinkle-borderdraw</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-borderTop",name:".twinkle-borderTop",title:"顶部划线",description:"悬停时从顶部中央向两侧延伸。@length 是每一侧的长度。",code:".example { .twinkle-borderTop(0.2s, 2px, #0cf, 50%); }",signatures:"(@time:0.2s,@border:2px,@color:#0cf,@length:50%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="wgmGLj" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-borderTop" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/wgmGLj/">twinkle-borderTop</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-borderBottom",name:".twinkle-borderBottom",title:"底部划线",description:"悬停时从底部中央向两侧延伸。@length 是每一侧的长度。",code:".example { .twinkle-borderBottom(0.2s, 2px, #0cf, 50%); }",signatures:"(@time:0.2s,@border:2px,@color:#0cf,@length:50%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="VPXjLb" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-borderBottom" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/VPXjLb/">twinkle-borderBottom</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-glimpse",name:".twinkle-glimpse",title:"扫光",description:"悬停时倾斜的高光从 @from 移动到 @to。",code:".example { .twinkle-glimpse(0.5s, -100%, 100%); }",signatures:"(@time:0.5s,@from:-100%,@to:100%)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="BprKQR" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="twinkle-glimpse" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/BprKQR/">twinkle-glimpse</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-textFlip",name:".twinkle-textFlip",title:"翻转显示",description:"绕 Y 轴翻转文字并调整透明度。",code:".example { .twinkle-textFlip(1s); }",signatures:"(@time:1s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="vgRLao" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="flip" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/vgRLao/">flip</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'},{id:".twinkle-textGotop",name:".twinkle-textGotop",title:"向上切换",description:"先向上移出，再从下方移回。可在容器上设置 overflow: hidden 裁切边界。",code:".example { .twinkle-textGotop(0.2s); }",signatures:"(@time:0.2s)",preview:'<p data-height="265" data-theme-id="0" data-slug-hash="QdmEvP" data-default-tab="css,result" data-user="iRuxu" data-embed-version="2" data-pen-title="QdmEvP" class="codepen">See the Pen <a href="https://codepen.io/iRuxu/pen/QdmEvP/">QdmEvP</a> by iRuxu (<a href="https://codepen.io/iRuxu">@iRuxu</a>) on <a href="https://codepen.io">CodePen</a>.</p>'}],tips:[]},{version:"v6",page:"reset",title:"Reset",path:"/reset.html",kind:"reset",groups:[{items:[{id:"Charset",label:"Charset"},{id:"Document",label:"Document"},{id:"Sections",label:"Sections"},{id:"Embedded",label:"Embedded content"},{id:"Text",label:"Text"},{id:"Form",label:"Forms"},{id:"CSS",label:"reset.css"}]}],sections:[{id:"Charset",title:"Charset",language:"less",code:'@charset "utf-8";'},{id:"Document",title:"Document",language:"less",code:`//Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS
html {
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
}

body {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
}

* {
    outline: none;
}`},{id:"Sections",title:"Sections",language:"less",code:`//Remove the margin in all browsers (opinionated).
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
th,
td {
    margin: 0;
    padding: 0;
}

//Add the correct display in IE 9-.
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
menu,
section {
    display: block;
}

hr {
    box-sizing: content-box;
    height: 0; //Add the correct box sizing in Firefox.
    overflow: visible; //Show the overflow in Edge and IE.
}

//Remove iframe content borders
iframe {
    border: none;
}

//Remove quote style
blockquote,
q {
    quotes: none;
}

//collapse table border
table {
    border-collapse: collapse;
    border-spacing: 0;
}

//Reset list style
ul,
ul li {
    margin: 0;
    padding: 0;
    list-style: none;
}
dl,
dd,
dt {
    margin: 0;
    padding: 0;
}`},{id:"Embedded",title:"Embedded content",language:"less",code:`//Add the correct display in IE 9-.
audio,
video,
canvas {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}

//Add the correct display in iOS 4-7.
audio:not([controls]) {
    display: none;
    height: 0;
}

//Remove the border on images inside links in IE 10-.
img {
    border: none;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
}

//Hide the overflow in IE.
svg:not(:root) {
    overflow: hidden;
}

//Add the correct display in IE.
template {
    display: none;
}`},{id:"Text",title:"Text",language:"less",code:`a {
    background-color: transparent; //Remove the gray background on active links in IE 10
    -webkit-text-decoration-skip: objects; //Remove gaps in links underline in iOS 8+ and Safari 8+.
    text-decoration: none; //Remove the underline effect.
}

//Remove the outline on focused links when they are also active or hovered in all browsers (opinionated).
a:active,
a:hover {
    outline-width: 0;
}

//Remove the h1~h6 title style
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: normal;
}

//Remove bold style.
b,
strong {
    font-weight: normal;
}

//Remove italic style.
i,
em {
    font-style: normal;
}

abbr[title] {
    border-bottom: none; //Remove the bottom border in Firefox 39-.
    text-decoration: underline;
    text-decoration: underline dotted; //Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
}

code,
kbd,
samp {
    font-family: monospace, monospace; //Correct the inheritance and scaling of font size in all browsers.
    font-size: 1em; //Correct the odd \`em\` font sizing in all browsers.
}

//Add the correct font style in Android 4.3-.
dfn {
    font-style: italic;
}

//Add the correct background and color in IE 9-.
mark {
    background-color: #ff0;
    color: #000;
}

//Add the correct font size in all browsers.
small {
    font-size: 80%;
}

//Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
sub {
    bottom: -0.25em;
}
sup {
    top: -0.5em;
}`},{id:"Form",title:"Forms",language:"less",code:`input,
button,
select,
textarea {
    outline: none; //Remove webkit outline
    margin: 0; //Remove the margin in Firefox and Safari.
    padding: 0; //Remove the padding in different browser.
    color: inherit;
}

button {
    box-sizing: content-box; //ie6~8
    *line-height: normal; //ie7 text position
}

select {
    padding-right: 0 !important; //ie arrow
}

button[disabled],
input[disabled] {
    cursor: default;
}

button,//Show the overflow in IE.
input {
    //Show the overflow in Edge.
    overflow: visible;
}

button,//Remove the inheritance of text transform in Edge, Firefox, and IE.
select {
    //Remove the inheritance of text transform in Firefox.
    text-transform: none;
}

button,
html [type="button"],//Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\` controls in Android 4.
[type="reset"],
[type="submit"] {
    -webkit-appearance: button; //Correct the inability to style clickable types in iOS and Safari.
}

//Remove the inner border and padding in Firefox.
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

//Restore the focus styles unset by the previous rule.
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

//Change the border, margin, and padding in all browsers (opinionated).
fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    display: table;
    max-width: 100%;
    box-sizing: border-box;
    white-space: normal; //Correct the text wrapping in Edge and IE.
    color: inherit; //Correct the color inheritance from \`fieldset\` elements in IE.
    padding: 0; //Remove the padding so developers are not caught out when they zero out \`fieldset\` elements in all browsers.
}

progress {
    display: inline-block; //Add the correct display in IE 9-.
    vertical-align: baseline; //Add the correct vertical alignment in Chrome, Firefox, and Opera.
}

//Remove the default vertical scrollbar in IE.
textarea {
    overflow: auto;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box; //Add the correct box sizing in IE 10-.
    padding: 0; //Remove the padding in IE 10-.
}

//Correct the cursor style of increment and decrement buttons in Chrome.
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield; //Correct the odd appearance in Chrome and Safari.
    outline-offset: -2px; //Correct the outline style in Safari.
}

//Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button; //Correct the inability to style clickable types in iOS and Safari.
    font: inherit; //Change font properties to \`inherit\` in Safari.
}

[hidden] {
    display: none;
}`},{id:"CSS",title:"reset.css",code:`@charset "utf-8";
/*
 * Reset.less
 * Author: iRuxu
 * Creat: 2014/08
 * Update: 2026/1/2
 * Description: reset browser style
 * Manual: http://csslab.cc
 * Reference: github.com/necolas/normalize.css
 */
/*-------------------------------------
├   Document                           ┆
└------------------------------------*/
html {
  -webkit-overflow-scrolling: touch;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}
body {
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
}
* {
  outline: none;
}
/*-------------------------------------
├   Sections                           ┆
└------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
menu,
section {
  display: block;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
iframe {
  border: none;
}
blockquote,
q {
  quotes: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
ul,
ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
dl,
dd,
dt {
  margin: 0;
  padding: 0;
}
/*-------------------------------------
├   Embedded content                   ┆
└------------------------------------*/
audio,
video,
canvas {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
img {
  border: none;
  -ms-interpolation-mode: bicubic;
  max-width: 100%;
}
svg:not(:root) {
  overflow: hidden;
}
template {
  display: none;
}
/*-------------------------------------
├   Text                           	   ┆
└------------------------------------*/
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
}
a:active,
a:hover {
  outline-width: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
b,
strong {
  font-weight: normal;
}
i,
em {
  font-style: normal;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
dfn {
  font-style: italic;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*-------------------------------------
├   Forms                  			   ┆
└------------------------------------*/
input,
button,
select,
textarea {
  outline: none;
  margin: 0;
  padding: 0;
  color: inherit;
}
button {
  box-sizing: content-box;
  *line-height: normal;
}
select {
  padding-right: 0 !important;
}
button[disabled],
input[disabled] {
  cursor: default;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  display: table;
  max-width: 100%;
  box-sizing: border-box;
  white-space: normal;
  color: inherit;
  padding: 0;
}
progress {
  display: inline-block;
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}`,language:"css"}],tips:["此版为 body 增加系统字体栈，应用全局 outline 重置，并在表单规则中为 Firefox 的按钮恢复焦点样式。","在 Less 中引入 <code>csslab/reset.less</code>，或直接加载包内的 <code>reset.css</code>。"]},{version:"v6",page:"gradient",title:"Gradient",path:"/gradient.html",kind:"gradient",groups:[],sections:[],tips:[]},{version:"v6",page:"usage",title:"Usage",path:"/usage.html",kind:"usage",groups:[{items:[{id:"install",label:"安装依赖"},{id:"imports",label:"引入函数库"},{id:"vite",label:"Vite 全局注入"},{id:"component",label:"在 Vue 组件中使用"},{id:"parameters",label:"阅读参数与示例"},{id:"reset",label:"引入全局重置样式"}]}],sections:[{id:"install",title:"安装依赖",content:["在已有的 Vue 3 + Vite 项目中安装 CssLab 和 Less 编译器。以下示例对应当前 v6 文档版本。",{language:"bash",code:`npm install csslab@6.0.6
npm install -D less@^4`}]},{id:"imports",title:"引入函数库",content:["在 Less 文件中按需引入对应的函数库。基础方法使用 base.less，图形、动画和悬停效果分别使用其他模块。",{language:"less",code:`@import "csslab/base.less";      // 基础方法
@import "csslab/shape.less";     // CSS 图形
@import "csslab/animation.less"; // 基础动画
@import "csslab/twinkle.less";   // 扩展动画`},"在 Vite 项目中，可使用下方的 additionalData 配置统一注入需要的函数库。"]},{id:"vite",title:"Vite 全局注入",content:["在 vite.config.js 中配置 css.preprocessorOptions.less。additionalData 会在每个 Less 样式入口前注入这些内容，组件中即可直接调用 CssLab 的 mixin。将下面的 resolve 和 css 配置合并到项目已有配置中。",{language:"javascript",code:`import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                // 全局注入变量、mixin
                additionalData: \`
                    @import "@/assets/css/var.less";
                    @import "@/assets/css/mixin.less";
                    @import "csslab/base.less";
                \`,
            },
        },
    },
});`},"@ 指向 src 目录。var.less 和 mixin.less 是项目自己的文件，可分别放公共变量和自定义 mixin。请按项目实际路径调整，未使用的文件可删除对应的 import 行。","javascriptEnabled 启用 Less 内联 JavaScript。CssLab 的 animation.less 用它生成关键帧名称，单独使用 base.less 时可省略这个选项。"]},{id:"component",title:"在 Vue 组件中使用",content:['样式块声明 lang="less" 后，可以直接调用 .flex()、.size()、.fz() 等方法。scoped 可按组件需要保留。',{language:"html",code:`<template>
    <div class="demo-card">CssLab</div>
</template>

<style lang="less" scoped>
.demo-card {
    .flex(o);
    .size(240px, 120px);
    .fz(18px, 1.5);
    .r(8px);
    .color(#333);
    background: #f7f7f7;
}
</style>`},"这些调用会在构建时编译成普通 CSS。"]},{id:"parameters",title:"阅读参数与示例",content:["Reference 中的方法签名列出参数名，冒号后是参数默认值。有默认值的参数可以省略，调用 mixin 时以分号结尾。代码块内每行是独立的调用示例。",{language:"less",code:`// 签名为 .fz(@font-size, @line-height: false)
.title { .fz(18px); }       // 仅设置字号
.title { .fz(18px, 1.5); }  // 同时设置字号和行高`}]},{id:"reset",title:"引入全局重置样式",content:["需要浏览器样式重置时，在 src/main.js 中一次性引入 reset.css。additionalData 中适合放变量和 mixin，reset.css 这类直接输出全局规则的文件放在应用入口，可避免在多个组件中重复生成。",{language:"javascript",code:'import "csslab/reset.css";'}]}],tips:[]}]},Yn=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Ha={data(){return{releases:Sn.releases}},computed:{version(){return this.$route.meta.version||"v6"},page(){return this.$route.meta.page||"base"},home(){return this.version==="v5"?"/v5/index.html":"/index.html"},referencePages(){return Sn.documents.filter(e=>e.version===this.version&&!["usage","gradient"].includes(e.page))}},methods:{switchVersion(e){const t=e.target.value,n=t==="v5"&&this.page==="usage"?"base":this.page,i=Sn.documents.find(s=>s.version===t&&s.page===n);this.$router.push(i.path)}}},Ka={class:"m-top"},Ua={class:"m-header"},Ga={class:"m-logo"},Wa=["value"],qa=["value"],Ya={class:"m-menu"},$a={class:"m-submenu"};function Qa(e,t,n,i,s,o){const r=dn("RouterLink");return K(),X("div",Ka,[t[7]||(t[7]=V("div",{class:"m-rainbow"},null,-1)),V("div",Ua,[V("h1",Ga,[oe(r,{class:"u-name",to:o.home},{default:At(()=>[...t[1]||(t[1]=[ke("Csslab",-1)])]),_:1},8,["to"]),t[2]||(t[2]=V("em",{class:"u-domain"},[V("span",null,".CC")],-1)),V("select",{class:"u-version","aria-label":"文档版本",title:"切换文档版本",value:o.version,onChange:t[0]||(t[0]=(...l)=>o.switchVersion&&o.switchVersion(...l))},[(K(!0),X(te,null,ht(s.releases,l=>(K(),X("option",{key:l.label,value:l.label},Ee(l.tag),9,qa))),128))],40,Wa),t[3]||(t[3]=V("a",{class:"u-type",href:"http://www.mgtv.com",target:"_blank"},[V("i"),ke("MGTV")],-1))]),t[6]||(t[6]=V("div",{class:"m-author"},[V("a",{class:"u-github",href:"https://github.com/iRuxu/CssLab",target:"_blank"},"Github")],-1)),V("div",Ya,[V("ul",null,[V("li",{class:xt({on:o.page!=="usage"})},[oe(r,{class:"m-menu-item",to:o.home},{default:At(()=>[...t[4]||(t[4]=[ke("Reference",-1)])]),_:1},8,["to"]),V("ul",$a,[(K(!0),X(te,null,ht(o.referencePages,l=>(K(),X("li",{key:l.page,class:xt({on:o.page===l.page})},[oe(r,{class:"m-submenu-item",to:l.path},{default:At(()=>[ke(Ee(l.title),1)]),_:2},1032,["to"])],2))),128))])],2),o.version==="v6"?(K(),X("li",{key:0,class:xt({on:o.page==="usage"})},[oe(r,{class:"m-menu-item",to:"/usage.html"},{default:At(()=>[...t[5]||(t[5]=[ke("Usage",-1)])]),_:1})],2)):Yt("",!0)])])]),t[8]||(t[8]=V("div",{class:"m-submenu-bg"},null,-1))])}const Xa=Yn(Ha,[["render",Qa]]),Za={components:{SiteHeader:Xa}};function Ja(e,t,n,i,s,o){const r=dn("SiteHeader"),l=dn("RouterView");return K(),X(te,null,[oe(r),(K(),Gi(l,{key:e.$route.path}))],64)}const ec=Yn(Za,[["render",Ja]]);const Bt=typeof document<"u";function nr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&nr(e.default)}const W=Object.assign;function ci(e,t){const n={};for(const i in t){const s=t[i];n[i]=Be(s)?s.map(e):e(s)}return n}const on=()=>{},Be=Array.isArray;function Ts(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const ir=/#/g,nc=/&/g,ic=/\//g,sc=/=/g,oc=/\?/g,sr=/\+/g,rc=/%5B/g,lc=/%5D/g,or=/%5E/g,ac=/%60/g,rr=/%7B/g,cc=/%7C/g,lr=/%7D/g,dc=/%20/g;function qi(e){return e==null?"":encodeURI(""+e).replace(cc,"|").replace(rc,"[").replace(lc,"]")}function uc(e){return qi(e).replace(rr,"{").replace(lr,"}").replace(or,"^")}function Ci(e){return qi(e).replace(sr,"%2B").replace(dc,"+").replace(ir,"%23").replace(nc,"%26").replace(ac,"`").replace(rr,"{").replace(lr,"}").replace(or,"^")}function fc(e){return Ci(e).replace(sc,"%3D")}function pc(e){return qi(e).replace(ir,"%23").replace(oc,"%3F")}function hc(e){return pc(e).replace(ic,"%2F")}function mn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const mc=/\/$/,gc=e=>e.replace(mc,"");function di(e,t,n="/"){let i,s={},o="",r="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(i=t.slice(0,a),o=t.slice(a,l>0?l:t.length),s=e(o.slice(1))),l>=0&&(i=i||t.slice(0,l),r=t.slice(l,t.length)),i=wc(i??t,n),{fullPath:i+o+r,path:i,query:s,hash:mn(r)}}function bc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Is(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function xc(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Vt(t.matched[i],n.matched[s])&&ar(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ar(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!vc(e[n],t[n]))return!1;return!0}function vc(e,t){return Be(e)?ks(e,t):Be(t)?ks(t,e):e?.valueOf()===t?.valueOf()}function ks(e,t){return Be(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function wc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,r,l;for(r=0;r<i.length;r++)if(l=i[r],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Si=(function(e){return e.pop="pop",e.push="push",e})({}),ui=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function yc(e){if(!e)if(Bt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gc(e)}const Rc=/^[^#]+#/;function _c(e,t){return e.replace(Rc,"#")+t}function Ec(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const $n=()=>({left:window.scrollX,top:window.scrollY});function Cc(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ec(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ps(e,t){return(history.state?history.state.position-t:-1)+e}const Oi=new Map;function Sc(e,t){Oi.set(e,t)}function Oc(e){const t=Oi.get(e);return Oi.delete(e),t}function Ac(e){return typeof e=="string"||e&&typeof e=="object"}function cr(e){return typeof e=="string"||typeof e=="symbol"}let se=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const dr=Symbol("");se.MATCHER_NOT_FOUND+"",se.NAVIGATION_GUARD_REDIRECT+"",se.NAVIGATION_ABORTED+"",se.NAVIGATION_CANCELLED+"",se.NAVIGATION_DUPLICATED+"";function Ht(e,t){return W(new Error,{type:e,[dr]:!0},t)}function it(e,t){return e instanceof Error&&dr in e&&(t==null||!!(e.type&t))}const Tc=["params","query","hash"];function Ic(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Tc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function kc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(sr," "),o=s.indexOf("="),r=mn(o<0?s:s.slice(0,o)),l=o<0?null:mn(s.slice(o+1));if(r in t){let a=t[r];Be(a)||(a=t[r]=[a]),a.push(l)}else t[r]=l}return t}function Fs(e){let t="";for(let n in e){const i=e[n];if(n=fc(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Be(i)?i.map(s=>s&&Ci(s)):[i&&Ci(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Pc(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Be(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Fc=Symbol(""),Ls=Symbol(""),Yi=Symbol(""),ur=Symbol(""),Ai=Symbol("");function Wt(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function mt(e,t,n,i,s,o=r=>r()){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const u=m=>{m===!1?a(Ht(se.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?a(m):Ac(m)?a(Ht(se.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(r&&i.enterCallbacks[s]===r&&typeof m=="function"&&r.push(m),l())},d=o(()=>e.call(i&&i.instances[s],t,n,u));let p=Promise.resolve(d);e.length<3&&(p=p.then(u)),p.catch(m=>a(m))})}function fi(e,t,n,i,s=o=>o()){const o=[];for(const r of e)for(const l in r.components){let a=r.components[l];if(!(t!=="beforeRouteEnter"&&!r.instances[l]))if(nr(a)){const u=(a.__vccOpts||a)[t];u&&o.push(mt(u,n,i,r,l,s))}else{let u=a();o.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${r.path}"`);const p=tc(d)?d.default:d;r.mods[l]=d,r.components[l]=p;const m=(p.__vccOpts||p)[t];return m&&mt(m,n,i,r,l,s)()}))}}return o}function Lc(e,t){const n=[],i=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const l=t.matched[r];l&&(e.matched.find(u=>Vt(u,l))?i.push(l):n.push(l));const a=e.matched[r];a&&(t.matched.find(u=>Vt(u,a))||s.push(a))}return[n,i,s]}let zc=()=>location.protocol+"//"+location.host;function fr(e,t){const{pathname:n,search:i,hash:s}=t,o=e.indexOf("#");if(o>-1){let r=s.includes(e.slice(o))?e.slice(o).length:1,l=s.slice(r);return l[0]!=="/"&&(l="/"+l),Is(l,"")}return Is(n,e)+i+s}function Nc(e,t,n,i){let s=[],o=[],r=null;const l=({state:m})=>{const b=fr(e,location),k=n.value,O=t.value;let D=0;if(m){if(n.value=b,t.value=m,r&&r===k){r=null;return}D=O?m.position-O.position:0}else i(b);s.forEach(N=>{N(n.value,k,{delta:D,type:Si.pop,direction:D?D>0?ui.forward:ui.back:ui.unknown})})};function a(){r=n.value}function u(m){s.push(m);const b=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return o.push(b),b}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(W({},m.state,{scroll:$n()}),"")}}function p(){for(const m of o)m();o=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:a,listen:u,destroy:p}}function zs(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?$n():null}}function Bc(e){const{history:t,location:n}=window,i={value:fr(e,n)},s={value:t.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,u,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:zc()+e+a;try{t[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(b){console.error(b),n[d?"replace":"assign"](m)}}function r(a,u){o(a,W({},t.state,zs(s.value.back,a,s.value.forward,!0),u,{position:s.value.position}),!0),i.value=a}function l(a,u){const d=W({},s.value,t.state,{forward:a,scroll:$n()});o(d.current,d,!0),o(a,W({},zs(i.value,a,null),{position:d.position+1},u),!1),i.value=a}return{location:i,state:s,push:l,replace:r}}function Mc(e){e=yc(e);const t=Bc(e),n=Nc(e,t.state,t.location,t.replace);function i(o,r=!0){r||n.pauseListeners(),history.go(o)}const s=W({location:"",base:e,go:i,createHref:_c.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Tt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var ae=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(ae||{});const Dc={type:Tt.Static,value:""},jc=/[a-zA-Z0-9_]/;function Vc(e){if(!e)return[[]];if(e==="/")return[[Dc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${u}": ${b}`)}let n=ae.Static,i=n;const s=[];let o;function r(){o&&s.push(o),o=[]}let l=0,a,u="",d="";function p(){u&&(n===ae.Static?o.push({type:Tt.Static,value:u}):n===ae.Param||n===ae.ParamRegExp||n===ae.ParamRegExpEnd?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Tt.Param,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==ae.ParamRegExp){i=n,n=ae.EscapeNext;continue}switch(n){case ae.Static:a==="/"?(u&&p(),r()):a===":"?(p(),n=ae.Param):m();break;case ae.EscapeNext:m(),n=i;break;case ae.Param:a==="("?n=ae.ParamRegExp:jc.test(a)?m():(p(),n=ae.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case ae.ParamRegExp:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=ae.ParamRegExpEnd:d+=a;break;case ae.ParamRegExpEnd:p(),n=ae.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),r(),s}const Ns="[^/]+?",Hc={sensitive:!1,strict:!1,start:!0,end:!0};var we=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(we||{});const Kc=/[.+*?^${}()[\]/\\]/g;function Uc(e,t){const n=W({},Hc,t),i=[];let s=n.start?"^":"";const o=[];for(const u of e){const d=u.length?[]:[we.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let b=we.Segment+(n.sensitive?we.BonusCaseSensitive:0);if(m.type===Tt.Static)p||(s+="/"),s+=m.value.replace(Kc,"\\$&"),b+=we.Static;else if(m.type===Tt.Param){const{value:k,repeatable:O,optional:D,regexp:N}=m;o.push({name:k,repeatable:O,optional:D});const A=N||Ns;if(A!==Ns){b+=we.BonusCustomRegExp;try{`${A}`}catch(I){throw new Error(`Invalid custom RegExp for param "${k}" (${A}): `+I.message)}}let F=O?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(F=D&&u.length<2?`(?:/${F})`:"/"+F),D&&(F+="?"),s+=F,b+=we.Dynamic,D&&(b+=we.BonusOptional),O&&(b+=we.BonusRepeatable),A===".*"&&(b+=we.BonusWildcard)}d.push(b)}i.push(d)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=we.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(r),p={};if(!d)return null;for(let m=1;m<d.length;m++){const b=d[m]||"",k=o[m-1];p[k.name]=b&&k.repeatable?b.split("/"):b}return p}function a(u){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const b of m)if(b.type===Tt.Static)d+=b.value;else if(b.type===Tt.Param){const{value:k,repeatable:O,optional:D}=b,N=k in u?u[k]:"";if(Be(N)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const A=Be(N)?N.join("/"):N;if(!A)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=A}}return d||"/"}return{re:r,score:i,keys:o,parse:l,stringify:a}}function Gc(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===we.Static+we.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===we.Static+we.Segment?1:-1:0}function pr(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const o=Gc(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(Bs(i))return 1;if(Bs(s))return-1}return s.length-i.length}function Bs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wc={strict:!1,end:!0,sensitive:!1};function qc(e,t,n){const i=Uc(Vc(e.path),n),s=W(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Yc(e,t){const n=[],i=new Map;t=Ts(Wc,t);function s(p){return i.get(p)}function o(p,m,b){const k=!b,O=Ds(p);O.aliasOf=b&&b.record;const D=Ts(t,p),N=[O];if("alias"in p){const I=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of I)N.push(Ds(W({},O,{components:b?b.record.components:O.components,path:Z,aliasOf:b?b.record:O})))}let A,F;for(const I of N){const{path:Z}=I;if(m&&Z[0]!=="/"){const ue=m.record.path,ie=ue[ue.length-1]==="/"?"":"/";I.path=m.record.path+(Z&&ie+Z)}if(A=qc(I,m,D),b?b.alias.push(A):(F=F||A,F!==A&&F.alias.push(A),k&&p.name&&!js(A)&&r(p.name)),hr(A)&&a(A),O.children){const ue=O.children;for(let ie=0;ie<ue.length;ie++)o(ue[ie],A,b&&b.children[ie])}b=b||A}return F?()=>{r(F)}:on}function r(p){if(cr(p)){const m=i.get(p);m&&(i.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&i.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function l(){return n}function a(p){const m=Xc(p,n);n.splice(m,0,p),p.record.name&&!js(p)&&i.set(p.record.name,p)}function u(p,m){let b,k={},O,D;if("name"in p&&p.name){if(b=i.get(p.name),!b)throw Ht(se.MATCHER_NOT_FOUND,{location:p});D=b.record.name,k=W(Ms(m.params,b.keys.filter(F=>!F.optional).concat(b.parent?b.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&Ms(p.params,b.keys.map(F=>F.name))),O=b.stringify(k)}else if(p.path!=null)O=p.path,b=n.find(F=>F.re.test(O)),b&&(k=b.parse(O),D=b.record.name);else{if(b=m.name?i.get(m.name):n.find(F=>F.re.test(m.path)),!b)throw Ht(se.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=b.record.name,k=W({},m.params,p.params),O=b.stringify(k)}const N=[];let A=b;for(;A;)N.unshift(A.record),A=A.parent;return{name:D,path:O,params:k,matched:N,meta:Qc(N)}}e.forEach(p=>o(p));function d(){n.length=0,i.clear()}return{addRoute:o,resolve:u,removeRoute:r,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Ms(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Ds(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:$c(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function $c(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function js(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qc(e){return e.reduce((t,n)=>W(t,n.meta),{})}function Xc(e,t){let n=0,i=t.length;for(;n!==i;){const o=n+i>>1;pr(e,t[o])<0?i=o:n=o+1}const s=Zc(e);return s&&(i=t.lastIndexOf(s,i-1)),i}function Zc(e){let t=e;for(;t=t.parent;)if(hr(t)&&pr(e,t)===0)return t}function hr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Vs(e){const t=lt(Yi),n=lt(ur),i=Pe(()=>{const a=Mt(e.to);return t.resolve(a)}),s=Pe(()=>{const{matched:a}=i.value,{length:u}=a,d=a[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Vt.bind(null,d));if(m>-1)return m;const b=Hs(a[u-2]);return u>1&&Hs(d)===b&&p[p.length-1].path!==b?p.findIndex(Vt.bind(null,a[u-2])):m}),o=Pe(()=>s.value>-1&&id(n.params,i.value.params)),r=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&ar(n.params,i.value.params));function l(a={}){if(nd(a)){const u=t[Mt(e.replace)?"replace":"push"](Mt(e.to)).catch(on);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Pe(()=>i.value.href),isActive:o,isExactActive:r,navigate:l}}function Jc(e){return e.length===1?e[0]:e}const ed=Oo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Vs,setup(e,{slots:t}){const n=Kn(Vs(e)),{options:i}=lt(Yi),s=Pe(()=>({[Ks(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ks(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Jc(t.default(n));return e.custom?o:er("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),td=ed;function nd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function id(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Be(s)||s.length!==i.length||i.some((o,r)=>o.valueOf()!==s[r].valueOf()))return!1}return!0}function Hs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ks=(e,t,n)=>e??t??n,sd=Oo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=lt(Ai),s=Pe(()=>e.route||i.value),o=lt(Ls,0),r=Pe(()=>{let u=Mt(o);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Pe(()=>s.value.matched[r.value]);_n(Ls,Pe(()=>r.value+1)),_n(Fc,l),_n(Ai,s);const a=Yr();return En(()=>[a.value,l.value,e.name],([u,d,p],[m,b,k])=>{d&&(d.instances[p]=u,b&&b!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),u&&d&&(!b||!Vt(d,b)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return Us(n.default,{Component:m,route:u});const b=p.props[d],k=b?b===!0?u.params:typeof b=="function"?b(u):b:null,D=er(m,W({},k,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(p.instances[d]=null)},ref:a}));return Us(n.default,{Component:D,route:u})||D}}});function Us(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const od=sd;function rd(e){const t=Yc(e.routes,e),n=e.parseQuery||kc,i=e.stringifyQuery||Fs,s=e.history,o=Wt(),r=Wt(),l=Wt(),a=$r(ft);let u=ft;Bt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ci.bind(null,v=>""+v),p=ci.bind(null,hc),m=ci.bind(null,mn);function b(v,T){let C,z;return cr(v)?(C=t.getRecordMatcher(v),z=T):z=v,t.addRoute(z,C)}function k(v){const T=t.getRecordMatcher(v);T&&t.removeRoute(T)}function O(){return t.getRoutes().map(v=>v.record)}function D(v){return!!t.getRecordMatcher(v)}function N(v,T){if(T=W({},T||a.value),typeof v=="string"){const g=di(n,v,T.path),x=t.resolve({path:g.path},T),w=s.createHref(g.fullPath);return W(g,x,{params:m(x.params),hash:mn(g.hash),redirectedFrom:void 0,href:w})}let C;if(v.path!=null)C=W({},v,{path:di(n,v.path,T.path).path});else{const g=W({},v.params);for(const x in g)g[x]==null&&delete g[x];C=W({},v,{params:p(g)}),T.params=p(T.params)}const z=t.resolve(C,T),c=v.hash||"";z.params=d(m(z.params));const f=bc(i,W({},v,{hash:uc(c),path:z.path})),h=s.createHref(f);return W({fullPath:f,hash:c,query:i===Fs?Pc(v.query):v.query||{}},z,{redirectedFrom:void 0,href:h})}function A(v){return typeof v=="string"?di(n,v,a.value.path):W({},v)}function F(v,T){if(u!==v)return Ht(se.NAVIGATION_CANCELLED,{from:T,to:v})}function I(v){return ie(v)}function Z(v){return I(W(A(v),{replace:!0}))}function ue(v,T){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:z}=C;let c=typeof z=="function"?z(v,T):z;return typeof c=="string"&&(c=c.includes("?")||c.includes("#")?c=A(c):{path:c},c.params={}),W({query:v.query,hash:v.hash,params:c.path!=null?{}:v.params},c)}}function ie(v,T){const C=u=N(v),z=a.value,c=v.state,f=v.force,h=v.replace===!0,g=ue(C,z);if(g)return ie(W(A(g),{state:typeof g=="object"?W({},c,g.state):c,force:f,replace:h}),T||C);const x=C;x.redirectedFrom=T;let w;return!f&&xc(i,z,C)&&(w=Ht(se.NAVIGATION_DUPLICATED,{to:x,from:z}),Ve(z,z,!0,!1)),(w?Promise.resolve(w):De(x,z)).catch(R=>it(R)?it(R,se.NAVIGATION_GUARD_REDIRECT)?R:ut(R):G(R,x,z)).then(R=>{if(R){if(it(R,se.NAVIGATION_GUARD_REDIRECT))return ie(W({replace:h},A(R.to),{state:typeof R.to=="object"?W({},c,R.to.state):c,force:f}),T||x)}else R=yt(x,z,!0,h,c);return dt(x,z,R),R})}function Me(v,T){const C=F(v,T);return C?Promise.reject(C):Promise.resolve()}function ct(v){const T=Rt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(v):v()}function De(v,T){let C;const[z,c,f]=Lc(v,T);C=fi(z.reverse(),"beforeRouteLeave",v,T);for(const g of z)g.leaveGuards.forEach(x=>{C.push(mt(x,v,T))});const h=Me.bind(null,v,T);return C.push(h),Se(C).then(()=>{C=[];for(const g of o.list())C.push(mt(g,v,T));return C.push(h),Se(C)}).then(()=>{C=fi(c,"beforeRouteUpdate",v,T);for(const g of c)g.updateGuards.forEach(x=>{C.push(mt(x,v,T))});return C.push(h),Se(C)}).then(()=>{C=[];for(const g of f)if(g.beforeEnter)if(Be(g.beforeEnter))for(const x of g.beforeEnter)C.push(mt(x,v,T));else C.push(mt(g.beforeEnter,v,T));return C.push(h),Se(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=fi(f,"beforeRouteEnter",v,T,ct),C.push(h),Se(C))).then(()=>{C=[];for(const g of r.list())C.push(mt(g,v,T));return C.push(h),Se(C)}).catch(g=>it(g,se.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function dt(v,T,C){l.list().forEach(z=>ct(()=>z(v,T,C)))}function yt(v,T,C,z,c){const f=F(v,T);if(f)return f;const h=T===ft,g=Bt?history.state:{};C&&(z||h?s.replace(v.fullPath,W({scroll:h&&g&&g.scroll},c)):s.push(v.fullPath,c)),a.value=v,Ve(v,T,C,h),ut()}let je;function Kt(){je||(je=s.listen((v,T,C)=>{if(!_t.listening)return;const z=N(v),c=ue(z,_t.currentRoute.value);if(c){ie(W(c,{replace:!0,force:!0}),z).catch(on);return}u=z;const f=a.value;Bt&&Sc(Ps(f.fullPath,C.delta),$n()),De(z,f).catch(h=>it(h,se.NAVIGATION_ABORTED|se.NAVIGATION_CANCELLED)?h:it(h,se.NAVIGATION_GUARD_REDIRECT)?(ie(W(A(h.to),{force:!0}),z).then(g=>{it(g,se.NAVIGATION_ABORTED|se.NAVIGATION_DUPLICATED)&&!C.delta&&C.type===Si.pop&&s.go(-1,!1)}).catch(on),Promise.reject()):(C.delta&&s.go(-C.delta,!1),G(h,z,f))).then(h=>{h=h||yt(z,f,!1),h&&(C.delta&&!it(h,se.NAVIGATION_CANCELLED)?s.go(-C.delta,!1):C.type===Si.pop&&it(h,se.NAVIGATION_ABORTED|se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),dt(z,f,h)}).catch(on)}))}let Ft=Wt(),de=Wt(),$;function G(v,T,C){ut(v);const z=de.list();return z.length?z.forEach(c=>c(v,T,C)):console.error(v),Promise.reject(v)}function et(){return $&&a.value!==ft?Promise.resolve():new Promise((v,T)=>{Ft.add([v,T])})}function ut(v){return $||($=!v,Kt(),Ft.list().forEach(([T,C])=>v?C(v):T()),Ft.reset()),v}function Ve(v,T,C,z){const{scrollBehavior:c}=e;if(!Bt||!c)return Promise.resolve();const f=!C&&Oc(Ps(v.fullPath,0))||(z||!C)&&history.state&&history.state.scroll||null;return ji().then(()=>c(v,T,f)).then(h=>h&&Cc(h)).catch(h=>G(h,v,T))}const be=v=>s.go(v);let Lt;const Rt=new Set,_t={currentRoute:a,listening:!0,addRoute:b,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:D,getRoutes:O,resolve:N,options:e,push:I,replace:Z,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:o.add,beforeResolve:r.add,afterEach:l.add,onError:de.add,isReady:et,install(v){v.component("RouterLink",td),v.component("RouterView",od),v.config.globalProperties.$router=_t,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(a)}),Bt&&!Lt&&a.value===ft&&(Lt=!0,I(s.location).catch(z=>{}));const T={};for(const z in ft)Object.defineProperty(T,z,{get:()=>a.value[z],enumerable:!0});v.provide(Yi,_t),v.provide(ur,mo(T)),v.provide(Ai,a);const C=v.unmount;Rt.add(v),v.unmount=function(){Rt.delete(v),Rt.size<1&&(u=ft,je&&je(),je=null,a.value=ft,Lt=!1,$=!1),C()}}};function Se(v){return v.reduce((T,C)=>T.then(()=>ct(C)),Promise.resolve())}return _t}const ld={props:{code:{type:String,required:!0},language:{type:String,default:"less"}},mounted(){this.highlight()},watch:{code(){this.highlight()},language(){this.highlight()}},methods:{highlight(){const e=this.$refs.code;e.textContent=this.code,e.className=this.language,window.hljs?.highlightBlock(e)}}},ad={ref:"code"};function cd(e,t,n,i,s,o){return K(),X("pre",null,[V("code",ad,null,512)])}const dd=Yn(ld,[["render",cd]]);let pi;async function ud(){pi||(pi=new Promise(e=>{const t=document.createElement("script");t.src="https://public.codepenassets.com/embed/index.js",t.async=!0,t.onload=()=>e(!0),t.onerror=()=>e(!1),document.head.appendChild(t)})),await pi&&window.__CPEmbed?.()}const fd={components:{CodeBlock:dd},props:{document:{type:Object,required:!0}},computed:{home(){return this.document.version==="v5"?"/v5/index.html":"/index.html"}},mounted(){this.updatePreviews()},watch:{document(){this.updatePreviews()}},methods:{async updatePreviews(){await this.$nextTick(),this.$refs.content.querySelector(".codepen")&&ud()}}},pd={class:"m-sidebar"},hd={class:"m-sidebar-title"},md={class:"m-sidebar-list",id:"m-sidebar-list"},gd={key:0},bd=["innerHTML"],xd=["id"],vd=["innerHTML"],wd=["id"],yd=["id"],Rd={key:0},_d={key:4,class:"m-tips"};function Ed(e,t,n,i,s,o){const r=dn("RouterLink"),l=dn("CodeBlock");return K(),X(te,null,[V("div",pd,[n.document.kind!=="gradient"?(K(),X(te,{key:0},[V("h2",hd,[ke(Ee(n.document.title),1),t[0]||(t[0]=V("span",null,null,-1))]),V("ul",md,[(K(!0),X(te,null,ht(n.document.groups,(a,u)=>(K(),X(te,{key:u},[a.title?(K(),X("h4",gd,Ee(a.title),1)):Yt("",!0),(K(!0),X(te,null,ht(a.items,d=>(K(),X("li",{key:d.id,class:xt({current:e.$route.hash==="#"+d.id})},[oe(r,{to:{path:n.document.path,hash:"#"+d.id},"aria-current":e.$route.hash==="#"+d.id?"location":void 0},{default:At(()=>[ke(Ee(d.label),1)]),_:2},1032,["to","aria-current"])],2))),128))],64))),128))])],64)):Yt("",!0)]),V("div",{class:xt(["m-content",{"m-content-reset":n.document.kind==="reset"}]),id:"m-content-list",ref:"content"},[n.document.tips.length?(K(),X("p",{key:0,class:"m-tips",innerHTML:n.document.tips.join("<br>")},null,8,bd)):Yt("",!0),n.document.kind==="mixins"?(K(!0),X(te,{key:1},ht(n.document.sections,a=>(K(),X("div",{key:a.id,class:"m-content-list-item",id:a.id},[V("h3",null,[V("b",null,Ee(a.name),1),V("span",null,Ee(a.signatures),1),V("i",null,Ee(a.title),1)]),V("p",null,Ee(a.description),1),oe(l,{code:a.code},null,8,["code"]),a.preview?(K(),X("div",{key:0,class:"m-preview",innerHTML:a.preview},null,8,vd)):Yt("",!0)],8,xd))),128)):n.document.kind==="reset"?(K(!0),X(te,{key:2},ht(n.document.sections,a=>(K(),X(te,{key:a.id},[V("h3",{id:a.id},[V("b",null,Ee(a.title),1)],8,wd),oe(l,{code:a.code,language:a.language},null,8,["code","language"])],64))),128)):n.document.kind==="usage"?(K(),X(te,{key:3},[(K(!0),X(te,null,ht(n.document.sections,a=>(K(),X("div",{key:a.id,class:"m-content-list-item",id:a.id},[V("h3",null,[V("b",null,Ee(a.title),1)]),(K(!0),X(te,null,ht(a.content,(u,d)=>(K(),X(te,{key:d},[typeof u=="string"?(K(),X("p",Rd,Ee(u),1)):(K(),Gi(l,{key:1,code:u.code,language:u.language},null,8,["code","language"]))],64))),128))],8,yd))),128)),t[1]||(t[1]=V("p",null,[V("a",{href:"https://vite.dev/config/shared-options#css-preprocessoroptions"},"Vite 官方文档 · CSS 预处理器配置")],-1))],64)):(K(),X("p",_d,[t[3]||(t[3]=ke("文字渐变的用法见 ",-1)),oe(r,{to:{path:o.home,hash:"#.color"}},{default:At(()=>[...t[2]||(t[2]=[ke("Base · .color",-1)])]),_:1},8,["to"]),t[4]||(t[4]=ke("。",-1))]))],2)],64)}const Cd=Yn(fd,[["render",Ed]]),$i=rd({history:Mc("/"),routes:[...Sn.documents.map(e=>({path:e.path,alias:e.page==="base"?e.version==="v5"?"/v5/":"/":[],component:Cd,props:{document:e},meta:{version:e.version,page:e.page}})),{path:"/:pathMatch(.*)*",redirect:"/"}],async scrollBehavior(e,t,n){if(await ji(),n)return n;if(e.hash){const i=window.document.getElementById(decodeURIComponent(e.hash.slice(1)));if(i)return{el:i,top:99}}return{top:0}}});function Sd(){if(document.querySelector("[data-csslab-analytics]"))return;window._hmt=window._hmt||[];const e=document.createElement("script");e.dataset.csslabAnalytics="true",e.src="https://hm.baidu.com/hm.js?e407a7627dea00b42ebe30955641936b",e.async=!0,document.head.appendChild(e)}function Od(e){window._hmt=window._hmt||[],window._hmt.push(["_trackPageview",e])}$i.afterEach((e,t,n)=>{!n&&t.matched.length&&e.path!==t.path&&Od(e.fullPath.split("#")[0])});const mr=Da(ec);mr.use($i);$i.isReady().then(()=>{mr.mount("#app"),Sd()});
