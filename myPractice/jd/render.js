//实例化
var render1=Render.init();

//search

var search=[{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},
			{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},
			{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},{name:'洋货1折',href:'#'},]
render1.search($('mainsear')[0].getElementsByTagName('ul')[0],search);
//classify
var title=['家用电器','手机、数码、京东通信','电脑、办公',
			'家居、家具、家装、厨具','男装、女装、童装、内衣','个护化妆、清洁用品、宠物',
			'鞋靴、箱包、珠宝、奢侈品','运动户外、钟表','汽车、汽车用品	',
			'母婴、玩具乐器','食品、酒类、生鲜、特产','医药保健',
			'图书、音像、电子书','彩票、旅行、充值、票务','理财、众筹、白条、保险',];

render1.classify($('classify')[0],title);
//foucsbar
var foucsbar=[{href:'#',fore:'[特惠]',cont:'8.15爆款电器，年度超低价！'},{href:'#',fore:'[特惠]',cont:'8.15爆款电器，年度超低价！'},
				{href:'#',fore:'[特惠]',cont:'8.15爆款电器，年度超低价！'},{href:'#',fore:'[特惠]',cont:'8.15爆款电器，年度超低价！'},
				{href:'#',fore:'[特惠]',cont:'8.15爆款电器，年度超低价！'},];
var foucsBarimg=[{img:'./img/57abe7ebNdc6593d1.jpg',href:'#',alt:'hello'}];
render1.focusbar($('bd')[0],foucsbar,foucsBarimg);
//主内容图片轮播
var mainpic=[{href:'#',alt:'hello',src:'./img/57b16cb0Nb6a33e58.jpg'},
			 {href:'#',alt:'hello',src:'./img/57b033f3N1951905c.jpg'},]

render1.foucsImg($('mainpic')[0],mainpic);
//分类内容
var maintain=[
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[	
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[	
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[	
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']],
				[
					[{name:'8周年庆',href:'#'},{name:'家电城',href:'#'},{name:'品牌日',href:'#'},{name:'智能生活馆',href:'#'},
					{name:'京东净化馆',href:'#'},{name:'京东帮服务店',href:'#'},{name:'家电众筹馆',href:'#'}],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视'],['电视','沸腾815','合资电视','国产电视','互联网电视'],
					['电视','沸腾815','合资电视','国产电视','互联网电视']]
					];
var img=[['./img/562f4971Na5379aba.jpg','./img/562f4971Na5379aba.jpg',
		'./img/562f4971Na5379aba.jpg','./img/562f4971Na5379aba.jpg',
		'./img/562f4971Na5379aba.jpg','./img/562f4971Na5379aba.jpg',
		'./img/562f4971Na5379aba.jpg','./img/562f4971Na5379aba.jpg'],
		['./img/57a7528bNaea050ea.jpg','./img/57a7528bNaea050ea.jpg']]
for(var i=0;i<maintain.length;i++){
render1.maintain($('allitems')[0],maintain[i],img);
}

var rolladd=[{href:'#',img:'./img/57b17084N4eef0b27.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},{href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ad9e64Nc9f79e6b.jpg',alt:'hello'},]

render1.rolladd(document.getElementById('rolladd'),rolladd);

//猜你喜欢
var guessleft=[{name:'面部护理',href:'#'},{name:'面部护理',href:'#'},
			   {name:'面部护理',href:'#'},{name:'面部护理',href:'#'},
			   {name:'面部护理',href:'#'},{name:'面部护理',href:'#'},]

render1.guessleft($('guessleft')[0].getElementsByTagName('ul')[0],guessleft);

var guessright=[{name:'东芝(TOSHIBA) Q300系列',href:'#',img:'./img/55d6dcc9N5e641939.jpg',price:'￥449.00'},
				{name:'东芝(TOSHIBA) Q300系列',href:'#',img:'./img/55d6dcc9N5e641939.jpg',price:'￥449.00'},
				{name:'东芝(TOSHIBA) Q300系列',href:'#',img:'./img/55d6dcc9N5e641939.jpg',price:'￥449.00'},
				{name:'东芝(TOSHIBA) Q300系列',href:'#',img:'./img/55d6dcc9N5e641939.jpg',price:'￥449.00'},
				{name:'东芝(TOSHIBA) Q300系列',href:'#',img:'./img/55d6dcc9N5e641939.jpg',price:'￥449.00'},]


render1.guessright($('guessright')[0].getElementsByTagName('ul')[0],guessright);


//品质生活

var quamain=[{href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57b50e8bN63c3c7af.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57a46ab9Nd618bcee.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57a46ab9Nd618bcee.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57b071f8Na42c3d99.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57b316e2N89fe7867.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57b50e8bN63c3c7af.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57a46ab9Nd618bcee.jpg',alt:'hello'},
			 {href:'#',title:'新发现',desc1:'星空灰',desc2:'京东独家发售',desc3:'购机赢免单',img:'./img/57a46ab9Nd618bcee.jpg',alt:'hello'}];

var brands=[{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'},
			{href:'#',img:'./img/5763ad44Nd29dc824.jpg',alt:'hello'}];
var banners=[{href:'#',img:'./img/57ad3787N2ad4fd1f.jpg',alt:'hello'},
			 {href:'#',img:'./img/57ada59bN0fb4d8dc.jpg',alt:'hello'},
			 {href:'#',img:'./img/57b27957N81036d7c.jpg',alt:'hello'}]
render1.quamain(document.getElementById('qualife'),quamain,brands,banners);

//主广告

var mainside=[{href:'#',img:'./img/57b5cf13Nbad8e6d7.jpg',alt:'hello'},
			  {href:'#',img:'./img/57b5d06cN0c26228c.jpg',alt:'hello'},
			  {name:'男装',href:'#'},{name:'女装',href:'#'},{name:'内衣',href:'#'},
			  {name:'鞋靴',href:'#'},{name:'箱包',href:'#'},{name:'奢侈',href:'#'},
			  {name:'潮流女装',href:'#'},{name:'潮流女装',href:'#'},{name:'潮流女装',href:'#'},
			  {name:'潮流女装',href:'#'},{name:'潮流女装',href:'#'},{name:'潮流女装',href:'#'},
			  {name:'潮流女装',href:'#'},{name:'潮流女装',href:'#'},{name:'奢品名表',href:'#'},
			  {name:'奢品名表',href:'#'},{name:'奢品名表',href:'#'},{name:'奢品名表',href:'#'},
			  {name:'奢品名表',href:'#'},{name:'奢品名表',href:'#'},{name:'奢品名表',href:'#'},
			  {name:'奢品名表',href:'#'},]


render1.mainSide($('mainside')[0],mainside);

var mainRight0=[{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5cdb8N62297e60.jpg',alt:'hello'},
				{href:'#',img:'./img/57b5ce4cN3a9cc0c6.jpg',alt:'hello'},];

render1.mainRightFirst($('addmain')[0],1,mainRight0);

var mainright1T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright1B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright2T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright2B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright3T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright3B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright4T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright4B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright5T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright5B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright6T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright6B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright7T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright7B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];
var mainright8T=[{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},
				{name:'Bear surfboards 卫衣男开衫连帽冲浪印花欧美运动外套',price:'￥169.00',href:'#',img:'./img/57a96df4N8c2f606e.jpg',alt:'hello'},];
var mainright8B=[{href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},
				 {href:'#',img:'./img/57b5c5c6N8740e689.jpg',alt:'hello'},];

render1.mainRight($('addmain')[0],mainright1T,mainright1B);
render1.mainRight($('addmain')[0],mainright2T,mainright2B);
render1.mainRight($('addmain')[0],mainright3T,mainright3B);
render1.mainRight($('addmain')[0],mainright4T,mainright4B);
render1.mainRight($('addmain')[0],mainright5T,mainright5B);
render1.mainRight($('addmain')[0],mainright6T,mainright6B);
render1.mainRight($('addmain')[0],mainright7T,mainright7B);
render1.mainRight($('addmain')[0],mainright8T,mainright8B);


var mainBanner=[{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},
			{href:'#',img:'./img/57b16e17N7e087228.png',alt:'hello'},];
render1.mainBanner($('botadd')[0],mainBanner);

//事件绑定
render1.bind();



Pace.on('done',function(){
	setTimeout(function(){
		$('mask')[0].style.opacity=0;
		setTimeout(function(){
			$('mask')[0].style.display='none';
		},2000)
	},100);
},['a','b'])