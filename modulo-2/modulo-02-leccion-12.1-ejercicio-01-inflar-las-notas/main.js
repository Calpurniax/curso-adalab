'use strict'

//ejercicio 1
const marks = [5, 4, 6, 7, 9];

/*const inflatedMarks = marks.map((mark) => mark + 1);
console.log(inflatedMarks)*/

//con una función sería

function inflated(mark) {
    return mark + 1
}
const inflatedMarks = marks.map(inflated);

console.log(inflatedMarks);