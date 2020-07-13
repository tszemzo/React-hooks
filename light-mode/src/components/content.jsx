import React, { useContext, Fragment } from 'react';
import ThemeContext from '../contexts/theme';

export const Content = () => {
    const { theme } = useContext(ThemeContext);
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    return (
        <Fragment>
            <button style={{backgroundColor: backgroundColor}} type="button">Content</button>
        </Fragment>
    );
};
