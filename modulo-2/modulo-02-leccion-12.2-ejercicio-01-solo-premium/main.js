'use strict'

//ejercicio 1

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

const premiumUser = users.filter(definePremium)

function definePremium(users) {
    if (users.isPremium) {
        return users;
    }
}
console.log(premiumUser);

//ejercicio 2

const pins = [2389, 2384, 2837, 5232, 8998];

const pinsEven = pins.filter((pin) => pin % 2 === 0);

console.log(pinsEven);

//ejercicio 3

const users2 = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const authorizedUsers = users2.filter(isEven);

function isEven(users) {
    if (users.pin % 2 === 0) {
        return users;
    }
}
console.log(authorizedUsers);