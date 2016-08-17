function g(classs){
	return document.getElementsByClassName(classs);
}
var TableTool=(function(){
	function init(options){
		var instance=new table(options);
		return instance;
	}
	function table(options){
		this.aaa='aaa';
		this.setOptions(options);
		this.render();
		this.event();
		this.frozen();
	}
	table.prototype={
		default:{
			append:document.getElementsByTagName('body')[0],
			data:{
				head:[],
				sortSwitch:[],
				tbody:{}
			},
			sortSwitch:[],
			isSort:true,
			isHeadFixed:true,
			headColor:'#000'
		},
		setOptions:function(options){
			if(typeof options==='object'){
				this.options=options;
			}
		},
		render:function(){
			var i=0,
				j=0,
				sortSwitch=this.options.data.sortSwitch,
				tableHeadData=this.options.data.thead;
			if(this.tableBodyData===undefined){
				this.tableBodyData=[];
				for(a in this.options.data.tbody){
					this.tableBodyData.push(this.options.data.tbody[a]);
				}
			}
			//表头
			var html='',
				thead='',
				tbody='';
			thead='<table class="table"><thead class="thead"><tr>';
			for(i;i<tableHeadData.length;i++){
				thead+='<th  style="background-color:'+this.options.headColor+';">'+tableHeadData[i]+'</th>';
			}
			thead+='</tr></thead>';
			tbody='<tbody>';
			for(i=0;i<this.tableBodyData.length;i++){
				tbody+='<tr>';
				for(j=0;j<this.tableBodyData[i].length;j++){
					tbody+='<td>'+this.tableBodyData[i][j]+'</td>';
				}
				tbody+='</tr>';
			}
			tbody+='</tbody></table>';
			html=thead+tbody;
			this.options.append.innerHTML=html;
			if(!this.options.isSort){return};
			var th=this.options.append.getElementsByTagName('th');
			for(i=0;i<th.length;i++){
				if(sortSwitch[i]===1){
				th[i].innerHTML+='<span sort="'+i+'"></span>';
				}
			}
		},
		sort:function(e){
			var i=e.target.getAttribute('sort');
			var that=this;
			if(this[i]===undefined){
			this[i]=true
			}
			this.tableBodyData.sort(function(a,b){
				if(that[i]) return a[i]-b[i];
				else return b[i]-a[i];
			});
			this[i]=!this[i];
			this.render();
			this.frozen();
		}, 
		event:function(){
			var that=this;
			this.options.append.addEventListener('click',function(e){
				if(event.target.tagName.toLocaleLowerCase()==='span'){
				that.sort.call(that,e);
				}
			},false);
			window.onscroll=function(){
				that.frozen();
			};
		},
		frozen:function(){
			if(!this.options.isFrozen){
				return;
			}
			var target=this.options.append;
			var top=target.offsetTop-document.body.scrollTop;
			var bodyHeight=parseInt(getComputedStyle(target, false)['height']);
			if(top<0){
				target.getElementsByClassName('thead')[0].style.position='fixed';
				target.getElementsByClassName('thead')[0].style.top=0;
				if(bodyHeight+top<0){
					target.getElementsByClassName('thead')[0].style.position='absolute';
				}
			}else{
				target.getElementsByClassName('thead')[0].style.position='static';
			}
		}
	}
	return {
		init:init,
	}
})();

var table1 = TableTool.init({
	append:g('table1')[0],
	data:{
		thead:['姓名','年龄','身高'],
		sortSwitch:[1,1,1],
		tbody:{
			1:['习习',52,180],
			2:['蛤蛤',10000,176],
			3:['丽媛',48,166],
			4:['小平',78,120],
			5:['高富帅',22,188],
			6:['续命',87,182],
			7:['华莱士',43652,153]
		}
	},
	isSort:true,
	isFrozen:true,
	headColor:'#aeaeae'//defaultColor
});
var table2 = TableTool.init({
	append:g('table1')[1],
	data:{
		thead:['姓名','年龄','身高'],
		sortSwitch:[1,1,1],
		tbody:{
			1:['习习',52,180],
			2:['蛤蛤',10000,176],
			3:['丽媛',48,166],
			4:['小平',78,120],
			5:['高富帅',22,188],
			6:['续命',87,182],
			7:['华莱士',43652,153]
		}
	},
	isSort:true,
	isFrozen:true,
	headColor:'#aeaeae'//defaultColor
});