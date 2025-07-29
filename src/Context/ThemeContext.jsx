import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        document.body.style.color = theme === 'light' ? '#000' : '#fff';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
