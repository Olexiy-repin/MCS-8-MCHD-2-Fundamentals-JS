/*
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посильна рівність (referential equality)
 */

/*
TODO: Створіть змінну a = 10.
TODO: Створіть та привласніть змінній b, значення змінної a.
TODO: Виведіть до консолі обидві ці змінні.
TODO: Змініть значення змінної a і ще раз виведіть у консоль.
*/

// let a = 10;
// const b = a;

// console.log('a:', a);
// console.log('b:', b);

// a = 100;

// console.log('a:', a);
// console.log('b:', b);

/*
TODO: Створіть масив arr1 = [1, 2, 3].
TODO: Створіть та привласніть змінній arr2, значення змінної arr1.
TODO: Виведіть до консолі обидва цих масива.
TODO: Додайте елемент в масив arr1 і ще раз виведіть обидва масива до консолі.
*/

const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log('arr1:', arr1);
console.log('arr2:', arr2);

arr1[0] = 100;

console.log('arr1:', arr1);
console.log('arr2:', arr2);
