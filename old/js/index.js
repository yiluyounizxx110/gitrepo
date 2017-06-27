/**
 * Created by Administrator on 2017/6/20 0020.
 */
$(function(){
    var $fixBox=$('.fixBox');
    $fixBox.css({width:$(window).width(),height:$('#myCarousel').height()});
    // $.ajax({
    //     url:"",
    //     success:function(data){
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
                        data:[]
                    },{
                        name:"随机标签",
                        data:[]
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


    //     }
    // })
    $('.one_menu li:eq(1)').hover(function(){
        $('.fixBox').stop().slideDown(300);
    },function(){
        $('.fixBox').stop().slideUp(300,function(){
            $(this).find("*").removeAttr('style');
        });
    });

    var $body=$('body');
    $body.on('click','.BNav span',function(){
        var _this=$(this);
        var i=_this.index();
        _this.parent().hide();
        $('.navCenter').eq(i).show().siblings('.navCenter').hide().end().find('.navName').text(_this.text());
    }).on('click','.navCenterListCenter i',function(){
        console.log($(this).text())
    }).on('hover','.navCenterList span',function(){
        var i=$(this).index();
        $('.navCenterListCenter').eq(i).stop().slideDown(300).siblings('.navCenterListCenter').hide();
    })

});