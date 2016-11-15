"use strict";


$(document).ready(function() {
  $('#textarea').keypress (function(e) {
     const maxLength = 140;
     const inputText = $(this).val().length;
     const charRemain = maxLength - inputText;
     $('span.counter').text(charRemain);

     if (charRemain < 10){
       $('span.counter').addClass("change");
     } else {
       $('span.counter').removeClass("change");
     }

     if (inputText == maxLength) {
       e.preventDefault();
     } else if (inputText > maxLength) {
       $(this).val() = $(this).val().substring(0, maxLength);
     }
   });


});
