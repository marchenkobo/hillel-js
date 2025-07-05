import { useDispatch } from 'react-redux'
import {
    deleteTodo,
    toggleComplete,
    editTodo,
} from '../features/todos/todoSlice'
import { useState } from 'react'

function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editTodo({ id: todo.id, text: editText }))
        }
        setIsEditing(!isEditing)
    }

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
            />
            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </span>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Зберегти' : 'Редагувати'}</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Видалити</button>
        </li>
    )
}

export default TodoItem
