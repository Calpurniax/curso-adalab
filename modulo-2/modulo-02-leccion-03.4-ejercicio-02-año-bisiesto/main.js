'use strict'

let year=0;
let diferencia= year%4

if (year%4===0){
    console.log('Estamos en año bisiesto');
}else if ((year+1)%4===0){
    console.log(`El próximo año bisiesto es:${year+1}`);
} else if ((year+2)%4===0){
    console.log(`El próximo año bisiesto es:${year+2}`);
}else if ((year+3)%4===0){
    console.log(`El próximo año bisiesto es:${year+3}`);
}



