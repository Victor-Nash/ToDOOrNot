const formAddTask = document.querySelector('.form-add');

function deleteAllForms(){
    const formEditAll = document.querySelectorAll('.form');
    formEditAll.forEach(form => {
        form.innerHTML = ''; 
    });
}

document.addEventListener('DOMContentLoaded', () => {
        

    formAddTask.addEventListener('submit', (e) => {
        e.preventDefault();
        const addFormData = new FormData(formAddTask);
        const newTask = Object.fromEntries(addFormData);
        
        addTask(newTask);
        formAddTask.innerHTML = '';
        printTasks();


        
    });
});
function confirmDelete(taskId) {
    const shouldDelete = confirm("Are you sure you want to DELETE this task?");
    if (shouldDelete) {
        deleteTask(taskId);
        printTasks();
    }
}
async function createFormEddit(taskId) {
    
    deleteAllForms()

    const formEditTask = document.querySelector(`.form-edit${taskId}`);
    let tasks = await getTasks();
    const editingTask = tasks.find(task => task.id === taskId)
    
    
    formEditTask.innerHTML +=
        `<input type="textbox" id="new-Task-title" placeholder="Enter new task" name="title" value="${editingTask.title}"/>
        <p>Level of priority :</p>
        <input type="radio" id="high" name="priority" value="High">
        <label for="high">High</label>
        <br>
        <input type="radio" id="medium" name="priority" value="Medium">
        <label for="medium">Medium</label>
        <br>
        <input type="radio" id="low" name="priority" value="Low">
        <label for="low">Low</label>
        <label for="stage">Level of completion:</label>
        <select id="stage" name="stage" value="${editingTask.stage}">
            <option  value="Not Started">Not Started</option>
            <option value="Starting(-20%)">Starting(-20%)</option>
            <option value="Half done(20%-85%)">Half done(20%-75%)</option>
            <option value="Last touches(+85%)">Last touches(+85%)</option>
            <option value="Done(100%)">Done(100%)</option>
        </select>
        <input type="textbox" id="new-Task-coment" placeholder="Coment" name="coment" value="${editingTask.coment}"/>
        <button class = "btn" type= "submit">Edit</button>
        <button class = "btn" onClick="deleteAllForms()">Cancel</button>`

        formEditTask.addEventListener('submit', async (e) => { /*Pensar si  sería mejor extraer el evento en una función.No se si sería lo mejor porque tendría que redefinir cosas y pasar parametros, aunque sí sería más escalable y modular*/
            e.preventDefault();
            
            const editFormData = new FormData(formEditTask);
            const editedTask = Object.fromEntries(editFormData);
    
            await editTask(taskId, editedTask);
            
            formEditTask.innerHTML = '';
            printTasks();
        });

}

function createFormAdd(){
    deleteAllForms();

    formAddTask.innerHTML +=
        `<input type="textbox" id="new-Task-title" placeholder="Enter new task" name="title"/>
        <p>Level of priority :</p>
        <input type="radio" id="high" name="priority" value="High">
        <label for="high">High</label>
        <br>
        <input type="radio" id="medium" name="priority" value="Medium">
        <label for="medium">Medium</label>
        <br>
        <input type="radio" id="low" name="priority" value="Low">
        <label for="low">Low</label>
        <label for="stage">Level of completion:</label>
        <select id="stage" name="stage">
            <option  value="Not Started">Not Started</option>
            <option value="Starting(-20%)">Starting(-20%)</option>
            <option value="Half done(20%-85%)">Half done(20%-75%)</option>
            <option value="Last touches(+85%)">Last touches(+85%)</option>
            <option value="Done(100%)">Done(100%)</option>
        </select>
        <input type="textbox" id="new-Task-coment" placeholder="Coment" name="coment"/>
        <button class = "btn" type="submit">Add</button>
        <button class = "btn" onClick="deleteAllForms()">Cancel</button>`

}
/*export {createFormAdd, createFormEddit,}*/






