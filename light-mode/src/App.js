import React, { useState } from 'react';
import { ThemeProvider } from "./contexts/theme"
import { Button } from "./components/button"
import { Content } from "./components/content"

import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div>
        <Button />
      </div>
      <div>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
