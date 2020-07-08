import React from 'react';
import './App.css';
import { CompanyForm } from './components/CompanyForm';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CompanyForm />
    </div>
  );
}

export default App;
