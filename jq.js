$(function(){

      /*机票时间input*/
	var d = new Date(), ld = new Date(d.getFullYear(), d.getMonth() + 1, 1),nd = new Date();
	var temp = new Date(d.getFullYear(), d.getMonth() + 1, 1);//下月一号
	ld.setDate(ld.getDate() - 1);//本月末
	if(d.getTime() == ld.getTime())
	{
		nd.setDate(temp.getDate());
	}
	else
	{
		nd.setDate(d.getDate() + 1);
	}
	$("#hotel_come").val(d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate()).datepicker(
		{
	 		numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'yy-mm-dd',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'2017-8-20',//默认日期  
            minDate:'2017-8-20',//最小日期  
            maxDate:'2018-1-1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六']
	 	});
	$("#hotel_leave").val(nd.getFullYear() + '-' + (nd.getMonth() + 1) + '-' + nd.getDate()).datepicker(
		{ 
			numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'yy-mm-dd',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'2017-8-20',//默认日期  
            minDate:'2017-8-20',//最小日期  
            maxDate:'2018-1-1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六'] 
		});

	$("#ticket_come1").datepicker(
		{
			numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'y/m/d',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'17/8/20',//默认日期  
            minDate:'17/8/20',//最小日期  
            maxDate:'18/1/1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六']
		}
	);
	$("#ticket_come2").datepicker(
		{
			numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'y/m/d',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'17/8/20',//默认日期  
            minDate:'17/8/20',//最小日期  
            maxDate:'18/1/1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六']
		}
	);
	$("#ticket_return1").datepicker(
		{
			numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'y/m/d',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'17/8/20',//默认日期  
            minDate:'17/8/20',//最小日期  
            maxDate:'18/1/1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六']
		}
	);
	$("#ticket_return2").datepicker(
		{
			numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'y/m/d',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            defaultDate:'17/8/20',//默认日期  
            minDate:'17/8/20',//最小日期  
            maxDate:'18/1/1',//最大日期  
            monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],  
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],  
            dayNamesMin: ['日','一','二','三','四','五','六']
		}
	);
	/*地点插件*/
	$("#come_city1").kuCity();
	$("#come_city2").kuCity();
	$("#arrive_city1").kuCity();
	$("#arrive_city2").kuCity();
	$("#hotel_city").kuCity();
	$("#game_select").kuCity();
	$("#input_Q").kuCity();

      /*秒杀部分*/
      if($(document).width() <= 1190)
      {
            var numKill = 0;
            var str = $('.show_play li:lt(4)').clone(true);
            $('.show_play').append(str);
            for(var i=3; i < $('.show_play li').length; i=i+4)
            {
                  $('.show_play li').eq(i).addClass('borderNone');
            }
            $('.kill_pre').click(
                  function(){
                        numKill++;
                        if(numKill==4)
                        {
                              $('.show_play').css('left','0px');
                              numKill = 1;
                        }
                        $('.show_play').stop().animate({left:-numKill*800},500);
                  }
            );
            $('.kill_more').click(
                  function(){
                        numKill--;
                        if(numKill==-1)
                        {
                              $('.show_play').css({left:-3*800});
                              numKill = 2;
                        }
                        $('.show_play').stop().animate({left:-numKill*800},500);
                  }
            );
      }
      else
      {
            var numKill = 0;
            var str = $('.show_play li:lt(5)').clone(true);
            $('.show_play').append(str);
            for(var i=4; i < $('.show_play li').length; i=i+5)
            {
                  $('.show_play li').eq(i).addClass('borderNone');
            }
            $('.kill_pre').click(
                  function(){
                        numKill++;
                        if(numKill==5)
                        {
                              $('.show_play').css('left','0px');
                              numKill = 1;
                        }
                        $('.show_play').stop().animate({left:-numKill*998},500);
                  }
            );
            $('.kill_more').click(
                  function(){
                        numKill--;
                        if(numKill==-1)
                        {
                              $('.show_play').css({left:-4*1000});
                              numKill = 3;
                        }
                        $('.show_play').stop().animate({left:-numKill*998},500);
                  }
            );
      }
      
      $('.show_play li a').hover(
           function(){
                  $(this).find('img').stop().animate({marginTop:-10},100);
            },function(){
                  $(this).find('img').stop().animate({marginTop:0},100);
            }
      ); 
      function moveLeft(){
             $(this).find('img').stop().animate({marginLeft:10},800);
      }
      function moveBack(){
             $(this).find('img').stop().animate({marginLeft:20},800);
      }
      $('.items_img').hover(
           moveLeft,moveBack
      );
       /*秒杀部分右边*/
      var iKill = 0;
      var timer1 = setInterval(moveKill,1500);
      $('.kill_play2 ul li').eq(0).show();
      $('.circle_kill').eq(0).addClass("active");
      function moveKill(){
            iKill++;
            if(iKill == $('.circle_play div').length)
            {
                  iKill=0; 
            }  
            $('.circle_play div').eq(iKill).addClass("active").siblings().removeClass("active");
            $(".kill_play2 ul li").eq(iKill).fadeIn(300).siblings().fadeOut(300);
      }
      $('.circle_play div').mouseover(
            function(){
                  $(this).addClass("active").siblings().removeClass("active");
                  var index = $(this).index();
                  $(".kill_play2 ul li").eq(index).fadeIn(300).siblings().fadeOut(300);
            }
      );
      $('.kill_play2').hover(
            function(){
                  clearInterval(timer1);
            },function(){
                  timer1 = setInterval(moveKill,1500);
            }
      );
      /*会买专辑*/
      var buyNum =0;
      var timer2 = setInterval(moveBuy,3000);
      $('.buy_item li').eq(0).show();
      $('.circle_buy').eq(0).addClass("active");
      $('.buy_next').click(function(){
            clearInterval(timer2);
            moveBuy();
            timer2 = setInterval(moveBuy,3000);
      });
      $('.buy_pre').click(function(){
            clearInterval(timer2);
            buyNum--;
            if(buyNum == -1)
            {
                  buyNum=$('.circle_buy').length -1; 
            }  
            $('.circle_buy').eq(buyNum).addClass("active").siblings().removeClass("active");
            $(".buy_item li").eq(buyNum).fadeIn(300).siblings().fadeOut(300);
            timer2 = setInterval(moveBuy,3000);
      });
      function moveBuy(){
            buyNum++;
            if(buyNum == $('.circle_buy').length)
            {
                  buyNum=0; 
            }  
            $('.circle_buy').eq(buyNum).addClass("active").siblings().removeClass("active");
            $(".buy_item li").eq(buyNum).fadeIn(300).siblings().fadeOut(300);
      }
      $('.buy_main').hover(function(){
            clearInterval(timer2);
      },function(){
            timer2 = setInterval(moveBuy,3000);
      });
      $('.circle_buy').mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            $(".buy_item li").eq(index).fadeIn(300).siblings().fadeOut(300);
      });
      /*排行榜*/
      $('.rank1').eq(0).show();
      $('.rank_tab ul li').mouseover(
            function(){ 
                  var index = $(this).index();
                  var num = index*75+8+'px';
                  $('.red_rank').css('left',num);
                  $('.rank1').eq(index).fadeIn(300).siblings().fadeOut(300);
            }
      );
      
     /**/
      $('.quan_item').hover(
            function(){
                  $(this).stop().animate({marginLeft:55},500);
            },function(){
                  $(this).stop().animate({marginLeft:40},500);
            }
      );
      /*mi*/
      $('.circle_mi').eq(0).addClass('active');
      $('.mi_item ul li').eq(0).show();
      var miNum = 0;
      var timer3 = setInterval(moveMi,3000);
       function moveMi(){
            miNum++;
            if(miNum == $('.mi_item ul li').length)
            {
                  miNum=0; 
            }  
            $('.circle_mi').eq(miNum).addClass("active").siblings().removeClass("active");
            $(".mi_item ul li").eq(miNum).fadeIn(300).siblings().fadeOut(300);
      }
       $('.mi_more').click(function(){
            clearInterval(timer3);
            moveMi();
      });
      $('.mi_pre').click(function(){
            clearInterval(timer3);
            miNum--;
            if(miNum == -1)
            {
                  miNum=$('.mi_item ul li').length -1; 
            }  
            $('.circle_mi').eq(miNum).addClass("active").siblings().removeClass("active");
            $(".mi_item ul li").eq(miNum).fadeIn(300).siblings().fadeOut(300);
      });
      $('.mi_item').hover(function(){
            clearInterval(timer3);
      },function(){
            timer3 = setInterval(moveMi,3000);
      });
      $('.circle_mi').mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            $(".mi_item ul li").eq(index).fadeIn(300).siblings().fadeOut(300);
      });
      /*设置JD头部*/
      $(window).scroll(function(){
            var top = $(document).scrollTop();
            if(parseInt(top) >= 600)
                  $('.top_jd').show();
            else
                   $('.top_jd').hide();
      });
      var top_jd_text = ['保险箱','kindle','外星人','手机'];
      var timerNum4 = 0;
      var timer4 = setInterval(topJD,3000);
      function topJD(){
            timerNum4++;
            if (timerNum4 == top_jd_text.length) {
                  timerNum4 = 0;
            }
            $('.top_jd_box input').attr('placeholder',top_jd_text[timerNum4]);
      }
      /*享品质*/
      var xpz_play = ['时髦在早秋 秋上新2件8折','精选手镯工厂上线','是什么锅让他爱上做饭'];
      var xpz_play_img = ['images/kill1.jpg','images/kill2.jpg','images/kill3.jpg'];
      $('.xpz_circle').eq(0).addClass("active");
      var timerNum5 = 0;
      var timer5 = setInterval(xpzPlayer,3000);
      function xpzPlayer(){
            timerNum5++;
            if (timerNum5 == xpz_play.length) {
                  timerNum5 = 0;
            }
            $('.xpz_play_backImg').attr('src',xpz_play_img[timerNum5]);
             $('.items_text_main').text(xpz_play[timerNum5]);
            $('.xpz_circle').eq(timerNum5).addClass("active").siblings().removeClass("active");
      }
      $('.xpz_right_sum').hover(function(){
            clearInterval(timer5);
      },function(){
            timer5 = setInterval(xpzPlayer,3000);
      });
      $('.xpz_circle').mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            $('.xpz_play_backImg').attr('src',xpz_play_img[index]);
      });
      $('.xpz_play_pre').click(function(){
            clearInterval(timer5);
            timerNum5--;
            if(timerNum5 == -1)
            {
                  timerNum5=xpz_play.length -1; 
            }  
            $('.xpz_play_backImg').attr('src',xpz_play_img[timerNum5]);
            $('.items_text_main').text(xpz_play[timerNum5]);
            $('.xpz_circle').eq(timerNum5).addClass("active").siblings().removeClass("active");
      });
      $('.xpz_play_more').click(function(){
            clearInterval(timer5);
            timerNum5++;
            if(timerNum5 == xpz_play.length)
            {
                  timerNum5=0; 
            }  
            $('.xpz_play_backImg').attr('src',xpz_play_img[timerNum5]);
            $('.items_text_main').text(xpz_play[timerNum5]);
            $('.xpz_circle').eq(timerNum5).addClass("active").siblings().removeClass("active");
      });
      $('.xpz_items_top img').hover(
            function(){
                  $(this).stop().animate({marginLeft:20},300);
            },function(){
                 $(this).stop().animate({marginLeft:30},300);
            }
      );
      $('.items_right img').hover(
            function(){
                  $(this).stop().animate({marginLeft:5},300);
            },function(){
                 $(this).stop().animate({marginLeft:15},300);
            }
      );

      /***/
      $('.ash_box1_left img').hover(
            function(){
                  $(this).stop().animate({marginLeft:0},300);
            },function(){
                 $(this).stop().animate({marginLeft:10},300);
            }
      );
      $('.box1_inner_r img').hover(
            function(){
                  $(this).stop().animate({marginLeft:0},300);
            },function(){
                 $(this).stop().animate({marginLeft:10},300);
            }
      );
      $('.ash_box2 a img').hover(
            function(){
                  $(this).stop().animate({marginLeft:-10},300);
            },function(){
                 $(this).stop().animate({marginLeft:0},300);
            }
      );
      var numAsh = 0;
      var str1 = $('.ash_box3 ul li:lt(11)').clone(true);
      $('.ash_box3 ul').append(str1);
      if($(document).width() <= 1190){
            $('.ash_more').click(
                  function(){
                        numAsh++;
                        if(numAsh==3)
                        {
                             $(this).siblings('ul').css('left','12px');
                              numAsh = 1;
                        }
                        $(this).siblings('ul').stop().animate({left:-numAsh*468},500);
                       
                  }
            );
            $('.ash_pre').click(
                  function(){
                        numAsh--;
                       if(numAsh==-1)
                        {
                              $(this).siblings('ul').css({left:-2*468});
                              numAsh = 1;
                        }
                       $(this).siblings('ul').stop().animate({left:-numAsh*468},500);
                  }
            );
      }
      else
      {
            $('.ash_more').click(
                  function(){
                        numAsh++;
                        if(numAsh==3)
                        {
                             $(this).siblings('ul').css('left','12px');
                              numAsh = 1;
                        }
                        $(this).siblings('ul').stop().animate({left:-numAsh*555},500);
                       
                  }
            );
            $('.ash_pre').click(
                  function(){
                        numAsh--;
                       if(numAsh==-1)
                        {
                              $(this).siblings('ul').css({left:-2*555});
                              numAsh = 1;
                        }
                       $(this).siblings('ul').stop().animate({left:-numAsh*555},500);
                  }
            );
      }
      /**/
      var numCom = 0;
      var str2 = $('.computer_box3 ul li:lt(23)').clone(true);
      $('.computer_box3 ul').append(str2);
      if($(document).width() <= 1190){
            $('.computer_more').click(
                  function(){
                        numCom++;
                        if(numCom==3)
                        {
                             $(this).siblings('ul').css('left','20px');
                              numCom = 1;
                        }
                        $(this).siblings('ul').stop().animate({left:-numCom*940},500);
                       
                  }
            );
            $('.computer_pre').click(
                  function(){
                        numCom--;
                       if(numCom==-1)
                        {
                              $(this).siblings('ul').css({left:-2*960});
                              numCom = 1;
                        }
                       $(this).siblings('ul').stop().animate({left:-numCom*940},500);
                  }
            );
      }
      else
      {
            $('.computer_more').click(
                  function(){
                        numCom++;
                        if(numCom==3)
                        {
                             $(this).siblings('ul').css('left','20px');
                              numCom = 1;
                        }
                        $(this).siblings('ul').stop().animate({left:-numCom*1120},500);
                       
                  }
            );
            $('.computer_pre').click(
                  function(){
                        numCom--;
                       if(numCom==-1)
                        {
                              $(this).siblings('ul').css({left:-2*1140});
                              numCom = 1;
                        }
                       $(this).siblings('ul').stop().animate({left:-numCom*1120},500);
                  }
            );
      }

      /*侧边栏部分*/
     var xpz = $('#xpz').offset().top;
     $('.page_left ul li').click(
            function(){
                  var index = $(this).index();
                   $(this).eq(index).addClass('active').siblings().removeClass('active');
                  if(index < 11)
                  {
                         $('html,body').animate({scrollTop:xpz+index*600},500);
                  }
                  else
                  {
                         $('html,body').animate({scrollTop:0},500);
                  }
            }
      );
     $(window).scroll(
            function(){
                  var scrollTop = $(window).scrollTop();
                  var indexNum = Math.floor((scrollTop - xpz )/600);
                  if (scrollTop >= xpz) {
                        $('.page_left').css('display','block');
                  }
                  else
                  {
                        $('.page_left').css('display','none');
                  }
                  $('.page_left ul li').eq(indexNum).addClass('active').siblings().removeClass('active');
            }
      );
});
