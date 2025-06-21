import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css'


function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const validate = (values) => {
        const errors = {};
        if (!values.task) {
            errors.task = 'Обов’язкове поле';
        } else if (values.task.length < 5) {
            errors.task = 'Мінімум 5 символів';
        }
        return errors;
    };

    return (
        <div className="todo">
            <h2 className="todo__title">Список справ</h2>

            <Formik
                initialValues={{ task: '' }}
                validate={validate}
                onSubmit={(values, { resetForm }) => {
                    setTodos([...todos, values.task]);
                    resetForm();
                }}
            >
                {() => (
                    <Form className="todo__form">
                        <div className="todo__field">
                            <label htmlFor="task" className="todo__label">Нова справа:</label>
                            <Field
                                id="task"
                                name="task"
                                type="text"
                                className="todo__input"
                                placeholder="Введіть текст задачі"
                            />
                            <ErrorMessage
                                name="task"
                                component="div"
                                className="todo__error"
                            />
                        </div>

                        <button type="submit" className="todo__button">Додати</button>
                    </Form>
                )}
            </Formik>

            <ul className="todo__list">
                {todos.map((todo, idx) => (
                    <li key={idx} className="todo__item">{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
