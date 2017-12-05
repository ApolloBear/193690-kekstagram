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

var popUpOpen = document.querySelector('.gallery-overlay');//не работает если стоит в самом низу?!
popUpOpen.classList.remove('hidden');//

for (var i = 0; i <= 24; i++) {
  photoObjects[i] = {
    url: 'photos/' + (i + 1) + '.jpg',
    likes: objectLikes,
    comments: randomComment,
  };
  var objectUrl = photoObjects[i].url;
  var pageUrl = document.querySelector('#picture-template .picture img');
  // pageUrl.setAttribute('src', objectUrl);

  var objectLikes = photoObjects[i].likes;
  var pageLikes = document.querySelector('#picture-template .picture-likes');
  // pageLikes.textContent = photoObjects[i].likes;

  var objectComments = photoObjects[i].comments;
  var pageComments = document.querySelector('#picture-template .picture-comments');
  // pageComments.textContent = photoObjects[i].comments;
}

function getRandomint() {
  return Math.floor(Math.random() * (200 - 15)) + 15;
}

var cloneObject = function () {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(photoObjects);
  return fragment;
};

var popUpImage = document.querySelector('.gallery-overlay-image');
popUpImage.setAttribute('src', photoObjects[0].url);

var popUpLikes = document.querySelector('.likes-count');
popUpLikes.textContent = photoObjects[0].likes;

var popUpComments = document.querySelector('.comments-count');
popUpComments.textContent = photoObjects[0].comments;
