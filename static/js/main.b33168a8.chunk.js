(this["webpackJsonpsvs-webiste"]=this["webpackJsonpsvs-webiste"]||[]).push([[0],{49:function(e,a,t){e.exports=t(68)},54:function(e,a,t){},55:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),c=(t(54),t(55),t(23)),s=t(26),m=t(45);var o=function(e){return l.a.createElement("div",null,l.a.createElement(c.a.Item,null,l.a.createElement(c.a.Link,{eventKey:e.eventKey},l.a.createElement(m.Link,{className:"menu-options",activeClass:"active",to:e.to,spy:!0,smooth:!0,offset:-70,duration:500},e.title))))};var g=function(){return l.a.createElement("div",null,l.a.createElement(s.a,{className:"nav",expand:"lg",variant:"dark"},l.a.createElement(s.a.Brand,null,l.a.createElement("img",{id:"nav-logo",src:"./images/text-logo-alpha.png",alt:"logo-alpha"})),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(c.a,{className:"mr-auto"},l.a.createElement(o,{eventKey:"link-1",to:"section1",title:"About"}),l.a.createElement(o,{eventKey:"link-3",to:"section2",title:"Portfolio"}),l.a.createElement(o,{eventKey:"link-2",to:"section3",title:"Services"}),l.a.createElement(o,{eventKey:"link-4",to:"section4",title:"Pricing"}),l.a.createElement(o,{eventKey:"link-5",to:"section5",title:"Contact"})))))},p=t(21),u=t(22),E=t(24),v=t(25),d=t(47),h=t(48),f=t(34),b=t(40),j=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(e){return l.a.createElement(b.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(b.a.Body,null,l.a.createElement("span",null,l.a.createElement("img",{className:"modal-image",src:this.props.image,alt:"portfolio"}))),this.props.credit?l.a.createElement("p",{class:"text-credit"},"Agency: ",this.props.credit):null)}}]),t}(l.a.Component),y=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={modalShow:!1},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement("img",{onClick:function(){return e.setState({modalShow:!0})},className:"portfolio-images",src:this.props.image,alt:"portfolio"})),l.a.createElement(j,{show:this.state.modalShow,onHide:function(){return e.setState({modalShow:!1})},image:this.props.image,credit:this.props.credit}))}}]),t}(l.a.Component),N="Clickspring Design",k="Youmans Designs",w=function(e){Object(v.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={rotated:!1},e.handleClick=function(){return e.setState((function(e){return{rotated:!e.rotated}}))},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"extra"},l.a.createElement("img",{id:"main-image",src:"./images/main-image.png",alt:"main"}),l.a.createElement(d.a,null,l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section1"},l.a.createElement("p",null,l.a.createElement("strong",null,"WHAT IS SLICE VISUAL STUDIO?")),l.a.createElement("p",{className:"text-box"},"Slice is a visualization studio based in Austin, Texas. We translate scenic and architectural designs into captivating and engaging imagery. Our dynamic team is skilled in 3D rendering, animation, and 360\xb0 VR rendering and photography.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section2"},l.a.createElement("p",null,l.a.createElement("strong",null,"PORTFOLIO")),l.a.createElement(y,{image:"./images/web_seven-apts-bremond-01.jpg"}),l.a.createElement(y,{image:"./images/web_seven-apts-bremond-00.jpg"}),l.a.createElement(y,{image:"./images/BMB-01.jpg",credit:N}),l.a.createElement(y,{image:"./images/BMB-02.jpg",credit:N}),l.a.createElement(y,{image:"./images/web_evolve-A-01.jpg"}),l.a.createElement(y,{image:"./images/web_evolve-A-00.jpg"}),l.a.createElement(y,{image:"./images/web_evolve-A-plan.jpg"}),l.a.createElement(y,{image:"./images/Walmart-02.jpg",credit:k}),l.a.createElement(y,{image:"./images/Walmart-01.jpg",credit:k}),l.a.createElement(y,{image:"./images/web_evolve-B-01.jpg"}),l.a.createElement(y,{image:"./images/web_evolve-B-00.jpg"}),l.a.createElement(y,{image:"./images/web_evolve-B-plan.jpg"}),l.a.createElement(y,{image:"./images/NCL-Laser-Tag-03.jpg",credit:k}),l.a.createElement(y,{image:"./images/NCL-Laser-Tag-02.jpg",credit:k})),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section3"},l.a.createElement("p",null,l.a.createElement("strong",null,"2D AND 3D FLOOR PLAN SERVICES")),l.a.createElement("img",{className:"viz-images",src:"./images/services-01.png",alt:"viz"}),l.a.createElement("img",{className:"viz-images",src:"./images/services-00.png",alt:"viz"}),l.a.createElement("p",{className:"text-box"}," We specialize in creating high quality 2D and 3D marketing floor plans for real estate agents, property managers, and developers.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"group-margin section4"},l.a.createElement(f.a,null,l.a.createElement(f.a.Toggle,{as:h.a,variant:"link",eventKey:"0",onClick:this.handleClick},l.a.createElement("p",null,l.a.createElement("strong",null,"FLOOR PLAN PRICING",l.a.createElement("span",{className:this.state.rotated?"trigger-rotated":"trigger"}," \u25bc")))),l.a.createElement(f.a.Collapse,{eventKey:"0"},l.a.createElement("img",{id:"chart",src:"./images/price-chart.jpg",alt:"pricing-chart"}))))))}}]),t}(l.a.Component);var O=function(){return l.a.createElement("footer",{className:"section5",id:"footer"},l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"mailto:cbondy@slicevisualstudio.com"},l.a.createElement("i",{className:"fa fa-envelope"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"tel:225-718-5327"},l.a.createElement("i",{className:"fa fa-phone"}))),l.a.createElement("span",null,l.a.createElement("a",{className:"links",href:"https://www.instagram.com/slicevisualstudio/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"}))))};var C=function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(w,null),l.a.createElement(O,null))};i.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b33168a8.chunk.js.map