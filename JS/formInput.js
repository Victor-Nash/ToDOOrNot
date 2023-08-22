const formAddTask = document.querySelector('.form-add');

document.addEventListener('DOMContentLoaded', () => {
        

    formAddTask.addEventListener('submit', (e) => {
        e.preventDefault();
        const addFormData = new FormData(formAddTask);
        const newTask = Object.fromEntries(addFormData);
        
        addTask(newTask);
        formAddContainer.innerHTML = '';


        
    });
});


function confirmDelete(taskId) {
    const shouldDelete = confirm("Are you sure you want to DELETE this task?");
    if (shouldDelete) {
        deleteTask(taskId);
        printTasks();
    }
}
function openEditModal(taskId) {

}
function createFormAdd(){
    formAddTask.innerHTML = '';
    formAddTask.innerHTML +=
        `<input type="textbox" id="new-Task-title" placeholder="Enter new task" name="title"/>
        <p>Level of priority :</p>
        <label for="high">High</label>
        <input id="high" name="priority" type="checkbox" value="High">
        <br>
        <label for="medium">Medium</label>
        <input id="medium" name="priority" type="checkbox" value="Medium">
        <br>
        <label for="low">Low</label>
        <input id="low" name="priority" type="checkbox" value="Low"
        <label for="stage">Level of completion:</label>
        <select id="stage" name="stage">
            <option  value="Not Started">Not Started</option>
            <option value="Starting(-20%)">Starting(-20%)</option>
            <option value="Half done(20%-85%)">Half done(20%-75%)</option>
            <option value="Last touches(+85%)">Last touches(+85%)</option>
            <option value="Done(100%)">Done(100%)</option>
        </select>
        <input type="textbox" id="new-Task-coment" placeholder="Coment" name="coment"/>
        <button type="submit">Add</button>`

}