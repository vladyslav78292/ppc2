'use strict';

const feedback = document.querySelector('.feedback__slider');
const feedback_offset = 300;

function feedbackUpdateHeight(height) {
  if (!height) return false;
  feedback.style.height = `${height + feedback_offset}px`;
}

if (feedback) {
  feedbackUpdateHeight(feedback.querySelector('.feedback__item').offsetHeight);

  const feedback_slider = new Swiper(feedback, {
    direction: 'vertical',
    slidesPerView: 'auto',
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  feedback_slider.on('slideChange', () => {
    setTimeout(() => {
      feedbackUpdateHeight(feedback_slider.slides[feedback_slider.activeIndex].offsetHeight);
    }, 300);
  });
}

let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight


const add_class_on_scroll = () => header.classList.add("header__background");
const remove_class_on_scroll = () => header.classList.remove("header__background");


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})

const cookie_button = document.querySelectorAll('.cookie-popup__button');
const cookie_popup = document.getElementById('cookie-popup');

cookie_button.forEach((element) => {
  element.addEventListener('click', () => {
    cookie_popup.style = "bottom: -220px";
  })
})

setTimeout(() => {
  document.querySelector('#cookie-popup').style = 'bottom: 30px; opacity: 1;';
}, 1000);


const tl = gsap.timeline();
tl.from([".logo, .menu-items a, .lang"], {
  duration: 1,
  opacity: 0,
  y: 40,
  stagger: { amount: 0.4 }
})
  .from(
    ".header__container--second h1",
    { opacity: 0, duration: 1, y: 100, skewY: 10, stagger: { amount: 0.4 } },
    "-=1"
  )
  .from(
    [".header__paragraph-container, .header__paragraph"],
    { opacity: 0, duration: 1, y: 100, stagger: { amount: 0.4 } },
    "-=1"
  )
  .from(".right-ctr", { duration: 1, x: 500, skewX: 50 }, "-=1");
