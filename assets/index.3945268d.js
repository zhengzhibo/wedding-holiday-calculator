var e=Object.defineProperty,t=(t,a,s)=>("symbol"!=typeof a&&(a+=""),a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s);import{r as a,a as s,b as r,h as n,D as d,A as i,C as l,c as o,d as m,z as c}from"./vendor.0d248fdc.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const d=new URL(e,s);if(self[t].moduleMap[d])return a(self[t].moduleMap[d]);const i=new Blob([`import * as m from '${d}';`,`${t}.moduleMap['${d}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),r(l)},onload(){a(self[t].moduleMap[d]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");class h extends a.Component{constructor(e){super(e),t(this,"getHoliday",(e=>{s.get(`//timor.tech/api/holiday/year/${e}/`).then((({data:{holiday:t}})=>{t.year=e,this.setState({holiday:t})}),(e=>{r.error("请求节假日API出错")}))})),t(this,"current"),this.state={startDate:null,holiday:null}}componentDidMount(){this.getHoliday(n().year())}onChange(e){e&&this.state.holiday.year!=e.year()&&this.getHoliday(e.year()),this.setState({startDate:e})}getDayData(e){const t=this.state.holiday?this.state.holiday[e.format("MM-DD")]:null,a=this.state.startDate&&this.state.startDate.startOf("day").diff(e.startOf("day"),"days"),s="number"==typeof a&&a>-15&&a<=0;let r=6===e.day()||0===e.day();return t&&(r=t.holiday),{isNonWorkingDay:r,inHoliday:s,diffDays:Math.abs(a)+1,name:t?t.name:""}}dateFullCellRender(e){const t=this.getDayData(e);return a.createElement("div",{onClick:e=>e.stopPropagation(),className:"holiday-bar-container "+(t.isNonWorkingDay?"is-holiday":"")},a.createElement("div",{className:"holiday-bar-title"},a.createElement("span",{className:"date"},e.format("DD"))),t.inHoliday?a.createElement("div",{className:`holiday-bar day-${t.diffDays}`}):null,t?a.createElement("div",null,t.name):null)}headerRender({value:e}){return a.createElement("div",{className:"calendar-header"},e.format("YYYY年M月"))}message(){if(!this.state.startDate)return"请输入开始日期";let e=0,t=0,a=0;for(let r=0;r<15;r++){const t=n(this.state.startDate.toDate()).add(r,"days");this.getDayData(t).isNonWorkingDay||e++}for(;;){const e=n(this.state.startDate.toDate()).add(0-t-1,"days");if(!this.getDayData(e).isNonWorkingDay)break;t++}for(;;){const e=n(this.state.startDate.toDate()).add(a+15,"days");if(!this.getDayData(e).isNonWorkingDay)break;a++}let s=`包含工作日 ${e} 天，非工作日 ${15-e} 天，`;return t&&(s+=`前拼假 ${t} 天，`),a&&(s+=`后拼假 ${a} 天，`),s+=`共连休 ${15+t+a} 天。 婚假指数为 ${this.holidayIndex(e,t,a)}。`,s}holidayIndex(e,t,a){return Math.floor(100*(e/15+.02*(t+a)))}render(){return a.createElement("div",{className:"App"},a.createElement(d,{onChange:this.onChange.bind(this)}),a.createElement("div",{style:{marginTop:16}},a.createElement(i,{message:this.message.bind(this)()})),a.createElement("div",{style:{marginTop:16,padding:"0 5px",backgroundColor:"#fff"}},a.createElement(l,{value:this.state.startDate||n(),dateFullCellRender:this.dateFullCellRender.bind(this),headerRender:this.headerRender.bind(this)})))}}var y={months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,a){var s=100*e+t;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:function(e){return e.week()!==this.week()?"[下]dddLT":"[本]dddLT"},lastDay:"[昨天]LT",lastWeek:function(e){return this.week()!==e.week()?"[上]dddLT":"[本]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s后",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",w:"1 周",ww:"%d 周",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}};n.locale("zh-cn",y),o.render(a.createElement(a.StrictMode,null,a.createElement(m,{locale:c},a.createElement(h,null))),document.getElementById("root"));
