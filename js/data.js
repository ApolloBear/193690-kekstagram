'use strict';
(function () {
var photoObjects = [];
window.photoObjects = [];
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

for (var i = 0; i <= 24; i++) {
  window.photoObjects[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    likes: objectLikes,
    comments: randomComment,
  };
  document.querySelector('#picture-template .picture img');
  document.querySelector('#picture-template .picture-likes');
  document.querySelector('#picture-template .picture-comments');
}

var renderPhoto = function(photoObject) {
  var clonePictureTemplate = originalPictureTemplate.cloneNode(true).content;
  window.clonePictureTemplate.querySelector('.picture img').setAttribute('src', photoObject.url);
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
}) ();