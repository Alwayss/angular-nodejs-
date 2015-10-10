// JavaScript Document

//侧边栏
$(document).ready(function(){
	$(".first").live('hover',function(){
		$(".sidebar").css("display","block")
	});
	$(".sidebar").live('mouseenter',function(){
		$(this).css("display","block");
	}).live('mouseleave',function(){
		$(this).css("display","none");
	});
	$(".sidebar li").live('mouseenter',function(){
		$(this).find("dl").css("display","block");
	}).live('mouseleave',function(){
		$(this).find("dl").css("display","none");
	});

});
