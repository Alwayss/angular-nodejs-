/**
 * Created by admin on 2015/9/29.
 */
$(function(){
    $(".prev,.next").hover(function(){
        $(this).stop(true,false).fadeTo("show",0.9);
    },function(){
        $(this).stop(true,false).fadeTo("show",0.4);
    });

    $(".banner-box").slide({
        mainCell:".bd ul",
        effect:"fold",
        interTime:3500,
        delayTime:500,
        autoPlay:true,
        autoPage:true,
        trigger:"click"
    });
});