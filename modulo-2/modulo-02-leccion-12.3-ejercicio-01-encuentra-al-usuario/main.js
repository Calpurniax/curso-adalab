'use strict'

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const oneUser = users.find(searchPin);//no soy capaz de hacerlo con arrow, quizás con propiedades de los objetos no sirve?


function searchPin(users) {
    if (users.pin === 5232) {
        return users
    }
}
console.log(oneUser)

//parte b

const oneUserLess = users.findIndex(searchPin);

users.splice(oneUserLess, 1);

console.log(users)