import{W as r,t as n,h as e,k as l,l as m,m as p,n as g,d as h,f as v,s as w,a as f}from"./index.fc9addda.js";import"./admin-docs.491cbc27.js";import"./index.8e66e97a.js";import"./container.1547b4cb.js";import"./___vite-browser-external_commonjs-proxy.96aed09f.js";var A=`\`\`\`js
//\u663E\u793A Loading
showLoading('\u52A0\u8F7D\u4E2D')

setTimeout(() => {
  //\u9690\u85CF Loading
  hideLoading()
}, 2000)
\`\`\`
`,D=`\`\`\`js
//\u663E\u793A Success
showSuccess('\u652F\u6301\u6210\u529F')

setTimeout(() => {
  //\u9690\u85CF Success
  hideSuccess()
}, 2000)
\`\`\`
`,F=`\`\`\`js
//\u663E\u793A Loading
showWarning('\u52A0\u8F7D\u4E2D')

setTimeout(() => {
  //\u9690\u85CF Loading
  hideWarning()
}, 2000)
\`\`\`
`,L=Object.defineProperty,b=Object.getOwnPropertyDescriptor,C=(u,o,i,t)=>{for(var s=t>1?void 0:t?b(o,i):o,a=u.length-1,d;a>=0;a--)(d=u[a])&&(s=(t?d(o,i,s):d(s))||s);return t&&s&&L(o,i,s),s};const E="toast-component";let c=class extends r{installed(){}render(){return n`px-2 w-full md:w-6/12`,e("code-demo-container",null,e("code-demo",{class:n``,title:"\u57FA\u672C",describe:"\u6700\u7B80\u5355\u7684 Loading",code:A},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{h(),setTimeout(()=>{v()},2e3)}},"\u663E\u793A Loading \u63D0\u793A"))),e("code-demo",{title:"\u4E0D\u540C\u5C3A\u5BF8",describe:"\u652F\u6301\u4F20\u5165 size \u63A7\u5236\u5927\u5C0F",code:D},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{p("\u652F\u4ED8\u6210\u529F"),setTimeout(()=>{g()},2e3)}},"\u663E\u793A Success \u63D0\u793A"))),e("code-demo",{title:"\u4E0D\u540C\u989C\u8272",describe:"\u652F\u6301\u4F20\u5165 color \u63A7\u5236\u989C\u8272",code:F},e("div",{slot:"demo",class:n`px-5 py-5`},e("o-button",{size:"mini",onclick:u=>{l("\u652F\u4ED8\u5931\u8D25"),setTimeout(()=>{m()},2e3)}},"\u663E\u793A Warning \u63D0\u793A"))))}};c.css=w.target;c=C([f(E)],c);export{c as default};
