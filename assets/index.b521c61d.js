import{_ as i,m as e,q as t,s as l,t as u,v as p,x as d,I as g,J as h,K as m,i as v,L as x}from"./entry.a9efb840.js";const $={props:{project:{type:Object}},data(){return{languages:[]}},mounted(){this.getLanguage()},methods:{async getLanguage(){const s=await fetch(this.project.languages_url);this.languages=await s.json()}}},k={class:"card-projects"},w=["href"],B={class:"languages"};function L(s,o,a,j,c,f){const r=m;return e(),t("div",k,[l("a",{href:a.project.svn_url,class:"name"},u(a.project.name),9,w),l("div",B,[p(r,null,{default:d(()=>[(e(!0),t(g,null,h(c.languages,(_,n)=>(e(),t("div",{class:"language",key:n},u(n),1))),128))]),_:1})])])}const P=i($,[["render",L]]);const b={components:{Project:P},data(){return{projects:[]}},mounted(){this.getRepos()},methods:{async getRepos(){const o=await(await fetch("https://api.github.com/users/S4toshIYoshi/repos")).json();this.projects=o}}},C={class:"projects"};function I(s,o,a,j,c,f){const r=v("Project"),_=m;return e(),t("div",C,[p(_,null,{default:d(()=>[(e(!0),t(g,null,h(c.projects,(n,y)=>(e(),x(r,{project:n,key:y},null,8,["project"]))),128))]),_:1})])}const R=i(b,[["render",I]]);export{R as default};