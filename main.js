(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"body {\n  background: linear-gradient(to bottom right, #0a0c48, #565acd);\n}\n\n.block {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 80vb;\n}\n\n.inputCity {\n  width: 70vb;\n  margin: 0;\n  padding: 0;\n}\n.inputCityBlock {\n  display: flex;\n}\n\n.temperature {\n  font-size: 15vw;\n}\n\nli {\n  list-style-type: none;\n}\n\n.buttonInputCity {\n  right: 100px;\n}\n\n.listCityes {\n  display: none;\n  background-color: aliceblue;\n  color: #383951;\n  width: 70vb;\n  margin: 0;\n  padding: 0;\n\n  border: 2px solid #ccc;\n  border-radius: 5px;\n}\n\n.show {\n  display: block;\n}\n\n.temperatureBlock {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 3vw;\n}\n\n.buttonCity {\n  width: 100%;\n}\n\n.temperatureBlockWithImg {\n  display: flex;\n}\n\n.temperatureBlockWithImg img {\n  margin-left: 40px;\n  margin-bottom: 10px;\n  transform: scale(2);\n}\n\n.informationBlock {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.info {\n  text-align: center;\n  margin: 5px;\n  width: 50vb;\n  height: 8vh;\n  font-size: 3vw;\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),i=n(825),a=n.n(i),c=n(659),s=n.n(c),l=n(56),u=n.n(l),d=n(540),p=n.n(d),m=n(113),f=n.n(m),y=n(208),v={};async function h(e){const t=await async function(e){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=ab4639f5754271e773ed6d3ffd73f327`);if(!t.ok){if(404===t.status)throw new Error("Город не найден");throw new Error("Произошла ошибка при получении данных")}return await t.json()}catch(e){return alert(e.message),null}}(e);if(t){const e=t.main,n=t.weather[0].icon,r=t.name,o=document.querySelector(".weatherIn"),i=document.querySelector(".temperature"),a=document.querySelector(".imgTemperature"),c=document.querySelector(".informationBlock");return o.textContent=`Погода в "${r}"`,i.textContent=`${e.temp}˚`,a.src=`https://openweathermap.org/img/wn/${n}@2x.png`,c.innerHTML=`<div class="info">feels like : ${e.feels_like}</div>\n    <div class="info">temp min : ${e.temp_min}</div>\n    <div class="info">temp max : ${e.temp_max}</div>\n    <div class="info">wind speed : ${t.wind.speed} km/h</div>`,1}return null}function g(e){const t=document.querySelector(".listCityes"),n=document.querySelector(".weatherIn"),r=document.createElement("li"),o=document.createElement("button");o.classList="buttonCity",r.append(o),o.textContent=e,t.append(r),o.addEventListener("click",(()=>{n.textContent=`Погода в "${o.textContent}"`,t.classList.remove("show"),h(o.textContent)})),console.log(n)}v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(y.A,v),y.A&&y.A.locals&&y.A.locals,async function(){!async function(e){e.className="block",document.body.append(e);const t=document.createElement("header");t.innerHTML='\n  <div class="inputCityBlock">\n  <input placeholder="Enter the city" class="inputCity">\n  <button class="buttonInputCity">Enter</button>\n  </div>\n  <ul class="listCityes">\n  </ul>',e.append(t);const n=document.createElement("div");n.className="temperatureBlock",n.innerHTML='\n  <div class="temperatureBlockWithImg">\n  <div class="temperature"></div>\n  <img class="imgTemperature">\n    </div>\n    <div class="weatherIn"></div>',e.append(n);const r=document.createElement("div");if(r.className="informationBlock",e.append(r),localStorage.getItem("cityes"))h(JSON.parse(localStorage.getItem("lastCity")));else{const e=fetch("https://get.geojs.io/v1/ip/geo.json").then((e=>e.json())).then((e=>e.city));localStorage.setItem("cityes",JSON.stringify([await e])),localStorage.setItem("lastCity",JSON.stringify(await e)),h(await e)}let o=JSON.parse(localStorage.getItem("cityes"));!async function(){let e=JSON.parse(localStorage.getItem("cityes"));const t=document.querySelector(".inputCity"),n=document.querySelector(".listCityes");document.querySelector(".buttonInputCity").addEventListener("click",(async()=>{const r=t.value;await h(r)&&""!=r&&(5===e.length&&(n.childNodes[0].remove(),e.shift()),g(r),e.push(r),localStorage.setItem("cityes",JSON.stringify(e)),localStorage.setItem("lastCity",JSON.stringify(r))),n.classList.remove("show"),t.value=""}))}(),document.querySelector(".inputCity").addEventListener("click",(()=>{document.querySelector(".listCityes").classList.add("show")})),o.forEach((e=>{g(e)}))}(document.createElement("div"))}()})();