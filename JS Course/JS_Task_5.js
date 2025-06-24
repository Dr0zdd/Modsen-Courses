function findUnique(str) {
    const string = str.trim();
    const charCount = {};

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
    }


    for (let char of string) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return '';
}
