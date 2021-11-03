import{W as e,h as n,t as i,s as t,b as o}from"./vendor.9197f5fa.js";import"./index.esm.ff848e41.js";import"./ac-unit-outlined.8a75c460.js";import"./admin-docs.33d13590.js";import"./index.a0325b2c.js";import"./container.6d9a1e70.js";import"./___vite-browser-external_commonjs-proxy.6940f468.js";var l=Object.defineProperty,r=Object.getOwnPropertyDescriptor;let a=class extends e{install(){}render(){return n("code-demo-container",null,n("code-demo",{title:"基础输入框",describe:"一般用于输入信息提交给服务器",code:'\n```jsx\n<o-input placeholder="Enter User Name"></o-input>\n<o-input disabled placeholder="Enter User Name"></o-input>\n<o-input clearable placeholder="Enter User Name"></o-input>\n```\n          '},n("div",{slot:"demo",class:i`flex flex-col justify-center px-5 py-5`},n("div",null,n("o-input",{placeholder:"Enter User Name"})),n("div",null,n("o-input",{disabled:!0,placeholder:"Enter User Name"})),n("div",null,n("o-input",{clearable:!0,placeholder:"Enter User Name"})))),n("code-demo",{title:"扩展输入框",describe:"设置 后缀 前缀",code:'\n```jsx\n<o-input max-length="10"  placeholder="Enter User Name"></o-input>\n<o-input size="medium" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="small" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="mini" suffix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n\n<o-input size="medium" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="small" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n<o-input size="mini" prefix-icon="ac-unit-outlined" placeholder="Enter User Name"></o-input>\n```\n          '},n("div",{slot:"demo",class:i`flex flex-col px-5 py-5`},n("div",null,n("o-input",{"max-length":"10",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"medium","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"small","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"mini","suffix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"medium","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"small","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})),n("div",null,n("o-input",{size:"mini","prefix-icon":"ac-unit-outlined",placeholder:"Enter User Name"})))))}};a.css=[t.target,"o-input{margin-top:10px;}"],a=((e,n,i,t)=>{for(var o,a=t>1?void 0:t?r(n,i):n,u=e.length-1;u>=0;u--)(o=e[u])&&(a=(t?o(n,i,a):o(a))||a);return t&&a&&l(n,i,a),a})([o("input-component")],a);export{a as default};