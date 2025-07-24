import { useState, useEffect } from "react";

export default function TitleChanger() {

    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div style={{ textAling: 'center', margin: '2rem 0' }}>
            <h2>Escribi el titulo de la pagina:</h2>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Nuevo titulo..."
                style={{ padding: '0.5rem', width: '250px' }}
            />
        </div>
    );
}

