"use strict";

$(document).ready(function() {

 $('#textarea').keypress(updateCounter);

 function updateCounter() {
   const maxLength = 140;
   const inputText = $(this).val().length;
   const charRemain = maxLength - inputText;
   $('span.counter').text(charRemain);

    if (charRemain < 0){
      $('span.counter').addClass("change");
      } else {
        $('span.counter').removeClass("change");
      }
    }


  // $('#textarea').keypress (function() {
  //    const maxLength = 140;
  //    const inputText = $(this).val().length;
  //    const charRemain = maxLength - inputText;
  //    $('span.counter').text(charRemain);
  //
  //    if (charRemain < 0){
  //      $('span.counter').addClass("change");
  //    } else {
  //      $('span.counter').removeClass("change");
  //    }
  //  });
});
