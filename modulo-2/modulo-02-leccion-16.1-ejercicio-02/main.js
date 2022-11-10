'use strict'

const timer = document.querySelector('.timer');
let counter = 0;


const incrementAndShowCounter = () => {
    counter++;
    if (counter <= 12) {
        timer.innerHTML = counter;
    } else {
        timer.innerHTML = '¡Feliz año nuevo!';
    }
};
setInterval(incrementAndShowCounter, 1000);

//ejercicio 3
const text = document.querySelector('.text');
const incrementAndRender = () => {
    counter++;
    if (counter < 60) {
        text.innerHTML = `post publicado hace ${counter} segundos`;
    } else {
        let minutes = Math.round(counter / 60);
        if (minutes < 2) {
            text.innerHTML = `post publicado hace ${minutes} minuto`;
        } else {
            text.innerHTML = `post publicado hace ${minutes} minutos`;
        }
    }
};
setInterval(incrementAndRender, 1000);