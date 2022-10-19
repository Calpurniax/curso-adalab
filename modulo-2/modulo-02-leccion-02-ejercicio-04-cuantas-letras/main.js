'use strict';

const name = "Rocío Jurado";
const length = name.length;

const text1 = document.querySelector (".js-text");

text1.innerHTML = `el nombre de mi compañera es ${name} y está compuesto por ${length} caracteres.`;

//ejercicio con tipo de datos

let text = "¿De qué tipo soy?";
console.log(text + " es del tipo " + typeof text);

text = 123;
console.log("ahora " + text + " es del tipo " + typeof text);
text = undefined;
console.log("y ahora " + text + " es del tipo " + typeof text);