const tasksList = document.getElementById('tasksList');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

const API_URL = 'http://localhost:3333/tasks';

// завантажуэмо всі задачі з серверу
async function loadTasks() {
    tasksList.innerHTML = 'Завантаження...';

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        tasksList.innerHTML = '';

        // додаємо задачі у список
        data.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task.title;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Видалити';
            deleteBtn.addEventListener('click', () => deleteTask(task.id));

            li.appendChild(deleteBtn);
            tasksList.appendChild(li);
        })
    } catch (error) {
        tasksList.textContent = 'Помилка при завантаженні задач';
        console.error(error);
    }
}

// видалення по id
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        if (response.ok) {
            await loadTasks(); // оновлюємо список
        } else {
            alert('Не вдалося видалити задачу');
        }
    } catch (error) {
        alert('Помилка при видаленні');
        console.error(error);
    }
}

// додавання задач
taskForm.onsubmit = async (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();

    if (!title) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title }),
        });

        if (response.ok) {
            taskInput.value = ''
            loadTasks(); // оновлення списку
        } else {
            alert('Помилка при додаванні задачі');
        }
    } catch (error) {
        alert('Помилка мережі');
        console.error(error);
    }
};

loadTasks();