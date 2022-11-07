'use strict'


const btn = document.querySelector(".js-btn").addEventListener('click', searchUser)

function searchUser() {
    const user = document.querySelector(".js-user").value;

    fetch('https://api.github.com/users/gootyfer')
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

}//entiendo que no sabemos filtrar el API para que salga un usuario concreto

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
        }
    });
}
const btn2 = document.querySelector('.js-btn2');
btn2.addEventListener('click', getBreedImages);

//otra manera de hacer el array?