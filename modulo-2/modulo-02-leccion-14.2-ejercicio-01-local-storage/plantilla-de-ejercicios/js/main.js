'use strict'

const input = document.querySelector('#name');
const text = document.querySelector('.js-text');
function handleKeyUp(event) {
    event.preventDefault;
    const userName = input.value;
    text.innerHTML = userName;
    localStorage.setItem("name", `${userName}`);

}
const name = localStorage.getItem("name");
text.innerHTML = name;
input.value = name;
input.addEventListener('keyup', handleKeyUp)

//ejercicio de temas//

const body = document.querySelector('.body');
const lightInput = document.querySelector('#light');
const darkInput = document.querySelector('#dark');
const form = document.querySelector('.js-form');
const theme = localStorage.getItem("theme");
console.log(theme)

if (theme === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
} else {
    body.classList.add('light');
    body.classList.remove('dark');
}
function handleClick(event) {
    event.preventDefault;
    changetheme(event);
}

function changetheme(event) {
    if (event.target === darkInput) {
        body.classList.add('dark');
        body.classList.remove('light');
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem("theme", "light");

    }

}
form.addEventListener('click', handleClick)

//seguro que hay una forma más óptima de hacerlo pero funciona


