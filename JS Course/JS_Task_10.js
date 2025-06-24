function delayedRandom() {
    return  new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 10) +1;
        const delay = number * 1000;

        console.log(`Сгенировано число: ${number}`);

        setTimeout(() => {
            if (number <= 5) {
                resolve(`Число ${number} прошло проверку`);
            } else  {
                reject(new Error(`Число ${number} не прошло проверку`));
            }
        }, delay)
    })
}

delayedRandom()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));