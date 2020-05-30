$(function() {
    var mainVisualWidth = $('.main__visual--blank').outerWidth();
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
        $('nav').slideToggle();
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
})