"user strict"

const name = "Rocío Jurado";
const length = name.length;

const text = document.querySelector (".js-text");

text.innerHTML = `el nombre de mi compañera es ${name} y está compuesto por ${length} caracteres.`;

