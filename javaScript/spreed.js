const max = Math.max(12, 45, 54, 56)

// console.log(max); 
const numbers = [44, 43, 42, 21, 24, 65]
const largest = Math.max(...numbers)

// console.log(...numbers);
// console.log(largest); 

const numbers2 = [...numbers]
numbers.push(43)
// console.log(numbers);
// console.log(numbers2);

const number3 = [...numbers]


const numbers4 = [434, 5, 45, ...number3, 434]
console.log(numbers4);