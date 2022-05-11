$(document).ready(function()
{
    $('.carousel').carousel({
         interval:6000
    });

    // show color option div when click on the gear

    $(".fa-gear").click(function() {
        $(".color-option").fadeToggle();
    });
    // change theme color on click
    var colorLi = $('.color-option ul li');
    colorLi
        .eq(0).css('backgroundColor', '#df0202').end()
        .eq(1).css('backgroundColor', '#0895d1').end()
        .eq(2).css('backgroundColor', '#953767').end()
        .eq(3).css('backgroundColor', '#4f9132').end()
        .eq(4).css('backgroundColor', '#8e16fd');

    colorLi.click(function (){
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));
    });
});