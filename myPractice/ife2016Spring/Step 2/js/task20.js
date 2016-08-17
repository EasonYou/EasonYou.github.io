//定义
var output=[];
var html='';
var index=0;
var reg=/^\d+$/;
//渲染
function render(arr){
	html='';
		for(var i=0;i<arr.length;i++){
		html+='<span>'+arr[i]+'</span>';
	}
	document.getElementById('output').innerHTML=html;
}
//数组操作
function operateEle(e) {
	var value=document.getElementById('text').value;
	var arr=value.split(/[\n\r\t\s,，、;；]+/g);
	console.log(arr);
	if(value!==''){
	switch (e.target.id){
		case 'left-in':
		for(var i=arr.length-1;i>=0;i--){
		output.unshift(arr[i]);	
		}
		break;
		case 'right-in':
		for(var i=0;i<arr.length;i++){
		output.push(arr[i]);
		}
		break;
	}
}else{
	if(e.target.id==='left-in'||e.target.id=='right-in'){
		alert('请输入字符或数字！！');
	}
}
	if(output.length!==0){
	switch (e.target.id){
	case 'left-out':
		alert(output.shift(value));break;
	case 'right-out' :
		alert(output.pop(value));
	}
}else{
	if(e.target.id==='left-out'||e.target.id=='right-out'){
	alert('没有元素辣！');
}
}
	render(output);
}
//元素删除
function delHandle(span){
	var all=document.getElementById('output');
	for(var i=0;i<all.childNodes.length;i++){
	if(all.childNodes[i]===span){
		index=i;break;
		}
	}
		output.splice(index,1);
		render(output);
}
//查询元素
function search(){
	var value=document.getElementById('text').value;
	if(value===''){
		return;
	}
	var span=document.getElementsByTagName('span');
	var regExp=new RegExp(value,'g');
	for(var i=0;i<output.length;i++){
		searchStr=output[i]+'';
		span[i].className='';
		if(searchStr.search(regExp)!==-1){
			span[i].className='change';
		}
	}
}
//事件绑定
window.onload=function(){
	document.getElementById('left-in').addEventListener('click',operateEle,false);
	document.getElementById('left-out').addEventListener('click',operateEle,false);
	document.getElementById('right-in').addEventListener('click',operateEle,false);
	document.getElementById('right-out').addEventListener('click',operateEle,false);
	document.getElementById('search').addEventListener('click',search,false);
	//事件代理
	document.getElementById("output").addEventListener("click", function(event){
        delHandle.call(event,event.target);
    },false);
    render(output);
}