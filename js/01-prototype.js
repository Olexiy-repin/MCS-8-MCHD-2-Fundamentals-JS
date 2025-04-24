/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
 * Object.create() та ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isAdult() {
//     return this.age >= 18;
//   },
// };

// const userA = Object.create(userMethods);

// userA.firstName = 'Clifford';
// userA.lastName = 'Hamilton';
// userA.age = 20;

// console.log(userA);
// console.log(userA.getFullName());
// console.log(userA.isAdult());

// const userB = Object.create(userMethods);

// userB.firstName = 'Harry';
// userB.lastName = 'Strickland';
// userB.age = 17;

// console.log(userB);
// console.log(userB.getFullName());
// console.log(userB.isAdult());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */

// const objC = {
//   c: 'objC',
// };

// const objB = Object.create(objC);

// objB.b = 'objB';

// const objA = Object.create(objB);

// objA.a = 'objA';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log('key:', key);
//   }
// }
