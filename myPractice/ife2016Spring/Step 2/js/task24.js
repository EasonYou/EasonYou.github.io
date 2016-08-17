window.onload=function(){
	var traversalTree=new TraversalTree();		
	traversalTree.addEvent('DPF','box');
	traversalTree.addEvent('searchDPF','box');
	traversalTree.addEvent('BFS','box','BFS');
	traversalTree.addEvent('searchBFS','box','BFS');
	document.getElementsByClassName('container')[0].addEventListener('click',function(event){
		traversalTree.focus.call(traversalTree,event.target)},false);
	document.getElementById('create').addEventListener('click',function(event){
		traversalTree.create.call(traversalTree)},false);
	document.getElementById('delete').addEventListener('click',function(event){
		traversalTree.delete.call(traversalTree)},false);
}
function TraversalTree(){
	this.doing=false;
	this.buffer=[];
}
TraversalTree.prototype.focus=function(target){
	if(target.className==='container'){
		return;
	}
	this.DPF(target,'DPF','box');
	this.reset('box');
	target.style.backgroundColor="#74B4BE";
	this.target=target;
}
TraversalTree.prototype.create=function(){
	var text=document.getElementById('value').value.replace(/^\s+|\s+$/g, "");
	if(this.target===undefined){
		alert('请选中节点！');
		return;
	}
	if(text===''){
		alert('请输入需要添加的字符！');
		return;
	}
	this.target.innerHTML+='<div class="box">'+text+"</div>";
};
TraversalTree.prototype.delete=function(){
	if(this.target===undefined){
		alert('请选择要删除的节点！');
		return;
	}
	this.target.parentNode.removeChild(this.target);
}
TraversalTree.prototype.addEvent=function(id,classs,fn){
	var that=this;
	document.getElementById(id).addEventListener('click',function(){
		var root=document.querySelector('.container');
		that.reset(classs);
		if(fn==='BFS'){
			that.BFS(root,id,classs);
		}else{
		that.DPF(root,id,classs);
		}
		that.animation(id,classs);
	},false);
}

//重置&是否正在遍历
TraversalTree.prototype.reset=function(classs){
	if(this.doing){
			alert('正在遍历！');
			return;
		}
	var all=document.getElementsByClassName(classs);
	for(var i=0;i<all.length;i++){
		all[i].style.backgroundColor="#ffffff";
	}
}
//深度遍历&深度遍历搜索
TraversalTree.prototype.DPF=function (root,id,classs,create) {
	var child=root.children;
	var cLen=child.length;
	if(cLen!==0){
		for(var i=0,len=child.length;i<len;i++){
			//如果是搜索遍历
			if(id==='searchDPF'){
				this.buffer.push(child[i]);
				//如果找到这个值，return跳出遍历，并返回true
				if(document.getElementById('text').value.replace(/^\s+|\s+$/g, "")===child[i].firstChild.nodeValue.replace(/^\s+|\s+$/g, "")){
					return true;
				}	
			}else{
			//否则直接遍历
			this.buffer.push(child[i]);
			}
			//如果此节点还有子节点，递归
			if(child[i].children.length>0){
				var flag=this.DPF(child[i],id,classs);
				//如果找到元素，返回值为true，则退出遍历
				if(flag){
					return true;
				}
			}
		}
	}
};
TraversalTree.prototype.BFS=function (root,id,classs) {
	var child=root;
	var cache=[];
	var text=document.getElementById('text').value.replace(/^\s+|\s+$/g, '');
	cache.push(child);
	while(cache.length!==0){
		child=cache.shift();
		if(child.children){
			for(var i=0;i<child.children.length;i++){
				this.buffer.push(child.children[i]);
				cache.push(child.children[i]);
				if(text===child.children[i].firstChild.nodeValue.replace(/^\s+|\s+$/g, '')){
					return;
			}
		}
	}
	}
};
TraversalTree.prototype.animation=function(id,classs){
	//输入字符串判断
	var value=document.getElementById('text').value.replace(/^\s+|\s+$/g, '');
	if(!this.doing&&id.indexOf('search')===0&&value===''){
		alert('请输入查询字符！');
		//定义一个flag为true
		var flag=true;
	};
	var buffer=this.buffer,
		that=this,
		item=0,
		timer;
		//原指针指向新地址
		that.buffer=[];
		var speed=document.getElementById("speed").value;
		//如果没有字符，结束
		if(flag){
			flag=false;
			return;
		}
	//动画过程
	if(!that.doing){
		that.doing=true;
		//第一个元素直接赋值
		buffer[item].style.backgroundColor="#aeaeae";
		item++;
		//延时动画开始
		timer=setInterval(function(){
			//如果遍历到最后个元素
			if(item===buffer.length){
				buffer[item-1].style.backgroundColor="#ffffff";
				
				//如果是搜索遍历
				if(id==="searchDPF"||id==="searchBFS"){
					buffer[item-1].style.backgroundColor="#aeaeae";
					//如果搜索到的值是遍历的最后一个，做判断
					if(item===document.getElementsByClassName(classs).length){
						//如果相等
						if(value===buffer[item-1].firstChild.nodeValue.replace(/^\s+|\s+$/g, "")){
							that.doing=false;
							clearInterval(timer);
							return;
						}else{
						//否则没有找到
						buffer[item-1].style.backgroundColor="#ffffff";
						alert("没有找到！");
						clearInterval(timer);
						}
					}
				}
				that.doing=false;
				clearInterval(timer);
				return;
			}
			//继续遍历
			buffer[item-1].style.backgroundColor="#ffffff";
			buffer[item].style.backgroundColor="#aeaeae";
			item++;
		},speed);
	}
};