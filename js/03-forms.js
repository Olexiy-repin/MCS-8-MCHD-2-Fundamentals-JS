/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
TODO: Оброби форму та збережи відгук користувача в об'єкт
*/

const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

refs.feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    [refs.feedbackForm.elements.username.name]: refs.feedbackForm.elements.username.value.trim(),
    [refs.feedbackForm.elements.email.name]: refs.feedbackForm.elements.email.value.trim(),
    [refs.feedbackForm.elements.comment.name]: refs.feedbackForm.elements.comment.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('All form fields must be filled in!');

    return;
  }

  console.log(formData);

  refs.feedbackForm.reset();
});
