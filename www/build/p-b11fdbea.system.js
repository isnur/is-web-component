var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("N","is-web-component");var a;var i;var s;var l=false;var o=false;var f=false;var $=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var p=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}});var m=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=N(e,n);var l=w(r,i);var o=R(n);p.ael(s,a,l,o);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return p.rel(s,a,l,o)}))}))}};var w=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var N=function(e,r){if(r&4)return h;return e};var R=function(e){return(e&2)!==0};var S="{visibility:hidden}.hydrated{visibility:inherit}";var x="http://www.w3.org/1999/xlink";var k=function(e,r){if(r===void 0){r=""}{return function(){return}}};var _=function(e,r){{return function(){return}}};var T=new WeakMap;var C=function(e,r,t){var n=We.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}We.set(e,n)};var L=function(e,r,t,n){var a=j(r);var i=We.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=T.get(e);var l=void 0;if(!s){T.set(e,s=new Set)}if(!s.has(a)){{if(p.$cssShim$){l=p.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=h.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var E=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=k("attachStyles",r.$tagName$);var i=L(m&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h");if(n&2){t.classList.add(i+"-s")}}a()};var j=function(e,r){return"sc-"+e.$tagName$};var A={};var P=function(e){return e!=null};var M=function(){};var I=function(e){e=typeof e;return e==="object"||e==="function"};var O=typeof Deno!=="undefined";var B=!O&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var q=O&&Deno.build.os==="windows";var U=B?process.cwd:O?Deno.cwd:function(){return"/"};var z=B?process.exit:O?Deno.exit:M;var H=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var l=false;var o=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!I(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?D(null,a):a)}o=l}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,F)}var c=D(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var D=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var V=e("H",{});var W=function(e){return e&&e.$tag$===V};var F={forEach:function(e,r){return e.map(G).forEach(r)},map:function(e,r){return e.map(G).map(r).map(Q)}};var G=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Q=function(e){if(typeof e.vtag==="function"){var r=Object.assign({},e.vattrs);if(e.vkey){r.key=e.vkey}if(e.vname){r.name=e.vname}return H.apply(void 0,__spreadArrays([e.vtag,r],e.vchildren||[]))}var t=D(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var J=function(e,r,t,n,a,i){if(t!==n){var s=ze(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=X(t);var $=X(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(ze(v,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){p.rel(e,r,t,false)}if(n){p.ael(e,r,n,false)}}else{var c=I(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(m){}}var h=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;h=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(h){e.removeAttributeNS(x,r)}else{e.removeAttribute(r)}}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(x,r,n)}else{e.setAttribute(r,n)}}}}};var K=/\s/;var X=function(e){return!e?[]:e.split(K)};var Y=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(n in i){if(!(n in s)){J(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){J(a,n,i[n],s[n],t,r.$flags$)}};var Z=function(e,r,t,n){var o=r.$children$[t];var u=0;var c;var v;var d;if(!l){f=true;if(o.$tag$==="slot"){if(a){n.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=h.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=h.createTextNode("")}else{c=o.$elm$=h.createElement(o.$flags$&2?"slot-fb":o.$tag$);{Y(null,o,$)}if(P(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=Z(e,o,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===o.$tag$&&e.$elm$){ee(e.$elm$,false)}}}return c};var ee=function(e,r){p.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){se(a).insertBefore(a,ie(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){ee(a,r)}}p.$flags$&=~1};var re=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(l.shadowRoot&&l.tagName===s){l=l.shadowRoot}for(;a<=i;++a){if(n[a]){o=Z(null,t,a,e);if(o){n[a].$elm$=o;l.insertBefore(o,ie(r))}}}};var te=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;ce(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{ee(a,true)}}a.remove()}}};var ne=function(e,r,t,n){var a=0;var i=0;var s=0;var l=0;var o=r.length-1;var f=r[0];var $=r[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(ae(f,c)){le(f,c);f=r[++a];c=n[++i]}else if(ae($,v)){le($,v);$=r[--o];v=n[--u]}else if(ae(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){ee(f.$elm$.parentNode,false)}le(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(ae($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){ee($.$elm$.parentNode,false)}le($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--o];c=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=Z(r&&r[i],t,s,e)}else{le(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=Z(r&&r[i],t,i,e);c=n[++i]}if(d){{se(f.$elm$).insertBefore(d,ie(f.$elm$))}}}}if(a>o){re(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){te(r,a,o)}};var ae=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ie=function(e){return e&&e["s-ol"]||e};var se=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var le=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var l;if(s===null){{if(i==="slot");else{Y(e,r,$)}}if(n!==null&&a!==null){ne(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}re(t,null,r,a,0,a.length-1)}else if(n!==null){te(n,0,n.length-1)}}else if(l=t["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var oe=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}oe(t)}}};var fe=[];var $e=function(e){var r;var t;var n;var a;var i;var s;var l=0;var f=e.childNodes;var $=f.length;for(;l<$;l++){r=f[l];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ue(t,a)){i=fe.find((function(e){return e.$nodeToRelocate$===t}));o=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{fe.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){fe.map((function(e){if(ue(e.$nodeToRelocate$,t["s-sn"])){i=fe.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!fe.some((function(e){return e.$nodeToRelocate$===t}))){fe.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){$e(r)}}};var ue=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var ce=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(ce)}};var ve=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||D(null,null);var u=W(r)?r:H(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];l=m&&(n.$flags$&1)!==0;o=false}le($,u);{p.$flags$|=1;if(f){$e(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<fe.length;w++){c=fe[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<fe.length;w++){c=fe[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(o){oe(u.$elm$)}p.$flags$&=~1;fe.length=0}};var de=e("g",(function(e){return Be(e).$hostElement$}));var he=e("c",(function(e,r,t){var n=de(e);return{emit:function(e){return pe(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var pe=function(e,r,t){var n=p.ce(r,t);e.dispatchEvent(n);return n};var me=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ge=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}me(e,e.$ancestorComponent$);var t=function(){return ye(e,r)};return er(t)};var ye=function(e,r){var t=k("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return xe(n,r,t)}));e.$queuedListeners$=null}}{a=xe(n,"componentWillLoad")}}t();return ke(a,(function(){return be(e,n,r)}))};var be=function(e,r,t){var n=e.$hostElement$;var a=k("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){E(e)}var s=k("render",e.$cmpMeta$.$tagName$);{{ve(e,we(e,r))}}if(p.$cssShim$){p.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var l=n["s-p"];var o=function(){return Ne(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}};var we=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){He(t)}return r};var Ne=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=k("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{_e(t)}n();{e.$onReadyResolve$(t);if(!a){Se()}}}else{n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ze((function(){return ge(e,false)}))}e.$flags$&=~(4|512)}};var Re=function(e){{var r=Be(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){ge(r,false)}return t}};var Se=function(e){{_e(h.documentElement)}{p.$flags$|=2}Ze((function(){return pe(v,"appload",{detail:{namespace:n}})}))};var xe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){He(n)}}return undefined};var ke=function(e,r){return e&&e.then?e.then(r):r()};var _e=function(e){return e.classList.add("hydrated")};var Te=function(e,r){if(e!=null&&!I(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Ce=function(e,r){return Be(e).$instanceValues$.get(r)};var Le=function(e,r,t,n){var a=Be(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;t=Te(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&s&128){var o=n.$watchers$[r];if(o){o.map((function(e){try{l[e](t,i,r)}catch(n){He(n)}}))}}if((s&(2|16))===2){ge(a,false)}}}};var Ee=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ce(this,n)},set:function(e){Le(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Be(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;p.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var je=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,l,o,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ve(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ee(s,a,2);s.isProxied=true}t=k("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){He(c)}{n.$flags$&=~8}{n.$flags$|=128}t();if(!s.style)return[3,5];i=s.style;l=j(a);if(!!We.has(l))return[3,5];o=k("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-50811587.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=u.sent();u.label=4;case 4:C(l,i,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return ge(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Ae=function(e){if((p.$flags$&1)===0){var r=Be(e);var t=r.$cmpMeta$;var n=k("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Pe(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){me(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ze((function(){return je(e,r,t)}))}}else{b(e,r,t.$listeners$)}n()}};var Pe=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Me=function(e){if((p.$flags$&1)===0){var r=Be(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(p.$cssShim$){p.$cssShim$.removeHost(e)}{xe(t,"componentDidUnload")}}};var Ie=e("b",(function(e,r){if(r===void 0){r={}}var t=k();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var l=s.querySelector("meta[charset]");var o=h.createElement("style");var f=[];var $;var u=true;Object.assign(p,r);p.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){p.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Ue(r,t);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{p.jmp((function(){return Ae(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return Me(e)}))};r.prototype.forceUpdate=function(){Re(this)};r.prototype.componentOnReady=function(){return Be(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Ee(l,t,1))}}))}));{o.innerHTML=n+S;o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return $=setTimeout(Se,30)}))}}t()}));var Oe=new WeakMap;var Be=function(e){return Oe.get(e)};var qe=e("r",(function(e,r){return Oe.set(r.$lazyInstance$=e,r)}));var Ue=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,t,r.$listeners$);return Oe.set(e,t)};var ze=function(e,r){return r in e};var He=function(e){return console.error(e)};var De=new Map;var Ve=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=De.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{De.set(i,e)}return e[a]}),He)};var We=new Map;var Fe=[];var Ge=[];var Qe=[];var Je=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&p.$flags$&4){Ze(Ye)}else{p.raf(Ye)}}}};var Ke=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){He(t)}}e.length=0};var Xe=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){He(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Ye=function(){{u++}Ke(Fe);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Xe(Ge,e);Xe(Qe,e);if(Ge.length>0){Qe.push.apply(Qe,Ge);Ge.length=0}if(c=Fe.length+Ge.length+Qe.length>0){p.raf(Ye)}else{u=0}}};var Ze=function(e){return g().then(e)};var er=Je(Ge,true)}}}));