import{V as Q,O as j,m as E,M as v,b as I,S as U,c as X,a as K,_ as $,d as ee,n as te,e as ae,f as oe,g as ne,h as re,i as se,j as le,k as ie,F as de,P as ce,l as ye,I as me}from"./OLCesium-10aba27b.js";import{_ as ue,r as pe,f as H,g as ge,$ as fe,n as q,c as _,d as y,h as Z,y as Y,i as b,j as k,m as B,k as be,l as Le,p as J,o as f}from"./index-dd2b276c.js";const _e={props:{},setup(P,{emit:i}){const N=E,e=I,t=pe({defaultCenter:[121.326776,24.655499],defaultCenterZoom:14,targetNum:1,conditionWrap:!1,layerSelect:!1,currentLayers:[],layers:[],mapLayers:H(()=>t.layers.map((a,o)=>({label:a.group_title,value:a.value,layers:a.group_layers,groupClass:a.group_class}))),baseMapsOptions:H(()=>I.sourceData()),selectLock:!1,mapCount:1,map1:null,map2:null,map1LayerStatus:[],map2LayerStatus:[],deleteLightbox:!1,dimensionMap:{map1:"2D",map2:"2D"},toSearchDimensionStatus:H(()=>{let a=t.targetNum==1?"map1":"map2";return t.dimensionMap[a]==="2D"}),ol3d:null,selectValueTemp:0,areaData:{nodeRef:null,overlay:null,tribeAreaData:{}},comHeight:{wrapHeight:"",mapHeight:""}}),D=new Q({projection:"EPSG:4326",center:t.defaultCenter,zoom:t.defaultCenterZoom});let p=null;function W(){t.map1=new v({target:"map1",layers:[I.sourceFun("default")],view:D,controls:[]})}function z(a,o){const s=new le({source:new ie({features:[new de({geometry:new ce([a,o]),name:"Null Island",population:4e3,rainfall:500})]}),style:new ye({image:new me({anchor:[.5,100],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"https://www.ockert-cnc.de/wp-content/uploads/2016/12/map-marker-icon-100x100.png"})})});let r=t.targetNum==1?"map1":"map2";t[r].addLayer(s)}function O({action:a,value:o}){var u;let s=((u=t.map1)==null?void 0:u.getTarget())==null?"map2":"map1",r=t[s].getView();switch(a){case"In":r.animate({zoom:r.getZoom()+1});break;case"Out":r.animate({zoom:r.getZoom()-1});break;case"toNorth":r.animate({rotation:0});break;case"moveTo":if(o){const{xAxis:m,yAxis:L}=o;r.animate({center:[m,L],zoom:10,duration:100})}else navigator.geolocation.getCurrentPosition(function(m){r.animate({center:[m.coords.longitude,m.coords.latitude],zoom:17,duration:100}),z(m.coords.longitude,m.coords.latitude)});break;case"fullScreen":let d=document.getElementById(`map${t.targetNum}`);d.requestFullscreen?d.requestFullscreen():d.msRequestFullscreen?d.msRequestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen&&d.webkitRequestFullscreen();break}}function h({action:a,value:o}){var u;console.log(a,o);let s=t.targetNum==1?t.map1:t.map2,r=s==null?void 0:s.getLayers();switch(a){case"layerMode":if(o.checked){t.layers[o.nodeIndex].group_layers[o.subNodeIndex].single_tiles||(r.getArray().forEach(F=>{F.get("id")&&F.get("id").includes(`node${o.nodeIndex}_subNode${o.subNodeIndex}_nestedSubNode`)&&s.removeLayer(F)}),S("delete",s.getTarget(),o.id));let l=o.nestedSubNodeIndex||t.selectValueTemp,g=N.getLayer(t.layers[o.nodeIndex].group_layers[o.subNodeIndex],l,o.id);s.addLayer(g),o.id==="node0_subNode3_nestedSubNodeundefined"&&h({action:"layerMode",value:{checked:!0,id:"node0_subNode4_nestedSubNodeundefined",nestedSubNode:!1,nestedSubNodeIndex:void 0,nodeIndex:0,subNodeIndex:4}}),o.id==="node0_subNode4_nestedSubNodeundefined"&&w(s),S("add",s.getTarget(),o.id)}else{let l=r.getArray(),g;switch(o.id){case"node0_subNode0_nestedSubNodeundefined":g=l.filter(c=>c.get("id")?c==null?void 0:c.get("id").includes("node0_subNode0_nestedSubNode"):!1),g.forEach(c=>{s.removeLayer(c)});break;case"node3_subNode1_nestedSubNodeundefined":g=l.filter(c=>c.get("id")?c==null?void 0:c.get("id").includes("node3_subNode1_nestedSubNodeundefined"):!1),g.forEach(c=>{s.removeLayer(c)});break;default:l.forEach(c=>{c.get("id")==o.id&&s.removeLayer(c)});break}S("delete",s.getTarget(),o.id)}break;case"selectLayerMode":if(t.selectLock)return;o.layerName==="all"?r.getArray().filter(c=>c.get("name")!=="default").forEach(c=>{s.removeLayer(c)}):r.getArray().forEach(g=>{g.get("id")==o.id&&s.removeLayer(g)});break;case"changeOrder":if(t.selectLock)return;let d=E.getLayerIndex(o.id),m=N.getLayer(t.layers[d.nodeIndex].group_layers[d.subNodeIndex],d.nestedSubNodeIndex,o.id);if(o.movement==="up"){if(o.key+1==r.getArray().length)return;o.checked=!1,h({action:"layerMode",value:o}),r.insertAt(o.key+1,m)}if(o.movement==="down"){if(o.key-1==0)return;o.checked=!1,h({action:"layerMode",value:o}),r.insertAt(o.key-1,m)}break;case"changeLayerVisible":if(t.selectLock)return;let L=!r.getArray()[o.key].getVisible();r.getArray()[o.key].setVisible(L);break;case"baseMap":let M=e.sourceFun(o.layerName);r.extend([M]),r.getArray().forEach(l=>{l.get("name")!==o.layerName&&s.removeLayer(l)});break;case"changeMapCount":if(t.mapCount===o.qty)return;let C=t.targetNum!==1?"map1":"map2";t.mapCount=o.qty;let G=t[`${C}LayerStatus`].filter(l=>l!=="3D").map(l=>E.getLayerIndex(l));if(o.qty===2&&(t[C]=new v({target:C,layers:[I.sourceFun("default"),...G.map(l=>N.getLayer(t.layers[l.nodeIndex].group_layers[l.subNodeIndex],l.nestedSubNodeIndex,l.id))],view:D,controls:[]}),((u=t[`${C}LayerStatus`])==null?void 0:u.indexOf("3D"))!==-1)){p=new j({map:t[C]}),p.setEnabled(!0),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NzM3MWFhYS0xMjNlLTQ3MTMtODFjZS0xZjMzM2I5NGZiYTEiLCJpZCI6MTMwODE4LCJpYXQiOjE2ODQwNzM3Mjl9.UYu4kBialPo19dcvosHzZTpg2BD1zkFQnjCD78YiiYo";let l=p.getCesiumScene({});l.terrainProvider=Cesium.createWorldTerrain({})}if(o.qty===1){t[C]=null;const l=document.getElementById(C);for(;l.firstChild;)l.removeChild(l.firstChild)}break;case"changeDimensionMap":let A=t.targetNum==1?"map1":"map2";if(t.dimensionMap[A]=o,o==="3D"){p=new j({map:s}),p.setEnabled(!0),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NzM3MWFhYS0xMjNlLTQ3MTMtODFjZS0xZjMzM2I5NGZiYTEiLCJpZCI6MTMwODE4LCJpYXQiOjE2ODQwNzM3Mjl9.UYu4kBialPo19dcvosHzZTpg2BD1zkFQnjCD78YiiYo";let l=p.getCesiumScene({});l.terrainProvider=Cesium.createWorldTerrain({}),t[`${A}LayerStatus`].push("3D")}else p.setEnabled(!1),t[`${A}LayerStatus`]=t[`${A}LayerStatus`].filter(l=>l!=="3D");break;case"setOpacity":r.getArray()[o.key].getOpacity()!==1?r.getArray()[o.key].setOpacity(1):r.getArray()[o.key].setOpacity(.5);break}x()}function V(a){var s;t.targetNum=a;let o=t.targetNum!==1?"map1":"map2";if(t.mapCount===1){if(!t[`map${a}`]){let r=t[`map${a}LayerStatus`].filter(d=>d!=="3D");r.includes("node0_subNode4_nestedSubNodeundefined")&&(r=[...r.filter(m=>m!=="node0_subNode4_nestedSubNodeundefined"),"node0_subNode4_nestedSubNodeundefined"]);let u=r.map(d=>E.getLayerIndex(d));t[`map${a}`]=new v({target:`map${a}`,layers:[I.sourceFun("default"),...u.map(d=>N.getLayer(t.layers[d.nodeIndex].group_layers[d.subNodeIndex],d.nestedSubNodeIndex,d.layeredIndex))],view:D,controls:[]}),w(t[`map${a}`]),((s=t[`map${a}LayerStatus`])==null?void 0:s.indexOf("3D"))!==-1&&(p=new j({map:t[`map${a}`]}),p.setEnabled(!0))}if(t[o]){t[o]=null;const r=document.getElementById(o);for(;r.firstChild;)r.removeChild(r.firstChild)}}q(()=>{x()})}function x(){var s;let a=t.targetNum==1?t.map1:t.map2;const o=(s=a==null?void 0:a.getLayers())==null?void 0:s.getArray();t.currentLayers=o==null?void 0:o.map(r=>({label:r.get("label"),id:r.get("id"),visible:r.getVisible()}))}function T(){t.conditionWrap=!t.conditionWrap}function S(a,o,s){if(a==="add")t[`${o}LayerStatus`].push(s);else if(a==="delete"){let r=t[`${o}LayerStatus`].findIndex(u=>u===s);t[`${o}LayerStatus`].splice(r,1)}else console.log("error")}function w(a){var s;let o=new U({layers:(s=a==null?void 0:a.getLayers())==null?void 0:s.getArray(),condition:X});a.addInteraction(o),o.on("select",r=>{let u=r.selected;r.selected[0]?(t.areaData.overlay=new K({element:t.areaData.nodeRef,autoPan:!0,autoPanAnimation:{duration:250}}),a.addOverlay(t.areaData.overlay),t.areaData.overlay.setPosition(r.mapBrowserEvent.coordinate),u.forEach(d=>{let m=d.getProperties();Object.entries(m).forEach(L=>{const M=L[0],R=L[1];t.areaData.tribeAreaData[M]=R})})):(a.removeOverlay(t.areaData.overlay),t.areaData.overlay=null)})}function n(){(t.targetNum==1?t.map1:t.map2).removeOverlay(t.areaData.overlay),t.areaData.overlay=null}return ge(async()=>{await fe.ajax({url:"https://api.edtest.site/layers",method:"GET"}).done(a=>{t.layers=a.map((o,s)=>(o.group_layers.forEach((r,u)=>{let d=u,m;r.id=`node${s}_subNode${d}_nestedSubNode${m}`,r.single_tiles||r.tiles_list.forEach((L,M)=>{m=M,L.id=`node${s}_subNode${d}_nestedSubNode${m}`})}),{...o,value:s})),q(()=>{W(),x()})}).fail(a=>{console.log("Fail",a)}),t.comHeight.wrapHeight=window.innerHeight,console.log(t.comHeight.wrapHeight/t.mapCount),window.onresize=a=>{t.comHeight.wrapHeight=a.target.innerHeight,console.log(t.comHeight.wrapHeight/t.mapCount)}}),{state:t,props:P,mapControl:O,layerControl:h,getCurrentLayerNames:x,changeTarget:V,conditionWrap:T,closeMapData:n}}},he={class:"w-100 d-flex flex flex-sm-row flex-wrap flex-sm-nowrap mapWrap",id:"mapWrap"},Ce={key:0,class:"middleLine"},ke={class:"SearchBar d-none d-sm-block position-absolute"},xe={class:"d-flex align-items-center"},Se=y("img",{src:$,alt:"",class:"mb-2"},null,-1),Ne={class:"d-flex align-items-center"},we=y("span",{class:"me-2"},"部落",-1),Me=y("li",{class:"d-flex align-items-center"},null,-1),Ie=y("li",{class:"d-flex align-items-center"},null,-1),De={class:"conditionCom d-none d-sm-block position-absolute"},Oe={class:"mb-2"},Te={key:1,class:"mb-4"},Ae={key:1},Ee={key:0,class:"lightWrap w-100 h-100 d-flex justify-content-center align-items-center"},We={class:"p-4 rounded bg-white",style:{width:"250px"}},ze=y("p",{class:"text-center fw-bold"},"是否要刪除全部圖層",-1),Ve={class:"d-flex justify-content-around"},Fe={class:"m-Navbar d-flex d-sm-none position-fixed bottom-0 start-0 w-100"},je={key:1};function ve(P,i,N,e,t,D){var T,S,w;const p=ee,W=te,z=ae,O=oe,h=ne,V=re,x=se;return f(),_("div",null,[y("div",he,[y("div",{id:"map1",class:Z({"w-100":((T=e.state.map1)==null?void 0:T.getTarget())=="map1","h-100":e.state.mapCount===1,"h-50":e.state.mapCount===2}),style:Y({height:e.state.comHeight.wrapHeight/e.state.mapCount+"px"})},null,6),e.state.mapCount===2?(f(),_("div",Ce)):b("",!0),y("div",{id:"map2",class:Z({"w-100":((S=e.state.map2)==null?void 0:S.getTarget())=="map2","h-100":e.state.mapCount===1,"h-50":e.state.mapCount===2}),style:Y({height:e.state.comHeight.wrapHeight/e.state.mapCount+"px"})},null,6)]),k(p,{class:"asideTool position-absolute top-50 translate-middle-y",id:"asideTool",onOnMapControl:i[0]||(i[0]=({action:n,value:a})=>{e.mapControl({action:n,value:a})})}),y("div",ke,[y("div",xe,[Se,y("ul",null,[y("li",Ne,[we,k(W,{class:"mapSourceOption d-none d-sm-block",baseMapsOptions:e.state.baseMapsOptions,onChangeBaseMaps:({action:n,value:a})=>{e.layerControl({action:n,value:a})}},null,8,["baseMapsOptions","onChangeBaseMaps"])]),Me,Ie])]),k(z,{dimensionMapStatus:e.state.toSearchDimensionStatus,currentLayers:e.state.currentLayers,mapCount:e.state.mapCount,baseMapsOptions:e.state.baseMapsOptions,onChangeBaseMaps:({action:n,value:a})=>{e.layerControl({action:n,value:a})},onOnLayerControl:i[1]||(i[1]=({action:n,value:a})=>{e.layerControl({action:n,value:a})}),onOnChangeTarget:i[2]||(i[2]=n=>{e.changeTarget(n)}),onConditionWrap:i[3]||(i[3]=n=>{e.conditionWrap(n)})},null,8,["dimensionMapStatus","currentLayers","mapCount","baseMapsOptions","onChangeBaseMaps"])]),y("div",De,[y("div",Oe,[e.state.conditionWrap?b("",!0):(f(),_("button",{key:0,class:"border-0 w-100 rounded-4 bg-steel text-white text-center p-2 fw-bold fs-5",onClick:i[4]||(i[4]=n=>e.state.conditionWrap=!0)}," 圖層選項 ")),e.state.conditionWrap?(f(),_("div",Te,[k(O,B({mapLayers:e.state.mapLayers,currentLayers:e.state.currentLayers,onClose:()=>{e.state.conditionWrap=!1},showSelectLayerValue:n=>{e.state.selectValueTemp=n}},{onOnMapControl:i[5]||(i[5]=({action:n,value:a})=>{e.mapControl({action:n,value:a})}),onOnLayerControl:i[6]||(i[6]=({action:n,value:a})=>{e.layerControl({action:n,value:a})})}),null,16)])):b("",!0)]),y("div",null,[e.state.layerSelect?b("",!0):(f(),_("button",{key:0,class:"border-0 w-100 rounded-4 bg-steel text-white text-center p-2 fw-bold fs-5",onClick:i[7]||(i[7]=n=>e.state.layerSelect=!0)}," 已選擇的圖層 ")),e.state.layerSelect?(f(),_("div",Ae,[k(h,be(Le({selectLock:e.state.selectLock,currentLayers:e.state.currentLayers,onClose:()=>{e.state.layerSelect=!1},onLockLayer:()=>{e.state.selectLock=!e.state.selectLock},onDeleteLayer:({action:n,value:a})=>{a.layerName=="all"?e.state.deleteLightbox=!0:e.layerControl({action:n,value:a})},onDeleteLayerAll:()=>{e.state.deleteLightbox=!0},onLayerControl:({action:n,value:a})=>{e.layerControl({action:n,value:a})}})),null,16)])):b("",!0)])]),e.state.deleteLightbox?(f(),_("div",Ee,[y("div",We,[ze,y("div",Ve,[y("button",{class:"rounded px-3 py-1 bg-steel text-white border-0",onClick:i[8]||(i[8]=()=>{e.layerControl({action:"selectLayerMode",value:{layerName:"all"}}),e.state.deleteLightbox=!1})},"確定"),y("button",{class:"rounded px-3 py-1 bg-secondary bg-gradient text-white border-0",onClick:i[9]||(i[9]=()=>{e.state.deleteLightbox=!1})},"取消")])])])):b("",!0),y("div",{id:"popup",class:"position-absolute bottom-0",ref:n=>{e.state.areaData.nodeRef=n}},[(w=e.state.areaData)!=null&&w.overlay?(f(),J(V,{key:0,class:"areaData",closeMapData:()=>{e.closeMapData()},tribeAreaData:e.state.areaData.tribeAreaData,maxHeight:500},null,8,["closeMapData","tribeAreaData"])):b("",!0)],512),y("div",Fe,[e.state.conditionWrap?(f(),J(O,B({key:0,class:"position-absolute bottom-100 w-100"},{mapLayers:e.state.mapLayers,currentLayers:e.state.currentLayers,onClose:()=>{e.state.conditionWrap=!1},showSelectLayerValue:n=>{e.state.selectValueTemp=n}},{onOnMapControl:i[10]||(i[10]=({action:n,value:a})=>{e.mapControl({action:n,value:a})}),onOnLayerControl:i[11]||(i[11]=({action:n,value:a})=>{e.layerControl({action:n,value:a})})}),null,16)):b("",!0),e.state.layerSelect?(f(),_("div",je,[k(h,B({class:"position-absolute bottom-100 w-100"},{selectLock:e.state.selectLock,currentLayers:e.state.currentLayers,onClose:()=>{e.state.layerSelect=!1},onChangLayerVisible:n=>{e.layerControl(n)},onChangeOrderLayer:({action:n,value:a})=>{e.layerControl({action:n,value:a})},onLockLayer:()=>{e.state.selectLock=!e.state.selectLock},onDeleteLayer:({action:n,value:a})=>{a.layerName=="all"?e.state.deleteLightbox=!0:e.layerControl({action:n,value:a})},onDeleteLayerAll:()=>{e.state.deleteLightbox=!0}},{setOpacity:({action:n,value:a})=>{e.layerControl({action:n,value:a})}}),null,16,["setOpacity"])])):b("",!0),k(x,{dimensionMapStatus:e.state.toSearchDimensionStatus,currentLayers:e.state.currentLayers,mapCount:e.state.mapCount,openConditionWrap:()=>{e.state.conditionWrap=!e.state.conditionWrap,e.state.layerSelect=!1},openLayerSelect:()=>{e.state.layerSelect=!e.state.layerSelect,e.state.conditionWrap=!1},onLayerControl:({action:n,value:a})=>{e.layerControl({action:n,value:a})},onChangeTarget:n=>{e.changeTarget(n)},onConditionWrap:i[12]||(i[12]=n=>{e.conditionWrap(n)})},null,8,["dimensionMapStatus","currentLayers","mapCount","openConditionWrap","openLayerSelect","onLayerControl","onChangeTarget"])])])}const Re=ue(_e,[["render",ve]]);export{Re as default};
//# sourceMappingURL=Wes-51edbe4f.js.map
