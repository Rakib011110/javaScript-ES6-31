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
  <h3>What is ? (Click Me)</h3>
</summary>
<br >

```js

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
