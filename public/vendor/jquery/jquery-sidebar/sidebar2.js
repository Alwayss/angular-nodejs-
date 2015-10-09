$(function(){
    $(".first").hover(function(){
        $(".sidebar").css("display","block")
    });
    $(".sidebar").hover(function(){
        $(this).css("display","block")
    },function(){
        $(this).css("display","none")
    });

});