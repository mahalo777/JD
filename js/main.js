// JavaScript Document
window.onload=function(){
	var oLiMycity = document.getElementById('ttbar-mycity');
	var oMycity = oLiMycity.getElementsByTagName('div')[0];
	var oMycityItems = oLiMycity.getElementsByTagName('div')[1];
	var aLi = oMycityItems.getElementsByTagName('li');
	var oCity = oMycity.getElementsByTagName('span')[0];
	var cityTemp = 0;

	var oSearch = document.getElementById('key');
	var aText = ['移动电源','外星人笔记本','进口酸奶','电钢琴','罗技鼠标'];
	var txtNum = 0;
	var timer = null;

	var arrAutoplay = ['images/autoplay1.jpg','images/autoplay2.jpg','images/autoplay3.jpg','images/autoplay4.jpg'
		,'images/autoplay5.jpg','images/autoplay6.jpg','images/autoplay7.jpg','images/autoplay8.jpg'];
	var autoNum1 = 0;
	var autoTimer = null;
	var oAutoplay = document.getElementById('autoplay');
	var oAutoplayImg = oAutoplay.getElementsByTagName('img')[0];
	var oAutoplayBack = oAutoplay.getElementsByTagName('div')[0];
	var oAutoplayMore = oAutoplay.getElementsByTagName('div')[1];
	var oSlider_indicator = document.getElementById('slider_indicator');
	var oCircle = oSlider_indicator.getElementsByTagName('i');
	
	var oNews_sale = document.getElementById('news_sale');
	var oNews_notice = document.getElementById('news_notice');
	var oNews_sale_items = document.getElementById('news_sale_items');
	var oNews_notice_items = document.getElementById('news_notice_items');
	var oNews_tab = document.getElementById('news_tab');

	var oService_tab = document.getElementById('service_tab');
	var aService_tab = oService_tab.getElementsByTagName('a');
	var oService_tab_line = document.getElementById('service_tab_line');

	var oFare_tab = document.getElementById('fare_tab');
	var oTicket = document.getElementById('ticket');
	var oHotel = document.getElementById('hotel');
	var oGame = document.getElementById('game');
	var aService_four = [oFare_tab,oTicket,oHotel,oGame];

	
	var oFare_tab_items = oFare_tab.getElementsByTagName('div')[0];
	var aFare_tabs_items = oFare_tab_items.getElementsByTagName('a');
	var oFare_tab1 = document.getElementById('fare_tab_first');
	var oFare_tab2 = document.getElementById('fare_tab_second');
	var oFare_tab3 = document.getElementById('fare_tab_third');
	var aFare_tabs = [oFare_tab1,oFare_tab2,oFare_tab3];

	var oSelect1 = document.getElementById('select_first');
	var oDiscount1 = document.getElementById('discount1');
	var oSelect2 = document.getElementById('select_second_second');
	var oDiscount2 = document.getElementById('discount2');
	var oSelect3 = document.getElementById('select_third');
	var oDiscount3 = document.getElementById('discount3');

	var oTicket = document.getElementById('ticket');
	var oTicket_sum = oTicket.getElementsByTagName('div')[0];
	var aTicket_types = oTicket_sum.getElementsByTagName('a');
	var oTicket_inner = document.getElementById('ticket_inner');

	var oHotel = document.getElementById('hotel');
	var oHotel_sum = oHotel.getElementsByTagName('div')[0];
	var aHotel_types = oHotel_sum.getElementsByTagName('a');
	var oHotel_inner = document.getElementById('hotel_inner');

	var oGame = document.getElementById('game');
	var oGame_sum = oGame.getElementsByTagName('div')[0];
	var aGame_types = oGame_sum.getElementsByTagName('a');
	var oGame_inner = document.getElementById('game_inner');

	var oClose = document.getElementById('close');
	var oService_entry = document.getElementById('service_entry');
	var oService_tab_items = document.getElementById('service_tab_items');
	var aService_entry = oService_entry.getElementsByTagName('li');

	var oService_main = document.getElementById('service_main');
	var oldServiceNum = 5;

	var oReturn1 = document.getElementById('return1');
	var oReturn2 = document.getElementById('return2');
	var oCome1 = document.getElementById('come1');
	var oCome2 = document.getElementById('come2');
	var oTicket_return1 = document.getElementById('ticket_return1');
	var oTicket_return2 = document.getElementById('ticket_return2');
	var oChange1 = document.getElementById('city_change1');
	var oChange2 = document.getElementById('city_change2');
	var oCome_city1 = document.getElementById('come_city1');
	var oCome_city2 = document.getElementById('come_city2');
	var oArrive_city1 = document.getElementById('arrive_city1');
	var oArrive_city2 = document.getElementById('arrive_city2');

	var oCountdowns = document.getElementById('countdown');
	var aCountdowns = oCountdowns.getElementsByTagName('img');

	/*秒杀时钟*/
	setInterval( fnTime, 1000 );
	
	fnTime ();
	function fnTime(){
		var myTime = new Date();
		var iHours = myTime.getHours();
		var iMin = myTime.getMinutes();
		var iSec = myTime.getSeconds();
		var str = toTwo(iMin)+toTwo(iSec);
		var j = 2;
		for ( var i=0; i<str.length;i++) 
		{
			j++;
			if(j != 5)
			{
				aCountdowns[j].src = 'images/' + str.charAt(i) + '.JPG';
			}
		}
	}
	function toTwo ( n ) {
		return n < 10 ?  '0' + n : '' + n;
	}
	/**/
	oChange1.onclick = function(){
		var temp = null;
		temp = oCome_city1.value;
		oCome_city1.value = oArrive_city1.value;
		oArrive_city1.value = temp;
	}
	oChange2.onclick = function(){
		var temp = null;
		temp = oCome_city2.value;
		oCome_city2.value = oArrive_city2.value;
		oArrive_city2.value = temp;
	}
	/**/
	for (var i = 0; i < 4; i++) {
		aService_entry[i].index = i;
		aService_entry[i].onmouseover = function(){
			if(this.index != oldServiceNum)
			{
				doMove(oService_main,'top',90,-222);
				oService_tab_line.style.left = this.index*44+'px';
				oService_tab_items.style.display='block';
				setClear(aService_four);
				aService_four[this.index].style.display = 'block';
				oldServiceNum = this.index;
			}
		}
	}
	/**/
	oClose.onclick = function(){
		doMove(oService_main,'top',90,0);
	}
	/*机票切换轮播*/
	for (var i = 0; i < aTicket_types.length; i++) {
		aTicket_types[i].index = i;
		aTicket_types[i].onmouseover = function(){
			tabSet(aTicket_types,this);
			var dir = 30;
			var target= -this.index*185;
			doMove(oTicket_inner,'left',dir,target);
		}
	}
	oCome1.onclick = function(){
		oTicket_return1.style.display = 'none';
	}
	oCome2.onclick = function(){
		oTicket_return2.style.display = 'none';
	}
	oReturn1.onclick = function(){
		oTicket_return1.style.display = 'inline-block';
	}
	oReturn2.onclick = function(){
		oTicket_return2.style.display = 'inline-block';
	}
	/*酒店轮播*/
	for (var i = 0; i < aHotel_types.length; i++) {
		aHotel_types[i].index = i;
		aHotel_types[i].onmouseover = function(){
			tabSet(aHotel_types,this);
			var dir = 30;
			var target= -this.index*185;
			doMove(oHotel_inner,'left',dir,target);
		}
	}
	/*游戏轮播*/
	for (var i = 0; i < aGame_types.length; i++) {
		aGame_types[i].index = i;
		aGame_types[i].onmouseover = function(){
			tabSet(aGame_types,this);
			var dir = 30;
			var target= -this.index*185;
			doMove(oGame_inner,'left',dir,target);
		}
	}
	/*select定折扣*/
	oSelect1.onchange = function(){
		var num1 = new Number(this.value);
		var num2 = new Number(this.value * 0.98);;
		oDiscount1.innerHTML = '¥'+ num2.toFixed(1) +'-¥'+ num1.toFixed(1);
	}
	oSelect2.onchange = function(){
		if (this.value == 50) 
		{
			oDiscount2.innerHTML = '¥7.5-¥10.0';
		}
		if (this.value == 100) 
		{
			oDiscount2.innerHTML = '¥9.95-¥20.0';
		}
		if (this.value == 200) 
		{
			oDiscount2.innerHTML = '¥10.9-¥20.5';
		}
		if (this.value == 300) 
		{
			oDiscount2.innerHTML = '¥29.0-¥29.9';
		}
		if (this.value == 500) 
		{
			oDiscount2.innerHTML = '¥49.0-¥50.0';
		}
	}
	oSelect3.onchange = function(){
		if (this.value == 38) 
		{
			oDiscount3.innerHTML = '50分钟300M流量';
		}
		if (this.value == 88) 
		{
			oDiscount3.innerHTML = '100分钟500M流量';
		}
		if (this.value == 138) 
		{
			oDiscount3.innerHTML = '500分钟1G流量';
		}
		if (this.value == 158) 
		{
			oDiscount3.innerHTML = '500分钟2G流量';
		}
	}
	/*话费切换*/
	for (var i = 0; i < aFare_tabs_items.length; i++) {
		aFare_tabs_items[i].index = i;
		aFare_tabs_items[i].onmouseover = function(){
			setClear(aFare_tabs);
			tabSet(aFare_tabs_items,this);
			aFare_tabs[this.index].style.display='block';
		}
	}
	/**/
	function tabSet(arr,obj){
		var oTri = obj.getElementsByTagName('div')[0];
		bgClear(arr);
		oTri.style.display='block';
		obj.style.backgroundColor ='#e01222';
		obj.style.color='#fff';
	}
	/**/
	function bgClear(arr)
	{
		for (var i = 0; i < arr.length; i++) 
		{
			var oTri = arr[i].getElementsByTagName('div')[0];
			oTri.style.display='none';
			arr[i].style.backgroundColor='#fff';
			arr[i].style.color='#000';
		}
	}
	/**/
	function setClear(arr){
		for (var i = 0; i < arr.length; i++) {
			arr[i].style.display = 'none';
		}
	}
	/*服务切换*/
	for (var i = 0; i < aService_tab.length; i++) {
		aService_tab[i].index = i;
		aService_tab[i].onmouseover = function(){
			oService_tab_line.style.left = this.index*44+'px';
			setClear(aService_four);
			aService_four[this.index].style.display = 'block';
		}
	}
	/**/
	/*定位地址*/
	for(var i=0; i<aLi.length; i++)
	{
		aLi[i].index = i;
		aLi[i].onclick = function(){
			var city = aLi[this.index].getElementsByTagName('div')[0];
			aLi[cityTemp].style.backgroundColor = '#fff';
			aLi[cityTemp].style.color = '#999';
			aLi[this.index].style.backgroundColor = 'red';
			aLi[this.index].style.color = '#fff';
			oCity.innerHTML = city.innerHTML;
			cityTemp = this.index;
		};
	}

	/*轮播txt*/
	timer = setInterval(autoplay,5000);
	function autoplay(){
		txtNum++;
		if( txtNum < aText.length)
		{
			oSearch.value = aText[txtNum];
		}
		else 
		{
			txtNum = 0;
			oSearch.value = aText[txtNum];
		}
	}
	/*中间轮播图*/
	autoTimer = setInterval(autoplay2,5000);
	function autoplay2(){
		autoNum1++;
		if( autoNum1 < arrAutoplay.length)
		{
			oAutoplayImg.src = arrAutoplay[autoNum1];
		}
		else 
		{
			autoNum1 = 0;
			oAutoplayImg.src = arrAutoplay[autoNum1];
		}
		circleSet();
	}
	oAutoplayBack.onclick = function(){
		clearInterval(autoTimer);
		if (autoNum1 == 0) 
		{
			autoNum1 = arrAutoplay.length-1;
		}
		else
		{
			autoNum1--;
		}
		oAutoplayImg.src = arrAutoplay[autoNum1];
		circleSet();
		autoTimer = setInterval(autoplay2,5000);
	}
	oAutoplayMore.onclick = function(){
		clearInterval(autoTimer);
		if (autoNum1 == arrAutoplay.length-1) 
		{
			autoNum1 = 0;
		}
		else
		{
			autoNum1++;
		}
		oAutoplayImg.src = arrAutoplay[autoNum1];
		circleSet();
		autoTimer = setInterval(autoplay2,5000);
	}
	function circleSet(){
		for (var i = 0; i < oCircle.length; i++) 
		{
			oCircle[i].style.backgroundColor ='#fff';
		}
		oCircle[autoNum1].style.backgroundColor ='red';
	}
	/*小红点*/
	for(var i = 0; i < oCircle.length; i++)
	{
		oCircle[i].index = i;
		oCircle[i].onmouseover = function(){
		clearInterval(autoTimer);
		autoNum1 = this.index;
		circleSet();
		oAutoplayImg.src = arrAutoplay[autoNum1];
		autoTimer = setInterval(autoplay2,5000);
		}
	}
	/*红线移动*/
	oNews_sale.onmouseover = function(){
		 oNews_tab.style.left = '8px';
		 oNews_sale_items.style.display = 'block';
		 oNews_notice_items.style.display = 'none';
	}
	oNews_notice.onmouseover = function(){
		 oNews_tab.style.left = '60px';
		 oNews_sale_items.style.display = 'none';
		 oNews_notice_items.style.display = 'block';
	}
	

}