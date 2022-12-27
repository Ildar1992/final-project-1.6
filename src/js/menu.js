const aside = document.querySelector('.aside')
const btn = document.querySelector('.header__button')
const asideClose = document.querySelector('.aside__button-close')
const blur = document.querySelector('.blur')
const btnMes = document.querySelector('.aside__message')
const feedback = document.querySelector('.feedBack')
const feedClose = document.querySelector('.feedBack__closer')
const feedSecClose = document.querySelector('.feedBack__close')
const btnCall = document.querySelector('.aside__call')
const callback = document.querySelector('.callBack')
const callClose = document.querySelector('.callBack__close')
const callSecClose = document.querySelector('.callBack__closer')

btn.addEventListener('click', () => {
  aside.classList.add('header-open')
  blur.classList.add('blur-block')
})

asideClose.addEventListener('click', () => {
  aside.classList.remove('header-open')
  blur.classList.remove('blur-block')
  blur.classList.add('blur-none')
})

blur.addEventListener('click', () => {
  aside.classList.remove('header-open')
  blur.classList.remove('blur-block')
  blur.classList.add('blur-none')
  feedback.classList.remove('feedBack__open')
})

btnMes.addEventListener('click', () => {
  feedback.classList.add('feedBack__open')
  aside.classList.remove('header-open')
})

feedClose.addEventListener('click', () => {
  feedback.classList.remove('feedBack__open')
  blur.classList.remove('blur-block')
})
feedSecClose.addEventListener('click', () => {
  feedback.classList.remove('feedBack__open')
  blur.classList.remove('blur-block')
})

btnCall.addEventListener('click', () => {
  callback.classList.add('callBack__open')
  aside.classList.remove('header-open')
})
callClose.addEventListener('click', () => {
  callback.classList.remove('callBack__open')
  blur.classList.remove('blur-block')
})
callSecClose.addEventListener('click', () => {
  callback.classList.remove('callBack__open')
  blur.classList.remove('blur-block')
})
