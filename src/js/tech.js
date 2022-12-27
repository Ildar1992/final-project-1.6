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

const btn = document.querySelectorAll('.swiper__all>span')

const container = document.querySelector('.tech__container')

btn[1].addEventListener('click', btnClick)

function btnClick() {
  container.classList.toggle('tech-open')
  if (container.classList.contains('tech-open')) {
    btn[1].textContent = 'Скрыть'
  } else {
    btn[1].textContent = 'Показать все'
  }
}
