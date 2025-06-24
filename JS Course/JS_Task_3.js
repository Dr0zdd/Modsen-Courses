function sumFirstAndLast(num) {
    const str = num.toString();

    const first = str[0];
    const last = str[str.length - 1];

    return Number(first) + Number(last);
}

console.log(sumFirstAndLast(174))