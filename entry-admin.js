import{_ as C,l as P,x as p,j as U,o as j,r as x,a as r,c as i,b as e,t as l,u as s,E as d,B as v,G as h,f,F as b,z as w,A as D,d as I,p as B,i as E,M}from"./assets/_plugin-vue_export-helper-6da9ef04.js";import{_ as N,a as R}from"./assets/vue-d157338a.js";import{u as y,c as q,b as z}from"./assets/useSearchPaginated-488048bf.js";const u=a=>(B("data-v-eab6ba59"),a=a(),E(),a),F=u(()=>e("div",null,[e("a",{href:"https://vitejs.dev",target:"_blank"},[e("img",{src:N,class:"logo",alt:"Vite logo"})]),e("a",{href:"https://vuejs.org/",target:"_blank"},[e("img",{src:R,class:"logo vue",alt:"Vue logo"})])],-1)),H=u(()=>e("br",null,null,-1)),L={key:0},W={key:1},G=["onClick"],K=u(()=>e("br",null,null,-1)),O=u(()=>e("br",null,null,-1)),Y={__name:"App",setup(a){const T=P("$config");y();const{$moment:k}=y();p(new Date);const V=U(()=>k(new Date)),n=p(null);q(),p(null);const m=p(null),t=z({appTitle:"app title",pageTitle:"page title",cacheKey:"admin-key",baseUrl:n,failAction:g=>alert("fail: "+g)}),A=()=>{n.value="https://jsonplaceholder.typicode.com/posts",t.search(1),t.appTitle=`app title: ${new Date}`},S=()=>{n.value=`${T.API_URL}/api/product/administrator/search-public`,t.search(1),t.pageTitle=`page title: ${new Date}`};return j(async()=>{}),(g,c)=>{const $=x("HelloWorld");return r(),i(b,null,[F,e("div",null,[e("div",null," App Title: "+l(s(t).appTitle),1),e("div",null," Page Title: "+l(s(t).pageTitle),1),d(" BUSY: "+l(s(t).busy)+" ",1),e("button",{onClick:A},"searchUsers"),e("button",{onClick:S},"searchPosts"),v(e("input",{"onUpdate:modelValue":c[0]||(c[0]=o=>n.value=o),class:"form-control"},null,512),[[h,n.value]]),H,m.value?(r(),i("div",L," ERROR: "+l(m.value),1)):f("",!0),s(t).filter?(r(),i("div",W,[d(" ITEMS : "+l(s(t).filter.query)+" ",1),v(e("input",{"onUpdate:modelValue":c[1]||(c[1]=o=>s(t).filter.query.criteria=o),class:"form-control"},null,512),[[h,s(t).filter.query.criteria]]),e("ol",null,[(r(!0),i(b,null,w(s(t).filter.items,o=>(r(),i("li",null,[e("div",{onClick:X=>s(t).setSelected(o),class:D({"bg-primary":s(t).isSelected(o)})},l(o),11,G)]))),256))])])):f("",!0),K,O,d(" Plugin: "+l(V.value),1)]),I($,{msg:"Vite + Vue3  admin"})],64)}}},J=C(Y,[["__scopeId","data-v-eab6ba59"]]),_=M(J);_.use(corePlugin,{});const Q="/";fetch(`${Q}config.json`).then(a=>a.json()).then(a=>{_.provide("$config",a),_.mount("#app")});
