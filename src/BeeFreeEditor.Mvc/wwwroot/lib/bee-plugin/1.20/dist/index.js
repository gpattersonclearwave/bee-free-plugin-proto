!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Bee=e():t.Bee=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){function r(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function n(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,o){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof e&&(o=e,e={}),e=e||{},o=o||function(){},s.type=e.type||"text/javascript",s.charset=e.charset||"utf8",s.async=!("async"in e)||!!e.async,s.src=t,e.attrs&&function(t,e){for(var r in e)t.setAttribute(r,e[r])}(s,e.attrs),e.text&&(s.text=""+e.text),("onload"in s?r:n)(s,o),s.onload||r(s,o),i.appendChild(s)}},function(t,e,r){r(2),t.exports=r(3)},function(t,e,r){!function(t){"use strict";var e={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function a(t){this.map={},t instanceof a?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function u(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function l(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){var r;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:e.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:e.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():e.arrayBuffer&&e.blob&&(r=t)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=f(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=u(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var t,e,r,n=u(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=c(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}a.prototype.append=function(t,e){t=o(t),e=i(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[o(t)]},a.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},a.prototype.set=function(t,e){this.map[o(t)]=i(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),s(t)},a.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),s(t)},a.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),s(t)},e.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var d=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(t,e){var r,n,o=(e=e||{}).body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),d.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function y(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];b.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function w(r,n){return new Promise((function(o,i){var s=new p(r,n);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;function c(){u.abort()}u.onload=function(){var t,e,r={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new a,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};r.url="responseURL"in u?u.responseURL:r.headers.get("X-Request-URL");var n="response"in u?u.response:u.responseText;o(new b(n,r))},u.onerror=function(){i(new TypeError("Network request failed"))},u.ontimeout=function(){i(new TypeError("Network request failed"))},u.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},u.open(s.method,s.url,!0),"include"===s.credentials?u.withCredentials=!0:"omit"===s.credentials&&(u.withCredentials=!1),"responseType"in u&&e.blob&&(u.responseType="blob"),s.headers.forEach((function(t,e){u.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",c),u.onreadystatechange=function(){4===u.readyState&&s.signal.removeEventListener("abort",c)}),u.send(void 0===s._bodyInit?null:s._bodyInit)}))}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=a,self.Request=p,self.Response=b),t.Headers=a,t.Request=p,t.Response=b,t.fetch=w,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);var i={CREATE:"create",START:"start",LOAD:"load",SAVE:"save",SEND:"send",PREVIEW:"preview",SAVE_AS_TEMPLATE:"saveAsTemplate",TOGGLE_STRUCTURE:"toggleStructure"};r.d(e,"default",(function(){return w}));const s="https://app-rsrc.getbee.io/plugin/BeePlugin.js",a="https://auth.getbee.io/apiauth";let u=null;const c=t=>{o()(u.beePluginUrl,e=>{if(e)throw new Error("BeePlugin.js is not reachable");return t()})},l=t=>{if(!t)throw new Error("Bee is not started")},f=t=>{if(!Object.keys(i).some(e=>i[e]===t))throw new Error("Is not a correct method")},{LOAD:h,SAVE:d,SEND:p,PREVIEW:y,SAVE_AS_TEMPLATE:b,TOGGLE_STRUCTURE:m}=i;class w{constructor(t,e={authUrl:a,beePluginUrl:s}){u=e,this.bee=t=>c(()=>t()),this.token=t||null,this.config=null,this.instance=null}getToken(t,e,r={authUrl:a,beePluginUrl:s}){u=r;const n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`grant_type=password&client_id=${t}&client_secret=${e}`,mode:"cors"};if(this.token)throw new Error("Toker already declared");return fetch(new Request(u.authUrl,n)).then(t=>t.json()).then(t=>(this.token=t,t))}start(t,e){const{bee:r,token:n}=this;if(!t||!e)throw new Error("Config or template are missing");if(!this.token)throw new Error("Token NOT declared, call getToken or pass token on new BEE");return new Promise(o=>{r(()=>BeePlugin.create(n,t,t=>{this.instance=t,t.start(e),o(t)}))})}executeAction(t,e){const{instance:r}=this;return l(r),f(t),r[t](e)}load(t){return this.executeAction(h,t)}save(){return this.executeAction(d)}saveAsTemplate(){return this.executeAction(b)}send(){return this.executeAction(p)}preview(){return this.executeAction(y)}toggleStructure(){return this.executeAction(m)}}}])}));