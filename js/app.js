
const agregarTarea = (e) => {
    e.preventDefault();
    console.log('Aqui deberia agregar una tarea'); 
    //necesito tomar el texto del input
    const inputForm = document.getElementById('nuevaTarea').value;
    //necesito el ul padre para agregar un nuevo item hijo li
    const lista = document.querySelector('.list-group')
    //necesito agregar un li con el texto del input 
    lista.innerHTML += `<li class="list-group-item bg-success text-white">${inputForm}</li>`
    //limpiar el formulario
    formularioTarea.reset();
}

const formularioTarea = document.getElementById('tareaForm');
formularioTarea.addEventListener('submit', agregarTarea)