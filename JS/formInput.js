function confirmDelete(taskId) {
    const shouldDelete = confirm("¿Estás seguro de que deseas eliminar esta tarea?");
    if (shouldDelete) {
        deleteTask(taskId);
        printTasks();
    }
}
function openEditModal(taskId) {
    
}