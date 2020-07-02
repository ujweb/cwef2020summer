$(function() {
    var width = $(window).width(),
        height = $(window).height(),
        mainVisualWidth = $('.main__visual--blank').outerWidth(),
        iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null),
        Android = (navigator.userAgent.match(/android/i) != null),
        iPad = navigator.userAgent.match(/iPad/i) != null,
        trendItem = $('.trend-group').children('.trend-item');
    $('.mask__action svg').width(mainVisualWidth);
    $('.main__visual').children('div').addClass('mask__group');
    setInterval(function() {
        $('.main__visual').children('div').removeClass('mask__group');
    }, 5600);
    setInterval(function() {
        $('.main__visual').children('div').addClass('mask__group');
    }, 5700);
    $('.slider--opening').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow: '<div class="slider__navi slider__navi--prev"><i class="icon icon-arrow-left"></i></div>',
        nextArrow: '<div class="slider__navi slider__navi--next"><i class="icon icon-arrow-right"></i></div>',
        cssEase: 'linear'
    });
    $('.slider--intro').slick({
        dots: false,
        infinite: false,
        speed: 500,
        prevArrow: '<div class="slider__navi slider__navi--prev"><i class="icon icon-arrow-left"></i></div>',
        nextArrow: '<div class="slider__navi slider__navi--next"><i class="icon icon-arrow-right"></i></div>',
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1199,
            settings: {
                dots: true,
                prevArrow: '<div class="slider__navi slider__navi--prev"><i class="icon icon-arrow-left"></i></div>',
                nextArrow: '<div class="slider__navi slider__navi--next"><i class="icon icon-arrow-right"></i></div>'
            }
        }]
    });
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('nav').slideToggle();
    });
    $('nav a').click(function() {
        if (iPhone || Android || iPad) {
            $('nav').slideToggle();
        }
        $('.hamburger').toggleClass('active');
    });
    $('.trend-more').click(function() {
        $(this).slideUp();
        $(this).parent().siblings('.trend-essay').children('p').slideDown();
    });
    $('a.smooth-scroll').click(function() {
        if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });
    $(".speaker-more").click(function() {
        var speakerName = $(this).data('name'),
            speaker = "";
        for (var i = 0; i < data.length; i++) {
            if (speakerName == data[i]["speakerName"]) {
                speaker += '<img class="message-img" src="assets/images/' + data[i]["speakerImg"];
                speaker += '.jpg" alt="' + data[i]["speakerName"];
                speaker += '"><div class="message-name serif font-28 font-weight-700 text-center">' + data[i]["speakerName"];
                speaker += '</div><div class="message-title font-18 text-center">' + data[i]["speakerInfo"];
                speaker += '</div><div class="message-essay">' + data[i]["speakerIntro"];
                speaker += '</div>'
            }
        }
        $('.message-content').html(speaker);
        $('.message').fadeIn();;
        return false;
    });
    $('.message-content').click(function(e) {
        e.stopPropagation();
    })
    $('.message').click(function() {
        $('.message').fadeOut();;
    })
    $(window).load(function() {});
    $(window).resize(function() {
        $('nav a').click(function() {
            if (iPhone || Android || iPad) {
                $('nav').slideToggle();
            }
        });
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        $('.trend-item').each(function() {});
        for (let i = 0; i < trendItem.length; i++) {
            if (i < trendItem.length - 1) {
                if ((scroll >= ($('.trend-item').eq(i).offset().top - (height / 2))) && (scroll < ($('.trend-item').eq(i + 1).offset().top - (height / 2)))) {
                    $('.trend-item').eq(i).addClass('active')
                } else {
                    $('.trend-item').eq(i).removeClass('active')
                }
            } else {
                if ((scroll >= ($('.trend-item').eq(i).offset().top - (height / 2))) && (scroll < ($('.trend-item').eq(i).offset().top))) {
                    $('.trend-item').eq(i).addClass('active')
                } else {
                    $('.trend-item').eq(i).removeClass('active')
                }
            }
        }
    });
})