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