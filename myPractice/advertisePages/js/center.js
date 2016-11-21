;(function(){
	$('.checkRanking').on('touchend',function(e){
		$('.mask').show();
	})
	$('.close').on('touchend',function(e){
		$('.mask').hide();
	})
	$('.open').on('touchend',function(e){
		console.log('a');
		$('.open').off();
		var count=-100;
		var t=setInterval(function(){
			
			if(count>0){
				clearInterval(t);
				var ran= parseInt(Math.random()*100);
				if(ran<80){
					self.location.href='failed.html';
				}else{
					self.location.href='success.html';
				}
			}else{
				$('.pb').css('transform','translateX('+count+'%)');
				$('.pb').css('-webkit-transform','translateX('+count+'%)');
				$('.percent').html(100+count+'%');
				count++;
			}
		},10)
	})
})();