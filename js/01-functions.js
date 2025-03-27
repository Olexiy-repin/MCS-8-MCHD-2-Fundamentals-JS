/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 */

// function greetUser(firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}!`);
// }

// greetUser('Oleksii', 'Repin');

// greetUser('Ida', 'Conner');

// function createFullName(firstName, lastName) {
//   const userFullName = `${firstName} ${lastName}`;

//   return userFullName;
// }

// const fullName = createFullName('Oleksii', 'Repin');

// console.log(fullName);

/*
TODO: Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
TODO: Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

// function getRectArea(sideA, sideB) {
//   return sideA * sideB;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 TODO: маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 TODO:
 TODO: Вага та висота будуть спеціально передані як рядки.
 TODO:
 TODO: Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   const userBmi = weight / height ** 2;

//   return Number(userBmi.toFixed(1));
// }

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8
