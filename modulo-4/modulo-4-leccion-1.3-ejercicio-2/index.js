const { suma, resta } = require('./math.js');
const _ = require('lodash');

const operaciones = () => {
    const resultadoSuma = suma(7, 8)
    console.log(resultadoSuma)
    const resultadoResta = resta(6, 3)
    console.log(resultadoResta)
}
operaciones()

const array1 = [1, 2, 3]
const array2 = [2, 3, 4]
const newArray = _.union(array1, array2)
console.log(newArray);