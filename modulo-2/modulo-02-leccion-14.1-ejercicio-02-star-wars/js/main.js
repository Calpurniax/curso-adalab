'use strict'

const input = document.querySelector('#search');
const btn = document.querySelector('.js-btn');
const text = document.querySelector('.js-list');

let searchList = [];

function renderSearch() {
    text.innerHTML = '';
    for (const person of searchList) {
        text.innerHTML += `<li>Nombre:${person.name} Género: ${person.gender}</li>`
    }
}
function handleClick(event) {
    event.preventDefault;
    const userSearch = input.value;
    console.log(userSearch)
    fetch(`https://swapi.py4e.com/api/people/?search=${userSearch}`)
        .then((response) => response.json())
        .then((data) => {
            searchList = data.results;
            renderSearch();
        })
};
btn.addEventListener("click", handleClick)


