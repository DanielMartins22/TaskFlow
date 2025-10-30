document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-button-task');
    const taskList = document.getElementById('task-list');
    

    function addTask() {
        const taskText = taskInput.value.trim();

        if(taskText === '') {
            alert('Digite uma Tarefa')
            return
        }

        const liTask = document.createElement('li')

        

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox' 
        checkBox.className = 'task-checkbox'

        const spantask = document.createElement('span')
        spantask.className = 'task-text'
        spantask.textContent = taskText


        const buttonDelete = document.createElement('button')
        buttonDelete.textContent = '❌'
        buttonDelete.className = 'delete-button'


        
        liTask.appendChild(checkBox);
        liTask.appendChild(spantask);
        liTask.appendChild(buttonDelete);

        taskList.appendChild(liTask)


        taskInput.value = ''
        
    }

    addTaskButton.addEventListener('click', addTask)



});