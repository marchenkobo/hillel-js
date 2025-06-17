import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import moonIcon from '../../assets/moon.svg';
import sunIcon from '../../assets/sun.svg';

const Header = () => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="header">
            <nav className="header__nav">
                <Link to="/">Головна</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/contacts">Контакти</Link>
            </nav>
            <button
                className="header__theme-button"
                onClick={handleTheme}>
                <span>
                    {theme === 'light' ? 'Dark' : 'Light'} theme
                </span>
                <img
                    src={theme === 'light' ? moonIcon : sunIcon}
                    width="24"
                    height="24"
                    alt=""/>
            </button>
        </div>
    )
}

export default Header;