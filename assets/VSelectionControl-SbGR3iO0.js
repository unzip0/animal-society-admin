import{p as h,a5 as G,a9 as H,m as R,c as K,g as U,G as _,ab as q,q as o,B as O,Z,L as J,t as u,f as E,h as d,z as w,r as Q,at as W,s as T,C as X,D as Y,F as p,E as ee,al as I,ak as le,K as ae}from"./index-D95s_icG.js";import{q as te,R as ne,x as oe,r as ue,l as ie,e as re}from"./VContainer-D40geC0-.js";import{C as ce}from"./VRow-QUquhZOA.js";const L=Symbol.for("vuetify:selection-control-group"),j=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:G,trueIcon:G,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:H},...R(),...te(),...K()},"SelectionControlGroup"),se=h({...j({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");U()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=_(e,"modelValue"),t=q(),y=o(()=>e.id||`v-selection-control-group-${t}`),c=o(()=>e.name||y.value),a=new Set;return O(L,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Z(()=>{a.delete(n)})}}),J({[e.defaultsTarget]:{color:u(e,"color"),disabled:u(e,"disabled"),density:u(e,"density"),error:u(e,"error"),inline:u(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:u(e,"falseIcon"),trueIcon:u(e,"trueIcon"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),type:u(e,"type"),valueComparator:u(e,"valueComparator")}}),E(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=v.default)==null?void 0:n.call(v)])}),{}}});const de=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...R(),...j()},"VSelectionControl");function ve(e){const i=ee(L,void 0),{densityClasses:v}=ue(e),l=_(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:y.value;let m=r;c.value&&(m=f?[...I(l.value),r]:I(l.value).filter(C=>!e.valueComparator(C,t.value))),i?i.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:b}=ie(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:g}=re(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),k=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:y,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,icon:k}}const Ce=U()({name:"VSelectionControl",directives:{Ripple:ne},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:y,icon:c,model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,trueValue:k}=ve(e),f=q(),r=w(!1),m=w(!1),C=Q(),S=o(()=>e.id||`input-${f}`),x=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function B(s){x.value&&(r.value=!0,le(s.target,":focus-visible")!==!1&&(m.value=!0))}function F(){r.value=!1,m.value=!1}function M(s){s.stopPropagation()}function N(s){x.value&&(e.readonly&&t&&ae(()=>t.forceUpdate()),a.value=s.target.checked)}return E(()=>{var P,D;const s=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[$,z]=W(v),A=d("input",T({ref:C,checked:a.value,disabled:!!e.disabled,id:S.value,onBlur:F,onFocus:B,onInput:N,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},z),null);return d("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":r.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},y.value,e.class]},$,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:V,backgroundColorStyles:g}),X(d("div",{class:["v-selection-control__input"]},[((D=l.input)==null?void 0:D.call(l,{model:a,textColorClasses:n,textColorStyles:b,backgroundColorClasses:V,backgroundColorStyles:g,inputNode:A,icon:c.value,props:{onFocus:B,onBlur:F,id:S.value}}))??d(p,null,[c.value&&d(oe,{key:"icon",icon:c.value},null),A])]),[[Y("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),s&&d(ce,{for:S.value,onClick:M},{default:()=>[s]})])}),{isFocused:r,input:C}}});export{Ce as V,de as m};
