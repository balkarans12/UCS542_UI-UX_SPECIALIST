let arr = [12, 5, 23, 7, 18];
console.log("Array:", arr);
console.log("Largest:", Math.max(...arr)); //...arr to spread the elements of the arr as individuals
console.log("Smallest:", Math.min(...arr));
let ascending = [...arr].sort((a, b) => a - b);
let descending = [...arr].sort((a, b) => b - a);
console.log("Ascending:", ascending);
console.log("Descending:", descending);
