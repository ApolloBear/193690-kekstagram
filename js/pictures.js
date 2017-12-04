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

//задание 1 рандомные комментарии
var randomComment = objectComments[Math.floor(Math.random() * objectComments.length)];

//задание 1 рандомные лайки
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//задание 1 цикл создания объектов в массиве
for (var i = 0; i <= 24; i++) {
  photoObjects[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    likes: objectLikes,
    comments: randomComment,
  };
}
//задание 2 - с ошибками в дебагеере с setAttribute и 'i'
var objectUrl = photoObjects[i].url;
var pageUrl = document.querySelector('.picture img');
pageUrl.setAttribute('src', objectUrl);

var objectLikes = photoObjects[i].likes;
var pageLikes = document.querySelector('.picture-likes');
pageLikes.textContent = photoObjects[i].likes;

var objectComments = photoObjects[i].comments;
var pageComments = document.querySelector('.picture-comments');
pageComments.textContent = photoObjects[i].comments;
//

var elementBlock = document.querySelector('#picture-template').content;

//задание 3
//функция для Document Fragment
var renderPhoto = function(photoObjects) {
  var copyBlock = elementBlock.cloneNode(true);

  copyBlock.querySelector('.picture img').setAttribute = photoObjects.url;
  copyBlock.querySelector('.picture-likes').textContent = photoObjects.likes;
  copyBlock.querySelector('.picture-comments').textContent = photoObjects.comments;

  return copyBlock;
};

//Document Fragment
var fragment = document.createDocumentFragment();
for (var l = 0; l < 24; l++) {
  fragment.appendChild(renderPhoto(photoObjects[i]));
}



//open pop-up - задание 4
var popUp = document.querySelector('.gallery-overlay');
popUp.classList.remove('hidden');

//задание 4
var popUpUrl = document.querySelector('.gallery-overlay-image');
popeUpUrl.setAttribute('src', objectUrl);

var popUpLikes = document.querySelector('.likes-count');
pageLikes.textContent = photoObjects[i].likes;

var popUpComments = document.querySelector('.comments-count');
pageComments.textContent = photoObjects[i].comments;

// elementBlock.appendChild(copyBlock);
