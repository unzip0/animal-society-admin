import{J as ee,n as te,Y as G,x as q}from"./VContainer-B6O5c_x9.js";import{p as le,a5 as D,m as oe,$ as ne,b as se,g as ae,x as ie,a0 as re,z as x,q as g,a6 as L,at as ue,ah as B,A as ce,f as fe,h,ad as ve}from"./index-CfzLx3IL.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=z(v,o),a=$(v,i,o),p=z(v,n),c=K(v,n),S=p*.4;return a>c?c-S:a+d<c+p?c-d+p+S:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=z(i,o),d=K(i,n),a=z(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function $(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function z(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function K(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=le({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:D,default:"$next"},prevIcon:{type:D,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...oe(),...ne(),...se(),...ee({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),xe=ae()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=ie(),{displayClasses:v,mobile:d}=re(l),a=te(l,l.symbol),p=x(!1),c=x(0),S=x(0),P=x(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=L(),{resizeRef:f,contentRect:R}=L(),_=ue(),C=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),U=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),J=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(B){let e=-1;ce(()=>[a.selected.value,w.value,R.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&R.value){const t=r.value?"width":"height";S.value=w.value[t],P.value=R.value[t],p.value=S.value+1<P.value}if(U.value>=0&&f.el){const t=f.el.children[J.value];O(t,l.centerActive)}})})}const b=x(!1);function O(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),W(s)}function W(e){if(!B||!u.el)return;const t=z(r.value,u.el),s=$(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:I}=u.el;e=k-I-e}r.value?_.horizontal(e,C.value):_(e,C.value)}}function Q(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function Y(e){if(b.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){O(s);return}}}function j(e){b.value=!1}let E=!1;function X(e){var t;!E&&!b.value&&!(e.relatedTarget&&((t=f.el)!=null&&t.contains(e.relatedTarget)))&&m(),E=!1}function V(){E=!0}function Z(e){if(!f.el)return;function t(s){e.preventDefault(),m(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function m(e){var s,y;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return m("first")}else if(e==="prev"){if(t=(y=f.el.querySelector(":focus"))==null?void 0:y.previousElementSibling,!t)return m("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function T(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*S.value;let y=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:I}=u.el;y+=k-I}W(y)}const F=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),A=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),M=g(()=>Math.abs(c.value)>1),H=g(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":A.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:b.value||a.selected.value.length?-1:0,onFocus:X},{default:()=>{var e,t,s;return[A.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!M.value}],onMousedown:V,onClick:()=>M.value&&T("prev")},[((e=o.prev)==null?void 0:e.call(o,F.value))??h(G,null,{default:()=>[h(q,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:Q},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:Y,onFocusout:j,onKeydown:Z},[(t=o.default)==null?void 0:t.call(o,F.value)])]),A.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!H.value}],onMousedown:V,onClick:()=>H.value&&T("next")},[((s=o.next)==null?void 0:s.call(o,F.value))??h(G,null,{default:()=>[h(q,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:T,scrollOffset:c,focus:m}}});export{xe as V,Se as m};
