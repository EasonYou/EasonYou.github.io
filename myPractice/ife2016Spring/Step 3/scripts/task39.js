
var Calendar=(function(){
	function init(options){
		var instance=new calendar(options);
		return instance;
	}
	function calendar(options){
		this.options=options;
		var oDate=new Date();
		this.date=oDate;
		this.mon=0;
		this.GetDate();
		this.bind();
	}
	calendar.prototype={
		render:function(date,focus){
			var i=0,
				j=0;
			var that=this;
			var day=['日','一','二','三','四','五','六'];
			if(this.today===undefined){
			this.today=date.getFullYear()+'年'+(date.getMonth()+1)+'月'
					 +date.getDate()+'日'+'星期'+day[date.getDay()];
			}
			var html='';
			var append=this.options.append;
			var calendar='<div class="calendar">'
						+'<div class="control"><div class="pre">'
						+'</div><div class="today">'+this.today
						+'</div><div class="choose"> '
						+'</div><div class="next"></div>'
						+'</div><div class="calendarHead">'
			var calendarHead='';
			for(i=0;i<7;i++){
				calendarHead+='<div class="head">'+day[i]+'</div>';
			}
			calendarHead+='</div>';
			var containt='';
			var num=this.GetDatePos(date);
			var count=0;
			var classs='';
			for(i=0;i<6;i++){
				containt+='<div class="containt">';
					for(j=0;j<7;j++){
						if(this.GetDateStr(date,date.getMonth(),count-num)['m']<date.getMonth()){
							classs='preMon';
						}else if(this.GetDateStr(date,date.getMonth(),count-num)['m']>date.getMonth()){
							classs='nextMon';
						}else{
							classs='';
						}
						containt+='<div class="date '+classs+'">'+
								+this.GetDateStr(date,date.getMonth(),count-num)['d']
								+'</div>';
						count++;
					}
				containt+='</div>';
			}
			html=calendar+calendarHead+containt;
			append.innerHTML=html;
			if(this.isThisMon===undefined){
				this.isThisMon=date.getFullYear()+'-'+date.getMonth();
			}
			if(this.isThisMon===date.getFullYear()+'-'+date.getMonth()){
			append.getElementsByClassName('date')[num].className+='focus';
			}
			append.getElementsByClassName('pre')[0].addEventListener('click',function(e){
				that.GetDate(e);},false);
			append.getElementsByClassName('next')[0].addEventListener('click',function(e){
				that.GetDate(e);},false);
		},
		GetDateStr:function(dates,month,date){
			var oDate=new Date();
			oDate.setMonth(month);
			oDate.setDate(oDate.getDate()+date);//获取AddDayCount天后的日期
			var y = oDate.getFullYear(); 
			var m = oDate.getMonth()+1;//获取当前月份的日期 
			var d = oDate.getDate(); 
			return {
				d:d,
				m:m-1
			}; 
		},
		GetDate:function(e){
			if(e!==undefined){
				if(e.target.className==='pre'||e.target.className==='date preMon') this.mon--;
				if(e.target.className==='next'||e.target.className==='date nextMon') this.mon++;
				var focus=e.target.innerHTML;
			}
			var oDate=new Date();
			var mon=oDate.getMonth();
			oDate.setMonth(mon+this.mon);
			this.date.setMonth(mon+this.mon);
			this.render(oDate,focus);
			console.log(oDate);
			if(e!==undefined){
			return this.choose(e,oDate);
			}
		},
		GetDatePos:function(dates){
			var date=dates.getDate();
			dates.setDate(1);
			var day=dates.getDay();
			return date+day-1;
		},
		choose:function(e,date){
			console.log(date);
			var i;
			var all=this.options.append.getElementsByClassName('date');
			for(i=0;i<all.length;i++){
				if(all[i].style.backgroundColor!==null){
					all[i].style.backgroundColor=null;
					all[i].style.color=null;
				}
			}
			var node=this.options.append.getElementsByClassName('date');
			if(e.target.className.trim()!=='date'){
				if(e.target.className.trim()==='date focus'){
					e.target.style.backgroundColor='#fff';
					e.target.style.color='#7e7e7e';
				}
				for(i=0;i<node.length;i++){
					if(node[i].innerHTML===e.target.innerHTML){	
						if(node[i].className.trim()==='date'){
							node[i].style.backgroundColor='#fff';
							node[i].style.color='#7e7e7e';
						}
					}
				}
			}else{
				e.target.style.backgroundColor='#fff';
				e.target.style.color='#7e7e7e';
			}
			var d=parseInt(e.target.innerHTML);
			this.date=date;
			return {y:date.getFullYear(),m:date.getMonth()+1,d};
		},
		bind:function(){
			var that=this;
			var append=this.options.append;
			var chooseDay='';
			this.options.append.addEventListener('click',function(e){
				if(e.target.className.trim()==='date'||e.target.className.trim()==='date focus'){
				var chooseday=that.choose.call(that,e,that.date);
				chooseDay='选择日期：'+chooseday['y']+'年'+chooseday['m']+'月'+chooseday['d']+'日';
				that.options.append.getElementsByClassName('choose')[0].innerHTML=chooseDay;
				}
				if(e.target.className.trim()==='date preMon'||e.target.className.trim()==='date nextMon'){
				var chooseday=that.GetDate.call(that,e);
				chooseDay='选择日期：'+chooseday['y']+'年'+chooseday['m']+'月'+chooseday['d']+'日';
				that.options.append.getElementsByClassName('choose')[0].innerHTML=chooseDay;
				}
			},false);
		}
	}
	return {
		init:init,
	}
})();

var calendar1=Calendar.init({
	append:document.querySelector('.calendar2'),
});