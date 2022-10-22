let year=3;
let diferencia= year%4

if (year%4===0){
    console.log('Estamos en año bisiesto');
}else if (year%4!==0)
    console.log(`El próximo año bisiesto es:${year+diferencia}`);

