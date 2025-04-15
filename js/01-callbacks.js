/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callback) {
//   // let callback = function () {console.log('Hello from fn2');}
//   console.log('Hello from fn1');

//   callback(10);
// };

// const fn2 = function (num) {
//   console.log('Hello from fn2');

//   console.log(num);
// };

// fn1(fn2);

// fn1(function (num) {
//   console.log('Hello from inline callback');

//   console.log(num);
// });

/*
TODO: Напишіть функцію each(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: each повинна повернути новий масив, елементами якого будуть
TODO: результати виклику коллбека.
 */

// const each = function (array, callback) {
//   // let array = [64, 49, 36, 25, 16];
//   // let callback = function (value) {return value * 2;}

//   const newArray = [];

//   for (const el of array) {
//     newArray.push(callback(el));
//   }

//   return newArray;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
