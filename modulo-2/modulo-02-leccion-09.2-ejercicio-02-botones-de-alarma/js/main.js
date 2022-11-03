'use strict';

// llamamos a todos los botones
const btn = document.querySelectorAll('.alarma');
//llamamos al body para darle/quitarle la clase
const body = document.querySelector('.body');

//creamos la función para cambiar la pantalla

function alarm(){
    body.classList.toggle('alarm');
}

//creamos la escucha

btn[0].addEventListener('click',alarm);
btn[1].addEventListener('click',alarm);
btn[2].addEventListener('click',alarm);

/*btn.addEventListener('click',alarm); no se puede poner tal cual*/
  

