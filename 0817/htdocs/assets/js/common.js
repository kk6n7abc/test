$(function(){

	//PCグロナビ　ドロップダウン
	$(".s-nav").on({
		mouseenter:function(){
			$(this).children(".s-nav-block").stop().fadeIn("fast");
		},
		mouseleave:function(){
			$(this).children(".s-nav-block").stop().fadeOut("fast");
		}
	});

	//SPメニュー
	$(".menu-op-btn > img").click(function(){
		$("body").append('<div class="menu-bg cl"></div>').css("overflow","hidden");
		$(".menu-box").animate({
			left:0
		});
	});
	$(".o-menu").click(function(){
		$(this).children(".u-menu").toggle();
		$(this).toggleClass("open-menu");
	});
	$(".cl,.menu-bg").click(function(){
		$(".menu-bg").remove();
		$(".menu-box").animate({
			left:'-' + 290
		});
		$("body").css("overflow","visible");
	});
});