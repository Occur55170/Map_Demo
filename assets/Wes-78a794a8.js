import{_ as S,a as i,r as f,h as v,c as y,b as o,F as E,o as b}from"./index-5858d9ca.js";import{bX as u,bT as c,bU as R,bW as t,bV as l,bY as T,ca as M}from"./proj4-25ce1a40.js";const h='&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';class x extends u{constructor(e){e=e||{};let r;e.attributions!==void 0?r=e.attributions:r=[h];const n=e.crossOrigin!==void 0?e.crossOrigin:"anonymous",s=e.url!==void 0?e.url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png";super({attributions:r,attributionsCollapsible:!1,cacheSize:e.cacheSize,crossOrigin:n,interpolate:e.interpolate,maxZoom:e.maxZoom!==void 0?e.maxZoom:19,opaque:e.opaque!==void 0?e.opaque:!0,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:s,wrapX:e.wrapX,zDirection:e.zDirection})}}const O=x;const L={__name:"Wes",setup(d){c.defs("EPSG:3826","+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"),R(c);const e=i(null),r=i(null);new t({preload:1/0,source:new u({url:"https://wmts.nlsc.gov.tw/wmts/EMAP5/default/EPSG:3857/{z}/{y}/{x}"}),crossOrigin:"anonymous"});const n=new t({source:new l({name:"順向坡分布",url:"https://dwgis1.ncdr.nat.gov.tw/server/services/MAP0627/Map2022EGDebrisSlide/MapServer/WMSServer",params:{REQUEST:"GetMap",SERVICE:"WMS",VERSION:"1.1.1",LAYERS:"2",STYLES:"",FORMAT:"image/png",BGCOLOR:"0xFFFFFF",TRANSPARENT:"TRUE",SRS:"EPSG:3826"},crossOrigin:"anonymous",projection:"EPSG:3826"})});new t({source:new l({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR"}})});const s=f({India:[68.17665,7.96553,97.40256,35.49401],Argentina:[-73.41544,-55.25,-53.62835,-21.83231],Nigeria:[2.6917,4.24059,14.57718,13.86592],Sweden:[11.02737,55.36174,23.90338,69.10625],Taiwan:[119.5,20.5,124.5,25.5]});function p(){r.value=new T({extent:s.Taiwan,target:e.value,layers:[new t({preload:1/0,source:new O})],view:new M({projection:"EPSG:4326",center:[120.41670777208755,24.197957034875305],zoom:10})})}function m(){console.log(r.value.getLayers().getArray());const a=r.value.getLayers().getArray()[1].getSource();console.log(a)}function _(){r.value.addLayer(n)}return v(()=>{p()}),(g,a)=>(b(),y(E,null,[o("button",{onClick:a[0]||(a[0]=w=>m())},"show"),o("button",{onClick:a[1]||(a[1]=w=>_())},"add"),o("div",{id:"map",class:"map__x",ref_key:"mapCom",ref:e},null,512)],64))}},G=S(L,[["__scopeId","data-v-a69129c8"]]);export{G as default};
//# sourceMappingURL=Wes-78a794a8.js.map
