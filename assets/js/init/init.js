$(document).ready(function(){


// mobile nav js
$('.menu-icon').click(function(){
	$('header').find('> ul').animate({
		'height' : 'toggle'
	},300 );
});

enquire.register("screen and (min-width: 1000px)", {
      setup : function() {
      // Load in content via AJAX (just the once)
    },
      match : function() {
      	$('header').find('ul').css({'display' : ''});
      },
      unmatch : function() {
      }
});



// index slider
	$('.index-slick').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });



// bread slider
	$('.bread-slick').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        // slidesToScroll: 3,
        centerMode: true,
        infinite: true,
        prevArrow: $('.bread-slider').find('.bread-back-btn'),
        nextArrow: $('.bread-slider').find('.bread-next-btn'),
        mobileFirst: true,
          responsive: [
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 3
		      }
		    }
  		]
    });




    // article slider
	$('.article-slick').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        // slidesToScroll: 3,
        infinite: true,
        prevArrow: $('.article-slider').find('.btn-tab-left'),
        nextArrow: $('.article-slider').find('.btn-tab-right'),
        mobileFirst: true,
          responsive: [
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 1290,
		      settings: {
		        slidesToShow: 3
		      }
		    }
  		]
    });



    // story video slider
	// $('.gallery-slick').slick({
 //        arrows: true,
 //        autoplay: false,
 //        slidesToShow: 3,
 //        // slidesToScroll: 3,
 //        centerMode: true,
 //        infinite: true,
 //        focusOnSelect: true,
 //        prevArrow: $('.gallery-slider').find('.bread-back-btn'),
 //        nextArrow: $('.gallery-slider').find('.bread-next-btn'),
 //        mobileFirst: true,
 //          responsive: [
	// 	    {
	// 	      breakpoint: 700,
	// 	      settings: {
	// 	        slidesToShow: 5
	// 	      }
	// 	    },
	// 	    {
	// 	      breakpoint: 1000,
	// 	      settings: {
	// 	        slidesToShow: 3
	// 	      }
	// 	    }
 //  		]
 //    });

 	$('.gallery-slick').slick({
 		arrows: true,
 		autoplay: false,
 		slidesToShow:2,
        infinite: true,
        focusOnSelect: true,
        prevArrow: $('.gallery-slider').find('.bread-back-btn'),
        nextArrow: $('.gallery-slider').find('.bread-next-btn'),
        mobileFirst: true,

        responsive: [
        	{
        		breakpoint: 520,
        		settings: {
        			slidesToShow: 3,
			 		centerMode: true
        		}

        	},
        	{
        		breakpoint: 768,
        		settings: {
        			slidesToShow: 3,
        			centerMode: true
        		}
        	},
        	{
        		breakpoint: 1000,
        		settings: {
        			slidesToShow: 5,
        			centerMode: true
        		}
        	}
        ]
 	});

    // story video slider
	$('.wellness-slick').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        // slidesToScroll: 3,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        prevArrow: $('.thumb-nav').find('.btn-tab-left'),
        nextArrow: $('.thumb-nav').find('.btn-tab-right'),
        mobileFirst: true,
          responsive: [
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 5
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 5
		      }
		    }
  		]
    });



    // tab nav slider
    // products-tab
    	$('.products-page').find('.tab').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        // slidesToScroll: 3,
        infinite: true,
        prevArrow: $('.tab-cont').find('.btn-tab-left'),
        nextArrow: $('.tab-cont').find('.btn-tab-right'),
        mobileFirst: true,
          responsive: [
		    {
		      breakpoint: 500,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 1290,
		      settings: {
		        slidesToShow: 6
		      }
		    }
  		]
    });

	// bread-tab
    $('.bread-page').find('.tab').slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        // slidesToScroll: 3,
        infinite: true,
        prevArrow: $('.tab-cont').find('.btn-tab-left'),
        nextArrow: $('.tab-cont').find('.btn-tab-right'),
        mobileFirst: true,
          responsive: [
		    {
		      breakpoint: 500,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 1290,
		      settings: {
		        slidesToShow: 5
		      }
		    }
  		]
    });



// ellipsis
	$('.hover-wrap').find('p').ellipsis({
		lines: 2,
		responsive: true
 	});

// ellipsis title
	$('.article-title').ellipsis({
		    lines: 4,
		    responsive: true
	});

// ellipsis wellness article sub-info
	$('.sub-info p').ellipsis({
		    lines: 4,
		    responsive: true
	});


// index video banner
// enquire.register("screen and (min-width: 1000px)", {
//       setup : function() {
//       // Load in content via AJAX (just the once)
//     },
//       match : function() {
// 		  $(function(){
// 		    jQuery("#bgndVideo").YTPlayer();
// 		  });
//       },
//       unmatch : function() {
//       }
// });


$('.office').on('click', '.location', function(){
	var loc = $(this).data('loc');
	// console.log(loc);
	$(this).addClass('active').siblings().removeClass('active');
	$('.map').find('#' + loc).addClass('active').siblings().removeClass('active');
});



  // products popup
function popPage(page){
  var url = 'includes/'+page+'.php';
  $.get(url, '', function(data){
    if(data){
        $('.pop-content').html(data);
        $('.'+page).dynamicPopup();
      }
  });
}
// popup ajax end


  $('.products').find('.products-wrap').click(function(){

  	popPage('products-pop'); 

 //  	var header_ht = $('header').outerHeight();
 //  	var banner_ht = $('.banner').outerHeight();
 //  	var tab_ht = $('.tab-cont').outerHeight();
 //  	var scroll = header_ht + banner_ht + tab_ht;
 //  	// console.log(scroll);
 //  	 $('html, body').animate({
	// 	scrollTop: scroll
	// }, 300);

  });


  // $('.products-page').find('.tab-cont').click(function(){
	 //  $('.products').find('.products-wrap').click(function(){

	 //  	popPage('products-pop'); 

	 //  	var header_ht = $('header').outerHeight();
	 //  	var banner_ht = $('.banner').outerHeight();
	 //  	var tab_ht = $('.tab-cont').outerHeight();
	 //  	var scroll = header_ht + banner_ht + tab_ht;
	 //  	// console.log(scroll);
	 //  	 $('html, body').animate({
		// 	scrollTop: scroll
		// }, 300);

	 //  });
  // });



  $('.products-page').find('.tab-wrap').click(function(){
  	$('.products-pop').find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeOut();
  });



// faqs js
$('.faqs-wrap').click(function(){

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else {		
		$(this).addClass('active');	
	}
});




$('.accordion-wrap').click(function(){

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	}
	else {
		$(this).addClass('active');	
	}
});



// careers-pop btn
$('.apply').find('a').click(function(){
	popPage('careers-pop');
	var header_ht = $('header').outerHeight();
  	var banner_ht = $('.banner').outerHeight();
  	var scroll = header_ht + banner_ht;
  	// console.log(scroll);
  	 $('html, body').animate({
		scrollTop: scroll
	}, 300);
});

$('.careers-pop').find('.btn-main').click(function(){
	careers_pop_close();
	popPage('careers-form');
	var header_ht = $('header').outerHeight();
  	var banner_ht = $('.banner').outerHeight();
  	var scroll = header_ht + banner_ht;
  	// console.log(scroll);
  	 $('html, body').animate({
		scrollTop: scroll
	}, 300);
});




// datetimepicker
// time
$("#dt-picker").DateTimePicker({
    dateSeparator: "/",
    dateFormat: "MM/dd/yyyy",
    timeFormat: "hh:mm AA"
});

//j2
$('.dtpicker-bg').click(function() {
	$('body').removeClass('hidebody-scroll');
});
 

// file attach
$('.attach-file input[type="file"]').change(function(){
    $('.attach-name').empty();
   	var fileName = $(this).val();
    $('.attach-name').append(fileName);    
});



// drop category change
$('.drop-cat').find('select').change(function(){
	var selected = $(this).val();
	if (selected == 'form-1') {
		$('.form-4').hide();
		$('.form-3').hide();
		$('.form-2').hide();
		$('.form-1').fadeIn();
	}
	else if (selected == 'form-2') {
		$('.form-4').hide();
		$('.form-3').hide();
		$('.form-1').hide();
		$('.form-2').fadeIn();
	}
	else if (selected == 'form-3') {
		$('.form-4').hide();
		$('.form-2').hide();
		$('.form-1').hide();
		$('.form-3').fadeIn();
	}
	else if (selected == 'form-4') {
		$('.form-3').hide();
		$('.form-2').hide();
		$('.form-1').hide();
		$('.form-4').fadeIn();
	}
	else {}
});




// radio wellness change
$('.booking').find('input[name="booking"]').change(function(){
	var selected = $('input[name="booking"]:checked').val();
	if (selected == 'direct') {
		$('.booking').find('.booking-agency').addClass('active');
	}
	else {
		$('.booking').find('.booking-agency').removeClass('active');
	}
});



// alert-pop
// $('.notification').notification();


function careers_pop_close() {
	$('.careers-pop').find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeOut();
}


// bread treats masonry
function masonry_load() {
  var $grid = $('.bread-treats').masonry({
    itemSelector: '.recipe-wrap',
    columnWidth: '.recipe-wrap',
    gutter: 10
  });
  var $grid = $('.bread-treats').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    itemSelector: '.recipe-wrap',
    columnWidth: '.recipe-wrap',
    gutter: 10
  });
});
}

  enquire.register("screen and (min-width: 700px)", {
      setup : function() {
      // Load in content via AJAX (just the once)
    },
      match : function() {
        masonry_load();
      },
      unmatch : function() {
          $('.bread-treats').masonry('destroy');
      }
  });




  // btn-toggle
  $('.activity-title, .btn-toggle').click(function(){
  	var check_active = $('.btn-toggle').hasClass('active');
  	if (check_active) {
  		$('.btn-toggle').removeClass('active');
  		$('.activity-detail').removeClass('active');
  	}
  	else {
  		$('.btn-toggle').addClass('active');
		$('.activity-detail').addClass('active');
  	}
  });



  // header search bar start
  $('header').find('.search').find('a').click(function(){
  	 $('html, body').animate({
		scrollTop : '0px'
	}, 300);
  	$('header').find('.search-form').fadeIn();
  });

   $('.search-form').find('.btn-search-close').click(function(){
  	$('header').find('.search-form').fadeOut();
  });
  // header search bar end




 // calculate bmi
 function bmi_calculator() {
	var bmi_feet = $('#bmi-feet').val();
	var bmi_inch = $('#bmi-inch').val();

	var bmi_ht = ((bmi_feet*12)+ parseInt(bmi_inch));

	var bmi_weight_lbs = $('#bmi-weight').val();
	var bmi_weight_kg = ($('#bmi-weight').val())*2.2;

	var bmi_wt_type = $('#bmi-wt-type').val();

	var bmi_results;

	$('.bmi-result').html('');
	$('#bmi-result').hide();
	$('.bmi-height-alert').hide();
	$('.bmi-weight-alert').hide();
	$('.bmi-note').html('');	

	if (bmi_feet == '' || bmi_inch == '' || bmi_weight_lbs == '') {
		if (bmi_feet == '' || bmi_inch == '') {
			$('.bmi-height-alert').html('"Height is required"');
			$('.bmi-height-alert').show();
		}
		if (bmi_weight_lbs == '') {
			$('.bmi-weight-alert').html('"Weight is required"');
			$('.bmi-weight-alert').show();			
		}
	}

	else {

			if (bmi_wt_type == 'lbs') {
				bmi_result = Math.round(( (bmi_weight_lbs/( bmi_ht * bmi_ht ))  * 703 ) * 100)/100;
				bmi_result = Math.round(bmi_result);
				$('#ter-bmi').val(bmi_result);
			}

			else {
				bmi_result = Math.round(( (bmi_weight_kg/( bmi_ht * bmi_ht ))  * 703 ) * 100)/100;
				bmi_result = Math.round(bmi_result);
				$('#ter-bmi').val(bmi_result);
			}

			// console.log(bmi_result);
			$('#bmi-result').show();
			$('.bmi-result').show().html(bmi_result);

			if (bmi_result < 18.5) {
				$('.bmi-result').show().html(bmi_result+' (UNDERWEIGHT) ');
			}
			else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
				$('.bmi-result').show().html(bmi_result+' (NORMAL) ');
			}
			else if (bmi_result >= 25 && bmi_result <= 29.9) {
				$('.bmi-result').show().html(bmi_result+' (OVERWEIGHT) ');
			}
			else if (bmi_result >= 30) {
				$('.bmi-result').show().html(bmi_result+' (OBESE) ');
			}
			else {}
	}
 }


 // calculate ter
 function ter_calculator() {
 	var ter_wt = $('#ter-weight').val();
	var ter_wt_lbs = ter_wt/2.2;
	var ter_wt_type = $('#ter-wt-type').val();
	var ter_bmi = $('#ter-bmi').val();
	var activity = $('#activity').val();
	var act_rate;
	// console.log(ter_wt);
	// console.log(ter_wt_type);
	// console.log(ter_bmi);
	// console.log(activity);

	$('.ter-weight-alert').hide();
	$('.ter-bmi-alert').hide();
	$('.ter-note').html('');
	$('.ter-note2').hide();	
	$('#ter-result').hide();		


	if (ter_wt == '' || ter_bmi == '') {
		if (ter_wt == '') {
			$('.ter-weight-alert').show();			
		}
		if (ter_bmi == '') {
			$('.ter-bmi-alert').show();				
		}
	}

	else {

		$('#ter-result').css({'display':'inline-block'});

		if (activity == 'sedentary') {
				act_rate = 30;
			}

			else if (activity == 'light') {
				act_rate = 35;
			}

			else if (activity == 'moderate') {
				act_rate = 40;
			}

			else if (activity == 'active') {
				act_rate = 45;
			}

			else {}

			if (ter_wt_type == 'lbs') {
				var ter = ter_wt_lbs * act_rate;
			}

			else  {
				var ter = ter_wt * act_rate;
			}

			var ter = ter_wt * act_rate;

			// Underweight
			if(ter_bmi < 18.5)
			{
				ter += 500;
			}
			// Normal weight
			else if(ter_bmi >= 18.5 && ter_bmi <= 24.9)
			{
				// Nothing to do here... normal weight :P
			}
			// Overweight or Pre-Obese
			else if(ter_bmi >= 25 && ter_bmi <= 29.9)
			{
				ter -= 500;
			}
			// Obese
			else if(ter_bmi >= 30)
			{
				ter -= 1000;
			}

			ter = Math.round(ter / 100)  * 100;

			$('.ter-result').show().html(ter);

			// var link = 'uploads/pdf/';
			var link = baseurl+'uploads/pdf/';


				if(ter >= 1000 && ter < 1100)
				{
					link += "1000.pdf";
					$('.ter-note2').show();
				}
				else if(ter >= 1100 && ter < 1200)
				{
					link += "1100.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1200 && ter < 1300)
				{
					link += "1200.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1300 && ter < 1400)
				{
					link += "1300.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1400 && ter < 1500)
				{
					link += "1400.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1500 && ter < 1600)
				{
					link += "1500.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1600 && ter < 1700)
				{
					link += "1600.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1700 && ter < 1800)
				{
					link += "1700.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1800 && ter < 1900)
				{
					link += "1800.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 1900 && ter < 2000)
				{
					link += "1900.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2000 && ter < 2100)
				{
					link += "2000.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2100 && ter < 2200)
				{
					link += "2100.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2200 && ter < 2300)
				{
					link += "2200.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2300 && ter < 2400)
				{
					link += "2300.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2400 && ter < 2500)
				{
					link += "2400.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2500 && ter < 2600)
				{
					link += "2500.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2600 && ter < 2700)
				{
					link += "2600.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2700 && ter < 2800)
				{
					link += "2700.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2800 && ter < 2900)
				{
					link += "2800.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 2900 && ter < 3000)
				{
					link += "2900.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3000 && ter < 3100)
				{
					link += "3000.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3100 && ter < 3200)
				{
					link += "3100.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3200 && ter < 3300)
				{
					link += "3200.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3300 && ter < 3400)
				{
					link += "3300.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3400 && ter < 3500)
				{
					link += "3400.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3500 && ter < 3600)
				{
					link += "3500.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3600 && ter < 3700)
				{
					link += "3600.pdf";
					$('.ter-note2').show();	
				}
				else if(ter >= 3700)
				{
					link += "3700.pdf";
					$('.ter-note2').show();	
				}
				else {}

				// console.log(link);

				if (ter_bmi < 18.5) {
					$('.ter-note').html('<p>You are below your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to GAIN atleast 1 pound (lb) per week.</p>');
				}
				else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
					$('.ter-note').html('<p>Congratulations! You are within your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to MAINTAIN a healthy weight.</p>');
				}

				else {
					$('.ter-note').html('<p>You are above your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to LOSE atleast 1 pound (lb) per week.</p>');
				}

				// $('.plan').html(link);
				$('.plan').attr('href', link);
	}	
 }



$('.btn-bmi').click(function() {
	bmi_calculator();
});

$('.btn-ter').click(function() {
	ter_calculator();
});

$('.calculator').keypress(function(e) {
	if (e.charCode == 13) {
      $(this).find('.btn-main').click();
    }
});


$('.calculator').find('input').keydown(function(e){
	if (e.keyCode == 38|| e.keyCode == 40) {
      return false;
    }
});

$('.calculator').find('input').keypress(function(e){
	if (String.fromCharCode(e.charCode) == '-') {
      return false;
    }
});





var html5_player = document.getElementById('jingle-audio');

function html5_player_init() {
   html5_player.controls = false;
}

html5_player_init();


$('.jingle-icon').click(function(){
	if ($('.jingle-icon').hasClass('active')) {
		$('.jingle-icon').removeClass('active');
		html5_player.pause();
	}
	else {
		$('.jingle-icon').addClass('active');
		html5_player.play();
	}
});



// bread nav
$('.products-page').find('.btn-tab-left').click(function() {
	$('.products-page').find('.tab-cont').find('.tab-wrap').removeClass('active');
	$('.products-page').find('.tab-cont').find('.slick-current').addClass('active');
	var bread_id = $('.products-page').find('.tab-cont').find('.slick-current').find('.cat').data('id');
	// console.log(bread_id);
	tabChange(bread_id);
});

$('.products-page').find('.btn-tab-right').click(function() {
	$('.products-page').find('.tab-cont').find('.tab-wrap').removeClass('active');
	$('.products-page').find('.tab-cont').find('.slick-current').addClass('active');
	var bread_id = $('.products-page').find('.tab-cont').find('.slick-current').find('.cat').data('id');
	// console.log(bread_id);
	tabChange(bread_id);
});




// print
$('.btn-print').click(function() {
	window.print();
});



function tab_focus() {
	var tab_active = $('.tab').find('.active').data('slick-index');
	$('.tab').slick('slickGoTo', tab_active);
}

tab_focus();

});


// $('.story-video').find('.slider-wrap').click(function(){
// 	$('#vid-content').hide();
// });