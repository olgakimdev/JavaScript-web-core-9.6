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
    });
  });


  /*кнопки бургера, меню*/

  const leftMenu = document.querySelector('.left');
  const burger = document.querySelector('.service-block .burger');
  const menuClose = document.querySelector('.menu-close');

  burger.addEventListener('click', () => {
    leftMenu.classList.add('left--open');
  });

  menuClose.addEventListener('click', () => {
    leftMenu.classList.remove('left--open');
  });


/*кнопка читать далее, показать все*/

const clickbutton = document.querySelector('#clickbutton');

clickbutton.addEventListener('click', () => {
  alert('button was clicked');
});