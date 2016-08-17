function $(ele){
	return document.getElementsByClassName(ele);
}
function cE(ele){
	return document.createElement(ele);
}
function sE(ele,attr){
	var a=cE(ele);
	if(attr){
		for(var i=0;i<attr.length;i++){
			a.setAttribute(attr[i][0],attr[i][1]);
		}
	}
	return a;
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
var Render=(function(){
	function init(){
		var instance=new render();
		return instance;
	}
	function render(){

	}
	render.prototype={
		search:function(target,arr){
			var i;
			for(i=0;i<arr.length;i++){
				var oli=sE('li');
				var oa=sE('a',[['href',arr[i].href]]);
				oa.innerHTML=arr[i].name;
				oli.appendChild(oa);
				target.appendChild(oli);
			}
			
		},
		classify:function(target,arr){
			var i;
			for(i=0;i<arr.length;i++){
				var odiv=cE('div');
				odiv.setAttribute('class','clas');
				var h3=cE('h3');
				h3.innerHTML=arr[i];
				odiv.appendChild(h3);
				var oi=cE('i');
				oi.innerHTML='>';
				odiv.appendChild(oi);
				target.appendChild(odiv);
			}
		},
		maintain:function(target,arr,img){
			var i,j,k;
			var item=cE('div');
			item.setAttribute('class','item');
			var maintain=cE('div');
			maintain.setAttribute('class','maintain');
			item.appendChild(maintain);
			var item1=cE('div');
			item1.setAttribute('class','item-1');
			maintain.appendChild(item1);
			for(i=0;i<arr[0].length;i++){
				var oa=cE('a');
				oa.setAttribute('href',arr[0][i].href);
				oa.innerHTML=arr[0][i].name+'<i>></i>';
				item1.appendChild(oa);
			}
			for(i=0;i<arr.length-1;i++){
				var item2=cE('div');
				item2.setAttribute('class','item-2');
				var title=sE('div',[['class','title']]);
				var fore=sE('a',[['href','#'],['class','fore']]);
				fore.innerHTML=(arr[i+1][0]);
				title.appendChild(fore);
				var oin=sE('div',[['class','in']]);
				for(j=0;j<arr[i+1].length;j++){
					var oa=sE('a',[['href','#']]);
					oa.innerHTML=arr[i+1][j];
					oin.appendChild(oa);
				}
				item2.appendChild(title);
				item2.appendChild(oin);
				maintain.appendChild(item2);
			}
			var sidebar=sE('div',[['class','sidebar']]);
			for(i=0;i<img[0].length;i++){
				var oa=sE('a',[['href','#']]);
				var oimg=sE('img',[['src',img[0][i]]]);
				oa.appendChild(oimg);
				sidebar.appendChild(oa);
			}
			for(i=0;i<img[1].length;i++){
				var oa=sE('a',[['href','#'],['class','large']]);
				if(i===0){
					oa.setAttribute('class','large first-large');
				}
				var oimg=sE('img',[['src',img[1][i]]]);
				oa.appendChild(oimg);
				sidebar.appendChild(oa);
			}
			item.appendChild(sidebar);
			target.appendChild(item);
		},
		foucsImg(target,arr){
			var i;
				var pic=sE('div',[['class','pic']]);
				for(i=0;i<arr.length;i++){
					var oa=sE('a',[['href',arr[i].href]]);
					var oimg=sE('img',[['src',arr[i].src],'alt',arr[i].alt]);
					oa.appendChild(oimg);
					pic.appendChild(oa);
				}
				var picbtn=sE('div',[['class','picbtn']]);
			for(i=0;i<arr.length;i++){
				var ooa=sE('a');
				ooa.innerHTML=i+1;
				picbtn.appendChild(ooa);
			}
			target.appendChild(pic);
			target.appendChild(picbtn);
		},
		focusbar:function(target,arr,imgs){
			var i;
			var ig=imgs[0];
			for(i=0;i<arr.length;i++){
			var oa=sE('a',[['href',arr[i].href]]);
			oa.innerHTML='<h4>'+arr[i].fore+'</h4>'+arr[i].cont;
			target.appendChild(oa);
			}
			var ooa=sE('a',[['href',ig.href]]);
			var oimg=sE('img',[['src',ig.img],['alt',ig.alt]]);
			ooa.appendChild(oimg);
			$('sideadd')[0].appendChild(ooa);
		},
		rolladd:function(target,arr){
			var i;
			var fiexdadd=sE('div',[['class','fixedadd']]);
			var oa=sE('a',[['href',arr[0].href]]);
			var oimg=sE('img',[['src',arr[0].img],['alt',arr[0].alt]]);
			oa.appendChild(oimg);
			fiexdadd.appendChild(oa);
			var roll=sE('div',[['class','roll']]);
			var oul=sE('ul');
			console.log(arr);
			for(i=0;i<arr.length-1;i++){
				var oli=sE('li');
				var ooa=sE('a',[['href',arr[i+1].href]]);
				var aimg=sE('img',[['src',arr[i+1].img],['alt',arr[i+1].alt]]);
				ooa.appendChild(aimg);
				oli.appendChild(ooa);
				oul.appendChild(oli);
			}
			roll.appendChild(oul);
			target.appendChild(fiexdadd);
			target.appendChild(roll);
		},
		classifyBarEvent:function(){
			var clas=$('clas');
			var i=0;
			var allitems=$('allitems')[0];
			var item=$('item');
			for(i=0;i<clas.length;i++){
				clas[i].onmouseover=(function(i){
					return function(){
						allitems.style.display='block';
						item[i].style.display='block';
					}
				})(i);
				clas[i].onmouseout=(function(i){
					return function(){
						allitems.style.display='none';
						item[i].style.display='none';
					}
				})(i);
			}
		},
		foucsImgEvent:function(){
			var i=0;
			var picbtn=$('picbtn')[0].getElementsByTagName('a');
			var pic=$('pic')[0].getElementsByTagName('a');
			var index;
			for(i=0;i<picbtn.length;i++){
				picbtn[i].onmouseover=(show)(i);
			}
			function show(i){
					return function(){
						console.log(i);
						pic[i].style.display='block';
						picbtn[i].style.backgroundColor='#C81623';
						setTimeout(function(){
								pic[i].style.opacity=1;
								zIndex=10;
						},10);
						for(var j=0;j<pic.length;j++){
							if(j!==i){
								zIndex='none';
								pic[j].style.opacity=0;
								picbtn[j].style.backgroundColor='#666';
							}
						}
					}
				}
				function whichShow(limit,lastIndex,count){
					for(i=0;i<pic.length;i++){
					if(getStyle(pic[i],'opacity')==='1'){
						if(i===limit){
							show(lastIndex)();
							return;
						}
						show(i+count)();//柯里化
					}
				}
				}
			document.getElementById('focus').getElementsByClassName('rolladdleft')[0].onclick=function(){
				whichShow(0,pic.length-1,-1);
			};
			document.getElementById('focus').getElementsByClassName('rolladdright')[0].onclick=function(){
				whichShow(pic.length-1,0,1);
			}
		},
		rolladdEvent(){
			var oul=$('roll')[0].getElementsByTagName('ul')[0];
			document.getElementById('rolladd').getElementsByClassName('rolladdleft')[0].onclick=function(){
				console.log(getStyle(oul,'left'));
				if(getStyle(oul,'left')!=='-2009px'&&getStyle(oul,'left')!=='-3013px'&&
					getStyle(oul,'left')!=='-1px'&&getStyle(oul,'left')!=='-1005px'){
					return;
				}
				if(getStyle(oul,'left')==='-1px'){
					oul.style.left=-3013+'px';
				}else{
					var left=parseInt(getStyle(oul,'left'));
					console.log(left);
					oul.style.left=(left+1004)+'px';
				}
			};
			document.getElementById('rolladd').getElementsByClassName('rolladdright')[0].onclick=function(){
				if(getStyle(oul,'left')!=='-2009px'&&getStyle(oul,'left')!=='-3013px'&&
					getStyle(oul,'left')!=='-1px'&&getStyle(oul,'left')!=='-1005px'){
					return;
				}
				if(getStyle(oul,'left')==='-3013px'){
					oul.style.left=-1+'px';
				}else{
					var left=parseInt(getStyle(oul,'left'));
					console.log(left);
					oul.style.left=(left-1004)+'px';
				}
			};
		
		},
		bind:function(){
			// 侧栏事件绑定
			this.classifyBarEvent();
			//主栏图片滚动事件绑定
			this.foucsImgEvent();
			this.rolladdEvent();
		}
	}
	return {
		init:init,
	}
})();
