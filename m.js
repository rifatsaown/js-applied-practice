let number = [45, 65, 24, 64, 85, 15, 45, 48, 46, 65, 32, 15, 65, 25, 25, 23, 64, 85, 15, 89]

function removeDuplicates(number) {
    let unique = [];
    for (const element of number) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }

    /* for (let i = 0; i <number.length; i++) {
        const element = number[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    } */

    return unique;
}

console.log(removeDuplicates(number));