$(function () {
    setInterval(function () {
        $('.main__visual').children('div').removeClass('mask__group');
    }, 5500);
    setInterval(function () {
        $('.main__visual').children('div').addClass('mask__group');
    }, 5600);
})