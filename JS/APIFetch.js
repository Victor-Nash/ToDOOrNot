const listContainer = document.querySelector('.list-container');
const urlTask = 'http://localhost:3000/tasks';

async function createList(task) {
    await fetch(urlTask, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
}

async function getTasks() {
    let result = await fetch(urlTask);
    let data = await result.json(); // Cambiado de data.json() a result.json()
    return data;
}
async function deleteTask(id){
    console.log('Deleting task with ID:', id);
    await fetch(`${urlTask}/${id}`, {method: 'DELETE'})
    console.log('Task deleted',urlTask + `/${id}` );
    
}


async function printTasks() {
    await deleteTask();
    let tasks = await getTasks();
    listContainer.innerHTML = '';
    tasks.forEach(task => {
        listContainer.innerHTML += 
        `<div>
            <h1>${task.title}</h1>
            <p>${task.priority}</p> 
            <p>${task.stage}
            <button onClick="deleteTask(${task.id}); printTasks()">Eliminar Tarea</button> <!-- Corregido: Eliminar Libro -> Eliminar Tarea -->
            <button onClick="editTask(${task.id})">Editar Tarea</button> <!-- Corregido: Eliminar Libro -> Editar Tarea -->
        </div>`;
    });
}


