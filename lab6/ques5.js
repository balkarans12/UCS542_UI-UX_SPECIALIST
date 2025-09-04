function processArray(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((sum, num) => sum + num, 0);
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log("Processed sum:", processArray(numbers));
