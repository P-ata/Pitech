export default function Header({ title, subtitle}) {
    return (
        <header style={{textAlign: 'center', margin: '2rem 0'}}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}