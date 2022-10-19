'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';

//llamar al HTML que contiene la foto
const avatar = document.querySelector (".user__avatar");

// avatar que eligió el usuario al registrarse
let userAvatar = '';

//meter una variable dentro de otra

avatar.src =  `${userAvatar || DEFAULT_AVATAR}`; //si la primera variable es false (vacía) pon la segunda.