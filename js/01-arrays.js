/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JavaScript'];

console.log(courses);

courses[0] = 'NodeJS';

console.log(courses);

console.log(courses.length);

const lastElement = courses[courses.length - 1];

console.log(lastElement);
