(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){},233:function(e,t,a){},254:function(e,t,a){e.exports=a.p+"static/media/01.98377dca.jpg"},255:function(e,t,a){e.exports=a.p+"static/media/02.ab46828c.jpg"},297:function(e,t,a){e.exports=a(592)},302:function(e,t,a){},311:function(e,t,a){},317:function(e,t,a){},394:function(e,t,a){},444:function(e,t,a){},507:function(e,t,a){},508:function(e,t,a){},588:function(e,t,a){},590:function(e,t,a){},592:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),s=a(597),c=(a(302),a(17)),o=a(19),m=a(23),u=a(21),d=a(22),p=a(599),h=a(600),f=(a(71),a(34)),g=(a(55),a(15)),E=(a(593),a(205)),v=(a(56),a(10)),y=(a(308),a(256)),b=a(64),O=(a(206),a(16)),w=a.n(O),j=(a(311),a(312),a(294)),N=(a(250),a(48)),S=(a(114),a(12)),x=(a(317),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={top:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(j.a,{offsetTop:this.state.top},r.a.createElement(N.a,{mode:"horizontal",className:"background"},r.a.createElement(N.a.Item,{style:{float:"left"}},r.a.createElement(S.a,{type:"smile",style:{color:"#ffffff"},theme:"filled"})),r.a.createElement(N.a.Item,{style:{float:"right"}},r.a.createElement("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(S.a,{type:"dashboard",style:{color:"#ffffff"},theme:"filled"})))))))}}]),t}(n.Component)),C=a(29),I=a(596),k=a(254),P=a.n(k),A=a(255),_=a.n(A),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).disabledStartDate=function(e){return e&&e<w()().endOf("day")},a.disabledEndDate=function(e){var t=a.state.startValue;return!(!e||!t)&&e.valueOf()<=t.valueOf()},a.onChange=function(e,t){a.setState(Object(b.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e),a.props.onChangedeparture(e._d.getTime())},a.onEndChange=function(e){a.onChange("endValue",e),a.props.onChangereturn(e._d.getTime()),console.log(e._d.toISOString())},a.handleStartOpenChange=function(e){!0!==a.state.disabled&&(e||a.setState({endOpen:!0}))},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.generateTimeLine=function(){var e=a.timeLinearr(a.props.departuredate,a.props.returndate),t=Array(e.length).fill("Startview"),n=Array(e.length).fill([]),r=Array(e.length).fill([]);a.props.generateTimeLine(e,t,n,r)},a.timeLinearr=function(e,t){for(var a=[],n=e;n<=t;n+=864e5){var r=new Date(n).toISOString().slice(0,10);a.push(r)}return a},a.state={startValue:null,endValue:null,endOpen:!1,disabled:!1,radioValue:"Return"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.startValue,a=e.endValue,n=e.endOpen;return console.log(this.props.departuredate),r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(y.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("img",{alt:"1",style:{maxWidth:"100%"},src:P.a})),r.a.createElement("div",null,r.a.createElement("img",{alt:"2",style:{maxWidth:"100%"},src:_.a}))),r.a.createElement("div",{className:"welcomeView"},r.a.createElement(g.a,{type:"flex",justify:"start",align:"middle"},r.a.createElement(v.a,{span:3,className:"typeCol"},r.a.createElement("b",{className:"typeStyle"},"DEPART")),r.a.createElement(v.a,{span:8},r.a.createElement(E.a,{className:"datePicker",size:"large",disabledDate:this.disabledStartDate,format:"DD-MM-YYYY",initialValue:t,onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange})),r.a.createElement(v.a,{span:2,className:"typeCol"},r.a.createElement("b",{className:"typeStyle"},"TO")),r.a.createElement(v.a,{span:8},r.a.createElement(E.a,{className:"datePicker",size:"large",disabledDate:this.disabledEndDate,format:"DD-MM-YYYY",initialValue:a,onChange:this.onEndChange,open:n,onOpenChange:this.handleEndOpenChange}))),r.a.createElement(g.a,{type:"flex",justify:"center",align:"middle",className:"buttonStyle"},r.a.createElement(I.a,{to:"/Planview"},r.a.createElement(f.a,{size:"large",type:"primary",htmlType:"submit",onClick:this.generateTimeLine},"Start Your Plan")))))}}]),t}(n.Component);var D=Object(C.b)(function(e){return{departuredate:e.departuredate,returndate:e.returndate,timeline:e.timeline}},function(e){var t=this;return{onChangedeparture:function(t){e({type:"ON_CHANGE_DEPARTURE",payload:t}),console.log("input")},onChangereturn:function(t){e({type:"ON_CHANGE_RETURN",payload:t}),console.log("input2")},generateTimeLine:function(a,n,r,l){console.log(t.props),e({type:"GENERATE_TIME_LINE",timeline:a,UI:n,savedPoint:r,savedFlight:l})}}})(F),T=a(67),L=(a(394),N.a.SubMenu),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleClick=function(e){var t=a.props.currentindex,n=Object(T.a)(a.props.UI).slice(0);if("Startview"!==n[t])switch(e.key){case"sub1":n[t]="Search",a.props.changePlan(n);break;case"sub2":n[t]="Map",a.props.changePlan(n);break;default:console.log(n),console.log(a.props.UI)}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.savedPoint[this.props.currentindex].map(function(e,t){return r.a.createElement(N.a.Item,{key:t},e.title)}),t=this.props.savedFlight[this.props.currentindex].map(function(e,t){return r.a.createElement(N.a.Item,{key:t},e.CarriersName+"  "+e.FlightNumbers)});return r.a.createElement(N.a,{selectedKeys:["sub1"],defaultOpenKeys:["sub2"],selectable:!0,mode:"inline"},r.a.createElement(L,{key:"sub1",onTitleClick:this.handleClick,title:r.a.createElement("span",null,r.a.createElement(S.a,{type:"rocket"}),r.a.createElement("span",null,"Add Flight Tickets"))},r.a.createElement(N.a.Divider,{style:{margin:"0"}}),t),r.a.createElement(L,{key:"sub2",onTitleClick:this.handleClick,title:r.a.createElement("span",null,r.a.createElement(S.a,{type:"environment"}),r.a.createElement("span",null,"Mark Spot in Map"))},r.a.createElement(N.a.Divider,{style:{margin:"0"}}),e))}}]),t}(n.Component);var M=Object(C.b)(function(e){return{timeline:e.timeline,currentindex:e.currentindex,UI:e.UI,savedPoint:e.savedPoint,savedFlight:e.savedFlight}},function(e){return{changePlan:function(t){e({type:"CHANGE_PLAN",payload:t}),console.log(t)}}})(U),R=a(257),V=a.n(R),z=a(286),B=a.n(z),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={value:0,previous:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.dates=this.props.content.map(function(e){return e.date})}},{key:"render",value:function(){var e=this,t=this.props.content.map(function(e,t){return r.a.createElement("div",{key:t},e.component)});return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"80%",height:"100px",margin:"0 auto"}},r.a.createElement(V.a,{index:this.state.value,indexClick:function(t){console.log(t),e.setState({value:t,previous:e.state.value}),e.props.timelineClick(t)},values:this.dates,styles:{background:"#ffffff",foreground:"#40a9ff",outline:"#bae7ff"}})),r.a.createElement("div",{className:"text-center"},r.a.createElement(B.a,{index:this.state.value,onChangeIndex:function(t,a){e.setState({value:t,previous:a})},resistance:!0},t)))}}]),t}(n.Component);var G=Object(C.b)(function(e){return{currentindex:e.currentindex}},function(e){return{timelineClick:function(t){e({type:"TIMELINE_CLICK",payload:t})}}})(H),Y=(a(233),a(142),a(60)),W=(a(440),a(203)),K=(a(183),a(54)),Z=(a(234),a(110));a(444);function X(e){var t=e/60,a=Math.floor(t),n=60*(t-a);return a+" hour(s) and "+Math.round(n)+" minute(s)"}var $=Z.a.Panel,q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a.saveFlight=function(e,t){e.preventDefault();var n=!0;console.log(a.savedFlight.length),n=a.savedFlight.length<=0,a.props.savedFlight[a.props.currentindex].find(function(e){return e.FlightId===t.FlightId})||a.savedFlight.push(t);var r=a.props.currentindex,l=Object(T.a)(a.props.savedFlight).slice(0);l[r]=n?l[r].concat(a.savedFlight):a.savedFlight,a.props.saveFlight(l)},a.savedFlight=[],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;console.log("list");var t,a=this.props.posts,n=a.Itineraries,l=a.Legs,i=a.Places,s=a.Carriers,c=[],o=!0,m=!1,u=void 0;try{for(var d,p=n[Symbol.iterator]();!(o=(d=p.next()).done);o=!0){t=d.value;var h=l.find(function(e){return e.Id==t.OutboundLegId}),E=i.find(function(e){return e.Id==h.OriginStation}),y=i.find(function(e){return e.Id==h.DestinationStation}),b=s.find(function(e){return e.Id==h.Carriers[0]}),O=t.PricingOptions[0].Price;c.push(Object.assign({},{FlightId:t.OutboundLegId,FlightNumbers:b.DisplayCode+h.FlightNumbers[0].FlightNumber,OriginStation:E.Name,DestinationStation:y.Name,Departure:h.Departure,Arrival:h.Arrival,CarriersName:b.Name,CarriersImg:b.ImageUrl,price:O,BookingLink:t.PricingOptions[0].DeeplinkUrl,Duration:X(h.Duration)}))}}catch(x){m=!0,u=x}finally{try{o||null==p.return||p.return()}finally{if(m)throw u}}var w,j=r.a.createElement("div",null,"Add to your plan"),N=r.a.createElement("div",null,"Go To The Flight Website");return w=c.map(function(t,a){return r.a.createElement(Y.a,{key:a,className:"listStyle",hoverable:!0,bodyStyle:{padding:"0px",paddingLeft:20}},r.a.createElement(g.a,{type:"flex",align:"middle"},r.a.createElement(v.a,{xs:13,sm:12,md:2,lg:2,xl:2},r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement(K.a,{alt:"airline",src:t.CarriersImg}))),r.a.createElement(v.a,{xs:11,sm:12,md:5,lg:4,xl:3},r.a.createElement(g.a,{type:"flex",justify:"start",className:"airLineStyle"},r.a.createElement("h2",{className:"airLineStyle"},t.CarriersName)),r.a.createElement(g.a,{type:"flex",justify:"start"},t.FlightNumbers)),r.a.createElement(v.a,{xs:24,sm:12,md:6,lg:5,xl:5},r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement("b",null,t.Departure)),r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement("b",null,t.OriginStation))),r.a.createElement(v.a,{xs:24,sm:12,md:5,lg:3,xl:5},r.a.createElement("br",null),r.a.createElement(g.a,{type:"flex",justify:"start"},t.Duration),r.a.createElement("br",null)),r.a.createElement(v.a,{xs:24,sm:12,md:6,lg:5,xl:5},r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement("b",null,t.Arrival)),r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement("b",null,t.DestinationStation))),r.a.createElement(v.a,{xs:24,sm:12,md:20,lg:3,xl:2},r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement("b",{className:"priceStyle"}," $",t.price," "))),r.a.createElement(v.a,{xs:24,sm:12,md:4,lg:2,xl:2},r.a.createElement(g.a,{type:"flex",justify:"center"},r.a.createElement(W.a,{style:{width:500},content:j},r.a.createElement(f.a,{onClick:function(a){return e.saveFlight(a,t)},size:"large",type:"primary",shape:"circle",icon:"plus"})),r.a.createElement(W.a,{style:{width:500},content:N},r.a.createElement("a",{href:t.BookingLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(S.a,{type:"shopping"}),r.a.createElement(S.a,{type:"double-right",size:"big"})))))))}),r.a.createElement($,{showArrow:!1,header:w,key:"1",className:"customPanelStyle"})}}]),t}(n.Component);var Q=Object(C.b)(function(e){return{savedFlight:e.savedFlight,currentindex:e.currentindex}},function(e){return{saveFlight:function(t){e({type:"SAVE_FLIGHT",payload:t})}}})(q),J=(a(594),a(80)),ee=(a(97),a(111)),te=(a(595),a(292)),ae=a(204),ne=a.n(ae),re="REQUEST_POSTS",le="RECEIVE_POSTS",ie="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",se="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/",ce={"Content-Type":"application/x-www-form-urlencoded"},oe={"X-RapidAPI-Key":"4d7d4ff10fmsh4314efafb601609p1e0648jsn8658273cf3f9"},me=/v1.0\/(.*)/;function ue(e){return console.log("fetch begin"),function(t){return console.log("fetch begin"),t({type:re}),ne()(ie,{body:"cabinClass=economy&children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace="+e.From+"-sky&destinationPlace="+e.To+"-sky&outboundDate="+e.Time+"&adults=1",headers:Object.assign({},ce,oe),method:"POST"}).then(function(e){return e.headers.get("location")}).then(function(e){return e.match(me)[1]}).then(function(e){return console.log("sessionLink"+e),ne()("".concat(se).concat(e,"?sortType=price&sortOrder=asc&pageIndex=0&pageSize=10"),{headers:Object.assign({},oe)})}).then(function(e){return e.json()}).then(function(e){console.log(e),t(function(e){return{type:le,posts:e,receivedAt:Date.now()}}(e))})}}function de(e){return console.log("ifif"),function(t,a){if(function(e){var t=e.items;return console.log(!t),!t.isFetching}(a()))return e.Time=a().timeline[a().currentindex],console.log("begintofetch"),t(ue(e))}}te.a.Option;var pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).getFormValue=function(){return a.props.form.getFieldsValue()},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),a.props.onSearchSubmit(t))})},a.state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.onSearchSubmit;var e=this.props.form.getFieldDecorator;return r.a.createElement(J.a,{onSubmit:this.handleSubmit},r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:22,sm:18,md:21,lg:20,xl:10},r.a.createElement(g.a,null,r.a.createElement(J.a.Item,null,e("From",{rules:[{message:"Please input your starting points"}]})(r.a.createElement(ee.a,{addonBefore:"From",size:"large",allowClear:!0,placeholder:"Input IATA code,eg. ARN for Arlanda airport",style:{width:"85%"}}))))),r.a.createElement(v.a,{xs:2,sm:4,md:2,lg:4,xl:1},r.a.createElement(g.a,{type:"flex",justify:"start"},r.a.createElement(J.a.Item,null,r.a.createElement(f.a,{shape:"round",icon:"swap",size:"large"})))),r.a.createElement(v.a,{xs:22,sm:18,md:21,lg:20,xl:10},r.a.createElement(g.a,null,r.a.createElement(J.a.Item,null,e("To",{rules:[{message:"Please input your destination"}]})(r.a.createElement(ee.a,{addonBefore:"To",size:"large",allowClear:!0,placeholder:"Input IATA code,eg. LAX for LosAngeles airport",style:{width:"85%"}}))))),r.a.createElement(v.a,{xs:24,sm:6,md:24,lg:24,xl:3},r.a.createElement(g.a,null,r.a.createElement(J.a.Item,null,r.a.createElement(f.a,{type:"primary",htmlType:"submit",size:"large",icon:"right-circle"},"Submit"))))))}}]),t}(n.Component),he=J.a.create({name:"ClassPeople"})(pe),fe=Object(C.b)(function(){return{}},function(e){return{onSearchSubmit:function(t){return e(de(t))}}})(he),ge=(a(187),a(503),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infoView",id:"infowindow-content",display:"inline"},r.a.createElement(Y.a,{bordered:!1,extra:r.a.createElement(f.a,{type:"primary"},"Add"),title:r.a.createElement("span",{id:"place-name"}),headStyle:{padding:"0px",fontSize:"25px",position:"sticky"},bodyStyle:{padding:"0px"},size:"small",className:"cardStyle",cover:r.a.createElement("img",{id:"place-icon",src:""})},r.a.createElement("div",{className:"colorDiv"},r.a.createElement("h5",{className:"h4Style",id:"place-type"}," ")),r.a.createElement("div",{className:"div2Style"},r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"environment",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{id:"place-address"},"Place Address"))),r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"phone",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{id:"place-tel"},"telnumber"))),r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"schedule",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{id:"place-openingHour"},"openingHour"))))))}}]),t}(n.Component)),Ee=(n.Component,function e(t,a){Object(c.a)(this,e),this.handleClick=function(e){console.log("You clicked on: "+e.latLng),e.placeId?(console.log("You clicked on place:"+e.placeId),this.infowindow.close(),e.stop(),this.currentId=e.placeId,this.getPlaceInformation(e.placeId)):(this.infowindowContent.style.display="none",this.place_noPlace.textContent="Not a point of Interest \n"+e.latLng,this.infowindow.open(this.map),this.currentId=0,this.infowindow.setPosition(e.latLng))},this.getPlaceInformation=function(e){var t=this;this.placesService.getDetails({placeId:e},function(e,a){"OK"===a&&(t.infowindow.close(),t.infowindow.setPosition(e.geometry.location),t.infowindowContent.style.display="inline",t.place_icon.style.display="inline",t.place_icon.src=e.photos[0].getUrl(),t.place_name.textContent=e.name,t.place_type.textContent=e.types,t.place_tel.textContent=e.international_phone_number,t.place_openHour.textContent=e.opening_hours.weekday_text,t.place_address.textContent=e.formatted_address)})},this.getCurrentId=function(){return this.currentId},this.origin=a,this.map=t,this.placesService=new google.maps.places.PlacesService(t),this.infowindow=new google.maps.InfoWindow({maxWidth:600,pixelOffset:new google.maps.Size(0,-40)}),this.infowindowContent=document.getElementById("infowindow-content"),this.place_icon=document.getElementById("place-icon"),this.place_name=document.getElementById("place-name"),this.place_address=document.getElementById("place-address"),this.place_type=document.getElementById("place-type"),this.place_tel=document.getElementById("place-tel"),this.place_openHour=document.getElementById("place-openingHour"),this.place_noPlace=document.getElementById("place-noPlace"),this.infowindow.setContent(this.place_noPlace),this.currentId=0,this.map.addListener("click",this.handleClick.bind(this))}),ve=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a.savePoint=function(){var e=!0;console.log(a.savedPoint.length),e=a.savedPoint.length<=1;var t=a.props.currentindex,n=Object(T.a)(a.props.savedPoint).slice(0);n[t]=e?n[t].concat(a.savedPoint):a.savedPoint,a.props.savePoint(n)},a.map=r.a.createRef(),a.searchInput=r.a.createRef(),a.savedPoint=[],a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.initAutocomplete()}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:24,sm:6,md:24,lg:10,xl:10},r.a.createElement(ee.a,{ref:this.searchInput,id:"pac-input",className:"controls",size:"large",type:"text",placeholder:'Try to search "attractions"'})),r.a.createElement(v.a,null,r.a.createElement("button",{ref:"addButton",type:"button",onClick:this.savePoint},"Add to my plan"))),r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:24,sm:6,md:24,lg:18,xl:18},r.a.createElement("div",{ref:this.map,id:"map"})),r.a.createElement(v.a,{xs:24,sm:6,md:24,lg:6,xl:6},r.a.createElement("div",{className:"infoView",ref:"infowindowcontent",display:"none"},r.a.createElement(Y.a,{bordered:!1,extra:r.a.createElement(f.a,{type:"primary"},"Add"),title:r.a.createElement("span",{ref:"placename"}),headStyle:{padding:"0px",fontSize:"25px",position:"sticky"},bodyStyle:{padding:"0px"},size:"small",className:"cardStyle",cover:r.a.createElement("img",{ref:"placeicon",src:""})},r.a.createElement("div",{className:"colorDiv"},r.a.createElement("h5",{className:"h4Style",ref:"placetype"}," ")),r.a.createElement("div",{className:"div2Style"},r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"environment",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{ref:"placeaddress"}))),r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"phone",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{ref:"placetel"}))),r.a.createElement(g.a,{className:"rowStyle"},r.a.createElement(v.a,{span:4},r.a.createElement(K.a,{size:"small",icon:"schedule",className:"avatarStyle"}),"  "),r.a.createElement(v.a,{span:20},r.a.createElement("div",{ref:"placeopeningHour"})))))))),r.a.createElement("span",{id:"place-noPlace"}))}},{key:"initAutocomplete",value:function(){var e=this,t=new google.maps.Map(this.map.current,{center:{lat:59.325,lng:18.07},zoom:12,mapTypeId:"roadmap"});console.log(t);var a=new Ee(t,{lat:59.325,lng:18.07});a.infowindowContent=this.refs.infowindowcontent,a.infowindowContent.style.display="none",a.place_icon=this.refs.placeicon,a.place_name=this.refs.placename,a.place_address=this.refs.placeaddress,a.place_type=this.refs.placetype,a.place_tel=this.refs.placetel,a.place_openHour=this.refs.placeopeningHour,a.place_noPlace=this.refs.placenoPlace;var n=this.searchInput.current.input,r=new google.maps.places.SearchBox(n),l=this.refs.addButton;t.controls[google.maps.ControlPosition.TOP_LEFT].push(n),t.addListener("bounds_changed",function(){r.setBounds(t.getBounds())});var i=[],s={id:0,title:"unknow01",address:"unkown Places01"};new google.maps.places.PlacesService(t);l.addEventListener("click",function(n){!function(){var n={id:s.id,title:a.place_name.textContent,address:a.place_address.textContent};e.props.savedPoint[e.props.currentindex].find(function(e){return e.id===n.id})||e.savedPoint.push(n);var r=new google.maps.Marker({id:s.id,position:s.position,icon:c,map:t});r.addListener("click",function(e){o(r),i.forEach(function(e){e.setMap(null)}),i=[],a.getPlaceInformation(r.id)}),console.log(e.savedPoint)}(),n.preventDefault()});var c={path:"M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",fillColor:"yellow",fillOpacity:.8,scale:.05,strokeColor:"gold",strokeWeight:14};function o(e){(s=e).position=e.position,t.panTo(e.getPosition())}r.addListener("places_changed",function(){var e=r.getPlaces();if(0!=e.length){i.forEach(function(e){e.setMap(null)}),i=[];var n=new google.maps.LatLngBounds;e.forEach(function(e){if(e.geometry){i.push(new google.maps.Marker({map:t,id:e.place_id,title:e.name,address:e.formatted_address,animation:google.maps.Animation.DROP,position:e.geometry.location})),e.geometry.viewport?n.union(e.geometry.viewport):n.extend(e.geometry.location);var r=i[i.length-1];r.addListener("click",function(e){var t;null!==(t=r).getAnimation()?t.setAnimation(null):(i.forEach(function(e){e.setAnimation(null)}),t.setAnimation(google.maps.Animation.BOUNCE)),o(r),a.getPlaceInformation(r.id)})}else console.log("Returned place contains no geometry")}),t.fitBounds(n)}}),t.addListener("click",function(e){!function(e,t){i.forEach(function(e){e.setMap(null)}),(i=[]).push(new google.maps.Marker({id:a.getCurrentId(),map:t,position:e,animation:google.maps.Animation.BOUNCE})),console.log(i[0].id),o(i[0])}(e.latLng,t)})}}]),t}(n.Component);var ye=Object(C.b)(function(e){return{savedPoint:e.savedPoint,currentindex:e.currentindex}},function(e){return{savePoint:function(t){e({type:"SAVE_POINT",payload:t})}}})(ve),be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={top:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("formData"+e)}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.isFetching,n=e.lastUpdated;return console.log(t.length),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:24,sm:24,md:8,lg:5,xl:4},r.a.createElement("div",null,r.a.createElement(M,null))),r.a.createElement(v.a,{xs:24,sm:24,md:1,lg:1,xl:1}),r.a.createElement(v.a,{xs:24,sm:24,md:15,lg:18,xl:19},r.a.createElement("div",{className:"searchView"},r.a.createElement(fe,null)),a&&r.a.createElement("h2",null,"Loading..."),!(t instanceof Array)&&r.a.createElement("div",null,r.a.createElement(Q,{posts:t,lastTetchTime:n})))))}}]),t}(n.Component);var Oe=Object(C.b)(function(e){var t=e||{isFetching:!0,items:[]},a=t.isFetching,n=t.lastUpdated;return{posts:t.items,isFetching:a,lastUpdated:n}})(be),we=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={top:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("formData"+e)}},{key:"render",value:function(){var e=this.props,t=e.posts;e.isFetching,e.lastUpdated;return console.log(t.length),r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:24,sm:24,md:8,lg:5,xl:4},r.a.createElement("div",null,r.a.createElement(M,null))),r.a.createElement(v.a,{xs:24,sm:24,md:1,lg:1,xl:1}),r.a.createElement(v.a,{xs:24,sm:24,md:15,lg:18,xl:19},r.a.createElement("div",null,r.a.createElement(ye,null)))))}}]),t}(n.Component);var je=Object(C.b)(function(e){var t=e||{isFetching:!0,items:[]},a=t.isFetching,n=t.lastUpdated;return{posts:t.items,isFetching:a,lastUpdated:n}})(we),Ne=(a(505),a(293)),Se=(a(507),Y.a.Meta),xe=Z.a.Panel,Ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={hotel_name:"XXX Hotel",hotel_description:"This is hotel description >>>"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y.a,{style:{width:"100%"},cover:r.a.createElement("img",{alt:"example",src:"https://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg"})},r.a.createElement(Se,{title:this.state.hotel_name}),r.a.createElement(Ne.a,{disabled:!0,defaultValue:3}),r.a.createElement(Se,{description:this.state.hotel_description}),r.a.createElement(Z.a,{bordered:!1,expandIcon:function(e){var t=e.isActive;return r.a.createElement(S.a,{type:"caret-right",rotate:t?90:0})}},r.a.createElement(xe,{header:"Available Time",key:"1",className:"customPanelStyle"},r.a.createElement("p",null)),r.a.createElement(xe,{header:"Comments",key:"2",className:"customPanelStyle"},r.a.createElement("p",null)),r.a.createElement(xe,{header:"Address",key:"3",className:"customPanelStyle"},r.a.createElement("p",null)))))}}]),t}(n.Component),Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addPlan=function(){var e=a.props.currentindex,t=Object(T.a)(a.props.UI).slice(0);t[e]="Search",a.props.addPlan(t),console.log(t),console.log(a.props.UI)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){switch(this.props.UI[this.props.currentindex]){case"DetailItem":return r.a.createElement("div",null,r.a.createElement(Ce,null));case"Search":return r.a.createElement("div",null,r.a.createElement(Oe,null));case"Map":return r.a.createElement("div",null,r.a.createElement(je,null));default:return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(f.a,{type:"primary",shape:"round",icon:"edit",size:"large",onClick:this.addPlan},"ADD YOUR PLAN")))}}}]),t}(n.Component);var ke=Object(C.b)(function(e){return{timeline:e.timeline,currentindex:e.currentindex,UI:e.UI}},function(e){return{addPlan:function(t){e({type:"ADD_PLAN",payload:t}),console.log(t)}}})(Ie),Pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).giveContent=function(){console.log(a.props.currentindex);for(var e=a.props.timeline.length,t=[],n=0;n<=e-1;n++)t.push({date:a.props.timeline[n],content:r.a.createElement(ke,{UI:a.props.UI[n]})});return t},a.state={value:0,previous:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.data=this.giveContent().map(function(e,t){return{date:e.date,component:r.a.createElement("div",{key:t},e.content)}})}},{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(this.data=this.giveContent().map(function(e,t){return{date:e.date,component:r.a.createElement("div",{key:t},e.content)}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(g.a,null,r.a.createElement(v.a,{xs:24,sm:24,md:24,lg:24,xl:24},r.a.createElement(G,{content:this.data}))))}}]),t}(n.Component);var Ae=Object(C.b)(function(e){return{timeline:e.timeline,UI:e.UI,currentindex:e.currentindex}})(Pe),_e=a(152),Fe=a(93),De=new(function(){function e(){Object(c.a)(this,e),this.authenticated=!1}return Object(o.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),Te=(a(508),a(79)),Le=a.n(Te),Ue=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),Me=function(e){var t=e.formErrors,a=Object(Fe.a)(e,["formErrors"]),n=!0;return Object.values(t).forEach(function(e){e.length>0&&(n=!1)}),Object.values(a).forEach(function(e){null===e&&(n=!1)}),n},Re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;Le.a.auth().signInWithEmailAndPassword(t,n).then(function(){De.login(function(){a.props.history.push("/app")})}).catch(function(e){return a.setState({errormessage:e.message})}),Me(a.state)?console.log("\n        --SUBMITTING--\n      "):console.error("FORM INVALID - DISPLAY ERROR MESSAGE")},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,l=Object(_e.a)({},a.state.formErrors);switch(n){case"email":l.email=Ue.test(r)?"":"invalid email address";break;case"password":l.password=r.length<6?"minimum 6 characaters required":""}a.setState(Object(b.a)({formErrors:l},n,r),function(){return console.log(a.state)})},a.state={email:null,password:null,formErrors:{email:"",password:""},errormessage:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"SignIn"),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:e.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&r.a.createElement("span",{className:"errorMessage"},e.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:e.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.password)),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit"},"Sign In"),r.a.createElement("div",null,this.state.errormessage),r.a.createElement(I.a,{to:"/SignUp",className:"FormField__Link"},"Create an account"))))))}}]),t}(n.Component),Ve=(a(588),RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),ze=function(e){var t=e.formErrors,a=Object(Fe.a)(e,["formErrors"]),n=!0;return Object.values(t).forEach(function(e){e.length>0&&(n=!1)}),Object.values(a).forEach(function(e){null===e&&(n=!1)}),n},Be=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;Le.a.auth().createUserWithEmailAndPassword(t,n).then(function(){De.login(function(){a.props.history.push("/")})}).catch(function(e){return a.setState({errormessage:e.message})}),Le.a.auth().onAuthStateChanged(function(e){e?console.log(e):console.log("No logged in")}),ze(a.state)?console.log("\n        --SUBMITTING--\n   "):console.error("FORM INVALID - DISPLAY ERROR MESSAGE")},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,l=Object(_e.a)({},a.state.formErrors);switch(n){case"firstName":l.firstName=r.length<3?"minimum 3 characaters required":"";break;case"lastName":l.lastName=r.length<3?"minimum 3 characaters required":"";break;case"email":l.email=Ve.test(r)?"":"invalid email address";break;case"password":l.password=r.length<6?"minimum 6 characaters required":"",a.setState({thepassword:r});break;case"validpassword":l.validpassword=r!==a.state.thepassword?"please enter the same password":""}a.setState(Object(b.a)({formErrors:l},n,r))},a.state={firstName:null,lastName:null,email:null,password:null,formErrors:{firstName:"",lastName:"",email:"",password:"",validpassword:""},errormessage:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return console.log(this.state),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h1",null,"Create Account"),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"firstName"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{className:e.firstName.length>0?"error":null,placeholder:"First Name",type:"text",name:"firstName",noValidate:!0,onChange:this.handleChange}),e.firstName.length>0&&r.a.createElement("span",{className:"errorMessage"},e.firstName)),r.a.createElement("div",{className:"lastName"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{className:e.lastName.length>0?"error":null,placeholder:"Last Name",type:"text",name:"lastName",noValidate:!0,onChange:this.handleChange}),e.lastName.length>0&&r.a.createElement("span",{className:"errorMessage"},e.lastName)),r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:e.email.length>0?"error":null,placeholder:"Email",type:"email",name:"email",noValidate:!0,onChange:this.handleChange}),e.email.length>0&&r.a.createElement("span",{className:"errorMessage"},e.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:e.password.length>0?"error":null,placeholder:"Password",type:"password",name:"password",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.password)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"valid password"},"Valid Password"),r.a.createElement("input",{className:e.validpassword.length>0?"error":null,placeholder:"valid password",type:"validpassword",name:"validpassword",noValidate:!0,onChange:this.handleChange}),e.password.length>0&&r.a.createElement("span",{className:"errorMessage"},e.validpassword)),r.a.createElement("div",{className:"createAccount"},r.a.createElement("button",{type:"submit"},"Create Account"),r.a.createElement("div",null,this.state.errormessage),r.a.createElement(I.a,{to:"/",className:"FormField__Link"},"Already Have an Account?")))))}}]),t}(n.Component),He=a(598),Ge=function(e){var t=e.component,a=Object(Fe.a)(e,["component"]);return r.a.createElement(h.a,Object.assign({},a,{render:function(e){return De.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(He.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Ye=(a(590),{departuredate:"yessss",returndate:"nooooo",departureplace:"beijing",currentindex:0,isFetching:!1,items:[],savedPoint:[],savedFlight:[]});function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer running"),t.type){case"ON_CHANGE_DEPARTURE":return Object.assign({},e,{departuredate:t.payload});case"ON_CHANGE_RETURN":return Object.assign({},e,{returndate:t.payload});case"GENERATE_TIME_LINE":return Object.assign({},e,{timeline:t.timeline,UI:t.UI,savedPoint:t.savedPoint,savedFlight:t.savedFlight});case"TIMELINE_CLICK":return Object.assign({},e,{currentindex:t.payload});case"ADD_PLAN":case"CHANGE_PLAN":return Object.assign({},e,{UI:t.payload});case"SAVE_POINT":return Object.assign({},e,{savedPoint:t.payload});case"SAVE_FLIGHT":return Object.assign({},e,{savedFlight:t.payload});case"REQUEST_POSTS":return Object.assign({},e,{isFetching:!0});case"RECEIVE_POSTS":return Object.assign({},e,{isFetching:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}var Ke=a(76),Ze=a(290),Xe=a(291),$e=Object(Xe.createLogger)();var qe,Qe=Object(Ke.c)(We,qe,Object(Ke.a)(Ze.a,$e)),Je=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{store:Qe},r.a.createElement("div",{className:"App"},r.a.createElement("header",null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:Re}),r.a.createElement(h.a,{exact:!0,path:"/SignUp",component:Be}),r.a.createElement(Ge,{exact:!0,path:"/app",component:D}),r.a.createElement(h.a,{exact:!0,path:"/PlanView",component:Ae}),r.a.createElement(h.a,{path:"*",component:function(){return"404 NOT FOUND"}}))))}}]),t}(n.Component);Le.a.initializeApp({apiKey:"AIzaSyBhzhhGWi1TLDQyl8dyDOhR6WIG-BRcYKc",authDomain:"travelplanner-web.firebaseapp.com",databaseURL:"https://travelplanner-web.firebaseio.com",projectId:"travelplanner-web",storageBucket:"travelplanner-web.appspot.com",messagingSenderId:"148373620558"}),i.a.render(r.a.createElement(s.a,null,r.a.createElement(Je,null)),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.a0d67b4b.chunk.js.map