// JavaScript Document
/*侧边栏*/
/*焦点轮播*/	
$(function(){

    $(".sidebar li").hover(function(e) {

        $(this).find("dl").css("display","block");
    },function(){
        $(this).find("dl").css("display","none");
    });
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

//