(function(){"use strict";var e={8779:function(e,t,o){var i=o(9242),r=o(3396);function a(e,t,o,i,a,s){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var s={data(){return{}},methods:{}},n=o(89);const l=(0,n.Z)(s,[["render",a]]);var c=l,u=(o(9773),o(4736)),g=(0,u.Rd)();async function m(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var p=o(2483),d=o(7139);function h(e,t,o,i,a,s){const n=(0,r.up)("MainHeader"),l=(0,r.up)("AboutSection"),c=(0,r.up)("SkillsSection"),u=(0,r.up)("CareerSection");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n,{onRequestScroll:s.handleScrollRequest,onMenuVisibilityChanged:s.updateMenuVisibility},null,8,["onRequestScroll","onMenuVisibilityChanged"]),(0,r.Wm)(l,{ref:"about",class:(0,d.C_)({active:a.isMenuVisible})},null,8,["class"]),(0,r.Wm)(c,{ref:"skills",class:(0,d.C_)({active:a.isMenuVisible})},null,8,["class"]),(0,r.Wm)(u,{ref:"career",class:(0,d.C_)({active:a.isMenuVisible})},null,8,["class"])],64)}const f=e=>((0,r.dD)("data-v-48d1cf88"),e=e(),(0,r.Cn)(),e),b={class:"index"},v={class:"img"},y=["src"],C=f((()=>(0,r._)("br",null,null,-1)));function S(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{class:"toggle",onClick:t[0]||(t[0]=e=>s.toggleMenu())},"메뉴"),(0,r._)("nav",{class:(0,d.C_)(["menu-bar",{visible:a.menuVisible}])},[(0,r._)("div",b,[(0,r._)("div",v,[(0,r._)("img",{id:"profile-img",src:a.profileImgSrc,alt:"ProFileImgFail"},null,8,y)]),C,(0,r._)("h3",{class:"section-list",onClick:t[1]||(t[1]=e=>s.emitScrollRequest("about"))},"ABOUT"),(0,r._)("h3",{class:"section-list",onClick:t[2]||(t[2]=e=>s.emitScrollRequest("skills"))},"SKILLS"),(0,r._)("h3",{class:"section-list",onClick:t[3]||(t[3]=e=>s.emitScrollRequest("career"))},"CAREER")])],2)],64)}var O={data(){return{menuVisible:!1,profileImgSrc:o(7802)}},methods:{toggleMenu(){this.menuVisible=!this.menuVisible,this.$emit("menuVisibilityChanged",this.menuVisible)},emitScrollRequest(e){this.$emit("requestScroll",e)}}};const w=(0,n.Z)(O,[["render",S],["__scopeId","data-v-48d1cf88"]]);var I=w;const _={class:"about"},E=(0,r.uE)('<header class="name"><p style="margin-bottom:1rem;"><span></span><span style="color:#2B3856;">BEOMJUN KWON</span></p><div class="contacts"><p><i class="contacts-image">🎉 </i>1994.06.18</p><p><i class="contacts-image">📫 </i>qjawns0619@gmail.com</p></div></header><br><br><article class="main-introduction"><p>안녕하세요<br> 현재 백앤드 개발자의 포트폴리오입니다.</p><br><p style="opacity:1;">더 많은 정보를 확인하시려면 스크롤을 내려주세요.</p><br></article><br>',5),T={class:"sns-pictogram"},j={class:"image-wrapper",href:"https://github.com/kwon-beom-jun"},k=["src"],N=(0,r._)("div",{class:"image-text"},"Move GitHub",-1),A={class:"image-wrapper",href:"https://beom0618.tistory.com/"},D=["src"],R=(0,r._)("div",{class:"image-text"},"Move Tistory",-1),P={class:"image-wrapper"},V=["src"],x=(0,r._)("div",{class:"image-text"},[(0,r.Uk)("Email "),(0,r._)("strong",null,":"),(0,r.Uk)(" qjawns0619@gmail.com")],-1);function M(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("section",_,[E,(0,r._)("footer",T,[(0,r._)("a",j,[(0,r._)("img",{class:"githubImg",src:a.githubImgSrc,alt:"githubImgSrc"},null,8,k),N]),(0,r._)("a",A,[(0,r._)("img",{class:"tistoryImg",src:a.tistoryImgSrc,alt:"tistoryImgSrc",style:{"background-color":"#EA5220","border-radius":"10px"}},null,8,D),R]),(0,r._)("a",P,[(0,r._)("img",{class:"gmailImg",src:a.gmailImgSrc,alt:"gmailImgSrc",style:{"background-color":"#EA5220","border-radius":"10px"}},null,8,V),x])])])}var q={props:{menuVisible:{type:Boolean,default:!1}},data(){return{githubImgSrc:o(4343),tistoryImgSrc:o(4234),gmailImgSrc:o(1513)}}};const Z=(0,n.Z)(q,[["render",M]]);var F=Z;const J={class:"skills"},G=(0,r.uE)('<div class="resume-section-content"><h2 class="skills-title">SKILLS</h2><div class="skills-sub-title">Programming Skills List</div><div><h3>Database | Server</h3><img alt="Oralce" src="https://img.shields.io/badge/Oralce-F80000.svg?&amp;style=for-the-badge&amp;logo=Oralce&amp;logoColor=white">  <img alt="microsoftsqlserver" src="https://img.shields.io/badge/microsoftsqlserver-CC2927.svg?&amp;style=for-the-badge&amp;logo=microsoftsqlserver&amp;logoColor=white">  <img alt="Apache Tomcat" src="https://img.shields.io/badge/Apache Tomcat-F8DC75.svg?&amp;style=for-the-badge&amp;logo=Apache Tomcat&amp;logoColor=black">  </div><div><h3>Tool</h3><img alt="Eclipse" src="https://img.shields.io/badge/Eclipse-2C2255.svg?&amp;style=for-the-badge&amp;logo=Eclipse&amp;logoColor=white">  <img alt="visualstudiocode" src="https://img.shields.io/badge/visualstudiocode-007ACC.svg?&amp;style=for-the-badge&amp;logo=visualstudiocode&amp;logoColor=white">  <img alt="Jenkins" src="https://img.shields.io/badge/Jenkins-D24939.svg?&amp;style=for-the-badge&amp;logo=Jenkins&amp;logoColor=white">  <img alt="SonarQube" src="https://img.shields.io/badge/SonarQube-4E9BCD.svg?&amp;style=for-the-badge&amp;logo=SonarQube&amp;logoColor=white">  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933.svg?&amp;style=for-the-badge&amp;logo=Node.js&amp;logoColor=white">  <img alt="jirasoftware" src="https://img.shields.io/badge/jirasoftware-0052CC.svg?&amp;style=for-the-badge&amp;logo=jirasoftware&amp;logoColor=white">  <img alt="apachemaven" src="https://img.shields.io/badge/apachemaven-C71A36.svg?&amp;style=for-the-badge&amp;logo=apachemaven&amp;logoColor=white">  </div><div><h3>Framework | OS</h3><img alt="Spring" src="https://img.shields.io/badge/Spring-6DB33F.svg?&amp;style=for-the-badge&amp;logo=Spring&amp;logoColor=white">  <img alt="Vue.js" src="https://img.shields.io/badge/Vue.js-4FC08D.svg?&amp;style=for-the-badge&amp;logo=Vue.js&amp;logoColor=white">  <img alt="JUnit5" src="https://img.shields.io/badge/JUnit5-25A162.svg?&amp;style=for-the-badge&amp;logo=JUnit5&amp;logoColor=white">  <img alt="linux" src="https://img.shields.io/badge/linux-FCC624.svg?&amp;style=for-the-badge&amp;logo=linux&amp;logoColor=black">  </div><div><h3>Languages &amp; Github</h3><img alt="java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&amp;logo=java&amp;logoColor=white">  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&amp;style=for-the-badge&amp;logo=JavaScript&amp;logoColor=black">  <img alt="jQuery" src="https://img.shields.io/badge/jQuery-0769AD.svg?&amp;style=for-the-badge&amp;logo=jQuery&amp;logoColor=white">  <img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?&amp;style=for-the-badge&amp;logo=JSON&amp;logoColor=white">  <img alt="html5" src="https://img.shields.io/badge/html5-E34F26.svg?&amp;style=for-the-badge&amp;logo=html5&amp;logoColor=white">  </div></div>',1),Y=[G];function B(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("section",J,Y)}var H={data(){return{githubImgSrc:o(4343),tistoryImgSrc:o(4234)}}};const L=(0,n.Z)(H,[["render",B]]);var U=L;const K={class:"education"},Q=(0,r._)("h2",{class:"education-title"},"Career",-1),W={class:"education-table"},$=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"TYPE"),(0,r._)("th",null,"DATE"),(0,r._)("th",null,"DISCRIOTION"),(0,r._)("th",null,"ORGANIZTION")])],-1);function z(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("section",K,[Q,(0,r._)("table",W,[$,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.Carrer,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("td",null,(0,d.zw)(e.TYPE),1),(0,r._)("td",null,(0,d.zw)(e.DATE),1),(0,r._)("td",null,(0,d.zw)(e.DISCRIOTION),1),(0,r._)("td",null,(0,d.zw)(e.ORGANIZTION),1)])))),128))])])])}var X={data(){return{Carrer:[{TYPE:"Education",DATE:"2019.02 - 2019.7",DISCRIOTION:"Spring Programming",ORGANIZTION:"KITRI"},{TYPE:"Employment",DATE:"2019.08 - 2021.12",DISCRIOTION:"RPA",ORGANIZTION:"KPCNC"},{TYPE:"Education",DATE:"2021.10 - 2021.12",DISCRIOTION:"Application Software Engineering",ORGANIZTION:"THEHOEUN"},{TYPE:"Employment",DATE:"2022.01 - 2022.~",DISCRIOTION:"Anyframe(framework)",ORGANIZTION:"KPCNC"},{TYPE:"Education",DATE:"2023.07 - 2023.~",DISCRIOTION:"Vue",ORGANIZTION:"GreenComputerArt"}]}}};const ee=(0,n.Z)(X,[["render",z]]);var te=ee,oe={components:{MainHeader:I,AboutSection:F,SkillsSection:U,CareerSection:te},data(){return{isMenuVisible:!1}},methods:{handleScrollRequest(e){this.$refs[e].$el.scrollIntoView({behavior:"smooth"})},updateMenuVisibility(e){this.isMenuVisible=e}}};const ie=(0,n.Z)(oe,[["render",h]]);var re=ie;const ae=[{path:"/",name:"home",component:re}],se=(0,p.p7)({history:(0,p.PO)("/Portfolio/"),routes:ae});var ne=se,le=o(6265),ce=o.n(le),ue=o(253);m();const ge=(0,i.ri)(c);ge.config.globalProperties.$axios=ce(),ge.use(ne),ge.use(ue.Z),ge.use(g),ge.mount("#app")},4343:function(e,t,o){e.exports=o.p+"img/github-icon.4f994f1f.png"},1513:function(e,t,o){e.exports=o.p+"img/gmail-icon.1eaa6620.png"},7802:function(e,t,o){e.exports=o.p+"img/profile.0c146870.jpg"},4234:function(e,t,o){e.exports=o.p+"img/tistory-icon.76338dab.png"}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,i,r,a){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],a=e[u][2];for(var n=!0,l=0;l<i.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](i[l])}))?i.splice(l--,1):(n=!1,a<s&&(s=a));if(n){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);o.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var n=2&r&&i;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((function(e){s[e]=function(){return i[e]}}));return s["default"]=function(){return i},o.d(a,s),a}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.56b53cd7.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";o.l=function(i,r,a,s){if(e[i])e[i].push(r);else{var n,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var g=c[u];if(g.getAttribute("src")==i||g.getAttribute("data-webpack")==t+a){n=g;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",t+a),n.src=i),e[i]=[r];var m=function(t,o){n.onerror=n.onload=null,clearTimeout(p);var r=e[i];if(delete e[i],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/Portfolio/"}(),function(){var e={143:0};o.f.j=function(t,i){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(o,i){r=e[t]=[o,i]}));i.push(r[2]=a);var s=o.p+o.u(t),n=new Error,l=function(i){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;n.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",n.name="ChunkLoadError",n.type=a,n.request=s,r[1](n)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,s=i[0],n=i[1],l=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in n)o.o(n,r)&&(o.m[r]=n[r]);if(l)var u=l(o)}for(t&&t(i);c<s.length;c++)a=s[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(8779)}));i=o.O(i)})();
//# sourceMappingURL=app.8609dde8.js.map