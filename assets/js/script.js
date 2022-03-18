// NE PAS SUPPRIMER
// Selection de l'icone du lien
// link.childNodes[1].style.color;

// Selection du texte du lien
// link.childNodes[3].style.color;

const slider = document.querySelector('.slider-container'),
	slides = Array.from(document.querySelectorAll('.card--desktop')),
	dots = document.querySelector('.dots'),
	chevrons = document.querySelectorAll('.chevron'),
	[leftChevron, rightChevron] = chevrons;

let isDragging = false,
	startPosition = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID,
	currentIndex = 0;

	leftChevron.addEventListener('click', () => {
		currentIndex === 0 ? currentIndex = slides.length -1 : currentIndex -=1;
		setPositionByIndex();
	})
	rightChevron.addEventListener('click', () => {
		currentIndex === slides.length - 1 ? currentIndex = 0 : currentIndex += 1;
		setPositionByIndex();
	})

slides.forEach((slide, index) => {
	const slideImage = slide.querySelector('img');
	// disable default image drag
	slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	// Touch events
	slide.addEventListener('touchstart', touchStart(index));
	slide.addEventListener('touchend', touchEnd);
	slide.addEventListener('touchmove', touchMove);

	// Mouse events
	slide.addEventListener('mousedown', touchStart(index));
	slide.addEventListener('mouseup', touchEnd);
	slide.addEventListener('mouseleave', touchEnd);
	slide.addEventListener('mousemove', touchMove);

	let dot = document.createElement('li');
	dot.classList.add('dot');
	dots.append(dot);
});

dots.children[0].classList.add('dot--active');

for(let i = 0; i<dots.children.length; i ++) {
	dots.children[i].addEventListener('click', () => {
			currentIndex = i;
			setPositionByIndex();
	})
}

// prevent menu popup on long press
/* window.oncontextmenu = function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
}; */

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex);

function touchStart(index) {
	return function (event) {
		currentIndex = index;
		startPosition = getPositionX(event);
		isDragging = true;
		animationID = requestAnimationFrame(animation);
		slider.classList.add('grabbing');
	};
}

function touchEnd() {
	cancelAnimationFrame(animationID);
	isDragging = false;
	const movedBy = currentTranslate - prevTranslate;

	if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

	if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

	setPositionByIndex();

	slider.classList.remove('grabbing');
}

function touchMove(event) {
	if (isDragging) {
		const currentPosition = getPositionX(event);
		currentTranslate = prevTranslate + currentPosition - startPosition;
	}
}

function getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
	setSliderPosition();
	if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
	
	slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
	for (let i = 0; i<dots.children.length; i++)
	 dots.children[i].classList.remove('dot--active');

	dots.children[currentIndex].classList.add('dot--active');

	currentTranslate = currentIndex * -window.innerWidth;
	prevTranslate = currentTranslate;
	setSliderPosition();
}

