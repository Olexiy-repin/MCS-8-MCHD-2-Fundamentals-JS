/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  innerChild: document.querySelector('.js-inner-child'),
};

refs.parent.addEventListener('click', event => {
  console.group('Parent <div>');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});

refs.child.addEventListener('click', event => {
  console.group('Child <div>');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});

refs.innerChild.addEventListener('click', event => {
  console.group('Inner child <div>');
  console.log('event.target:', event.target);
  console.log('event.currentTarget:', event.currentTarget);
  console.groupEnd();
});
