import { useState } from 'react'

export const usePassword = (minLength = 8) => {
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const {value} = e.target;
        const _isValid = value.length >= minLength ? true : false;
        setIsValid(_isValid);
    }

    return [isValid, handleChange];
}
