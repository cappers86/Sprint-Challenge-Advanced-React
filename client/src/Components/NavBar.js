import React, { useState } from 'react';
import UseDarkMode from '../hooks/UseDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = UseDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Top Football Players</h1>
            <div className="dark-mode__toggle">
                <div data-testid="toggle"
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default Navbar;