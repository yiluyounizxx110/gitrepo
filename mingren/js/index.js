$(function(){
	initPage();
});
function initPage(){
	
	var width = $(window).width();
	
	$(".carousel_item").width(width);
	$(".carousel_container").removeClass("none");
	
	slider.init();
	
	$(".carousel-indicator .carousel-indicators_item").mouseover(function(){
		slider.stop();
		slider.cur_index = parseInt($(".carousel-indicator .carousel-indicators_item").index($(this))) + 1;
		slider.showIndexSlider(slider.cur_index);
	});
	$(".carousel-indicator .carousel-indicators_item").mouseout(function(){
		slider.init();
	});
	
	$('.header_select_link').hover(function(){
		var $fixBox=$('.fixBox');
    	$fixBox.css({width:$(window).width(),height:$('.carousel_item img').first().height()});
        $('.fixBox').stop().slideDown(300);
    },function(){
        $('.fixBox').stop().slideUp(300,function(){
            $(this).find("*").removeAttr('style');
        });
    });
    
//	
//	window.onresize=function(){
//		slider.stop();
//		slider.init();
//	}
}
var slider = {
	cur_index:1,
	sliderEvent:null,
	init:function(){
		slider.sliderEvent = setInterval(slider.start,3000);
	},
	stop:function(){
		clearInterval(slider.sliderEvent);
	},
	start:function(){
		var index = slider.cur_index;
		var next = index + 1;
		if(index == 3){
			next = 1;
		}
		slider.showIndexSlider(next);
		slider.cur_index = next;
	},
	showIndexSlider:function(index){
		var left = $($(".carousel_container .carousel_item")[0]).width() * (-1) * (index -1);
		$(".carousel_container").animate({'margin-left':left + 'px'},400);
		$($(".carousel-indicator .carousel-indicators_item").get(index-1)).addClass('cur').siblings().removeClass('cur');
	}
}