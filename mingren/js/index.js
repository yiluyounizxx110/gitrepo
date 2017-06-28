$(function(){
	initPage();
	initLabel();
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
	
	$('.header_select_link').hover(function(){
		var $fixBox=$('.fixBox');
    	$fixBox.css({width:$(window).width(),height:$('.carousel_item img').first().height()});
        $('.fixBox').stop().slideDown(400);
    },function(){
        $('.fixBox').stop().slideUp(400,function(){
			$('.fixBox').css("display",'none')
        });
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
        $('.fixCenter').html($BNavH+_navCenter);
    }
    
    
    var $body=$('body');
    $body.on('click','.BNav span',function(){
        var _this=$(this);
        var i=_this.index();
        _this.parent().hide();
        $('.navCenter').eq(i).show().siblings('.navCenter').hide().end().find('.navName').text(_this.text());
    }).on('click','.navCenterListCenter i',function(){
        //console.log($(this).text())
			//此处获取点击的标签
    }).on('mouseenter','.navCenterList span',function(){
        var i=$(this).index();
        $(this).parent().siblings('.navCenterListCenter').eq(i).stop().slideDown(300).siblings('.navCenterListCenter').hide();
    })
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