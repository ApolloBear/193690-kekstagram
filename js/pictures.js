'use strict';
var photoObjects = [];
var objectComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var objectLikes = getRandomint(15, 200);

var randomComment = objectComments[Math.floor(Math.random() * objectComments.length)];

var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;

var popUpClose = document.querySelector('.gallery-overlay-close');
popUpClose.addEventListener('click', function () {
  document.querySelector('.gallery-overlay').classList.add('hidden');
});

for (var i = 0; i <= 24; i++) {
  photoObjects[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    likes: objectLikes,
    comments: randomComment,
  };
  document.querySelector('#picture-template .picture img');
  document.querySelector('#picture-template .picture-likes');
  document.querySelector('#picture-template .picture-comments');
}

var renderPhoto = function (photoObject) {
  var clonePictureTemplate = originalPictureTemplate.cloneNode(true).content;
  clonePictureTemplate.querySelector('.picture img').setAttribute('src', photoObject.url);
  clonePictureTemplate.querySelector('.picture-likes').textContent = photoObject.likes;
  clonePictureTemplate.querySelector('.picture-comments').textContent = photoObject.comments;
  return clonePictureTemplate;
};

var originalPictureTemplate = document.querySelector('#picture-template');

var fragment = document.createDocumentFragment();
for (i = 0; i < 25; i++) {
  fragment.appendChild(renderPhoto(photoObjects[i]));
}

var pageListPhoto = document.querySelector('.pictures');
pageListPhoto.appendChild(fragment);

function getRandomint() {
  return Math.floor(Math.random() * (200 - 15)) + 15;
}

var popUpImage = document.querySelector('.gallery-overlay-image');
popUpImage.setAttribute('src', photoObjects[0].url);

var popUpLikes = document.querySelector('.likes-count');
popUpLikes.textContent = photoObjects[0].likes;

var popUpComments = document.querySelector('.comments-count');
popUpComments.textContent = photoObjects[0].comments;

var picturePage = document.querySelectorAll('.picture');

var pictureClickHandler = function (event) {
  event.preventDefault();
  var elemPopUp = document.querySelector('.gallery-overlay');
  elemPopUp.classList.remove('hidden');
  var elemPhoto = event.currentTarget;
  var elemPhotoImg = elemPhoto.querySelector('.picture img').getAttribute('src');
  var elemPhotoLike = elemPhoto.querySelector('.picture-likes').textContent;
  var elemPhotoComment = elemPhoto.querySelector('.picture-comments').textContent;
  setPicturePage(elemPhotoImg, elemPhotoLike, elemPhotoComment);
};

var setPicturePage = function (elemImg, elemLike, elemComment) {
  document.querySelector('.gallery-overlay-image').setAttribute('src', elemImg);
  document.querySelector('.gallery-overlay-controls-like .likes-count').textContent = elemLike;
  document.querySelector('.gallery-overlay-controls-comments .comments-count').textContent = elemComment;
};

picturePage.forEach(function (picture) {
  picture.addEventListener('click', pictureClickHandler);
});

var keyboardOpen = document.querySelector('.picture');
keyboardOpen.addEventListener('keydown', function (event) {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    document.querySelector('.gallery-overlay').classList.remove('hidden');
  }
});

document.querySelector('.gallery-overlay-close').addEventListener('keydown', function (event) {
  event.preventDefault();
  if (event.keyCode === KEYCODE_ENTER) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === KEYCODE_ESC) {
    document.querySelector('.gallery-overlay').classList.add('hidden');
  }
});

document.querySelector('#upload-select-image').addEventListener('change', function (){
  document.querySelector('.upload-overlay').classList.remove('hidden');
});
