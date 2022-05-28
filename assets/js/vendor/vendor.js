$(document).ready(function(){


// var filter_number = /^[0-9]\d*(\.\d+)?$/;
// var key_input;
// var key_length;


// var filter_target = $('.filter-number');
// var filter_digit_2 = $('.digit-2').find('.filter-number');
// var filter_digit_3 = $('.digit-3').find('.filter-number');
// var filter_digit_7 = $('.digit-7').find('.filter-number');

// filter_digit_2.keypress(function(event) {

//     key_input = String.fromCharCode(event.charCode);

//     key_length = filter_digit_2.val().length;

//         if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
//             return true;
//         }

//         else {

//           if (key_length < 2) {
//               if (filter_number.test(key_input)) {
//                   return true;
//               }
//               else {
//                   return false;
//               }
//           }

//           else {
//             return false;
//           }

//         }

//   });


//   filter_digit_3.keypress(function(event) {

//       key_input = String.fromCharCode(event.charCode);

//       key_length = filter_digit_3.val().length;

//           if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
//               return true;
//           }

//           else {

//             if (key_length < 3) {
//                 if (filter_number.test(key_input)) {
//                     return true;
//                 }
//                 else {
//                     return false;
//                 }
//             }

//             else {
//               return false;
//             }

//           }

//     });


//     filter_digit_7.keypress(function(event) {

//         key_input = String.fromCharCode(event.charCode);

//         key_length = filter_digit_7.val().length;

//             if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
//                 return true;
//             }

//             else {

//               if (key_length < 7) {
//                   if (filter_number.test(key_input)) {
//                       return true;
//                   }
//                   else {
//                       return false;
//                   }
//               }

//               else {
//                 return false;
//               }

//             }

//       });


//     filter_target.keydown(function(event) {

//       if (event.keyCode == 38 || event.keyCode == 40) {
//           return false;
//       }

//       else if (event.keyCode == 37 || event.keyCode == 39) {
//           return true;
//       }

//       else {}

//     });




// // check remaining count
// var title_limit = $('.title-limit');
// var textarea_limit = $('.textarea-limit');
// var text_length;
// var text_title_max = 50;
// var text_textarea_max = 1000;
// var text_remaining;

// // attr maxlength
// title_limit.attr('maxlength', text_title_max);
// textarea_limit.attr('maxlength', text_textarea_max);


// title_limit.keypress(function(event){
//   text_length = title_limit.val().length;

//   if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
//     return true;
//     }

//   else {
//       if (text_length < text_title_max) {
//         return true;
//       }
//       else {
//         return false;
//       }
//   }
// });

// title_limit.keyup(function() {
//     text_length = title_limit.val().length;
//     var text_remaining = text_title_max - text_length;
//     $('.title-count').html(text_remaining);
// });

// textarea_limit.keypress(function(event){
//   text_length = textarea_limit.val().length;

//   if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
//     return true;
//     }

//   else {
//       if (text_length < text_textarea_max) {
//         return true;
//       }
//       else {
//         return false;
//       }
//   }
// });

// textarea_limit.keyup(function() {
//     text_length = textarea_limit.val().length;
//     var text_remaining = text_textarea_max - text_length;
//     $('.textarea-count').html(text_remaining);
// });





// native javascript
// var class_age = document.getElementsByClassName('filter-age');
// var class_cel = document.getElementsByClassName('filter-celno');
 //    class_age[0].onkeypress = function(event) {
 //    key_input = String.fromCharCode(event.charCode);
 //    // console.log(event.keyCode);
 //    // console.log(key_input);

 //    if (event.keyCode == 8 || event.keyCode == 46) {
 //        // console.log('backspace or delete');
 //        return true;
 //    }

	// else if (filter_number.test(key_input)) {
 //        // console.log('is a number');
 //        return true;
        
 //    } 

 //    else {
 //        // console.log('is not a number');
 //        return false;
        
 //    }

 //  }


 //    class_cel[0].onkeypress = function(event) {
 //    key_input = String.fromCharCode(event.charCode);
 //    // console.log(event.keyCode);
 //    // console.log(key_input);

 //    if (event.keyCode == 8 || event.keyCode == 46) {
 //        // console.log('backspace or delete');
 //        return true;
 //    }

 //    else if (filter_number.test(key_input)) {
 //        // console.log('is a number');
 //        return true;
        
 //    } 

 //    else {
 //        // console.log('is not a number');
 //        return false;
        
 //    }

 //  }


    // class_age[0].onkeydown = function(event) {

    // if (event.keyCode == 38 || event.keyCode == 40) {
    //     // console.log('keyup or keydown')
    //     return false;
    // }

    // else if (event.keyCode == 37 || event.keyCode == 39) {
    //     // console.log('keyleft or keyright')
    //     return true;
    // }

    // else {}

    // }

    // class_cel[0].onkeydown = function(event) {

    // if (event.keyCode == 38 || event.keyCode == 40) {
    //     // console.log('keyup or keydown')
    //     return false;
    // }

    // else if (event.keyCode == 37 || event.keyCode == 39) {
    //     // console.log('keyleft or keyright')
    //     return true;
    // }

    // else {}

    // }

// function isNumberKey(evt){

//      var charCode = (evt.which) ? evt.which : event.keyCode

//      if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))

//          return false;

//        return true;

//    }

});