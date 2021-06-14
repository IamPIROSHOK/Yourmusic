const FormShowButton = document.querySelector('.contactUs');
const FormCloseButton = document.querySelector('.form__close');
const FormConfirmButton = document.querySelector('.form__confirm');

const form_outer = document.querySelector('.communication');
const form = document.querySelector('.communication__form');

form_outer.style = 'transition: opacity .5s ease;';

FormShowButton.addEventListener('click', function (event) {
  event.preventDefault();
  form_outer.classList.add('active');
  disableScroll();
})

FormCloseButton.addEventListener('click', function (event) {
  event.preventDefault();
  form_outer.classList.remove('active');
  enableScroll();
})

FormConfirmButton.addEventListener('click', function (event) {
  event.preventDefault();

  let name = form.name.value,
    mail = form.mail.value,
    text = form.text.value;

  let mail_reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  let errors = '';

  console.log(mail_reg.test(mail));

  if (name.length < 1)
    errors += 'Длина имени слишком маленькая.\n'
  if (name.length > 30)
    errors += 'Длина имени не может быть больше 30 символов.\n'
  if (!mail_reg.test(mail))
    errors += 'Проверьте правильность вашей почты.\n'
  if (text.length < 5)
    errors += 'Ваше сообщение слишком короткое\n'

  if (!errors.length) {
    alert('Отправлено!');
    form_outer.classList.remove('active');
    enableScroll();
  }
  else {
    alert(errors);
  }
})

//Блокировка скролла
var scrollTop, scrollLeft;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function () { };
}