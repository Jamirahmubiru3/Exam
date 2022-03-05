$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $(this).togglerClass('open');
$(',top-nav').togglerClass('open');
    });
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')
    })
})
