(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){},230:function(e,t,a){e.exports=a(444)},235:function(e,t,a){},244:function(e,t,a){},249:function(e,t,a){},326:function(e,t,a){},379:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=a(449),s=(a(235),a(20)),o=a(21),u=a(25),m=a(22),p=a(24),d=a(450),h=(a(72),a(28)),E=(a(83),a(13)),f=(a(445),a(148)),y=(a(85),a(14)),g=(a(241),a(187)),v=a(183),b=(a(150),a(12)),O=a.n(b),j=(a(244),a(151),a(111)),C=(a(182),a(51)),x=(a(86),a(9)),S=(a(249),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={top:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(j.a,{offsetTop:this.state.top},l.a.createElement(C.a,{mode:"horizontal",className:"background"},l.a.createElement(C.a.Item,{style:{float:"left"}},l.a.createElement(x.a,{type:"smile",theme:"twoTone"})),l.a.createElement(C.a.Item,{style:{float:"right"}},l.a.createElement(x.a,{type:"user"}))))))}}]),t}(n.Component)),I=a(34),N=a(448),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).disabledStartDate=function(e){return e&&e<O()().endOf("day")},a.disabledEndDate=function(e){var t=a.state.startValue;return!(!e||!t)&&e.valueOf()<=t.valueOf()},a.onChange=function(e,t){a.setState(Object(v.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e),a.props.onChangedeparture(e._d.getTime())},a.onEndChange=function(e){a.onChange("endValue",e),a.props.onChangereturn(e._d.getTime()),console.log(e._d.toISOString())},a.handleStartOpenChange=function(e){!0!==a.state.disabled&&(e||a.setState({endOpen:!0}))},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.generateTimeLine=function(){var e=a.timeLinearr(a.props.departuredate,a.props.returndate),t=Array(e.length).fill("Startview");a.props.generateTimeLine(e,t)},a.timeLinearr=function(e,t){for(var a=[],n=e;n<=t;n+=864e5){var l=new Date(n).toISOString().slice(0,10);a.push(l)}return a},a.state={startValue:null,endValue:null,endOpen:!1,disabled:!1,radioValue:"Return"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.startValue,a=e.endValue,n=e.endOpen;return console.log(this.props.departuredate),l.a.createElement("div",null,l.a.createElement("div",null,this.props.departuredate+"this.props."+this.props.returndate),l.a.createElement(S,null),l.a.createElement(g.a,{autoplay:!0},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4"))),l.a.createElement("div",{className:"searchView"},l.a.createElement(E.a,{type:"flex",justify:"start",align:"middle"},l.a.createElement(y.a,{span:3,className:"typeCol"},l.a.createElement("b",{className:"typeStyle"},"DEPART")),l.a.createElement(y.a,{span:8},l.a.createElement(f.a,{className:"datePicker",size:"large",disabledDate:this.disabledStartDate,format:"DD-MM-YYYY",initialValue:t,onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange})),l.a.createElement(y.a,{span:2,className:"typeCol"},l.a.createElement("b",{className:"typeStyle"},"TO")),l.a.createElement(y.a,{span:8},l.a.createElement(f.a,{className:"datePicker",size:"large",disabledDate:this.disabledEndDate,format:"DD-MM-YYYY",initialValue:a,onChange:this.onEndChange,open:n,onOpenChange:this.handleEndOpenChange}))),l.a.createElement(E.a,{type:"flex",justify:"center",align:"middle",className:"buttonStyle"},l.a.createElement(N.a,{to:"/Planview"},l.a.createElement(h.a,{size:"large",type:"primary",htmlType:"submit",onClick:this.generateTimeLine},"Get Your Plan")))))}}]),t}(n.Component);var P=Object(I.b)(function(e){return{departuredate:e.departuredate,returndate:e.returndate,timeline:e.timeline}},function(e){var t=this;return{onChangedeparture:function(t){e({type:"ON_CHANGE_DEPARTURE",payload:t}),console.log("input")},onChangereturn:function(t){e({type:"ON_CHANGE_RETURN",payload:t}),console.log("input2")},generateTimeLine:function(a,n){console.log(t.props),e({type:"GENERATE_TIME_LINE",timeline:a,UI:n})}}})(k),w=(a(326),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:1},a.handleClick=function(e){console.log("click ",e)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement(C.a,{onClick:this.handleClick,defaultSelectedKeys:["1"],mode:"vertical-left"},l.a.createElement(C.a.Item,{key:"1"},l.a.createElement(x.a,{type:"rocket"})),l.a.createElement(C.a.Item,{key:"2"},l.a.createElement(x.a,{type:"home"}))))}}]),t}(n.Component)),T=a(188),A=a.n(T),V=a(217),D=a.n(V),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:0,previous:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.dates=this.props.content.map(function(e){return e.date})}},{key:"render",value:function(){var e=this,t=this.props.content.map(function(e,t){return l.a.createElement("div",{key:t},e.component)});return l.a.createElement("div",null,l.a.createElement("div",null,"issisisi"),l.a.createElement("div",{style:{width:"80%",height:"100px",margin:"0 auto"}},l.a.createElement(A.a,{index:this.state.value,indexClick:function(t){console.log(t),e.setState({value:t,previous:e.state.value}),e.props.timelineClick(t)},values:this.dates,styles:{background:"#ffffff",foreground:"#40a9ff",outline:"#bae7ff"}})),l.a.createElement("div",{className:"text-center"},this.state.value,l.a.createElement(D.a,{index:this.state.value,onChangeIndex:function(t,a){e.setState({value:t,previous:a})},resistance:!0},t)))}}]),t}(n.Component);var U=Object(I.b)(function(e){return{currentindex:e.currentindex}},function(e){return{timelineClick:function(t){e({type:"TIMELINE_CLICK",payload:t})}}})(_),F=(a(178),a(181),a(80)),L=(a(372),a(221)),R=(a(374),a(220)),M=(a(376),a(219)),z=(a(179),a(70)),Y=(a(379),z.a.Panel),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){console.log("list");var e,t=this.props.posts,a=t.Itineraries,n=t.Legs,r=t.Places,i=t.Carriers,c=[],s=!0,o=!1,u=void 0;try{for(var m,p=a[Symbol.iterator]();!(s=(m=p.next()).done);s=!0){e=m.value;var d=n.find(function(t){return t.Id==e.OutboundLegId}),f=r.find(function(e){return e.Id==d.OriginStation}),g=r.find(function(e){return e.Id==d.DestinationStation}),v=i.find(function(e){return e.Id==d.Carriers[0]}),b=e.PricingOptions[0].Price;c.push(Object.assign({},{FlightId:e.OutboundLegId,OriginStation:f.Name,DestinationStation:g.Name,Departure:d.Departure,Arrival:d.Arrival,CarriersName:v.Name,CarriersImg:v.ImageUrl,price:b}))}}catch(C){o=!0,u=C}finally{try{s||null==p.return||p.return()}finally{if(o)throw u}}var O,j=l.a.createElement("div",null,"Add to your plan");return O=c.map(function(e,t){return l.a.createElement("div",null,l.a.createElement(F.a,{key:t,className:"listStyle",hoverable:!0,bodyStyle:{padding:"0px",paddingLeft:20}},l.a.createElement(E.a,{type:"flex",align:"middle"},l.a.createElement(y.a,{xs:24,sm:12,md:2,lg:2,xl:2},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement(M.a,{alt:"airline",src:e.CarriersImg}))),l.a.createElement(y.a,{xs:24,sm:12,md:9,lg:6,xl:7},l.a.createElement(E.a,{type:"flex",justify:"start",className:"airLineStyle"},l.a.createElement("h2",{className:"airLineStyle"},e.CarriersName)),l.a.createElement(E.a,{type:"flex",justify:"start"},"Airbus A321-100/200")),l.a.createElement(y.a,{xs:24,sm:12,md:4,lg:3,xl:2},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement("b",null,e.Departure)),l.a.createElement(E.a,{type:"flex",justify:"start",className:"airportStyle"},l.a.createElement("b",null,e.OriginStation))),l.a.createElement(y.a,{xs:24,sm:12,md:4,lg:4,xl:2},l.a.createElement(E.a,{type:"flex",justify:"center"},"8h10m"),l.a.createElement(E.a,{type:"flex",justify:"center"},l.a.createElement(x.a,{type:"minus"}),l.a.createElement(x.a,{type:"minus"}),l.a.createElement(x.a,{type:"rocket",rotate:"90"}),l.a.createElement(x.a,{type:"minus"}),l.a.createElement(x.a,{type:"minus"})),l.a.createElement(E.a,{type:"flex",justify:"center"},l.a.createElement("b",{className:"priceStyle"},"1 stop STD"))),l.a.createElement(y.a,{xs:24,sm:12,md:4,lg:4,xl:5},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement("b",null,e.Arrival)),l.a.createElement(E.a,{type:"flex",justify:"start",className:"airportStyle"},l.a.createElement("b",null,e.DestinationStation))),l.a.createElement(y.a,{xs:24,sm:12,md:8,lg:5,xl:3},l.a.createElement(E.a,{type:"flex",justify:"start",className:"airLineStyle"},l.a.createElement("h2",{className:"airLineStyle"}," Economy")),l.a.createElement(E.a,{type:"flex",justify:"start"},"Lowest Price: ",l.a.createElement("b",{className:"priceStyle"}," $",e.price," "))),l.a.createElement(y.a,{xs:24,sm:12,md:8,lg:12,xl:2},l.a.createElement(E.a,{type:"flex",justify:"end"},l.a.createElement(R.a,{style:{width:500},content:j},l.a.createElement(h.a,{size:"large",type:"primary",shape:"circle",icon:"plus"}))))),l.a.createElement(E.a,{type:"flex",justify:"center",style:{marginTop:"10px"}},l.a.createElement(L.a,{style:{margin:0}},l.a.createElement(x.a,{type:"double-right",rotate:"90"})))))}),l.a.createElement(z.a,null,l.a.createElement(Y,{showArrow:!1,header:O,key:"1",className:"customPanelStyle"}))}}]),t}(n.Component),G=(a(84),a(71)),W=(a(447),a(38)),X=(a(446),a(114)),B=a(147),K=a.n(B),J="REQUEST_POSTS",Q="RECEIVE_POSTS",$="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",q="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/",Z={"Content-Type":"application/x-www-form-urlencoded"},ee={"X-RapidAPI-Key":"4d7d4ff10fmsh4314efafb601609p1e0648jsn8658273cf3f9"},te=/v1.0\/(.*)/;function ae(e){return console.log("fetch begin"),function(t){return console.log("fetch begin"),t({type:J}),K()($,{body:"cabinClass=economy&children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace="+e.From+"-sky&destinationPlace="+e.To+"-sky&outboundDate="+e.Time+"&adults=1",headers:Object.assign({},Z,ee),method:"POST"}).then(function(e){return e.headers.get("location")}).then(function(e){return e.match(te)[1]}).then(function(e){return console.log("sessionLink"+e),K()("".concat(q).concat(e,"?sortType=price&sortOrder=asc&pageIndex=0&pageSize=10"),{headers:Object.assign({},ee)})}).then(function(e){return e.json()}).then(function(e){console.log(e),t(function(e){return{type:Q,posts:e,receivedAt:Date.now()}}(e))})}}function ne(e){return console.log("ifif"),function(t,a){if(function(e){var t=e.items;return console.log(!t),!t.isFetching}(a()))return e.Time=a().timeline[a().currentindex],console.log("begintofetch"),t(ae(e))}}var le=X.a.Option,re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).adultsMinusChange=function(){var e=a.props.form.getFieldValue("adults");if(e>1){var t=e-1;a.props.form.setFieldsValue({adults:t})}},a.adultsPlusChange=function(){var e=a.props.form.getFieldValue("adults")+1;a.props.form.setFieldsValue({adults:e})},a.childrenMinusChange=function(){var e=a.props.form.getFieldValue("children");if(e>=1){var t=e-1;a.props.form.setFieldsValue({children:t})}},a.childrenPlusChange=function(){var e=a.props.form.getFieldValue("children")+1;a.props.form.setFieldsValue({children:e})},a.infantsMinusChange=function(){var e=a.props.form.getFieldValue("infants");if(e>=1){var t=e-1;a.props.form.setFieldsValue({infants:t})}},a.infantsPlusChange=function(){var e=a.props.form.getFieldValue("infants")+1;a.props.form.setFieldsValue({infants:e})},a.getFormValue=function(){return a.props.form.getFieldsValue()},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),a.props.onSearchSubmit(t))})},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.onSearchSubmit;var e=this.props.form.getFieldDecorator;return l.a.createElement(W.a,{onSubmit:this.handleSubmit},l.a.createElement(E.a,null,l.a.createElement(y.a,{xs:10,sm:12,md:7,lg:6,xl:4},l.a.createElement(E.a,{justify:"start"},l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"Route"),e("route",{initialValue:"One Way"})(l.a.createElement(X.a,{style:{width:110}},l.a.createElement(le,{value:"One Way"},"One Way"),l.a.createElement(le,{value:"Return"},"Return")))))),l.a.createElement(y.a,{xs:10,sm:12,md:16,lg:10,xl:4},l.a.createElement(E.a,{justify:"start"},l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"Class"),e("class",{initialValue:"Economy"})(l.a.createElement(X.a,{style:{width:150}},l.a.createElement(le,{value:"Economy"},"Economy"),l.a.createElement(le,{value:"Premium Economy"},"Premium Economy"),l.a.createElement(le,{value:"Business Class"},"Business Class"),l.a.createElement(le,{value:"First Class"},"First Class")))))),l.a.createElement(y.a,{xs:24,sm:12,md:8,lg:6,xl:4},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"Adults(12+)"),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"minus",onClick:this.adultsMinusChange}),e("adults",{initialValue:1})(l.a.createElement(G.a,{style:{width:"40px"}})),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"plus",onClick:this.adultsPlusChange})))),l.a.createElement(y.a,{xs:24,sm:12,md:9,lg:8,xl:5},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"Children(2-12)"),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"minus",onClick:this.childrenMinusChange}),e("children",{initialValue:0})(l.a.createElement(G.a,{style:{width:"40px"}})),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"plus",onClick:this.childrenPlusChange})))),l.a.createElement(y.a,{xs:24,sm:12,md:7,lg:7,xl:4},l.a.createElement(E.a,{type:"flex",justify:"start"},l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"Infants"),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"minus",onClick:this.infantsMinusChange}),e("infants",{initialValue:0})(l.a.createElement(G.a,{style:{width:"40px"}})),l.a.createElement(h.a,{size:"small",type:"primary",shape:"circle",icon:"plus",onClick:this.infantsPlusChange}))))),l.a.createElement(E.a,{justify:"start"},l.a.createElement(y.a,{xs:21,sm:12,md:17,lg:11,xl:10},l.a.createElement(E.a,null,l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"From"),e("From",{rules:[{message:"Please input your starting points"}]})(l.a.createElement(G.a,{size:"large",allowClear:!0,placeholder:"Input IATA code,eg. ARN for Arlanda airport",style:{width:"80%"}}))))),l.a.createElement(y.a,{xs:2,sm:12,md:2,lg:2,xl:1},l.a.createElement(E.a,null,l.a.createElement(W.a.Item,null,l.a.createElement(h.a,{shape:"round",icon:"swap",size:"large"})))),l.a.createElement(y.a,{xs:24,sm:12,md:17,lg:11,xl:10,style:{marginLeft:"-2%"}},l.a.createElement(E.a,null,l.a.createElement(W.a.Item,null,l.a.createElement("b",{className:"typeStyle"},"TO"),e("To",{rules:[{message:"Please input your destination"}]})(l.a.createElement(G.a,{size:"large",allowClear:!0,placeholder:"Input IATA code,eg. LAX for LosAngeles airport",style:{width:"85%"}}))))),l.a.createElement(y.a,{xs:24,sm:12,md:2,lg:23,xl:3},l.a.createElement(E.a,null,l.a.createElement(W.a.Item,null,l.a.createElement(h.a,{type:"primary",htmlType:"submit",size:"large",icon:"right-circle"},"Submit"))))))}}]),t}(n.Component),ie=W.a.create({name:"ClassPeople"})(re),ce=Object(I.b)(function(){return{}},function(e){return{onSearchSubmit:function(t){return e(ne(t))}}})(ie),se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("formData"+e)}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.isFetching,n=e.lastUpdated;return console.log(t.length),l.a.createElement("div",null,l.a.createElement("div",{className:"searchView"},l.a.createElement(ce,null)),a&&l.a.createElement("h2",null,"Loading..."),!(t instanceof Array)&&l.a.createElement("div",{style:{marginTop:"5%"}},l.a.createElement(H,{posts:t,lastTetchTime:n})))}}]),t}(n.Component);var oe=Object(I.b)(function(e){var t=e||{isFetching:!0,items:[]},a=t.isFetching,n=t.lastUpdated;return{posts:t.items,isFetching:a,lastUpdated:n}})(se),ue=(a(438),a(227)),me=(a(440),F.a.Meta),pe=z.a.Panel,de=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hotel_name:"XXX Hotel",hotel_description:"This is hotel description >>>"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F.a,{style:{width:"100%"},cover:l.a.createElement("img",{alt:"example",src:"https://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg"})},l.a.createElement(me,{title:this.state.hotel_name}),l.a.createElement(ue.a,{disabled:!0,defaultValue:3}),l.a.createElement(me,{description:this.state.hotel_description}),l.a.createElement(z.a,{bordered:!1,expandIcon:function(e){var t=e.isActive;return l.a.createElement(x.a,{type:"caret-right",rotate:t?90:0})}},l.a.createElement(pe,{header:"Available Time",key:"1",className:"customPanelStyle"},l.a.createElement("p",null)),l.a.createElement(pe,{header:"Comments",key:"2",className:"customPanelStyle"},l.a.createElement("p",null)),l.a.createElement(pe,{header:"Address",key:"3",className:"customPanelStyle"},l.a.createElement("p",null)))))}}]),t}(n.Component),he=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={UI:["PlanItemView","PlanItemView","PlanItemView"]},a.addPlan=function(){var e=a.props.currentindex,t=a.props.UI;t[e]="Search",a.props.addPlan(t),a.setState({UI:a.props.UI}),console.log(t),console.log(a.props.UI)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){switch(console.log(),this.state.UI[this.props.currentindex]){case"DetailItem":return l.a.createElement("div",null,l.a.createElement(de,null));case"Search":return l.a.createElement("div",null,l.a.createElement(oe,null));default:return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,this.state.UI),l.a.createElement(h.a,{type:"primary",shape:"round",icon:"edit",size:"large",onClick:this.addPlan},"ADD YOUR PLAN")))}}}]),t}(n.Component);var Ee=Object(I.b)(function(e){return{timeline:e.timeline,currentindex:e.currentindex,UI:e.UI}},function(e){return{addPlan:function(t){e({type:"ADD_PLAN",payload:t}),console.log("input")}}})(he),fe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).giveContent=function(){console.log(a.props.currentindex);for(var e=a.props.timeline.length,t=[],n=0;n<=e-1;n++)t.push({date:a.props.timeline[n],content:l.a.createElement(Ee,{UI:a.props.UI[n]})});return t},a.state={value:0,previous:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.data=this.giveContent().map(function(e,t){return{date:e.date,component:l.a.createElement("div",{key:t},e.content)}})}},{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(this.data=this.giveContent().map(function(e,t){return{date:e.date,component:l.a.createElement("div",{key:t},e.content)}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,this.props.timeline+"yes"),l.a.createElement("div",null,this.props.UI),l.a.createElement("div",null,this.props.currentindex),l.a.createElement(S,null),l.a.createElement(E.a,null,l.a.createElement(y.a,{span:2}),l.a.createElement(y.a,{span:21},l.a.createElement(U,{content:this.data})),l.a.createElement(y.a,{span:1})),l.a.createElement(j.a,{style:{position:"absolute",top:"50%"}},l.a.createElement(w,null)))}}]),t}(n.Component);var ye=Object(I.b)(function(e){return{timeline:e.timeline,UI:e.UI,currentindex:e.currentindex}})(fe),ge=(a(441),{departuredate:"yessss",returndate:"nooooo",departureplace:"beijing",currentindex:0,isFetching:!1,items:[]});function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer running"),t.type){case"ON_CHANGE_DEPARTURE":return Object.assign({},e,{departuredate:t.payload});case"ON_CHANGE_RETURN":return Object.assign({},e,{returndate:t.payload});case"GENERATE_TIME_LINE":return Object.assign({},e,{timeline:t.timeline,UI:t.UI});case"TIMELINE_CLICK":return Object.assign({},e,{currentindex:t.payload});case"ADD_PLAN":return Object.assign({},e,{UI:t.payload});case"REQUEST_POSTS":return Object.assign({},e,{isFetching:!0});case"RECEIVE_POSTS":return Object.assign({},e,{isFetching:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}var be=a(56),Oe=a(224),je=a(225),Ce=Object(je.createLogger)();var xe,Se=Object(be.c)(ve,xe,Object(be.a)(Oe.a,Ce)),Ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(I.a,{store:Se},l.a.createElement("div",{className:"App"},l.a.createElement("header",null),l.a.createElement(d.a,{exact:!0,path:"/",component:P}),l.a.createElement(d.a,{exact:!0,path:"/PlanView",component:ye})))}}]),t}(n.Component);i.a.render(l.a.createElement(c.a,null,l.a.createElement(Ie,null)),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.42e5b100.chunk.js.map