'use strict';
const cerdoText = document.querySelector('.article_cerdo');
const vacaText = document.querySelector('.article_vaca');
const btnVaca = document.querySelector('.vaca')
const rectCerdo = cerdoText.getBoundingClientRect();
const rectVaca = vacaText.getBoundingClientRect();

console.log(rectVaca);

btnVaca.addEventListener('click', handleClick)
function handleClick(event) {
    event.preventDefault();
    window.scrollTo({
        top: (rectVaca.y + 10)
    });
}
//funciona pero no entiendo q pintan los data-id aquí:

/*Se trata de poner una página con una cabecera y varias secciones y en cada sección pondremos un atributo id.Después, en el footer o repartidos por la página (da igual) vamos a poner enlaces pero sin href (o, para que sea más correcto, puedes poner: href="javascript:void(0);"). Vamos a poner eventos click en cada enlace con un preventDefault() para que el enlace no lleve a nada

Y con JavaScript vamos a simular la navegación dentro de la página

Cada enlace debe mover el scroll de la página hasta la sección con el id que indique el atributo data-id del enlace*/