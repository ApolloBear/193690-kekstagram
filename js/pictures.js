var photoObjects = [];
var objectComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var min = 15;
var max = 200;
var objectLikes = getRandomInt(min, max);
var randomComment = objectComments[Math.floor(Math.random() * objectComments.length)];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


for (var i = 0; i <= 24; i++) {
  photoObjects[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    likes: objectLikes,
    comments: randomComment,
  };

  var objectUrl = photoObjects[i].url;
  var pageUrl = document.querySelector('.picture img');
  pageUrl.setAttribute('src', 'objectUrl');

  var objectLikes = photoObjects[i].likes;
  var pageLikes = document.querySelector('.picture-likes');
  pageLikes.textContent = likes.photoObjects;

  var objectComments = photoObjects[i].comments;
  var pageComments = document.querySelector('.picture-comments');
  pageComments.textContent = comments.photoObjects;
}
