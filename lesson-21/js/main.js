"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var createInput = document.querySelector('.js--form__input');
  var createButton = document.querySelector('.js--form__button');
  var listWrapper = document.querySelector('.js--todos-wrapper');
  var localStorageTaskList = localStorage.getItem("taskList");
  var taskList = {};
  var counterId = Number(localStorage.getItem("counterId")) || 0;
  if (localStorageTaskList) {
    taskList = JSON.parse(localStorageTaskList);
    for (var task in taskList) {
      var item = taskList[task];
      createListItem(item.id, item.description, item.completed);
    }
  }
  createButton.addEventListener('click', function (e) {
    e.preventDefault();
    var value = document.querySelector('.js--form__input').value;
    if (value) {
      createTask(value);
      createInput.value = '';
    } else {
      alert('Please enter task description');
    }
  });
  listWrapper.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT') {
      var targetId = e.target.closest('li').getAttribute('data-id');
      toggleTaskState(targetId);
      console.log(targetId);
    } else if (e.target.tagName === 'BUTTON') {
      var _targetId = e.target.closest('li').getAttribute('data-id');
      deleteTask(_targetId);
    }
  });
  function createTask() {
    var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var id = ++counterId;
    var task = {
      id: id,
      completed: state,
      description: description
    };
    taskList[task.id] = task;
    createListItem(task.id, task.description, task.completed);
    updateLocalStorage();
  }
  function createListItem(id, description, state) {
    var listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    if (state) {
      listItem.classList.add('todo-item--checked');
    }
    listItem.setAttribute('data-id', id);
    listItem.innerHTML = "\n          <input type=\"checkbox\" ".concat(state ? 'checked' : '', " >\n          <span class=\"todo-item__description\">").concat(description, "</span>\n          <button class=\"todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n        ");
    listWrapper.appendChild(listItem);
  }
  function toggleTaskState(id) {
    var newStatus = !taskList[id].completed;
    taskList[id].completed = newStatus;
    listWrapper.querySelector("[data-id=\"".concat(id, "\"]")).classList.toggle('todo-item--checked');
    updateLocalStorage();
  }
  function updateLocalStorage() {
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('counterId', counterId);
  }
  function deleteTask(id) {
    listWrapper.querySelector("[data-id=\"".concat(id, "\"]")).remove();
    delete taskList[id];
    updateLocalStorage();
  }
});