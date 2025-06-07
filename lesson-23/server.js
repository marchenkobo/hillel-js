// Загружаем библиотеки
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3333;

// Вмикаэмо CORS для всього
app.use(cors());

// Парсінг JSON в тілі запитів
app.use(express.json());

app.get('/', (req, res) => {
    res.send('TODO API працює!');
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

const tasks = []; // всі задачі
let nextId = 1;   // унікальний id


app.get('/tasks', (req, res) => {
    res.json(tasks); // віддаємо всі задачі
});

app.post('/tasks', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = {
        id: nextId++,
        title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);



    // DELETE /tasks/:id — удалить задачу по ID
    app.delete('/tasks/:id', (req, res) => {
        const id = parseInt(req.params.id); // id задачі на видалення

        const index = tasks.findIndex(task => task.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Задача не знайдена' });
        }

        tasks.splice(index, 1);

        res.status(204).send();
    });

});