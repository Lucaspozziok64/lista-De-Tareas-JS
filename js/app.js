
const agregarTarea = () => {

    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    if(nuevaTareaTexto === "") {
        alert('Por favor ingrese una tarea');
        return;
    }

    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nuevaTareaTexto + "";

    document.getElementById('listaTareas').appendChild(nuevaTarea);
    document.getElementById('nuevaTarea').value = "";
}