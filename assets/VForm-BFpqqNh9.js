import{p as h,m as p,g as v,r as g,f as _,h as b}from"./index-D95s_icG.js";import{A as F,B as V,f as y}from"./VRow-QUquhZOA.js";class k{constructor(o,i,m,a,n,l,c,e){this.id=o,this.association_id=i,this.name=m,this.first_last_name=a,this.second_last_name=n,this.email=l,this.role=c,this.active=e}getId(){return this.id}getAssociationId(){return this.association_id}getName(){return this.name}getFirstLastName(){return this.first_last_name}getSecondLastName(){return this.second_last_name}getEmail(){return this.email}getRole(){return this.role}getActive(){return this.active}}const R=h({...p(),...F()},"VForm"),A=v()({name:"VForm",props:R(),emits:{"update:modelValue":s=>!0,submit:s=>!0},setup(s,o){let{slots:i,emit:m}=o;const a=V(s),n=g();function l(e){e.preventDefault(),a.reset()}function c(e){const r=e,t=a.validate();r.then=t.then.bind(t),r.catch=t.catch.bind(t),r.finally=t.finally.bind(t),m("submit",r),r.defaultPrevented||t.then(f=>{var u;let{valid:d}=f;d&&((u=n.value)==null||u.submit())}),r.preventDefault()}return _(()=>{var e;return b("form",{ref:n,class:["v-form",s.class],style:s.style,novalidate:!0,onReset:l,onSubmit:c},[(e=i.default)==null?void 0:e.call(i,a)])}),y(a,n)}});export{k as U,A as V};
