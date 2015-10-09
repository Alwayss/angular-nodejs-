// JavaScript Document
/*侧边栏*/
/*焦点轮播*/	
/*$(function(){

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
	$('header').click(function(){
		console.log($(".sidebar").html());
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
});*/
$(document).ready(function(){
	/*$(".sidebar li").on('onmouseover',function(e) {

		$(this).find("dl").css("display","block");
	});function(){
		$(this).find("dl").css("display","none");
	});*/
	$('.sidebar li').live('mouseenter',function(){
		$(this).find("dl").css("display","block");
	}).live('mouseleave',function(){
		$(this).find("dl").css("display","none");
	});
	$(".prev,.next").on('hover',function(){
		$(this).stop(true,false).fadeTo("show",0.9);
	},function(){
		$(this).stop(true,false).fadeTo("show",0.4);
	});
	$('header').click(function() {
		console.log($(".w990").html());
	});
	$('.sidebar li').live('click',function(){
		alert('dsda');
	})
});
//