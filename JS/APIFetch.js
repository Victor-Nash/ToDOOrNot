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
        `<li class="list-element"  id="list-element${task.id}">
            <input type="checkbox" id="task${task.id}"/>
            <label for="task${task.id}">${task.title}</label>
            <span class"custom-checkbox"></span>
            <p class = "list-priority">Task priority: ${task.priority}</p> 
            <p class = "list-stage">Stage of completion: ${task.stage}</p>
            <p class = "list-stage">Coment: ${task.coment}</p>
            <button class = "btn delete-btn" OnClick="confirmDelete(${task.id})">Eliminar Tarea</button> 
            <button  class = "btn edit-btn "OnClick="createFormEddit(${task.id})">Editar Tarea</button>
            <form class = "form-edit${task.id}  form-edit form"></form>
        </li>`;
    });
}
