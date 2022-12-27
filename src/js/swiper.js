const swiper = new Swiper('.swiper', {
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.8,
      spaceBetween: 24
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20
    }
  }
})

const btn = document.querySelector('.swiper__all>span')
const container = document.querySelector('.swiper__container')

btn.addEventListener('click', btnClick)

function btnClick() {
  container.classList.toggle('swiper-open')
  if (container.classList.contains('swiper-open')) {
    btn.textContent = 'Скрыть'
  } else {
    btn.textContent = 'Показать все'
  }
}
