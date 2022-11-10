'use strict'
const text = document.querySelector('.js-text');
let counter = 0;
const incrementAndShowCounter = () => {
    counter++;
    text.innerHTML = 'su sesión ha expirado';
};
setInterval(incrementAndShowCounter, 15000);

//ejercicio 3
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const counterHTML = document.querySelector('.counter');
let counter2 = 0;
let temp;

const incrementAndShowCounter2 = () => {
    counter2++;
    counterHTML.innerHTML = counter2;
};
function handleStop() {
    console.log('para')
    clearInterval(temp);
}
function handleStart() {
    console.log('sigue')
    clearInterval(temp);
    counter2 = 0;
    counterHTML.innerHTML = counter2;
    temp = setInterval(incrementAndShowCounter2, 1000);

}
temp = setInterval(incrementAndShowCounter2, 1000);
startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);



