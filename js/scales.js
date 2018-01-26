'use strict';
(function () {
var formScale = document.querySelector('.upload-resize-controls-value');
var scales = ['25%', '50%', '75%', '100%'];
var numScaleMin = parseInt(scales[0], 10);
var numScaleMax = parseInt(scales[3], 10);

formScale.setAttribute('value', scales[3]);

var buttonDec = document.querySelector('.upload-resize-controls-button-dec').addEventListener('click', function() {
  var getValueDec = document.querySelector('.upload-resize-controls-value').value;
  var constantValue = scales.indexOf(getValueDec);

  var numSetBalueDec = parseInt(scales[constantValue]) - parseInt(scales[0]);
  if (numSetBalueDec >= numScaleMin && numSetBalueDec <= numScaleMax) {
    var setValueDec = parseInt(scales[constantValue]) - parseInt(scales[0]) + '%';
    var pushValueDec = document.querySelector('.upload-resize-controls-value').setAttribute('value', setValueDec);
    switch (setValueDec) {
      case '100%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(1.0)');
        break;
      case '75%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.75)');
        break;
      case '50%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.50)');
        break;
      case '25%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.25)');
        break;
    }
  }
});

var buttonInc = document.querySelector('.upload-resize-controls-button-inc').addEventListener('click', function() {
  var getValueInc = document.querySelector('.upload-resize-controls-value').value;
  var constantValue = scales.indexOf(getValueInc);

  var numSetBalueInt = parseInt(scales[constantValue]) + parseInt(scales[0]);
  if (numSetBalueInt >= numScaleMin && numSetBalueInt <= numScaleMax) {
    var setValueInc = parseInt(scales[constantValue]) + parseInt(scales[0]) + '%';
    var pushValueInc = document.querySelector('.upload-resize-controls-value').setAttribute('value', setValueInc);
    switch (setValueInc) {
      case '100%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(1.0)');
        break;
      case '75%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.75)');
        break;
      case '50%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.50)');
        break;
      case '25%':
        document.querySelector('.effect-image-preview').setAttribute('style', 'transform: scale(0.25)');
        break;
    }
  }
});
}) ();
