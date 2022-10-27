'use strict'

//crear un array
const films = ['la vida de Brian', 'Ana Karenina', `Terminator`];

//añadir un elemento en la última posición
films [3] = 'La princesa Mononoke';

//enseñar en la consola el array completo
console.log(films);

//modificar una película

films [2] = 'Dune';
console.log(films);

//crear una función para encapsular todo esto:

function workWithMovies (){
    const films = ['la vida de Brian', 'Ana Karenina', `Terminator`];
    films [3] = 'La princesa Mononoke';
    console.log(films);
    films [2] = 'Dune';
    console.log(films);
}   
workWithMovies();