//定义
var output=['wade'];
var html='';
var index=0;
var tagValue=[];
//渲染
function render(arr){
	html='';
		for(var i=0;i<arr.length;i++){
		html+='<span>'+arr[i]+'</span>';
	}
	document.getElementById('output').innerHTML=html;
}
//数组操作
function operateEle() {
	var value=document.getElementById('text').value;
	var arr=value.split(/[\n\r\t\s,，、;；]+/g);
	if(value===''){
		alert('请输入字符或数字！！');
		return;
}
//遍历查询是否有重复
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<output.length;j++){
		if(output.indexOf(arr[i])===-1){
			output.push(arr[i]);
			console.log(output);
		}
	}
}
//多余元素删除
	var len=output.length-10;
	if(output.length>10){
		for(var i=0;i<len;i++){
			output.shift();
		}
	}
	render(output);
}
//tag操作
function overHandle(span){
	if(span.id==='tag') return;
	span.className='over';
	span.innerHTML='是否删除'+span.innerHTML+'?';
}
function outHandle(span){
	if(span.id==='tag') return;
	span.className='';
	span.innerHTML=span.innerHTML.slice(4,-1);
}
function deleteHandle(span){
	if(span.id==='tag') return;
	event.stopPropagation();
	var tagSpan=document.getElementById('tag').getElementsByTagName('span');
	span.parentNode.removeChild(span);

}
//tag输出
function tagOutput(){
	var original=document.getElementById('tagInput').value;
	text=original.replace(/^\s+|\s+$/g, "");
	var flag=true;
	if(text==='') {
		document.getElementById('tagInput').value='';
		return;
	}
	document.getElementById('tagInput').value='';
	var tagSpan=document.getElementById('tag').getElementsByTagName('span');
	for(var i=0;i<tagSpan.length;i++){
		if(tagValue[i]===text){
			return flag=false;
		}
	}
	if(tagSpan.length===0||flag===true){
		document.getElementById('tag').innerHTML+='<span>'+text+'</span>';
		tagValue.push(text);
		return;
	}
}
function tagOperate(e){
	if(e.keyCode===13||e.keyCode===32){
		tagOutput();
	}
}
//事件绑定
window.onload=function(){
	document.getElementById('right-in').addEventListener('click',operateEle,false);
    document.getElementById('tagInput').addEventListener('keydown',tagOperate,false);
    document.getElementById("tag").addEventListener("mouseover", function(event){
        overHandle.call(event,event.target);},false);
    document.getElementById("tag").addEventListener("mouseout", function(event){
        outHandle.call(event,event.target);},false);
    document.getElementById("tag").addEventListener("click", function(event){
        deleteHandle.call(event,event.target);},false);
    render(output);
}