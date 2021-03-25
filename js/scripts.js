(function () {
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: false,
    responsive: [{
      breakpoint: 1366,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        variableWidth: true,
      }
    }]

  });

  $('.hall-slider').slick({

    infinite: false,
    dots: true,
    draggable: false,

    responsive: [{
      breakpoint: 1366,
      settings: {
        dots: false,

      }
    }]


  });
}())


const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const burgerIcon = document.querySelector('.burger__icon')
const burgerIconClose = document.querySelector('.burger__icon--close');
const navWrapper = document.querySelector('.nav__wrapper--border');

burger.addEventListener('click', function () {
  nav.classList.toggle('nav--show');
  burgerIcon.classList.toggle('burger-icon--show');
  burgerIconClose.classList.toggle('burger-icon--show');
});


const navItem = document.querySelectorAll('.nav__item__pop-up');

navItem.forEach((item) => {
  const navPopUpList = item.querySelector('.nav__pop-up__list');
  const navLink = item.querySelector('.nav__link');

  navLink.addEventListener('click', function (evt) {
    if (document.body.clientWidth < 1366) {
      evt.preventDefault();
    }
    navLink.classList.toggle('nav__link--current');
    navPopUpList.classList.toggle('nav__pop-up--show');
    item.classList.toggle('nav__list--show');
  });
});


const themeButton = document.querySelector('.theme-btn');
const pageBody = document.querySelector('.page__body');
themeButton.addEventListener('click', function () {
  pageBody.classList.toggle('dark-theme')
  if (pageBody.classList.contains('dark-theme')) {
    themeButton.classList.add('theme-btn--light')
    themeButton.classList.remove('theme-btn--night')
  } else {
    themeButton.classList.remove('theme-btn--light')
    themeButton.classList.add('theme-btn--night')
  }
});

const phoneBtn = document.querySelector('.phone__pop-up__button');
const phoneList = document.querySelector('.phone__pop-up__list');
phoneBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  phoneList.classList.toggle('pop-up--show');


});



const menuMobileBtn = document.querySelector('.menu__mobile-btn');
const menuList = document.querySelector('.menu__list');

if (menuMobileBtn !== null){
menuMobileBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuList.classList.toggle('menu__list--active');
});
};


// console.log()
const eventBlock = document.querySelectorAll('.events__description');
eventBlock.forEach((item) => {
  const eventText = item.querySelector('.events__text');
  const eventMoreBtn = item.querySelector('.events__more');

  eventMoreBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    item.classList.toggle('events__description--active');
    eventText.classList.toggle('events__text--active');
    eventMoreBtn.classList.toggle('events__more--active');
  });
});


window.onscroll = function () {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let header = document.querySelector('.header');
  if (scroll > 0) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }

  let contentPosition = document.querySelectorAll('[data-position]');
  let menuItem = document.querySelectorAll('.menu__btn');
  contentPosition.forEach((item) => {
    if (scroll > item.offsetTop - 500) {
      menuItem.forEach((menuBtn) => {
        if (menuBtn.dataset.menu == item.id) {
          menuBtn.classList.add('menu__btn--current');
        } else {
          menuBtn.classList.remove('menu__btn--current');
        }
      });
    }
  });
};

