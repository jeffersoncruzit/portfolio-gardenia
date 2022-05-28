(function ( $ ) {

$.fn.dynamicPopup = function ( options ) {
  var settings = $.extend({
    ratioWidth: "",
    ratioHeight: ""

    }, options);

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  var target = $(this);
  var popup_count = target.find('.popup-section').length;
  var popup_count_max = popup_count-1;
  var change_active = 0;
  var popup_slider_width = 100*popup_count;
  var popup_section_width = 100/popup_count;
  var ratio_height = settings.ratioHeight;
  var ratio_width = settings.ratioWidth;
  var aspect_ratio = ratio_height/ratio_width;
  var window_height;
  var popup_main_height;

  target.find('.popup-section').eq(0).addClass('popup-active');

  // arrow btn
  target.find('.popup-main').find('.btn-popup_prev').remove();
  target.find('.popup-main').find('.btn-popup_next').remove();
  if (popup_count > 1) {

    target.find('.popup-main').prepend('<div class="btn-popup_prev"></div><div class="btn-popup_next"></div>');
  }

  // aspect ratio
  function aspect_ratio_init() {

    if (ratio_width && ratio_height) {
      popup_section_width = target.find('.popup-section').width();
      popup_section_height = popup_section_width*aspect_ratio;

      target.find('.popup-section').css({
      'height' : popup_section_height+'px'
      });
      target.find('.popup-section').perfectScrollbar();
    }

    else {
      window_height = $(window).height();
      popup_main_height = target.find('.popup-main').height();

      // console.log('window_height: '+window_height)
      // console.log('popup_main_height: '+popup_main_height)

      target.find('.popup-section').css({
      'height' : 'auto'
      });

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
        target.find('.popup-container').perfectScrollbar();
      }
    }

  }

  // IE fixed var
  var divide;
  var popup_main_width;
  var popup_section_width;

  var check_remainer_3 = popup_count%3;
  var check_remainer_7 = popup_count%7;

  function popup_activate() {
    target.find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeIn();
    $('body').addClass('stop-scroll');
    // target.find('.popup-container').addClass('dropDownMenu');
  }

  function popup_deactivate() {
    target.find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeOut();
    $('body').removeClass('stop-scroll');
  }

  function IE_responsiveness() {
    divide = parseFloat((100/popup_count).toFixed(2));
    popup_main_width = target.find('.popup-main').outerWidth();
    popup_slider_width = popup_count*popup_main_width;

    target.find('.popup-section').css({
      'width': popup_main_width+'px'
    });

    target.find('.popup-slider').css({
      'width': popup_slider_width+'px'
    });


    if (ratio_width && ratio_height) {
      popup_section_width = popup_main_width;
      popup_section_height = popup_section_width*aspect_ratio;

      target.find('.popup-section').css({
      'height' : popup_section_height+'px'
      });
      target.find('.popup-section').perfectScrollbar();
    }

    else {
      window_height = $(window).height();
      popup_main_height = target.find('.popup-main').height();

      target.find('.popup-section').css({
      'height' : 'auto'
      });

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
        target.find('.popup-container').perfectScrollbar();
      }

    }
  }


  function check_browser() {
    if ((check_remainer_3 == 0) || (check_remainer_7) == 0) {
      if ((isIE==true) || (isEdge==true)) {
        IE_responsiveness();
        setTimeout(IE_responsiveness, 30);
        setTimeout(IE_responsiveness, 100);
      }
      else {
        aspect_ratio_init();
        setTimeout(aspect_ratio_init, 30);
        setTimeout(aspect_ratio_init, 100);
      }
    }

    else {
      aspect_ratio_init();
      setTimeout(aspect_ratio_init, 30);
      setTimeout(aspect_ratio_init, 100);
    }
  }

  function dynamic_popup_init() {
    if ((check_remainer_3 == 0) || (check_remainer_7) == 0) {
      if ((isIE==true) || (isEdge==true)) {
        popup_activate();
        IE_responsiveness();
        setTimeout(IE_responsiveness,30);
        setTimeout(IE_responsiveness,100);
      }
      else {
        popup_activate();
        aspect_ratio_init();
      }
    }

    else {
      popup_activate();
      aspect_ratio_init();
    }
  }

  target.find('.btn-popup_close, .popup-wrap').click(function(){
    popup_deactivate();
  });

  target.find('.popup-slider').css({
    'width': popup_slider_width+'%'
  });

  target.find('.popup-section').css({
    'width' : popup_section_width+'%',
    'display' : 'inline-block',
    'float' : 'left'
  });

// btn-prev
  function btn_prev() {
    check_active = target.find('.popup-active').index();

    if (check_active > 0) {
      change_active = check_active - 1;
      target.find('.popup-slider').css({'left':'-'+(change_active*100)+'%'});
      target.find('.popup-section').removeClass('popup-active');
      target.find('.popup-section').eq(change_active).addClass('popup-active');
    }
    else {
      change_active = popup_count_max;
      target.find('.popup-slider').css({'left':'-'+(change_active*100)+'%'});
      target.find('.popup-section').removeClass('popup-active');
      target.find('.popup-section').eq(change_active).addClass('popup-active');
    }
  }

  target.find('.btn-popup_prev').click(function(){
    btn_prev();
  });

// btn-next
  function btn_next() {
    check_active = target.find('.popup-active').index();

    if (check_active < popup_count_max) {
      change_active = check_active + 1;
      target.find('.popup-slider').css({'left':'-'+(change_active*100)+'%'});
      target.find('.popup-section').removeClass('popup-active');
      target.find('.popup-section').eq(change_active).addClass('popup-active');
    }

    else {
      change_active = 0;
      target.find('.popup-slider').css({'left':'-'+(change_active*100)+'%'});
      target.find('.popup-section').removeClass('popup-active');
      target.find('.popup-section').eq(change_active).addClass('popup-active');
    }
  }

  target.find('.btn-popup_next').click(function(){
    btn_next();
  });


  // btn-submit
    function btn_submit(){
      check_active = target.find('.popup-active').index();

      if (check_active < popup_count_max) {
        change_active = check_active + 1;
        target.find('.popup-slider').css({'left':'-'+(change_active*100)+'%'});
        target.find('.popup-section').removeClass('popup-active');
        target.find('.popup-section').eq(change_active).addClass('popup-active');
      }
      else {}
    }

  var filter_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var filter_number = /^[1-9]\d*(\.\d+)?$/;
  function validate(check_type,check_input) {
    if (check_type == 'text') {
      validation = true;
    }

    if (check_type == 'textarea') {
      validation = true;
    }

    if (check_type == 'password') {
      validation = true;
    }

    if (check_type == 'number') {
      if(filter_number.test(check_input)) {
          validation = true;
      }
      else {
        validation = false;
      }
    }

    if (check_type == 'email') {
        if(filter_email.test(check_input)) {
          validation = true;
        }
        else {
          validation = false;
        }
    }
    return validation;
  }


    var check_input;
    var input_max;
    var validation;
    var check_type;
    var validation_final;
    var validation_array = [];
    var check_validation_array;
  target.find('.btn-popup_submit').click(function(){
    check_input = "";
    input_max = $(this).parent().find(':input[type="text"], :input[type="number"], :input[type="password"], :input[type="email"], textarea').length;
    validation = true;
    check_type = "";
    validation_final = true;
    validation_array = [];

    for(i=0;i<input_max;i++) {
      check_input = $(this).parent().find(':input[type="text"], :input[type="number"], :input[type="password"], :input[type="email"], textarea').eq(i).val();
      check_type = $(this).parent().find(':input[type="text"], :input[type="number"], :input[type="password"], :input[type="email"], textarea').eq(i).prop('type');

        if (check_input) {
            validation = validate(check_type,check_input);
        }
        else {
          validation = false;
        }
        validation_array.push(validation);
    }

    // console.log(validation_array);

    (function(){
     for (i=0;i<input_max;i++) {
      check_validation_array = validation_array[i];
      if (check_validation_array == false) {
        validation_final = false;
        return validation_final;
        }
      }
    })();

    if (validation_final == true) {
      // console.log('valid input');
      btn_submit();
    }

    else {
      // console.log('invalid input');
    }


  });



  $(window).resize(function(){

    check_browser();

  });


  // onload
  dynamic_popup_init();
  check_browser();












  };

}( jQuery ));
