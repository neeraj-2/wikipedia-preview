!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.wikipediaPreview=e():t.wikipediaPreview=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".wp-popup {\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  border: solid rgba(0, 0, 0, 0.05) 1px;\n  border-radius: 2px;\n  background-color: white;\n  box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.3), 0 0 1px 1px rgba(0, 0, 0, 0.05);\n  height: 200px;\n  width: auto;\n  z-index: 110;\n}\n.wp-popup * {\n  box-sizing: border-box;\n}\n.wp-popup .wp-article-preview {\n  display: flex;\n}\n.wp-popup .wp-article-preview .wp-text-content {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-title {\n  font-size: 20px;\n  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview {\n  font-size: 14px;\n  flex-grow: 1;\n  font-family: sans-serif;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  line-height: 20px;\n  max-height: 140px;\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview p:after {\n  content: ' ';\n  position: absolute;\n  bottom: 25px;\n  left: 10px;\n  right: 200px;\n  top: 160px;\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#ffffff', GradientType=0);\n  /* IE6-9 */\n}\n.wp-popup .wp-article-preview .wp-text-content .wp-preview .wp-link {\n  font-family: 'Linux Libertine';\n}\n.wp-popup .wp-article-preview .wp-image {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,p;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(w(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(w(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,l=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,h=0;function w(t,e){var n,r,i;if(e.singleton){var o=h++;n=v||(v=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],u=i[a.id];u&&(u.refs--,r.push(u))}t&&p(s(t,e),e);for(var c=0;c<r.length;c++){var l=r[c];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete i[l.id]}}}}},function(t,e,n){"use strict";n.r(e);var r=function(t,e){return e=e||{},new Promise((function(n,r){var i=new XMLHttpRequest,o=[],a=[],s={},p=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(JSON.parse(i.responseText))},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:p,headers:{keys:function(){return o},entries:function(){return a},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var u in i.open(e.method||"get",t,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){o.push(e=e.toLowerCase()),a.push([e,n]),s[e]=s[e]?s[e]+","+n:n})),n(p())},i.onerror=r,i.withCredentials="include"==e.credentials,e.headers)i.setRequestHeader(u,e.headers[u]);i.send(e.body||null)}))},i={},o={},a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;return void 0!==i[t]?Promise.resolve(i[t]):o[t]?o[t]:o[t]=n(t).then((function(t){return t.json()})).then((function(t){return e(t)})).then((function(e){return i[t]=e,e}))},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,r="https://".concat(t,".wikipedia.org/api/rest_v1/page/summary/").concat(encodeURIComponent(e));return n(r,(function(t){return"standard"===t.type&&("ltr"===t.dir&&{title:t.displaytitle,extractHtml:t.extract_html,pageUrl:t.content_urls.desktop.page,imgUrl:t.thumbnail?t.thumbnail.source:null})}))},p=function(t,e,n,r,i,o){var a,s="",p="";return a=t.x>i/2?n+t.right-e:n+t.left,t.y>o/2?p=o-t.top-r:s=r+t.bottom,{left:a,right:"",top:s,bottom:p}},u=function(t){return t?t+"px":t},c=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,r=n.document.createElement("div");r.setAttribute("dir","ltr"),r.classList.add("wp-popup"),r.style.visibility="hidden",t.appendChild(r);var i=function t(n){var i=n.toElement;i===e||r.contains(i)||(r.style.visibility="hidden",e.removeEventListener("mouseleave",t),e=null)};r.addEventListener("mouseleave",i);var o=function(t,o){r.innerHTML=t;var a=p(o.getBoundingClientRect(),r.offsetWidth,n.scrollX,n.scrollY,n.innerWidth,n.innerHeight);r.style.left=u(a.left),r.style.right=u(a.right),r.style.top=u(a.top),r.style.bottom=u(a.bottom),(e=o).addEventListener("mouseleave",i),r.style.visibility="visible"};return{show:o}},l={en:{wikipedia:"Wikipedia"},fr:{wikipedia:"Wikipédia"},es:{wikipedia:"Wikipedia"}},f=function(t,e){var n=e.imgUrl?'<div class="wp-image" style="background-image: url(\''.concat(e.imgUrl,"');\" />"):"",r=function(t,e){return(l[t]||l.en)[e]}(t,"wikipedia");return'\n\t\t<div class="wp-article-preview">\n\t\t\t<div class="wp-text-content">\n\t\t\t\t<div class="wp-title">'.concat(e.title,'</div>\n\t\t\t\t<div class="wp-preview">').concat(e.extractHtml,'</div>\n\t\t\t\t<a class="wp-link" href="').concat(e.pageUrl,'" target="_blank">').concat(r,"</a>\n\t\t\t</div>\n\t\t\t").concat(n,"\n\t\t</div>\n\t").trim()};n(0);function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.root,n=t.selector,r=t.lang,i=t.popupContainer,o=r||"en";e=e||document,n=n||"[data-wikipedia-preview]",i=i||document.body;var a=c(i),p=function(t){var e=t.target,n=e.getAttribute("data-wp-title")||e.textContent,r=e.getAttribute("data-wp-lang")||o;s(r,n).then((function(t){t&&a.show(f(r,t),e)}))};Array.prototype.forEach.call(e.querySelectorAll(n),(function(t){t.addEventListener("mouseenter",p)}))}n.d(e,"init",(function(){return d}))}])}));