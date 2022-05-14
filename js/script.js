/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function does a multiplication loop.
 */
function multiplyBy() {
  // input
  const firstInteger = parseInt(document.getElementById('first-integer').value)
	const secondInteger = parseInt(document.getElementById('second-integer').value)

  // process
  var addedNumber = 0
  var answer = 0
  
   if (firstInteger > 0 && secondInteger > 0) {
    while (addedNumber < secondInteger) {
      addedNumber = addedNumber + 1;
      answer = answer + firstInteger;
    }
  } else if (firstInteger < 0 && secondInteger < 0) {
    while (addedNumber > secondInteger) {
      addedNumber = addedNumber - 1;
      answer = answer - firstInteger;
    }
  } else if (firstInteger > 0 && secondInteger < 0) {
    while (addedNumber > secondInteger) {
      addedNumber = addedNumber - 1;
      answer = answer - firstInteger;
    }
  } else if (firstInteger < 0 && secondInteger > 0) {
    while (addedNumber < secondInteger) {
      addedNumber = addedNumber + 1;
      answer = answer + firstInteger;
    }
  }

  // output
  document.getElementById('answer').innerHTML = firstInteger + " x " + addedNumber + " = " + answer;
}