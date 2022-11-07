'use strict'


const btn = document.querySelector(".js-btn").addEventListener('click', searchUser)
/*funcion para buscar en el API. 1º opción es un include, filtrar lo que tienes de la API. la otra opción es decirle al servidor q solo te traiga lo que tu tienes en el filtro. hay APIS que no te dejan */

function searchUser(event) {
    event.preventDefault
    const user = document.querySelector(".js-user").value;
    fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => {
            const name = document.querySelector('.js-name');
            name.innerHTML = data.login;
            const img = document.querySelector('img');
            img.src = data.avatar_url;
            img.alt = data.login;
            const text = document.querySelector('.js-text')
            text.innerHTML = data.public_repos;
        });
}




//ejercicio 2
const createPromise = () =>
    fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
        response.json()
    );

function getBreedImages() {
    const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()];
    Promise.all(promises).then((responses) => {
        for (let i = 0; i < responses.length; i++) {
            const img = document.querySelector('.dog' + (i + 1));
            img.src = responses[i].message;
            //mirar como poner el .alt
        }
    });
}
const btn2 = document.querySelector('.js-btn2');
btn2.addEventListener('click', getBreedImages);

//otra manera de hacer el array?



