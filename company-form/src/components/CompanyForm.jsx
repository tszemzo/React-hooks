import React, { useState, Fragment } from 'react';
import { useForm } from '../hooks/useForm'

export const CompanyForm = () => {
    const [values, setValues] = useState({});
    const [isValid, onFormSubmit] = useForm();

    const handleSubmit = (event) => {
        localStorage.setItem('Company', JSON.stringify(values));
        onFormSubmit(values);
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                </div>
                <div>
                    <label>Logo</label>
                    <input type="text" name="logo" onChange={handleChange} value={values.logo || ''} required />
                </div>
                <div>
                    <label>Mail</label>
                    <input type="text" name="email" onChange={handleChange} value={values.email || ''} required />
                </div>
                <div>
                    <label>Descripción</label>
                    <textarea name="description" rows="5" onChange={handleChange} value={values.description || ''} required />
                </div>
                <div>
                    <label>Web</label>
                    <input type="text" name="web" onChange={handleChange} value={values.web || ''} />
                </div>
                <div>
                    <label>Twitter</label>
                    <input type="text" name="twitter" onChange={handleChange} value={values.twitter || ''} />  
                </div>
                <div>
                    <label>Instagram</label>
                    <input type="text" name="instagram" onChange={handleChange} value={values.instagram || ''} />
                </div>                
                <button type="submit">Enviar</button>
            </form>
            {!isValid && <p>Por favor, llena todos los campos obligatorios</p>}
        </Fragment>
    );
};
