document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-button-task');
    const taskList = document.getElementById('task-list');


    const buttonChangeColor = document.getElementById('change-color')

    const imgForbutton  = {
        lua:'./img/lua.jpg', alt:'ícone-da-lua',
        sol:'./img/sol.png', alt:'ícone-do-sol'
    }

    const icon = document.createElement('img')
    icon.src = imgForbutton.lua
    icon.alt = imgForbutton.alt
    icon.style.width = '45px'
    icon.style.height = '45px'

    buttonChangeColor.appendChild(icon)

    function changeColor () {
        const body = document.body
        const isDarkMode = body.classList.toggle('dark-mode')

        if (isDarkMode) {
            icon.src = imgForbutton.sol
            
        } else {
            icon.src = imgForbutton.lua
        }
    }

    buttonChangeColor.addEventListener('click', changeColor)



    function addTask() {

        const valueTask = taskInput.value.trim();

        if (valueTask === '') {
            alert('Para adicionar digite uma tarefa!');
            return;
        }

        const liTask = document.createElement('li');

        const checkBoxTask = document.createElement('input');
        checkBoxTask.className = 'task-checkbox';
        checkBoxTask.type = 'checkbox';

        let spanTask = document.createElement('span')
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




        checkBoxTask.addEventListener('change', function () {
            liTask.classList.toggle('completed')
        })


        deleteTask.addEventListener('click', function () {
            liTask.remove()
        })

        // 🆕 DECLARE TUDO AQUI EM CIMA!
        let modeEdit = false;
        let InputEdit;
        let estaSalvando = false;

        // 🆕 FUNÇÃO saveEdit FORA DO EVENTO
        function saveEdit() {
            console.log('🔥 saveEdit foi chamada!');
            console.log('⚠️ Flag estaSalvando:', estaSalvando);

            if (estaSalvando) {
                console.log('🛑 JÁ ESTÁ SALVANDO! Ignorando chamada...');
                return;
            }

            estaSalvando = true;
            console.log('✅ Marcou flag como true');

            const saveNewText = InputEdit.value.trim();

            console.log('📝 Novo texto digitado:', saveNewText);

            if (saveNewText === '') {
                console.log('❌ Texto vazio! Mostrando alerta');
                alert('Para salvar tem que digitar algo');
                estaSalvando = false;  // Libera a flag
                return;
            }

            console.log('✅ Validação passou');

            spanTask.textContent = saveNewText;

            console.log('✅ Atualizou span com novo texto:', spanTask.textContent);

            InputEdit.parentNode.replaceChild(spanTask, InputEdit);

            console.log('✅ Substituiu input por span');

            editTask.textContent = '✏️';

            console.log('✅ Voltou botão ao normal');

            estaSalvando = false;
            modeEdit = false;

            console.log('🎉 SAVE COMPLETO!');
        }

        editTask.addEventListener('click', function () {
            console.log('🖊️ Clicou no botão editar');
            console.log('🔍 Modo edição:', modeEdit);

            if (modeEdit) {
                console.log('💾 Modo salvar!');
                saveEdit();  // Agora funciona!
                return;
            }

            console.log('✏️ Modo criar input!');

            modeEdit = true;

            const newText = spanTask.textContent;

            InputEdit = document.createElement('input');
            InputEdit.type = 'text';
            InputEdit.className = 'task-edit-input';
            InputEdit.value = newText;

            console.log('📝 Texto original:', newText);

            spanTask.parentNode.replaceChild(InputEdit, spanTask);

            console.log('✅ Substituiu span por input');

            editTask.textContent = '💾';
            InputEdit.focus();

            InputEdit.addEventListener('keydown', function (event) {
                console.log('⌨️ Tecla pressionada:', event.key);
                if (event.key === 'Enter') {
                    console.log('✅ Detectou ENTER!');
                    saveEdit();
                }
            });
            
            InputEdit.addEventListener('blur', function () {
                console.log('👁️ Input perdeu o foco (blur)');

                // Espera um pouquinho antes de salvar
                setTimeout(function () {
                    // Só salva se ainda estiver em modo edição
                    if (modeEdit) {
                        saveEdit();
                    }
                }, 100);
            });
        });

    }

    addTaskButton.addEventListener('click', addTask)

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask()
        }
    })

})

/*

```

---

## **🧪 AGORA TESTE:**

1. **Adicione uma tarefa**
2. **Clique no botão editar (✏️)**
3. **Edite o texto**
4. **Aperte Enter**
5. **Olhe o CONSOLE (F12)**

---

## **📋 ME RESPONDA:**

Copie e cole aqui **TODOS os logs que aparecem no console**, na ordem!

Deve aparecer algo tipo:
```
🖊️ Clicou no botão editar
🖊️ Clicou no botão editar
scripts.js:60 🔍 Modo edição: false
scripts.js:69 ✏️ Modo criar input!
scripts.js:80 📝 Texto original: ppp
scripts.js:84 ✅ Substituiu span por input
3scripts.js:139 ⌨️ Tecla pressionada: Backspace
scripts.js:139 ⌨️ Tecla pressionada: d
scripts.js:139 ⌨️ Tecla pressionada: a
scripts.js:139 ⌨️ Tecla pressionada: n
scripts.js:139 ⌨️ Tecla pressionada: i
scripts.js:139 ⌨️ Tecla pressionada: e
scripts.js:139 ⌨️ Tecla pressionada: l
scripts.js:147 👁️ Input perdeu o foco (blur)
scripts.js:92 🔥 saveEdit foi chamada!
scripts.js:93 ⚠️ Flag estaSalvando: false
scripts.js:101 ✅ Marcou flag como true
scripts.js:105 📝 Novo texto digitado: daniel
scripts.js:114 ✅ Validação passou
scripts.js:119 ✅ Atualizou span com novo texto: daniel
scripts.js:123 ✅ Substituiu input por span
scripts.js:127 ✅ Voltou botão ao normal
scripts.js:131 ✅ Voltou botão ao normal
scripts.js:132 🎉 SAVE COMPLETO!
scripts.js:59 🖊️ Clicou no botão editar
scripts.js:60 🔍 Modo edição: false
scripts.js:69 ✏️ Modo criar input!
scripts.js:80 📝 Texto original: daniel
scripts.js:84 ✅ Substituiu span por input
*/