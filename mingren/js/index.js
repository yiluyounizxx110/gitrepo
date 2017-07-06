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
        console.log($(this).text());
        $(".navCenterListCenter i").not($(this)).removeClass("active");
        $(this).addClass("active");
        $(".header_select_link_a").html($(this).text());
        $(".header_select_link_a").attr("data-index",$(this).attr("data-index"));
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
	$('.user_info.unlogin').hover(function(){
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
	if(310- $(document).scrollTop() <= $(window).height()/2){
		$(".fixed_nav_btn").removeClass("none");
	}
	$(window).scroll(function () {
		if(310- $(document).scrollTop() <= $(window).height()/2){
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

function sa_article_init(id){
	UE.Editor.prototype.placeholder = function (justPlainText) {
		var _editor = this;
		_editor.addListener("focus", function () {
			var localHtml = _editor.getPlainTxt();
			if ($.trim(localHtml) === $.trim(justPlainText)) {
				_editor.setContent(" ");
			}
		});
		_editor.addListener("blur", function () {
			var localHtml = _editor.getContent();
			if (!localHtml) {
				_editor.setContent(justPlainText);
			}
		});
		_editor.ready(function () {
			_editor.fireEvent("blur");
		});
	};
    var ue = UE.getEditor(id,{
    toolbars: [
        [
        	'undo', 
        	'redo', 
        	'bold',
        	'fontfamily',
        	'fontsize', //字号
        	'blockquote', //引用
        	'horizontal', //分隔线
        	'removeformat', //清除格式
        	'formatmatch'//格式刷
    	],
        [
        	'bold', //加粗
	        'italic', //斜体
	        'underline', //下划线
	        'forecolor', //字体颜色
        	'backcolor', //背景色
        	'indent', //首行缩进
        	'justifyleft', //居左对齐
	        'justifyright', //居右对齐
	        'justifycenter', //居中对齐
	        'justifyjustify', //两端对齐
	        'rowspacingtop', //段前距
       		'rowspacingbottom', //段后距
       		'lineheight', //行间距
       		'insertorderedlist', //有序列表
     	    'insertunorderedlist', //无序列表
     	    'imagenone', //默认
	        'imageleft', //左浮动
	        'imageright', //右浮动
	        'attachment', //附件
	        'imagecenter' //居中
        ]
    ],
    elementPathEnabled : false,　　//是否启用元素路径，默认是true显示
	wordCount:false,          //是否开启字数统计
	autoHeightEnabled:true,　　// 编辑器内容，是否自动长高,默认true
	fullscreen : false, //是否开启初始化时即全屏，默认关闭
	initialFrameHeight:500,
	autoFloatEnabled :false
    });
    ue.ready(function() {
     	$(".edui-default .edui-editor-toolbarboxouter").css(
	    	{
	    		border:'none',
	    		background:'none',
	    		boxShadow: 'none'
	    	}
	    )
     	$(".edui-default .edui-editor-toolbarbox").css({
     		border:'none',
	    	background:'none',
	    	boxShadow: 'none',
	    	borderBottom:'1px solid #F3F3F5'
     	});
     	$(".edui-editor.edui-default").css({
     		zIndex:1
     	});
     	$("#edui1_iframeholder").css({marginTop:'140px'});
     	$(".edui-editor-iframeholder.edui-default").css(
     		{
     			width:'700px',
     			marginTop:'160px', 
     			marginLeft:'100px',
     			borderBottom:'1px solid #DBDBDB'
 			}
 		);
 		$(".edui-default .edui-editor").css({border:'none'});
     	//设置编辑器的内容
		ue.placeholder("从这里开始写正文");
    });
    
}
/**发帖页面按钮事件初始化**/
function initSendArticleBtnEvent(){
	if(630- $(document).scrollTop() <= $(window).height()/2){
		$(".fixed_send_btn").removeClass("none");
	}
	$(window).scroll(function () {
		if(630- $(document).scrollTop() <= $(window).height()/2){
			$(".fixed_send_btn").removeClass("none");
		}else{
			$(".fixed_send_btn").addClass("none");
		}
	});
}


/***服务中心**/
function initServiceCenter(){
	$(".sc_header_item").click(function(){
		if($(this).hasClass("active")){
			return false;
		}
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(".sc_header_item").index($(this));
		$(".sc_acc_content").eq(index).removeClass("none").siblings(".sc_acc_content").addClass("none");
	});
}
