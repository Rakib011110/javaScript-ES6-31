# javaScript-ES6-31

### This Repository About ES6

- [ES6](#ES6)

### ES6

<details>
<summary>
  <h3>What is ES6 ? (Click Me)</h3>
</summary>
<br >

- javaScript ES6 (ECMAScript 6) is the 6th major release of the ECMAScript language specification. It is also referred to as ES2015 as it was released in 2015.

- ES6 introduced several new features and syntax improvements to the JavaScript language, including:

- let and const keywords for declaring variables with block scope
- Arrow functions for concise and readable function syntax
- Template literals for string interpolation
- Classes for object-oriented programming in JavaScript
- Promises for handling asynchronous code
- Destructuring for easy assignment of array and object properties
- Spread operator for copying and concatenating arrays and objects
- Modules for organizing code and sharing functionality between files
- Default function parameters and rest parameters
- ES6 made writing modern and maintainable JavaScript code much easier and more efficient, and its features are widely used in modern web development today.

```js

```

</details>

<details>
<summary>
  <h3>difference between, var, Let and const in  Javascript ? (Click Me)</h3>
</summary>
<br >

- 1: In JavaScript, var, let, and const are used to declare variables, but they have some important differences:

var:
var is the oldest way to declare variables in JavaScript. It has function scope, which means that if a variable is declared inside a function, it can only be accessed within that function. If it is declared outside a function, it becomes a global variable and can be accessed throughout the code. var can be redeclared and reassigned.
Example:

```js
var a = 10;
function example() {
  var b = 20;
}
```

- 2: let:
  let was introduced in ES6 and it has block scope, which means that if a variable is declared inside a block (within curly braces), it can only be accessed within that block. let cannot be redeclared, but it can be reassigned.

```js
const a = 10;
const obj = { prop: "value" };
obj.prop = "new value"; // valid
```

- 3: const:
  const is also introduced in ES6 and it also has block scope. A variable declared with const cannot be reassigned or redeclared. However, if the variable is an object or an array, its properties or elements can be changed.

```js
const a = 10;
const obj = { prop: "value" };
obj.prop = "new value"; // valid
```

- বাংলা ঃ

- var দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে সেইটা re-declare এবং re-assign দুইটাই করা যায় ।
- let দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে সেইটা re-assign করা যায় কিন্ত re-declare করা যায় নাহ

- এবং const দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে সেইটা re-declare এবং re-assign কোনোটাই করা যায় নাহ।

</details>

<details>
<summary>
  <h3>What is Default function parameters ? (Click Me)</h3>
</summary>
<br >

- In this example, if you call addNumbers() with no arguments, it will return 0 (the default value for both x and y). If you call addNumbers(5) with only one argument, it will use 5 for x and 0 for y, and return 5. If you call addNumbers(5, 3) with both arguments, it will use 5 for x and 3 for y, and return 8.

Default function parameters can also be used with other parameter types, such as objects and arrays. For example:

```js
function addNumbers(x = 0, y = 0) {
  return x + y;
}
```

```js
function greetUser(name = "Anonymous", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greetUser(); // logs "Hello, Anonymous!"
greetUser("John"); // logs "Hello, John!"
greetUser("Mary", "Hi"); // logs "Hi, Mary!"
```

</details>

<details>
<summary>
  <h3>what is Template string in js ? (Click Me)</h3>
</summary>
<br >

- Template strings, also known as template literals, are a feature in JavaScript that allows for more expressive and flexible string formatting. Template strings are enclosed in backticks (``) instead of single quotes or double quotes.

- One of the key features of template strings is the ability to embed expressions directly into the string, using the ${expression} syntax. This allows for more dynamic string formatting, where the value of the expression is automatically converted to a string and inserted into the string.

```js
const name = "Rakib";
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
```

```js
const person = "Adam Sand";
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine =
  "First Line text \n" +
  "second line of code \n" +
  "Third line of text \n" +
  "Fourth line of string";
// console.log(multiLine)

const newMultiLine = `First Line of text
Second LIner of text
third line of string
fourth line of code 
fifth line of code
`;
// console.log(newMultiLine);

const a = 2;
const b = 2;
const num = [43, 33, 4, 4, 4, 3, 3];
const summary = "sum of:" + a + "sum of :" + b + "is" + (a + b);
// console.log(summary);
const newSummary = ` sum of a ${a} and b ${num.length} is: ${a + b}  `;
console.log(newSummary);
```

</details>

<details>
<summary>
  <h3>What is Arrow Funtion in js ? (Click Me)</h3>
</summary>
<br >

- Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and have become a popular way to write functions in modern JavaScript code.

- Arrow functions have a more concise syntax compared to traditional function expressions, and also have some differences in the way they handle the "this" keyword.

Here's an example of a traditional function expression:

```js
const double = function (x) {
  return x * 2;
};
```

- The same function can be expressed as an arrow function like this:

```js
const double = (x) => {
  return x * 2;
};
```

- As you can see, the arrow function uses the => syntax instead of the function keyword. The function parameter x is enclosed in parentheses, and the function body is enclosed in curly braces.

- Arrow functions also have a more concise syntax when the function body is a single expression. In this case, the curly braces and return keyword can be omitted:

```js
const double = (x) => x * 2;
```

- This is equivalent to the previous arrow function, but with the function body expressed as a single expression.

- One important difference between arrow functions and traditional function - expressions is how they handle the "this" keyword. Arrow functions do not bind their own "this" value, but instead inherit the "this" value from the surrounding scope. This can be useful in certain situations, but can also cause unexpected behavior if the surrounding scope changes.

- Overall, arrow functions provide a more concise syntax for writing function expressions in JavaScript, and are widely used in modern JavaScript code.

- bangla: Arrow function কে সহজভাবে সংজ্ঞায়িত করতে গেলে বলা যায় আমরা জাভাস্ক্রিপ্ট এ রেগুলার যে ফাংশন লিখি তার সংক্ষিপ্ত রূপ। এর মাধ্যমে আমরা ফাংশন এর সিনট্যাক্স কে আরো ছোট করে ফেলতে পারি। এতে আমাদের বয়লারপ্লেট কোড অনেক কমে যায়।

- more example:

```js
// function declaration
/* function add(first, second){
    const total =  first + second;
    return total;
} */

// function expression
const add1 = function add1(first, second) {
  const total = first + second;
  return total;
};
// function expression with anonymous function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};

function add3(first, second) {
  const total = first + second;
  return total;
}

function add4(first, second) {
  return first + second;
}

const add5 = function (first, second) {
  return first + second;
};
const add6 = (frist, second) => frist + second;
const result = add6(10, 20);
console.log(result);

const add = (frist, second) => {
  const total = frist + second;
  return total;
};

const num = add(323, 44);
console.log(num);

// interview question: differences between
// function declaration, function expression and arrow function
```

```js
const add = (frist, second) => frist + second;

const getFullName = (frist, last) => frist + " " + last;

const multiply = (a, b) => a * b;

const result = multiply(7, 8);
console.log(result);

const addAlll = (a, b, c, d, e, f) => a + b + c + d + e + f;

//  no peraMeter
const getPie = () => 3.12;

//  one perameter
const doubleIt = (num) => num * 2;

const fivTime = (num) => num * 5;

//  multiline Arrow funtion,
const doMath = (z, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum + secondSum;
  const result = multiplyResult / 2;
  return result;
};
```

</details>

<details>
<summary>
  <h3>spread operator ? (Click Me)</h3>
</summary>
<br >

- The spread operator is a feature introduced in ECMAScript 6 (ES6) that allows an iterable (such as an array or a string) to be expanded into individual elements. In the context of arrays, the spread operator can be used to copy an array, concatenate arrays, and pass arrays as arguments to functions.

- Here are some examples of using the spread operator with arrays:

- 1 Copy an array:

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // create a copy of arr1
console.log(arr2); // Output: [1, 2, 3]
```

- In this example, the spread operator is used to create a new array arr2 that contains all the elements of arr1.

- 2. Concatenate arrays:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2]; // concatenate arr1 and arr2
console.log(arr3); // Output: [1, 2, 3, 4]
```

- In this example, the spread operator is used to create a new array arr3 that contains all the elements of arr1 and arr2.

- 3.Pass arrays as arguments to a function

```js
const arr1 = [1, 2, 3];
const max = Math.max(...arr1); // find the maximum element in arr1
console.log(max); // Output: 3
```

- In this example, the spread operator is used to pass the elements of arr1 as individual arguments to the Math.max function, which returns the maximum value in the array.

more example:

```js
const max = Math.max(12, 45, 54, 56);

// console.log(max);
const numbers = [44, 43, 42, 21, 24, 65];
const largest = Math.max(...numbers);

// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(43);
// console.log(numbers);
// console.log(numbers2);

const number3 = [...numbers];

const numbers4 = [434, 5, 45, ...number3, 434];
console.log(numbers4);
```

</details>
