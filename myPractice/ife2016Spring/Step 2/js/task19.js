//定义
var output=[];
var html='';
var index=0;
var reg=/^\d+$/;
var flag=true;

//渲染
function render(arr){
	html='';
		for(var i=0;i<arr.length;i++){
		html+='<span style="width:20px;height:'+arr[i]*4+'px;">'+arr[i]+'</span>';
	}
	document.getElementById('output').innerHTML=html;
}
//排序渲染
function _render(arr){
	var l=0;
	flag=false;
	timer=setInterval(function(){
		render(arr[l]);
		l++;
		if(l===arr.length){
			clearInterval(timer);
			flag=true;
		}
	},200)
}
//数组操作
function operateEle(e) {
	if(flag===false){
		return alert('正在排序中！');
	}
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
		alert(output.shift());break;
	case 'right-out' :
		alert(output.pop());
	}
}else{
	if(e.target.id==='left-out'||e.target.id=='right-out'){
	alert('没有元素辣！');
}
}
	if(output.length>60){
		alert('60个元素已经满辣！');
		switch (e.target.id){
		case 'left-in':
		output.shift();break;
		case 'right-in':
		output.pop();break;
	}
	}else{
		render(output);
	}
}
//元素删除
function delHandle(span){
	if(flag===false){
		return alert('正在排序中！');
	}
	var all=document.getElementById('output');
	for(var i=0;i<all.childNodes.length;i++){
	if(all.childNodes[i]===span){
		index=i;break;
		}
	}
		output.splice(index,1);
		render(output);
}
var quickSort = function(arr) {
	if(flag===false){
		return alert('正在排序中！');
	}
　　if (arr.length <= 1) { return arr; }
	var buffer;
	var buf=[];
	var l=0;
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				buffer=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=buffer;
				buf[l]=arr.slice(0);//数组克隆
				l++;
			}
		}
	}
	console.log(buf);
	_render(buf);
	return arr;
};
function sortEvent(){
	var arr=quickSort(output);
	output=arr;
}
function random(){
	if(flag===false){
		return alert('正在排序中！');
	}
	output=[];
	for(var i=0;i<60;i++){
		output.push(parseInt(Math.random(10,100)*90+10));
		if(output[i]>100||output[i]<10){
			alert("ss");
		}
	}
	render(output);
}
//事件绑定
window.onload=function(){
	document.getElementById('left-in').addEventListener('click',operateEle,false);
	document.getElementById('left-out').addEventListener('click',operateEle,false);
	document.getElementById('right-in').addEventListener('click',operateEle,false);
	document.getElementById('right-out').addEventListener('click',operateEle,false);
	document.getElementById('sort').addEventListener('click',sortEvent,false);
	document.getElementById('random').addEventListener('click',random,false);
	//事件代理
	document.getElementById("output").addEventListener("click", function(event){
        delHandle.call(event,event.target);
    },false);
    render(output);
}