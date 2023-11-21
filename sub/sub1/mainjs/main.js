$(function(){

}); //function end

/*TAB MENU3 +,- 토글 조정*/
$(document).ready(function() {
    // 초기 이미지 설정
    $('.ic_img1').hide();
  
    $('.toggle-trigger').click(function() {
      var $toggleContent = $(this).siblings('.t_c2_3_sub');
      var $icImg = $(this).find('.ic_img');
      var $icImg1 = $(this).find('.ic_img1');
  
      $toggleContent.slideToggle();
  
      $(this).toggleClass('toggle-active');
  
      if ($(this).hasClass('toggle-active')) {
        $icImg.hide();
        $icImg1.show();
      } else {
        $icImg.show();
        $icImg1.hide();
      }
    });
  });