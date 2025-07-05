import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodos: (state) => {
            state.loading = true
        },
        fetchTodosSuccess: (state, action) => {
            state.loading = false
            state.items = action.payload
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        addTodo: (state, action) => {},
        addTodoSuccess: (state, action) => {
            state.items.push(action.payload)
        },
        deleteTodo: (state, action) => {},
        deleteTodoSuccess: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            const todo = state.items.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.items.find((t) => t.id === id)
            if (todo) {
                todo.text = text
            }
        },
        clearTodos: (state) => {
            state.items = []
        },
    },
})

export const {
    fetchTodos,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    addTodoSuccess,
    deleteTodo,
    deleteTodoSuccess,
    toggleComplete,
    editTodo,
    clearTodos,
} = todoSlice.actions

export default todoSlice.reducer
