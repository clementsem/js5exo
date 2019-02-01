var languagesArrayCreation = function () {
  var languages = ['Html', 'CSS', 'Java', 'PHP'];
  return languages;
}
// créer un tableau appelé numbers
var numbersArrayCreation = function () {
 return numbers = [0, 1, 2, 3, 4, 5];
}
//  splice remplace un élément (0 1 2) => selectionne à partir duquel on pars (0, 1) selectionne 1 élément au départ
var ElementReplacement = function (languages) {
   languages.splice(2, 1, 'Javascript');
   return languages;
 }

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby","Python");
   return languages;
 }


var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.splice(0,1)
return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.splice(4,1);
 return languages;
}

var stringToArray = function (socialMediaInString) {
  var array = socialMediaInString.split(',');
  return array;
}

var arrayToString = function (languages) {
 return languages.toString();
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){

  return languages.reverse();
}
