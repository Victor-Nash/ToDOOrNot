const listContainer = document.querySelector('.list-elements');
const urlTask = 'http://localhost:3000/tasks';

async function addTask(task) {
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
    let data = await result.json();
    return data;
}
async function deleteTask(id){
    await fetch(`${urlTask}/${id}`, {method: 'DELETE'})//Creo que esta url esta dando problemas. Lleva 2 comillas.
    console.log('Task deleted',urlTask + `/${id}` );
    
}
async function editTask(id, task) {
    const url = `${urlTask}/${id}`;
    await fetch(url, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
    });
}


async function printTasks(){
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

/*export { editTask, addTask};*/


