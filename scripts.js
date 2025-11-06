document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-button-task');
    const taskList = document.getElementById('task-list');
    

    function addTask () {

        const valueTask = taskInput.value.trim();

        if(valueTask === '') {
            alert('Para adicionar digite uma tarefa!');
            return;
        }

        const liTask = document.createElement('li');

        const checkBoxTask = document.createElement('input');
        checkBoxTask.className = 'task-checkbox';
        checkBoxTask.type = 'checkbox';

        const spanTask = document.createElement('span')
        spanTask.className = 'task-text'
        spanTask.textContent = valueTask

        const deleteTask = document.createElement('button')
        deleteTask.className = 'delete-button'
        deleteTask.textContent = '❌'

        const editTask = document.createElement('button')
        editTask.className = 'edit-button'
        editTask.textContent = '✏️'

        liTask.appendChild(checkBoxTask)
        liTask.appendChild(spanTask)
        liTask.appendChild(deleteTask)
        liTask.appendChild(editTask)

        taskList.appendChild(liTask)


        taskInput.value = ''
        



        checkBoxTask.addEventListener('change' , function () {
            liTask.classList.toggle('completed')
        })


        deleteTask.addEventListener('click' , function () {
            liTask.remove()
        })

        editTask.addEventListener('click' , function() {
            const textEdit = spanTask.textContent;

            const inputEdit = document.createElement('input');
            inputEdit.type = 'text';
            inputEdit.value = textEdit;
            inputEdit.className = 'task-edit-input'

            liTask.replaceChild(inputEdit , spanTask);
            editTask.textContent = '💾';
            inputEdit.focus()


            function saveEdit () {
                const newText = inputEdit.value.trim()

                if(newText === '') {
                    alert ('Digite algo para salvar a edição')
                    inputEdit.focus()
                    return
                }

                spanTask.className = 'task-text'
                spanTask.textContent = newText
                

                const newSpan = document.createElement('span')
                newSpan.className = 'task-text'
                newSpan.textContent = newText

                liTask.replaceChild(newSpan , inputEdit)
                editTask.textContent = '✏️';
                spanTask = newSpan;

            }


            inputEdit.addEventListener("keydown" , function (event) {
                if(event.key === 'Enter') {
                    saveEdit()
                }
            })

            inputEdit.addEventListener('blur' , function () {
                saveEdit()
            })
            

        })


    }

    addTaskButton.addEventListener('click' , addTask)

    taskInput.addEventListener('keypress' , function(event) {
        if(event.key === 'Enter') {
            addTask()
        }
    })




    



});