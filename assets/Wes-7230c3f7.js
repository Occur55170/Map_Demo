import{bL as s,bM as o,bN as r,bI as n,bJ as i,bK as l}from"./proj4-56d3a803.js";import{T as p}from"./TileWMS-71fd586c.js";import{_ as c,r as _,c as m,a as e,F as d,o as u}from"./index-54a32c9b.js";s.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs");s.defs("EPSG:3826","+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");o(s);new r;_({India:[68.17665,7.96553,97.40256,35.49401],Argentina:[-73.41544,-55.25,-53.62835,-21.83231],Nigeria:[2.6917,4.24059,14.57718,13.86592],Sweden:[11.02737,55.36174,23.90338,69.10625],Taiwan:[119.5,20.5,124.5,25.5]});new n({target:"map",layers:[new i({source:new p({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})})],view:new l({center:[-10997148,4569099],zoom:4})});const f={},g=e("div",{id:"map",class:"map"},null,-1),w=e("input",{type:"checkbox",id:"interpolate",checked:""},null,-1),y=e("label",{for:"interpolate"},"Interpolate",-1);function b(a,t,k,v,h,x){return u(),m(d,null,[g,e("div",null,[e("button",{onClick:t[0]||(t[0]=S=>a.setSource())},"999"),w,y])],64)}const E=c(f,[["render",b]]);export{E as default};
//# sourceMappingURL=Wes-7230c3f7.js.map
