const listContainer = document.querySelector('.list-elements');
const urlTask = 'http://localhost:3000/tasks';
const newtask = {
    "id": 3,
    "title": "Do Code",
    "priority": "Medium",
    "stage": "Almost Finished"
}

async function addTask(task) {
    await fetch(urlTask, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
    printTasks();
}

async function getTasks() {
    let result = await fetch(urlTask);
    let data = await result.json();
    return data;
}
async function deleteTask(id){
    
    await fetch(urlTask + `/${id}`, {method: 'DELETE'})//Creo que esta url esta dando problemas. Lleva 2 comillas.
    
}
async function editTask(id, task) {
    
    const url = urlTask + `/${id}`;
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
            <button onClick="confirmDelete(${task.id})">Eliminar Tarea</button> 
            <button onClick="openEditModal(${task.id})">Editar Tarea</button>
        </div>`;
    });//Editar para que los onclicks vayan a un paso extra que luego llamará a edit y a delete desde el otro script. Seguira teniendo que tener el id como parametro.
}



