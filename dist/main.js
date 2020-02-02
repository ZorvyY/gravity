!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t,n){return this instanceof r?void 0===e?(this.x=0,void(this.y=0)):n?(this.x=e*Math.cos(t),void(this.y=e*Math.sin(t))):(this.x=e,void(this.y=t)):new r(...arguments)}toPolar(){return{magnitude:Math.hypot(this.x,this.y),angle:Math.atan2(this.y,this.x)}}get magnitude(){return Math.hypot(this.x,this.y)}get angle(){return Math.atan2(this.y,this.x)}get degrees(){return this.angle/Math.PI*180}normalize(){return this.times(1/this.magnitude)}normalize_(){return this.x/=this.magnitude,this.y/=this.magnitude,this}plus(e){return new r(this.x+e.x,this.y+e.y)}plus_(e){return this.x+=e.x,this.y+=e.y,this}minus(e){return new r(this.x-e.x,this.y-e.y)}minus_(e){return this.x-=e.x,this.y-=e.y,this}times(e){return new r(this.x*e,this.y*e)}times_(e){return this.x*=e,this.y*=e,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}rotateAround(e,t){let{magnitude:n,angle:i}=this.minus(t).toPolar();return i+=e,new r(n,i,!0).plus(t)}rotate(e){Math.abs(e)>2*Math.PI&&console.log("Check to see if your rotations are in radians");let{magnitude:t,angle:n}=this.toPolar();return n+=e,new r(t,n,!0)}proj(e){let t=e.normalize();return t.times(this.dot(t))}equals(e){return this.x==e.x&&this.y==e.y}}t.Vector=r;t.default=function(e,t,n){return new r(e,t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),i=n(5);t.default=class{constructor(e,t,n){this.position=e,this.velocity=t,this.acceleration=r.default(0,0),this.mass=n||50,this.id=i.v4()}get momentum(){return this.velocity.times(this.mass)}set momentum(e){this.velocity=e.times(1/this.mass)}computeRadius(){return(Math.log(Math.abs(this.mass))+2)/1.5}get radius(){return this._radius||(this._radius=this.computeRadius())}}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.callbacks=[]}subscribe(...e){this.callbacks.push(...e)}emit(e){this.callbacks.forEach(t=>t(e))}}},function(e,t,n){var r=n(6),i=n(7),o=i;o.v1=r,o.v4=i,e.exports=o},function(e,t,n){var r,i,o=n(2),s=n(3),a=0,l=0;e.exports=function(e,t,n){var u=t&&n||0,c=t||[],d=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==f){var p=o();null==d&&(d=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=i=16383&(p[6]<<8|p[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:l+1,g=h-a+(m-l)/1e4;if(g<0&&void 0===e.clockseq&&(f=f+1&16383),(g<0||h>a)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=h,l=m,i=f;var b=(1e4*(268435455&(h+=122192928e5))+m)%4294967296;c[u++]=b>>>24&255,c[u++]=b>>>16&255,c[u++]=b>>>8&255,c[u++]=255&b;var y=h/4294967296*1e4&268435455;c[u++]=y>>>8&255,c[u++]=255&y,c[u++]=y>>>24&15|16,c[u++]=y>>>16&255,c[u++]=f>>>8|128,c[u++]=255&f;for(var v=0;v<6;++v)c[u+v]=d[v];return t||s(c)}},function(e,t,n){var r=n(2),i=n(3);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a];return t||i(s)}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.PLAY=0]="PLAY",e[e.PAUSE=1]="PAUSE",e[e.NEW_PROJECTILE=2]="NEW_PROJECTILE",e[e.SET_ENGINE_RULES=3]="SET_ENGINE_RULES",e[e.PHYSICS_STEP=4]="PHYSICS_STEP"}(r||(r={})),t.MessageType=r,t.createMessage=function(e,t){return{type:e,payload:t||null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(10),i=n(12),o=n(13),s=n(24),a=n(25);n(26);const l=n(0),u=n(31),c=n(32);let d,f,p,h=document.querySelector("#fg"),m=document.querySelector("#bg");document.querySelector("#graphics").insertBefore(h,m),function(){!function(){s.default(h),s.default(m);let e=m.getContext("2d");e.fillStyle="black",e.fillRect(0,0,m.width,m.height)}(),p=new o.default(h);let e=new a.default({projectiles:[]});e.subscribe(e=>{p.render(e)});let t=new a.default({velocityVectors:!1,forceVectors:!1,paths:!1,cameraOrigin:l.default(0,0)});t.subscribe(t=>{p.setRules(t),p.render(e.state)});let n=new a.default([]);n.subscribe(t=>{e.state.projectiles=t,e.propagate()});let g=new u.default(50),b=new c.default;b.subscribe(e=>{n.state=e,n.propagate()}),f=new r.default,f.registerHandlers(),f.subscribe(e=>{Object.assign(t.state,e.display),t.propagate(),g.setMass(e.particles.mass),e.playback.pause?b.pause():b.play()}),d=new i.default(h),d.subscribe(r=>{if(r.inputArrow&&(e.state.inputArrow=r.inputArrow,e.propagate()),r.cameraUpdate&&(t.state.cameraOrigin=r.cameraUpdate,t.propagate()),r.newProjectile){let t=g.create(r.newProjectile);b.addProjectile(t),n.state.push(t),n.propagate(),e.state.inputArrow=null,e.propagate()}})}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4),i=n(11),o=["mass","pause","speed","force","velocity","paths"],s=["particles.mass","playback.pause","playback.speed","display.forceVectors","display.velocityVectors","display.paths"];class a extends r.default{constructor(){super(),this.currentOptions={particles:{mass:50},playback:{pause:!1,speed:1},display:{forceVectors:!1,velocityVectors:!1,paths:!1}}}createEventListener(e){let t=this;return function(n){let r,o=n.target;switch(o.type){case"number":r=Number(o.value);break;case"checkbox":r=o.checked}i.set(t.currentOptions,e,r),t.emit(t.currentOptions)}}registerHandlers(){this.addButtons(),o.forEach((e,t)=>{document.getElementById(e).onchange=this.createEventListener(s[t])})}addButtons(){let e=document.getElementById("mass-control");[1,10,100,500,1e3,2500,5e3,1e4].map((function(t){let n=document.createElement("button");n.textContent=String(t),e.appendChild(n),n.addEventListener("click",()=>{let e=document.getElementById("mass");e.value=String(t),e.onchange({AT_TARGET:0,BUBBLING_PHASE:0,CAPTURING_PHASE:0,NONE:0,bubbles:!1,cancelBubble:!1,cancelable:!1,composed:!1,currentTarget:void 0,defaultPrevented:!1,eventPhase:0,isTrusted:!1,returnValue:!1,srcElement:void 0,timeStamp:0,type:"",deepPath:()=>[],initEvent(e,t,n){},preventDefault(){},stopImmediatePropagation(){},stopPropagation(){},target:e})})}))}}t.default=a},function(e,t,n){var r,i,o;!function(n,s){"use strict";"object"==typeof e.exports?e.exports=s():(i=[],void 0===(o="function"==typeof(r=s)?r.apply(t,i):r)||(e.exports=o))}(0,(function(){"use strict";var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function n(e){if(!e)return!0;if(i(e)&&0===e.length)return!0;if("string"!=typeof e){for(var n in e)if(t(e,n))return!1;return!0}return!1}function r(t){return e.call(t)}var i=Array.isArray||function(t){return"[object Array]"===e.call(t)};function o(e){var t=parseInt(e);return t.toString()===e?t:e}function s(e){e=e||{};var s=function(e){return Object.keys(s).reduce((function(t,n){return"create"===n?t:("function"==typeof s[n]&&(t[n]=s[n].bind(s,e)),t)}),{})};function a(n,r){return e.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||t(n,r)}function l(e,t){if(a(e,t))return e[t]}function u(e,t,n,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return u(e,t.split(".").map(o),n,r);var i=t[0],s=l(e,i);return 1===t.length?(void 0!==s&&r||(e[i]=n),s):(void 0===s&&("number"==typeof t[1]?e[i]=[]:e[i]={}),u(e[i],t.slice(1),n,r))}return s.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var s=0;s<r.length;s++){var a=o(r[s]);if(!("number"==typeof a&&i(n)&&a<n.length||(e.includeInheritedProps?a in Object(n):t(n,a))))return!1;n=n[a]}return!0},s.ensureExists=function(e,t,n){return u(e,t,n,!0)},s.set=function(e,t,n,r){return u(e,t,n,r)},s.insert=function(e,t,n,r){var o=s.get(e,t);r=~~r,i(o)||(o=[],s.set(e,t,o)),o.splice(r,0,n)},s.empty=function(e,t){var o,l;if(!n(t)&&(null!=e&&(o=s.get(e,t)))){if("string"==typeof o)return s.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===r(e)}(o))return s.set(e,t,!1);if("number"==typeof o)return s.set(e,t,0);if(i(o))o.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===r(e)}(o))return s.set(e,t,null);for(l in o)a(o,l)&&delete o[l]}}},s.push=function(e,t){var n=s.get(e,t);i(n)||(n=[],s.set(e,t,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},s.coalesce=function(e,t,n){for(var r,i=0,o=t.length;i<o;i++)if(void 0!==(r=s.get(e,t[i])))return r;return n},s.get=function(e,t,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return n;if("string"==typeof t)return s.get(e,t.split("."),n);var r=o(t[0]),i=l(e,r);return void 0===i?n:1===t.length?i:s.get(e[r],t.slice(1),n)},s.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(n(t))return e;if("string"==typeof t)return s.del(e,t.split("."));var r=o(t[0]);return a(e,r)?1!==t.length?s.del(e[r],t.slice(1)):(i(e)?e.splice(r,1):delete e[r],e):e},s}var a=s();return a.create=s,a.withInheritedProps=s({includeInheritedProps:!0}),a}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),i=n(4);class o extends i.default{constructor(e){super(),this.drawInput=()=>{},this.getInputLine=()=>{},this.canvas=e,this.cx=e.getContext("2d"),this.camera={delta:r.default(0,0),position:r.default(0,0)},e.addEventListener("mousedown",this.handleMouseDown.bind(this))}handleMouseDown(e){e.shiftKey?this.beginViewDrag(r.default(e.offsetX,e.offsetY)):this.beginVectorDraw(r.default(e.offsetX,e.offsetY))}beginViewDrag(e){let t=this.canvas,n=this.camera,i=t=>{this.camera.delta=r.default(t.offsetX,t.offsetY).minus(e),this.emit({cameraUpdate:this.camera.position.plus(this.camera.delta)})};t.addEventListener("mousemove",i);let o=e=>{n.position=n.delta.plus(n.position),n.delta=r.default(),t.removeEventListener("mousemove",i),t.removeEventListener("mouseup",o)};t.addEventListener("mouseup",o)}beginVectorDraw(e){let t=this.canvas;e=e.minus(this.camera.position);let n=t=>{let n=r.default(t.offsetX,t.offsetY);n=n.minus(this.camera.position),this.emit({inputArrow:{start:e,delta:n.minus(e)}})};t.addEventListener("mousemove",n);let i=o=>{let s=r.default(o.offsetX,o.offsetY);s=s.minus(this.camera.position),this.drawInput=()=>{},this.getInputLine=()=>{};let a=s.minus(e);this.emit({newProjectile:{start:e,delta:a}}),t.removeEventListener("mousemove",n),t.removeEventListener("mouseup",i)};t.addEventListener("mouseup",i)}}t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),i=n(1),o=n(14);const s=(e,t,n)=>{e.fillStyle=e.strokeStyle=function(e){return a(Math.log10(Math.max(e.mass,1))/4)}(t),e.beginPath(),e.arc(t.position.x,t.position.y,t._radius||i.default.prototype.computeRadius.apply(t),0,2*Math.PI),e.fill();let o=Object.assign(r.default(),t.position),s=Object.assign(r.default(),t.velocity),u=Object.assign(r.default(),t.acceleration);n.velocityVectors&&l(e,o,o.plus(s)),n.forceVectors&&l(e,o,o.plus(u))};let a=o(["white","brown","orange","red"]);let l=(e,t,n)=>{e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.stroke(),e.beginPath(),e.moveTo(n.x,n.y);let{x:r,y:i}=n.minus(t).normalize().times(7).rotate(5/6*Math.PI).plus(n);e.lineTo(r,i),({x:r,y:i}=n.minus(t).normalize().times(7).rotate(-5/6*Math.PI).plus(n)),e.lineTo(r,i),e.closePath(),e.fill()};t.default=class{constructor(e){this.canvas=e,this.cx=this.canvas.getContext("2d"),this.rules={forceVectors:!1,velocityVectors:!1,paths:!1,cameraOrigin:r.default(0,0)}}setRules(e){this.rules=e}render(e){let t=this.cx;if(t.clearRect(0,0,this.canvas.width,this.canvas.height),t.save(),!this.rules.cameraOrigin.equals(r.default(0,0))){let{x:e,y:n}=this.rules.cameraOrigin;t.translate(e,n)}if(this.rules.paths,e.inputArrow){let{start:n,delta:r}=e.inputArrow,i=n.plus(r);t.save(),t.strokeStyle="blue",t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(i.x,i.y),t.stroke(),t.restore()}e.projectiles.forEach(e=>{s(this.cx,e,this.rules)}),t.restore()}}},function(e,t,n){const r=n(15),i=n(20),o=n(22),s=n(23);e.exports=function(e){return e=e.map(e=>{if("rgb"!=(e=r(e)).space){if("hsl"!=e.space)throw`${e.space} space is not supported.`;e.values=i.rgb(e.values)}return e.values.push(e.alpha),e.values}),(t,n=o)=>{t=s(t,0,1);let r=(e.length-1)*t,i=Math.floor(r),a=Math.ceil(r);t=r-i;let l=e[i],u=e[a],c=l.map((e,r)=>(e=n(e,u[r],t),r<3&&(e=Math.round(e)),e));return 1===c[3]?`rgb(${c.slice(0,3)})`:`rgba(${c})`}}},function(e,t,n){"use strict";(function(t){var r=n(17),i=n(18),o=n(19);e.exports=function(e){var n,a,l=[],u=1;if("string"==typeof e)if(r[e])l=r[e].slice(),a="rgb";else if("transparent"===e)u=0,a="rgb",l=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var c=(f=e.slice(1)).length;u=1,c<=4?(l=[parseInt(f[0]+f[0],16),parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16)],4===c&&(u=parseInt(f[3]+f[3],16)/255)):(l=[parseInt(f[0]+f[1],16),parseInt(f[2]+f[3],16),parseInt(f[4]+f[5],16)],8===c&&(u=parseInt(f[6]+f[7],16)/255)),l[0]||(l[0]=0),l[1]||(l[1]=0),l[2]||(l[2]=0),a="rgb"}else if(n=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var d=n[1],f=d.replace(/a$/,"");a=f;c="cmyk"===f?4:"gray"===f?1:3;l=n[2].trim().split(/\s*,\s*/).map((function(e,t){if(/%$/.test(e))return t===c?parseFloat(e)/100:"rgb"===f?255*parseFloat(e)/100:parseFloat(e);if("h"===f[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==s[e])return s[e]}return parseFloat(e)})),d===f&&l.push(1),u=void 0===l[c]?1:l[c],l=l.slice(0,c)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(l=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),a=e.match(/([a-z])/gi).join("").toLowerCase());else if(isNaN(e))if(i(e)){var p=o(e.r,e.red,e.R,null);null!==p?(a="rgb",l=[p,o(e.g,e.green,e.G),o(e.b,e.blue,e.B)]):(a="hsl",l=[o(e.h,e.hue,e.H),o(e.s,e.saturation,e.S),o(e.l,e.lightness,e.L,e.b,e.brightness)]),u=o(e.a,e.alpha,e.opacity,1),null!=e.opacity&&(u/=100)}else(Array.isArray(e)||t.ArrayBuffer&&ArrayBuffer.isView&&ArrayBuffer.isView(e))&&(l=[e[0],e[1],e[2]],a="rgb",u=4===e.length?e[3]:1);else a="rgb",l=[e>>>16,(65280&e)>>>8,255&e];return{space:a,values:l,alpha:u}};var s={red:0,orange:60,yellow:120,green:180,blue:240,purple:300}}).call(this,n(16))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function(e){var t;return"[object Object]"===r.call(e)&&(null===(t=Object.getPrototypeOf(e))||t===Object.getPrototypeOf({}))}},function(e,t){e.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},function(e,t,n){"use strict";var r=n(21);e.exports={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t,n,r,i,o,s=e[0]/360,a=e[1]/100,l=e[2]/100;if(0===a)return[o=255*l,o,o];t=2*l-(n=l<.5?l*(1+a):l+a-l*a),i=[0,0,0];for(var u=0;u<3;u++)(r=s+1/3*-(u-1))<0?r++:r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,i[u]=255*o;return i}},r.hsl=function(e){var t,n,r=e[0]/255,i=e[1]/255,o=e[2]/255,s=Math.min(r,i,o),a=Math.max(r,i,o),l=a-s;return a===s?t=0:r===a?t=(i-o)/l:i===a?t=2+(o-r)/l:o===a&&(t=4+(r-i)/l),(t=Math.min(60*t,360))<0&&(t+=360),n=(s+a)/2,[t,100*(a===s?0:n<=.5?l/(a+s):l/(2-a-s)),100*n]}},function(e,t,n){"use strict";e.exports={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},function(e,t){e.exports=function(e,t,n){return e*(1-n)+t*n}},function(e,t,n){"use strict";e.exports=function(e,t,n){return n>t?Math.max(Math.min(e,n),t):Math.max(Math.min(e,t),n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=e.parentElement;e.width=t.clientWidth,e.height=t.clientHeight}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4);class i extends r.default{constructor(e){super(),this.state=e}propagate(){this.emit(this.state)}}t.default=i},function(e,t,n){var r=n(27);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(29)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(28)(!1)).push([e.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=a.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,c=0,d=[],f=n(30);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(e.insertAt.before,n);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var s=c++;n=u||(u=b(t)),r=k.bind(null,n,s,!1),i=k.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),r=M.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=E.bind(null,n),i=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&p(h(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function E(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function M(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=f(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);t.default=class{constructor(e){this.mass=e}setMass(e){this.mass=e}create({start:e,delta:t}){return new r.default(e,t,this.mass)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(4),i=n(8);class o extends r.default{constructor(){super(),this.worker=new Worker("worker.js"),this.worker.onmessage=this.onMessage.bind(this),this.play()}onMessage({data:e}){e.type==i.MessageType.PHYSICS_STEP&&this.emit(e.payload)}play(){this.worker.postMessage(i.createMessage(i.MessageType.PLAY)),this.paused=!1}pause(){this.worker.postMessage(i.createMessage(i.MessageType.PAUSE)),this.paused=!0}addProjectile(e){this.worker.postMessage(i.createMessage(i.MessageType.NEW_PROJECTILE,e))}}t.default=o}]);
//# sourceMappingURL=main.js.map