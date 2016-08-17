window.onload=function(){
	var orderTree=new OrderTree();
	var attr=document.querySelector('.root');
	document.getElementById('pre').addEventListener('click',function(){
		orderTree.preOrder(attr);
		orderTree.animation();
	},false);
	document.getElementById('in').addEventListener('click',function(){
		orderTree.inOrder(attr);
		orderTree.animation();
	},false);
	document.getElementById('post').addEventListener('click',function(){
		orderTree.postOrder(attr);
		orderTree.animation();
	},false);
}

function OrderTree(){
	this.doing=false;
	this.buffer=[];
}
OrderTree.prototype.preOrder=function(attr){
	this.buffer.push(attr);
	if(attr.firstElementChild){
		this.preOrder(attr.firstElementChild);
	}
	if(attr.lastElementChild){
		this.preOrder(attr.lastElementChild);
	}
}
OrderTree.prototype.inOrder=function(attr){
	if(attr.firstElementChild){
		this.preOrder(attr.firstElementChild);
	}
	this.buffer.push(attr);
	if(attr.lastElementChild){
		this.preOrder(attr.lastElementChild);
	}
}
OrderTree.prototype.postOrder=function(attr){
	if(attr.firstElementChild){
		this.preOrder(attr.firstElementChild);
	}
	if(attr.lastElementChild){
		this.preOrder(attr.lastElementChild);
	}
	this.buffer.push(attr);
}
OrderTree.prototype.animation=function(){
	var buffer=this.buffer,
		that=this,
		item=0,
		timer;
		that.buffer=[];
		var speed=document.getElementById("speed").value;
	if(!that.doing){
		that.doing=true;
		buffer[item].style.backgroundColor="#aeaeae";
		item++;
		timer=setInterval(function(){
			if(item===buffer.length){
				buffer[item-1].style.backgroundColor="#ffffff";
				that.doing=false;
				clearInterval(timer);
				return;
			}
			buffer[item-1].style.backgroundColor="#ffffff";
			buffer[item].style.backgroundColor="#aeaeae";
			item++;
		},speed);
	}
}