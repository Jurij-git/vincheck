(this.webpackJsonpvincheck=this.webpackJsonpvincheck||[]).push([[0],{101:function(e,a,t){e.exports=t.p+"static/media/loader.90e83534.svg"},104:function(e,a,t){e.exports=t(263)},109:function(e,a,t){},110:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},111:function(e,a,t){},263:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(41),c=t.n(l),i=(t(109),t(110),t(111),t(10)),o=t(63),m=t(31),d=t.n(m),s=function(e){if(!e)return"Field is required"},u=function(e){if(e&&e.length>17)return"Length should be 17 symbols"},_=function(e){if(e&&e.length<17)return"Length should be 17 symbols"},v=t(265),E=function(e){var a=e.input,t=e.meta,n=Object(o.a)(e,["input","meta"]),l=t.touched&&t.error;return r.a.createElement("div",{className:d.a.formControl+" "+(l?d.a.error:"")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},a,n))),l&&r.a.createElement("span",null,t.error))},p=t(264),D=t(5),g=t.n(D),f=Object(p.a)({form:"edit-vin"})((function(e){var a=e.handleSubmit;e.vinNumber,e.error;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.registration_form},r.a.createElement("div",{className:g.a.title},"Please Enter Vin Number:"),r.a.createElement("div",{className:g.a.form_wrap},r.a.createElement("div",{className:g.a.input_wrap},function(e,a,t,n){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(v.a,Object.assign({placeholder:e,name:a,validate:t,component:n},l))," ",c)}("Vin Number","vinNumber",[s,u,_],E)),r.a.createElement("div",{className:g.a.input_wrap},r.a.createElement("button",{className:g.a.submit_btn},"Check"))))))})),b=t(62),h=t.n(b),y=t(99),A=t(8),N=t(100).create({}),w=function(e){return N.get("https://ownershipcost.vinaudit.com/getownershipcost.php?key=VA_DEMO_KEY&vin="+e+"&mileage_start=-1&mileage_year=-1&country=")},$=function(e){return N.get("https://marketvalue.vinaudit.com/getmarketvalue.php?key=1HB7ICF9L0GVH5Q&vin="+e+"&period=182&mileage=null&country=USA")},k=function(e){return N.get("http://vinchecknode-env.eba-7fef4ktn.us-east-2.elasticbeanstalk.com/about?vin="+e)},V=function(e){return N.get(e)},S={vinNumber:null,isFetching:!1,vinData1:null,vinData2:null,vinData3:null,dataArray:[],imgLinks:[]},T=function(e){return{type:"SET-VIN-NUMBER",vinNumber:e}},F=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e){return{type:"SET-DATA-ARRAY",dataArray:e}},I=function(e){return{type:"SET-IMG-LINKS",imgLinks:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-VIN-NUMBER":return Object(A.a)(Object(A.a)({},e),{},{vinNumber:a.vinNumber});case"TOGGLE_IS_FETCHING":return Object(A.a)(Object(A.a)({},e),{},{isFetching:a.isFetching});case"SET-VIN-DATA1":return Object(A.a)(Object(A.a)({},e),{},{vinData1:a.vinData1});case"SET-VIN-DATA2":return Object(A.a)(Object(A.a)({},e),{},{vinData2:a.vinData2});case"SET-VIN-DATA3":return Object(A.a)(Object(A.a)({},e),{},{vinData3:a.vinData3});case"SET-DATA-ARRAY":return Object(A.a)(Object(A.a)({},e),{},{dataArray:a.dataArray});case"SET-IMG-LINKS":return Object(A.a)(Object(A.a)({},e),{},{imgLinks:a.imgLinks});default:return e}},L=t(101),C=t.n(L),P=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:C.a}))},R=t(102),Y=t.n(R),x=(t(262),function(e){return 0!==e.dataArray.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{id:g.a.va_oc_table},r.a.createElement("table",{id:g.a.va_oc_data_table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Details"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"VIN:"),r.a.createElement("td",{id:""},e.dataArray[0].VIN)),r.a.createElement("tr",null,r.a.createElement("td",null,"Doc Type:"),r.a.createElement("td",{id:""},e.dataArray[0]["Sale Title State"]+" "+e.dataArray[0]["Sale Title Type"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Odometer:"),r.a.createElement("td",{id:""},e.dataArray[0].Odometer)),r.a.createElement("tr",null,r.a.createElement("td",null,"Highlights:"),r.a.createElement("td",{id:""},e.dataArray[0]["Runs/Drives"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Primary Damage:"),r.a.createElement("td",{id:""},e.dataArray[0]["Damage Description"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Secondary Damage:"),r.a.createElement("td",{id:""},e.dataArray[0]["Secondary Damage"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Est. Retail Value:"),r.a.createElement("td",{id:""},e.dataArray[0].Est[" Retail Value"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Body Style:"),r.a.createElement("td",{id:""},e.dataArray[0]["Body Style"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Vehicle Type:"),r.a.createElement("td",{id:""},e.dataArray[0]["Vehicle Type"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Color:"),r.a.createElement("td",{id:""},e.dataArray[0].Color)),r.a.createElement("tr",null,r.a.createElement("td",null,"Engine Type:"),r.a.createElement("td",{id:""},e.dataArray[0].Engine)),r.a.createElement("tr",null,r.a.createElement("td",null,"Cylinders:"),r.a.createElement("td",{id:""},e.dataArray[0].Cylinders)),r.a.createElement("tr",null,r.a.createElement("td",null,"Transmission:"),r.a.createElement("td",{id:""},e.dataArray[0].Transmission)),r.a.createElement("tr",null,r.a.createElement("td",null,"Drive:"),r.a.createElement("td",{id:""},e.dataArray[0].Drive)),r.a.createElement("tr",null,r.a.createElement("td",null,"Fuel:"),r.a.createElement("td",{id:""},e.dataArray[0]["Fuel Type"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Keys:"),r.a.createElement("td",{id:""},e.dataArray[0]["Has Keys-Yes or No"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Location:"),r.a.createElement("td",{id:""},e.dataArray[0]["Yard name"])),r.a.createElement("tr",null,r.a.createElement("td",null,"Sale Date:"),r.a.createElement("td",{id:""},e.dataArray[0]["Sale Date M/D/CY"])),r.a.createElement("tr",{className:"va_oc_data_table_lastrow"},r.a.createElement("td",null,"Notes:"),r.a.createElement("td",{id:""},e.dataArray[0]["Special Note"])))))),r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.form_wrap},r.a.createElement("img",{src:"https://"+e.dataArray[0]["Image Thumbnail"]})))):null}),M=function(e){var a;null!==e.imgLinks&&(a=e.imgLinks.map((function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e}))})),console.log("imagesElements",a));return 0!==e.imgLinks.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(Y.a,{class:g.a.width80},a))):null},B=function(e){function a(e,a){return e+Math.round(a)}function t(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var n=function(){return r.a.createElement("div",null,"NO Cost Data for this VIN")};return null!==e.vinData2&&null!==e.vinData3&&0==e.vinData2.success&&0==e.vinData3.success?r.a.createElement(n,null):null!==e.vinData2&&null!==e.vinData3&&!0===e.vinData2.success&&!0===e.vinData3.success?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.form_wrap},r.a.createElement("div",null,"Vin: ",e.vinData2.vin),r.a.createElement("div",null,"Vehicle: ",e.vinData2.vehicle),r.a.createElement("div",null,"Ownership Cost:"))),r.a.createElement("div",null,r.a.createElement("div",{id:g.a.va_oc_table},r.a.createElement("table",{id:g.a.va_oc_data_table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Year 1"),r.a.createElement("td",null,"Year 2"),r.a.createElement("td",null,"Year 3"),r.a.createElement("td",null,"Year 4"),r.a.createElement("td",null,"Year 5"),r.a.createElement("td",null,"Total"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Depreciation"),r.a.createElement("td",{id:"va_oc_depreciation1"},"$",t(e.vinData2.depreciation_cost[0])),r.a.createElement("td",{id:"va_oc_depreciation2"},"$",t(e.vinData2.depreciation_cost[1])),r.a.createElement("td",{id:"va_oc_depreciation3"},"$",t(e.vinData2.depreciation_cost[2])),r.a.createElement("td",{id:"va_oc_depreciation4"},"$",t(e.vinData2.depreciation_cost[3])),r.a.createElement("td",{id:"va_oc_depreciation5"},"$",t(e.vinData2.depreciation_cost[4])),r.a.createElement("td",{id:"va_oc_depreciation_total"},"$",t(e.vinData2.depreciation_cost.reduce(a,0)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Insurance"),r.a.createElement("td",{id:"va_oc_insurance1"},"$",t(e.vinData2.insurance_cost[0])),r.a.createElement("td",{id:"va_oc_insurance2"},"$",t(e.vinData2.insurance_cost[1])),r.a.createElement("td",{id:"va_oc_insurance3"},"$",t(e.vinData2.insurance_cost[2])),r.a.createElement("td",{id:"va_oc_insurance4"},"$",t(e.vinData2.insurance_cost[3])),r.a.createElement("td",{id:"va_oc_insurance5"},"$",t(e.vinData2.insurance_cost[4])),r.a.createElement("td",{id:"va_oc_insurance_total"},"$",t(e.vinData2.insurance_cost.reduce(a,0)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Fuel"),r.a.createElement("td",{id:"va_oc_fuel1"},"$",t(e.vinData2.fuel_cost[0])),r.a.createElement("td",{id:"va_oc_fuel2"},"$",t(e.vinData2.fuel_cost[1])),r.a.createElement("td",{id:"va_oc_fuel3"},"$",t(e.vinData2.fuel_cost[2])),r.a.createElement("td",{id:"va_oc_fuel4"},"$",t(e.vinData2.fuel_cost[3])),r.a.createElement("td",{id:"va_oc_fuel5"},"$",t(e.vinData2.fuel_cost[4])),r.a.createElement("td",{id:"va_oc_fuel_total"},"$",t(e.vinData2.fuel_cost.reduce(a,0)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Maintenance"),r.a.createElement("td",{id:"va_oc_maintenance1"},"$",t(e.vinData2.maintenance_cost[0])),r.a.createElement("td",{id:"va_oc_maintenance2"},"$",t(e.vinData2.maintenance_cost[1])),r.a.createElement("td",{id:"va_oc_maintenance3"},"$",t(e.vinData2.maintenance_cost[2])),r.a.createElement("td",{id:"va_oc_maintenance4"},"$",t(e.vinData2.maintenance_cost[3])),r.a.createElement("td",{id:"va_oc_maintenance5"},"$",t(e.vinData2.maintenance_cost[4])),r.a.createElement("td",{id:"va_oc_maintenance_total"},"$",t(e.vinData2.maintenance_cost.reduce(a,0)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Repairs"),r.a.createElement("td",{id:"va_oc_repairs1"},"$",t(e.vinData2.repairs_cost[0])),r.a.createElement("td",{id:"va_oc_repairs2"},"$",t(e.vinData2.repairs_cost[1])),r.a.createElement("td",{id:"va_oc_repairs3"},"$",t(e.vinData2.repairs_cost[2])),r.a.createElement("td",{id:"va_oc_repairs4"},"$",t(e.vinData2.repairs_cost[3])),r.a.createElement("td",{id:"va_oc_repairs5"},"$",t(e.vinData2.repairs_cost[4])),r.a.createElement("td",{id:"va_oc_repairs_total"},"$",t(e.vinData2.repairs_cost.reduce(a,0)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Taxes & Fees"),r.a.createElement("td",{id:"va_oc_fees1"},"$",t(e.vinData2.fees_cost[0])),r.a.createElement("td",{id:"va_oc_fees2"},"$",t(e.vinData2.fees_cost[0])),r.a.createElement("td",{id:"va_oc_fees3"},"$",t(e.vinData2.fees_cost[0])),r.a.createElement("td",{id:"va_oc_fees4"},"$",t(e.vinData2.fees_cost[0])),r.a.createElement("td",{id:"va_oc_fees5"},"$",t(e.vinData2.fees_cost[0])),r.a.createElement("td",{id:"va_oc_fees_total"},"$",t(e.vinData2.fees_cost.reduce(a,0)))),r.a.createElement("tr",{className:"va_oc_data_table_lastrow"},r.a.createElement("td",null,"Ownership Costs"),r.a.createElement("td",{id:"va_oc_ownershipcost1"},"$",t(e.vinData2.total_cost[0])),r.a.createElement("td",{id:"va_oc_ownershipcost2"},"$",t(e.vinData2.total_cost[1])),r.a.createElement("td",{id:"va_oc_ownershipcost3"},"$",t(e.vinData2.total_cost[2])),r.a.createElement("td",{id:"va_oc_ownershipcost4"},"$",t(e.vinData2.total_cost[3])),r.a.createElement("td",{id:"va_oc_ownershipcost5"},"$",t(e.vinData2.total_cost[4])),r.a.createElement("td",{id:"va_oc_ownershipcost_total"},"$",t(e.vinData2.total_cost_sum)))))),r.a.createElement("div",{id:g.a.va_oc_table},r.a.createElement("table",{id:g.a.va_oc_data_table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Minimim"),r.a.createElement("td",null,"Average"),r.a.createElement("td",null,"Maximum"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Market Value"),r.a.createElement("td",{id:"va_oc_depreciation1"},"$",t(e.vinData3.prices.below)),r.a.createElement("td",{id:"va_oc_depreciation2"},"$",t(e.vinData3.prices.average)),r.a.createElement("td",{id:"va_oc_depreciation3"},"$",t(e.vinData3.prices.above)))))))):null},G=function(e){return e.isFetching?r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.form_wrap},r.a.createElement("div",null,r.a.createElement(P,null)))):r.a.createElement("div",null,r.a.createElement(x,{dataArray:e.dataArray}),r.a.createElement(M,{imgLinks:e.imgLinks}),r.a.createElement(B,{vinData2:e.vinData2,vinData3:e.vinData3}))},K=function(e){return r.a.createElement(f,{onSubmit:function(a){e.checkVin(a)}})},H=Object(i.b)((function(e){return{vinNumber:e.vinPage.vinNumber,vinData1:e.vinPage.vinData1,vinData2:e.vinPage.vinData2,vinData3:e.vinPage.vinData3}}),{checkVin:function(e){return function(){var a=Object(y.a)(h.a.mark((function a(t,n){var r,l,c,i,o,m,d;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return 4,4,t(T(e)),t(F(!0)),a.next=6,w(e.vinNumber);case 6:return r=a.sent,a.next=9,$(e.vinNumber);case 9:return l=a.sent,a.next=12,k(e.vinNumber);case 12:if(0===(c=a.sent).data.length){a.next=17;break}return a.next=16,V(c.data[0]["Image URL"]);case 16:i=a.sent;case 17:if(console.log(c),console.log(i),o=[],void 0!==i&&void 0!==i.data.lotImages)for(m=0;m<i.data.lotImages.length;m++)for(d=0;d<i.data.lotImages[m].link.length;d++)void 0!==i.data.lotImages[m].link[d]&&!0===i.data.lotImages[m].link[d].isHdImage&&o.push(i.data.lotImages[m].link[d].url);console.log(o),t({type:"SET-VIN-DATA2",vinData2:r.data}),t({type:"SET-VIN-DATA3",vinData3:l.data}),void 0!==c.data&&0!==c.data.length?t(O(c.data)):t(O([])),void 0!==o&&0!==o.length?t(I(o)):t(I([])),t(F(!1));case 27:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})(K),U=Object(i.b)((function(e){return{vinNumber:e.vinPage.vinNumber,isFetching:e.vinPage.isFetching,vinData1:e.vinPage.vinData1,vinData2:e.vinPage.vinData2,vinData3:e.vinPage.vinData3,dataArray:e.vinPage.dataArray,imgLinks:e.vinPage.imgLinks}}),{})(G);var q=function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(6),W=t(103),J=t(266),X=Object(Q.c)({vinPage:j,form:J.a}),z=Object(Q.d)(X,Object(Q.a)(W.a));window.store=z;var Z=z;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:Z},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,a,t){e.exports={formControl:"FormsControls_formControl__2qKdm",error:"FormsControls_error__1yn2u",formSummaryError:"FormsControls_formSummaryError__2wRhK"}},5:function(e,a,t){e.exports={wrapper:"VinForm_wrapper__1SYCR",registration_form:"VinForm_registration_form__2oc7b",title:"VinForm_title__1YRSt",form_wrap:"VinForm_form_wrap__aqv-K",input_wrap:"VinForm_input_wrap__3_zks",submit_btn:"VinForm_submit_btn__3BiUQ",va_oc_graph_link:"VinForm_va_oc_graph_link__2qyAL",va_oc_table_link:"VinForm_va_oc_table_link__3t3VX",active:"VinForm_active__fAdIY",va_oc_data_table:"VinForm_va_oc_data_table__3T-SX",va_oc_data_table_lastrow:"VinForm_va_oc_data_table_lastrow__1w5Fo","alice-carousel":"VinForm_alice-carousel__2WQZV",width80:"VinForm_width80__abv3y"}}},[[104,1,2]]]);
//# sourceMappingURL=main.de173225.chunk.js.map