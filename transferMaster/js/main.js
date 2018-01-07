
$('img').lazyload({
    effect : "fadeIn",
    threshold : 1000
})
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
// var toArr = ['one', 'two', 'three', 'four']
// $('.product-header').each(function() {
//     $(this).find('a').each(function(index) {
//         $(this).click(function() {
//             $.scrollify.move("#" + toArr[index]);
//         })
//     })
// })
$('.move-to').each(function(item) {
    $(this).click(function() {
        $.scrollify.move("#" + toArr[item]);
    })
})
$('.movie-togle li').each(function(item) {
    $(this).click(function() {
        $('.movie').removeClass('movie-active')
        $('.movie').eq(item).addClass('movie-active')
        $('.movie-togle li').find('a').removeClass('active')
        $(this).find('a').addClass('active')
    })
})


$('.product-btn').mouseenter(function(e) {
    console.log(e.target)
    $('.product-list').addClass('product-list-hover')
    $('.product-list-item').each(function(item) {
        var $this = $(this)
        setTimeout(function() {
            $this.addClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn').mouseleave(function(event) {
    $('.product-list').removeClass('product-list-hover')
    
})
$('.product-list').mouseenter(function(e) {
    $(this).addClass('product-list-hover').find('.product-list-item').addClass('active')
})
$('.product-list').mouseleave(function(e) {
    $(this).removeClass('product-list-hover').find('.product-list-item').each(function(item) {
        console.log(item)
        console.log(this)
        var $this = $(this)
        setTimeout(function() {
            $this.removeClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn-1').mouseenter(function(e) {
    $('.product-list-1').addClass('product-list-hover').find('.product-list-item').each(function(item) {
        var $this = $(this)
        setTimeout(function() {
            $this.addClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn-1').mouseleave(function(event) {
    $('.product-list-1').removeClass('product-list-hover')
})
$('.product-list-1').mouseenter(function(e) {
    $(this).addClass('product-list-hover').find('.product-list-item').addClass('active')
})
$('.product-list-1').mouseleave(function(e) {
    $(this).removeClass('product-list-hover').find('.product-list-item').each(function(item) {
        console.log(item)
        console.log(this)
        var $this = $(this)
        setTimeout(function() {
            $this.removeClass('active')
        }, 50 * (item+1))
    })
})
$('.product-btn-side').each(function(index) {
    $(this).mouseenter(function() {
        console.log(index)
        var i = index === 0 ? '' : '-1'
        $('.product-list' + i).find('.product-list-item').each(function(item) {
            var $this = $(this)
            setTimeout(function() {
                $this.removeClass('active')
            }, 50 * (item+1))
        })
    })
})

$('.item-1').each(function() {
    var item1 = $(this)
    item1.find('.switch-4 span').each(function(item) {
        console.log(item,$(this))
        var click = $(this)
        click.click(function() {
            if(item === 0) {
                click.addClass('span-active')
                item1.find('.switch-4 span').eq(1).removeClass('span-active')
                item1.find('.gold4-img-1').addClass('active')
                item1.find('.siliver4-img-1').removeClass('active')
                item1.find('.img-wapper').removeClass('img-active')
            }
            if(item === 1) {
                click.addClass('span-active')
                item1.find('.switch-4 span').eq(0).removeClass('span-active')
                item1.find('.siliver4-img-1').addClass('active')
                item1.find('.gold4-img-1').removeClass('active')
                item1.find('.img-wapper').addClass('img-active')
            }
        })
    })
})
$('.list-container .list-item .other-specic').click(function () {
    $('.pop-container').css({display: 'block'})
})
$('.pop-container .list-item-header span').click(function () {
    $('.pop-container').css({display: 'none'})
})

$(document).scroll(function(e) {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    if (scrollTop >= 20) {
        if ($('.scroll-top').hasClass('hidden-scroll')) {
            $('.scroll-top').removeClass('hidden-scroll')
        }
        if (!$('header').hasClass('hidden')) {
            $('header').addClass('hidden')
        }
        if (!$('.fixtop').hasClass('hidden')) {
            $('.fixtop').addClass('hidden')
        }
        if (!$('.product-list').hasClass('product-list-scroll')) {
            $('.product-list').addClass('product-list-scroll')
        }
        if (!$('.product-list-1').hasClass('product-list-scroll')) {
            $('.product-list-1').addClass('product-list-scroll')
        }
    } else {
        if (!$('.scroll-top').hasClass('hidden-scroll')) {
            $('.scroll-top').addClass('hidden-scroll')
        }
        if ($('.fixtop').hasClass('hidden')) {
            $('header').removeClass('hidden')
        }
        if ($('.fixtop').hasClass('hidden')) {
            $('.fixtop').removeClass('hidden')
        }
        if ($('.product-list').hasClass('product-list-scroll')) {
            $('.product-list').removeClass('product-list-scroll')
        }
        if ($('.product-list-1').hasClass('product-list-scroll')) {
            $('.product-list-1').removeClass('product-list-scroll')
        }
    }
    $('#product section').each(function(index, item) {
        // console.log(item, index)
        var flag = false
        var rect = item.getBoundingClientRect()
        var $item = $(item)
        if (rect.top < rect.height/3*2 && rect.top > -rect.height/3*2) {
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
$('.item-test3 .icon-wapper span').each(function (item) {
    $(this).click(function() {
        $('.item-test3 .icon-wapper span').removeClass('span-active')
        $(this).addClass('span-active')
        if (item === 0) {
            $('.item-test3 .img-wapper').removeClass('siliver')
        }
        if (item === 1) {
            $('.item-test3 .img-wapper').addClass('siliver')
        }
    })
})

$('.scroll-top').click(function() {
    if ($.scrollify) {
        $.scrollify.move("#one")
        return
    }
    $("html,body").animate({scrollTop:0}, 500);
})


$('.product-item-img').each(function() {
    var wapper = $(this)
    $(this).find('.cotrol-wapper').each(function (item) {
        console.log(this)
        $(this).find('span').each(function(index) {
            $(this).click(function() {
                if (index === 0) {
                    wapper.find('img').eq(0).removeClass('left')
                    wapper.find('img').eq(1).addClass('right')
                }
                if (index === 1) {
                    wapper.find('img').eq(0).addClass('left')
                    wapper.find('img').eq(1).removeClass('right')
                }
            })
        })
    })
})

$(window).on('load', function () {
    resize()
})
$(document).ready(function() {
    console.log($().owlCarousel)
    if ($().owlCarousel) {
        console.log('ready')
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:50,
            // nav:true,
            items: 1,
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
    }
    var hash = window.location.hash
    if (!hash || hash === '#one') {
        console.log(hash)
        setTimeout(function() {
            setTimeout(function() {
                items.eq(0).find('.desc-text').addClass('active-text')
                items.eq(0).find('.icon-wapper').addClass('active-icon')
            }, 900)
            items.eq(0).addClass('active')
        }, 200)
    } else {
        console.log(hash)
        $.scrollify.move(hash);
    }
})

$(window).resize(function() {
    resize()
});
$('.pop-confirm').click(function(e) {
    if (e.target === $(this)[0]) {
        $(this).css({display: 'none'})
        $('.is-check')[0].checked = false
    }
})
var flag = 0
$('.buy-btn').each(function(index) {
    $(this).click(function() {
        flag = index
        $('.pop-confirm').css({display: 'block'})
    })
})
$('.buy-confirm').click(function() {
    console.log($('.is-check')[0].checked)
    if (($('.is-check')[0].checked)) {
        if (flag === 0) {
            location.href = 'http://www.ktkt.com/buy/kingtrader-single-quarter'
        }
        if (flag === 1) {
            location.href = 'http://www.ktkt.com/buy/kingtrader-single'
        }
    } else {
        alert('请确认已阅读!')
    }
})
function resize () {
    var windowScale = $(window).width() / $(window).height()
    $('.bg-img').each(function(img) {
        var scale = $(this).width() / $(this).height()
        if (windowScale >= scale) {
            $(this).addClass('fill-width')
        } else {
            $(this).removeClass('fill-width')
        }
    })
}
