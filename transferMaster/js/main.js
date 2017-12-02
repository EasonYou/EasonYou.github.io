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
                    setTimeout(function() {
                        items.eq(to).find('.desc-text').addClass('active-text')
                        items.eq(to).find('.icon-wapper').addClass('active-icon')
                    }, 900)
                    items.eq(to).addClass('active')
                }, 200)
                return
            }
            setTimeout(function() {
                setTimeout(function() {
                    items.eq(to).find('.desc-text').addClass('active-text')
                    setTimeout(function() {
                        items.eq(to).find('.icon-wapper').addClass('active-icon')
                    })
                }, 700)
                items.eq(to).addClass('active')
            }, 500)
            setTimeout(function() {
                items.not(items.eq(to)).find('.icon-wapper').removeClass('active-icon')
                items.not(items.eq(to)).find('.desc-text').removeClass('active-text')
                items.not(items.eq(to)).removeClass('active')
            }, 400)
        },
        after:function(to) {
            if(to === 1) {
                items.not(items.eq(to)).find('.icon-wapper').removeClass('active-icon')
                items.not(items.eq(to)).find('.desc-text').removeClass('active-text')
                items.not(items.eq(to)).removeClass('active')
            }
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
$('.list-container .list-item .other-specic').click(function () {
    $('.pop-container').css({display: 'block'})
})
$('.pop-container .list-item-header span').click(function () {
    $('.pop-container').css({display: 'none'})
})

$(document).scroll(function() {
    $('#product section').each(function(index, item) {
        // console.log(item, index)
        var flag = false
        var rect = item.getBoundingClientRect()
        var $item = $(item)
        if (rect.y < rect.height/3*2 && rect.y > -rect.height/3*2) {
            $item.find('.desc-wapper').addClass('active')
            flag = true
            setTimeout(function() {
                if (flag) {
                    var text = $item.find('.desc-text')
                    if (!text.hasClass('active-text')) {
                        text.addClass('active-text')
                    }
                }
                setTimeout(function() {
                if (flag) {
                    var icon = $item.find('.icon-wapper')
                    if (!icon.hasClass('active-icon')) {
                        icon.addClass('active-icon')
                    }
                }
                }, 300)
            }, 700)
        } else {
            flag = false
            var text = $item.find('.desc-text')
            var icon = $item.find('.icon-wapper')
            $item.find('.desc-wapper').removeClass('active')
            if (text.hasClass('active-text')) {
                text.removeClass('active-text')
            }
            if (icon.hasClass('active-icon')) {
                icon.removeClass('active-icon')
            }
        }
    })
})