(this["webpackJsonpblock-builder-example"]=this["webpackJsonpblock-builder-example"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);n(5);var o=n(0),c=n.n(o),l=n(3),s=n.n(l),a=n(1),r=n(2),u="_styles-module__block__c5qs0",i="_styles-module__head__3OYX_",f="_styles-module__foot__2Zfr9",m="_styles-module__content__b6c3S",d="_styles-module__rounded__2uZAs",b=function(e){var t=Object(o.useState)({mouseDown:!1,x:0,y:0,offsetX:0,offsetY:0,mouseOffsetX:0,mouseOffsetY:0}),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(o.useRef)(null);Object(o.useEffect)((function(){if(s.current){var t=s.current;l(Object(a.a)(Object(a.a)({},c),{},{x:e.parentPos.x+e.parentPos.width/2,y:e.parentPos.y+e.parentPos.height/2,offsetX:t.offsetLeft,offsetY:t.offsetTop}))}}),[]);return Object(o.createElement)("div",{className:u,onMouseMove:function(t){if(c.mouseDown){t.target.getBoundingClientRect();l(Object(a.a)(Object(a.a)({},c),{},{x:t.clientX-c.mouseOffsetX-e.parentPos.x,y:t.clientY-c.mouseOffsetY-e.parentPos.y}))}},style:Object(a.a)({position:"absolute",left:"".concat(c.x,"px"),top:"".concat(c.y,"px")},e.style)},Object(o.createElement)("div",{onMouseDown:function(e){var t=e.target.getBoundingClientRect();l(Object(a.a)(Object(a.a)({},c),{},{mouseDown:!0,mouseOffsetX:e.clientX-t.left,mouseOffsetY:e.clientY-t.top}))},onMouseUp:function(){l(Object(a.a)(Object(a.a)({},c),{},{mouseDown:!1}))},className:"".concat(i," ").concat(!e.allowInner&&d)},e.head),e.allowInner&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:m},e.children),Object(o.createElement)("div",{className:f},e.foot)))},O="_styles-module__blockBuilder__1Dytp",_=Object(o.createContext)(null),p=function(e){var t=Object(o.useState)({}),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(o.useRef)(null),a=function(){if(s.current){var e,t,n=s.current;n.style.width=(null===(e=n.parentElement)||void 0===e?void 0:e.style.width)||"inherit",n.style.height=(null===(t=n.parentElement)||void 0===t?void 0:t.style.height)||"inherit";var o=n.getBoundingClientRect();l(o)}};return Object(o.useEffect)((function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),Object(o.createElement)(_.Provider,{value:c},Object(o.createElement)("div",{ref:s,className:O,style:e.blockStyle},e.children(c)))},y=(n(12),function(){return c.a.createElement("div",{className:"",style:{margin:"0 auto",height:"500px",width:"500px"}},c.a.createElement(p,{blockStyle:{height:"100px"}},(function(e){return c.a.createElement(c.a.Fragment,null,"Your components",c.a.createElement(b,{head:"Heading",allowInner:!0,parentPos:e,style:{width:300}},"Also your components"))})))});s.a.render(c.a.createElement(y,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(13)},5:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.23d805a4.chunk.js.map