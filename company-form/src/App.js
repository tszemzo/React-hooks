import React from 'react';
import './App.css';
import { Startups } from './components/Startups';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Startups />
    </div>
  );
}

export default App;
