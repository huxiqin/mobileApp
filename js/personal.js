$(document).ready(function () {
    
    $('#proCollect').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.collContent').children(':first-child').show().siblings().hide();
        
    });
   
    $('#blindCollect').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.collContent').children(':last-child').show().siblings().hide();
    });
})