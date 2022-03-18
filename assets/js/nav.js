const burger = document.querySelector('.burger-bars');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.nav__link');
const links_text = document.querySelectorAll('.links');

burger.addEventListener('click', () => {
	if (nav.classList.contains('show-nav')) {
		nav.classList.remove('show-nav');
	} else {
		nav.classList.add('show-nav');
	}
});

links.forEach((link) => {
	link.addEventListener('click', () =>
		nav.classList.contains('show-nav') ? nav.classList.remove('show-nav') : ''
	);
	link.addEventListener('mouseover', () => {
		const textWidth = link.childNodes[1].offsetWidth;
		link.style.width = 100 + textWidth + 'px';
	});

	link.addEventListener('mouseleave', () => {
		const textWidth = link.childNodes[1].offsetWidth;
		link.style.width = 70 + 'px';
	});
});