$(document).ready(function () {
    let taskList = {};
    let counterId = Number(localStorage.getItem("counterId")) || 0;


    const savedTasks = localStorage.getItem("taskList");
    if (savedTasks) {
        taskList = JSON.parse(savedTasks);
        $.each(taskList, function (id, task) {
            addTaskToList(task.id, task.description, task.completed);
        });
    }


    $('.js--form').on('submit', function (e) {
        e.preventDefault();
        const val = $('.js--form__input').val().trim();
        if (!val) return alert('Введіть текст завдання');
        createTask(val);
        $('.js--form__input').val('');
    });


    $('.js--todos-wrapper').on('click', 'input[type="checkbox"]', function () {
        const id = $(this).closest('li').data('id');
        taskList[id].completed = !taskList[id].completed;
        $(this).closest('li').toggleClass('todo-item--checked');
        updateStorage();
    });

    $('.js--todos-wrapper').on('click', '.btn-delete', function () {
        const id = $(this).closest('li').data('id');
        delete taskList[id];
        $(this).closest('li').remove();
        updateStorage();
    });

    $('.js--todos-wrapper').on('click', '.todo-text', function () {
        const text = $(this).text();
        $('#modalTaskContent').text(text);
        const modal = new bootstrap.Modal(document.getElementById('taskModal'));
        modal.show();
    });


    function createTask(desc, completed = false) {
        const id = ++counterId;
        taskList[id] = { id, description: desc, completed };
        addTaskToList(id, desc, completed);
        updateStorage();
    }


    function addTaskToList(id, desc, completed) {
        const checked = completed ? 'checked' : '';
        const itemClass = completed ? 'todo-item--checked' : '';
        const li = `
            <li class="list-group-item d-flex justify-content-between align-items-center ${itemClass}" data-id="${id}">
                <div class="form-check flex-grow-1">
                    <input class="form-check-input me-2" type="checkbox" ${checked}>
                    <span class="todo-text">${desc}</span>
                </div>
                <button class="btn btn-danger btn-sm btn-delete">Видалити</button>
            </li>`;
        $('.js--todos-wrapper').append(li);
    }

    function updateStorage() {
        localStorage.setItem("taskList", JSON.stringify(taskList));
        localStorage.setItem("counterId", counterId);
    }
});
