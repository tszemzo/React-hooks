import React, { useState, useContext, Fragment } from 'react';
import ThemeContext from '../contexts/theme';

export const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    return (
        <Fragment>
            <button style={{backgroundColor: backgroundColor}} onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </Fragment>
    );
};
