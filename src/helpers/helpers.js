export const capitalize = (string) => {
    const primeraLeta = string.charAt(0);
    const response = string.slice(1);
    return primeraLeta.toUpperCase() + response;
}

export const capitalizeWord = (text) => {
    const words = text.split(" ");
    const wordsCapitalized = words.map(word => capitalize(word));
    return wordsCapitalized.join(" ");
}

export const formtDate = (text) => {

    const date = new Date(text);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date.toLocaleDateString('es-Mx', {
        timeZone: 'America/Mexico_City',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}


export const getStatus = (status) => {

    switch (status) {
        case 'inicio':
            return 'Inicio';
        case 'en_curso':
            return 'En curso';
        case 'pausa':
            return 'En pausa';
        case 'completado':
            return 'Completado';
        case 'cancelada':
            return 'Cancelado';
        default:
            return 'Ningun de las anteriores'
    }
}