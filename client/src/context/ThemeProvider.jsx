import React, { createContext, useState } from 'react';

const ThemeContext = createContext({ctx_key:"ctx_value"});

export const ThemeProvider = ({ children })=> {
    const [theme, setTheme] = useState('light'); 
  
    
    function setDarkMode() {
        document.querySelector('.app').setAttribute('data-theme', 'dark');
    }
    
    function setLightMode() {
        document.querySelector('.app').setAttribute('data-theme', 'light');
    }

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      newTheme === 'dark' ? setDarkMode() : setLightMode();
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }


export default ThemeProvider;
