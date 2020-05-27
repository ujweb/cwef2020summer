$(function () {
    var mainVisualWidth = $('.main__visual--blank').outerWidth();
    $('.mask__action svg').width(mainVisualWidth);
    $(window).load(function () {
        $('.main__visual').children('div').addClass('mask__group');
        setInterval(function () {
            $('.main__visual').children('div').removeClass('mask__group');
        }, 5600);
        setInterval(function () {
            $('.main__visual').children('div').addClass('mask__group');
        }, 5700);
    })
    $('.slider--opening').slick({
        dots: false,
        infinite: true,
        speed: 500,
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
        cssEase: 'linear'
    });
})