'use strict'

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const welcome = names.map(name => 'bienvenida ' + name);
console.log(welcome)

//ejercicio 3

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

const premiumUser = users.map(definePremium)

function definePremium(users) {
    if (users.isPremium) {
        return `bienvenida ${users.name}.Gracias por confiar en nosotros`;
    } else {
        return `bienvenida ${users.name}`
    }
}
console.log(premiumUser);