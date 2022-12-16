// BTN_TOP
function btn_top(){
    $("#btn_top").click(function() {
        $("html,body").animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
        var SCROLL = $(window).scrollTop(); //抓目前網頁捲軸的座標
        if( SCROLL>600 ){
          $("#btn_top").stop(true,false).animate({ bottom : 48}, 500);
        }else{
          $("#btn_top").stop(true,false).animate({ bottom : -1000}, 500);
        }
    });
}

// 購物車 input 數量加減
function number(){
    $('.inc.button').on('click', function(e){ 
        var $input_product_numbers = $(this).siblings('input'); 
        var product_nums = parseInt($input_product_numbers.val(),10) + 1;
        product_nums = product_nums > 9999? 9999:product_nums;
        $input_product_numbers.val(product_nums);}
    );
    $('.dec.button').on('click', function(e){ 
        var $input_product_numbers = $(this).siblings('input'); 
        var product_nums = parseInt($input_product_numbers.val(),10) - 1;
        product_nums = 1 > product_nums? 1:product_nums;
        $input_product_numbers.val(product_nums)}
    );
}


// 日曆功能
function cal(){
    $("#birthday2_datepicker,#birthday_datepicker").datepicker(
        {
            //uiLibrary: 'bootstrap4',
            format: 'yyyy/mm/dd',
            startDate: '-3d',
            language: 'zh-TW'
        }
    );
}

// tooltip
function tooltip(){
   $("[data-toggle='tooltip']").tooltip();
}

$(document).ready(function(){
	  btn_top();
      number();
      cal();
      tooltip();
});
