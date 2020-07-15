import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage = (props) => {
    const { description, id } = useParams();
    return (
        <Fragment>
            <p>Pagina dinamica</p>
            <p>Mi Description es {description}</p>
            <p>Mi ID es {id}</p>
        </Fragment>
    );
};
