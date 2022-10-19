//llamar al input, por la id, pero no soy capaz de recuperar el value, siempre me sale undefined.

let name = document.getElementById('name').value; 

if (name === "María"|| name === "Luisa") {
    console.log(`bienvenida ${name}`);
}else {
    console.log("usuaria no autorizada");
}





//esto funciona sin nada más, en la consola y cambiando aquí el nombre
/*let name = "Luisa";

if (name === "María"|| name === "Luisa") {
    console.log(`bienvenida ${name}`);
}else {
    console.log("usuaria no autorizada");
}*/

