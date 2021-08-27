(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(18),r=a.n(o),l=(a(25),a(26),a(27),a(2)),i=a(8),s=a(1),u=a(15),m=(a(28),function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:e.source.url,alt:e.source.alt}))}),f=(a(29),a(4)),v=a.n(f),p=a(9),d="https://meme-server2.herokuapp.com/img",g={getAllImages:function(){var e=Object(p.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d,{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFaveCollections:function(){var e=Object(p.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d+"/favoriteCollectionsList",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addToFaveImages:function(){var e=Object(p.a)(v.a.mark((function e(t,a,n,c){var o,r,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,_id:a,url:n,account:c,alt:""})},e.next=3,fetch(d+"/addToFavoritesCollection",o);case 3:return r=e.sent,e.next=6,r.json();case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),removeFromFaveImages:function(){var e=Object(p.a)(v.a.mark((function e(t,a){var n,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,_id:a})},e.next=3,fetch(d+"/removeFromFavoritesCollection/"+t+"/"+a,n);case 3:return c=e.sent,e.next=6,c.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},C=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){if(e.faveImageData.images){var t=-1!==e.faveImageData.images.map((function(e){return e._id})).indexOf(e.source._id);r(t)}}),[e.faveImageData,e.source._id]),e.collectionName&&e.showColumn?c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{source:e.source}),c.a.createElement("i",{className:!0===o?"fas fa-heart":"far fa-heart",onClick:function(t){r(!o),!0!==o?(g.addToFaveImages(e.collectionName,e.source._id,e.source.url,e.source.account),e.showColumn?t.stopPropagation():e.updateFaves()):(g.removeFromFaveImages(e.collectionName,e.source._id),e.showColumn?t.stopPropagation():e.updateFaves())}})):c.a.createElement(m,{source:e.source})},h=function(e){var t=e.isFaveCollection?e.faveImageData.images:e.allImageData,a=Object(n.useState)(),o=Object(l.a)(a,2),r=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(l.a)(s,2),f=m[0],v=m[1];return Object(n.useEffect)((function(){r&&"function"===typeof r.scrollIntoView&&r.scrollIntoView({behavior:"smooth",block:"start"})}),[r]),c.a.createElement(c.a.Fragment,null,!e.isLoaded&&c.a.createElement("div",null,"Loading... ",e.isLoaded),e.isFaveCollection&&0===e.faveImageData.length&&c.a.createElement("div",null,"No favorite images. Make selections to see them here."),c.a.createElement("div",{className:f?"column":"grid"},c.a.createElement("ul",null,t.map((function(t,a){var n=c.a.createRef();return c.a.createElement("li",{id:a,key:a,ref:n,onClick:function(){v(f=!f),e.collectionName&&!1===f&&e.updateFaves(),i(n.current)}},c.a.createElement(C,{source:Object(u.a)(Object(u.a)({},t),{},{account:e.faveImageData.account}),faveImageData:e.faveImageData,collectionName:e.collectionName,updateFaves:e.updateFaves,showColumn:f}))})))))},E=Object(s.g)((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],r=a[1],i=function(){e.history.push("/img/favorites")};return e.signInClick?c.a.createElement("div",{className:"choose-fave form"},c.a.createElement("h3",null,"Choose a favorites collection"),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),""!==o&&"Select a folder"!==o&&(e.loadFaveCollection(o),i())}},c.a.createElement("select",{onChange:function(e){"Select a folder"!==e.target.name&&r(e.target.value)}},e.faveImageCollections.map((function(e,t){return c.a.createElement("option",{key:t,value:e.name},e.name)}))),c.a.createElement("input",{type:"submit",value:"Submit"}))):c.a.createElement("input",{type:"submit",value:"Choose One",onClick:function(){e.displayCreateCollectionComp(!1)}})})),b={addCollection:function(){var e=Object(p.a)(v.a.mark((function e(t){var a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:t,account:Math.floor(1e5+9e5*Math.random())})},e.next=3,fetch("https://meme-server2.herokuapp.com/img/addCollection",a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCollection:function(){var e=Object(p.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://meme-server2.herokuapp.com/img/favorites/"+t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=Object(s.g)((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1],f=Object(n.useCallback)((function(){e.history.push("/img")}),[e]);return Object(n.useEffect)((function(){try{u&&(e.loadFaveCollection(o),e.updateFaveCollectionsList(),f())}catch(t){console.log(t)}}),[u,o,e,f]),e.createNewClick?c.a.createElement("div",{className:"create-fave form"},c.a.createElement("h3",null,"Create a new favorites folder"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.addCollection(o).then((function(e){m(Boolean(e))}))}},c.a.createElement("label",{htmlFor:"name"},"Add a name:",c.a.createElement("input",{type:"text",name:"name",onChange:function(e){"name"===e.target.name&&r(e.target.value)}})),c.a.createElement("input",{type:"submit",value:"Submit"}))):c.a.createElement("input",{type:"submit",value:"Create New",onClick:function(){e.displayCreateCollectionComp(!0)}})})),F=(a(36),function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],r=a[1],i=function(e){r(e)};Object(n.useEffect)((function(){r(e.createNewClick)}),[e.createNewClick]);var s=e.faveImageCollections,u=e.loadFaveCollection,m=e.updateFaveCollectionsList;return o?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"fave-selection-container"},c.a.createElement(E,{signInClick:!1,faveImageCollections:s,displayCreateCollectionComp:i}),c.a.createElement(j,{createNewClick:!0,loadFaveCollection:u,updateFaveCollectionsList:m}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"fave-selection-container"},c.a.createElement(j,{createNewClick:!1,displayCreateCollectionComp:i}),c.a.createElement(E,{signInClick:!0,faveImageCollections:s,loadFaveCollection:u})))}),O=(a(37),function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],r=a[1];return c.a.createElement(i.a,null,c.a.createElement("div",{className:"navigation",onClick:function(){r(!o)}},c.a.createElement("h1",null,"img"),c.a.createElement("ul",{className:o?"show":"hide"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/img",onClick:function(){e.updateFaves()}},"All Memes")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/img/create-faves"},"Start a Collection")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/img/view-faves"},"Choose a Collection")),""!==e.collectionName&&c.a.createElement("li",null,c.a.createElement(i.b,{to:"/img/favorites",onClick:function(){e.updateFaves()}},"Fave Memes"))),c.a.createElement("button",null,c.a.createElement("span",null,"|"),c.a.createElement("span",null,"|"),c.a.createElement("span",null,"|"))),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/img",component:function(){return c.a.createElement(h,{allImageData:e.allImageData,faveImageData:e.faveImageData,isLoaded:e.isLoaded,isFaveCollection:!1,collectionName:e.collectionName,updateFaves:e.updateFaves})}}),c.a.createElement(s.b,{path:"/img/create-faves",render:function(){return e.isLoaded?c.a.createElement(F,{faveImageCollections:e.faveImageCollections,createNewClick:e.createNewClick,loadFaveCollection:e.loadFaveCollection,updateFaveCollectionsList:e.updateFaveCollectionsList}):c.a.createElement(s.a,{to:"/img"})}}),c.a.createElement(s.b,{path:"/img/view-faves",component:function(){return c.a.createElement(F,{faveImageCollections:e.faveImageCollections,loadFaveCollection:e.loadFaveCollection,updateFaveCollectionsList:e.updateFaveCollectionsList})}}),c.a.createElement(s.b,{path:"/img/favorites",component:function(){return c.a.createElement(h,{faveImageData:e.faveImageData,isLoaded:e.isLoaded,isFaveCollection:!0,collectionName:e.collectionName,updateFaves:e.updateFaves})}})))}),w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)({images:[],account:null}),i=Object(l.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(l.a)(m,2),v=f[0],p=f[1],d=Object(n.useState)([]),C=Object(l.a)(d,2),h=C[0],E=C[1],j=Object(n.useState)([]),F=Object(l.a)(j,2),w=F[0],I=F[1],k=function(e){b.getCollection(e).then((function(e){e[0]&&u({images:e[0].images,account:e[0].account})}))},N=function(){g.getFaveCollections().then((function(e){return E(e)}),p(!0))};return Object(n.useEffect)((function(){g.getAllImages().then((function(e){I(e)})),N()}),[]),c.a.createElement("div",{className:"main"},c.a.createElement(O,{allImageData:w,faveImageData:s,faveImageCollections:h,isLoaded:v,createNewClick:!0,collectionName:a,loadFaveCollection:function(e){o(e),k(e)},updateFaves:function(){k(a)},updateFaveCollectionsList:N}))};var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.b624c7e4.chunk.js.map