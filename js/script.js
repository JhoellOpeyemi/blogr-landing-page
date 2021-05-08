const dropdowns = document.querySelector('.dropdowns');
const accountCta = document.querySelector('.accounts-cta');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');

// Create mobile nav div and add a class to it
const mobileNav = document.createElement('div');

// Tablets and mobiles
if (window.matchMedia('(max-device-width: 776px)').matches) {
	// Get images
	const dropdownArrows = document.querySelectorAll('.arrow');
	const editorImg = document.querySelector('img.editor');
	const laptopImg = document.querySelector('img.laptop');

	// Add a class to mobile nav
	mobileNav.classList.add('mobile-nav');

	// Append dropdowns and accountCtas to mobile nav
	mobileNav.appendChild(dropdowns);
	mobileNav.appendChild(accountCta);

	// Append mobile nav to nav
	body.appendChild(mobileNav);

	// Change images
	editorImg.src = './images/illustration-editor-mobile.svg';
	laptopImg.src = './images/illustration-laptop-mobile.svg';
}

// Event Listeners
hamburger.addEventListener('click', openNav);

// Functions
function openNav() {
	mobileNav.classList.toggle('active');
	hamburger.classList.toggle('active');

	if (hamburgerImg.getAttribute('src') === './images/icon-hamburger.svg') {
		hamburgerImg.src = './images/icon-close.svg';
	} else {
		hamburgerImg.src = './images/icon-hamburger.svg';
	}
}
