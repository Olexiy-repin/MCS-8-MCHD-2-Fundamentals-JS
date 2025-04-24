/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class User {
  #email;
  #tel;
  static test = 10;

  constructor(firstName, lastName, age, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#email = email;
    this.#tel = tel;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (User.isEmailValid(newEmail)) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }

  static isEmailValid(email) {
    return typeof email === 'string';
  }
}

const userA = new User('Jared', 'Banks', 30, 'jared@gmail.com', '(627) 350-7776');

console.log(userA);
console.log(userA.getFullName());
console.log(userA.isAdult());

console.log(userA.getEmail());
userA.setEmail('newJared@gmail.com');
console.log(userA.getEmail());

console.log(userA.tel);
userA.tel = '(843) 317-7458';
console.log(userA.tel);

// const userB = new User('Jerome', 'Obrien', 17, 'jerome@gmail.com', '(759) 349-5023');

// console.log(userB);
// console.log(userB.getFullName());
// console.log(userB.isAdult());

// console.log(userB.getEmail());
// userB.setEmail('newJerome@gmail.com');
// console.log(userB.getEmail());
