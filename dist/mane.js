!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(r,a,function(e){return n[e]}.bind(null,a));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=()=>'\n\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="">100tifico</a>\n            </h1>\n        </div>\n        <div class="Header-nave">\n            <a href="#/about">about</a>\n        </div>\n    </div>\n    \n    ';const a="https://rickandmortyapi.com/api/character/";var i=async n=>{const e=n?`${a}${n}`:a;try{const n=await fetch(e);return await n.json()}catch(n){console.error("fetch error ",n)}};var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n        <div class="Error 404">\n            <h2>Error 404</h2>\n        </div>\n\n    ';var s=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return"/"+n};const l={"/":async()=>`\n        <div class="Characters">\n            ${(await i()).results.map(n=>`\n                <article class="Character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                         <h2>${n.name}</h2>\n                     </a>\n                </article>\n            `).join("")}\n        </div>\n    `,"/:id":async()=>{const n=await c(),e=await i(n);console.log(e);return`\n        <div class="Characters-inner">\n            \n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>chapter : ${e.episode.length}</h3>\n                <h3>Status: ${e.species}</h3>\n                <h3>Spice: ${e.status}</h3>\n                <h3>Gender: ${e.gender}</h3>\n                <h3>Origin: ${e.origin.name}</h3>\n                <h3>Last Location: ${e.location.name}</h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await r();let t=c(),a=await s(t),i=l[a]?l[a]:o;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);