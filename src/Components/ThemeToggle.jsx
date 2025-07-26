import { useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '0.5rem 1rem',
                margin: '1rem 0',
                cursor: 'pointer',
                backgroundColor: theme === 'light' ? '#eee' : '#444',
                color: theme === 'light' ? '#000' : '#fff',
                border: 'none',
                borderRadius: '5px',
            }}
        >
            Cambiar a {theme === 'light' ? 'dark' : 'light'}
        </button>
    );
}