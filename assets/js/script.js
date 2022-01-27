const burger = document.querySelector('.burger-bars');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.nav__link')

burger.addEventListener('click', () => {
  if (nav.classList.contains('show-nav')) {
    nav.classList.remove('show-nav');
  } else {
    nav.classList.add('show-nav');
  }
})

links.forEach(link => {
  link.addEventListener('click', () => 
    nav.classList.contains('show-nav') 
    ? nav.classList.remove('show-nav')
    : ''
)})