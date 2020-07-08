import { useState } from 'react'

export const useForm = () => {
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);
        const { name, logo, email, description  } = values;
        const _isValid = name && logo && email && description;
        setIsValid(_isValid);
    }

    return [isValid, handleSubmit];
}