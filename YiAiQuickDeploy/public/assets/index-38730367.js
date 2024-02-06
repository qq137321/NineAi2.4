import{d as D,o as c,c as k,a as o,u as re,g as le,b as ie,r as n,e as N,f as ce,w as F,h as O,i as de,n as P,F as ue,j as pe,k as f,l as v,m as l,T as he,t as ve,p as R,q as j,_ as B,N as z,s as W,v as fe,x as me,y as _e,z as ge,A as we}from"./index-6faa3c26.js";import{t as xe}from"./throttle-5584dbda.js";import{c as ye}from"./index-c94da121.js";const ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},be=o("path",{d:"M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),$e=[be],Le=D({name:"FlashOutline",render:function(d,a){return c(),k("svg",ke,$e)}}),Ce={class:"min-h-full overflow-hidden flex flex-col"},Ie={class:"flex-1 min-h-full p-4 relative"},Me=["id"],Pe=["id","src","onLoad","onError","onClick"],We={class:"menu p-2 text-[#cbd5e1]"},Ne={class:"prompt"},Re={class:"flex justify-end items-end space-x-2"},je=["onClick"],Be={class:"text-sm dark:text-slate-400"},ze=o("span",null,"画同款",-1),De=["onClick"],Ee={class:"text-sm dark:text-slate-400"},He=o("span",null,"使用当前画同款",-1),Se=["onClick"],Ae={class:"text-sm dark:text-slate-400"},Te=o("span",null,"复制提示词",-1),Ue=o("div",{id:"footer",class:"w-full absolute bottom-[350px]"},null,-1),Fe=D({__name:"index",props:{dataList:null,scaleWidth:null,isDrawLike:{type:Boolean},usePropmpt:{type:Boolean},copyPropmpt:{type:Boolean},gap:{default:5}},emits:["loadMore","usePropmptDraw"],setup(m,{emit:d}){var H;const a=m,_=re(),g=(H=le())==null?void 0:H.appContext.config.globalProperties.$viewerApi,b=ie(),$=n({}),L=n(0),i=n(160),u=n(0),w=n([]),C=n(null),p=n(0),h=N(()=>_.isLogin),x=N(()=>a.scaleWidth?Number(a.scaleWidth)*2+a.gap+150:150),V=ce();function q(){J(),K();const t=u.value,s=i.value,e=[];a.dataList.forEach((y,r)=>{const S=y.drawRatio.split("x"),se=parseInt(S[0],10),oe=parseInt(S[1],10),ne=s/se,A=oe*ne+a.gap+L.value,M=$.value[y.id];if(e.length<t)M.style.top="0px",M.style.left=`${(s+a.gap)*r}px`,e.push(A);else{const T=Math.min.apply(null,e),U=e.findIndex(ae=>ae===T);M.style.top=`${T+0}px`,M.style.left=`${U*(i.value+a.gap)}px`,e[U]+=A}}),p.value=Math.max(...e)+100}function G(t,s){t&&s&&($.value[s.id]=t)}function J(){const{showName:t=0,showOther:s=0}={};L.value=[t,s].filter(e=>e).length*15}F(()=>a.scaleWidth,t=>{I()}),F(()=>a.dataList,t=>{t&&fe(()=>{I()})},{immediate:!0});function K(){if(!C.value)return;const t=C.value.clientWidth;u.value=Math.floor(t/x.value);const s=t-u.value*x.value,e=(u.value-1)*a.gap;s-e<0&&(u.value-=1),i.value=Math.floor((t-e)/u.value)}function Q(t,s){w.value.push(s.id)}function X(t,s){console.error("Image failed to load:",s),w.value.push(s.id)}function Y(t){if(!h.value)return _.setLoginDialog(!0);const{prompt:s}=t;ye({text:s}),b.success("复制prompt成功")}function Z(t){V.push(`/midjourney?mjId=${t.id}`)}function ee(t){const{fullPrompt:s}=t;d("usePropmptDraw",s)}function te(t){const{drawUrl:s}=t;g({options:{},images:[s]})}const E=N(()=>t=>{const s=t.drawRatio.split("x"),e=Number(s[0]);return Number(s[1])/(e/i.value)}),I=xe(function(){q()},200);return O(async()=>{window.addEventListener("resize",I);const t=document.getElementById("footer");new IntersectionObserver((e,y)=>{e.forEach(r=>{r.isIntersecting&&d("loadMore")})}).observe(t)}),de(()=>{window.removeEventListener("resize",I)}),(t,s)=>(c(),k("div",Ce,[o("div",Ie,[o("div",{id:"wapper",ref_key:"wapperRef",ref:C,class:"wapper",style:P({height:`${p.value}px`})},[(c(!0),k(ue,null,pe(m.dataList,(e,y)=>(c(),k("div",{id:e.id.toString(),key:y,ref_for:!0,ref:r=>G(r,e),class:"wapper-item",style:P({width:`${i.value}px`})},[f(he,{name:"img",css:!0},{default:v(()=>[o("img",{id:e.id.toString(),class:"item-file rounded-sm",style:P({width:`${i.value}px`,height:`${l(E)(e)}px`}),src:e.drawUrl,loading:"lazy",onLoad:r=>Q(r,e),onError:r=>X(r,e),onClick:r=>te(e)},null,44,Pe)]),_:2},1024),o("div",We,[o("div",Ne,ve(e.fullPrompt),1),o("div",Re,[m.isDrawLike?(c(),R(l(z),{key:0,trigger:"hover"},{trigger:v(()=>[o("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(r=>Z(e),["stop"])},[o("span",Be,[f(l(B),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,je)]),default:v(()=>[ze]),_:2},1024)):W("",!0),m.usePropmpt?(c(),R(l(z),{key:1,trigger:"hover"},{trigger:v(()=>[o("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(r=>ee(e),["stop"])},[o("span",Ee,[f(l(B),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,De)]),default:v(()=>[He]),_:2},1024)):W("",!0),m.copyPropmpt?(c(),R(l(z),{key:2,trigger:"hover"},{trigger:v(()=>[o("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(r=>Y(e),["stop"])},[o("span",Ae,[f(l(B),{icon:"tabler:copy",class:"text-sm"})])],8,Se)]),default:v(()=>[Te]),_:2},1024)):W("",!0)])]),w.value.includes(e.id)?W("",!0):(c(),k("div",{key:0,class:"item-loading",style:P({width:`${i.value}px`,height:`${l(E)(e)}px`})},null,4))],12,Me))),128)),Ue],4)])]))}});const Oe={class:"bg-[#fff] h-[100vh] overflow-hidden p-4 pr-0 dark:bg-[#18181c] flex flex-col"},Ve={class:"p-4 flex pr-6 justify-between items-center"},qe=o("div",{class:"font-bold text-xl"},"AI绘画广场",-1),Ge={class:"w-[200px] sm:w-[300px] flex justify-between"},Je=o("span",{class:"hidden sm:block"},"尺寸调整",-1),Ke={class:"flex-1 ml-5"},Qe={class:"px-4 mb-1 pr-5"},Xe={class:"market overflow-y-scroll flex-1 min-h-screen p-4 dark:bg-[#18181c] relative"},st=D({__name:"index",setup(m){const d=n([]),a=n(null),_=n(50),g=n(""),b=n(1),$=n(20),L=n(!1),i=n(!0),u=N(()=>g.value?d.value.filter(p=>{const{prompt:h}=p;return h.includes(g.value)}):d.value);async function w(){L.value=!0;const p=await me({page:b.value,size:$.value,rec:1});L.value=!1,i.value=$.value===p.data.rows.length,d.value=[...d.value,...p.data.rows]}O(async()=>{await w()});function C(){b.value=b.value+1,w()}return(p,h)=>(c(),k("div",Oe,[o("div",Ve,[qe,o("div",Ge,[Je,o("div",Ke,[f(l(_e),{value:_.value,"onUpdate:value":h[0]||(h[0]=x=>_.value=x),step:10},null,8,["value"])])])]),o("div",Qe,[f(l(we),{value:g.value,"onUpdate:value":h[1]||(h[1]=x=>g.value=x),placeholder:"prompt关键词搜索"},{prefix:v(()=>[f(l(ge),{component:l(Le)},null,8,["component"])]),_:1},8,["value"])]),o("div",Xe,[o("div",{id:"wapper",ref_key:"wapperRef",ref:a,class:"wapper"},[f(Fe,{onLoadMore:C,copyPropmpt:"",isDrawLike:"",dataList:l(u),scaleWidth:_.value},null,8,["dataList","scaleWidth"])],512)])]))}});export{st as default};