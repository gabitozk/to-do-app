const inputNewTask = document.querySelector('#new-task input');
const buttonNewTask = document.querySelector('#create-task');
const tasksContainer = document.querySelector('#tasks');

buttonNewTask.onclick = function() {
    if (inputNewTask.value.length === 0){
        alert('Tenés que ingresar una tarea en el campo de texto')
    } else {
        tasksContainer.innerHTML += `<div class="task">
                                        <span id="taskname">${inputNewTask.value}</span>
                                        <button class="delete">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                     </div>`;

        var current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        
    }

};



