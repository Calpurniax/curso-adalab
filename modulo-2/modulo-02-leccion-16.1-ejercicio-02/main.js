'use strict'
//contador de uvas y mejora del contador de uvas
const timer = document.querySelector('.timer');
let counter = 0;
let temp;
const incrementAndShowCounter = () => {
    counter++;
    if (counter <= 12) {
        timer.innerHTML = counter;
    } else {
        clearInterval(temp)
        timer.innerHTML = '¡Feliz año nuevo!';
    }
};
temp = setInterval(incrementAndShowCounter, 1000);

//ejercicio 3
let counter2 = 0;
const text = document.querySelector('.text');
const incrementAndRender = () => {
    counter2++;
    if (counter2 < 60) {
        text.innerHTML = `post publicado hace ${counter2} segundos`;
    } else {
        let minutes = Math.round(counter2 / 60);
        if (minutes < 2) {
            text.innerHTML = `post publicado hace ${minutes} minuto`;
        } else {
            text.innerHTML = `post publicado hace ${minutes} minutos`;
        }
    }
};
setInterval(incrementAndRender, 1000);