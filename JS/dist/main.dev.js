"use strict";

// the entire body of the website
// const docs_body = document.body;
// the whole signup pop-up page
var signup_popup = document.querySelector('.popup'); // the close button on the popup

var close_button = document.querySelector('.cancel'); // to display the popup after some minutes

document.body.addEventListener('load', function () {
  setTimeout(function () {
    signup_popup.style.display = 'flex';
  }, 5000);
}); // to close popup after toggling

close_button.addEventListener('click', function () {
  signup_popup.style.display = 'none';
});