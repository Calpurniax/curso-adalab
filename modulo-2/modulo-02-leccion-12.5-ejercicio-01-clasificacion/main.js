'use strict'

const runners = [
    { name: "Gregory Goyle", time: 56, student: true },
    { name: "Nymphadora Tonks", time: 9, student: false },
    { name: "Luna Lovegood", time: 45, student: true },
    { name: "Cedric Diggory", time: 28, student: true },
    { name: "Cho Chang", time: 35, student: true },
];



runners.sort((a, b) => a.time - b.time); //con la resta en este orden ordena de menor a mayor, en orden inverso b-a organiza de mayor a menor.
console.log(runners);

//ejercicio 2


const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

users.sort((a, b) => a.pin - b.pin); //por pin
console.log(users);

users.sort((a, b) => a.name > b.name); //por nombre
console.log(users);

