import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../store/todoSlice';

function TodoApp() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <h2>TODO</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Нове завдання"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Додати</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>

            <footer>
                <p>Загальна кількість: {todos.length}</p>
            </footer>
        </div>
    );
}

export default TodoApp;
