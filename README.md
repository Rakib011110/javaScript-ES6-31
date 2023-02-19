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
