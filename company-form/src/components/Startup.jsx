import React, { Fragment } from 'react';

export const Startup = ({ startup }) => {
    const { img, name, description } = startup;
    return (
        <div>
            <img src={img} alt="Startup" width="200" height="300"></img>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};
