(function(t){function e(e){for(var a,r,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-23b906cc":"3dca1f21","chunk-265723c9":"5bfa01ee","chunk-27781c59":"4d489876","chunk-2d470654":"ac522086","chunk-4831de56":"14a5204f","chunk-9db5bf0a":"31586aaf"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-23b906cc":1,"chunk-265723c9":1,"chunk-27781c59":1,"chunk-2d470654":1,"chunk-4831de56":1,"chunk-9db5bf0a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-23b906cc":"fde3468d","chunk-265723c9":"beed4595","chunk-27781c59":"0293e202","chunk-2d470654":"4bcd9208","chunk-4831de56":"7223f171","chunk-9db5bf0a":"e31b94df"}[t]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],m.parentNode.removeChild(m),n(c)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e87":function(t,e,n){t.exports=n.p+"img/quem_somos.1f10c0ba.svg"},2205:function(t,e,n){t.exports=n.p+"img/man_suit_coffee.8df38bc6.svg"},3002:function(t,e,n){},3482:function(t,e,n){"use strict";var a=n("3002"),r=n.n(a);r.a},"450d":function(t,e,n){t.exports=n.p+"img/mapa.ed1dca4c.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router-view"})],1)},o=[],c={name:"home"},i=c,s=(n("5c0b"),n("2877")),u=Object(s["a"])(i,r,o,!1,null,null,null),l=u.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{animating:t.animate},attrs:{id:"home"}},[t._m(0),a("div",{staticClass:"svg-container",class:{animating:t.animate}},[a("img",{staticClass:"home",attrs:{src:n("e3e6")}}),t._m(1),a("img",{staticClass:"hospital",attrs:{src:n("9a72")}}),a("router-link",{attrs:{to:"/depoimentos"}},[a("img",{staticClass:"outdoor",attrs:{src:n("d7c7")}})]),a("router-link",{attrs:{to:"/biblioteca",alt:"Biblioteca"}},[a("img",{staticClass:"biblioteca",attrs:{src:n("be2f")}})]),a("router-link",{attrs:{to:"/planejamento-familiar"}},[a("img",{staticClass:"lady-child",attrs:{src:n("f39d")}})]),a("router-link",{attrs:{to:"/aborto-no-mundo"}},[a("img",{staticClass:"mapa",attrs:{src:n("450d")}})]),t._m(2),a("router-link",{attrs:{to:"/quem-somos"}},[a("img",{staticClass:"quemsomos",attrs:{src:n("0e87")}})]),t._m(3),t._m(4),a("img",{staticClass:"cenario1",attrs:{src:n("ea4a")}}),a("router-link",{attrs:{to:"/entrevista-etica"}},[a("img",{staticClass:"cenario2",attrs:{src:n("9e20")}})])],1)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"instruction"},[n("h2",[t._v("Navegue pela imagem com o mouse")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://youtu.be/X0qT1QIfuQI ",target:"_blank"}},[a("img",{staticClass:"igreja",attrs:{src:n("7315")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://youtu.be/0sC_uAUYYC4",target:"_blank"}},[a("img",{staticClass:"legislacao",attrs:{src:n("2205")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://soundcloud.com/luziaspodcast/e-possivel-discutir-o-aborto-sem-falar-de-genero",target:"_blank"}},[a("img",{staticClass:"headphones",attrs:{src:n("fdd5")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://facebook.com/luziasdoc",target:"_blank"}},[a("img",{staticClass:"facebook",attrs:{src:n("9ace")}})])}],p={name:"home",data:function(){return{animate:!0}},methods:{},mounted:function(){var t=this;this.animate&&setTimeout(function(){t.animate=!1},3e3)}},h=p,g=(n("3482"),Object(s["a"])(h,m,d,!1,null,"1f2a978c",null)),b=g.exports;a["a"].use(f["a"]);var v=new f["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,n){return{x:0,y:0}},routes:[{path:"/",name:"home",component:b},{path:"/quem-somos",name:"about",component:function(){return n.e("chunk-4831de56").then(n.bind(null,"f820"))}},{path:"/biblioteca",name:"biblioteca",component:function(){return n.e("chunk-9db5bf0a").then(n.bind(null,"4860"))}},{path:"/planejamento-familiar",name:"planejamento",component:function(){return n.e("chunk-23b906cc").then(n.bind(null,"c7e8"))}},{path:"/entrevista-etica",name:"entrevistaetica",component:function(){return n.e("chunk-2d470654").then(n.bind(null,"7e88"))}},{path:"/aborto-no-mundo",name:"mapa",component:function(){return n.e("chunk-265723c9").then(n.bind(null,"3f69"))}},{path:"/depoimentos",name:"luzias",component:function(){return n.e("chunk-27781c59").then(n.bind(null,"09df"))}}]});n("b751");a["a"].config.productionTip=!1,new a["a"]({router:v,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},7315:function(t,e,n){t.exports=n.p+"img/igreja.f6c4dbe9.svg"},"9a72":function(t,e,n){t.exports=n.p+"img/hospital.c1c6e59d.svg"},"9ace":function(t,e,n){t.exports=n.p+"img/woman_holding_fb.0f43b5ae.svg"},"9e20":function(t,e,n){t.exports=n.p+"img/man_preg_lady.86b2e236.svg"},b751:function(t,e,n){},be2f:function(t,e,n){t.exports=n.p+"img/biblioteca.4aea45ad.svg"},d7c7:function(t,e,n){t.exports=n.p+"img/outdoor.c78f5fff.svg"},e3e6:function(t,e,n){t.exports=n.p+"img/home.dcd6c869.svg"},ea4a:function(t,e,n){t.exports=n.p+"img/man_handup.63f87724.svg"},f39d:function(t,e,n){t.exports=n.p+"img/lady_child.8b6672a3.svg"},fdd5:function(t,e,n){t.exports=n.p+"img/man_headphone.390ab612.svg"}});
//# sourceMappingURL=app.6e4aa356.js.map