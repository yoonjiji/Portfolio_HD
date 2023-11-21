// JavaScript Document
$(function(){
 /* 베스트북 슬라이더 */
  var mySlider=$("#best ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:210,
        minSlides:5,
        maxSlides:5,
        slideMargin:50,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
 });  