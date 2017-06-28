$(function(){
	initPage();
	initLabel();
	initAreaSelect();
	initLoginInfo();
});
function initPage(){
	
	var width = $(window).width();
	
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
	var data={
        code:0,
        data:[
            {
                name:"职业标签",
                data:[
                    {
                        name:"农业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"林业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"钢铁业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业2",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业3",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业4",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业5",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    }
                ]
            },{
                name:"兴趣标签",
                data:[
                    {
                        name:"电子",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"饮食",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"服装",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"玩具",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"电影",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"小说",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"手工",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    }
                ]
            },{
                name:"随机标签",
                data:[
                    {
                        name:"农业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"林业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"钢铁业",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业2",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业3",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业4",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    },{
                        name:"农业5",
                        data:["aaasfd","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321","dsfas","klkl","12321"]
                    }
                ]
            }
        ]
    };
    if(data.code==0){
        var $BNavH="<div class='BNav'>",_navCenter="";
        for(var i=0;i<data.data.length;i++){
            $BNavH+="<span>"+data.data[i].name+"</span>";
            _navCenter+="<div class='navCenter'><div class='navName'>名称</div><div class='navCenterBox'><div class='navCenterList'>";
            var navCenterListCh="";
            for(var n=0;n<data.data[i].data.length;n++){
                _navCenter+="<span>"+data.data[i].data[n].name+"</span>";
                navCenterListCh+="<div class='navCenterListCenter'>";
                for(var j=0;j<data.data[i].data[n].data.length;j++){
                    navCenterListCh+="<i>"+data.data[i].data[n].data[j]+"</i>"
                }
                navCenterListCh+="</div>"

            }
            _navCenter+="</div>"+navCenterListCh+"</div></div>";
        }
        $BNavH+="<i></i></div>";
        $('.header_select_link .fixCenter').html($BNavH+_navCenter);
    }
    
    $('.header_select_link').hover(function(){
		var $fixBox=$('.header_select_link .fixBox');
    	$fixBox.css({width:$(window).width(),height:$('.carousel_item img').first().height()});
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
        $(this).parent().siblings('.navCenterListCenter').eq(i).stop().slideDown(300).siblings('.navCenterListCenter').hide();
    })
}

function initAreaSelect(){
	$('.area').hover(function(){
		var $fixBox=$('.area .fixBox');
    	$fixBox.css({width:$(window).width(),height:$('.carousel_item img').first().height()});
        $fixBox.stop().slideDown(300);
    },function(){
        $('.area .fixBox').stop().slideUp(300,function(){
			$('.area .fixBox').css("display",'none')
        });
    });
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
	})
    
}

function initLoginInfo(){
	$('.unlogin').hover(function(){
		var $fixBox=$('.unlogin .fixBox');
    	$fixBox.css({width:$(window).width(),height:$('.carousel_item img').first().height()});
        $fixBox.stop().slideDown(300);
        $fixBox.show();
    },function(){
        $('.unlogin .fixBox').stop().slideUp(300,function(){
			$('.unlogin .fixBox').css("display",'none')
        });
    });
    $("body").on("click",'.login_form .reg_btn',function(){
    	$(".login_form ").addClass("none");
    	$(".reg_form ").removeClass("none");
    });
    $("body").on("click",'.reg_form .login_btn',function(){
    	$(".reg_form ").addClass("none");
    	$(".login_form ").removeClass("none");
    });
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

