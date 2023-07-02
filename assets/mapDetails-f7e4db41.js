import{A as he,B as C,r as O,a as f,C as j,h as Me,m as Re,D as Ye,l as Y,g as me,E as ke,F as K,G as I,_ as Ee,o as _,z as De,H as fe,I as ve,q as Ne,c as x,j as W,b as e,t as w,p as Be,e as Oe,$ as Ge,n as u,i as R,u as Xe,J as ze}from"./index-5858d9ca.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ie={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},throttle:{default:g.throttle,type:Number},snapAlign:{default:g.snapAlign,validator(s){return["start","end","center","center-even","center-odd"].includes(s)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(s){return["rtl","ltr"].includes(s)}},i18n:{default:g.i18n,type:Object},settings:{default(){return{}},type:Object}};function He({config:s,slidesCount:o}){const{snapAlign:n,wrapAround:t,itemsToShow:r=1}=s;if(t)return Math.max(o-1,0);let l;switch(n){case"start":l=o-r;break;case"end":l=o-1;break;case"center":case"center-odd":l=o-Math.ceil((r-.5)/2);break;case"center-even":l=o-Math.ceil(r/2);break;default:l=0;break}return Math.max(l,0)}function Ke({config:s,slidesCount:o}){const{wrapAround:n,snapAlign:t,itemsToShow:r=1}=s;let l=0;if(n||r>o)return l;switch(t){case"start":l=0;break;case"end":l=r-1;break;case"center":case"center-odd":l=Math.floor((r-1)/2);break;case"center-even":l=Math.floor((r-2)/2);break;default:l=0;break}return l}function be({val:s,max:o,min:n}){return o<n?s:Math.min(Math.max(s,n),o)}function Fe({config:s,currentSlide:o,slidesCount:n}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=s;let v=o;switch(t){case"center":case"center-odd":v-=(l-1)/2;break;case"center-even":v-=(l-2)/2;break;case"end":v-=l-1;break}return r?v:be({val:v,max:n-l,min:0})}function Ue(s){return s?s.reduce((o,n)=>{var t;return n.type===K?[...o,...Ue(n.children)]:((t=n.type)===null||t===void 0?void 0:t.name)==="CarouselSlide"?[...o,n]:o},[]):[]}function $({val:s,max:o,min:n=0}){return s>o?$({val:s-(o+1),max:o,min:n}):s<n?$({val:s+(o+1),max:o,min:n}):s}function Ze(s,o){let n;return o?function(...t){const r=this;n||(s.apply(r,t),n=!0,setTimeout(()=>n=!1,o))}:s}function Je(s,o){let n;return function(...t){n&&clearTimeout(n),n=setTimeout(()=>{s(...t),n=null},o)}}function Le(s="",o={}){return Object.entries(o).reduce((n,[t,r])=>n.replace(`{${t}}`,String(r)),s)}var qe=he({name:"ARIA",setup(){const s=C("config",O(Object.assign({},g))),o=C("currentSlide",f(0)),n=C("slidesCount",f(0));return()=>j("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Le(s.i18n.itemXofY,{currentSlide:o.value+1,slidesCount:n.value}))}}),We=he({name:"Carousel",props:Ie,setup(s,{slots:o,emit:n,expose:t}){var r;const l=f(null),v=f([]),c=f(0),d=f(0),i=O(Object.assign({},g));let p=Object.assign({},g),S;const m=f((r=s.modelValue)!==null&&r!==void 0?r:0),P=f(0),G=f(0),T=f(0),E=f(0);let k,h;I("config",i),I("slidesCount",d),I("currentSlide",m),I("maxSlide",T),I("minSlide",E),I("slideWidth",c);function N(){S=Object.assign({},s.breakpoints),p=Object.assign(Object.assign(Object.assign({},p),s),{i18n:Object.assign(Object.assign({},p.i18n),s.i18n),breakpoints:void 0}),X(p)}function U(){if(!S||!Object.keys(S).length)return;const a=Object.keys(S).map(b=>Number(b)).sort((b,D)=>+D-+b);let A=Object.assign({},p);a.some(b=>{const D=window.matchMedia(`(min-width: ${b}px)`).matches;return D&&(A=Object.assign(Object.assign({},A),S[b])),D}),X(A)}function X(a){Object.entries(a).forEach(([A,b])=>i[A]=b)}const z=Je(()=>{U(),B()},16);function B(){if(!l.value)return;const a=l.value.getBoundingClientRect();c.value=a.width/i.itemsToShow}function oe(){d.value<=0||(G.value=Math.ceil((d.value-1)/2),T.value=He({config:i,slidesCount:d.value}),E.value=Ke({config:i,slidesCount:d.value}),i.wrapAround||(m.value=be({val:m.value,max:T.value,min:E.value})))}Me(()=>{Re(()=>B()),setTimeout(()=>B(),1e3),U(),Ae(),window.addEventListener("resize",z,{passive:!0}),n("init")}),Ye(()=>{h&&clearTimeout(h),k&&clearInterval(k),window.removeEventListener("resize",z,{passive:!0})});let y=!1;const F={x:0,y:0},Z={x:0,y:0},L=O({x:0,y:0}),J=f(!1),ne=f(!1),Qe=()=>{J.value=!0},Ve=()=>{J.value=!1};function _e(a){["INPUT","TEXTAREA","SELECT"].includes(a.target.tagName)||(y=a.type==="touchstart",y||a.preventDefault(),!(!y&&a.button!==0||Q.value)&&(F.x=y?a.touches[0].clientX:a.clientX,F.y=y?a.touches[0].clientY:a.clientY,document.addEventListener(y?"touchmove":"mousemove",ge,!0),document.addEventListener(y?"touchend":"mouseup",pe,!0)))}const ge=Ze(a=>{ne.value=!0,Z.x=y?a.touches[0].clientX:a.clientX,Z.y=y?a.touches[0].clientY:a.clientY;const A=Z.x-F.x,b=Z.y-F.y;L.y=b,L.x=A},i.throttle);function pe(){const a=i.dir==="rtl"?-1:1,A=Math.sign(L.x)*.4,b=Math.round(L.x/c.value+A)*a;if(b&&!y){const D=re=>{re.stopPropagation(),window.removeEventListener("click",D,!0)};window.addEventListener("click",D,!0)}V(m.value-b),L.x=0,L.y=0,ne.value=!1,document.removeEventListener(y?"touchmove":"mousemove",ge,!0),document.removeEventListener(y?"touchend":"mouseup",pe,!0)}function Ae(){!i.autoplay||i.autoplay<=0||(k=setInterval(()=>{i.pauseAutoplayOnHover&&J.value||q()},i.autoplay))}function we(){k&&(clearInterval(k),k=null),Ae()}const Q=f(!1);function V(a){const A=i.wrapAround?a:be({val:a,max:T.value,min:E.value});m.value===A||Q.value||(n("slide-start",{slidingToIndex:a,currentSlideIndex:m.value,prevSlideIndex:P.value,slidesCount:d.value}),Q.value=!0,P.value=m.value,m.value=A,h=setTimeout(()=>{if(i.wrapAround){const b=$({val:A,max:T.value,min:0});b!==m.value&&(m.value=b,n("loop",{currentSlideIndex:m.value,slidingToIndex:a}))}n("update:modelValue",m.value),n("slide-end",{currentSlideIndex:m.value,prevSlideIndex:P.value,slidesCount:d.value}),Q.value=!1,we()},i.transition))}function q(){V(m.value+i.itemsToScroll)}function ae(){V(m.value-i.itemsToScroll)}const xe={slideTo:V,next:q,prev:ae};I("nav",xe),I("isSliding",Q);const ye=Y(()=>Fe({config:i,currentSlide:m.value,slidesCount:d.value}));I("slidesToScroll",ye);const Pe=Y(()=>{const a=i.dir==="rtl"?-1:1,A=ye.value*c.value*a;return{transform:`translateX(${L.x-A}px)`,transition:`${Q.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${d.value*c.value}px`:"",width:"100%"}});function Ce(){N(),U(),oe(),B(),we()}Object.keys(Ie).forEach(a=>{["modelValue"].includes(a)||me(()=>s[a],Ce)}),me(()=>s.modelValue,a=>{a!==m.value&&V(Number(a))}),me(d,oe),n("before-init"),N();const Se={config:i,slidesCount:d,slideWidth:c,next:q,prev:ae,slideTo:V,currentSlide:m,maxSlide:T,minSlide:E,middleSlide:G};t({updateBreakpointsConfigs:U,updateSlidesData:oe,updateSlideWidth:B,initDefaultConfigs:N,restartCarousel:Ce,slideTo:V,next:q,prev:ae,nav:xe,data:Se});const ie=o.default||o.slides,le=o.addons,Te=O(Se);return()=>{const a=Ue(ie==null?void 0:ie(Te)),A=(le==null?void 0:le(Te))||[];a.forEach((ce,de)=>ce.props.index=de);let b=a;if(i.wrapAround){const ce=a.map((ue,H)=>ke(ue,{index:-a.length+H,isClone:!0,key:`clone-before-${H}`})),de=a.map((ue,H)=>ke(ue,{index:a.length+H,isClone:!0,key:`clone-after-${H}`}));b=[...ce,...a,...de]}v.value=a,d.value=Math.max(a.length,1);const D=j("ol",{class:"carousel__track",style:Pe.value,onMousedownCapture:i.mouseDrag?_e:null,onTouchstartPassiveCapture:i.touchDrag?_e:null},b),re=j("div",{class:"carousel__viewport"},D);return j("section",{ref:l,class:{carousel:!0,"is-sliding":Q.value,"is-dragging":ne.value,"is-hover":J.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:Qe,onMouseleave:Ve},[re,A,j(qe)])}}}),je;(function(s){s.arrowUp="arrowUp",s.arrowDown="arrowDown",s.arrowRight="arrowRight",s.arrowLeft="arrowLeft"})(je||(je={}));const $e=()=>{const s=C("config",O(Object.assign({},g))),o=C("maxSlide",f(1)),n=C("minSlide",f(1)),t=C("currentSlide",f(1)),r=C("nav",{}),l=c=>$({val:t.value,max:o.value,min:0})===c,v=[];for(let c=n.value;c<o.value+1;c++){const d=j("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":l(c)},"aria-label":Le(s.i18n.ariaNavigateToSlide,{slideNumber:c+1}),onClick:()=>r.slideTo(c)}),i=j("li",{class:"carousel__pagination-item",key:c},d);v.push(i)}return j("ol",{class:"carousel__pagination"},v)};var et=he({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(s,{slots:o}){const n=C("config",O(Object.assign({},g))),t=C("currentSlide",f(0)),r=C("slidesToScroll",f(0)),l=C("isSliding",f(!1)),v=()=>s.index===t.value,c=()=>s.index===t.value-1,d=()=>s.index===t.value+1,i=()=>{const p=Math.floor(r.value),S=Math.ceil(r.value+n.itemsToShow-1);return s.index>=p&&s.index<=S};return()=>{var p;return j("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":s.isClone,"carousel__slide--visible":i(),"carousel__slide--active":v(),"carousel__slide--prev":c(),"carousel__slide--next":d(),"carousel__slide--sliding":l.value},"aria-hidden":!i()},(p=o.default)===null||p===void 0?void 0:p.call(o))}}});const ee=s=>(Be("data-v-771cc39b"),s=s(),Oe(),s),tt={class:"w-100"},st={class:"row mb-2"},ot=ee(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"編號",-1)),nt={class:"col-8 py-1 px-2 bg-grey-light text-start"},at={class:"row mb-2"},it=ee(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"日期",-1)),lt={class:"col-8 py-1 px-2 bg-grey-light text-start"},rt={class:"row mb-2"},ct=ee(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"災害原因",-1)),dt={class:"col-8 py-1 px-2 bg-grey-light text-start"},ut={class:"row mb-2"},mt=ee(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"災害描述",-1)),ft={class:"col-8 py-1 px-2 bg-grey-light text-start"},vt={__name:"Carousel",props:{carouselList:{type:Array,default:[]}},emits:[],setup(s,{emit:o}){const n=s;return O({}),(t,r)=>(_(),De(ve(We),null,{addons:fe(()=>[Ne(ve($e))]),default:fe(()=>[(_(!0),x(K,null,W(n.carouselList,(l,v)=>(_(),De(ve(et),{key:v},{default:fe(()=>[e("div",tt,[e("div",st,[ot,e("div",nt,w(v+1),1)]),e("div",at,[it,e("div",lt,w(l.date),1)]),e("div",rt,[ct,e("div",dt,w(l.cause),1)]),e("div",ut,[mt,e("div",ft,w(l.description),1)])])]),_:2},1024))),128))]),_:1}))}},bt=Ee(vt,[["__scopeId","data-v-771cc39b"]]),te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgBjZRBbxJBFMff7EZNS4JrYA2JNtlyAI7rjcQLNGniARL4BNKjJ3s1akptDfHm0Zv7DSyBBDwo3IwnORJOHDQxqTZYaUtYdl7fbCnZ7M5S/slmhzf/eb83b9gBCNEbPVY50GMfYQUVCoVSsVhc6lVlwbe6bjKGLcbAzEfWWOfsohuWoFQqmfT6RE82nU4bg8GgvhKolkgYCE6Lhpr4zYDlwmAEMTjnLURMzEMmwTSCfV4KEhDO7Q4CGN64DDaHdAhi+HJmU6kUI1hXCgqDyGAE0QjyTQK58jKW88Nc0J6maYzxFjkysETXsF8PNmoEWe71wVzQdjTygWaeBNyI7yme9cMQMPE/etfvtugxw2Dqwf14lQE8DzAcqLz+c/Juay0isue8c9HTU4ohXMNod7vNZvNFJuNuMieDKYwDgnTreM9NohBGKuZNxubAf3IvoGs4jMf3QMFqYJbaQYaKP/7z4QbQOfnDFki8BK/SbvcXZR3qMYuKfAo3ic7te/axGO3CzbIajcaOGCz+3l/PL4621tc3CWaGraJjsV4dnzwTHyT1fZM6Zq4CEVK8M7btUJXYk0IAjl4e/10spHZU6NWVealdPS8kANofjUb2lOcDMFo4nTo7/oSqqpZpVz0/ZDwe5yWFBlXTNIPfVuiWYHTv4XA25Y9EETKvuCUcx/kBVzfK0LbtfLvdHgaKki3+MpmMtm/dqaOimDOblwnyG0LU7/cnyWSyrgjvbFaWQYQuAQI4A/xFYNwnAAAAAElFTkSuQmCC",se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgBjZQxb9NQEMfv4rIghlAoYnShTdzNbF2okj1R00+APTLRDUGEnA5Qdcs3sPkACFeJlDDVEgMjGRCgAJLXqhIKUsgS28c9O4rCy3Oav5S80/n/7ue7vDyAHD145VoPm54La6hWqzXq9fpKr6ZK7jquiTH2EMDcPDjE3x/Pg7wCjUbD5OU9f/bL5bI+HA7P1wIZjqtThD0Oi1kGK3kwhuhJkvSI6P4sZTKsyLAPK0ECEkd4QQD6/7Zl2AxywRDJC/ulUgkZFihB+ZBlGEOKDPmkgGROxIoMS0G64xYhG5cBK5XB7l5+O2XISq8MK4ivGxG0eTEV/raihHN1b0/l9RQwh09kS8TaTtPlAJ/JJgK0fr22zjYfH/FjqCw+m9za4hTCzb9XmZfouNvtvjCMtMmKqrMCUIFAIUyS27MAQSlaLIYz4B/IMaeGnZdvHUBqKUp5bLDk/NblV+DfSU57oPAyvMXdnszfdrfpejyuJ3CdEmjvfXknomO4Xl6n07FFMD/efGz9OweH2zwIM28XEng/T62n4g/Jc9/miZnrQIQKi0+mG+lbDpTbCPwfb6z5Rh6HxUugtBINFiFLoPDEHkUbVF2CEQyiCdlyQU3TjrirgQwZj8dV2as8UcZzviU0viUQdCII4wk9Ctv2SOUVt0Qcx58hu1HC6XRa7ff7oewrqDZ/P7NDLU47C2Je8yBCvu+PRHHuJMiDCP0DzjkCVPwPiY8AAAAASUVORK5CYII=",ht="/Map_Demo/assets/3-1-7fbb4494.png",_t="/Map_Demo/assets/back-388ffbfc.svg",gt="/Map_Demo/assets/top-dde40118.svg";const pt={props:{tribeId:{Type:String,default:0},map:{}},setup(s,{emit:o}){const n=Xe(),t=ze(),r=O({redArray:[134],mainTextColor:Y(()=>r.redArray.includes(Number(t.params.id))?"text-brown":"text-steel"),mainBgColor:Y(()=>r.redArray.includes(Number(t.params.id))?"bg-brown":"bg-steel"),type:Y(()=>r.redArray.includes(Number(t.params.id))?1:2),coordinates:Y(()=>{var c,d,i,p;return(d=(c=r.tribeData)==null?void 0:c.basicInformation)!=null&&d.coordinates?Object.entries((p=(i=r.tribeData)==null?void 0:i.basicInformation)==null?void 0:p.coordinates):null}),tribeData:{}});function l(c){o("onMapControl",{action:c})}function v(){window.scrollTo({top:0,behavior:"smooth"})}return Me(async()=>{var c;await Ge.ajax({url:`https://api.edtest.site/tribe?tribeCode=${(c=t.params)==null?void 0:c.id}`,method:"GET"}).done(d=>{r.tribeData=d}).fail(d=>{console.log("Fail",d)})}),{router:n,state:r,onMapControl:l,goTop:v}}},M=s=>(Be("data-v-939cfea0"),s=s(),Oe(),s),At={class:"row mx-0 detail position-relative"},wt={class:"detailCon"},xt={class:"row mx-0"},yt={class:"aside px-0 d-none d-sm-block"},Ct={class:"ps-0"},St={class:"text-center mb-5"},Tt={class:"text-center mb-5"},kt={class:"text-center mb-5"},Dt={class:"text-center mb-5"},It={class:"text-center mb-5"},jt={class:"detailMain"},Mt={class:"text-center"},Et={class:"section mb-5 mx-0 row flex-wrap align-items-center",id:"section1"},Nt={key:0,src:te,class:"d-block d-sm-none"},Bt={key:1,src:se,class:"d-block d-sm-none"},Ot={class:"col-12 col-sm-8"},Ut=M(()=>e("p",null,"聚落坐標(97TM2,WGS84)",-1)),Lt=M(()=>e("p",null,"代表性座標名稱：石磊國民小學(疏散避難處所)",-1)),Qt=M(()=>e("br",{class:"d-block d-sm-none"},null,-1)),Vt={class:"row flex-wrap flex-sm-nowrap mx-0 mb-5 justify-content-between d-flex"},Pt={class:"section col-5 col-sm-3 py-4 px-0 col-3 text-center"},Rt={key:0,src:te},Yt={key:1,src:se},Gt={class:"mb-0 fw-bold"},Xt={class:"section col-5 col-sm-3 py-4 px-0 col-3 text-center"},zt={key:0,src:te},Ht={key:1,src:se},Kt={class:"mb-0 fw-bold"},Ft={class:"section col-12 col-sm-3 py-4 px-0 mt-5 mt-sm-0 text-center"},Zt={key:0,src:te},Jt={key:1,src:se},qt={class:"mb-0 fw-bold"},Wt={class:"section mb-5",id:"section2"},$t=M(()=>e("div",{class:"d-flex flex-wrap flex-sm-nowrap mx-0 align-items-center"},[e("img",{src:ht,class:"me-sm-4 w-100 w-sm-10"}),e("div",null,[e("p",null,"名稱 : 石磊國小"),e("p",null,"地址 : 新竹縣尖石鄉49號"),e("p",null,"簡介 : 新竹縣尖石鄉石磊國民小學是位於台灣新竹縣尖石鄉玉峰村的一座國民小學，校園無圍牆及操場，為全臺灣腹地最小的國民小學。該學校始建於中華民國四十五年八月，最初名為玉峰國民學校石磊分班。民國五十七年八月改稱新竹縣尖石鄉石磊國民小學 ")])],-1)),es={class:"section mb-5",id:"section3"},ts={class:"section mb-5",id:"section4"},ss=M(()=>e("div",null,"石磊部落範圍內之文化地景分佈如下圖所示。地標地物包括石磊國小、石磊天主堂、石磊文化健康站和石磊教會等。部落產業以農業為主，種植椴木香菇及有機農業，以高冷蔬菜為主。",-1)),os=M(()=>e("div",{class:"my-5"},[e("p",{class:"mb-2"},"部落名稱:石磊部落"),e("p",{class:"mb-2"},"主要原住民族群:泰雅族")],-1)),ns={class:"list-unstyled d-flex flex-wrap justify-content-around"},as={class:"col-5 col-sm-3 px-2"},is=["src"],ls={class:"section mb-5 history",id:"section5"},rs=M(()=>e("div",{class:"mb-4"}," 依據111年尖石鄉公所地區災害防救計畫及查詢災害復建工程經費審議及執行資訊系統後，將發生於石磊部落範圍內(及鄰近)之災害事件彙整如下表，並於111年12月22日進行現場調查。災害原因多為降雨及颱風事件，主要的災害類型為土石崩落及邊坡災害。 ",-1)),cs={class:"table w-100 d-none d-sm-block"},ds={class:"d-flex flex-nowrap justify-content-between"},us={class:"col-1 bg-grey-light"},ms={class:"col-2 bg-grey-light"},fs={class:"col-3 bg-grey-light"},vs={class:"col-4 bg-grey-light"},bs={class:"position-fixed bottom-0 end-0 w-auto m-2 m-sm-5"},hs=M(()=>e("img",{src:_t},null,-1)),_s=[hs],gs=M(()=>e("img",{src:gt},null,-1)),ps=[gs];function As(s,o,n,t,r,l){var c,d,i,p,S,m,P,G,T,E,k;const v=bt;return _(),x("div",At,[e("div",{class:u(["redTotem",t.state.type==1?"redTotem":"blueTotem"])},null,2),e("div",wt,[e("div",xt,[e("div",yt,[e("ul",Ct,[e("li",St,[e("a",{href:"#section1",class:u(["bg-white fw-bold rounded text-decoration-none",t.state.mainTextColor])},"基本資料",2)]),e("li",Tt,[e("a",{href:"#section2",class:u(["bg-white fw-bold rounded text-decoration-none",t.state.mainTextColor])},"部落地標",2)]),e("li",kt,[e("a",{href:"#section3",class:u(["bg-white fw-bold rounded text-decoration-none",t.state.mainTextColor])},"自然環境",2)]),e("li",Dt,[e("a",{href:"#section4",class:u(["bg-white fw-bold rounded text-decoration-none",t.state.mainTextColor])},"人文環境",2)]),e("li",It,[e("a",{href:"#section5",class:u(["bg-white fw-bold rounded text-decoration-none",t.state.mainTextColor])},"歷史災害",2)])])]),e("div",jt,[e("h2",Mt,w((d=(c=t.state.tribeData)==null?void 0:c.basicInformation)==null?void 0:d.tribeName),1),e("div",Et,[e("div",{class:u(["text-brown fw-bold col-12 col-sm-3 mb-4 mb-sm-0 text-center d-flex align-items-center",t.state.mainTextColor])},[t.state.type==1?(_(),x("img",Nt)):(_(),x("img",Bt)),R(" 聚落座標 ")],2),e("div",Ot,[Ut,Lt,(_(!0),x(K,null,W(t.state.coordinates,(h,N)=>{var U,X,z,B;return _(),x("p",null,[e("p",null,[R(" 【 "+w(h[0])+"座標 】 ",1),Qt,R(" 經度："+w(((U=h[1])==null?void 0:U.lng)||((X=h[1])==null?void 0:X.x))+"，緯度："+w(((z=h[1])==null?void 0:z.lat)||((B=h[1])==null?void 0:B.y)),1)])])}),256))])]),e("div",Vt,[e("div",Pt,[e("p",{class:u(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(_(),x("img",Rt)):(_(),x("img",Yt)),R(" 人口戶數 ")],2),e("p",Gt,w((p=(i=t.state.tribeData)==null?void 0:i.basicInformation)==null?void 0:p.totalHouseholds),1)]),e("div",Xt,[e("p",{class:u(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(_(),x("img",zt)):(_(),x("img",Ht)),R(" 聚落規模 ")],2),e("p",Kt,w((m=(S=t.state.tribeData)==null?void 0:S.basicInformation)==null?void 0:m.scale),1)]),e("div",Ft,[e("p",{class:u(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(_(),x("img",Zt)):(_(),x("img",Jt)),R(" 行政區域 ")],2),e("p",qt,w((G=(P=t.state.tribeData)==null?void 0:P.basicInformation)==null?void 0:G.area),1)])]),e("div",Wt,[e("div",{class:u(["fw-bold",t.state.mainTextColor])},"部落地標",2),e("hr",{class:u(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),$t]),e("div",es,[e("div",{class:u(["fw-bold",t.state.mainTextColor])},"自然環境",2),e("hr",{class:u(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),e("div",null,[e("p",null,w((T=t.state.tribeData)==null?void 0:T.naturalEnvironment),1)])]),e("div",ts,[e("div",{class:u(["fw-bold",t.state.mainTextColor])},"人文環境",2),e("hr",{class:u(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),ss,os,e("div",null,[e("div",{class:u(["fw-bold mb-2",t.state.mainTextColor])},"文化地景點",2),e("ul",ns,[(_(!0),x(K,null,W(t.state.tribeData.culturalLandscape,(h,N)=>(_(),x("li",as,[e("img",{src:h.image,class:"w-100"},null,8,is),e("p",null,w(h.name),1)]))),256))])])]),e("div",ls,[e("div",{class:u(["fw-bold",t.state.mainTextColor])},"歷史災害",2),e("hr",{class:u(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),rs,e("div",cs,[e("div",ds,[e("div",{class:u(["col-1 text-white",t.state.mainBgColor])},"編號",2),e("div",{class:u(["col-2 text-white",t.state.mainBgColor])},"日期",2),e("div",{class:u(["col-3 text-white",t.state.mainBgColor])},"災害原因",2),e("div",{class:u(["col-4 text-white",t.state.mainBgColor])},"災害描述",2)]),(_(!0),x(K,null,W((E=t.state.tribeData)==null?void 0:E.historicalDisasters,(h,N)=>(_(),x("div",{class:"d-flex flex-nowrap justify-content-between",key:N},[e("div",us,w(N+1),1),e("div",ms,w(h.date),1),e("div",fs,w(h.cause),1),e("div",vs,w(h.description),1)]))),128))]),Ne(v,{class:"mb-5 history table w-100 d-block d-sm-none",style:{padding:"0"},"items-to-show":1,autoplay:2e3,"wrap-around":!0,carouselList:(k=t.state.tribeData)==null?void 0:k.historicalDisasters},null,8,["carouselList"])])])])]),e("div",bs,[e("div",{class:"goBack mb-4 cursor-pointer",onClick:o[0]||(o[0]=h=>t.router.push({name:"index"}))},_s),e("div",{class:"goTop cursor-pointer",onClick:o[1]||(o[1]=h=>t.goTop())},ps)])])}const xs=Ee(pt,[["render",As],["__scopeId","data-v-939cfea0"]]);export{xs as default};
//# sourceMappingURL=mapDetails-f7e4db41.js.map
