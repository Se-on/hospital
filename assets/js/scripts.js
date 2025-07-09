$(function(){
  $(".navi").mouseover(function(){
    $(".megamenu").addClass("active");
    $(".megamenu-bg").addClass("active");
  });
  $(".navi").mouseleave(function(){
    $(".megamenu").removeClass("active");
    $(".megamenu-bg").removeClass("active");
  });

    $(".ghost .button span").addEventListener('click', function(){
    $(".megamenu").addClass("active");
    $(".megamenu-bg").addClass("active");
  });
});