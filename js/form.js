'use strict';
(function () {
var uploadImage = document.querySelector('.upload-overlay');

document.querySelector('#upload-select-image').addEventListener('change', function() {
  if (document.activeElement.className !== 'upload-form-description') {
    uploadImage.classList.remove('hidden');
  }
});

document.querySelector('.upload-form-cancel').addEventListener('click', function() {
  uploadImage.classList.add('hidden');
});

document.addEventListener('keydown', function(event) {
  if (event.keyCode === KEYCODE_ESC) {
    uploadImage.classList.add('hidden');
  }
});

document.querySelector('.upload-form-cancel').addEventListener('keydown', function(event) {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    uploadImage.classList.add('hidden');
  }
});

var buttonSubmit = document.querySelector('.upload-form-submit');

buttonSubmit.addEventListener('click', function() {
  if (checkForm()) {
    document.querySelector('#upload-select-image').submit();
  }
});

buttonSubmit.addEventListener('click', function() {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    if (checkForm()) {
      document.querySelector('#upload-select-image').submit();
    }
  }
});
}) ();
