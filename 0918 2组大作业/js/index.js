$(function () {
    document.querySelector('.late-con .active').click()
    //初始化Swipper
    var mySwiper1 = new Swiper('.swiper-container1', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 5,
        loopAdditionalSlides: 3,
        mousewheel: true,
        spaceBetween: 15,

        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    })
    var mySwiper2 = new Swiper('.swiper-container2', {
        // direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        slidesPerView: 2,
        spaceBetween: 60,
        // loopAdditionalSlides : 3,
        // mousewheel: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    })
    var mySwiper3 = new Swiper('.swiper-container3', {
        // direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        slidesPerView: 3,
        spaceBetween: 30,
        // loopAdditionalSlides : 3,
        // mousewheel: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination1',
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    })

    function hasClass(ele, className) {
        var newArr = ele.className.split(' ')
        return newArr.includes(className)
    }
    function addClass(ele, className) {
        if (!hasClass(ele, className)) {
            ele.className = ele.className ? ele.className + ' ' + className : className
        }
    }
    function removeClass(ele, className) {
        if (hasClass(ele, className)) {
            var eleClassName = ' ' + ele.className + ' '
            var re = new RegExp(` ${className}(?= )`, 'g')
            ele.className = eleClassName.replace(re, '').trim()
        }
    }
    new WOW().init();

    //往下滑动 header移出 返回顶部出现
    window.onscroll = function () {
        var topdis = document.documentElement.scrollTop
        var header = document.querySelector('.header-bot')
        if (topdis > 52) {
            addClass(header, 'headerfix')
        } else {
            removeClass(header, 'headerfix')
        }
        if (topdis > 650) {
            document.querySelector('.backtop').style.display = 'block'
        } else {
            document.querySelector('.backtop').style.display = 'none'
        }
    }
    //返回顶部
    $('.backtop').click(function () {
        $('html').stop().animate({ scrollTop: 0 }, 500)
    })

    //navbar 划入hover 效果
    $('.navbar>ul>li').hover(function () {
        $(this).find('.dropdown').css({ 'display': 'block', 'opacity': '1' })
    }, function () {
        $(this).find('.dropdown').css({ 'display': 'none', 'opacity': '0' })
    })

    //轮播图
    var index = 0
    var itemEles = document.querySelectorAll('.banner .item')
    function removeItemClass() {
        for (var i = 0; i < itemEles.length; i++) {
            if (hasClass(itemEles[i], 'active')) {
                removeClass(itemEles[i], 'active')
                removeClass(liEles[i], 'active')
                itemEles[i].style.display = 'none'
            }
        }
    }
    // 下一个
    document.querySelector('.banner-next').onclick = function (event) {
        event.preventDefault()
        if (index < itemEles.length - 1) {
            index++
        } else {
            index = 0
        }
        removeItemClass()
        itemEles[index].style.display = 'block'
        setTimeout(function(){
            addClass(itemEles[index], 'active')
        }, 10);
        addClass(liEles[index], 'active')
        // itemEles[index].fadeIn()
    }
    //上一个
    document.querySelector('.banner-prev').onclick = function (event) {
        event.preventDefault()
        if (index > 0) {
            index--
        } else {
            index = itemEles.length - 1
        }
        removeItemClass()
        itemEles[index].style.display = 'block'
        setTimeout(function(){
            addClass(itemEles[index], 'active')
        }, 10);
        addClass(liEles[index], 'active')
    }
    //分页器
    var liEles = document.querySelectorAll('.banner-nav li')
    for (var i = 0; i < liEles.length; i++) {
        liEles[i].index = i
        liEles[i].onclick = function () {
            index = this.index
            for (var j = 0; j < liEles.length; j++) {
                if (hasClass(liEles[j], 'active')) {
                    removeClass(liEles[j], 'active')
                    removeClass(itemEles[j], 'active')
                    itemEles[j].style.display = 'none'
                }
            }
            addClass(this, 'active')
            itemEles[index].style.display = 'block'
            setTimeout(function(){
                addClass(itemEles[index], 'active')
            }, 10);
        }
    }
    //自动播放
    var autoplay = setInterval(function () {
        document.querySelector('.banner-next').click()
    }, 7000)
    // var timetiaoEles = document.querySelectorAll('.banner .item .timetiao>div')
    // var autoplay1 = setInterval(function () {
    //     if (timetiaoEles[index].style.width != '100') {
    //         timetiaoEles[index].style.width = timetiaoEles[index].style.width * 1 + 1
    //     }
    // }, 200)
    //     timetiaoEles[index].style.width = timetiaoEles[index].style.width + 'px'


    //首页数字增加
    $('.countup').counterUp({
        delay: 5,
        time: 2000
    });

    // init Isotope
    var $container = $('#container').isotope({
        // options
    });
    // filter items on button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

})