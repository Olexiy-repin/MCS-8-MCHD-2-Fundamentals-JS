/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`code: ${event.code}, key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keydown', event => {
//   if (event.code === 'KeyF' && (event.ctrlKey || event.metaKey)) {
//     event.preventDefault();

//     console.log('Ctr + F | Command + F pressed!');
//   }
// });
