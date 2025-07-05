import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import TodoItem from './TodoItem'
import { fetchTodos, clearTodos } from '../features/todos/todoSlice'

function TodoList() {
    const dispatch = useDispatch()
    const { items, loading, error } = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    if (loading) return <p>Завантаження...</p>
    if (error) return <p>Помилка: {error}</p>

    return (
        <div>
            <ul className="todo-list">
                {items.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <button onClick={() => dispatch(clearTodos())}>Очистити все</button>
        </div>
    )
}

export default TodoList
