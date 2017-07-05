var timer = null;

function initPage(){
	
	var width = $(window).width();
	var height = width * 559 / 1349;
	$(".carousel_item").width(width);
	$(".carousel_container").removeClass("none");
	//轮播初始化
	slider.init();
	
	$(".carousel-indicator .carousel-indicators_item").mouseover(function(){
		slider.stop();
		slider.cur_index = parseInt($(".carousel-indicator .carousel-indicators_item").index($(this))) + 1;
		slider.showIndexSlider(slider.cur_index);
	});
	$(".carousel-indicator .carousel-indicators_item").mouseout(function(){
		slider.init();
	});
}

function initLabel(){
	var width = $(window).width();
	var height = width * 559 / 1349;
	
    $.getJSON("js/joblabel.json",function(data){
    	var $BNavH="<div class='BNav'>",_navCenter="";
        for(var i=0;i<data.length;i++){
            $BNavH+="<span data-index='"+ data[i].id +"'>"+data[i].name+"</span>";
            _navCenter+="<div class='navCenter'><div class='navName'>名称</div><div class='navCenterBox'><div class='navCenterList'>";
            var navCenterListCh="";
            if(data[i].data != null){
            	for(var n=0;n<data[i].data.length;n++){
	                _navCenter+="<span data-index='"+ data[i].data[n].id +"'>"+data[i].data[n].name+"</span>";
	                
	                navCenterListCh+="<div class='navCenterListCenter'>";
	                for(var j=0;j<data[i].data[n].data.length;j++){
	                    navCenterListCh+="<i data-index='"+ data[i].data[n].data[j].id +"'>"+data[i].data[n].data[j].name+"</i>"
	                }
	                navCenterListCh+="</div>"
	            }
            }
            _navCenter+="</div></div><div class='navRightBox'>"+ navCenterListCh +"</div></div>";
        }
        $BNavH+="<i></i></div>";
        $('.header_select_link .fixCenter').html($BNavH+_navCenter);
    });
    
    $('.header_select_link').hover(function(){
		var $fixBox=$('.header_select_link .fixBox');
    	$fixBox.css({width:$(window).width(),height:height});
        $fixBox.stop().slideDown(300);
    },function(){
        $('.header_select_link .fixBox').stop().slideUp(300,function(){
			$('.header_select_link .fixBox').css("display",'none')
        });
    });
    
    var $body=$('body');
    $body.on('click','.BNav span',function(){
        var _this=$(this);
        var i=_this.index();
        _this.parent().hide();
        $('.navCenter').eq(i).show().siblings('.navCenter').hide().end().find('.navName').text(_this.text());
    }).on('click','.navCenterListCenter i',function(){
    	//此处获取点击的标签
        console.log($(this).text())
    }).on('mouseenter','.navCenterList span',function(){
        var i=$(this).index();
        $(this).parent().parent().siblings('.navRightBox').find(".navCenterListCenter")
			   .eq(i).stop().slideDown(300).siblings('.navCenterListCenter').hide();
    })
}

function initAreaSelect(){
	var width = $(window).width();
	var height = width * 559 / 1349;
	//悬浮展示
	$('.area').hover(function(){
		var $fixBox=$('.area .fixBox');
    	$fixBox.css({width:width,height:height});
        $fixBox.stop().slideDown(300);
    },function(){
        $('.area .fixBox').stop().slideUp(300,function(){
			$('.area .fixBox').css("display",'none')
        });
    });
    //数据初始化
    $.getJSON("js/area.json",function(data){
    	var html = "";
		if(data.length > 0){
			for(var i = 0; i < data.length;i ++){
				var section_warpper = "<div class='section_warpper'>";
				var section = data[i];
				section_warpper += "<div class='area_section' data-index='"+ section.id +"'>"+ section.name +"</div>"
				
				if(section.data != null && section.data.length > 0){
					section_warpper += "<div class='province_wrapper_container'>";
					
					for(var j = 0; j < section.data.length; j ++){
						var province_wrapper = "<div class='province_wrapper'>";
						var province = section.data[j];
						if(province.id == null){
							province_wrapper += "<div class='area_province_empty'></div>";
						}else{
							province_wrapper += "<div class='area_province' data-index='" + province.id + "'>"+ province.name +"</div>";
						}
						
						if(province.data != null && province.data.length > 0){
							province_wrapper += "<div class='city_wrapper'>";
							
							for(var m = 0; m < province.data.length ; m ++){
								province_wrapper += "<div class='city_item' data-index='"+ province.data[m].id +"'>" + province.data[m].name + "</div>"
							}
							
							province_wrapper += "</div>"
						}
						
						province_wrapper += "</div>";
						
						section_warpper += province_wrapper;
					}
					
					section_warpper += "</div>"
					section_warpper += "<div class='clear'></div>"
				}
				
				section_warpper += "</div>";
				html += section_warpper;
			}
		}
		$('.area .fixCenter').html(html);
		var area_id = $(".area_text").attr("data-index");
    	$(".area .fixCenter [data-index='" + area_id + "']").addClass("current");
	});
	//
    $("body").on("click",".area .city_item",function(){
    	var dataid = $(this).attr("data-index");
    	var datatext = $(this).text();
    	$(".area .city_item").not(this).removeClass("current");
    	$(this).addClass("current");
    	$(".area .area_text").attr("data-index",dataid);
    	
    	var provinceW = $(this).parents(".province_wrapper").first();
    	var provinceText;
    	if(provinceW.find(".area_province_empty").length > 0){
    		provinceText = "-";
    	}else if(provinceW.find(".area_province").length > 0){
    		provinceText = "-" + provinceW.find(".area_province").text() + "-";
    	}
    	
    	$(".area .area_text").text("中国" + provinceText + datatext);
    })
}
/**登录注册信息**/
function initLoginInfo(){
	var width = $(window).width();
	var height = width * 559 / 1349;
	//下拉悬浮层
	$('.unlogin').hover(function(){
		var $fixBox=$('.unlogin .fixBox');
    	$fixBox.css({width:width,height:height});
        $fixBox.stop().slideDown(300);
        $fixBox.show();
    },function(){
        $('.unlogin .fixBox').stop().slideUp(300,function(){
			$('.unlogin .fixBox').css("display",'none');
        });
    });
    
    //按钮跳转
    $("body").on("click",'.login_form .reg_btn',function(){
    	$(".login_form ").addClass("none");
    	$(".reg_form ").removeClass("none");
    });
    $("body").on("click",'.reg_form .login_btn',function(){
    	$(".reg_form ").addClass("none");
    	$(".login_form ").removeClass("none");
    });
    
    $("body").on("click",".sendconf",function(){
    	if($(this).hasClass("disabled")){
    		return false;
    	}
    	$(this).html("<span>60</span>s");
    	$(this).addClass("disabled");
    	timer = setInterval(calcutetime60,1000); 
    });
}    

function calcutetime60(){
	var time = parseInt($("body .sendconf span").html());
	if(time == 1){
		clearInterval(timer);
		timer = null;
		$("body .sendconf").html("发送验证");
		$("body .sendconf").removeClass("disabled");
		return false;
	}
	$("body .sendconf span").html(time - 1);
}
/**轮播**/
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

/**发帖按钮时间初始化**/
function initSendBtnEvent(){
	$(window).scroll(function () {
		if($("body").scrollTop() >= 101){
			$(".fixed_nav_btn").removeClass("none");
		}else{
			$(".fixed_nav_btn").addClass("none");
		}
	});
	
	$(".fixed_nav_btn .send_article").click(function(){
		if($(this).hasClass("active")){
			return false;
		}
		$(this).addClass("active");
		$(".fixed_nav_btn_h_group").removeClass("none");
	});
}
