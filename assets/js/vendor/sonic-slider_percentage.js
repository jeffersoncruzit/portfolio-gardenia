(function ( $ ) {

$.fn.sonicSlider = function ( options ) {
  var settings = $.extend({
    ratioWidth: "",
    ratioHeight: "",
    slidesToShow : 1,
    slidesInfinite : true

    }, options);

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  var target = $(this);
  var slide_count = target.find('.slide-section').length;
  var slide_count_max = slide_count-1;
  var change_active = 0;
  var slide_slider_width = 100*slide_count;
  var slidesToShow = settings.slidesToShow;
  var slide_section_width = (100/slide_count)/slidesToShow;
  var ratio_height = settings.ratioHeight;
  var ratio_width = settings.ratioWidth;
  var aspect_ratio = ratio_height/ratio_width;
  var window_height;
  var slide_main_height;
  var last_remaining_slides = slide_count-slidesToShow;
  var slidesInfinite = settings.slidesInfinite;
  var slides_remainder = slide_count%slidesToShow;

// check digit count
  function getlength(number) {
    return number.toString().length;
}

  // arrow btn
  target.find('.slide-main').find('.btn-slide_prev').remove();
  target.find('.slide-main').find('.btn-slide_next').remove();
  if (slide_count > 1) {

    target.find('.slide-main').prepend('<div class="btn-slide_prev"></div><div class="btn-slide_next"></div>');
  }

  //arrow enable/disable
  function disable_prev() {
    target.find('.btn-slide_prev').css({'opacity' : '0.5'})
  }

  function enable_prev() {
    target.find('.btn-slide_prev').css({'opacity' : '1'})
  }

  function disable_next() {
    target.find('.btn-slide_next').css({'opacity' : '0.5'})
  }

  function enable_next() {
    target.find('.btn-slide_next').css({'opacity' : '1'})
  }

  function check_arrow_infinite_init() {
    if ((slidesInfinite == false) && (change_active == 0)) {
      disable_prev();
    }

    else if ((slidesInfinite == false) && (change_active == slide_count_max)) {
      disable_next();
    }

    else {
      enable_prev();
      enable_next();
    }

  }

  check_arrow_infinite_init();

  // aspect ratio
  function aspect_ratio_init() {

    if (ratio_width && ratio_height) {
      slide_section_width = target.find('.slide-section').width();
      slide_section_height = slide_section_width*aspect_ratio;

      target.find('.slide-section').css({
      'height' : slide_section_height+'px'
      });
      target.find('.slide-section').perfectScrollbar();
    }

    else {
      window_height = $(window).height();
      slide_main_height = $('.slide-main').height();

      // console.log('window_height: '+window_height)
      // console.log('slide_main_height: '+slide_main_height)

      target.find('.slide-section').css({
      'height' : 'auto'
      });

      if (slide_main_height > window_height) {
        target.find('.slide-container').css({
          'height' : '100%'
        });
        target.find('.slide-container').perfectScrollbar();
      }
    }

  }

  // IE fixed var
  var divide;
  var slide_main_width;
  var slide_section_width;

  function slide_activate() {
    target.find('.slide-container, .slide-main, .slide-wrap, .dynamic-slide, .btn-slide_close').fadeIn();
  }

  function slide_deactivate() {
    target.find('.slide-container, .slide-main, .slide-wrap, .dynamic-slide, .btn-slide_close').fadeOut();
  }

  function IE_responsiveness() {
    divide = parseFloat((100/slide_count).toFixed(2));
    slide_main_width = target.find('.slide-main').outerWidth();
    slide_slider_width = slide_count*slide_main_width;
    slide_section_IE_width = parseFloat(slide_main_width/slidesToShow).toFixed(2);

    target.find('.slide-section').css({
      'width': slide_section_IE_width+'px'
    });

    target.find('.slide-slider').css({
      'width': slide_slider_width+'px'
    });


    if (ratio_width && ratio_height) {
      slide_section_width = slide_main_width;
      slide_section_height = slide_section_width*aspect_ratio;

      target.find('.slide-section').css({
      'height' : slide_section_height+'px'
      });
      target.find('.slide-section').perfectScrollbar();
    }

    else {
      target.find('.slide-section').css({
      'height' : 'auto'
      });
    }
  }

  function browser_responsive() {
    divide = parseFloat((100/slide_count));
    slide_main_width = parseFloat(target.find('.slide-main').width().toFixed(2));
    slide_slider_width = (slide_count*slide_main_width)/slidesToShow;
    // console.log('slide_slider_width :'+slide_slider_width);
    slide_section_IE_width = parseFloat(slide_main_width/slidesToShow);

    // initial slide active
    target.find('.slide-section').eq(0).addClass('slide-active');

    target.find('.slide-slider').css({'left':'0px'});

    target.find('.dynamic-slide').css({
      'width': slide_main_width+'px'
    });

    target.find('.slide-section').css({
      'width': slide_section_IE_width+'px'
    });

    target.find('.slide-slider').css({
      'width': slide_slider_width+'px'
    });


    if (ratio_width && ratio_height) {
      slide_section_width = slide_main_width;
      slide_section_height = slide_section_width*aspect_ratio;

      target.find('.slide-section').css({
      'height' : slide_section_height+'px'
      });
      target.find('.slide-section').perfectScrollbar();
    }

    else {
      target.find('.slide-section').css({
      'height' : 'auto'
      });
    }
  }


  function check_browser() {

    browser_responsive();
    setTimeout(browser_responsive, 30);
    setTimeout(browser_responsive, 100);

      // if ((isIE==true) || (isEdge==true)) {
      //   IE_responsiveness();
      //   setTimeout(IE_responsiveness, 30);
      //   setTimeout(IE_responsiveness, 100);
      // }
      //
      // else {
      //   browser_responsive();
      //   setTimeout(browser_responsive, 30);
      //   setTimeout(browser_responsive, 100);
      //
      //   // aspect_ratio_init();
      //   // setTimeout(aspect_ratio_init, 30);
      //   // setTimeout(aspect_ratio_init, 100);
      // }

  }

  function dynamic_slide_init() {

    browser_responsive();
    setTimeout(browser_responsive,30);
    setTimeout(browser_responsive,100);

      // if ((isIE==true) || (isEdge==true)) {
      //   slide_activate();
      //   IE_responsiveness();
      //   setTimeout(IE_responsiveness,30);
      //   setTimeout(IE_responsiveness,100);
      // }
      // else {
      //   slide_activate();
      //   browser_responsive();
      //   // aspect_ratio_init();
      // }

  }

  target.find('.btn-slide_close, .slide-wrap').click(function(){
    slide_deactivate();
  });

  target.find('.slide-slider').css({
    'width': slide_slider_width+'%'
  });

  target.find('.slide-section').css({
    'width' : slide_section_width+'%',
    'display' : 'inline-block',
    'float' : 'left'
  });

// btn-prev
  function btn_prev() {
    check_active = target.find('.slide-active').index();

    if (check_active > 0) {
      change_active = check_active - 1;
      target.find('.slide-section').removeClass('slide-active');
      target.find('.slide-section').eq(change_active).addClass('slide-active');

      // check last remaining slides
        if (check_active > last_remaining_slides) {
        // unslide
        check_arrow_infinite_init();
        }
        else {
          target.find('.slide-slider').css({'left':'-'+(((slide_slider_width/slide_count)*change_active))+'px'});
          check_arrow_infinite_init();
        }



    }

    else {
      // check infinite slidesInfinite
      if (slidesInfinite == true) {
      change_active = slide_count_max;
      target.find('.slide-slider').css({'left':'-'+(last_remaining_slides*slide_section_IE_width)+'px'});
      // console.log('slides_remainder :'+slides_remainder);
      // console.log('slide_section_IE_width :'+slide_section_IE_width);
      // console.log('last_remaining_slides :'+last_remaining_slides);
      // console.log(last_remaining_slides*slide_section_IE_width);

      target.find('.slide-section').removeClass('slide-active');
      target.find('.slide-section').eq(change_active).addClass('slide-active');
      check_arrow_infinite_init();
      }

      check_arrow_infinite_init();
    }
  }

  target.find('.btn-slide_prev').click(function(){
    btn_prev();
  });

// btn-next
  function btn_next() {
    check_active = target.find('.slide-active').index();

    if (check_active < slide_count_max) {
      change_active = check_active + 1;
      //check last group of slide
        if (check_active >= last_remaining_slides) {
          // unslide
          check_arrow_infinite_init();
          }
        else {
            // target.find('.slide-slider').css({'left':'-'+(change_active*100/slidesToShow)+'%'});
            target.find('.slide-slider').css({'left':'-'+(((slide_slider_width/slide_count)*change_active))+'px'});
            check_arrow_infinite_init();
          }

      target.find('.slide-section').removeClass('slide-active');
      target.find('.slide-section').eq(change_active).addClass('slide-active');
    }

    else {
      if (slidesInfinite == true) {
        change_active = 0;
        target.find('.slide-slider').css({'left':'0px'});
        target.find('.slide-section').removeClass('slide-active');
        target.find('.slide-section').eq(change_active).addClass('slide-active');
        check_arrow_infinite_init();
      }

      check_arrow_infinite_init();
    }

  }

  target.find('.btn-slide_next').click(function(){
    btn_next();
  });


  // btn-submit
    function btn_submit(){
      check_active = target.find('.slide-active').index();

      if (check_active < slide_count_max) {
        change_active = check_active + 1;
        target.find('.slide-slider').css({'left':'-'+(change_active*100)+'%'});
        target.find('.slide-section').removeClass('slide-active');
        target.find('.slide-section').eq(change_active).addClass('slide-active');
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
  target.find('.btn-slide_submit').click(function(){
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
    setTimeout(check_browser, 30);
    setTimeout(check_browser, 100);

  });


  // onload
  dynamic_slide_init();
  check_browser();




// nav to main img start
  $('.dynamic-slider').find('.btn-slide_prev, .btn-slide_next').click(function(){
    var get_img = $('.dynamic-slider').find('.slide-active').find('img').attr('src');
    $('.img-main').find('img').attr('src', get_img);
  });
// nav to main img end





  };

}( jQuery ));
