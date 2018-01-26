'use strict';
(function () {
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;

picturePage.forEach(function(picture) {
  picture.addEventListener('click', pictureClickHandler);
});


var keyboardOpen = document.querySelector('.picture');
keyboardOpen.addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    document.querySelector('.gallery-overlay').classList.remove('hidden');
  }
});

document.querySelector('.gallery-overlay-close').addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === KEYCODE_ESC) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
});
}) ();
