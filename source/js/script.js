const promoForm = document.querySelector('.promo__form');
const stepsForm = document.querySelector('.steps__form');
const stepsSubmitButton = stepsForm.querySelector('.form__button');
const stepsPopup = document.querySelector('.steps__popup');
const stepsClose = stepsPopup.querySelector('.steps__close');

const pristine = new Pristine(promoForm, {
  classTo: 'form__label',
  errorClass: 'form__label--invalid',
  successClass: 'form__label-valid',

  errorTextParent: 'form__label',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

promoForm.addEventListener('submit', e => {
  e.preventDefault();
  const valid = pristine.validate();

  if (valid) {
    stepsPopup.classList.add('steps__popup--active');
  }
});

stepsForm.addEventListener('submit', e => {
  e.preventDefault();
  stepsPopup.classList.add('steps__popup--active');
});

stepsClose.addEventListener('click', () => {
  stepsPopup.classList.remove('steps__popup--active');
});
