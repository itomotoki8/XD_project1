// スティッキーヘッダー
$(function(){
    var $win = $(window),
        $fv = $(".fv"),
        $header = $(".header"),
        fvHeight = $fv.outerHeight();
        fixedClass = "fixed";

    $win.on("load scroll",function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if( value > fvHeight) {
                $header.addClass(fixedClass);
            }else {
                $header.removeClass(fixedClass);
            }
        }
    })
});

// スライダー
$(".slider").slick({
    autoplay: true,
    autoplaySpeed:2000,
    speed:1000,
    fade:true,
    cssEase:"linear",
});

// ハンバーガーメニュー
$(".burger_btn").on("click",function(){
    $(".header_nav").fadeToggle(300);
    $(this).toggleClass("cross");
    $("body").toggleClass("noscroll");
});

$(".nav_item a").on("click",() => {
    $(".header_nav").fadeOut(300);
    $(".burger_btn").toggleClass("cross");
    $("body").toggleClass("noscroll");
});

