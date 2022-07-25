import React, { useState, useEffect } from 'react';
import ThemeContext, { themes } from '../contexts/ThemeContext';

const initalTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  ? themes.dark
  : themes.light;

const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState(initalTheme);

  const changeTheme = theme => setTheme(theme);

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove(themes.dark);
        break;
      case themes.dark:
      default:
        document.body.classList.add(themes.dark);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
