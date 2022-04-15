const services = Array.from(document.querySelectorAll('.mobile__single'));


services.forEach(service => {
  let chevron = service.children[0].children[1];
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('single__icon--active');
    service.children[1].children[1].classList.toggle('single__content--active');
  });
});