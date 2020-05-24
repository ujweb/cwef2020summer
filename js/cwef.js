$(function () {
    var mainVisualWidth = $('.main__visual--blank').outerWidth();
    $('.mask__action svg').width(mainVisualWidth);
    $(window).load(function () {
        $('.main__visual').children('div').addClass('mask__group');
        setInterval(function () {
            $('.main__visual').children('div').removeClass('mask__group');
        }, 5500);
        setInterval(function () {
            $('.main__visual').children('div').addClass('mask__group');
        }, 5600);
    })
})