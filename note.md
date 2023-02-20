- [js type](#js-type)

### demo

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

- [js type](#js-type)

### demo

<details>
<summary>
  <h3>What is ? (Click Me)</h3>
</summary>
<br >

```js

```

</details>
