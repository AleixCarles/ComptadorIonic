"use strict";(self["webpackChunkComptadorIonic"]=self["webpackChunkComptadorIonic"]||[]).push([[261],{4261:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>a,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>o});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},o=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,r=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(o);const i=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(a);null!=e&&await e}}catch(e){console.error(e)}},a=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,r=r.filter((e=>e.id!==t.id)),i(t).then((()=>e=!1))}};a()}))},i=100,a=99}}]);
//# sourceMappingURL=261-legacy.54f96303.js.map