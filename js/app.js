
const agregarTarea = (e) => {
    e.preventDefault();
    console.log('Aqui deberia agregar una tarea'); 
    //necesito tomar el texto del input
    const inputForm = document.getElementById('nuevaTarea').value;
    //necesito el ul padre para agregar un nuevo item hijo li
    const lista = document.querySelector('.list-group')
    //necesito agregar un li con el texto del input 
    lista.innerHTML += `<li class="list-group-item bg-success text-white d-flex justify-content-evenly">${inputForm}<button class="botonEliminar" onClick="eliminarTarea()"><i class="bi bi-trash3-fill"></i></button></li>`
    //limpiar el formulario
    formularioTarea.reset();
}

const eliminarTarea = () => {
    const li = document.querySelector('.list-group-item');
    li.remove();
}

const formularioTarea = document.getElementById('tareaForm');
const botonEliminar = document.querySelector('.botonEliminar')
formularioTarea.addEventListener('submit', agregarTarea);
botonEliminar.addEventListener('click', eliminarTarea);