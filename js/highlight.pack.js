!function(e){var r="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):r&&(r.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs}))}(function(e){function r(e){return e.replace(/[&<>]/gm,function(e){return L[e]})}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0===t.index}function a(e){return x.test(e)}function c(e){var r,t,n,c,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",t=y.exec(s))return w(t[1])?t[1]:"no-highlight";for(s=s.split(/\s+/),r=0,n=s.length;n>r;r++)if(c=s[r],a(c)||w(c))return c}function s(e,r){var t,n={};for(t in e)n[t]=e[t];if(r)for(t in r)n[t]=r[t];return n}function i(e){var r=[];return function n(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3===c.nodeType?a+=c.nodeValue.length:1===c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=n(c,a),t(c).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function o(e,n,a){function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){function n(e){return" "+e.nodeName+'="'+r(e.value)+'"'}l+="<"+t(e)+E.map.call(e.attributes,n).join("")+">"}function i(e){l+="</"+t(e)+">"}function o(e){("start"===e.event?s:i)(e.node)}for(var u=0,l="",b=[];e.length||n.length;){var f=c();if(l+=r(a.substring(u,f[0].offset)),u=f[0].offset,f===e){b.reverse().forEach(i);do o(f.splice(0,1)[0]),f=c();while(f===e&&f.length&&f[0].offset===u);b.reverse().forEach(s)}else"start"===f[0].event?b.push(f[0].node):b.pop(),o(f.splice(0,1)[0])}return l+r(a.substr(u))}function u(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var i={},o=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");i[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof a.k?o("keyword",a.k):C(a.k).forEach(function(e){o(e,a.k[e])}),a.k=i}a.lR=t(a.l||/\w+/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=r(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(r){u.push(s(e,r))}):u.push("self"===e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(r).filter(Boolean);a.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}n(e)}function l(e,t,a,c){function s(e,r){var t,a;for(t=0,a=r.c.length;a>t;t++)if(n(r.c[t].bR,e))return r.c[t]}function i(e,r){if(n(e.eR,r)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?i(e.parent,r):void 0}function o(e,r){return!a&&n(r.iR,e)}function f(e,r){var t=v.cI?r[0].toLowerCase():r[0];return e.k.hasOwnProperty(t)&&e.k[t]}function g(e,r,t,n){var a=n?"":A.classPrefix,c='<span class="'+a,s=t?"":k;return c+=e+'">',c+r+s}function p(){var e,t,n,a;if(!C.k)return r(y);for(a="",t=0,C.lR.lastIndex=0,n=C.lR.exec(y);n;)a+=r(y.substring(t,n.index)),e=f(C,n),e?(B+=e[1],a+=g(e[0],r(n[0]))):a+=r(n[0]),t=C.lR.lastIndex,n=C.lR.exec(y);return a+r(y.substr(t))}function d(){var e="string"==typeof C.sL;if(e&&!M[C.sL])return r(y);var t=e?l(C.sL,y,!0,R[C.sL]):b(y,C.sL.length?C.sL:void 0);return C.r>0&&(B+=t.r),e&&(R[C.sL]=t.top),g(t.language,t.value,!1,!0)}function h(){x+=null!=C.sL?d():p(),y=""}function m(e){x+=e.cN?g(e.cN,"",!0):"",C=Object.create(e,{parent:{value:C}})}function N(e,r){if(y+=e,null==r)return h(),0;var t=s(r,C);if(t)return t.skip?y+=r:(t.eB&&(y+=r),h(),t.rB||t.eB||(y=r)),m(t,r),t.rB?0:r.length;var n=i(C,r);if(n){var a=C;a.skip?y+=r:(a.rE||a.eE||(y+=r),h(),a.eE&&(y=r));do C.cN&&(x+=k),C.skip||(B+=C.r),C=C.parent;while(C!==n.parent);return n.starts&&m(n.starts,""),a.rE?0:r.length}if(o(r,C))throw new Error('Illegal lexeme "'+r+'" for mode "'+(C.cN||"<unnamed>")+'"');return y+=r,r.length||1}var v=w(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var E,C=c||v,R={},x="";for(E=C;E!==v;E=E.parent)E.cN&&(x=g(E.cN,"",!0)+x);var y="",B=0;try{for(var L,S,I=0;C.t.lastIndex=I,L=C.t.exec(t),L;)S=N(t.substring(I,L.index),L[0]),I=L.index+S;for(N(t.substr(I)),E=C;E.parent;E=E.parent)E.cN&&(x+=k);return{r:B,value:x,language:e,top:C}}catch(j){if(j.message&&-1!==j.message.indexOf("Illegal"))return{r:0,value:r(t)};throw j}}function b(e,t){t=t||A.languages||C(M);var n={r:0,value:r(e)},a=n;return t.filter(w).forEach(function(r){var t=l(r,e,!1);t.language=r,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}),a.language&&(n.second_best=a),n}function f(e){return A.tabReplace||A.useBR?e.replace(B,function(e,r){return A.useBR&&"\n"===e?"<br>":A.tabReplace?r.replace(/\t/g,A.tabReplace):void 0}):e}function g(e,r,t){var n=r?R[r]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(n)&&a.push(n),a.join(" ").trim()}function p(e){var r,t,n,s,u,p=c(e);a(p)||(A.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e,u=r.textContent,n=p?l(p,u,!0):b(u),t=i(r),t.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=n.value,n.value=o(t,i(s),u)),n.value=f(n.value),e.innerHTML=n.value,e.className=g(e.className,p,n.language),e.result={language:n.language,re:n.r},n.second_best&&(e.second_best={language:n.second_best.language,re:n.second_best.r}))}function d(e){A=s(A,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function N(r,t){var n=M[r]=t(e);n.aliases&&n.aliases.forEach(function(e){R[e]=r})}function v(){return C(M)}function w(e){return e=(e||"").toLowerCase(),M[e]||M[R[e]]}var E=[],C=Object.keys,M={},R={},x=/^(no-?highlight|plain|text)$/i,y=/\blang(?:uage)?-([\w-]+)\b/i,B=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,k="</span>",A={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},L={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=l,e.highlightAuto=b,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=v,e.getLanguage=w,e.inherit=s,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(r,t,n){var a=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var r="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:r,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}}),hljs.registerLanguage("css",function(e){var r="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:r,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}}),hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})",n=[],a=[],c=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},s=function(e,r,t){return{cN:e,b:r,r:t}},i={b:"\\(",e:"\\)",c:a,r:0};a.push(e.CLCM,e.CBCM,c("'"),c('"'),e.CSSNM,{b:"(url|data-uri)\\(",starts:{cN:"string",e:"[\\)\\n]",eE:!0}},s("number","#[0-9A-Fa-f]+\\b"),i,s("variable","@@?"+r,10),s("variable","@{"+r+"}"),s("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0},{cN:"meta",b:"!important"});var o=a.concat({b:"{",e:"}",c:n}),u={bK:"when",eW:!0,c:[{bK:"and not"}].concat(a)},l={b:t+"\\s*:",rB:!0,e:"[;}]",r:0,c:[{cN:"attribute",b:t,e:":",eE:!0,starts:{eW:!0,i:"[<=$]",r:0,c:a}}]},b={cN:"keyword",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:a,r:0}},f={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:o}},g={v:[{b:"[\\.#:&\\[>]",e:"[;{}]"},{b:t,e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",r:0,c:[e.CLCM,e.CBCM,u,s("keyword","all\\b"),s("variable","@{"+r+"}"),s("selector-tag",t+"%?",0),s("selector-id","#"+t),s("selector-class","\\."+t,0),s("selector-tag","&",0),{cN:"selector-attr",b:"\\[",e:"\\]"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"\\(",e:"\\)",c:o},{b:"!important"}]};return n.push(e.CLCM,e.CBCM,b,f,l,g),{cI:!0,i:"[=>'/<($\"]",c:n}}),hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,c,n,e.RM];var s=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});