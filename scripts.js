document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-button-task');
    const taskList = document.getElementById('task-list');
    

    function addTask() {

        const valueTask = taskInput.value.trim();

        if(valueTask === '') {
            alert('Digitar a Tarefa');
            return;
        }

        const liTask = document.createElement('li');

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'task-checkbox';

        const spanTask = document.createElement('span');
        spanTask.className = 'task-text';
        spanTask.textContent = valueTask;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '❌';

        liTask.appendChild(checkBox);
        liTask.appendChild(spanTask);
        liTask.appendChild(deleteButton);

        taskList.appendChild(liTask);


        taskInput.value = '';

        


        checkBox.addEventListener('change' , function() {
            liTask.classList.toggle('completed');
        })

        deleteButton.addEventListener('click', function() {
            liTask.remove()
        })
        
    }
    addTaskButton.addEventListener('click' , addTask);    



});