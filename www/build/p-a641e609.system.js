var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{o(t.next(e))}catch(r){i(r)}}function l(e){try{o(t["throw"](e))}catch(r){i(r)}}function o(e){e.done?n(e.value):a(e.value).then(s,l)}o((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(l){s=[6,l];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t=e("N","is-web-component");var a;var i;var s;var l=false;var o=false;var f=false;var $=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var p=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)},ce:function(e,r){return new CustomEvent(e,r)}});var m=e("a",(function(e){return Promise.resolve(e)}));var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=function(e,r,n,t){if(n){n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=w(e,t);var l=b(r,i);var o=N(t);p.ael(s,a,l,o);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return p.rel(s,a,l,o)}))}))}};var b=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,n])}}}};var w=function(e,r){if(r&4)return h;return e};var N=function(e){return(e&2)!==0};var S="{visibility:hidden}.hydrated{visibility:inherit}";var R=function(e,r){if(r===void 0){r=""}{return function(){return}}};var _=function(e,r){{return function(){return}}};var x=new WeakMap;var k=function(e,r,n){var t=ze.get(e);if(g&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}ze.set(e,t)};var L=function(e,r,n,t){var a=T(r);var i=ze.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=x.get(e);var l=void 0;if(!s){x.set(e,s=new Set)}if(!s.has(a)){{if(p.$cssShim$){l=p.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=h.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var C=function(e){var r=e.$cmpMeta$;var n=e.$hostElement$;var t=r.$flags$;var a=R("attachStyles",r.$tagName$);var i=L(n.getRootNode(),r,e.$modeName$,n);if(t&10){n["s-sc"]=i;n.classList.add(i+"-h");if(t&2){n.classList.add(i+"-s")}}a()};var T=function(e,r){return"sc-"+e.$tagName$};var P={};var E=function(e){return e!=null};var M=function(){};var j=function(e){e=typeof e;return e==="object"||e==="function"};var A=typeof Deno!=="undefined";var I=!A&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var B=A&&Deno.build.os==="windows";var O=I?process.cwd:A?Deno.cwd:function(){return"/"};var q=I?process.exit:A?Deno.exit:M;var z=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var s=null;var l=false;var o=false;var f=[];var $=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!j(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?U(null,a):a)}o=l}}};$(n);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=U(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var U=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var H=e("H",{});var D=function(e){return e&&e.$tag$===H};var V=function(e,r,n,t,a,i){if(n!==t){var s=Ie(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=F(n);var $=F(t);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in n){if(!t||t[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in t){if(!n||t[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,t[u])}else{e.style[u]=t[u]}}}}else if(r==="key");else if(r==="ref"){if(t){t(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ie(v,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(n){p.rel(e,r,n,false)}if(t){p.ael(e,r,t,false)}}else{var c=j(t);if((s||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var d=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=d){e[r]=d}}else{e[r]=t}}catch(h){}}if(t==null||t===false){if(t!==false||e.getAttribute(r)===""){{e.removeAttribute(r)}}}else if((!s||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}}};var W=/\s/;var F=function(e){return!e?[]:e.split(W)};var G=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(t in i){if(!(t in s)){V(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){V(a,t,i[t],s[t],n,r.$flags$)}};var Q=function(e,r,n,t){var o=r.$children$[n];var u=0;var c;var v;var d;if(!l){f=true;if(o.$tag$==="slot"){if(a){t.classList.add(a+"-s")}o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){c=o.$elm$=h.createTextNode(o.$text$)}else if(o.$flags$&1){c=o.$elm$=h.createTextNode("")}else{c=o.$elm$=h.createElement(o.$flags$&2?"slot-fb":o.$tag$);{G(null,o,$)}if(E(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(o.$children$){for(u=0;u<o.$children$.length;++u){v=Q(e,o,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(o.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[n];if(d&&d.$tag$===o.$tag$&&e.$elm$){J(e.$elm$,false)}}}return c};var J=function(e,r){p.$flags$|=1;var n=e.childNodes;for(var t=n.length-1;t>=0;t--){var a=n[t];if(a["s-hn"]!==s&&a["s-ol"]){re(a).insertBefore(a,ee(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){J(a,r)}}p.$flags$&=~1};var K=function(e,r,n,t,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=i;++a){if(t[a]){l=Q(null,n,a,e);if(l){t[a].$elm$=l;s.insertBefore(l,ee(r))}}}};var X=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;le(t);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{J(a,true)}}a.remove()}}};var Y=function(e,r,n,t){var a=0;var i=0;var s=0;var l=0;var o=r.length-1;var f=r[0];var $=r[o];var u=t.length-1;var c=t[0];var v=t[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--o]}else if(c==null){c=t[++i]}else if(v==null){v=t[--u]}else if(Z(f,c)){ne(f,c);f=r[++a];c=t[++i]}else if(Z($,v)){ne($,v);$=r[--o];v=t[--u]}else if(Z(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){J(f.$elm$.parentNode,false)}ne(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=t[--u]}else if(Z($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){J($.$elm$.parentNode,false)}ne($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--o];c=t[++i]}else{s=-1;{for(l=a;l<=o;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){s=l;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=Q(r&&r[i],n,s,e)}else{ne(h,c);r[s]=undefined;d=h.$elm$}c=t[++i]}else{d=Q(r&&r[i],n,i,e);c=t[++i]}if(d){{re(f.$elm$).insertBefore(d,ee(f.$elm$))}}}}if(a>o){K(e,t[u+1]==null?null:t[u+1].$elm$,n,t,i,u)}else if(i>u){X(r,a,o)}};var Z=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ee=function(e){return e&&e["s-ol"]||e};var re=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ne=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var l;if(s===null){{if(i==="slot");else{G(e,r,$)}}if(t!==null&&a!==null){Y(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}K(n,null,r,a,0,a.length-1)}else if(t!==null){X(t,0,t.length-1)}}else if(l=n["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var te=function(e){var r=e.childNodes;var n;var t;var a;var i;var s;var l;for(t=0,a=r.length;t<a;t++){n=r[t];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==n["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){n.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){n.hidden=true;break}}}}}te(n)}}};var ae=[];var ie=function(e){var r;var n;var t;var a;var i;var s;var l=0;var f=e.childNodes;var $=f.length;for(;l<$;l++){r=f[l];if(r["s-sr"]&&(n=r["s-cr"])){t=n.parentNode.childNodes;a=r["s-sn"];for(s=t.length-1;s>=0;s--){n=t[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==r["s-hn"]){if(se(n,a)){i=ae.find((function(e){return e.$nodeToRelocate$===n}));o=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=r}else{ae.push({$slotRefNode$:r,$nodeToRelocate$:n})}if(n["s-sr"]){ae.map((function(e){if(se(e.$nodeToRelocate$,n["s-sn"])){i=ae.find((function(e){return e.$nodeToRelocate$===n}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ae.some((function(e){return e.$nodeToRelocate$===n}))){ae.push({$nodeToRelocate$:n})}}}}if(r.nodeType===1){ie(r)}}};var se=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var le=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(le)}};var oe=function(e,r){var n=e.$hostElement$;var t=e.$cmpMeta$;var $=e.$vnode$||U(null,null);var u=D(r)?r:z(null,null,r);s=n.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=n;{a=n["s-sc"]}{i=n["s-cr"];l=(t.$flags$&1)!==0;o=false}ne($,u);{p.$flags$|=1;if(f){ie(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var m=void 0;var g=void 0;var y=void 0;var b=0;for(;b<ae.length;b++){c=ae[b];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(b=0;b<ae.length;b++){c=ae[b];v=c.$nodeToRelocate$;if(c.$slotRefNode$){m=c.$slotRefNode$.parentNode;g=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){y=d["s-nr"];if(y&&y["s-sn"]===v["s-sn"]&&m===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&m!==v.parentNode||v.nextSibling!==g){if(v!==g){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}m.insertBefore(v,g)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(o){te(u.$elm$)}p.$flags$&=~1;ae.length=0}};var fe=e("g",(function(e){return Me(e).$hostElement$}));var $e=e("c",(function(e,r,n){var t=fe(e);return{emit:function(e){return ue(t,r,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var ue=function(e,r,n){var t=p.ce(r,n);e.dispatchEvent(t);return t};var ce=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ve=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ce(e,e.$ancestorComponent$);var n=function(){return de(e,r)};return Je(n)};var de=function(e,r){var n=R("scheduleUpdate",e.$cmpMeta$.$tagName$);var t=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],n=e[1];return be(t,r,n)}));e.$queuedListeners$=null}}{a=be(t,"componentWillLoad")}}n();return we(a,(function(){return he(e,t,r)}))};var he=function(e,r,n){var t=e.$hostElement$;var a=R("update",e.$cmpMeta$.$tagName$);var i=t["s-rc"];if(n){C(e)}var s=R("render",e.$cmpMeta$.$tagName$);{{oe(e,pe(e,r))}}if(p.$cssShim$){p.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}s();a();{var l=t["s-p"];var o=function(){return me(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}};var pe=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(n){Be(n)}return r};var me=function(e){var r=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var t=R("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Ne(n)}{be(a,"componentDidLoad")}t();{e.$onReadyResolve$(n);if(!i){ye()}}}else{t()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Qe((function(){return ve(e,false)}))}e.$flags$&=~(4|512)}};var ge=function(e){{var r=Me(e);var n=r.$hostElement$.isConnected;if(n&&(r.$flags$&(2|16))===2){ve(r,false)}return n}};var ye=function(e){{Ne(h.documentElement)}{p.$flags$|=2}Qe((function(){return ue(v,"appload",{detail:{namespace:t}})}))};var be=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){Be(t)}}return undefined};var we=function(e,r){return e&&e.then?e.then(r):r()};var Ne=function(e){return e.classList.add("hydrated")};var Se=function(e,r){if(e!=null&&!j(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Re=function(e,r){return Me(e).$instanceValues$.get(r)};var _e=function(e,r,n,t){var a=Me(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;n=Se(n,t.$members$[r][0]);if((!(s&8)||i===undefined)&&n!==i){a.$instanceValues$.set(r,n);if(l){if(t.$watchers$&&s&128){var o=t.$watchers$[r];if(o){o.map((function(e){try{l[e](n,i,r)}catch(t){Be(t)}}))}}if((s&(2|16))===2){ve(a,false)}}}};var xe=function(e,r,n){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var t=Object.entries(r.$members$);var a=e.prototype;t.map((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return Re(this,t)},set:function(e){_e(this,t,e,r)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,t,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=Me(this);return n.$onInstancePromise$.then((function(){var r;return(r=n.$lazyInstance$)[t].apply(r,e)}))}})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;p.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var ke=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var e,n,a,s,l,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=qe(t);if(!i.then)return[3,2];e=_();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){{t.$watchers$=i.watchers}xe(i,t,2);i.isProxied=true}n=R("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){Be(u)}{r.$flags$&=~8}{r.$flags$|=128}n();if(i.style){a=i.style;s=T(t);if(!ze.has(s)){l=R("registerStyles",t.$tagName$);k(s,a,!!(t.$flags$&1));l()}}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return ve(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var Le=function(e){if((p.$flags$&1)===0){var r=Me(e);var n=r.$cmpMeta$;var t=R("connectedCallback",n.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(n.$flags$&(4|8)){Ce(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ce(r,r.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{Qe((function(){return ke(e,r,n)}))}}else{y(e,r,n.$listeners$)}t()}};var Ce=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Te=function(e){if((p.$flags$&1)===0){var r=Me(e);var n=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(p.$cssShim$){p.$cssShim$.removeHost(e)}{be(n,"componentDidUnload")}}};var Pe=e("b",(function(e,r){if(r===void 0){r={}}var n=R();var t=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var l=s.querySelector("meta[charset]");var o=h.createElement("style");var f=[];var $;var u=true;Object.assign(p,r);p.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){p.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}{n.$watchers$={}}var s=n.$tagName$;var l=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;Ae(r,n);return t}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{p.jmp((function(){return Le(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return Te(e)}))};r.prototype.forceUpdate=function(){ge(this)};r.prototype.componentOnReady=function(){return Me(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){t.push(s);i.define(s,xe(l,n,1))}}))}));{o.innerHTML=t+S;o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return $=setTimeout(ye,30)}))}}n()}));var Ee=new WeakMap;var Me=function(e){return Ee.get(e)};var je=e("r",(function(e,r){return Ee.set(r.$lazyInstance$=e,r)}));var Ae=function(e,r){var n={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}y(e,n,r.$listeners$);return Ee.set(e,n)};var Ie=function(e,r){return r in e};var Be=function(e){return console.error(e)};var Oe=new Map;var qe=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Oe.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Oe.set(i,e)}return e[a]}),Be)};var ze=new Map;var Ue=[];var He=[];var De=[];var Ve=function(e,r){return function(n){e.push(n);if(!c){c=true;if(r&&p.$flags$&4){Qe(Ge)}else{p.raf(Ge)}}}};var We=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){Be(n)}}e.length=0};var Fe=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){Be(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var Ge=function(){{u++}We(Ue);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Fe(He,e);Fe(De,e);if(He.length>0){De.push.apply(De,He);He.length=0}if(c=Ue.length+He.length+De.length>0){p.raf(Ge)}else{u=0}}};var Qe=function(e){return m().then(e)};var Je=Ve(He,true)}}}));