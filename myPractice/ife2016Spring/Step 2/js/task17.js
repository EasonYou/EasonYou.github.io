function addEvent(element, event, listener) {
  if (element.addEventListener) { //标准
    element.addEventListener(event, listener, false);
  } else if (element.attachEvent) { //低版本ie
    element.attachEvent("on" + event, listener);
  } else { //都不行的情况
    element["on" + event] = listener;
  }
}
/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

function randomColor() {
  var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
              '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];
  return  colors[Math.floor(Math.random() * 11)];
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: '北京',
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart(){
  var style='style="width:{{width}}px;height:{{height}}px;margin-left:5px;float:left;background-color:{{color}}"';
  var title='title="{{time}}&#13[{{attr}}]" '
  var html='';
  var color='';
  var width=chartData[pageState['nowGraTime']]['width'];
  var heightPersent=chartData[pageState['nowGraTime']]['heightPersent'];
  for(var time in chartData){
    if(pageState['nowGraTime']===time){
      for(var city in chartData[time]['city']){
        if(pageState['nowSelectCity']===city){
          for(var date in chartData[time]['city'][city]){
            color=randomColor();
            height=parseInt(chartData[time]['city'][city][date]*heightPersent);
            html+='<div '+title.replace(/{{attr}}/,chartData[time]['city'][city][date])
            .replace(/{{time}}/,date)+
            style.replace(/{{width}}/,width).replace(/{{height}}/,height).replace(/{{color}}/,color)+'></div>';
          }
        }
      }
    }
  }
  document.getElementById('aqi-chart-wrap').innerHTML=html;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(event) {
  // 确定是否选项发生了变化 
  if(event.target.value===pageState['nowGraTime']){
    return false;
  }
  // 设置对应数据
  pageState['nowGraTime']=event.target.value;
  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(event) {
  // 确定是否选项发生了变化 
  if(event.target.value===pageState['nowSelectCity']){
    return false;
  }
  // 设置对应数据
  pageState['nowSelectCity']=event.target.value;
  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var formGraTime=document.getElementById('form-gra-time');
  addEvent(formGraTime,'change',graTimeChange);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var citySelect=document.getElementById('city-select');
  var html='';
  for(city in aqiSourceData){
    html+='<option>'+city+'</option>';
  }
  citySelect.innerHTML=html;
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  addEvent(citySelect,'change',citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var data={},weekFlag=0,monthFlag=0,days={},weeks={},months={};
  data.day={};
  data.week={};
  data.month={};
  data.day.width=8;
  data.week.width=85;
  data.month.width=385;
  data.day.heightPersent=0.8;
  data.week.heightPersent=0.2;
  data.month.heightPersent=0.05;
  for(var city in aqiSourceData){
     monthNum=1;
     weekNum=1;
     weeks[city]={};
     months[city]={};
     days[city]=aqiSourceData[city];
     for(var date in aqiSourceData[city]){
      if(typeof weeks[city]['第'+weekNum+'星期']!=='number'){
        weeks[city]['第'+weekNum+'星期']=0;
      }
      if(typeof months[city]['第'+monthNum+'月']!=='number'){
        months[city]['第'+monthNum+'月']=0;
      }
      weeks[city]['第'+weekNum+'星期']+=aqiSourceData[city][date];
      weekFlag++;
      if(weekFlag%7===0){
        weekNum++;
      }
      months[city]['第'+monthNum+'月']+=aqiSourceData[city][date];
      if(date.slice(8,10)==='01'&&date!=='2016-01-01'){
        monthNum++;
      }
     }
  }
  data.month.city=months;
  data.week.city=weeks;
  data.day.city=days;
  chartData=data;
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
  renderChart();
}
window.onload=function(){
  init();
};