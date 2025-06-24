function errorHandling(a, b) {
    try {
        if (b === 0) {
            throw new Error('Деление на 0!');
        }
        return a / b;
    } catch (err) {
        return "Ошибка!";
    }
}

console.log(errorHandling(2,0))