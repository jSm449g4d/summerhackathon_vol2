!function(e){var n={};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=7)}([function(e,n){e.exports=React},function(e,n){e.exports=Recharts},function(e,n){e.exports=ReactDOM},function(e,n,a){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var a=function(e,n){var a=e[1]||"",t=e[3];if(!t)return a;if(n&&"function"==typeof btoa){var r=(i=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[a].concat(o).concat([r]).join("\n")}var i,s,l;return[a].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(a,"}"):a})).join("")},n.i=function(e,a,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),n.push(l))}},n}},function(e,n,a){var t=a(5),r=a(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};t(r,o);e.exports=r.locals||{}},function(e,n,a){"use strict";var t,r=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var e={};return function(n){if(void 0===e[n]){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[n]=a}return e[n]}}(),i=[];function s(e){for(var n=-1,a=0;a<i.length;a++)if(i[a].identifier===e){n=a;break}return n}function l(e,n){for(var a={},t=[],r=0;r<e.length;r++){var o=e[r],l=n.base?o[0]+n.base:o[0],c=a[l]||0,A="".concat(l," ").concat(c);a[l]=c+1;var d=s(A),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(m)):i.push({identifier:A,updater:p(m,n),references:1}),t.push(A)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var r=a.nc;r&&(t.nonce=r)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var A,d=(A=[],function(e,n){return A[e]=n,A.filter(Boolean).join("\n")});function m(e,n,a,t){var r=a?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var o=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function C(e,n,a){var t=a.css,r=a.media,o=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,u=0;function p(e,n){var a,t,r;if(n.singleton){var o=u++;a=f||(f=c(n)),t=m.bind(null,a,o,!1),r=m.bind(null,a,o,!0)}else a=c(n),t=C.bind(null,a,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var a=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<a.length;t++){var r=s(a[t]);i[r].references--}for(var o=l(e,n),c=0;c<a.length;c++){var A=s(a[c]);0===i[A].references&&(i[A].updater(),i.splice(A,1))}a=o}}}},function(e,n,a){"use strict";a.r(n);var t=a(3),r=a.n(t)()(!0);r.push([e.i,".fadein-0{animation:fadein 0s ease 0s 1 normal}.fadein-1{animation:fadein 1s ease 0s 1 normal}.fadein-2{animation:fadein 2s ease 0s 1 normal}.fadein-3{animation:fadein 3s ease 0s 1 normal}.fadein-4{animation:fadein 4s ease 0s 1 normal}.fadein-5{animation:fadein 5s ease 0s 1 normal}.fadein-6{animation:fadein 6s ease 0s 1 normal}.fadein-7{animation:fadein 7s ease 0s 1 normal}.fadein-8{animation:fadein 8s ease 0s 1 normal}.fadein-9{animation:fadein 9s ease 0s 1 normal}@keyframes fadein{0%{opacity:0%}100%{opacity:100%}}.slidein-0{animation:slidein 0s ease 0s 1 normal}.slidein-1,.tptef-room{animation:slidein 1s ease 0s 1 normal}.slidein-2{animation:slidein 2s ease 0s 1 normal}.slidein-3{animation:slidein 3s ease 0s 1 normal}.slidein-4{animation:slidein 4s ease 0s 1 normal}.slidein-5{animation:slidein 5s ease 0s 1 normal}.slidein-6{animation:slidein 6s ease 0s 1 normal}.slidein-7{animation:slidein 7s ease 0s 1 normal}.slidein-8{animation:slidein 8s ease 0s 1 normal}.slidein-9{animation:slidein 9s ease 0s 1 normal}@keyframes slidein{0%{transform:translateX(400px)}100%{transform:translateX(0px) translateY(0px) rotate(0deg)}}.slidein-0-reverse{animation:slidein-reverse 0s ease 0s 1 normal}.slidein-1-reverse{animation:slidein-reverse 1s ease 0s 1 normal}.slidein-2-reverse{animation:slidein-reverse 2s ease 0s 1 normal}.slidein-3-reverse{animation:slidein-reverse 3s ease 0s 1 normal}.slidein-4-reverse{animation:slidein-reverse 4s ease 0s 1 normal}.slidein-5-reverse{animation:slidein-reverse 5s ease 0s 1 normal}.slidein-6-reverse{animation:slidein-reverse 6s ease 0s 1 normal}.slidein-7-reverse{animation:slidein-reverse 7s ease 0s 1 normal}.slidein-8-reverse{animation:slidein-reverse 8s ease 0s 1 normal}.slidein-9-reverse{animation:slidein-reverse 9s ease 0s 1 normal}@keyframes slidein-reverse{0%{transform:translateX(-400px)}100%{transform:translateX(0px) translateY(0px) rotate(0deg)}}.rotxin-0{animation:rotxin 0s ease 0s 1 normal}.rotxin-1{animation:rotxin 1s ease 0s 1 normal}.rotxin-2{animation:rotxin 2s ease 0s 1 normal}.rotxin-3{animation:rotxin 3s ease 0s 1 normal}.rotxin-4{animation:rotxin 4s ease 0s 1 normal}.rotxin-5{animation:rotxin 5s ease 0s 1 normal}.rotxin-6{animation:rotxin 6s ease 0s 1 normal}.rotxin-7{animation:rotxin 7s ease 0s 1 normal}.rotxin-8{animation:rotxin 8s ease 0s 1 normal}.rotxin-9{animation:rotxin 9s ease 0s 1 normal}@keyframes rotxin{0%{transform:rotateX(-800deg)}100%{transform:rotateX(0deg)}}.titlelogo{font-family:Century;color:darkcyan;background-color:rgba(140,30,30,0.1);font-weight:bold;border-top:solid 1px firebrick;border-bottom:solid 1px firebrick;text-shadow:4px 4px 1px rgba(60,60,60,0.3);animation:titlelogo-slidein 2s ease-out 0s 1 normal}@keyframes titlelogo-slidein{0%{transform:translateX(600px) translateY(150px) rotate(-30deg)}100%{transform:translateX(0px) translateY(0px) rotate(0deg)}}.blackboard{color:#CCFFFF;border:3px double silver;background:#011}.blackboard-transparent{color:#CCFFFF;border:3px double silver;background:rgba(0,17,17,0.8);padding:2px}.fa-btn,.fa-btn-help,.fa-btn-goldbadge{color:saddlebrown}.fa-btn:hover,.fa-btn-help:hover,.fa-btn-goldbadge:hover{transition:0.3s;color:midnightblue;cursor:pointer;animation:fa-btn-rotanime 0.5s ease infinite alternate}@keyframes fa-btn-rotanime{0%{transform:rotate(0deg)}100%{transform:rotate(-30deg)}}.fa-btn-help{color:darkorange}.fa-btn-help:hover{color:orangered}.fa-btn-goldbadge{color:gold}.fa-btn-goldbadge:hover{color:goldenrod}.a-nolink{color:black;text-decoration:none}.a-nolink:hover{color:black;text-decoration:none}.btn-push:hover,.btn-col:hover{transition:0.3s;transform:translate(2px, 2px);cursor:pointer}.btn-col{color:black;text-decoration:none;border:1px inset silver;border-radius:5px;background:linear-gradient(rgba(60,60,60,0), rgba(60,60,60,0.1));margin-bottom:3px;box-shadow:2px 2px 1px rgba(60,60,60,0.2)}.btn-col:hover{background-color:rgba(30,30,30,0.2);box-shadow:2px 2px 1px rgba(60,60,60,0) 5px}.tptef-room{border-top:solid 1px darkred;border-bottom:solid 1px darkred}.flask-icon{transition:0.3s;animation:fa-btn-rotanime 0.5s ease infinite alternate}@keyframes fa-btn-rotanime{0%{transform:rotate(15deg)}100%{transform:rotate(-15deg)}}\n","",{version:3,sources:["webpack://tsx/stylecheets/style.sass"],names:[],mappings:"AAKE,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAAG,kBAE/C,GACE,UAAW,CACb,KACE,YAAa,CAAA,CAGf,WACE,qCAA2C,CAD7C,uBACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAD7C,WACE,qCAA2C,CAAG,mBAEhD,GACE,2BAA4B,CAC9B,KACE,sDAAuD,CAAA,CAGzD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CADrD,mBACE,6CAAmD,CAAG,2BAExD,GACE,4BAA6B,CAC/B,KACE,sDAAuD,CAAA,CAGzD,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAD5C,UACE,oCAA0C,CAAG,kBAE/C,GACE,0BAA2B,CAC7B,KACE,uBAAwB,CAAA,CAE5B,WACE,mBAAoB,CACpB,cAAe,CACf,oCAAqC,CACrC,gBAAiB,CACjB,8BAA+B,CAC/B,iCAAkC,CAClC,0CAA2C,CAC3C,mDAAoD,CAAG,6BAEvD,GACE,4DAA6D,CAC/D,KACE,sDAAuD,CAAA,CAE3D,YACE,aAAc,CACd,wBAAyB,CACzB,eAA2B,CACd,wBAGb,aAAc,CACd,wBAAyB,CACzB,4BAA6B,CAC7B,WAAY,CAAG,uCAGf,iBAAkB,CAAG,yDAErB,eAAgB,CAChB,kBAAmB,CACnB,cAAe,CACf,sDAAuD,CAAG,2BAE1D,GACE,sBAAuB,CACzB,KACE,wBAAyB,CAAA,CAC7B,aAEE,gBAAiB,CAAG,mBAEpB,eAAgB,CAAG,kBAGnB,UAAW,CAAG,wBAEd,eAAgB,CAAG,UAGnB,WAAY,CACZ,oBAAqB,CAAG,gBAExB,WAAY,CACZ,oBAAqB,CAAG,+BAGxB,eAAgB,CAChB,6BAA6B,CAC7B,cAAe,CAAG,SAGlB,WAAY,CACZ,oBAAqB,CACrB,uBAAwB,CACxB,iBAAkB,CAClB,gEAAiE,CACjE,iBAAkB,CAClB,yCAA0C,CAAG,eAE7C,mCAAoC,CACpC,2CAA2C,CACvB,YAIpB,4BAA6B,CAC7B,+BAAgC,CAAG,YAGnC,eAAgB,CAChB,sDAAuD,CAAG,2BAE1D,GACE,uBAAwB,CAC1B,KACE,wBAAyB,CAAA",sourcesContent:["\n$zero: 0;\n$nine: 9;\n\n@for $i from $zero through $nine {\n  .fadein-#{$i} {\n    animation: fadein #{$i}s ease 0s 1 normal; } }\n@keyframes fadein {\n  0% {\n    opacity: 0%; }\n  100% {\n    opacity: 100%; } }\n\n@for $i from $zero through $nine {\n  .slidein-#{$i} {\n    animation: slidein #{$i}s ease 0s 1 normal; } }\n@keyframes slidein {\n  0% {\n    transform: translateX(400px); }\n  100% {\n    transform: translateX(0px) translateY(0px) rotate(0deg); } }\n\n@for $i from $zero through $nine {\n  .slidein-#{$i}-reverse {\n    animation: slidein-reverse #{$i}s ease 0s 1 normal; } }\n@keyframes slidein-reverse {\n  0% {\n    transform: translateX(-400px); }\n  100% {\n    transform: translateX(0px) translateY(0px) rotate(0deg); } }\n\n@for $i from $zero through $nine {\n  .rotxin-#{$i} {\n    animation: rotxin #{$i}s ease 0s 1 normal; } }\n@keyframes rotxin {\n  0% {\n    transform: rotateX(-800deg); }\n  100% {\n    transform: rotateX(0deg); } }\n\n.titlelogo {\n  font-family: Century;\n  color: darkcyan;\n  background-color: rgba(140,30,30,0.1);\n  font-weight: bold;\n  border-top: solid 1px firebrick;\n  border-bottom: solid 1px firebrick;\n  text-shadow: 4px 4px 1px rgba(60,60,60,0.3);\n  animation: titlelogo-slidein 2s ease-out 0s 1 normal; }\n@keyframes titlelogo-slidein {\n  0% {\n    transform: translateX(600px) translateY(150px) rotate(-30deg); }\n  100% {\n    transform: translateX(0px) translateY(0px) rotate(0deg); } }\n\n.blackboard {\n  color: #CCFFFF;\n  border: 3px double silver;\n  background: rgba(0,17,17,1);\n  padding: {} }\n\n.blackboard-transparent {\n  color: #CCFFFF;\n  border: 3px double silver;\n  background: rgba(0,17,17,0.8);\n  padding: 2px; }\n\n.fa-btn {\n  color: saddlebrown; }\n.fa-btn:hover {\n  transition: 0.3s;\n  color: midnightblue;\n  cursor: pointer;\n  animation: fa-btn-rotanime 0.5s ease infinite alternate; }\n@keyframes fa-btn-rotanime {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(-30deg); } }\n.fa-btn-help {\n  @extend .fa-btn;\n  color: darkorange; }\n.fa-btn-help:hover {\n  color: orangered; }\n.fa-btn-goldbadge {\n  @extend .fa-btn;\n  color: gold; }\n.fa-btn-goldbadge:hover {\n  color: goldenrod; }\n\n.a-nolink {\n  color: black;\n  text-decoration: none; }\n.a-nolink:hover {\n  color: black;\n  text-decoration: none; }\n\n.btn-push:hover {\n  transition: 0.3s;\n  transform: translate(2px,2px);\n  cursor: pointer; }\n\n.btn-col {\n  color: black;\n  text-decoration: none;\n  border: 1px inset silver;\n  border-radius: 5px;\n  background: linear-gradient(rgba(60,60,60,0), rgba(60,60,60,0.1));\n  margin-bottom: 3px;\n  box-shadow: 2px 2px 1px rgba(60,60,60,0.2); }\n.btn-col:hover {\n  background-color: rgba(30,30,30,0.2);\n  box-shadow: 2px 2px 1px rgba(60,60,60,0)5px;\n  @extend .btn-push; }\n\n.tptef-room {\n  @extend .slidein-1;\n  border-top: solid 1px darkred;\n  border-bottom: solid 1px darkred; }\n\n.flask-icon {\n  transition: 0.3s;\n  animation: fa-btn-rotanime 0.5s ease infinite alternate; }\n@keyframes fa-btn-rotanime {\n  0% {\n    transform: rotate(15deg); }\n  100% {\n    transform: rotate(-15deg); } }\n"],sourceRoot:""}]),n.default=r},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(2),i=a.n(o),s=(a(4),a(1));document.body.insertAdjacentHTML("beforeend",'<div id="AppMain">AppWidgetHead loading...</div>'),i.a.render(r.a.createElement(()=>{console.log("れんだりんぐ");const[e,n]=Object(t.useState)(""),[a,o]=Object(t.useState)(""),[i,l]=Object(t.useState)([]),[c,A]=Object(t.useState)("キーワードを入力してください"),d=()=>{A("searching");const n=new XMLHttpRequest;n.open("POST","/sh2_api.py",!0),n.ontimeout=()=>console.error("The request timed out."),n.onload=()=>{4===n.readyState&&200===n.status&&console.log(n.responseText);const e=JSON.parse(n.responseText);l((e=>{const n=[],a=e,t=Object.keys(a).length;if(0==t)return A("検索結果がありませんでした"),[];A("");for(let e=0;e<t;e++){const t=a[Object.keys(a)[e]];n.push({date:[Object.keys(a)[e]],num:t.length,arts:t})}return n.sort((e,n)=>parseInt(String(e.date).replace(/[^0-9^\.]/g,""))-parseInt(String(n.date).replace(/[^0-9^\.]/g,""))),o(Object.keys(a)[0]),n})(e))},n.timeout=5e3,n.send(JSON.stringify({kensaku:e}))};return r.a.createElement("div",{className:"p-2 bg-light"},r.a.createElement("div",{id:"App-widget-head"},r.a.createElement("div",{className:"row p-1 px-3"},r.a.createElement("div",{className:"col-sm-12 col-lg-8 p-1"},r.a.createElement("div",{className:"d-flex justify-content-center justify-content-lg-start"},r.a.createElement("a",{className:"a-nolink",onClick:e=>{window.location.href="https://tech-study-group.connpass.com/event/187008/"}},r.a.createElement("h2",{className:"slidein-2 btn-push",style:{fontFamily:"Impact",color:"indigo"}},r.a.createElement("i",{className:"fas fa-book mr-1"}),"2020年 サマーハッカソンvol2")))),r.a.createElement("div",{className:"col-sm-12 col-lg-4 p-1"},r.a.createElement("div",{className:"d-flex justify-content-center justify-content-lg-end"},r.a.createElement("h4",{className:"titlelogo"},"チーム: =はじめてのFlask="))),r.a.createElement("div",{className:"col-12 p-1"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h4",{style:{fontFamily:"Courier",color:"darkgreen"}},r.a.createElement("i",{className:"fas fa-flask fa-lg flask-icon mr-1"}),"Flask通信"))))),r.a.createElement("div",{className:"text-center",style:{border:"3px double silver",backgroundColor:"rgba(230,230,250,0.5)"}},"「時間を軸とした、ホットのキーワードの可視化」をおこなうアプリです!",r.a.createElement("br",null),"キーワード検索で、何時どれだけ記事にされたのか、どんな記事があったのかが分かります!",r.a.createElement("br",null),r.a.createElement("div",{className:"text-center slidein-2-reverse",style:{backgroundColor:"rgba(250,250,250,0.8)"}},"使用技術:",r.a.createElement("i",{className:"fab fa-python mx-1"}),":Flask/Python",r.a.createElement("i",{className:"fab fa-react mx-1"}),"(React/Typescript)",r.a.createElement("i",{className:"fab fa-bootstrap mx-1"}),r.a.createElement("i",{className:"fab fa-sass mx-1"}),r.a.createElement("i",{className:"fab fa-docker mx-1"})),r.a.createElement("button",{className:"btn btn-link btn-push",onClick:()=>{window.location.href="https://github.com/jSm449g4d/summerhackathon_vol2"}},r.a.createElement("i",{className:"fab fa-github mr-1"}),"Githubのリポジトリ")),r.a.createElement("div",{className:"m-1"},r.a.createElement("h5",null,"検索キーワード:"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"val1",value:e,placeholder:"検索する文字を入力してください",onChange:e=>{n(e.target.value)},onKeyPress:n=>{"Enter"==n.key&&""!=e&&d()}}),""==e?r.a.createElement("button",{className:"input-group-append btn btn-outline-primary btn-lg",disabled:!0},r.a.createElement("i",{className:"fas fa-search mr-1"}),"検索"):"searching"==c?r.a.createElement("button",{className:"input-group-append btn btn-outline-primary btn-lg",disabled:!0},r.a.createElement("i",{className:"fas fa-search mr-1"}),"検索中..."):r.a.createElement("button",{className:"input-group-append btn btn-outline-primary btn-lg",id:"index_kensaku_button",onClick:()=>{d()}},r.a.createElement("i",{className:"fas fa-search mr-1"}),"検索"))),"searching"==c?r.a.createElement("h3",{className:"text-center m-1"},r.a.createElement("i",{className:"fas fa-search m-1"}),"検索中..."):""!=c?r.a.createElement("h3",{className:"text-center m-1"},c):0<i.length?r.a.createElement("h3",{className:"text-center m-1"},"期間:",i[0].date,"~",i[i.length-1].date):r.a.createElement("div",null),r.a.createElement("div",null,i.length<1?r.a.createElement("div",null):r.a.createElement(s.ResponsiveContainer,{width:"99%",height:300},r.a.createElement(s.BarChart,{width:400,height:400,data:i},r.a.createElement(s.XAxis,{dataKey:"date"}),r.a.createElement(s.YAxis,{dataKey:"num",label:{value:"Number of articles",angle:-90,position:"insideLeft"}}),r.a.createElement(s.CartesianGrid,{stroke:"#ccc",strokeDasharray:"3 3"}),r.a.createElement(s.Tooltip,null),r.a.createElement(s.Bar,{dataKey:"num",fill:"#8884d8",style:{cursor:"pointer"},onClick:e=>{o(e.date)}},r.a.createElement(s.LabelList,{dataKey:"num",position:"top"}))))),r.a.createElement("div",{style:{border:"3px double silver",backgroundColor:"rgba(230,240,240,0.5)"}},(()=>{if(""==a)return r.a.createElement("div",null);const e=i.filter((e,n)=>{if(e.date==a)return!0});if(1!=e.length)return r.a.createElement("div",null);const n=[];n.push(r.a.createElement("h4",{className:"col-12 p-1 text-center",style:{backgroundColor:"rgba(250,250,250,0.8)"}},a,"の時間帯の記事"));for(let a=0;a<e[0].arts.length;a++)n.push(r.a.createElement("div",{className:"col-12 col-lg-6 p-1"},r.a.createElement("div",{className:"btn-col",style:{background:"rgba(255,255,255,0.6)"}},r.a.createElement("a",{className:"a-nolink",href:e[0].arts[a].url},r.a.createElement("div",{className:"d-flex flex-column",style:{height:"400px"}},r.a.createElement("h5",{className:"text-center"},e[0].arts[a].title),r.a.createElement("div",{className:"d-flex flex-column flex-grow-1"},r.a.createElement("img",{className:"img-fluid",src:e[0].arts[a].imageUrl,style:{height:150,objectFit:"contain"}}),e[0].arts[a].description))))));return n.push(r.a.createElement("div",{className:"col-12 p-1 text-center"},r.a.createElement("a",{className:"btn btn-lg btn-push btn-outline-primary",href:"#App-widget-head"},"↑トップへ戻る"))),r.a.createElement("div",{className:"row p-1 px-3"},n)})()),r.a.createElement("div",{id:"App-widget-foot"},r.a.createElement("div",{style:{color:"rgba(60,60,60,0)"}},"ゆゆうた　脱糞")))},null),document.getElementById("AppMain"))}]);
//# sourceMappingURL=main.js.map