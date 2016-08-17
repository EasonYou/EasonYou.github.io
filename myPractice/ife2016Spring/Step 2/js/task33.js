window.onload=function(){
	init();
};
function init(){
	var movingBox=new MovingBox(box);
	document.getElementById('submit').addEventListener('click',function(){
		movingBox.getCommand.call(movingBox,box)},false);}
function MovingBox(box){
	this.deg=parseInt(box.style.transform.replace(/[^0-9]/ig,''));
	this.left=parseInt(getStyle(box,'left').replace(/[^0-9]/ig,''));
	this.top=parseInt(getStyle(box,'top').replace(/[^0-9]/ig,''));
}
MovingBox.prototype.getCommand=function(target){
	this.command=document.getElementById('command').value;
	switch (this.command){
		case 'GO':
			this.move(target);break;
		default:
			this.turn(target);
	}
}
MovingBox.prototype.moveCase=function(target,attr,value,max){
	if(this[attr]===max){
		alert('到边边辣！');
		return;
	}
	this[attr]=this[attr]+value;
	target.style[attr]=this[attr]+'px';

}
MovingBox.prototype.move=function(target){
	console.log(this.deg);
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
MovingBox.prototype.turn=function(target){
	switch (this.command){
		case 'TUN LEF':
			if(this.deg===0){
				this.deg=360;
			}
			this.deg=this.deg-90;
			console.log(this.deg);
			target.style.transform='rotate('+this.deg+'deg)';
			break;
		case 'TUN RIG':
			this.deg=this.deg+90;
			if(this.deg===360){
				this.deg=0;
			}
			console.log(this.deg);
			target.style.transform='rotate('+this.deg+'deg)';
			break;
		case 'TUN BAC':
			this.deg=this.deg-180;
			if(this.deg===-90){
				this.deg=270;
			}
			if(this.deg===-180){
				this.deg=180;
			}
			console.log(this.deg);
			target.style.transform='rotate('+this.deg+'deg)';
			break;
	}
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