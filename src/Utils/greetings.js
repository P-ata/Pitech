export function getGreeting() {
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos dias!';
    if (hora < 18) return 'Buenas tardes!';
    return 'Buenas noches!';
}

