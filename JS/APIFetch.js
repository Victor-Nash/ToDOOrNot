async function addTask(task) {
    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
}

async function getTasks() {
    let result = await fetch('http://localhost:3000/tasks');
    let data = await result.json();
    return data;
}

async function deleteTask(id){
    
    await fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'})//Creo que esta url esta dando problemas. Lleva 2 comillas.
}

async function editTask(id, task) {

    await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
    });
}


