var timer = null;
var navCenterListTop = 0,navCenterListTopPre=0;
var navCenterListScrollInterval=null;
function initPage(){
	
	var width = $(window).width();
	var height = width * 559 / 1349;
	$(".carousel").width(width);
	$(".carousel").height(height);
	$(".carousel_item").width(width);
	$(".carousel_item").height(height);
	$(".carousel_container").width(width);
	$(".carousel_container").height(height);
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
function closeFixBox(){
	$(".mask_p").removeClass("active");
	$(".fixBox").css("display",'none');
}
function initCloseMask(){
	$(".search_input_box span label").click(closeFixBox);
	$(".search_input_box input[type='text']").on('focus',closeFixBox);
	$(".search_input_box .searchbtn").on('click',closeFixBox);
}
function initLabel(){
    $.getJSON("js/joblabel.json",function(data){
    	var $BNavH="<div class='BNav'>",_navCenter="";
        for(var i=0;i<data.length;i++){
            $BNavH+="<span data-index='"+ data[i].id +"'>"+data[i].name+"</span>";
            _navCenter+="<div class='navCenter'><div class='navNameList'><div class='navName'>名称</div><div class='selectFirstLable none'></div><div class='selectSecondLable none'></div></div><div class='navCenterList'>";
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
            _navCenter+="</div><div class='navRightBox'>"+ navCenterListCh +"</div></div>";
        }
        $BNavH+="<i></i></div>";
        $('.header_select_link .fixCenter').html($BNavH+_navCenter);
        
        //一级菜单停止滚动后，和二级菜单对齐
        $('body .navCenterList').scroll(function(){
        	if(navCenterListScrollInterval == null){
	    		navCenterListScrollInterval=setInterval(listenNavCenterListScroll,100);//这里就是判定时间，当前是1秒一判定
	    	}
	    	navCenterListTop = $(this)[0].scrollTop;
        })
    });
    
    $('.header_select_link_a').click(function(){
    	if(!$(".header_select_link").hasClass("active")){
    		$(".mask_p").removeClass("active");
			$(".fixBox").css("display",'none');
    		var $fixBox=$('.header_select_link .fixBox');
    		$fixBox.css({width:$(window).width()});
        	$fixBox.stop().slideDown(300);
        	$(".header_select_link").addClass("active");
    	}else{
			$('.header_select_link .fixBox').css("display",'none')
	        $(".header_select_link").removeClass("active");
    	}
		
    });
    
    $(".header_select_link .fixBottom").click(function(){
    	$(".fixBox").stop().slideUp(300);
    	$(".header_select_link").removeClass("active");
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
        $(".selectSecondLable").removeClass("none").html($(this).html());
        $(".header_select_link_a i").html($(this).text());
        $(".header_select_link_a").attr("data-index",$(this).attr("data-index"));
    }).on('click','.navCenterList span',function(){
    	$(this).addClass("active").siblings("span").removeClass("active");
        var i=$(this).index();
        $(".selectFirstLable").removeClass("none").html($(this).html());
        $(".selectSecondLable").addClass("none");
        $(this).parent().siblings('.navRightBox').find(".navCenterListCenter")
			   .eq(i).show().siblings('.navCenterListCenter').hide();
    }).on('click','.navName',function(){
    	$(".navCenter").hide();
    	$(".BNav").show();
    });
}

function listenNavCenterListScroll(){
	if(navCenterListTopPre != navCenterListTop){
		navCenterListTopPre = navCenterListTop;
	}else{
		clearInterval(navCenterListScrollInterval);
		navCenterListScrollInterval = null;
		var top = navCenterListTop % 45;
		if(top < 23){
//			$(".navCenterList").scrollTop(navCenterListTop - top);
            $(".navCenterList").animate(
            	{
            		'scrollTop':navCenterListTop - top
            	},200);
		}else{
//			$(".navCenterList").scrollTop(navCenterListTop + 45- top);
			$(".navCenterList").animate(
            	{
            		'scrollTop':navCenterListTop + 45- top
            	},200);
		}
	}
}


function initAreaSelect(){
	var width = $(window).width();
	var height = width * 559 / 1349;
	//悬浮展示
	$('.area_text').click(function(){
		if(!$(this).parent(".area").hasClass("active")){
			$(".mask_p").removeClass("active");
			$(".fixBox").css("display",'none');
			var $fixBox=$('.area .fixBox');
	    	$fixBox.css({width:width});
	        $fixBox.stop().slideDown(300);
	        $(this).parent(".area").addClass("active");
		}else{
	        $('.area .fixBox').css("display",'none');
	        $(this).parent(".area").removeClass("active");
		}
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
    	
    	$(".area .area_text i").text("中国" + provinceText + datatext);
    });
    $(".area .fixBottom").click(function(){
    	$(".fixBox").stop().slideUp(300);
    	$(".area").removeClass("active");
    });
}
/**登录注册信息**/
function initLoginInfo(){
	var width = $(window).width();
	var height = width * 559 / 1349;
	//下拉悬浮层
	$('.user_info.unlogin i').click(function(){
		if(!$(this).hasClass("active")){
			$(".mask_p").removeClass("active");
			$(".fixBox").css("display",'none');
			$(this).addClass("active");
			var $fixBox=$('.unlogin .fixBox');
	    	$fixBox.css({width:width});
	        $fixBox.stop().slideDown(300);
	        $fixBox.show();
		}else{
			$('.unlogin .fixBox').css("display",'none');
			$(this).removeClass("active");
		}
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
    $('.user_info.unlogin .fixBottom').click(function(){
    	$('.unlogin .fixBox').stop().slideUp(300);
    	$(".user_info.unlogin .mask_p").removeClass("active");
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
		slider.sliderEvent = setInterval(slider.start,5000);
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
		var top = $($(".carousel_container .carousel_item")[0]).height() * (-1) * (index -1);
		$(".carousel_container").animate({'margin-top':top + 'px'},600);
		$($(".carousel-indicator .carousel-indicators_item").get(index-1)).addClass('cur').siblings().removeClass('cur');
	}
}

/**发帖按钮时间初始化**/
function initSendBtnEvent(){
	if(307- $(document).scrollTop() <= $(window).height()/2){
		$(".fixed_nav_btn").removeClass("none");
	}else{
		$(".fixed_nav_btn").addClass("none");
	}
	$(window).scroll(function () {
		if(307- $(document).scrollTop() <= $(window).height()/2){
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
     		zIndex:3
     	});
     	$("#edui1_iframeholder").css({marginTop:'140px'});
     	$(".edui-editor-iframeholder.edui-default").css(
     		{
     			width:'700px',
     			marginTop:'208px', 
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
	if(708- $(document).scrollTop() <= $(window).height()/2){
		$(".fixed_send_btn").removeClass("none");
	}else{
		$(".fixed_send_btn").addClass("none");
	}
	$(window).scroll(function () {
		if(708- $(document).scrollTop() <= $(window).height()/2){
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


/***反馈中心**/
function fdba_richtext_init(id){
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
        	'bold', //加粗
	        'italic', //斜体
	        'underline', //下划线
	        'pasteplain', //纯文本粘贴模式
	        'forecolor', //字体颜色
        	'backcolor', //背景色
        	'justifyleft', //居左对齐
	        'justifyright', //居右对齐
	        'justifycenter', //居中对齐
	        'justifyjustify', //两端对齐
	        'rowspacingtop', //段前距
       		'rowspacingbottom', //段后距
       		'lineheight', //行间距
       		'insertorderedlist', //有序列表
     	    'insertunorderedlist', //无序列表
     	    'link', //超链接
        	'emotion', //表情
        	'snapscreen' //截图
        ]
    ],
    elementPathEnabled : false,　　//是否启用元素路径，默认是true显示
	wordCount:false,          //是否开启字数统计
	autoHeightEnabled:true,　　// 编辑器内容，是否自动长高,默认true
	fullscreen : false, //是否开启初始化时即全屏，默认关闭
	initialFrameHeight:200,
	initialFrameWidth:860,
	autoFloatEnabled :false
    });
    ue.ready(function() {
    	$(".edui-editor.edui-default").css({
     		zIndex:1
     	});
     	//设置编辑器的内容
     	$("#edui1_toolbarbox").css({width:'857px',height:"31px"})
		ue.placeholder("<p style='white-space: normal;'><span style='background-color: rgb(255, 255, 255); color: rgb(165, 165, 165);'>感谢您给我们提出建议</span></p><p style='white-space: normal;'><br/></p><p style='white-space: normal;'><span style='background-color: rgb(255, 255, 255); color: rgb(165, 165, 165);'>抱歉我们不能逐一回复您的意见<br/></span></p><p style='white-space: normal;'><br/></p><p style='white-space: normal;'><span style='background-color: rgb(255, 255, 255); color: rgb(165, 165, 165);'>您的感受和建议一旦在此发表，即表示您同意我们可无偿参考您的感受和建议来优化我们的产品和服务。若您有商业合作意向，请联系公司相关业务部门。</span></p><p><br/></p>");
    });
    
}

function initBaseInfoNavBar(){
	$("body").on('click',".bi_title_menu",function(){
		var index = $(".bi_title_menu").index($(this));
		var left = 20 + (index) * (100 + 20 + 60);
		$(".bi_title_menu_bar").css({left:left + 'px'});
		$($(".bi_content").get(index)).removeClass("none").siblings(".bi_content").addClass("none");
	});
}
function initBaseInfoPage(){
	//菜单点击
	$("body").on('click',".bi_nav_item",function(){
		var index = $(".bi_nav_item").index($(this));
		$(this).addClass("active").siblings(".bi_nav_item").removeClass("active");
		$($(".bi_right_content").get(index)).removeClass("none");
		$($(".bi_right_content").get(index)).siblings(".bi_right_content").addClass("none");
	});
	//图标选择
	$("body").on('click',".bi_img_select_a",function(){
		var index = $(".bi_img_select_a").index($(this));
		$(this).addClass("active").siblings(".bi_img_select_a").removeClass("active");
		$($(".bi_img_select_content").get(index)).removeClass("none");
		$($(".bi_img_select_content").get(index)).siblings(".bi_img_select_content").addClass("none");
	});
	 var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : 'server/php/';
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo('#files');
            });
        },
        error:function(e){
        	alert(e.responseText)
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
}

function initmodifyPass(){
	$("body").on('click',".modify_pass_table .sendbtn",function(){
		if($(this).hasClass("disabled")){
    		return false;
    	}
    	$(this).html("<span>60</span>s");
    	$(this).addClass("disabled");
    	timer = setInterval(calcutemodifyPasstime,1000);
	});
}

function calcutemodifyPasstime(){
	var time = parseInt($(".modify_pass_table .sendbtn span").html());
	if(time == 1){
		clearInterval(timer);
		timer = null;
		$(".modify_pass_table .sendbtn").html("发送验证");
		$(".modify_pass_table .sendbtn").removeClass("disabled");
		return false;
	}
	$(".modify_pass_table .sendbtn span").html(time - 1);
}

function initMyLevel(level){
	var left = 0;
	var top = 0;
	if(level == 0){
		top = 29;
		left = -19;
	}else if(level == 20){
		top = 29;
		left = 179;
	}else if(level == 40){
		top = 29;
		left = 377;
	}else if(level == 60){
		top = 29;
		left = 575;
	}else if(level == 80){
		top = 15;
		left = 775;
	}else if(level >= 100){
		top = 5;
		left = 972;
	}else if(level > 0 && level < 20){
		top = 40;
		left = -19 + 16 + (166/18)*(level-1);
	}else if(level > 20 && level < 40){
		top = 40;
		left = 179 + 16 + (166/18)*(level-21);
	}else if(level > 40 && level < 60){
		top = 40;
		left = 377 + 16 + (166/18)*(level-41);
	}else if(level > 60 && level < 80){
		top = 40;
		left = 575 + 16 + (166/18)*(level-61);
	}else if(level > 80 && level < 100){
		top = 40;
		left = 775 + 16 + (166/18)*(level-81);
	}else if(level < 0){
		top = 29;
		left = -19;
	}
	
	$(".bi_my_acc_current_level").html("当前" + level + "级")
	$(".bi_my_acc_current_level").css(
		{
			'left':left + 'px',
			'top':top + 'px',
			'display':'inline-block'
		}
	);
}
function initMyInviteNums(num){
	var left = 0;
	var top = 0;
	if(num <= 0){
		left = 120;
		top=100;
	}else if(num >= 100){
		left = 1060;
		top=27;
	}else{
		left = 120 + num * (1060 -120)/100;
		top = 100 + num * (27 -100)/100;
	}
	$(".bi_my_invite_friends_current").html("成功邀请" + num + "位")
	$(".bi_my_invite_friends_current").css(
		{
			'left':left + 'px',
			'top':top + 'px',
			'display':'inline-block'
		}
	);
}
function initMyAccJcPieCharts(){
	var canvas = document.getElementById("my_acc_jc_pie_charts");  
    var seriesData = [{name:"", value:20, color:"RGBA(0,160,233,1)"},  
                  {name:"", value:20, color:"RGBA(239,130,0,1)"}]  
    var config = {  
            width : 800,   
            height: 400,  
            series: seriesData,  
            canvas: canvas,  
            unit: "1",  
            title:"",  
            tooltips : {  
                enable : false  
            },  
            animation :{  
                enable: false  
            },  
            legend : {  
                enable : false  
            },  
            text : {  
                enable: true  
            },  
    };  
    pieChart.initSettings(config);  
    pieChart.render();  
}
/**详情页面按钮事件初始化**/
function initDetailBtnEvent(){
	if(410- $(document).scrollTop() <= ($(window).height()/2 - 205)){
		$(".dmt_fix_btn_container").removeClass("none");
	}else{
		$(".dmt_fix_btn_container").addClass("none");
	}
	$(window).scroll(function () {
		if(410- $(document).scrollTop() <= ($(window).height()/2 - 205)){
			$(".dmt_fix_btn_container").removeClass("none");
		}else{
			$(".dmt_fix_btn_container").addClass("none");
		}
	});
}