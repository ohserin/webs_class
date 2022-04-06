(function($){

$(".nav > ul > li").mouseover(function(){
    $(this).find(".foodmenu").css("display", "block");
});

$(".nav > ul > li").mouseout(function(){
    $(this).find(".foodmenu").css("display", "none");
});

 //탭메뉴





})(jQuery);
