import React, { useState, useEffect } from 'react';

const Home = () => {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTask = () => {
        if (newTask.trim() === '') return; // пустые не добавляем

        const newTodo = {
            id: Date.now(),
            text: newTask.trim(),
            completed: false,
        };

        setTodos(prev => [...prev, newTodo]);
        setNewTask('');
    };

    const deleteTask = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    // Переключить состояние выполнено/не выполнено
    const toggleComplete = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h2>ToDo List</h2>

            <div className="list">

                <div className="list__create">
                    <input
                        className="list__input"
                        type="text"
                        value={newTask}
                        onChange={e => setNewTask(e.target.value)}
                        placeholder="Нова задача"
                    />
                    <button
                        className="list__add-button"
                        onClick={addTask}>
                        Додати
                    </button>
                </div>

                <ul className="list__tasks">
                    {todos.map(todo => (
                        <li
                            className="list__item"
                            key={todo.id}>
                            <input
                                className="list__checkbox"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                            />
                            <span
                                className="list__text"
                                onClick={() => toggleComplete(todo.id)}>
                              {todo.text}
                            </span>
                            <button
                                className="list__remove-button"
                                onClick={() => deleteTask(todo.id)}>
                                Видалити
                            </button>
                        </li>
                    ))}

                    {todos.length === 0 && <p>Немає задач</p>}
                </ul>
            </div>
        </div>
    );
};

export default Home;
