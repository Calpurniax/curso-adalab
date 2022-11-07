'use strict'

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];
//constantes que ya están en el HTML
const text = document.querySelector('.js-list');
const form = document.querySelector('.js-form');
const counter = document.querySelector('.js-counter');



//bucle para pintar las tareas
for (let i = 0; i < tasks.length; i++) {
    text.innerHTML += `<li class="list-element">${tasks[i].name}<input type="checkbox" class="js-checkbox ${[i]}" value=""></li>`;
}

//constantes que crea el JS en el HTML
const textlist = document.querySelectorAll('.list-element');
const textCheckBox = document.querySelectorAll('.js-checkbox');

//bucle para marcar las tareas como completadas
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
        textlist[i].classList.add('true');
        textCheckBox[i].checked = true;
    }
}

//función para filtrar el array //filter devuelve un array nuevo
let completeTasks = tasks.filter((tasks) => tasks.completed === true);
let incompleteTasks = tasks.filter((tasks) => tasks.completed === false);

console.log(completeTasks)
//funcion para pintar el HTML 
function renderCounter() {
    counter.innerHTML = `tienes ${tasks.length} tareas. ${completeTasks.length} completadas y ${incompleteTasks.length} por completar`;
}
renderCounter();



//función manejadora del evento

function handleClick() {

    for (let i = 0; i < textCheckBox.length; i++) {
        if (textCheckBox[i].checked) {
            textlist[i].classList.add('true');
            tasks[i].completed = true;
            let completeTasks = tasks.filter(tasks => tasks.completed === true);
            renderCounter(completeTasks);
        } else {
            textlist[i].classList.remove('true');
            let incompleteTasks = tasks.filter(tasks => tasks.completed === false);
            renderCounter(incompleteTasks);
        }
    }
};

//evento
form.addEventListener('click', handleClick);



//me falta refrescar la parte de arriba

