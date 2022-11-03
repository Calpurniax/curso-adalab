//ejercicio con array y bucles

let i=0;
const array = [];

function get100Number (){
    for (i=1; i<101;i++){
        array.push(i)
    }
}
/*get100Number();
for (const number of array){
    console.log(`${number}`)
}*/



//lo mismo pero al revés
function getReversed100Numbers (){
    get100Number();
    array.reverse();
}

getReversed100Numbers ();
for (const number of array){
    console.log(`${number}`)
}


