(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=a(10),u=a(2),i=a(33),s=a(5),m=a.n(s),g=a(11),f=a(9),d=a(32);a(40);function p(e){var t=e.timing,a=e.onSelect,n=e.isSelected;return r.a.createElement("div",{className:"w-32 p-2 m-2 ".concat(t.booked?"bg-gray-400 text-gray-600":n?"bg-indigo-600 text-white":"bg-blue-300"," text-center rounded-lg text-lg"),onClick:function(){!t.booked&&a(t.time)}},t.time)}var b=a(16),x=a.n(b),v={},E="10:00",w="21:00",h=function(){var e=Object(g.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat("/api/v1/bookings","?month=").concat(t,"&year=").concat(a));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(g.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat("/api/v1/bookings"),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(g.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.next=3,h(t.getMonth(),t.getFullYear());case 3:return a=e.sent,O(a.data),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){for(var t=[],a=E;a!=w;){var n=j(a,30);t.push({time:"".concat(a,"-").concat(n)}),a=n}return t.map((function(t){return{time:t.time,booked:e.includes(t.time)}}))},j=function(e,t){var a=e.split(":"),n=Object(f.a)(a,2),r=n[0],l=n[1];return r=Number(r),l=Number(l),l+=t,r+=Math.floor(l/60),l%=60,"".concat(r,":").concat(String(l).padStart(2,"0"))},O=function(e){e.forEach((function(e){var t=e.date,a=e.start,n=e.end,r=new Date(t),l=r.getFullYear(),c=r.getMonth(),o=r.getDate(),u="".concat(a,"-").concat(n);v[l]||(v[l]=[]),v[l][c]||(v[l][c]=[]),v[l][c][o]||(v[l][c][o]=[]),v[l][c][o].push(u)}))},B={getBookingsByMonth:h,getCurMonthBookings:k,getBookingsByDate:function(e){var t=e.getFullYear(),a=e.getMonth(),n=e.getDate();return v[t]&&v[t][a]&&v[t][a][n]?N(v[t][a][n]):N([])},makeBooking:y};function D(){var e=Object(n.useState)(new Date),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(f.a)(c,2),s=u[0],b=u[1],x=Object(n.useState)(""),v=Object(f.a)(x,2),E=v[0],w=v[1];Object(n.useEffect)((function(){(function(){var e=Object(g.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getCurMonthBookings();case 2:b(B.getBookingsByDate(new Date));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(e){w(e)};return r.a.createElement("div",{className:"flex flex-col items-center max-w-full  lg:flex-row lg:px-10 lg:m-10  xl:px-20 xl:m-20"},r.a.createElement("div",{className:"my-10 shadow-lg max-w-full"},r.a.createElement(d.a,{maxDate:new Date(2020,11,31),onChange:function(e){l(e),w(""),b(Object(i.a)(B.getBookingsByDate(e)))},value:a})),r.a.createElement("div",null,r.a.createElement("div",{className:"py-5 my-2 mx-10 shadow-tb  lg:mt-24"},r.a.createElement("div",{className:"flex flex-wrap h-64 justify-center py-8 max-w-full overflow-y-scroll"},s.map((function(e,t){return r.a.createElement(p,{timing:e,key:t,onSelect:h,isSelected:E===e.time})})))),r.a.createElement("div",{className:"w-full px-10 lg:flex lg:justify-end"},r.a.createElement(o.b,{to:{pathname:"/book",state:{selectedDate:a,slot:E}}},r.a.createElement("button",{className:"w-full my-5 p-2 bg-indigo-600 text-white text-lg rounded-md shadow-md lg:w-auto lg:p-3 lg:mr-4"},"Continue")))))}function S(e){var t=e.name,a=e.time,n=e.date;return r.a.createElement("div",{className:"h-screen px-12 w-full fixed left-0 top-0 flex flex-col justify-center items-center bg-black bg-opacity-50 "},r.a.createElement("div",{className:"animate-slideIn lg:w-1/3"},r.a.createElement("div",{className:"w-full p-4 bg-indigo-600 rounded-t-3xl"},r.a.createElement("p",{className:"text-xl text-white text-center"},"Booking Confirmed")),r.a.createElement("div",{className:"bg-white p-5 rounded-b-3xl  lg:flex flex-col lg:justify-center lg:items-center"},r.a.createElement("p",{className:"text-xl"},"Hi ",r.a.createElement("strong",null,t),". Your booking for ",r.a.createElement("strong",null,a)," ","on ",r.a.createElement("strong",null,n)," is confirmed!."),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"w-full mt-10 p-2 bg-red-600  text-white text-lg rounded-md  lg:w-32 lg:p-3"},"Home")))))}function C(){var e=Object(u.f)().state,t=e.selectedDate,a=e.slot,l=Object(n.useState)(""),c=Object(f.a)(l,2),i=c[0],s=c[1],d=Object(n.useState)(""),p=Object(f.a)(d,2),b=p[0],x=p[1],v=Object(n.useState)(!1),E=Object(f.a)(v,2),w=E[0],h=E[1],y=function(){var e=Object(g.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={name:i,email:b,date:t,start:a.split("-")[0],end:a.split("-")[1]},e.next=4,B.makeBooking(r);case 4:"OK"===e.sent.statusText&&h(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"lg:flex lg:flex-col lg:m-20 lg:items-center xl:m-40"},r.a.createElement("div",{className:"".concat(w?"visible":"hidden")},r.a.createElement(S,{name:i,time:a,date:t.toLocaleDateString()})),r.a.createElement("p",{className:"my-5 mx-10 text-xl"},"You are booking for ",r.a.createElement("strong",null,a)," on"," ",r.a.createElement("strong",null,t.toLocaleDateString())),r.a.createElement("div",{className:"mx-10 my-10"},r.a.createElement("form",{onSubmit:y},r.a.createElement("div",null,r.a.createElement("label",{className:"block text-lg text-gray-700",htmlFor:"fullname"},"Full Name:"),r.a.createElement("input",{className:"w-full border-b-2 border-gray-800 p-1  my-1 text-xl focus:border-indigo-600 focus:outline-none  lg:w-auto",type:"text",id:"fullname",onChange:function(e){return s(e.target.value)},value:i})),r.a.createElement("div",{className:"mt-20 mb-10"},r.a.createElement("label",{className:"block text-lg text-gray-700",htmlFor:"email"},"Email:"),r.a.createElement("input",{className:"w-full border-b-2 border-gray-800 p-1 my-1 text-xl focus:border-indigo-600 focus:outline-none  lg:w-auto",type:"email",id:"email",onChange:function(e){return x(e.target.value)},value:b})),r.a.createElement("div",{className:"flex flex-col lg:flex-row"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"w-full my-5 p-2 bg-red-600  text-white text-lg rounded-md  lg:w-32 lg:p-3 lg:mr-4"},"Back")),r.a.createElement("input",{className:"w-full my-5 p-2 bg-indigo-600 text-white text-lg rounded-md  lg:w-32 lg:p-3 lg:mx-20",type:"submit",value:"Book"})))))}var M=function(){return r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/book"},r.a.createElement(C,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(D,null))))};a(63);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9bc1b13f.chunk.js.map