//定义
var output=[23,44,11];
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
	if(reg.test(value)&&value>=10&&value<=100){
	switch (e.target.id){
		case 'left-in':
		output.unshift(value);break;
		case 'right-in':
		output.push(value);break;
	}
}else{
	if(e.target.id==='left-in'||e.target.id=='right-in'){
		alert('请输入0-100的整数！');
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
//事件绑定
window.onload=function(){
	document.getElementById('left-in').addEventListener('click',operateEle,false);
	document.getElementById('left-out').addEventListener('click',operateEle,false);
	document.getElementById('right-in').addEventListener('click',operateEle,false);
	document.getElementById('right-out').addEventListener('click',operateEle,false);
	//事件代理
	document.getElementById("output").addEventListener("click", function(event){
        delHandle.call(event,event.target);
    },false);
    render(output);
}