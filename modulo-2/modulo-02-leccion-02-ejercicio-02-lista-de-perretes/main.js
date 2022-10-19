'use strict';

// definimos los datos
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

//llamamos a los li

const firstDogLi = document.querySelector (".dog1");
const secondDogLi = document.querySelector (".dog2");
const thirdDogLi = document.querySelector (".dog3");

// rellenamos los li con las constantes dadas

firstDogLi.innerHTML = firstDogName + `<img src=${firstDogImage}></img>`;
secondDogLi.innerHTML = secondDogName + `<img src=${secondDogImage}></img>`;
thirdDogLi.innerHTML = thirdDogName + `<img src=${thirdDogImage}></img>`;
