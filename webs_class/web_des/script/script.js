(function($){
    // $(".submenu").css("display", "block");
    

    //첫번째 유형
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").css("display", "block");
    });

    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").css("display", "none");
    });

    //두번째 유형 전체보여줌
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "block");
    // });

    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display", "none");
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });

    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });

    //  $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slidDown(500);
    // });

    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slidUp(500);
    // });

    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slidDown(500);
    });

    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slidUp(500);
    });


  //탭메뉴
  var tabMenu = $(".section3");

  // tabMenu.find(".section3__article").hide();
  // tabMenu.find(".section3__article.active").show();

  function tabList(e){
      e.preventDefault();
      var target = $(this);  //사용자가 클릭한 메뉴
      target.parent(".section3A").parent(".section3__article").addClass("active").siblings(".section3__article").removeClass("active");
  }

  tabMenu.find(".section3__article > .section3A > .section3_title").click(tabList);


})(jquery);