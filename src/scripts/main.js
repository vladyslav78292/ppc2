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
