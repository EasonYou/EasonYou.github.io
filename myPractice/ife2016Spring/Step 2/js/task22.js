//1.querySelector返回【第一个】符合要求的元素
//  doucument.getElementsByClassName返回数组
//2.面向对象
//3.闭包以及指针指向
window.onload=function(){
	var orderTree=new OrderTree(),
		root = document.querySelector(".root");
	document.getElementById('pre').addEventListener('click',function(){
		orderTree.preOrder(root);
		orderTree.animation();
},false);
	document.getElementById('in').addEventListener('click',function(){
		orderTree.inOrder(root);
		orderTree.animation();
},false);
	document.getElementById('post').addEventListener('click',function(){
		orderTree.postOrder(root);
		orderTree.animation();
},false);
}
function OrderTree(){
	//定义动画储存栈
	this.stack=[];
	//是否在遍历动画中
	this.isWalking=false;
}
//先序遍历
OrderTree.prototype.preOrder=function(node){
	//把节点元素放进栈中
	this.stack.push(node);
	if(node.firstElementChild){
		this.preOrder(node.firstElementChild);
	}
	if(node.lastElementChild){
		this.preOrder(node.lastElementChild);
	}
}
OrderTree.prototype.inOrder=function(node){
	//把节点元素放进栈中
	if(node.firstElementChild){
		this.inOrder(node.firstElementChild);
	}
	this.stack.push(node);
	if(node.lastElementChild){
		this.inOrder(node.lastElementChild);
	}
}
OrderTree.prototype.postOrder=function(node){
	//把节点元素放进栈中
	if(node.firstElementChild){
		this.postOrder(node.firstElementChild);
	}
	if(node.lastElementChild){
		this.postOrder(node.lastElementChild);
	}
	this.stack.push(node);
}
 OrderTree.prototype.animation=function(){
 	//局部变量，stack为
 	var stack=this.stack,
 		speed=300,
 		item=0,
 		timer;
 		//把指针赋值给self，方便在闭包内的指向
 		self=this;
 		console.log(this);
 	self.stack = [];//等同于self.stack=new Array();
 	if(!self.isWalking){
 		self.isWalking=true;
 		console.log(this);
 		stack[item].style.backgroundColor="#aeaeae";
 		timer=setInterval(function(){
 			//在定时器中，function形成了闭包，内部的this指向window
 			if(item==stack.length-1){
 				stack[item].style.backgroundColor="#FFFFFF";
 				self.isWalking=false;
 				console.log(this);
 				clearInterval(timer);
 			}else{
 				item++;
 				stack[item-1].style.backgroundColor="#FFFFFF";
 				stack[item].style.backgroundColor="#aeaeae";
 			}
 		},speed);
 	}
 }
