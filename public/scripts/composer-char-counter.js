"use strict";

$(document).ready(function() {


 $('#textarea').keyup(updateCounter);
//updates my counter each time a key is pressed
 function updateCounter() {
   const maxLength = 140;
   const inputText = $(this).val().trim()
   const inputTextLength = inputText.length;
   const charRemain = maxLength - inputTextLength;
   $('span.counter').text(charRemain);

   if (charRemain < 0){
     $('span.counter').addClass("change");
   } else {
     $('span.counter').removeClass("change");
   }
  }
});
