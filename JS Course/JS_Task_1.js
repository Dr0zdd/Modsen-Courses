'use strict';

function countVowels(str) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я',
        'a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (const char  of str.toLowerCase()) {
        if (vowels.includes(char)) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowels('aabf'));