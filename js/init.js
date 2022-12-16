// NAV
function nav(){
  $(window).scroll(function(){
      var SCROLL = $(window).scrollTop();
      if( SCROLL>300 ){
        $("header").addClass("fixed");
      }else{
        $("header").removeClass("fixed");
      }
  });
}

// BTN_TOP
function btn_top(){
    $("#btn_top").click(function() {
        $("html,body").animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
        var SCROLL = $(window).scrollTop(); //抓目前網頁捲軸的座標
        if( SCROLL>1000 ){
          $("#btn_top").stop(true,false).animate({ bottom : 48}, 500);
        }else{
          $("#btn_top").stop(true,false).animate({ bottom : -1000}, 500);
        }
    });
}

$(document).ready(function(){
	  nav();
    btn_top();
});
