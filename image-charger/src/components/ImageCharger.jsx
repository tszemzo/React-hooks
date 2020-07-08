import React, { useState, useEffect, Fragment } from 'react';
const axios = require('axios');

export const ImageCharger = () => {
    const [image, setImage] = useState('');
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    const fetchImage = async () => {
        const res = await axios.get(apiUrl);
        const image = res.data[0].url;
        setImage(image);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <Fragment>
            <img src={image} alt="CatImg" />
        </Fragment>
    );
};
