(function ( $ ) {

$.fn.dynamicPopup = function ( options ) {
  var settings = $.extend({

    }, options);

  var target = $(this);
  var window_height;
  var popup_main_height;

  // aspect ratio
  function aspect_ratio_init() {

      window_height = $(window).height();
      popup_main_height = target.find('.popup-main').height();

      if (popup_main_height > window_height) {
        target.find('.popup-container').css({
          'height' : '100%'
        });
        target.find('.popup-container').perfectScrollbar();
      }

      else {
        target.find('.popup-container').css({
          'height' : 'auto'
        });
      }

  }

  function popup_activate() {
    target.find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeIn();
    $('body').addClass('stop-scroll');
    // target.find('.popup-container').addClass('dropDownMenu');
  }

  function popup_deactivate() {
    target.find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeOut();
    $('body').removeClass('stop-scroll');
  }

  function dynamic_popup_init() {
      popup_activate();
      aspect_ratio_init();
  }

  target.find('.btn-popup_close, .popup-wrap').click(function(){
    popup_deactivate();
  });

  $(window).resize(function(){

    aspect_ratio_init();

  });


  // onload
  dynamic_popup_init();

  };

}( jQuery ));
