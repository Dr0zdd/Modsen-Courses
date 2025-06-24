function numberSquared(arr) {
    let sum = 0;

    for (let item of arr) {
        sum += item ** 2;
    }

    return sum;
}

console.log(numberSquared([3]));