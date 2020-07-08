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

import React from 'react';
import './App.css';
// import { usePassword } from './hooks/usePassword'
import { CompanyForm } from './components/CompanyForm';

function App() {
  // const [isValid, onPasswordChange] = usePassword(5);
  return (
    <div className="App">
      {/* CustomHooks
      <input type='text' onChange={e => onPasswordChange(e)} />
      {!isValid && <p>Tu password no cumple con los parametros de seguridad</p>} */}
      <CompanyForm />
    </div>
  );
}

export default App;
