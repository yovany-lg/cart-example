(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/feed-me.b613f9eb.jpg"},11:function(e,a,t){e.exports=t(20)},17:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),i=(t(17),t(1)),o=t(2),s=t(3),m=t(4),d=t(6),u=t(5),f=t(7),v=function(e,a){return a.find(function(a){return a===e})?a:a.concat(e)},p=function(e,a){return a.filter(function(a){return a!==e})},E=function(e,a){return Object(o.a)({},a,Object(i.a)({},e,(a[e]||0)+1))},b=function(e,a){return Object(o.a)({},a,Object(i.a)({},e,a[e]>1?a[e]-1:void 0))},h=function(e){return new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(e)},y=function(e){var a=e.total,t=void 0===a?0:a;return r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-primary"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-shopping-cart"})),r.a.createElement("span",{className:"tag is-dark"},"$",h(t)))))},g=function(e){var a=e.total;return r.a.createElement("nav",{className:"navbar is-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("h1",{className:"title"},"My Store")),r.a.createElement("div",{className:"navbar-item"},r.a.createElement("a",{class:"button is-light",rel:"noopener noreferrer",href:"https://github.com/yovany-lg/cart-example",target:"_blank"},r.a.createElement("span",{class:"icon is-small"},r.a.createElement("i",{class:"fab fa-github fa-lg"})))),r.a.createElement("div",{className:"navbar-item"},r.a.createElement("a",{class:"button is-light",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UC1oxnJjmWlaYR3meTzeaW4A",target:"_blank"},r.a.createElement("span",{class:"icon is-small"},r.a.createElement("i",{class:"fab fa-youtube fa-lg"})))),r.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(y,{total:a}))))))},N=function(e){var a=e.product,t=e.available,n=e.addToCart,c=e.removeFromCart,l=e.deleteFromCart;return r.a.createElement("div",{style:{marginBottom:"1.5rem"}},r.a.createElement("p",null,r.a.createElement("strong",null,a.title)," - $",h(a.price)),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("span",{className:"tag is-warning is-medium"},t)),r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-dark",onClick:n},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-plus"})))),r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-dark",onClick:c},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-minus"})))),r.a.createElement("p",{className:"control"},r.a.createElement("a",{className:"button is-danger is-outlined",onClick:l},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-trash"}))))))},w=function(e){var a=e.products,t=e.available,n=e.addToCart,c=e.removeFromCart,l=e.deleteFromCart;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-narrow"},a.map(function(e){return r.a.createElement(N,{product:e,available:t[e.id],key:e.id,addToCart:function(){return n(e.id)},removeFromCart:function(){return c(e.id)},deleteFromCart:function(){return l(e.id)}})}))))},C=t(10),k=t.n(C),j=function(){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-image has-text-centered"},r.a.createElement("figure",{class:"image is-4by3"},r.a.createElement("img",{src:k.a,alt:"feed-me"}))),r.a.createElement("div",{class:"card-content"},r.a.createElement("div",{class:"media"},r.a.createElement("div",{class:"media-content"},r.a.createElement("strong",null,"Programo por Comida "),"\ud83d\ude09 ",r.a.createElement("a",{href:"https://twitter.com/yovanylg",rel:"noopener noreferrer",target:"_blank","aria-label":"retweet"},"@yovanylg"))),r.a.createElement("div",{class:"content"},"Ayudame a crear m\xe1s cursos gratis de desarrollo web y aplicaciones m\xf3viles")),r.a.createElement("footer",{class:"card-footer"},r.a.createElement("a",{className:"card-footer-item",href:"https://www.paypal.me/yovanyluis/2",rel:"noopener noreferrer",target:"_blank","aria-label":"reply"},r.a.createElement("span",{className:"icon has-text-danger"},r.a.createElement("i",{className:"fas fa-coffee","aria-hidden":"true"}))),r.a.createElement("a",{className:"card-footer-item",href:"https://www.paypal.me/yovanyluis/5",rel:"noopener noreferrer",target:"_blank","aria-label":"retweet"},r.a.createElement("span",{className:"icon has-text-primary"},r.a.createElement("i",{className:"fas fa-hamburger"})))))},O=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handleClose=function(){t.setState({openModal:!1})},t.state={openModal:!1},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;"localhost"!==window.location.hostname&&setTimeout(function(){e.setState({openModal:!0})},15e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal ".concat(this.state.openModal?"is-active":"")},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content",style:{width:350}},r.a.createElement(j,null)),r.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:this.handleClose}))}}]),a}(r.a.Component),F=[{id:1,title:"iPhone Xs",inventory:4,price:22500.35},{id:2,title:"Galaxy S9",inventory:5,price:10990.5},{id:3,title:"Huawei Mate",inventory:2,price:12699.45},{id:4,title:"Google Pixel 3",inventory:3,price:19800.7},{id:5,title:"Motorola G6",inventory:6,price:5199.6}],I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={addedIds:[],quantityById:{},products:[]},t.loadState=function(e,a){return t.setState({addedIds:e,quantityById:a})},t.addToCart=function(e){var a=t.state,n=a.addedIds,r=a.quantityById,c=a.products.find(function(a){return a.id===e}),l=c.inventory-(r[e]||0);if(c&&l>0){var i=v(e,n),o=E(e,r);t.loadState(i,o)}},t.removeFromCart=function(e){var a=t.state,n=a.addedIds,r=a.quantityById;if(void 0!==r[e]){var c=b(e,r),l=c[e]?n:p(e,n);t.loadState(l,c)}},t.deleteFromCart=function(e){var a=t.state,n=a.addedIds,r=a.quantityById;if(r[e]){var c=Object(o.a)({},r,Object(i.a)({},e,void 0)),l=n.filter(function(a){return a!==e});t.loadState(l,c)}},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({products:F})}},{key:"render",value:function(){var e=this.state,a=e.quantityById,t=e.addedIds,c=e.products,l=function(e,a){return a.reduce(function(a,t){return Object(o.a)({},a,Object(i.a)({},t.id,e[t.id]?t.inventory-e[t.id]:t.inventory))},{})}(a,c),s=function(e,a,t){return a.reduce(function(a,n){return a+t.find(function(e){return e.id===n}).price*(e[n]||0)},0)}(a,t,c);return r.a.createElement(n.Fragment,null,r.a.createElement(g,{total:s}),r.a.createElement(w,{available:l,products:c,addToCart:this.addToCart,removeFromCart:this.removeFromCart,deleteFromCart:this.deleteFromCart}),r.a.createElement(O,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(18),t(19);l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.659ef835.chunk.js.map