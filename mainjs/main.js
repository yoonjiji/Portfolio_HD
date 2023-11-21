$(function(){

}); //function end


$(document).ready(function() {
  // 초기 이미지 설정
  $('.ic_img1').hide();

  $('.toggle-trigger').click(function() {
    var $toggleContent = $(this).siblings('.cont2_pc_sub, .cont2_t_sub, .cont2_m_sub');
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

//visual slide
jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
  
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  
    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
  });
  
  
  
  //visual slide2
  jQuery(document).ready(function ($) {
  
    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
  
    var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options);
  
    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});