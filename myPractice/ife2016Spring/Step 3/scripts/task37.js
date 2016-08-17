function g(clsss){
	return document.getElementsByClassName(clsss);
}
var LoginBox=function(element){
	this.element=element;
	this.init();
}
LoginBox.prototype={
	show:function(){
		this.element.parentNode.style.display='block';
		this.autoCenter();
	},
	hide:function(){
		console.log(this);
		this.element.parentNode.style.display='none';
	},
	attr:function(){
		this.element.width=parseInt(getStyle(this.element,'width'));
		this.element.height=parseInt(getStyle(this.element,'height'));
		this.element.ofsLeft=this.element.offsetLeft;
		this.element.ofsTop=this.element.offsetTop;
	},
	autoCenter:function(){
		var clientWidth=document.documentElement.clientWidth;
		var clientHeight=document.documentElement.clientHeight;
		this.element.style.left=(clientWidth - this.element.width)/2+'px';
		this.element.style.top=(clientHeight - this.element.height)/2+'px';
	},
	move:function(e){
		var that=this;
		this.element.ofsLeft=this.element.offsetLeft;
		this.element.ofsTop=this.element.offsetTop;
		console.log(that.element);
		document.onmousemove=function(event){
			that.moveX=event.pageX-e.pageX;
			that.moveY=event.pageY-e.pageY;
			that.element.style.left=that.element.ofsLeft+that.moveX+'px';
			that.element.style.top=that.element.ofsTop+that.moveY+'px';
		}
		document.onmouseup=function(){document.onmousemove=null};
	},
	init:function(){
		var that=this;
		this.attr();
		this.show();
		this.autoCenter();
		window.onresize=function(){that.autoCenter();};
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

var loginBox=new LoginBox(g('login-box')[0]);

//事件绑定
 g('mask')[0].addEventListener('click',function(){
 	loginBox.hide();
 },false);
 g('cancle')[0].addEventListener('click',function(){
 	loginBox.hide();
 },false);
 g('login')[0].addEventListener('click',function(){
 	loginBox.show();
 },false);
  g('move')[0].addEventListener('mousedown',function(e){
 	loginBox.move(e);
 },false);
