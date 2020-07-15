import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Fragment>
            <p>STARTUP ARGENTINA</p>
            <Link to="/startup-form">Agregar startups</Link>
        </Fragment>
    );
};
