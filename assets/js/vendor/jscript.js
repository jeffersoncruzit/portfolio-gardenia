$(document).ready(function(){
  // change class per page 
  if(module){
    $("#mainwrap").removeClass();
    $("#mainwrap").addClass('mainwrap '+module+'-page');

    if(module == 'gallery'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap story-'+module+'-page');
    }

    if(module == 'product-faqs'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap products-faqs-page');
    }

    if(module == 'recipes'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap bread-page');
      
      if(method == 'inner'){
        $("#mainwrap").removeClass();
        $("#mainwrap").addClass('mainwrap bread-inner-page');
      }
      
    }

    if(module == 'about-us' || module == 'milestones'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap story-page');
    }

    if(module == 'contact-us'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap contact-page');
    }

    if(module == 'plant-tour'){
      $("#mainwrap").removeClass();
      $("#mainwrap").addClass('mainwrap plant-page');
    }

  }else{
     $("#mainwrap").addClass('mainwrap index-page');
  }

});

// on change of cat
$(document).on('click', '.cat', function() {
  var id = $(this).data('id');
  var data_type = $(this).data('type');

  $(".tab-wrap").removeClass('active');
  $("#tab-wrap-"+id).addClass('active');

  tabChange(id, data_type);

  
});

function tabChange(id, data_type){

  if(data_type != null){ 

    // for recipe page
    var url = baseurl+module+'/categ'
    var url2 = baseurl+module+'/banner'
    $("#searchkey").val('');
    $("#recipecateg").val(id);
    
    // get banner
    $.get(url2,{cat:id}, function(data){
      //console.log(data); 
      $("#img-banner").attr("src",data);
      $('.banner-wrap').css('background-image', 'url(' + data + ')');
    });
    // get content
    $(".bread-treats").html(' ');
    $.get(url,{cat:id}, function(data){
      //console.log(data); 
      if(data){
        $(".bread-treats").html(data);
         setTimeout(function() {
            $('.bread-treats').masonry('reloadItems');
            $('.bread-treats').masonry('layout');
         }, 400);
      }  
    });

  }else{

    // for product page
    var url = baseurl+module+'/type'
    var url2 = baseurl+module+'/banner'
    // get banner
    $.get(url2,{type:id}, function(data){
      //console.log(data); 
      $("#img-banner").attr("src",data);
      $('.banner-wrap').css('background-image', 'url(' + data + ')');
    });
    // get content
    $.get(url,{type:id}, function(data){
      //console.log(data); .masonry( 'reload' )
     $(".products-holder").html(data);
    });

  }  
}


// products
$(document).on('click', '.products-wrap, .bread-back-btn, .bread-next-btn', function() {
  var id = $(this).data('id');
  var type = $(this).data('title');
  if(type == 'Gardenia Breads'){
    type = '';
  }
  var url = baseurl+module+'/inner'
  if(id != null){
    $.get(url,{id:id,type:type}, function(data){
      //console.log(data);
      if(data){
       	$('.pop-content').html(data);
        $('.products-pop').dynamicPopup();  
      }
    });
 }
});

//video gallery
$(document).on('click', '.img-wrap, .tvc-wrap', function() {

    var id = $(this).data('id');
    var url = baseurl+module+'/inner'
    $("#vid-content").css('display','none');
    $.get(url,{id:id}, function(data){
      $("#vid-content").html(data);
      
      $('html, body').animate({
          scrollTop: $("#vid-content").offset().top
      }, 3000);
      
      $('#vid-frame').on('load', function(){
        countdown = 3;
          interval = setInterval(function() {
          countdown--;
          if(countdown == 0) {
            $("#vid-content").css('display','block');
            clearInterval(interval);
          }
        }, 1000);

      });

    });

});

// on click of jobs
$(document).on('click', '#apply', function() {
  var id = $(this).data('id');
  var url = baseurl+module+'/inner'
  
  $.get(url,{id:id}, function(data){
    //console.log(data);
    $('.pop-content').html(data);
    $('.'+module+'-pop').dynamicPopup();   
  });
  
});

// career apply form pop-up
$(document).on('click', '#apply-form', function() {
   careers_pop_close();
   var title = $(this).data('title');
   var url = baseurl+module+'/apply';
   $.get(url,{title:title}, function(data){
     //console.log(data);
     $('.pop-content').html(data);
     $('.careers-form').dynamicPopup();   
   });

   var header_ht = $('header').outerHeight();
   var banner_ht = $('.banner').outerHeight();
   var scroll = header_ht + banner_ht;
   $('html, body').animate({
    scrollTop: scroll
   }, 300);

});


function careers_pop_close() {
  $('.careers-pop').find('.popup-container, .popup-main, .popup-wrap, .dynamic-popup, .btn-popup_close').fadeOut();
}

// career inner back and next btn
$(document).on('click', '#career-bck-btn, #career-nxt-btn', function() {
  var id = $(this).data('id');
  var url = baseurl+module+'/inner'
  $.get(url,{id:id}, function(data){
    //console.log(data);
    $('.pop-content').html(data);
    $('.'+module+'-pop').dynamicPopup(); 
  });
  
});

// newsroom
$(document).on('click', '.btn-back, .btn-next', function() {
    var page = $(this).data('page');
    var label = $(this).data('label');

    if(isNaN(method)){
      var url = baseurl+module+'/?page='+page;
      if(module == 'news'){
        var url = baseurl+module+'/'+method+'/?page='+page;
      }
    }else{
      var url = baseurl+module+'/?page='+page;
      if(module == 'search'){
        var url = baseurl+module+'/?skey='+label+'&page='+page;
      }
    }
    window.location.href= url;
});

// recipe search
$('#searchRecipe').on('submit', function(e) { 
  
  e.preventDefault(); 
  var url = baseurl+'recipes/search';
  var searchkey = $("#searchkey").val();  
  var recipetype = $("#recipetype").val();  
  var recipecateg = $("#recipecateg").val();  
  //console.log(data);
  $.post(url, {searchkey:searchkey, recipetype:recipetype, recipecateg:recipecateg }, function(data){
      try {
          $(".bread-treats").html(data);
      } catch(e){}
  });
}); 


$('#inqform').on('submit', function(e) {   
  $('#errMsg').html('');
  e.preventDefault(); 
  var data = $("#inqform").serializeArray();
  var url = baseurl+'process/inquiries';
  //console.log(url);
  $.post(url, data, function(data){
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#inqform")[0].reset();
               $('#errMsg').html('Thank you for sending in your proposal. Please be assured that we will carefully review your proposal and get in touch with you when necessary');
               $('.notification').notification();
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
}); 


$('#eventform').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault();

  if($('#contact').val()){
    var a = $('#contact').val();
    var filter = /^[0-9-+]+$/;
    if (!filter.test(a)) {
        $('#errMsg').html('Please enter a valid telephone number!');
        $('.notification').notification();
        return false;
    }
  }

  form = jQuery('#eventform');
  file = jQuery('.upload');

  ser    = form.serializeArray();
  newdata = new FormData();

  jQuery.each(ser, function(i, v) {
    newdata.append(v.name, v.value);
  });

  if(jQuery('.upload').length > 0) {
    file.each(function(i, v) {
        newdata.append('upload[]', file[i].files[0]);
      });
  }

  url = baseurl+'process/event/';
  jQuery.ajax({url            : url,
                 type           : 'POST',
                 data           : newdata,
                 processData    : false,
                 contentType    : false,
                 async          : true,
                 cache          : false,
                 success        : function(data) {
                   console.log(data);
                   d = jQuery.parseJSON(data);
                   if(isNaN(d.result)){
                      $('#errMsg').html(d.result);
                      $('.notification').notification();
                   }else{
                      $(".attach-name").html('');
                      $("#eventform")[0].reset();
                      $('#errMsg').html('Thank you for inviting Gardenia to your event! Please be assured that we will get back to you as soon as possible to confirm your request.');
                      $('.notification').notification();
                   }
                }
    });
  return false;
}); 

$('#productform').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault(); 
  var data = $("#productform").serializeArray();
  var url = baseurl+'process/prodconcern';
  //console.log(url);
  $.post(url, data, function(data){
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#productform")[0].reset();
               $('#errMsg').html('Thank you for visiting Gardenia website! We truly appreciate the time and effort you have given for this inquiry. Please be assured that we will get back to you to address your concern as soon as possible.');
               $('.notification').notification();
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
}); 

$('#salesform').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault(); 
  var data = $("#salesform").serializeArray();
  var url = baseurl+'process/salesinq';
  //console.log(url);
  $.post(url, data, function(data){
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#salesform")[0].reset();
               $('#errMsg').html('Thank you for sending in your inquiry. Please be assured that we will get back to you to address your request as soon as possible.');
               $('.notification').notification();
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
}); 

$('#serviceform').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault();

  form = jQuery('#serviceform');
  file = jQuery('.upload');

  ser    = form.serializeArray();
  newdata = new FormData();

  jQuery.each(ser, function(i, v) {
    newdata.append(v.name, v.value);
  });

  if(jQuery('.upload').length > 0) {
    file.each(function(i, v) {
        newdata.append('upload[]', file[i].files[0]);
      });
  }

  url = baseurl+'process/proposalinq/';
  jQuery.ajax({url            : url,
                 type           : 'POST',
                 data           : newdata,
                 processData    : false,
                 contentType    : false,
                 async          : true,
                 cache          : false,
                 success        : function(data) {
                   console.log(data);
                   d = jQuery.parseJSON(data);
                   if(isNaN(d.result)){
                      $('#errMsg').html(d.result.replace(/<:>/gi,'<br />'));
                      $('.notification').notification();
                   }else{
                      $(".attach-name").html('');
                      $("#serviceform")[0].reset();
                      $('#errMsg').html('Thank you');
                      $('.notification').notification();
                   }
                }
    });
  return false;
}); 


// plant tours
$(document).ready(function() {
    $('input[type=radio][name=booking]').change(function() {
        if(this.value == 'agency'){
          $('#agency').prop('required',true);
        }else{
          $('#agency').removeAttr('required');
          $('#agency').val('');
        }
    });
});

$(document).on('click', '#tour-btn', function() {
   $('html, body').animate({
      scrollTop: $(".form").offset().top
  }, 2000);
});

$('#tourform').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault(); 

  if($('#head_count').val()){
    var a = $('#head_count').val();
    var filter = /^[0-9]+$/;
    if (!filter.test(a)) {
        $('#errMsg').html('Please enter a valid head count!');
        $('.notification').notification();
        return false;
    }
  }

  if($('#contact').val()){
    var a = $('#contact').val();
    var filter = /^[0-9-+]+$/;
    if (!filter.test(a)) {
        $('#errMsg').html('Please enter a valid contact number!');
        $('.notification').notification();
        return false;
    }
  }

  if($('#faxno').val()){
    var a = $('#faxno').val();
    var filter = /^[0-9-+]+$/;
    if (!filter.test(a)) {
        $('#errMsg').html('Please enter a valid fax number!');
        $('.notification').notification();
        return false;
    }
  }
  var data = $("#tourform").serializeArray();
  var url = baseurl+'process/tours';
  //console.log(url);
  $.post(url, data, function(data){
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#tourform")[0].reset();
               $('#errMsg').html('Thank you for visiting Gardenia website! We at Gardenia would love to see you. Please be assured that we will get back to you as soon as possible to confirm your booking.');
               $('.notification').notification();
               var selected = $('input[name="booking"]:checked').val();
               if (selected == 'direct') {
                 $('.booking').find('.booking-agency').addClass('active');
               } else {
                 $('.booking').find('.booking-agency').removeClass('active');
               }
               
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
}); 

// wellness gallery
$(document).on('click', '#thumb-img', function() {
  var img = baseurl+'uploads/images/'+$(this).data('title');
  $('#wellness-img').attr("src", img)
});

// wellness event form
$('#event-wellnessForm').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault(); 
  var data = $("#event-wellnessForm").serializeArray();
  var url = baseurl+'process/wellnessevent';
  //console.log(url);
  $.post(url, data, function(data){
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#event-wellnessForm")[0].reset();
               $('#errMsg').html('Thank you for inviting Gardenia to your event! Please be assured that we will get back to you as soon as possible to confirm your request. <br /><br/>Your partner in wellness,<br/>Gardenia Nutrition and Wellness Team');
               $('.notification').notification();
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
});

// wellness event form
$('#askForm').on('submit', function(e) { 
  $('#errMsg').html('');
  e.preventDefault(); 
  var data = $("#askForm").serializeArray();
  var url = baseurl+'process/wellnessAsk';
  //console.log(url);
  $.post(url, data, function(data){
    console.log(data);
      try {
          var resultdata = JSON.parse(data);
          console.log(resultdata.result);
          if($.isNumeric(resultdata.result)) {
               $("#askForm")[0].reset();
               $('#errMsg').html('Thank you for sending in your inquiry. Please be assured that we will get back to you to address your request as soon as possible.');
               $('.notification').notification();
          }else{
              var msg = resultdata.result.replace(/<:>/gi,'<br />');
              $('#errMsg').html(msg);
              $('.notification').notification();
          }  
      } catch(e){}
  });
});

// socials
$(document).on('click', '#sharenow', function() {
  var id = $(this).data('id');
  var title = $(this).data('title');
  var type = $(this).data('type');
  var label = $(this).data('label');
  var pg = 'news';
  if(label != null){
    pg = label;
  }

  if(type == 'facebook'){
      var u = baseurl+pg+'/share_this/'+id;
      window.open('http://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(u).replace( /\%20/g, '+' ).replace( /!/g, '%21' ).replace( /'/g, '%27' ).replace( /\(/g, '%28' ).replace( /\)/g, '%29' ).replace( /\*/g, '%2A' ).replace( /\~/g, '%7E' )
      ,'sharer','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  }else if(type == 'twitter'){
      if(label == 'recipes'){
        pg = label+'/inner/';
      }
      var u = baseurl+pg+'/'+title;
      var t = title;
      window.open('https://www.twitter.com/share?url='+encodeURIComponent(u).replace( /\%20/g, '+' ).replace( /!/g, '%21' ).replace( /'/g, '%27' ).replace( /\(/g, '%28' ).replace( /\)/g, '%29' ).replace( /\*/g, '%2A' ).replace( /\~/g, '%7E' )
        +'&text='+encodeURIComponent(t).replace( /\%20/g, '+' ).replace( /!/g, '%21' ).replace( /'/g, '%27' ).replace( /\(/g, '%28' ).replace( /\)/g, '%29' ).replace( /\*/g, '%2A' ).replace( /\~/g, '%7E' ).replace(/\%27/g,'\'').replace(/\%21/g,'!').replace(/\%2C/g,',').replace(/\%40/g,'@')
        ,'sharer','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
   }else if(type == 'google'){
      if(label == 'recipes'){
        pg = label+'/inner/';
      }
      var u = baseurl+pg+'/'+title;
      window.open("https://plus.google.com/share?url="+encodeURIComponent(u).replace( /\%20/g, '+' ).replace( /!/g, '%21' ).replace( /'/g, '%27' ).replace( /\(/g, '%28' ).replace( /\)/g, '%29' ).replace( /\*/g, '%2A' ).replace( /\~/g, '%7E' ),"","height=550,width=525,left=100,top=100,menubar=0");
   }

  return false;
  
});

