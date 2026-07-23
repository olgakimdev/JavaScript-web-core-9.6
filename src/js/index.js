import '../scss/style.scss'

/* здесь будут swiper, show-hidden, burger */

document.querySelectorAll('.mobile-swiper').forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true
    }
  })
})

/*кнопки бургера, меню*/

const leftMenu = document.querySelector('.left')
const burger = document.querySelector('.service-block .burger')
const menuClose = document.querySelector('.menu-close')

burger.addEventListener('click', () => {
  leftMenu.classList.add('left--open')
})

menuClose.addEventListener('click', () => {
  leftMenu.classList.remove('left--open')
})

/*кнопка читать далее*/

const button = document.querySelector('#clickbutton')
const hiddenText = document.querySelector('.text-hidden')

button.addEventListener('click', () => {
  hiddenText.classList.toggle('show')
})

/*БЛОК BRANDS - кнопка Показать все*/

const brands = document.querySelector('.brands')
/*querySelector() — ищет первый элемент по указанному CSS-селектору.
В переменной brands теперь хранится весь контейнер с карточками*/

const showBrandsButton = document.querySelector('#show-brands')
/*Теперь переменная showBrandsButton содержит именно эту кнопку*/

const cards = document.querySelectorAll('.brands .btn')
/* используется querySelectorAll - все подходящие элементы.
То есть получаем все кнопки внутри .brands.*/

function updateCards() {
  /*создаем функцию с именем updateCards. Она ничего не делает сама по себе.
Она выполнится только когда мы ее вызовем: updateCards()*/
  console.log('updateCards')

  // Если список раскрыт, показываем все карточки
  if (brands.classList.contains('show')) {
    cards.forEach((card) => card.classList.remove('hidden'))
    return
  }
  /* classList — список классов элемента.
  Если есть у элемента класс show - то выполняется cards.forEach(card => card.classList.remove('hidden'));*/

  let visibleCards = 8
  /*сколько карточек показывать*/

  // Планшет
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    visibleCards = 6
  }
  /*window.innerWidth - ширина браузера, если оба условия верны - то ...*/

  // ПК
  if (window.innerWidth >= 1120) {
    visibleCards = 8
  }

  cards.forEach((card, index) => {
    if (index < visibleCards) {
      card.classList.remove('hidden')
    } else {
      card.classList.add('hidden')
    }
  })
}

// Первоначальное скрытие карточек
updateCards()

// При изменении размера окна
window.addEventListener('resize', updateCards)

// Кнопка "Показать все"
showBrandsButton.addEventListener('click', () => {
  console.log('Кнопка нажата')
  brands.classList.toggle('show')

  if (brands.classList.contains('show')) {
    showBrandsButton.innerHTML = `
      <img src="img/expand.svg" alt="down">
      Скрыть
    `
  } else {
    showBrandsButton.innerHTML = `
      <img src="img/expand.svg" alt="down">
      Показать все
    `
  }

  updateCards()
})


/*БЛОК DEVICES - кнопка Показать все*/

const types = document.querySelector('.type');
const showDevicesButton = document.querySelector('#show-devices-btn');
const typeCards = document.querySelectorAll('.type .btn');

function updateTypes() {
  if (types.classList.contains('show')) {
    typeCards.forEach(card => card.classList.remove('hidden'));
    return;
  }

  let visibleCards = 4;

  // Планшет
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    visibleCards = 3;
  }

  typeCards.forEach((card, index) => {
    if (index < visibleCards) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

updateTypes();

window.addEventListener('resize', updateTypes);

showDevicesButton.addEventListener('click', () => {
  types.classList.toggle('show');

  if (types.classList.contains('show')) {
    showDevicesButton.innerHTML = `
      <img src="img/expand.svg" alt="down">
      Скрыть
    `;
  } else {
    showDevicesButton.innerHTML = `
      <img src="img/expand.svg" alt="down">
      Показать все
    `;
  }

  updateTypes();
});