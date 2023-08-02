
const listaTareas = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("ingresar-tarea");
const btnAgregarTarea = document.getElementById("agregar-tarea");

btnAgregarTarea.addEventListener(`click`, () => agregarTarea());

let tareas = [];

const  agregarTarea = () => {
    const nuevaTarea = inputTarea.value;
    tareas.push(nuevaTarea);
    inputTarea.value = "";
    actualizarLista();
}

const actualizarLista = () => {
    listaTareas.innerHTML = "";
    for (let tarea of tareas) {
        const li = document.createElement("li");
        li.innerHTML = tarea;
        listaTareas.appendChild(li);
    }
}













