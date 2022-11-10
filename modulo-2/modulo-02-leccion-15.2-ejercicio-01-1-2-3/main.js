'use strict';
const list = document.querySelector('.js-list');
const numbers = [1, 2, 3];
//pintamos el array
for (const item of numbers) {
    const newLi = document.createElement('li');             //creamos un objeto <li></li>
    const newContent = document.createTextNode([item]);     //creamos un contenido con el contenido del array
    newLi.appendChild(newContent);                          //ponemos el contenido dentro del li
    list.appendChild(newLi)                                 //ponemos el <li>contenido</li> dentro del ul
}
