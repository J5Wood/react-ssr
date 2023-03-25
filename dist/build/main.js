(()=>{"use strict";var t,e={90:(t,e,n)=>{var o=n(7294),r=n(3935),i=n(3727),a=n(5671),c=n(9466),s=n(136),l=n(2963),u=n(1120),f=n(6550),p=n(7326);var d=function(t){(0,s.Z)(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var r=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)});function i(){var t;return(0,a.Z)(this,i),console.log("Counter.constructor()"),(t=r.call(this)).increment=t.increment.bind((0,p.Z)(t)),t.state={count:0},t}return(0,c.Z)(i,[{key:"increment",value:function(){console.log("Counter.increment()"),this.setState({count:this.state.count+1})}},{key:"render",value:function(){var t=this;return console.log("Counter.render()"),o.createElement("div",{className:"ui-counter"},o.createElement("p",{className:"ui-counter__title"},"Counter Widget"),o.createElement("div",{className:"ui-counter__body"},o.createElement("p",{className:"ui-counter__body__name"},this.props.name),o.createElement("p",{className:"ui-counter__body__count"},this.state.count),o.createElement("button",{className:"ui-counter__body__button",onClick:function(){return t.increment()},disabled:3===this.state.count},"Increment")))}}]),i}(o.Component),m=n(9669),v=n.n(m);var h=function(t){(0,s.Z)(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var r=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)});function i(t){var e;return(0,a.Z)(this,i),console.log("Post.constructor()"),e=r.call(this),t.staticContext?e.state={isLoading:!1,title:t.staticContext.title,description:t.staticContext.body}:window.initial_state?e.state={isLoading:!1,title:window.initial_state.title,description:window.initial_state.body}:e.state={isLoading:!0,title:"",description:""},e}return(0,c.Z)(i,[{key:"componentDidMount",value:function(){var t=this;this.state.isLoading&&(console.log("Post.componentDidMount()"),i.fetchData().then((function(e){t.setState({isLoading:!1,title:e.title,description:e.body})})))}},{key:"render",value:function(){return console.log("Post.render()"),o.createElement("div",{className:"ui-post"},o.createElement("p",{className:"ui-post__title"},"Post Widget"),this.state.isLoading?"loading...":o.createElement("div",{className:"ui-post__body"},o.createElement("p",{className:"ui-post__body__title"},this.state.title),o.createElement("p",{className:"ui-post__body__description"},this.state.description)))}}],[{key:"fetchData",value:function(){return console.log("Post.fetchData()"),v().get("https://jsonplaceholder.typicode.com/posts/3").then((function(t){return{title:t.data.title,body:t.data.body}}))}}]),i}(o.Component);var _=function(t){(0,s.Z)(p,t);var e,n,r=(e=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var r=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)});function p(){return(0,a.Z)(this,p),console.log("App.constructor()"),r.call(this)}return(0,c.Z)(p,[{key:"render",value:function(){return console.log("App.render()"),o.createElement("div",{className:"ui-app"},o.createElement("div",{className:"ui-app__navigation"},o.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/",exact:!0},"Counter"),o.createElement(i.OL,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/post",exact:!0},"Post")),o.createElement(f.rs,null,o.createElement(f.AW,{path:"/",exact:!0,render:function(){return o.createElement(d,{name:"Monica Geller"})}}),o.createElement(f.AW,{path:"/post",exact:!0,component:h})))}}]),p}(o.Component);r.hydrate(o.createElement(i.VK,null,o.createElement(_,null)),document.getElementById("app"))}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,r,i]=t[u],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[a,c,s]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(e&&e(n);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},n=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[736],(()=>o(90)));r=o.O(r)})();
//# sourceMappingURL=main.js.map