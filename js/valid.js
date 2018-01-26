'use strict';
(function () {
var checkForm = function() {
  var isFormValid = true;
  var inputHashtag = document.querySelector('.upload-form-hashtags');
  var hashtags = inputHashtag.value;
  console.log(hashtags);
  var hashtagList = hashtags.toLowerCase().split(' ');
  console.log(hashtagList);

  if (hashtagList.length > 5) {
    inputHashtag.setCustomValidity('Не может быть больше 5 хэш-тегов');
    inputHashtag.reportValidity();
    return false;
  }

  for (var i = 0; i < hashtagList.length; i++) {
    if (hashtagList[i].length > 20) {
      inputHashtag.setCustomValidity('Хэш-тег не может быть более 20 символов');
      inputHashtag.reportValidity();
      isFormValid = false;
      break;
    } else if (hashtagList[i].charAt(0) !== '#') {
      inputHashtag.setCustomValidity('Хэш-тег должен начинаться с #');
      inputHashtag.reportValidity();
      isFormValid = false;
      break;
    } else if (hashtagList.indexOf(hashtagList[i]) !== i) {
      inputHashtag.setCustomValidity('Хэш-тег не может повторяться');
      inputHashtag.reportValidity();
      isFormValid = false;
      break;
    } else {
      inputHashtag.setCustomValidity('');
    }
  }
  return isFormValid;
};
}) ();
