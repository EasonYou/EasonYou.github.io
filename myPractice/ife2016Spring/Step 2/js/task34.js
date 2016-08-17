function init(){
	box.style.transform='rotate(270deg)';
	var movingBox=new MovingBox(box);
	document.getElementById('submit').addEventListener('click',function(){
		movingBox.moveMain.call(movingBox,box)},false);}
function MovingBox(box){
	this.deg=parseInt(box.style.transform.replace(/[^0-9]/ig,''));
	this.left=parseInt(getStyle(box,'left').replace(/[^0-9]/ig,''));
	this.top=parseInt(getStyle(box,'top').replace(/[^0-9]/ig,''));
}

MovingBox.prototype.moveMain=function(target){
	this.command=document.getElementById('command').value;
	switch (this.command){
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
			this.moveCase(target,'left',30,38);
			break;
		case 'TRA BOT':
			this.moveCase(target,'top',30,38);
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
	}
}
//纯转向
MovingBox.prototype.turning=function(target,method,deg){
	console.log(this.deg);
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
//动画
MovingBox.prototype.animation=function(){
	
}
//获取当前样式
function getStyle(element, attr) {
    //IE写法
    if (element.currentStyle) {
        return element.currentStyle[attr];
        //标准
    } else {
        return getComputedStyle(element, false)[attr];
    }
}
window.onload=function(){
	init();
};