var from = 0,
    items = $('.container .desc-wapper')
if($.scrollify) {
    $.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "footer",
        easing: "easeInOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: false,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function(to) {
            if(to === 1) {
                setTimeout(function() {
                    items.eq(to).addClass('active')
                }, 200)
                return
            }
            setTimeout(function() {
                items.eq(to).addClass('active')
            }, 500)
            setTimeout(function() {
                items.not(items.eq(to)).removeClass('active')
            }, 400)
        },
        after:function(to) {
            if(to === 1) {
                items.not(items.eq(to)).removeClass('active')
            }
            // setTimeout(function() {
            //     $('.container .desc-wapper').eq(item).removeClass('active')
            // }, 200)
        },
        afterResize:function(item) {
    
        },
        afterRender:function(item) {
            console.log(item, 'hehe')
        }
    });
}
var toArr = ['one', 'two', 'three', 'four']
$('.move-to').each(function(item) {
    $(this).click(function() {
        $.scrollify.move("#" + toArr[item]);
    })
})
$('.movie-togle li').each(function(item) {
    $(this).click(function() {
        $('.movie').removeClass('movie-active')
        $('.movie').eq(item).addClass('movie-active')
    })
})


$('.product-btn').mouseenter(function(e) {
    console.log(e.target)
    $('.product-list').css({
        height: '200px'
    })
    $('.product-list-item').each(function(item) {
        var $this = $(this)
        setTimeout(function() {
            $this.addClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn').mouseleave(function(event) {
    console.log(event)

    $('.product-list').css({
        height: '0'
    })
    
})
$('.product-list').mouseenter(function(e) {
    $('.product-list').css({
        height: '200px'
    })
    $('.product-list-item').addClass('active')
})
$('.product-list').mouseleave(function(e) {
    $('.product-list').css({
        height: '0'
    })
    $('.product-list-item').each(function(item) {
        console.log(item)
        console.log(this)
        var $this = $(this)
        setTimeout(function() {
            $this.removeClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn-side').mouseenter(function() {
    $('.product-list-item').each(function(item) {
        var $this = $(this)
        setTimeout(function() {
            $this.removeClass('active')
        }, 50 * (item+1))
    })
})

$('.item-1 .switch-4 span').each(function(item) {
    console.log(item,$(this))
    $(this).click(function() {
        console.log('hehe')
        if(item === 0) {
            $(this).addClass('span-active')
            $('.item-1 .switch-4 span').eq(1).removeClass('span-active')
            $('.gold4-img-1').addClass('active')
            $('.siliver4-img-1').removeClass('active')
            $('.item-1 .img-wapper').removeClass('img-active')
        }
        if(item === 1) {
            $(this).addClass('span-active')
            $('.item-1 .switch-4 span').eq(0).removeClass('span-active')
            $('.siliver4-img-1').addClass('active')
            $('.gold4-img-1').removeClass('active')
            $('.item-1 .img-wapper').addClass('img-active')
        }
    })
})