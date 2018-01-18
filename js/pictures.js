'use strict';
// var photoObjects = [];
// var objectComments = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
// ];

// var objectLikes = getRandomint(15, 200);

// var randomComment = objectComments[Math.floor(Math.random() * objectComments.length)];

// var KEYCODE_ESC = 27;
// var KEYCODE_ENTER = 13;

var popUpClose = document.querySelector('.gallery-overlay-close');
popUpClose.addEventListener('click', function() {
  document.querySelector('.gallery-overlay').classList.add('hidden');
});

// for (var i = 0; i <= 24; i++) {
//   photoObjects[i] = {
//     url: 'photos/' + (i + 1) + '.jpg',
//     likes: objectLikes,
//     comments: randomComment,
//   };
//   document.querySelector('#picture-template .picture img');
//   document.querySelector('#picture-template .picture-likes');
//   document.querySelector('#picture-template .picture-comments');
// }

// var renderPhoto = function(photoObject) {
//   var clonePictureTemplate = originalPictureTemplate.cloneNode(true).content;
//   clonePictureTemplate.querySelector('.picture img').setAttribute('src', photoObject.url);
//   clonePictureTemplate.querySelector('.picture-likes').textContent = photoObject.likes;
//   clonePictureTemplate.querySelector('.picture-comments').textContent = photoObject.comments;
//   return clonePictureTemplate;
// };

// var originalPictureTemplate = document.querySelector('#picture-template');

// var fragment = document.createDocumentFragment();
// for (i = 0; i < 25; i++) {
//   fragment.appendChild(renderPhoto(photoObjects[i]));
// }

// var pageListPhoto = document.querySelector('.pictures');
// pageListPhoto.appendChild(fragment);

// function getRandomint() {
//   return Math.floor(Math.random() * (200 - 15)) + 15;
// }

var popUpImage = document.querySelector('.gallery-overlay-image');
popUpImage.setAttribute('src', photoObjects[0].url);

var popUpLikes = document.querySelector('.likes-count');
popUpLikes.textContent = photoObjects[0].likes;

var popUpComments = document.querySelector('.comments-count');
popUpComments.textContent = photoObjects[0].comments;

var picturePage = document.querySelectorAll('.picture');

var pictureClickHandler = function(event) {
  event.preventDefault();
  var elemPopUp = document.querySelector('.gallery-overlay');
  elemPopUp.classList.remove('hidden');
  var elemPhoto = event.currentTarget;
  var elemPhotoImg = elemPhoto.querySelector('.picture img').getAttribute('src');
  var elemPhotoLike = elemPhoto.querySelector('.picture-likes').textContent;
  var elemPhotoComment = elemPhoto.querySelector('.picture-comments').textContent;
  setPicturePage(elemPhotoImg, elemPhotoLike, elemPhotoComment);
};

var setPicturePage = function(elemImg, elemLike, elemComment) {
  document.querySelector('.gallery-overlay-image').setAttribute('src', elemImg);
  document.querySelector('.gallery-overlay-controls-like .likes-count').textContent = elemLike;
  document.querySelector('.gallery-overlay-controls-comments .comments-count').textContent = elemComment;
};

picturePage.forEach(function(picture) {
  picture.addEventListener('click', pictureClickHandler);
});

// var keyboardOpen = document.querySelector('.picture');
// keyboardOpen.addEventListener('keydown', function(event) {
//   event.preventDefault();
//   if (event.keyCode === KEYCODE_ENTER) {
//     document.querySelector('.gallery-overlay').classList.remove('hidden');
//   }
// });
//
// document.querySelector('.gallery-overlay-close').addEventListener('keydown', function(event) {
//   event.preventDefault();
//   if (event.keyCode === KEYCODE_ENTER) {
//     document.querySelector('.gallery-overlay').classList.add('hidden');
//   }
// });
//
// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === KEYCODE_ESC) {
//     document.querySelector('.gallery-overlay').classList.add('hidden');
//   }
// });

// var uploadImage = document.querySelector('.upload-overlay');

// document.querySelector('#upload-select-image').addEventListener('change', function() {
//   if (document.activeElement.className !== 'upload-form-description') {
//     uploadImage.classList.remove('hidden');
//   }
// });

// document.querySelector('.upload-form-cancel').addEventListener('click', function() {
//   uploadImage.classList.add('hidden');
// });

// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === KEYCODE_ESC) {
//     uploadImage.classList.add('hidden');
//   }
// });

// document.querySelector('.upload-form-cancel').addEventListener('keydown', function(event) {
//   event.preventDefault();
//   if (event.keyCode === KEYCODE_ENTER) {
//     uploadImage.classList.add('hidden');
//   }
// });

// var buttonSubmit = document.querySelector('.upload-form-submit');
//
// buttonSubmit.addEventListener('click', function() {
//   if (checkForm()) {
//     document.querySelector('#upload-select-image').submit();
//   }
// });
//
// buttonSubmit.addEventListener('click', function() {
//   event.preventDefault();
//   if (event.keyCode === KEYCODE_ENTER) {
//     if (checkForm()) {
//       document.querySelector('#upload-select-image').submit();
//     }
//   }
// });

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

// var checkForm = function() {
//   var isFormValid = true;
//   var inputHashtag = document.querySelector('.upload-form-hashtags');
//   var hashtags = inputHashtag.value;
//   console.log(hashtags);
//   var hashtagList = hashtags.toLowerCase().split(' ');
//   console.log(hashtagList);
//
//   if (hashtagList.length > 5) {
//     inputHashtag.setCustomValidity('Не может быть больше 5 хэш-тегов');
//     inputHashtag.reportValidity();
//     return false;
//   }
//
//   for (var i = 0; i < hashtagList.length; i++) {
//     if (hashtagList[i].length > 20) {
//       inputHashtag.setCustomValidity('Хэш-тег не может быть более 20 символов');
//       inputHashtag.reportValidity();
//       isFormValid = false;
//       break;
//     } else if (hashtagList[i].charAt(0) !== '#') {
//       inputHashtag.setCustomValidity('Хэш-тег должен начинаться с #');
//       inputHashtag.reportValidity();
//       isFormValid = false;
//       break;
//     } else if (hashtagList.indexOf(hashtagList[i]) !== i) {
//       inputHashtag.setCustomValidity('Хэш-тег не может повторяться');
//       inputHashtag.reportValidity();
//       isFormValid = false;
//       break;
//     } else {
//       inputHashtag.setCustomValidity('');
//     }
//   }
//   return isFormValid;
// };
