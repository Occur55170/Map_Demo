import{_ as W,r as D,s as y,f as z,y as B,c as N,a as _,l as V,$ as S,o as E}from"./index-4fa1ee36.js";import{n as $,ac as H,ad as b,k as I,F as T,P as k,m as P,V as R,S as j,I as A}from"./core-a8cc157c.js";const F={props:{},setup(h,{emit:x}){const t=D({defaultCenter:[121.326776,24.655499],defaultCenterZoom:9,targetNum:1,conditionWrap:!1,layerSelect:!1,currentLayers:[],layers:[],mapLayers:y(()=>t.layers.map((e,n)=>({label:e.group_title,value:e.value,layers:e.group_layers,groupClass:e.group_class}))),selectLock:!1,mapCount:1,map1:null,map2:null,map1LayerStatus:[],map2LayerStatus:[],temp:{map1BaseStatus:0,map2BaseStatus:0},deleteLightbox:!1,dimensionMap:{map1:"2D",map2:"2D"},toSearchDimensionStatus:y(()=>{let e=t.targetNum==1?"map1":"map2";return t.dimensionMap[e]==="2D"}),ol3d:null,selectValueTemp:0,areaData:{nodeRef:null,overlay:null,tribeAreaData:{}},comSize:{wrapHeight:"",wrapWidth:"",conditionCom:{}},selectLayerOption:{}}),l=new $({projection:"EPSG:4326",center:t.defaultCenter,zoom:t.defaultCenterZoom});function f(){t.map1=new I({target:"map1",layers:[b.getBaseMapData(0)],view:l,controls:[]});const e=[117.1595,21.2646,123.9804,26.5353],n=(e[2]+e[0])/2,s=(e[3]+e[1])/2,r=new T({geometry:new k([n,s])}),c=new P({source:new R({features:[r]})});t.map1.addLayer(c);const o="http://localhost:5173/forecast.gif",p=gifler(o),m=e[2]-e[0],d=e[3]-e[1];p.frames(document.createElement("canvas"),function(i,a){const g=m/a.width,v=d/a.height,C=Math.min(g,v),M=t.map1.getView().getResolution();r.setStyle(new j({image:new A({img:i.canvas,imgSize:[a.width,a.height],opacity:.8,scale:C/M})})),i.clearRect(0,0,a.width,a.height),i.drawImage(a.buffer,a.x,a.y)},!0)}function w(){var s;let e=t.targetNum==1?t.map1:t.map2;const n=(s=e==null?void 0:e.getLayers())==null?void 0:s.getArray();t.currentLayers=n==null?void 0:n.map(r=>({label:r.get("label"),id:r.get("id"),visible:r.getVisible()}))}function u(){return S.ajax({url:"https://api.edtest.site/underLayers",method:"GET"}).done(e=>e)}function L(){return S.ajax({url:"https://api.edtest.site/layers",method:"GET"}).done(e=>e)}return z(async()=>{let e=u(),n=L();Promise.all([e,n]).then(s=>{let r=s[0].data.map((c,o)=>({mapType:"base",baseId:o,onCurrent:!1,...c}));b.setBaseMapData(r),t.temp.map1BaseStatus=0,t.temp.baseMapList=H(),t.layers=s[1].map((c,o)=>(c.group_layers.forEach((p,m)=>{let d=m,i;p.id=`node${o}_subNode${d}_nestedSubNode${i}`,p.single_tiles||p.tiles_list.forEach((a,g)=>{i=g,a.id=`node${o}_subNode${d}_nestedSubNode${i}`})}),{...c,value:o})),B(()=>{f(),w()})}),t.comSize.wrapHeight=window.innerHeight,t.comSize.wrapWidth=window.innerWidth,window.onresize=s=>{t.comSize.wrapHeight=s.target.innerHeight,t.comSize.wrapWidth=s.target.innerWidth}}),{state:t,props:h}}},G={class:"w-100 d-flex flex flex-sm-row flex-wrap flex-sm-nowrap mapWrap",id:"mapWrap"};function Z(h,x,t,l,f,w){var u;return E(),N("div",null,[_("div",G,[_("div",{id:"map1",class:V({"w-100":((u=l.state.map1)==null?void 0:u.getTarget())=="map1","h-100":l.state.mapCount===1,"h-50":l.state.mapCount===2&&l.state.comSize.wrapWidth<600})},null,2)])])}const X=W(F,[["render",Z]]);export{X as default};
//# sourceMappingURL=Wes-61373514.js.map
