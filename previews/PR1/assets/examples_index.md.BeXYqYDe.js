import{d as o,o as t,c as r,j as e,k as p,g as _,t as c,_ as d,F as u,C as m,b as h,K as f,a as l,G as g}from"./chunks/framework.zMAn8jY2.js";const x={class:"img-box"},v=["href"],b=["src"],y={class:"transparent-box1"},k={class:"caption"},G={class:"transparent-box2"},I={class:"subcaption"},B={class:"opacity-low"},E=o({__name:"GalleryImage",props:{href:{},src:{},caption:{},desc:{}},setup(n){return(a,i)=>(t(),r("div",x,[e("a",{href:a.href},[e("img",{src:p(_)(a.src),height:"150px",alt:""},null,8,b),e("div",y,[e("div",k,[e("h2",null,c(a.caption),1)])]),e("div",G,[e("div",I,[e("p",B,c(a.desc),1)])])],8,v)]))}}),P=d(E,[["__scopeId","data-v-d6324755"]]),N={class:"gallery-image"},q=o({__name:"Gallery",props:{images:{}},setup(n){return(a,i)=>(t(),r("div",N,[(t(!0),r(u,null,m(a.images,s=>(t(),h(P,f({ref_for:!0},s),null,16))),256))]))}}),T=d(q,[["__scopeId","data-v-ca4fdbe5"]]),w=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples/index.md","filePath":"examples/index.md","lastUpdated":null}'),V={name:"examples/index.md"},C=o({...V,setup(n){const a=[{href:"generated/introduction",src:"../introduction.png",caption:"Groups and representations",desc:"Introductory tutorial to groups and representations"},{href:"generated/equivariance",src:"../introduction.png",caption:"Equivariance",desc:"Introduction to geometric transforms and equivariance"}];return(i,s)=>(t(),r("div",null,[s[0]||(s[0]=e("h1",{id:"examples",tabindex:"-1"},[l("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s[1]||(s[1]=e("h2",{id:"tutorials",tabindex:"-1"},[l("Tutorials "),e("a",{class:"header-anchor",href:"#tutorials","aria-label":'Permalink to "Tutorials"'},"​")],-1)),g(T,{images:a})]))}});export{w as __pageData,C as default};