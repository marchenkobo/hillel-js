import { call, put, takeEvery, all } from 'redux-saga/effects'
import {
    fetchTodos,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    addTodoSuccess,
    deleteTodo,
    deleteTodoSuccess,
} from './todoSlice'

// Емуляція запиту (фейковий API)
const fakeApi = {
    fetch: () =>
        new Promise((resolve) =>
            setTimeout(() => resolve([{ id: 1, text: 'Sample TODO', completed: false }]), 1000)
        ),
    add: (todo) =>
        new Promise((resolve) =>
            setTimeout(() => resolve({ ...todo, id: Date.now(), completed: false }), 500)
        ),
    delete: (id) =>
        new Promise((resolve) => setTimeout(() => resolve(id), 500)),
}

// 🔸 Worker: Завантажити TODOs
function* handleFetchTodos() {
    try {
        const todos = yield call(fakeApi.fetch)
        yield put(fetchTodosSuccess(todos))
    } catch (error) {
        yield put(fetchTodosFailure(error.message))
    }
}

// 🔸 Worker: Додати TODO
function* handleAddTodo(action) {
    const newTodo = action.payload
    const savedTodo = yield call(fakeApi.add, newTodo)
    yield put(addTodoSuccess(savedTodo))
}

// 🔸 Worker: Видалити TODO
function* handleDeleteTodo(action) {
    const id = action.payload
    yield call(fakeApi.delete, id)
    yield put(deleteTodoSuccess(id))
}

// 🔸 Watcher
function* watchTodoActions() {
    yield takeEvery(fetchTodos.type, handleFetchTodos)
    yield takeEvery(addTodo.type, handleAddTodo)
    yield takeEvery(deleteTodo.type, handleDeleteTodo)
}

// 🔸 Root saga
export default function* rootSaga() {
    yield all([watchTodoActions()])
}
