const inputNewTask = document.querySelector("#new-task input");
const buttonNewTask = document.querySelector("#create-task");
const tasksContainer = document.querySelector("#tasks");

buttonNewTask.onclick = function () {
  if (inputNewTask.value.length === 0) {
    alert("Tenés que ingresar una tarea en el campo de texto");
  } else {
    tasksContainer.innerHTML += `<div class="task">
                                    <span id="taskname">${inputNewTask.value}</span>
                                    <button class="delete">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                 </div>`;

    //Clean the input text
    inputNewTask.value = "";

    //Delete task
    var current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //Complete task
    var tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {    
            this.classList.toggle('completed');
        }
    }
  }
};
