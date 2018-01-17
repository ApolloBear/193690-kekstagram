'use strict';
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
