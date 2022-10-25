'use strict'

//creamos un objeto
const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.run = (distance) => `estoy corriendo ${distance}`

//otra forma de crear el objeto:
const adalaber2 ={
    name: 'Rocío',
    age: 25,
    job:'actriz',
}

//llamamos al html para escribir
const text = document.querySelector ('.js-text')
//y pintamos
text.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}`;


//funcion de correr 
console.log(adalaber1.run("50 km"));