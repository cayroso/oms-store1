import{_ as $,i as C,r as p,f as U,j,k as D,l as r,p as i,q as e,u as l,y as s,P as d,M as v,Q as h,A as f,F as b,z as w,L as x,v as I,D as q,E as B,W as E}from"./chunk-_plugin-vue_export-helper.js";import{_ as M,a as N}from"./chunk-vue.js";import{u as y,c as R,b as L}from"./chunk-useSearchPaginated.js";const u=a=>(q("data-v-eab6ba59"),a=a(),B(),a),W=u(()=>e("div",null,[e("a",{href:"https://vitejs.dev",target:"_blank"},[e("img",{src:M,class:"logo",alt:"Vite logo"})]),e("a",{href:"https://vuejs.org/",target:"_blank"},[e("img",{src:N,class:"logo vue",alt:"Vue logo"})])],-1)),z=u(()=>e("br",null,null,-1)),F={key:0},H={key:1},K=["onClick"],O=u(()=>e("br",null,null,-1)),Q=u(()=>e("br",null,null,-1)),Y={__name:"App",setup(a){const k=C("$config");y();const{$moment:T}=y();p(new Date);const V=U(()=>T(new Date)),n=p(null);R(),p(null);const m=p(null),t=L({appTitle:"app title",pageTitle:"page title",cacheKey:"admin-key",baseUrl:n,failAction:g=>alert("fail: "+g)}),A=()=>{n.value="https://jsonplaceholder.typicode.com/posts",t.search(1),t.appTitle=`app title: ${new Date}`},P=()=>{n.value=`${k.API_URL}/api/product/administrator/search-public`,t.search(1),t.pageTitle=`page title: ${new Date}`};return j(async()=>{}),(g,c)=>{const S=D("HelloWorld");return r(),i(b,null,[W,e("div",null,[e("div",null," App Title: "+l(s(t).appTitle),1),e("div",null," Page Title: "+l(s(t).pageTitle),1),d(" BUSY: "+l(s(t).busy)+" ",1),e("button",{onClick:A},"searchUsers"),e("button",{onClick:P},"searchPosts"),v(e("input",{"onUpdate:modelValue":c[0]||(c[0]=o=>n.value=o),class:"form-control"},null,512),[[h,n.value]]),z,m.value?(r(),i("div",F," ERROR: "+l(m.value),1)):f("",!0),s(t).filter?(r(),i("div",H,[d(" ITEMS : "+l(s(t).filter.query)+" ",1),v(e("input",{"onUpdate:modelValue":c[1]||(c[1]=o=>s(t).filter.query.criteria=o),class:"form-control"},null,512),[[h,s(t).filter.query.criteria]]),e("ol",null,[(r(!0),i(b,null,w(s(t).filter.items,o=>(r(),i("li",null,[e("div",{onClick:X=>s(t).setSelected(o),class:x({"bg-primary":s(t).isSelected(o)})},l(o),11,K)]))),256))])])):f("",!0),O,Q,d(" Plugin: "+l(V.value),1)]),I(S,{msg:"Vite + Vue3  admin"})],64)}}},G=$(Y,[["__scopeId","data-v-eab6ba59"]]),_=E(G);_.use(corePlugin,{});const J="/";fetch(`${J}config.json`).then(a=>a.json()).then(a=>{_.provide("$config",a),_.mount("#app")});
