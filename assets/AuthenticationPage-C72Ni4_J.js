import{u as oe,m as Pe,a as xe,b as Be,c as Ie,d as Re,e as ae,f as Ee,g as We,h as Le,i as Ue,j as _e,V as P,k as Ye,l as He,n as Xe,o as Me,p as pe,M as Ae,q as ze,r as qe,s as Fe,t as Ne,v as De,w as Ge}from"./VContainer-C_YVSPMU.js";import{U as Oe}from"./User-Cv_DbkUP.js";import{v as je,m as Je,V as K}from"./VSlideGroup-C5XJm3A8.js";import{d as A,p as B,m as z,a as Ke,b as q,c as se,g as I,e as ne,t as $,u as Ze,f as R,h as n,_ as F,o as N,i as Qe,w as m,j as le,F as D,k as et,l as ie,n as ue,r as Y,q as w,s as L,v as re,x as tt,y as ot,z as H,A as at,B as st,C as de,D as nt,E as ce,G as me,H as lt,I as it,J as X,K as ut,L as rt,M as dt,N as Z,O as _}from"./index-B8VdrMn2.js";import{V as ve,a as x,b as G,c as fe,f as ct,d as mt,s as vt,m as ft,u as ht,e as gt,g as Q,h as bt}from"./VRow-DYjb2VWY.js";import{_ as wt}from"./logo-C9LqLbnW.js";const Vt=A({data(){return{dialog:!1,loading:!1,alertText:"",alertTitle:"",alertColor:"",alertIcon:"",id:je(),name:"",firstLastName:"",secondLastName:"",email:"",password:"",role:"admin",emailRules:[e=>!!e||"Field is required",e=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Email must be valid"],passwordRules:[e=>!!e||"Field is required",e=>/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e)||"Password must be valid"],userStore:oe()}},methods:{required(e){return!!e||"Field is required"},async registerUser(){const e=this,{valid:t}=await this.$refs.form.validate();if(!t)return;const a=new Oe(this.id,null,this.name,this.firstLastName,this.secondLastName,this.email,this.role,!0);this.loading=!0,await this.userStore.register(a,this.password).then(function(){e.alertTitle="Registration success",e.alertText="Congratz! You can login now and help to animal community!",e.alertColor="teal-accent-3",e.alertIcon="mdi-account-check",e.dialog=!0,e.$refs.form.reset()}).catch(function(o){console.log(o),e.alertTitle="Registration failed",e.alertText=o.response.data.data.message,e.alertColor="red-lighten-4",e.alertIcon="mdi-account-off",e.dialog=!0}),this.loading=!1}}}),yt=B({color:String,...Pe(),...z(),...Ke(),...xe(),...Be(),...Ie(),...Re(),...q(),...se()},"VSheet"),O=I()({name:"VSheet",props:yt(),setup(e,t){let{slots:a}=t;const{themeClasses:o}=ne(e),{backgroundColorClasses:l,backgroundColorStyles:i}=ae($(e,"color")),{borderClasses:s}=Ee(e),{dimensionStyles:r}=Ze(e),{elevationClasses:u}=We(e),{locationStyles:h}=Le(e),{positionClasses:C}=Ue(e),{roundedClasses:b}=_e(e);return R(()=>n(e.tag,{class:["v-sheet",o.value,l.value,s.value,u.value,C.value,b.value,e.class],style:[i.value,r.value,h.value,e.style]},a)),{}}});function Ct(e,t,a,o,l,i){return N(),Qe(D,null,[n(O,{class:"mx-auto",width:"300"},{default:m(()=>[n(ve,{"validate-on":"submit lazy",onSubmit:le(e.registerUser,["prevent"]),ref:"form"},{default:m(()=>[n(x,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.name=s),rules:[e.required],label:"Name"},null,8,["modelValue","rules"]),n(x,{modelValue:e.firstLastName,"onUpdate:modelValue":t[1]||(t[1]=s=>e.firstLastName=s),rules:[e.required],label:"First last name"},null,8,["modelValue","rules"]),n(x,{modelValue:e.secondLastName,"onUpdate:modelValue":t[2]||(t[2]=s=>e.secondLastName=s),rules:[e.required],label:"Second last name"},null,8,["modelValue","rules"]),n(x,{modelValue:e.email,"onUpdate:modelValue":t[3]||(t[3]=s=>e.email=s),rules:e.emailRules,label:"Email"},null,8,["modelValue","rules"]),n(x,{modelValue:e.password,"onUpdate:modelValue":t[4]||(t[4]=s=>e.password=s),rules:e.passwordRules,label:"Password",type:"password",auutocomplete:"current-password"},null,8,["modelValue","rules"]),n(P,{loading:e.loading,class:"mt-2",type:"submit",text:"Register",block:""},null,8,["loading"])]),_:1},8,["onSubmit"])]),_:1}),n(fe,{modelValue:e.dialog,"onUpdate:modelValue":t[6]||(t[6]=s=>e.dialog=s),width:"auto"},{default:m(()=>[n(G,{"max-width":"400","prepend-icon":e.alertIcon,text:e.alertText,title:e.alertTitle,color:e.alertColor},{actions:m(()=>[n(P,{class:"ms-auto",text:"Ok",onClick:t[5]||(t[5]=s=>e.dialog=!1)})]),_:1},8,["prepend-icon","text","title","color"])]),_:1},8,["modelValue"])],64)}const St=F(Vt,[["render",Ct]]),Tt=A({data:()=>({dialog:!1,loading:!1,alertText:"",email:"",password:"",emailRules:[e=>!!e||"Email is required",e=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Email must be valid"],passwordRules:[e=>!!e||"Password is required"],userStore:oe(),authStore:et()}),methods:{async loginUser(){const e=this,{valid:t}=await this.$refs.form.validate();t&&(this.loading=!0,await this.userStore.login(this.email,this.password).then(function(a){e.userStore.storeUser(a.data.data.user),e.authStore.storeToken(a.data.data.access_token),e.$router.push({name:"Home"})}).catch(function(){e.dialog=!0}),this.loading=!1)}}});function kt(e,t,a,o,l,i){return N(),ie(O,{class:"mx-auto",width:"300"},{default:m(()=>[n(ve,{"validate-on":"submit lazy",onSubmit:le(e.loginUser,["prevent"]),ref:"form"},{default:m(()=>[n(x,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=s=>e.email=s),rules:e.emailRules,label:"Email",autocomplete:"email"},null,8,["modelValue","rules"]),n(x,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),rules:e.passwordRules,label:"Password",type:"password",autocomplete:"current-password"},null,8,["modelValue","rules"]),n(P,{loading:e.loading,class:"mt-2",type:"submit",text:"Login",block:""},null,8,["loading"])]),_:1},8,["onSubmit"]),n(fe,{modelValue:e.dialog,"onUpdate:modelValue":t[3]||(t[3]=s=>e.dialog=s),width:"auto"},{default:m(()=>[n(G,{"max-width":"400","prepend-icon":"mdi-account-off",text:"Invalid credentials",title:"Login failed",color:"red-lighten-4"},{actions:m(()=>[n(P,{class:"ms-auto",text:"Ok",onClick:t[2]||(t[2]=s=>e.dialog=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const $t=F(Tt,[["render",kt]]),Pt=A({data:()=>({tab:"login"})}),j=Symbol.for("vuetify:v-tabs"),xt=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ue(Ye({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),M=I()({name:"VTab",props:xt(),setup(e,t){let{slots:a,attrs:o}=t;const{textColorClasses:l,textColorStyles:i}=He(e,"sliderColor"),s=Y(),r=Y(),u=w(()=>e.direction==="horizontal"),h=w(()=>{var b,d;return((d=(b=s.value)==null?void 0:b.group)==null?void 0:d.isSelected.value)??!1});function C(b){var f,c;let{value:d}=b;if(d){const V=(c=(f=s.value)==null?void 0:f.$el.parentElement)==null?void 0:c.querySelector(".v-tab--selected .v-tab__slider"),E=r.value;if(!V||!E)return;const U=getComputedStyle(V).color,T=V.getBoundingClientRect(),k=E.getBoundingClientRect(),v=u.value?"x":"y",g=u.value?"X":"Y",y=u.value?"right":"bottom",S=u.value?"width":"height",Ce=T[v],Se=k[v],W=Ce>Se?T[y]-k[y]:T[v]-k[v],Te=Math.sign(W)>0?u.value?"right":"bottom":Math.sign(W)<0?u.value?"left":"top":"center",ke=(Math.abs(W)+(Math.sign(W)<0?T[S]:k[S]))/Math.max(T[S],k[S])||0,$e=T[S]/k[S]||0,J=1.5;mt(E,{backgroundColor:[U,"currentcolor"],transform:[`translate${g}(${W}px) scale${g}(${$e})`,`translate${g}(${W/J}px) scale${g}(${(ke-1)/J+1})`,"none"],transformOrigin:Array(3).fill(Te)},{duration:225,easing:vt})}}return R(()=>{const b=P.filterProps(e);return n(P,L({symbol:j,ref:s,class:["v-tab",e.class],style:e.style,tabindex:h.value?0:-1,role:"tab","aria-selected":String(h.value),active:!1},b,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":C}),{...a,default:()=>{var d;return n(D,null,[((d=a.default)==null?void 0:d.call(a))??e.text,!e.hideSlider&&n("div",{ref:r,class:["v-tab__slider",l.value],style:i.value},null)])}})}),ct({},s)}}),Bt=e=>{const{touchstartX:t,touchendX:a,touchstartY:o,touchendY:l}=e,i=.5,s=16;e.offsetX=a-t,e.offsetY=l-o,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&a<t-s&&e.left(e),e.right&&a>t+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&l<o-s&&e.up(e),e.down&&l>o+s&&e.down(e))};function It(e,t){var o;const a=e.changedTouches[0];t.touchstartX=a.clientX,t.touchstartY=a.clientY,(o=t.start)==null||o.call(t,{originalEvent:e,...t})}function Rt(e,t){var o;const a=e.changedTouches[0];t.touchendX=a.clientX,t.touchendY=a.clientY,(o=t.end)==null||o.call(t,{originalEvent:e,...t}),Bt(t)}function Et(e,t){var o;const a=e.changedTouches[0];t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,(o=t.move)==null||o.call(t,{originalEvent:e,...t})}function Wt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:a=>It(a,t),touchend:a=>Rt(a,t),touchmove:a=>Et(a,t)}}function Lt(e,t){var r;const a=t.value,o=a!=null&&a.parent?e.parentElement:e,l=(a==null?void 0:a.options)??{passive:!0},i=(r=t.instance)==null?void 0:r.$.uid;if(!o||!i)return;const s=Wt(t.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[i]=s,re(s).forEach(u=>{o.addEventListener(u,s[u],l)})}function Ut(e,t){var i,s;const a=(i=t.value)!=null&&i.parent?e.parentElement:e,o=(s=t.instance)==null?void 0:s.$.uid;if(!(a!=null&&a._touchHandlers)||!o)return;const l=a._touchHandlers[o];re(l).forEach(r=>{a.removeEventListener(r,l[r])}),delete a._touchHandlers[o]}const he={mounted:Lt,unmounted:Ut},_t=he,ge=Symbol.for("vuetify:v-window"),be=Symbol.for("vuetify:v-window-group"),we=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...z(),...q(),...se()},"VWindow"),ee=I()({name:"VWindow",directives:{Touch:he},props:we(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{themeClasses:o}=ne(e),{isRtl:l}=tt(),{t:i}=ot(),s=Xe(e,be),r=Y(),u=w(()=>l.value?!e.reverse:e.reverse),h=H(!1),C=w(()=>{const v=e.direction==="vertical"?"y":"x",y=(u.value?!h.value:h.value)?"-reverse":"";return`v-window-${v}${y}-transition`}),b=H(0),d=Y(void 0),f=w(()=>s.items.value.findIndex(v=>s.selected.value.includes(v.id)));at(f,(v,g)=>{const y=s.items.value.length,S=y-1;y<=2?h.value=v<g:v===S&&g===0?h.value=!0:v===0&&g===S?h.value=!1:h.value=v<g}),st(ge,{transition:C,isReversed:h,transitionCount:b,transitionHeight:d,rootRef:r});const c=w(()=>e.continuous||f.value!==0),V=w(()=>e.continuous||f.value!==s.items.value.length-1);function E(){c.value&&s.prev()}function U(){V.value&&s.next()}const T=w(()=>{const v=[],g={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,"aria-label":i("$vuetify.carousel.prev")};v.push(c.value?a.prev?a.prev({props:g}):n(P,g,null):n("div",null,null));const y={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,"aria-label":i("$vuetify.carousel.next")};return v.push(V.value?a.next?a.next({props:y}):n(P,y,null):n("div",null,null)),v}),k=w(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?E():U()},right:()=>{u.value?U():E()},start:g=>{let{originalEvent:y}=g;y.stopPropagation()}},...e.touch===!0?{}:e.touch});return R(()=>de(n(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var v,g;return[n("div",{class:"v-window__container",style:{height:d.value}},[(v=a.default)==null?void 0:v.call(a,{group:s}),e.showArrows!==!1&&n("div",{class:"v-window__controls"},[T.value])]),(g=a.additional)==null?void 0:g.call(a,{group:s})]}}),[[nt("touch"),k.value]])),{group:s}}}),Yt=B({...ue(we(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Ve=I()({name:"VTabsWindow",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const o=ce(j,null),l=me(e,"modelValue"),i=w({get(){var s;return l.value!=null||!o?l.value:(s=o.items.value.find(r=>o.selected.value.includes(r.id)))==null?void 0:s.value},set(s){l.value=s}});return R(()=>{const s=ee.filterProps(e);return n(ee,L({_as:"VTabsWindow"},s,{modelValue:i.value,"onUpdate:modelValue":r=>i.value=r,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),a)}),{}}}),ye=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...z(),...Me(),...ft()},"VWindowItem"),te=I()({name:"VWindowItem",directives:{Touch:_t},props:ye(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t;const o=ce(ge),l=pe(e,be),{isBooted:i}=lt();if(!o||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=H(!1),r=w(()=>i.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function h(){var c;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=X((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function C(){u()}function b(c){s.value&&ut(()=>{!r.value||!s.value||!o||(o.transitionHeight.value=X(c.clientHeight))})}const d=w(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:h,onAfterEnter:u,onEnterCancelled:C,onBeforeLeave:h,onAfterLeave:u,onLeaveCancelled:C,onEnter:b}:!1}),{hasContent:f}=ht(e,l.isSelected);return R(()=>n(Ae,{transition:d.value,disabled:!i.value},{default:()=>{var c;return[de(n("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[f.value&&((c=a.default)==null?void 0:c.call(a))]),[[it,l.isSelected.value]])]}})),{groupItem:l}}}),Ht=B({...ye()},"VTabsWindowItem"),p=I()({name:"VTabsWindowItem",props:Ht(),setup(e,t){let{slots:a}=t;return R(()=>{const o=te.filterProps(e);return n(te,L({_as:"VTabsWindowItem"},o,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function Xt(e){return e?e.map(t=>dt(t)?t:{text:t,value:t}):[]}const Mt=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Je({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ze(),...q()},"VTabs"),pt=I()({name:"VTabs",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:a,slots:o}=t;const l=me(e,"modelValue"),i=w(()=>Xt(e.items)),{densityClasses:s}=qe(e),{backgroundColorClasses:r,backgroundColorStyles:u}=ae($(e,"bgColor")),{scopeId:h}=Fe();return rt({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),R(()=>{const C=K.filterProps(e),b=!!(o.window||e.items.length>0);return n(D,null,[n(K,L(C,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,r.value,e.class],style:[{"--v-tabs-height":X(e.height)},u.value,e.style],role:"tablist",symbol:j},h,a),{default:()=>{var d;return[((d=o.default)==null?void 0:d.call(o))??i.value.map(f=>{var c;return((c=o.tab)==null?void 0:c.call(o,{item:f}))??n(M,L(f,{key:f.text,value:f.value}),{default:()=>{var V;return(V=o[`tab.${f.value}`])==null?void 0:V.call(o,{item:f})}})})]}}),b&&n(Ve,L({modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,key:"tabs-window"},h),{default:()=>{var d;return[i.value.map(f=>{var c;return((c=o.item)==null?void 0:c.call(o,{item:f}))??n(p,{value:f.value},{default:()=>{var V;return(V=o[`item.${f.value}`])==null?void 0:V.call(o,{item:f})}})}),(d=o.window)==null?void 0:d.call(o)]}})])}),{}}}),At=_("div",{class:"text-center"},[_("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to"),_("h1",{class:"text-h4 font-weight-bold"},"Animal Society backoffice")],-1),zt=_("div",{class:"py-4"},null,-1);function qt(e,t,a,o,l,i){const s=$t,r=St;return N(),ie(Ne,{class:"fill-height"},{default:m(()=>[n(Ge,{class:"align-centerfill-height mx-auto","max-width":"400",app:""},{default:m(()=>[n(De,{class:"mb-4",height:"200",src:wt}),At,zt,n(gt,null,{default:m(()=>[n(Q,{cols:"12"},{default:m(()=>[n(O,{class:"mx-auto",width:"300"},{default:m(()=>[n(G,null,{default:m(()=>[n(pt,{grow:"",modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=u=>e.tab=u),"bg-color":"dark"},{default:m(()=>[n(M,{value:"login"},{default:m(()=>[Z("Login")]),_:1}),n(M,{value:"register"},{default:m(()=>[Z("Register")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(Q,{cols:"12"},{default:m(()=>[n(bt,null,{default:m(()=>[n(Ve,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=u=>e.tab=u)},{default:m(()=>[n(p,{value:"login"},{default:m(()=>[n(s)]),_:1}),n(p,{value:"register"},{default:m(()=>[n(r)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Kt=F(Pt,[["render",qt]]);export{Kt as default};