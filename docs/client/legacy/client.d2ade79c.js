import{_ as t,s as e,n as r,a as n,b as o,c as a,d as i,i as s,e as c,S as u,f,t as l,g as h,h as p,j as v,k as d,l as m,m as g,o as y,p as w,q as b,r as x,u as $,v as E,w as L,x as S,y as _,z as k,A as P,B as R,C as j,D as O,E as N,F as A,G as q,H as C,I as U,J as G,K as I,L as T}from"./index.a1baedf0.js";import{c as F,_ as H}from"./_commonjsHelpers.440d1922.js";var D=F(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function m(){}function g(){}function y(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(R([])));x&&x!==n&&o.call(x,i)&&(w=x);var $=y.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(e){var r;this._invoke=function(n,a){function i(){return new Promise(function(r,i){!function r(n,a,i,s){var c=f(e[n],e,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===t(l)&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,i,s)},function(t){r("throw",t,i,s)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,s)})}s(c.arg)}(n,a,r,i)})}return r=r?r.then(i,i):i()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:r,done:!0}}return g.prototype=$.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[s]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,o){var a=new L(u(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E($),$[c]="Generator",$[i]=function(){return this},$.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}});function J(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function B(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){J(a,n,o,i,s,"next",t)}function s(t){J(a,n,o,i,s,"throw",t)}i(void 0)})}}var K=[];function V(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=[];function i(r){if(e(t,r)&&(t=r,n)){for(var o=!K.length,i=0;i<a.length;i+=1){var s=a[i];s[1](),K.push(s,t)}if(o){for(var c=0;c<K.length;c+=2)K[c][0](K[c+1]);K.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(e){var s=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:r];return a.push(s),1===a.length&&(n=o(i)||r),e(t),function(){var t=a.indexOf(s);-1!==t&&a.splice(t,1),0===a.length&&(n(),n=null)}}}}var Y={},z=function(){return{}};function M(t){var e,n,o,a;return{c:function(){e=f("nav"),n=f("a"),o=f("strong"),a=l("Home"),this.h()},l:function(t){e=h(t,"NAV",{class:!0});var r=p(e);n=h(r,"A",{class:!0,href:!0});var i=p(n);o=h(i,"STRONG",{});var s=p(o);a=v(s,"Home"),s.forEach(d),i.forEach(d),r.forEach(d),this.h()},h:function(){m(n,"class",""),m(n,"href","."),g(n,"text-secondary",void 0===t[0]),m(e,"class","bg-dark shadow text-muted\tmb-3 rounded-sm p-3")},m:function(t,r){y(t,e,r),w(e,n),w(n,o),w(o,a)},p:function(t,e){1&H(e,1)[0]&&g(n,"text-secondary",void 0===t[0])},i:r,o:r,d:function(t){t&&d(e)}}}function W(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var X=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(c(n),t,W,M,e,{segment:0}),n}return n(r,u),r}();function Q(t){var e,r,n,o=new X({props:{segment:t[0]}}),a=t[2].default,i=b(a,t,t[1],null);return{c:function(){x(o.$$.fragment),e=$(),r=f("main"),i&&i.c()},l:function(t){E(o.$$.fragment,t),e=L(t),r=h(t,"MAIN",{});var n=p(r);i&&i.l(n),n.forEach(d)},m:function(t,a){S(o,t,a),y(t,e,a),y(t,r,a),i&&i.m(r,null),n=!0},p:function(t,e){var r=H(e,1)[0],n={};1&r&&(n.segment=t[0]),o.$set(n),i&&i.p&&2&r&&i.p(_(a,t,t[1],null),k(a,t[1],r,null))},i:function(t){n||(P(o.$$.fragment,t),P(i,t),n=!0)},o:function(t){R(o.$$.fragment,t),R(i,t),n=!1},d:function(t){j(o,t),t&&d(e),t&&d(r),i&&i.d(t)}}}function Z(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var tt=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(c(n),t,Z,Q,e,{segment:0}),n}return n(r,u),r}();function et(t){var e,r,n=t[1].stack+"";return{c:function(){e=f("pre"),r=l(n)},l:function(t){e=h(t,"PRE",{});var o=p(e);r=v(o,n),o.forEach(d)},m:function(t,n){y(t,e,n),w(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&O(r,n)},d:function(t){t&&d(e)}}}function rt(t){var e,n,o,a,i,s,c,u,g,b=t[1].message+"";document.title=e=t[0];var x=t[2]&&t[1].stack&&et(t);return{c:function(){n=$(),o=f("h1"),a=l(t[0]),i=$(),s=f("p"),c=l(b),u=$(),x&&x.c(),g=N(),this.h()},l:function(e){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),n=L(e),o=h(e,"H1",{class:!0});var r=p(o);a=v(r,t[0]),r.forEach(d),i=L(e),s=h(e,"P",{class:!0});var f=p(s);c=v(f,b),f.forEach(d),u=L(e),x&&x.l(e),g=N(),this.h()},h:function(){m(o,"class","svelte-8od9u6"),m(s,"class","svelte-8od9u6")},m:function(t,e){y(t,n,e),y(t,o,e),w(o,a),y(t,i,e),y(t,s,e),w(s,c),y(t,u,e),x&&x.m(t,e),y(t,g,e)},p:function(t,r){var n=H(r,1)[0];1&n&&e!==(e=t[0])&&(document.title=e),1&n&&O(a,t[0]),2&n&&b!==(b=t[1].message+"")&&O(c,b),t[2]&&t[1].stack?x?x.p(t,n):((x=et(t)).c(),x.m(g.parentNode,g)):x&&(x.d(1),x=null)},i:r,o:r,d:function(t){t&&d(n),t&&d(o),t&&d(i),t&&d(s),t&&d(u),x&&x.d(t),t&&d(g)}}}function nt(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var ot=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(c(n),t,nt,rt,e,{status:0,error:1}),n}return n(r,u),r}();function at(t){var e,r,n=[t[4].props],o=t[4].component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=q(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&x(i.$$.fragment),e=N()},l:function(t){i&&E(i.$$.fragment,t),e=N()},m:function(t,n){i&&S(i,t,n),y(t,e,n),r=!0},p:function(t,r){var s=16&r?C(n,[U(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){I();var c=i;R(c.$$.fragment,1,0,function(){j(c,1)}),T()}o?(i=new o(a()),x(i.$$.fragment),P(i.$$.fragment,1),S(i,e.parentNode,e)):i=null}else o&&i.$set(s)},i:function(t){r||(i&&P(i.$$.fragment,t),r=!0)},o:function(t){i&&R(i.$$.fragment,t),r=!1},d:function(t){t&&d(e),i&&j(i,t)}}}function it(t){var e,r=new ot({props:{error:t[0],status:t[1]}});return{c:function(){x(r.$$.fragment)},l:function(t){E(r.$$.fragment,t)},m:function(t,n){S(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(P(r.$$.fragment,t),e=!0)},o:function(t){R(r.$$.fragment,t),e=!1},d:function(t){j(r,t)}}}function st(t){var e,r,n,o,a=[it,at],i=[];function s(t,e){return t[0]?0:1}return e=s(t),r=i[e]=a[e](t),{c:function(){r.c(),n=N()},l:function(t){r.l(t),n=N()},m:function(t,r){i[e].m(t,r),y(t,n,r),o=!0},p:function(t,o){var c=e;(e=s(t))===c?i[e].p(t,o):(I(),R(i[c],1,1,function(){i[c]=null}),T(),(r=i[e])||(r=i[e]=a[e](t)).c(),P(r,1),r.m(n.parentNode,n))},i:function(t){o||(P(r),o=!0)},o:function(t){R(r),o=!1},d:function(t){i[e].d(t),t&&d(n)}}}function ct(t){for(var e,r=[{segment:t[2][0]},t[3].props],n={$$slots:{default:[st]},$$scope:{ctx:t}},o=0;o<r.length;o+=1)n=q(n,r[o]);var a=new tt({props:n});return{c:function(){x(a.$$.fragment)},l:function(t){E(a.$$.fragment,t)},m:function(t,r){S(a,t,r),e=!0},p:function(t,e){var n=H(e,1)[0],o=12&n?C(r,[4&n&&{segment:t[2][0]},8&n&&U(t[3].props)]):{};83&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o)},i:function(t){e||(P(a.$$.fragment,t),e=!0)},o:function(t){R(a.$$.fragment,t),e=!1},d:function(t){j(a,t)}}}function ut(t,e,r){var n=e.stores,o=e.error,a=e.status,i=e.segments,s=e.level0,c=e.level1,u=void 0===c?null:c;return G(Y,n),t.$set=function(t){"stores"in t&&r(5,n=t.stores),"error"in t&&r(0,o=t.error),"status"in t&&r(1,a=t.status),"segments"in t&&r(2,i=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,u=t.level1)},[o,a,i,s,u,n]}var ft=function(t){function r(t){var n;return o(this,r),n=a(this,i(r).call(this)),s(c(n),t,ut,ct,e,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return n(r,u),r}(),lt=[],ht=[{js:function(){return import("./index.9500159e.js")},css:[]},{js:function(){return import("./about.f81da55d.js")},css:[]}],pt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];function vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=At(new URL(t,document.baseURI));return r?(jt[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),Ct(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var dt,mt,gt,yt,wt,bt="undefined"!=typeof __SAPPER__&&__SAPPER__,xt=!1,$t=[],Et="{}",Lt={page:V({}),preloading:V(null),session:V(bt&&bt.session)};Lt.session.subscribe(function(){var t=B(D.mark(function t(e){var r,n,o,a,i,s;return D.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(yt=e,xt){t.next=3;break}return t.abrupt("return");case 3:return wt=!0,r=At(new URL(location.href)),n=mt={},t.next=8,Ft(r);case 8:if(o=t.sent,a=o.redirect,i=o.props,s=o.branch,n===mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Gt(a,s,i,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var St,_t=null;var kt,Pt=1;var Rt,jt="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},Ot={};function Nt(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),o=H(n,3),a=o[1],i=o[2],s=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(s):r[a]=s}),r}function At(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(bt.baseUrl))return null;var e=t.pathname.slice(bt.baseUrl.length);if(""===e&&(e="/"),!lt.some(function(t){return t.test(e)}))for(var r=0;r<pt.length;r+=1){var n=pt[r],o=n.pattern.exec(e);if(o){var a=Nt(t.search),i=n.parts[n.parts.length-1],s=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:s};return{href:t.href,route:n,match:o,page:c}}}}function qt(){return{x:pageXOffset,y:pageYOffset}}function Ct(t,e,r,n){return Ut.apply(this,arguments)}function Ut(){return(Ut=B(D.mark(function t(e,r,n,o){var a,i,s,c,u,f,l,h,p;return D.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?kt=r:(a=qt(),Ot[kt]=a,r=kt=++Pt,Ot[kt]=n?a:{x:0,y:0}),kt=r,dt&&Lt.preloading.set(!0),i=_t&&_t.href===e.href?_t.promise:Ft(e),_t=null,s=mt={},t.next=8,i;case 8:if(c=t.sent,u=c.redirect,f=c.props,l=c.branch,s===mt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,Gt(u,l,f,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=Ot[r],o&&(p=document.getElementById(o.slice(1)))&&(h={x:0,y:p.getBoundingClientRect().top}),Ot[kt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Gt(t,e,r,n){return It.apply(this,arguments)}function It(){return(It=B(D.mark(function t(e,r,n,o){var a,i;return D.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",vt(e.location,{replaceState:!0}));case 2:if(Lt.page.set(o),Lt.preloading.set(!1),!dt){t.next=8;break}dt.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:Lt.page.subscribe},preloading:{subscribe:Lt.preloading.subscribe},session:Lt.session},t.next=11,gt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),i=document.querySelector("#sapper-head-end"),a&&i){for(;a.nextSibling!==i;)Bt(a.nextSibling);Bt(a),Bt(i)}dt=new ft({target:St,props:n,hydrate:!0});case 17:$t=r,Et=JSON.stringify(o.query),xt=!0,wt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function Tt(t,e,r,n){if(n!==Et)return!0;var o=$t[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function Ft(t){return Ht.apply(this,arguments)}function Ht(){return(Ht=B(D.mark(function t(e){var r,n,o,a,i,s,c,u,f,l,h;return D.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,i={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){i.error="string"==typeof e?new Error(e):e,i.status=t}},gt||(gt=bt.preloaded[0]||z.call(s,{host:n.host,path:n.path,query:n.query,params:{}},yt)),u=1,t.prev=7,f=JSON.stringify(n.query),l=r.pattern.exec(n.path),h=!1,t.next=13,Promise.all(r.parts.map(function(){var t=B(D.mark(function t(r,a){var c,p,v,d,m,g;return D.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[a],Tt(a,c,l,f)&&(h=!0),i.segments[u]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(p=u++,wt||h||!$t[a]||$t[a].part!==r.i){t.next=8;break}return t.abrupt("return",$t[a]);case 8:return h=!1,t.next=11,Jt(ht[r.i]);case 11:if(v=t.sent,d=v.default,m=v.preload,!xt&&bt.preloaded[a+1]){t.next=25;break}if(!m){t.next=21;break}return t.next=18,m.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},yt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=bt.preloaded[a+1];case 26:return t.abrupt("return",i["level".concat(p)]={component:d,props:g,segment:c,match:l,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:c=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),i.error=t.t0,i.status=500,c=[];case 21:return t.abrupt("return",{redirect:a,props:i,branch:c});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function Dt(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function Jt(t){var e="string"==typeof t.css?[]:t.css.map(Dt);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function Bt(t){t.parentNode.removeChild(t)}function Kt(t){var e=At(new URL(t,document.baseURI));if(e)return _t&&t===_t.href||function(t,e){_t={href:t,promise:e}}(t,Ft(e)),_t.promise}function Vt(t){clearTimeout(Rt),Rt=setTimeout(function(){Yt(t)},20)}function Yt(t){var e=Mt(t.target);e&&"prefetch"===e.rel&&Kt(e.href)}function zt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Mt(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=At(a);if(i)Ct(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),jt.pushState({id:kt},"",a.href)}}}else location.hash||e.preventDefault()}}}function Mt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wt(t){if(Ot[kt]=qt(),t.state){var e=At(new URL(location.href));e?Ct(e,t.state.id):location.href=location.href}else(function(t){kt=t})(Pt=Pt+1),jt.replaceState({id:kt},"",location.href)}!function(t){var e;"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),e=t.target,St=e,addEventListener("click",zt),addEventListener("popstate",Wt),addEventListener("touchstart",Yt),addEventListener("mousemove",Vt),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;jt.replaceState({id:Pt},"",r);var n,o,a,i,s,c,u,f,l=new URL(location.href);if(bt.error)return n=location,o=n.host,a=n.pathname,i=n.search,s=bt.session,c=bt.preloaded,u=bt.status,f=bt.error,gt||(gt=c&&c[0]),void Gt(null,[],{error:f,status:u,session:s,level0:{props:gt},level1:{props:{status:u,error:f},component:ot},segments:c},{host:o,path:a,query:Nt(i),params:{}});var h=At(l);return h?Ct(h,Pt,!0,e):void 0})}({target:document.querySelector("#sapper")});
