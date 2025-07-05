import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles/todo.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <h1>TODO App</h1>
            <TodoForm />
            <TodoList />
        </Provider>
    </React.StrictMode>
)
