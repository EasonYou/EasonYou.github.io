;
(function() {

	$('.close').on('touchend', function(e) {
		console.log('a');
		history.back();
	})
	$('.open').on('touchend', function(e) {
			console.log('a');
			$('.open').off();
			var count = -100;
			var t = setInterval(function() {

				if (count > 0) {
					clearInterval(t);
					var ran = parseInt(Math.random() * 100);
					if (ran < 80) {
						self.location.href = 'failed.html';
					} else {
						self.location.href = 'success.html';
					}
				} else {
					$('.pb').css('transform', 'translateX(' + count + '%)');
					$('.pb').css('-webkit-transform', 'translateX(' + count + '%)');
					$('.percent').html(100 + count + '%');
					count++;
				}
			}, 10)
		})


	/** 是否有资格开启宝箱 **/

	//模拟数据
	var number = 199;
	//拥有资格，进入游戏页面
	if (number >= 200) {
		$('.game-img').attr('src', 'img/game.png')
		$('.game-btn').on('touchend', function(e) {
			window.location.href = 'game.html'
		})
		$('.cpc').css('transform', 'translateX(0%)');
		$('.cpc').css('-webkit-transform', 'translateX(0%)');

	} //没有资格，弹窗
	else {
		$('.game-img').attr('src', 'img/game1.png')
		$('.cpc').css('transform', 'translateX(' + (-100+parseInt(number/200*100)) + '%)');
		$('.cpc').css('-webkit-transform', 'translateX(' + (-100+parseInt(number/200*100)) + '%)');
		$('.game-btn').on('touchend', function(e) {
			alert('您还未拥有抽奖资格！')
		})
	}
	var profilePic='img/jerry.jpg';
	$('.profile').attr('src',profilePic);

	/** ---------  ajax  --------- **/

	// $.ajax({
	// 	type: 'GET',
	// 	url: 'json/number.json', 
	// 	dataType: 'json',
	// 	success: function(data) {
	// 		//拥有资格，进入游戏页面
	// 		if (data.number >= 200) {
	// 			$('.game-img').attr('src', 'img/game.png')
	// 			$('.cpc').css('transform', 'translateX(0%)');
	// 			$('.cpc').css('-webkit-transform', 'translateX(0%)');
	// 			$('.game-btn').on('touchend', function(e) {
	// 				window.location.href = 'game.html'
	// 			})
	// 		} //没有资格，弹窗
	// 		else {
	// 			$('.game-img').attr('src', 'img/game1.png')
	// 			$('.cpc').css('transform', 'translateX(' + (-100+parseInt(data.number/200*100)) + '%)');
	// 			$('.cpc').css('-webkit-transform', 'translateX(' + (-100+parseInt(data.number/200*100)) + '%)');
	// 			$('.game-btn').on('touchend', function(e) {
	// 				alert('您还未拥有抽奖资格！')
	// 			})
	// 		}
	// 		$('.profile').attr('src',data.profilePic);
	// 	},
	// 	error: function(xhr, type) {
	// 		alert('Ajax error!');
	// 	}
	// });


	/** 头像绑定 **/

	
})();