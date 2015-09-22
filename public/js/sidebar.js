// JavaScript Document
/*侧边栏*/
$(function(){
	$(".sidebar li").hover(function(e) {
       $(this).find("dl").css("display","block"); 
    },function(){
		$(this).find("dl").css("display","none");
		});
	})
	
/*焦点轮播*/	
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

<<<<<<< HEAD
});//nimenhao
=======
});
//测试使用测试使用
>>>>>>> 1cc5c3404c46fde49c1b90e4cee54a7462de906a
