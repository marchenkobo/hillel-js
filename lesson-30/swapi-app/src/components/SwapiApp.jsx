import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson, clearData } from '../store/swapiSlice';
import './SwapiApp.css';  // імпорт стилів

export default function SwapiApp() {
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.swapi);

    const handleFetch = () => {
        if (id.trim() !== '') {
            dispatch(fetchPerson(id.trim()));
        }
    };

    const handleClear = () => {
        dispatch(clearData());
        setId('');
    };

    return (
        <div className="swapi-container">
            <h2>SWAPI Персонаж</h2>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Введіть ID персонажа"
                className="swapi-input"
            />
            <button
                onClick={handleFetch}
                disabled={loading || id.trim() === ''}
                className="swapi-button"
            >
                Завантажити
            </button>

            <div className="swapi-results">
                {loading && <p>Завантаження...</p>}
                {error && <p className="swapi-error">{error}</p>}
                {data && (
                    <div>
                        <h3>{data.name}</h3>
                        <p>Зріст: {data.height} см</p>
                        <p>Вага: {data.mass} кг</p>
                        <p>Колір волосся: {data.hair_color}</p>
                        <p>Колір очей: {data.eye_color}</p>
                        <p>Дата народження: {data.birth_year}</p>
                    </div>
                )}
            </div>

            <footer className="swapi-footer">
                <button
                    onClick={handleClear}
                    disabled={!data && !error}
                    className="swapi-footer-button"
                >
                    Очистити дані
                </button>
            </footer>
        </div>
    );
}
