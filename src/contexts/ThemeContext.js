import { createContext } from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
};

const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

export default ThemeContext;
