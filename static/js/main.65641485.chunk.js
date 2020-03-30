(this["webpackJsonpsvs-webiste"]=this["webpackJsonpsvs-webiste"]||[]).push([[0],{131:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),i=t.n(r),c=(t(72),t(73),t(14)),s=t.n(c),m=t(20),o=t.n(m),g=t(64);var p=function(e){return l.a.createElement("div",null,l.a.createElement(s.a.Item,null,l.a.createElement(s.a.Link,{eventKey:e.eventKey},l.a.createElement(g.Link,{className:"menu-options",activeClass:"active",to:e.to,spy:!0,smooth:!0,offset:-70,duration:500},e.title))))};var u=function(){return l.a.createElement("div",null,l.a.createElement(o.a,{className:"nav",expand:"lg",variant:"dark"},l.a.createElement(o.a.Brand,null,l.a.createElement("img",{id:"nav-logo",src:"./images/text-logo-alpha.png",alt:"logo-alpha"})),l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(s.a,{className:"mr-auto"},l.a.createElement(p,{eventKey:"link-1",to:"section1",title:"About"}),l.a.createElement(p,{eventKey:"link-3",to:"section3",title:"Portfolio"}),l.a.createElement(p,{eventKey:"link-2",to:"section2",title:"Services"}),l.a.createElement(p,{eventKey:"link-4",to:"section4",title:"Pricing"}),l.a.createElement(p,{eventKey:"link-5",to:"section5",title:"Contact"})))))},E=t(15),v=t(16),d=t(18),h=t(17),b=t(19),f=t(65),j=t.n(f),y=t(66),N=t.n(y),O=t(25),k=t.n(O),w=t(35),C=t.n(w),S=function(e){function a(){return Object(E.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(e){return l.a.createElement(C.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(C.a.Body,null,l.a.createElement("span",null,l.a.createElement("img",{className:"modal-image",src:this.props.image,alt:"portfolio"}))),this.props.credit?l.a.createElement("p",{class:"text-credit"},"Agency: ",this.props.credit):null)}}]),a}(l.a.Component),L=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={modalShow:!1},t}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement("img",{onClick:function(){return e.setState({modalShow:!0})},className:"portfolio-images",src:this.props.image,alt:"portfolio"})),l.a.createElement(S,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},image:this.props.image,credit:this.props.credit}))}}]),a}(l.a.Component),A="Clickspring Design",x="Youmans Designs",B=function(e){function a(){return Object(E.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"extra"},l.a.createElement("img",{id:"main-image",src:"./images/main-image.png",alt:"main"}),l.a.createElement(j.a,null,l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section1"},l.a.createElement("p",null,l.a.createElement("strong",null,"WHAT IS SLICE VISUAL STUDIO?")),l.a.createElement("p",{className:"text-box"},"Slice is a visualization studio based in Austin, Texas. We translate scenic and architectural designs into captivating and engaging imagery. Our dynamic team is skilled in 3D rendering, animation, and 360\xb0 VR rendering and photography.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section3"},l.a.createElement("p",null,l.a.createElement("strong",null,"PORTFOLIO")),l.a.createElement(L,{image:"./images/web_seven-apts-bremond-01.jpg"}),l.a.createElement(L,{image:"./images/web_seven-apts-bremond-00.jpg"}),l.a.createElement(L,{image:"./images/BMB-01.jpg",credit:A}),l.a.createElement(L,{image:"./images/BMB-02.jpg",credit:A}),l.a.createElement(L,{image:"./images/web_evolve-A-01.jpg"}),l.a.createElement(L,{image:"./images/web_evolve-A-00.jpg"}),l.a.createElement(L,{image:"./images/web_evolve-A-plan.jpg"}),l.a.createElement(L,{image:"./images/NCL-Laser-Tag-03.jpg",credit:x}),l.a.createElement(L,{image:"./images/NCL-Laser-Tag-02.jpg",credit:x}),l.a.createElement(L,{image:"./images/web_evolve-B-01.jpg"}),l.a.createElement(L,{image:"./images/web_evolve-B-00.jpg"}),l.a.createElement(L,{image:"./images/web_evolve-B-plan.jpg"})),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section2"},l.a.createElement("p",null,l.a.createElement("strong",null,"2D AND 3D FLOOR PLAN SERVICES")),l.a.createElement("img",{className:"viz-images",src:"./images/services-01.png",alt:"viz"}),l.a.createElement("img",{className:"viz-images",src:"./images/services-00.png",alt:"viz"}),l.a.createElement("p",{className:"text-box"}," We specialize in creating high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section4"},l.a.createElement(k.a,null,l.a.createElement(k.a.Toggle,{as:N.a,variant:"link",eventKey:"0"},l.a.createElement("p",null,l.a.createElement("strong",null,"FLOOR PLAN PRICING \u25bc"))),l.a.createElement(k.a.Collapse,{eventKey:"0"},l.a.createElement("img",{id:"chart",src:"./images/price-chart.jpg",alt:"pricing-chart"}))))))}}]),a}(l.a.Component);var I=function(){return l.a.createElement("footer",{className:"section5",id:"footer"},l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"mailto:cbondy@slicevisualstudio.com"},l.a.createElement("i",{className:"fa fa-envelope"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"tel:225-718-5327"},l.a.createElement("i",{className:"fa fa-phone"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"https://www.instagram.com/slicevisualstudio/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"}))))};var D=function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(B,null),l.a.createElement(I,null))};i.a.render(l.a.createElement(D,null),document.getElementById("root"))},67:function(e,a,t){e.exports=t(131)},72:function(e,a,t){},73:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.65641485.chunk.js.map