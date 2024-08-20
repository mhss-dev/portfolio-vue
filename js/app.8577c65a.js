(function(){"use strict";var e={676:function(e,t,n){var o=n(5130),r=n(6768);const a={id:"app"};function i(e,t,n,o,i,s){const c=(0,r.g2)("Header"),l=(0,r.g2)("Intro"),u=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(c),(0,r.bF)(l),(0,r.bF)(u)])}var s=n(4232);const c=e=>((0,r.Qi)("data-v-0b8ca7b7"),e=e(),(0,r.jt)(),e),l={class:"container-fluid bg-dark text-white text-uppercase"},u={class:"d-flex align-items-center justify-content-between flex-column flex-md-row mb-4 py-2"},f={class:"mb-0"},d={class:"nav"},p=c((()=>(0,r.Lk)("span",{class:"flag-icon flag-icon-us"},null,-1))),v=c((()=>(0,r.Lk)("span",{class:"flag-icon flag-icon-fr"},null,-1)));function h(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("header",l,[(0,r.Lk)("div",u,[(0,r.Lk)("h3",f,(0,s.v_)(e.$t("header.title")),1),(0,r.Lk)("nav",d,[(0,r.Lk)("a",{class:(0,s.C4)(["nav-link text-white",["en"===o.locale?"active":""]]),onClick:t[0]||(t[0]=e=>o.switchLanguage("en"))},[p,(0,r.eW)(" "+(0,s.v_)(e.$t("header.english")),1)],2),(0,r.Lk)("a",{class:(0,s.C4)(["nav-link text-white",["fr"===o.locale?"active":""]]),onClick:t[1]||(t[1]=e=>o.switchLanguage("fr"))},[v,(0,r.eW)(" "+(0,s.v_)(e.$t("header.french")),1)],2)])])])}var b=n(5931),g={name:"Header",setup(){const{t:e,locale:t}=(0,b.s9)(),n=e=>{t.value=e};return{switchLanguage:n,t:e,locale:t}}},m=n(1241);const k=(0,m.A)(g,[["render",h],["__scopeId","data-v-0b8ca7b7"]]);var w=k;const x=e=>((0,r.Qi)("data-v-53380252"),e=e(),(0,r.jt)(),e),L={class:"container-fluid background py-2",id:"intro"},y={class:"my-5 text-center mt-3"},j=x((()=>(0,r.Lk)("img",{class:"d-block mx-auto mb-4 rounded-image",src:"https://avatars.githubusercontent.com/u/93445134"},null,-1))),_={class:"display-5 fw-bold"},C={class:"col-lg-6 mx-auto"},O={class:"lead mb-4"},F={class:"d-flex gap-2 d-sm-flex justify-content-center"},I={href:"https://github.com/mhss-dev/",target:"_blank",class:"btn btn-dark btn-lg gap-3 button-hover"},E=x((()=>(0,r.Lk)("i",{class:"link fab fa-github fa-3"},null,-1)));function H(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("div",y,[j,(0,r.Lk)("h1",_,(0,s.v_)(e.$t("intro.title")),1),(0,r.Lk)("div",C,[(0,r.Lk)("p",O,(0,s.v_)(e.$t("intro.text")),1),(0,r.Lk)("div",F,[(0,r.Lk)("a",I,[E,(0,r.eW)(" "+(0,s.v_)(e.$t("intro.projects")),1)])])])])])}var A={name:"Intro",setup(){const{t:e}=(0,b.s9)();return{t:e}}};const $=(0,m.A)(A,[["render",H],["__scopeId","data-v-53380252"]]);var J=$;const M={class:"bg-dark text-white p-2 text-center fixed-bottom"},P=(0,r.Lk)("div",{class:"container-fluid"},[(0,r.Lk)("p",null,"© 2024 HEDI MHSS")],-1),S=[P];function V(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("footer",M,S)}var W={name:"Footer"};const X=(0,m.A)(W,[["render",V]]);var D=X,T={name:"App",components:{Header:w,Intro:J,Footer:D}};const Q=(0,m.A)(T,[["render",i]]);var q=Q,U={header:{title:"Portfolio",english:"English",french:"French"},intro:{title:"I'm Hedi",text:"Junior Web Developer with a passion for learning and building modern web applications. I love exploring new technologies and continuously improving my skills in front-end and back-end development. This VueJS-powered portfolio marks my debut with Vue, and I'm already hooked!",projects:"My projects"}},z={header:{title:"Portfolio",english:"Anglais",french:"Français"},intro:{title:"Je suis Hedi",text:"Développeur web junior avec une passion pour l'apprentissage et la construction d'applications web modernes. J'aime explorer de nouvelles technologies et améliorer continuellement mes compétences en développement front-end et back-end. Ce portfolio basé sur VueJS marque mes débuts avec Vue, et je suis déjà fan !",projects:"Mes projets"}};const B={en:U,fr:z};var G=B;const K=(0,o.Ef)(q),N=(0,b.hU)({locale:"en",messages:G});K.use(N),K.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(676)}));o=n.O(o)})();
//# sourceMappingURL=app.8577c65a.js.map