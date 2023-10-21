import{C as ve,D as C,r as B,a as h,E,f as Ne,x as Ye,G as ze,q as G,g as _e,H as De,F as J,I as O,_ as Oe,o as l,B as je,J as fe,K as he,h as Ee,c,j as te,b as e,t as w,p as Le,e as Pe,$ as Ge,l as m,k as ee,i as k,u as Ue,L as We}from"./index-470263a0.js";import{_ as A,a as D}from"./frame-2-5209e05a.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const p={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ie={itemsToShow:{default:p.itemsToShow,type:Number},itemsToScroll:{default:p.itemsToScroll,type:Number},wrapAround:{default:p.wrapAround,type:Boolean},throttle:{default:p.throttle,type:Number},snapAlign:{default:p.snapAlign,validator(s){return["start","end","center","center-even","center-odd"].includes(s)}},transition:{default:p.transition,type:Number},breakpoints:{default:p.breakpoints,type:Object},autoplay:{default:p.autoplay,type:Number},pauseAutoplayOnHover:{default:p.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:p.mouseDrag,type:Boolean},touchDrag:{default:p.touchDrag,type:Boolean},dir:{default:p.dir,validator(s){return["rtl","ltr"].includes(s)}},i18n:{default:p.i18n,type:Object},settings:{default(){return{}},type:Object}};function Fe({config:s,slidesCount:o}){const{snapAlign:n,wrapAround:t,itemsToShow:d=1}=s;if(t)return Math.max(o-1,0);let r;switch(n){case"start":r=o-d;break;case"end":r=o-1;break;case"center":case"center-odd":r=o-Math.ceil((d-.5)/2);break;case"center-even":r=o-Math.ceil(d/2);break;default:r=0;break}return Math.max(r,0)}function qe({config:s,slidesCount:o}){const{wrapAround:n,snapAlign:t,itemsToShow:d=1}=s;let r=0;if(n||d>o)return r;switch(t){case"start":r=0;break;case"end":r=d-1;break;case"center":case"center-odd":r=Math.floor((d-1)/2);break;case"center-even":r=Math.floor((d-2)/2);break;default:r=0;break}return r}function be({val:s,max:o,min:n}){return o<n?s:Math.min(Math.max(s,n),o)}function Je({config:s,currentSlide:o,slidesCount:n}){const{snapAlign:t,wrapAround:d,itemsToShow:r=1}=s;let b=o;switch(t){case"center":case"center-odd":b-=(r-1)/2;break;case"center-even":b-=(r-2)/2;break;case"end":b-=r-1;break}return d?b:be({val:b,max:n-r,min:0})}function Ve(s){return s?s.reduce((o,n)=>{var t;return n.type===J?[...o,...Ve(n.children)]:((t=n.type)===null||t===void 0?void 0:t.name)==="CarouselSlide"?[...o,n]:o},[]):[]}function se({val:s,max:o,min:n=0}){return s>o?se({val:s-(o+1),max:o,min:n}):s<n?se({val:s+(o+1),max:o,min:n}):s}function Ke(s,o){let n;return o?function(...t){const d=this;n||(s.apply(d,t),n=!0,setTimeout(()=>n=!1,o))}:s}function Qe(s,o){let n;return function(...t){n&&clearTimeout(n),n=setTimeout(()=>{s(...t),n=null},o)}}function Be(s="",o={}){return Object.entries(o).reduce((n,[t,d])=>n.replace(`{${t}}`,String(d)),s)}var Ze=ve({name:"ARIA",setup(){const s=C("config",B(Object.assign({},p))),o=C("currentSlide",h(0)),n=C("slidesCount",h(0));return()=>E("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Be(s.i18n.itemXofY,{currentSlide:o.value+1,slidesCount:n.value}))}}),$e=ve({name:"Carousel",props:Ie,setup(s,{slots:o,emit:n,expose:t}){var d;const r=h(null),b=h([]),_=h(0),u=h(0),a=B(Object.assign({},p));let x=Object.assign({},p),T;const f=h((d=s.modelValue)!==null&&d!==void 0?d:0),z=h(0),U=h(0),I=h(0),L=h(0);let M,v;O("config",a),O("slidesCount",u),O("currentSlide",f),O("maxSlide",I),O("minSlide",L),O("slideWidth",_);function P(){T=Object.assign({},s.breakpoints),x=Object.assign(Object.assign(Object.assign({},x),s),{i18n:Object.assign(Object.assign({},x.i18n),s.i18n),breakpoints:void 0}),W(x)}function R(){if(!T||!Object.keys(T).length)return;const i=Object.keys(T).map(g=>Number(g)).sort((g,N)=>+N-+g);let y=Object.assign({},x);i.some(g=>{const N=window.matchMedia(`(min-width: ${g}px)`).matches;return N&&(y=Object.assign(Object.assign({},y),T[g])),N}),W(y)}function W(i){Object.entries(i).forEach(([y,g])=>a[y]=g)}const F=Qe(()=>{R(),V()},16);function V(){if(!r.value)return;const i=r.value.getBoundingClientRect();_.value=i.width/a.itemsToShow}function ne(){u.value<=0||(U.value=Math.ceil((u.value-1)/2),I.value=Fe({config:a,slidesCount:u.value}),L.value=qe({config:a,slidesCount:u.value}),a.wrapAround||(f.value=be({val:f.value,max:I.value,min:L.value})))}Ne(()=>{Ye(()=>V()),setTimeout(()=>V(),1e3),R(),ye(),window.addEventListener("resize",F,{passive:!0}),n("init")}),ze(()=>{v&&clearTimeout(v),M&&clearInterval(M),window.removeEventListener("resize",F,{passive:!0})});let S=!1;const K={x:0,y:0},Q={x:0,y:0},X=B({x:0,y:0}),Z=h(!1),ie=h(!1),Re=()=>{Z.value=!0},Xe=()=>{Z.value=!1};function ge(i){["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)||(S=i.type==="touchstart",S||i.preventDefault(),!(!S&&i.button!==0||H.value)&&(K.x=S?i.touches[0].clientX:i.clientX,K.y=S?i.touches[0].clientY:i.clientY,document.addEventListener(S?"touchmove":"mousemove",pe,!0),document.addEventListener(S?"touchend":"mouseup",xe,!0)))}const pe=Ke(i=>{ie.value=!0,Q.x=S?i.touches[0].clientX:i.clientX,Q.y=S?i.touches[0].clientY:i.clientY;const y=Q.x-K.x,g=Q.y-K.y;X.y=g,X.x=y},a.throttle);function xe(){const i=a.dir==="rtl"?-1:1,y=Math.sign(X.x)*.4,g=Math.round(X.x/_.value+y)*i;if(g&&!S){const N=ce=>{ce.stopPropagation(),window.removeEventListener("click",N,!0)};window.addEventListener("click",N,!0)}Y(f.value-g),X.x=0,X.y=0,ie.value=!1,document.removeEventListener(S?"touchmove":"mousemove",pe,!0),document.removeEventListener(S?"touchend":"mouseup",xe,!0)}function ye(){!a.autoplay||a.autoplay<=0||(M=setInterval(()=>{a.pauseAutoplayOnHover&&Z.value||$()},a.autoplay))}function we(){M&&(clearInterval(M),M=null),ye()}const H=h(!1);function Y(i){const y=a.wrapAround?i:be({val:i,max:I.value,min:L.value});f.value===y||H.value||(n("slide-start",{slidingToIndex:i,currentSlideIndex:f.value,prevSlideIndex:z.value,slidesCount:u.value}),H.value=!0,z.value=f.value,f.value=y,v=setTimeout(()=>{if(a.wrapAround){const g=se({val:y,max:I.value,min:0});g!==f.value&&(f.value=g,n("loop",{currentSlideIndex:f.value,slidingToIndex:i}))}n("update:modelValue",f.value),n("slide-end",{currentSlideIndex:f.value,prevSlideIndex:z.value,slidesCount:u.value}),H.value=!1,we()},a.transition))}function $(){Y(f.value+a.itemsToScroll)}function ae(){Y(f.value-a.itemsToScroll)}const Te={slideTo:Y,next:$,prev:ae};O("nav",Te),O("isSliding",H);const Se=G(()=>Je({config:a,currentSlide:f.value,slidesCount:u.value}));O("slidesToScroll",Se);const He=G(()=>{const i=a.dir==="rtl"?-1:1,y=Se.value*_.value*i;return{transform:`translateX(${X.x-y}px)`,transition:`${H.value?a.transition:0}ms`,margin:a.wrapAround?`0 -${u.value*_.value}px`:"",width:"100%"}});function ke(){P(),R(),ne(),V(),we()}Object.keys(Ie).forEach(i=>{["modelValue"].includes(i)||_e(()=>s[i],ke)}),_e(()=>s.modelValue,i=>{i!==f.value&&Y(Number(i))}),_e(u,ne),n("before-init"),P();const Ce={config:a,slidesCount:u,slideWidth:_,next:$,prev:ae,slideTo:Y,currentSlide:f,maxSlide:I,minSlide:L,middleSlide:U};t({updateBreakpointsConfigs:R,updateSlidesData:ne,updateSlideWidth:V,initDefaultConfigs:P,restartCarousel:ke,slideTo:Y,next:$,prev:ae,nav:Te,data:Ce});const le=o.default||o.slides,re=o.addons,Ae=B(Ce);return()=>{const i=Ve(le==null?void 0:le(Ae)),y=(re==null?void 0:re(Ae))||[];i.forEach((de,ue)=>de.props.index=ue);let g=i;if(a.wrapAround){const de=i.map((me,q)=>De(me,{index:-i.length+q,isClone:!0,key:`clone-before-${q}`})),ue=i.map((me,q)=>De(me,{index:i.length+q,isClone:!0,key:`clone-after-${q}`}));g=[...de,...i,...ue]}b.value=i,u.value=Math.max(i.length,1);const N=E("ol",{class:"carousel__track",style:He.value,onMousedownCapture:a.mouseDrag?ge:null,onTouchstartPassiveCapture:a.touchDrag?ge:null},g),ce=E("div",{class:"carousel__viewport"},N);return E("section",{ref:r,class:{carousel:!0,"is-sliding":H.value,"is-dragging":ie.value,"is-hover":Z.value,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":a.i18n.ariaGallery,tabindex:"0",onMouseenter:Re,onMouseleave:Xe},[ce,y,E(Ze)])}}}),Me;(function(s){s.arrowUp="arrowUp",s.arrowDown="arrowDown",s.arrowRight="arrowRight",s.arrowLeft="arrowLeft"})(Me||(Me={}));const et=()=>{const s=C("config",B(Object.assign({},p))),o=C("maxSlide",h(1)),n=C("minSlide",h(1)),t=C("currentSlide",h(1)),d=C("nav",{}),r=_=>se({val:t.value,max:o.value,min:0})===_,b=[];for(let _=n.value;_<o.value+1;_++){const u=E("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":r(_)},"aria-label":Be(s.i18n.ariaNavigateToSlide,{slideNumber:_+1}),onClick:()=>d.slideTo(_)}),a=E("li",{class:"carousel__pagination-item",key:_},u);b.push(a)}return E("ol",{class:"carousel__pagination"},b)};var tt=ve({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(s,{slots:o}){const n=C("config",B(Object.assign({},p))),t=C("currentSlide",h(0)),d=C("slidesToScroll",h(0)),r=C("isSliding",h(!1)),b=()=>s.index===t.value,_=()=>s.index===t.value-1,u=()=>s.index===t.value+1,a=()=>{const x=Math.floor(d.value),T=Math.ceil(d.value+n.itemsToShow-1);return s.index>=x&&s.index<=T};return()=>{var x;return E("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":s.isClone,"carousel__slide--visible":a(),"carousel__slide--active":b(),"carousel__slide--prev":_(),"carousel__slide--next":u(),"carousel__slide--sliding":r.value},"aria-hidden":!a()},(x=o.default)===null||x===void 0?void 0:x.call(o))}}});const oe=s=>(Le("data-v-771cc39b"),s=s(),Pe(),s),st={class:"w-100"},ot={class:"row mb-2"},nt=oe(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"編號",-1)),it={class:"col-8 py-1 px-2 bg-grey-light text-start"},at={class:"row mb-2"},lt=oe(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"日期",-1)),rt={class:"col-8 py-1 px-2 bg-grey-light text-start"},ct={class:"row mb-2"},dt=oe(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"災害原因",-1)),ut={class:"col-8 py-1 px-2 bg-grey-light text-start"},mt={class:"row mb-2"},_t=oe(()=>e("div",{class:"col-4 p-1 bg-red-light text-white d-flex justify-content-center align-items-center"},"災害描述",-1)),ft={class:"col-8 py-1 px-2 bg-grey-light text-start"},ht={__name:"Carousel",props:{carouselList:{type:Array,default:[]}},emits:[],setup(s,{emit:o}){const n=s;return B({}),(t,d)=>(l(),je(he($e),null,{addons:fe(()=>[Ee(he(et))]),default:fe(()=>[(l(!0),c(J,null,te(n.carouselList,(r,b)=>(l(),je(he(tt),{key:b},{default:fe(()=>[e("div",st,[e("div",ot,[nt,e("div",it,w(b+1),1)]),e("div",at,[lt,e("div",rt,w(r.date),1)]),e("div",ct,[dt,e("div",ut,w(r.cause),1)]),e("div",mt,[_t,e("div",ft,w(r.description),1)])])]),_:2},1024))),128))]),_:1}))}},bt=Oe(ht,[["__scopeId","data-v-771cc39b"]]),vt="/Map_Demo/assets/3-1-7fbb4494.png",gt="/Map_Demo/assets/back-388ffbfc.svg",pt="/Map_Demo/assets/top-dde40118.svg";const xt={props:{tribeId:{Type:String,default:0},map:{}},setup(s,{emit:o}){const n=Ue(),t=We(),d=B({redArray:[134],mainTextColor:G(()=>d.redArray.includes(Number(t.params.id))?"text-brown":"text-steel"),mainBgColor:G(()=>d.redArray.includes(Number(t.params.id))?"bg-brown":"bg-steel"),type:G(()=>d.redArray.includes(Number(t.params.id))?1:2),coordinates:G(()=>{var u,a,x,T;return(a=(u=d.tribeData)==null?void 0:u.basicInformation)!=null&&a.coordinates?Object.entries((T=(x=d.tribeData)==null?void 0:x.basicInformation)==null?void 0:T.coordinates):null}),tribeData:{}});function r(u){o("onMapControl",{action:u})}function b(){window.scrollTo({top:0,behavior:"smooth"})}Ne(async()=>{var u;await Ge.ajax({url:`https://api.edtest.site/tribe?tribeCode=${(u=t.params)==null?void 0:u.id}`,method:"GET"}).done(a=>{d.tribeData=a}).fail(a=>{console.log("Fail",a)})});function _(){var u;n.push(`/projectPlane/${(u=t.params)==null?void 0:u.id}`)}return{router:n,state:d,onMapControl:r,goTop:b,goPlanePage:_}}},j=s=>(Le("data-v-ee06783e"),s=s(),Pe(),s),yt={class:"row mx-0 detail position-relative"},wt={class:"detailCon"},Tt={class:"row mx-0"},St={class:"aside col-2 px-0 d-none d-sm-block"},kt={class:"ps-0 list-unstyled"},Ct={class:"text-center mb-5"},At={class:"text-center mb-5"},Dt={class:"text-center mb-5"},jt={class:"text-center mb-5"},It={key:0,class:"text-center mb-5"},Mt={key:1,class:"text-center mb-5"},Nt={key:2,class:"text-center mb-5"},Ot={class:"text-center mb-5"},Et={class:"detailMain col-9"},Lt={class:"text-center fw-bold fs-1"},Pt={class:"section mb-5 mx-0 row flex-wrap align-items-center",id:"section1"},Vt={key:0,src:A,class:"d-block d-sm-none"},Bt={key:1,src:D,class:"d-block d-sm-none"},Rt={class:"col-12 col-sm-8"},Xt=j(()=>e("p",null,"聚落坐標(97TM2,WGS84)",-1)),Ht=j(()=>e("p",null,"代表性座標名稱：石磊國民小學(疏散避難處所)",-1)),Yt=j(()=>e("br",{class:"d-block d-sm-none"},null,-1)),zt={class:"row flex-wrap flex-sm-nowrap mx-0 mb-5 justify-content-between d-flex"},Gt={class:"section col-5 col-sm-3 py-4 px-0 col-3 text-center"},Ut={key:0,src:A},Wt={key:1,src:D},Ft={class:"mb-0 fw-bold"},qt={class:"section col-5 col-sm-3 py-4 px-0 col-3 text-center"},Jt={key:0,src:A},Kt={key:1,src:D},Qt={class:"mb-0 fw-bold"},Zt={class:"section col-12 col-sm-3 py-4 px-0 mt-5 mt-sm-0 text-center"},$t={key:0,src:A},es={key:1,src:D},ts={class:"mb-0 fw-bold"},ss={class:"section mb-5",id:"section2"},os={key:0,src:A},ns={key:1,src:D},is=j(()=>e("div",{class:"d-flex flex-wrap flex-sm-nowrap mx-0 align-items-center"},[e("img",{src:vt,class:"me-sm-4 w-100 w-sm-10"}),e("div",null,[e("p",null,"名稱 : 石磊國小"),e("p",null,"地址 : 新竹縣尖石鄉49號"),e("p",null,"簡介 : 新竹縣尖石鄉石磊國民小學是位於台灣新竹縣尖石鄉玉峰村的一座國民小學，校園無圍牆及操場，為全臺灣腹地最小的國民小學。該學校始建於中華民國四十五年八月，最初名為玉峰國民學校石磊分班。民國五十七年八月改稱新竹縣尖石鄉石磊國民小學 ")])],-1)),as={class:"section mb-5",id:"section3"},ls={key:0,src:A},rs={key:1,src:D},cs={class:"section mb-5",id:"section4"},ds={key:0,src:A},us={key:1,src:D},ms=j(()=>e("div",null,"石磊部落範圍內之文化地景分佈如下圖所示。地標地物包括石磊國小、石磊天主堂、石磊文化健康站和石磊教會等。部落產業以農業為主，種植椴木香菇及有機農業，以高冷蔬菜為主。",-1)),_s=j(()=>e("div",{class:"my-5"},[e("p",{class:"mb-2"},"部落名稱:石磊部落"),e("p",{class:"mb-2"},"主要原住民族群:泰雅族")],-1)),fs={class:"list-unstyled d-flex flex-wrap justify-content-around"},hs={class:"col-5 col-sm-3 px-2"},bs=["src"],vs={key:0,class:"section mb-5 history",id:"section5"},gs={key:0,src:A},ps={key:1,src:D},xs=j(()=>e("div",{class:"mb-4"}," 依據111年尖石鄉公所地區災害防救計畫及查詢災害復建工程經費審議及執行資訊系統後，將發生於石磊部落範圍內(及鄰近)之災害事件彙整如下表，並於111年12月22日進行現場調查。災害原因多為降雨及颱風事件，主要的災害類型為土石崩落及邊坡災害。 ",-1)),ys={class:"table w-100 d-none d-sm-block"},ws={class:"d-flex flex-nowrap justify-content-between"},Ts={class:"col-1 bg-grey-light"},Ss={class:"col-2 bg-grey-light"},ks={class:"col-3 bg-grey-light"},Cs={class:"col-4 bg-grey-light"},As={key:1,class:"section mb-5",id:"section6"},Ds={key:0,src:A},js={key:1,src:D},Is=j(()=>e("div",{class:"mb-4"},[e("iframe",{src:"https://www.youtube.com/embed/-a0EqPzXe34?si=KzHgUYaHk7sa2TIr"})],-1)),Ms={key:2,class:"section mb-5",id:"section7"},Ns={key:0,src:A},Os={key:1,src:D},Es={class:"mb-4"},Ls=["src"],Ps={class:"position-fixed bottom-0 end-0 w-auto m-2 m-sm-5"},Vs=j(()=>e("img",{src:gt},null,-1)),Bs=[Vs],Rs=j(()=>e("img",{src:pt},null,-1)),Xs=[Rs];function Hs(s,o,n,t,d,r){var _,u,a,x,T,f,z,U,I,L,M;const b=bt;return l(),c("div",yt,[e("div",{class:m(["redTotem",t.state.type==1?"redTotem":"blueTotem"])},null,2),e("div",wt,[e("div",Tt,[e("div",St,[e("ul",kt,[e("li",Ct,[e("a",{href:"#section1",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"基本資料",2)]),e("li",At,[e("a",{href:"#section2",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"部落地標",2)]),e("li",Dt,[e("a",{href:"#section3",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"自然環境",2)]),e("li",jt,[e("a",{href:"#section4",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"人文環境",2)]),(l(),c("li",It,[e("a",{href:"#section5",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"歷史災害",2)])),t.state.tribeData.visionVideo?(l(),c("li",Mt,[e("a",{href:"#section6",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"動畫影片",2)])):ee("",!0),t.state.tribeData.engineeringVisionPosterThumbnail?(l(),c("li",Nt,[e("a",{href:"#section7",class:m(["fs-5 bg-white py-3 fw-bold rounded text-decoration-none",t.state.mainTextColor])},"願景海報",2)])):ee("",!0),e("li",Ot,[e("button",{class:m(["border-0 fs-5 bg-white py-3 fw-bold rounded text-decoration-none w-100",t.state.mainTextColor]),onClick:o[0]||(o[0]=v=>t.goPlanePage())},"工程計畫圖",2)])])]),e("div",Et,[e("h2",Lt,w((u=(_=t.state.tribeData)==null?void 0:_.basicInformation)==null?void 0:u.tribeName),1),e("div",Pt,[e("div",{class:m(["fs-5 text-brown fw-bold col-12 col-sm-3 mb-4 mb-sm-0 text-center d-flex align-items-center",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",Vt)):(l(),c("img",Bt)),k(" 聚落座標 ")],2),e("div",Rt,[Xt,Ht,(l(!0),c(J,null,te(t.state.coordinates,(v,P)=>{var R,W,F,V;return l(),c("p",null,[e("p",null,[k(" 【 "+w(v[0])+"座標 】 ",1),Yt,k(" 經度："+w(((R=v[1])==null?void 0:R.lng)||((W=v[1])==null?void 0:W.x))+"，緯度："+w(((F=v[1])==null?void 0:F.lat)||((V=v[1])==null?void 0:V.y)),1)])])}),256))])]),e("div",zt,[e("div",Gt,[e("p",{class:m(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",Ut)):(l(),c("img",Wt)),k(" 人口戶數 ")],2),e("p",Ft,w((x=(a=t.state.tribeData)==null?void 0:a.basicInformation)==null?void 0:x.totalHouseholds),1)]),e("div",qt,[e("p",{class:m(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",Jt)):(l(),c("img",Kt)),k(" 聚落規模 ")],2),e("p",Qt,w((f=(T=t.state.tribeData)==null?void 0:T.basicInformation)==null?void 0:f.scale),1)]),e("div",Zt,[e("p",{class:m(["mb-2 fs-5 fw-bold",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",$t)):(l(),c("img",es)),k(" 行政區域 ")],2),e("p",ts,w((U=(z=t.state.tribeData)==null?void 0:z.basicInformation)==null?void 0:U.area),1)])]),e("div",ss,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",os)):(l(),c("img",ns)),k(" 部落地標 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),is]),e("div",as,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",ls)):(l(),c("img",rs)),k(" 自然環境 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),e("div",null,[e("p",null,w((I=t.state.tribeData)==null?void 0:I.naturalEnvironment),1)])]),e("div",cs,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",ds)):(l(),c("img",us)),k(" 人文環境 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),ms,_s,e("div",null,[e("div",{class:m(["fw-bold mb-2",t.state.mainTextColor])},"文化地景點",2),e("ul",fs,[(l(!0),c(J,null,te(t.state.tribeData.culturalLandscape,(v,P)=>(l(),c("li",hs,[e("img",{src:v.image,class:"w-100"},null,8,bs),e("p",null,w(v.name),1)]))),256))])])]),(l(),c("div",vs,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",gs)):(l(),c("img",ps)),k(" 歷史災害 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),xs,e("div",ys,[e("div",ws,[e("div",{class:m(["col-1 text-white",t.state.mainBgColor])},"編號",2),e("div",{class:m(["col-2 text-white",t.state.mainBgColor])},"日期",2),e("div",{class:m(["col-3 text-white",t.state.mainBgColor])},"災害原因",2),e("div",{class:m(["col-4 text-white",t.state.mainBgColor])},"災害描述",2)]),(l(!0),c(J,null,te((L=t.state.tribeData)==null?void 0:L.historicalDisasters,(v,P)=>(l(),c("div",{class:"d-flex flex-nowrap justify-content-between",key:P},[e("div",Ts,w(P+1),1),e("div",Ss,w(v.date),1),e("div",ks,w(v.cause),1),e("div",Cs,w(v.description),1)]))),128))]),Ee(b,{class:"mb-5 history table w-100 d-block d-sm-none",style:{padding:"0"},"items-to-show":1,autoplay:2e3,"wrap-around":!0,carouselList:(M=t.state.tribeData)==null?void 0:M.historicalDisasters},null,8,["carouselList"])])),t.state.tribeData.visionVideo?(l(),c("div",As,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",Ds)):(l(),c("img",js)),k(" 動畫影片 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),Is])):ee("",!0),t.state.tribeData.engineeringVisionPosterThumbnail?(l(),c("div",Ms,[e("div",{class:m(["fw-bold fs-5",t.state.mainTextColor])},[t.state.type==1?(l(),c("img",Ns)):(l(),c("img",Os)),k(" 願景海報 ")],2),e("hr",{class:m(["border-5 opacity-100 mt-1 mb-3",t.state.mainTextColor])},null,2),e("div",Es,[e("img",{class:"mx-auto mt-4 d-block",style:{width:"80%"},src:t.state.tribeData.engineeringVisionPosterThumbnail,alt:""},null,8,Ls)])])):ee("",!0)])])]),e("div",Ps,[e("div",{class:"mb-4 cursor-pointer",onClick:o[1]||(o[1]=v=>t.router.push({name:"map"}))},Bs),e("div",{class:"goTop cursor-pointer",onClick:o[2]||(o[2]=v=>t.goTop())},Xs)])])}const Gs=Oe(xt,[["render",Hs],["__scopeId","data-v-ee06783e"]]);export{Gs as default};
//# sourceMappingURL=mapDetails-cd9ea1da.js.map
