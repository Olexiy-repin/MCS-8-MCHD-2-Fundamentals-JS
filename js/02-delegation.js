/*
 * Додавання прослуховувача подій на кожен елемент
 */

//TODO: Отримай колір квадратика по якому було здійснено клік

// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// console.log(refs);

// refs.boxes.forEach(boxEl => {
//   boxEl.addEventListener('click', event => {
//     const currentBoxEl = event.target;

//     console.log(currentBoxEl.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//TODO: Отримай колір квадратика по якому було здійснено клік

const refs = {
  container: document.querySelector('.js-container'),
};

refs.container.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentBoxEl = event.target;

  console.log(currentBoxEl.dataset.color);
});
