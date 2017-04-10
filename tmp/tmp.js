/* ==============================================================================
	jQuery
============================================================================== */

/* =======================================
	#をつけないページ内リンク
======================================= */
$('.header li a[href^="#"]').on('click', function(){
	const href= $(this).attr("href");
	const target = $(href == "#" || href == "" ? 'html' : href);
	const position = target.offset().top;
	$("html, body").animate({
		scrollTop: position
	}, 800, "swing");
	return false;
 });

/* =======================================
	タブ機能
======================================= */
var a = 'active';
$('#gradeTab div').on('click', function(){
var index = $('#gradeTab div').index(this);
$('#gradeTab div').removeClass(a);
$('.tabContent_plugin').removeClass(a);
$(this).addClass(a);
$('.tabContent_plugin').eq(index).addClass(a);
});

/* =======================================
	非リンク用ボタンでリンクさせない
======================================= */
if ($(".off a").exists()) {
  $(".off a").on("click",function(e){
    e.preventDefault();
  });
}

/* =======================================
	サイドバー隠す
======================================= */
$("#float_btnnavi .btn_close span").on("click",function(e){
  $("#float_btnnavi").animate({
        right : "-200"
    },200);
});

/* =======================================
	サブウインドウ
======================================= */
$('a[rel=popup]').on("click",function(e){
  e.preventDefault();
window.open($(this).attr("href"),'popupwin','height=700,width=800,left=30,top=50,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=yes');
});

/* =======================================
	印刷
======================================= */
$('a[rel=print]').on("click",function(e){
  e.preventDefault();
  print();
});

/* =======================================
	現在pathをactiveに
======================================= */
$(document).ready(function() {
  if(location.pathname != "/") {
    $('.gnavi a[href^="./' + location.pathname.split("/")[1] + '"]').parent().addClass('active');
  } else $('.gnavi li#gnavi_1').addClass('active');
});

/* =======================================
	スクリーンセーバ発動スクリプト
======================================= */
var screenID;
var video = $('.screenSaver')[0];
function screenSaver(){
	screenID = setTimeout(function(){
		$('.container:nth-of-type(5)').show();
		video.play();
	}, 10000);
}
screenSaver();
$('body').on('mousemove click hover', function(){
	$('.container:nth-of-type(5)').hide();
	video.pause();
	clearTimeout(screenID);
	screenSaver();
});
//Note: 
//jQueryでvideoメソッドを使うときはDOMを考える
//document.getElementByIdを使わないときは、$(‘.video’)[0]と記載してやる
//でないと、play(); is not a functionになるよ

/* =======================================
	topへ戻る
======================================= */
var topBtn = $('.pagetop');
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 'slow','easeOutCubic');
    return false;
});

/* =======================================
	デバイス判断
======================================= */
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    var g = location.href.split("?")[1];
    location.href = (g) ? '/sp/?' + g : '/sp/';
}

/* =======================================
	ページ遷移
======================================= */
$('.box').click(function() {
    //a要素からhref属性を探して中身を取得し、そのURLに飛ばす。別窓なら('href'), '_blank'とすればOK
    window.location = $(this).find('a').attr('href');
    return false;
});

/* =======================================
	別ウィンドウを閉じる
======================================= */
// <a href=“#” onclick=“window.close(); return false;></a>

/* =======================================
	ホバーで画像を置き換える処理
======================================= */
$('a img').hover(function(){
	$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
}, function(){
		if (!$(this).hasClass('current')) { 
		$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
	}
});

/* =======================================
	scrollでブロック要素にbodyを動かす処理
======================================= */
$('#obi a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 2000);
});

/* =======================================
	表示ページの画像切り替えスクリプト
======================================= */
var url = window.location.pathname;
if(url.match('/test_custom/index.html')){
	$('#gnavi ul li').eq(0).find('img').attr('src', 'img/common/gnavi1_on.png');  
}

/* =======================================
	現在時間の取得とループ
======================================= */
function tick(){
    var date = new Date();
    displayPanel.textContent = date.toLocaleTimeString();
    //setTimeout(tick, 1000 - date.getMilliseconds);下記と同じ
    var checkIt = setTimeout(function(){
        tick();
    }, 1000 - date.getMilliseconds());
    //console.log(checkIt);
}

/* =======================================
	簡易パララックス
======================================= */
var letsworkHeight = letswork.offsetTop;
function getScroll(){
    var scroll = document.body.scrollTop;
    var letswork = document.getElementById('letswork');
    letswork.style.top = letsworkHeight - scroll / 1.1 + 'px';
}

/* =======================================
	簡易パララックス２
======================================= */
$(window).scroll(function(){
	var dy = $(this).scrollTop();
	var pos1 = $('#box1').offset();
	var pos2 = $('#box2').offset();
	var pos3 = $('#box3').offset();
	//offset();でオブジェクトの位置情報を取得
	$('#box1').css('top', pos1.top + dy / 2);
	$('#box1').css('left', pos1.left + dy / 4);
	$('#box1').css('width', 40 + dy * 0.2);
	$('#box2').css('top', pos2.top + dy / 4);
	$('#box2').css('left', pos2.left + dy / 6);
	$('#box3').css('top', pos3.top + dy / 6);
	$('#box3').css('left', pos3.left + dy / 8);
});

/* =======================================
	リロード
======================================= */
function reload(){
	var date = new Date();
	setTimeout('location.reload();', 100000 - date.getMilliseconds());
	//reloadの関数を直接書き込むことでも正常に稼働する
	//10秒ごとに画面を更新する
}

/* =======================================
	ボタンを押すエフェクトクラス
======================================= */
document.getElementById('contact').addEventListener('mouseover', function(){
     this.className = 'pushed';
});
document.getElementById('contact').addEventListener('mouseleave', function(){
     this.className = '';
});






/* ==============================================================================
	PURE JavaScript
============================================================================== */

/* =======================================
	バブリング利用
======================================= */
document.addEventListener('click', (event) => {
	if(event.target.tagName == 'INPUT'){
		console.log(event.target);
	}
});
// targetでどの要素がclickされたかを判断することができる
// inputをclickしたときだけに設定 
// .tagNameはuppercaseで返してくる

/* =======================================
	DOM読み込み待ち
======================================= */
document.addEventListener('DOMcontentLoaded', () => { });
// document.addEventListener('ready', () => { });と同等 












