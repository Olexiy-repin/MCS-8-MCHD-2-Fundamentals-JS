/*
 * Властивості елемента
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const titleEl = document.querySelector('.js-hero-title');

// console.dir(titleEl);

// console.log(titleEl.textContent);

// titleEl.textContent = 'My title';

// const imgEl = document.querySelector('.js-hero-image');

// console.dir(imgEl);

// console.log(imgEl.alt);

// imgEl.alt = 'Cat';

// imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута, значення-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const imgEl = document.querySelector('.js-hero-image');

console.dir(imgEl);

console.log(imgEl.alt);
console.log(imgEl.getAttribute('alt'));

// imgEl.setAttribute('height', 213);
imgEl.height = 213;

imgEl.removeAttribute('height');
imgEl.removeAttribute('src');

console.log(imgEl.hasAttribute('alt'));
console.log(imgEl.hasAttribute('src'));
