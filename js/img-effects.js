'use strict';
document.querySelector('.upload-effect-controls').addEventListener('click', function(event) {
  var value = event.target.value;
  var effectImage = document.querySelector('.effect-image-preview');
  switch (value) {
    case 'none':
      effectImage.classList.remove('effect-chrome', 'effect-sepia', 'effect-marvin', 'effect-phobos', 'effect-heat');
      effectImage.classList.add('effect-none');
      break;
    case 'chrome':
      effectImage.classList.remove('effect-none', 'effect-sepia', 'effect-marvin', 'effect-phobos', 'effect-heat');
      effectImage.classList.add('effect-chrome');
      break;
    case 'sepia':
      effectImage.classList.remove('effect-none', 'effect-chrome', 'effect-marvin', 'effect-phobos', 'effect-heat');
      effectImage.classList.add('effect-sepia');
      break;
    case 'marvin':
      effectImage.classList.remove('effect-none', 'effect-chrome', 'effect-sepia', 'effect-phobos', 'effect-heat');
      effectImage.classList.add('effect-marvin');
      break;
    case 'phobos':
      effectImage.classList.remove('effect-none', 'effect-chrome', 'effect-sepia', 'effect-marvin', 'effect-heat');
      effectImage.classList.add('effect-phobos');
      break;
    case 'heat':
      effectImage.classList.remove('effect-none', 'effect-chrome', 'effect-sepia', 'effect-marvin', 'effect-phobos');
      effectImage.classList.add('effect-heat');
      break;
  }
});
