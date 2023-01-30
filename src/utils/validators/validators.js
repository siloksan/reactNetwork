//условие на пустое поле
export const required = (value) => {
    if (value) return undefined;
    return 'Field required';
}

//условие на длинну строки
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'Max length is ' + maxLength + ' symbol';
    return undefined;
}