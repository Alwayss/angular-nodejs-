/**
 * Created by admin on 2015/9/30.
 */
$(function(){

    $(".car").live('click',function(){
        $(".up").css("display","block")
    });
    $(".up h4 img").live('click',function(){
        $(".up").css("display","none")
    })
});