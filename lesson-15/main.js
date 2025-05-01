document.addEventListener("DOMContentLoaded", function() {
    const createInput = document.querySelector('.js--form__input');
    const createButton = document.querySelector('.js--form__button');
    const listWrapper = document.querySelector('.js--todos-wrapper');
    const localStorageTaskList = localStorage.getItem("taskList");

    let taskList = {}
    let counterId = Number(localStorage.getItem("counterId")) || 0;

    if (localStorageTaskList) {
        taskList = JSON.parse(localStorageTaskList);

        for (let task in taskList) {
            const item = taskList[task]
            createListItem(item.id, item.description, item.completed);
        }
    }

    createButton.addEventListener('click', (e) => {
        e.preventDefault();
        let value = document.querySelector('.js--form__input').value;

        if (value) {
            createTask(value)
            createInput.value = '';
        } else {
            alert('Please enter task description');
        }
    });

    listWrapper.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') {
            let targetId = e.target.closest('li').getAttribute('data-id');
            toggleTaskState(targetId);
            console.log(targetId);
        } else if (e.target.tagName === 'BUTTON') {
            let targetId = e.target.closest('li').getAttribute('data-id');
            deleteTask(targetId);
        }
    })

    function createTask(description = "", state = false) {
        const id = ++counterId;
        let task = {
            id: id,
            completed: state,
            description: description,
        }

        taskList[task.id] = task;
        createListItem(task.id, task.description, task.completed);
        updateLocalStorage();
    }

    function createListItem(id, description, state) {
        let listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        if (state){
            listItem.classList.add('todo-item--checked');
        }
        listItem.setAttribute('data-id', id);
        listItem.innerHTML = `
          <input type="checkbox" ${state ? 'checked' : ''} >
          <span class="todo-item__description">${description}</span>
          <button class="todo-item__delete">Видалити</button>
        `
        listWrapper.appendChild(listItem);
    }


    function toggleTaskState(id) {
        let newStatus = !taskList[id].completed;
        taskList[id].completed = newStatus;
        listWrapper.querySelector(`[data-id="${id}"]`).classList.toggle('todo-item--checked');
        updateLocalStorage();
    }

    function updateLocalStorage () {
        localStorage.removeItem('taskList');
        localStorage.setItem('taskList', JSON.stringify(taskList));
        localStorage.setItem('counterId', counterId);
    }

    function deleteTask(id) {
        listWrapper.querySelector(`[data-id="${id}"]`).remove();
        delete taskList[id];
        updateLocalStorage();
    }

})