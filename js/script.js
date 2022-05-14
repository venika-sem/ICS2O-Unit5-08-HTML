/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-HTML/sw.js", {
    scope: "/ICS2O-Unit5-08-HTML/",
  })
}

/**
 * This function does a division loop.
 */
function myButtonClicked() {
  const number1 = parseInt(document.getElementById("first-integer").value);
  const number2 = parseInt(document.getElementById("second-integer").value);
  var addedNumber = 0;
  var answer = number1;
  var remainder = 0;

  if (number1 > 0 && number2 > 0) {
    while (answer >= number2) {
      addedNumber = addedNumber + 1;
      answer = answer - number2;
    }
  }

  if (answer == 0) {
    remainder = 0;
  } else if (answer != 0) {
    remainder = answer + number2;
  }

  document.getElementById("answer").innerHTML =
    number1 +
    " ÷ " +
    number2 +
    " = " +
    addedNumber +
    " The remainder is " +
    remainder;
}