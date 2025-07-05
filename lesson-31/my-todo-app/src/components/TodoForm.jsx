import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

function TodoForm() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(addTodo({ text }))
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Нове завдання"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    )
}

export default TodoForm
