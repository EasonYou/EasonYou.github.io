function init(){
	box.style.transform='rotate(270deg)';
	var movingBox=new MovingBox(box);
	document.getElementById('submit').addEventListener('click',function(){
		movingBox.getCommand.call(movingBox,box)},false);
	document.getElementById('clear').addEventListener('click',function(){
		movingBox.clear.call(movingBox,this)},false);
	document.getElementById('command').addEventListener('keyup',function(e){
		if(e.keyCode===13){
			movingBox.rowsOper(this);
		}},false);
	document.getElementById('command').addEventListener('keyup',function(e){
		if(e.keyCode===8){
			movingBox.rowsOper(this);
		}},false);
	document.getElementById('command').onscroll=function(e){
		movingBox.scroll(e.target);
	}
	document.getElementById('command').addEventListener('keydown',function(e){
		movingBox.scroll(this);
	},false);
	movingBox.rowsOper(document.getElementById('command'));
}

function MovingBox(box){
	this.cmd=['TUN LEF','TUN RIG','TUN BAC','TRA LEF','TRA RIG','TRA TOP','TRA BOT','MOV LEF','MOV RIG','MOV TOP','MOV BOT'];
	this.regExp=/[0-9]/;
	this.reg=/\n/;
	this.deg=parseInt(box.style.transform.replace(/[^0-9]/ig,''));
	this.left=parseInt(getStyle(box,'left').replace(/[^0-9]/ig,''));
	this.top=parseInt(getStyle(box,'top').replace(/[^0-9]/ig,''));
}
MovingBox.prototype.clear=function(target){
	document.getElementById('command').value='';
	this.rowsOper(document.getElementById('command'));
}

MovingBox.prototype.getCommand=function(target){
	this.errorNum=null;
	this.item=0;
	this.command=document.getElementById('command').value.split(this.reg);
	this.commandDivde=[];
	console.log(this.command);
	for(var i=0;i<this.command.length;i++){
		if(this.command)
		var buffer=this.command[i].split(' ');
		if(buffer[0]==='GO'){
			if(this.regExp.test(buffer[1])||buffer[1]===undefined){
			var num=parseInt(buffer[1]) ? parseInt(buffer[1]):1;
			for(var j=0;j<num;j++){
				this.commandDivde.push(buffer[0]);
			}
		}else{
			this.errorNum=i;
			this.animation(target);
			return;
		}
		}else{
			if(this.cmd.indexOf(buffer[0]+' '+buffer[1])!==-1){
			var num=parseInt(buffer[2]) ? parseInt(buffer[2]):1;
			for(var j=0;j<num;j++){
				this.commandDivde.push(buffer[0]+' '+buffer[1]);
			}
		}else{
			this.errorNum=i;
			this.animation(target);
			return;
		}
		}
	}
	this.animation(target);
	console.log(this.commandDivde);
}
MovingBox.prototype.moveMain=function(target,command){
	switch (command){
		case 'GO':
			this.move(target);break;
		case 'TUN LEF':
			this.turning(target,'TUN LEF',-90);
			break;
		case 'TUN RIG':
			this.turning(target,'TUN LEF',90);
			break;
		case 'TUN BAC':
			this.turning(target,'TUN BAC',0);
			break;
		case 'TRA LEF':
			this.moveCase(target,'left',-30,38);
			break;
		case 'TRA TOP':
			this.moveCase(target,'top',-30,38);
			break;
		case 'TRA RIG':
			this.moveCase(target,'left',30,308);
			break;
		case 'TRA BOT':
			this.moveCase(target,'top',30,308);
			break;
		case 'MOV LEF':
			this.turnAndGo(target,'left',270,-30,38);
			break;
		case 'MOV TOP':
			this.turnAndGo(target,'top',0,-30,38);
			break;
		case 'MOV RIG':
			this.turnAndGo(target,'left',90,30,308);
			break;
		case 'MOV BOT':
			this.turnAndGo(target,'top',180,30,308);
			break;
		default:
			this.error();
	}
}
//纯转向
MovingBox.prototype.turning=function(target,method,deg){
	if(method==='TUN BAC'){
		this.deg=this.deg-180;
	}
	switch (this.deg){
		case 0:
		this.deg=360;break;
		case 360:
		this.deg=0;break;
		case -90:
		this.deg=270;break;
		case -180:
		this.deg=180;break;
	}
	this.deg=this.deg+deg;
	console.log(this.deg);
	target.style.transform='rotate('+this.deg+'deg)';
}
//纯移动
MovingBox.prototype.moveCase=function(target,attr,value,max){
	if(this[attr]===max){
		alert('到边边辣！');
		clearInterval(this.timer);
		return;
	}
	this[attr]=this[attr]+value;
	target.style[attr]=this[attr]+'px';
}
//朝某个方向走
MovingBox.prototype.move=function(target){
	switch (this.deg){
		case 0:
			this.moveCase(target,'top',-30,38);
			break;	
		case 90:
			this.moveCase(target,'left',30,308);
			break;
		case 180:
			this.moveCase(target,'top',30,308);
			break;
		case 270:
			this.moveCase(target,'left',-30,38);
			break;
	}
}
//MOV
MovingBox.prototype.turnAndGo=function(target,attr,deg,positon,max){
			this.moveCase(target,attr,positon,max); 
			target.style.transform='rotate('+deg+'deg)';
			console.log(deg);
			this.deg=deg;
}
MovingBox.prototype.animation=function(target){
	console.log(this.commandDivde);
	var that=this;
	this.timer=setInterval(function(){
		if(that.item===that.commandDivde.length){
			if(that.errorNum!==null){
				that.error();
			}
			clearInterval(that.timer);
			return;
		}
		that.moveMain(target,that.commandDivde[that.item]);
		that.item++;
	},1000);
}
MovingBox.prototype.scroll=function(target){
	document.getElementById('scroll').style.top=-target.scrollTop+'px';
}
MovingBox.prototype.rowsOper=function(target){
	console.log(target);
	var html='';
	var num=target.value.split('\n').length;
	for(var i=0;i<num;i++){
		html+='<div>'+(i+1)+'</div>';
	}
	document.getElementById('warn').getElementsByTagName('div')[0].innerHTML=html;
}
MovingBox.prototype.error=function(){
	document.getElementById('scroll').getElementsByTagName('div')[this.errorNum].style.backgroundColor='red';
}
function getStyle(element, attr) {
    //IE写法
    if (element.currentStyle) {
        return element.currentStyle[attr];
        //标准
    } else {
        return getComputedStyle(element, false)[attr];
    }
}
window.onload=(function(){
	init();
});