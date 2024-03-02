// ⛔️ Uncaught TypeError: str.split is not a function

// EXAMPLE 1 - Convert the value to a String before using `split()`

const str = new Date();
console.log(typeof str); // 👉️ object

const result = String(str).split(' ');
console.log(result); // 👉️ ['Fri', 'Dec', ...]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is of type `string` before using `split()`

// const str = 100;

// const result = typeof str === 'string' ? str.split(' ') : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// const str = 100;

// let result = '';

// if (typeof str === 'string') {
//   result = str.split(' ');
// }

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Accessing a specific string property value on an object

// const obj = {
//   site: 'bobby hadz com',
// };

// const result = obj.site.split(' ');
// console.log(result); // 👉️ [ 'bobby', 'hadz', 'com' ]
