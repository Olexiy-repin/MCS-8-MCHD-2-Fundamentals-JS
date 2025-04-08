/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const harryPotterTitle = 'Harry Potter';
// const harryPotterRating = 10;
// const harryPotterDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ut.';

// const harryPotterInfo = ['Harry Potter', 10, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ut.'];

const harryPotterFilm = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ut.',
  rating: 10,
  actors: ['Devin Guzman', 'Walter Rowe', 'Jeanette Gill'],
  translations: {
    en: 'https://harry-potter-film/en',
    ua: 'https://harry-potter-film/ua',
  },
};

console.log(harryPotterFilm);

// console.log(harryPotterFilm.rating);
// console.log(harryPotterFilm.description);

// console.log(harryPotterFilm['title']);
// console.log(harryPotterFilm['actors']);

// const objKey = 'title';

// console.log(harryPotterFilm.objKey);

// console.log(harryPotterFilm[objKey]);

// harryPotterFilm.rating = 9;
// harryPotterFilm.title = 'Harry Potter';

// console.log(harryPotterFilm);

// console.log(harryPotterFilm.translations.ua);
// console.log(harryPotterFilm.translations.en);

// harryPotterFilm.actors.push('Mittie Bates');

// console.log(harryPotterFilm);
