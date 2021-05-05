# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: https://www.frontendmentor.io/solutions/landing-page-using-sass-css-grid-flexbox-and-javascript-GmOIYVqUk
- Live Site URL: https://jhoellopeyemi.github.io/blogr-landing-page/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- JavaScript

### What I learned

I learned how to change images based on different screen sizes and also with the click event using javascript

```js
const hamburger = document.querySelector('.hamburger');
const hamburgerImg = document.querySelector('.hamburger img');

hamburger.addEventListener('click', openNav);

function openNav() {
	mobileNav.classList.toggle('active');
	hamburger.classList.toggle('active');

	if (hamburgerImg.getAttribute('src') === './images/icon-hamburger.svg') {
		hamburgerImg.src = './images/icon-close.svg';
	} else {
		hamburgerImg.src = './images/icon-hamburger.svg';
	}
}
```

### Useful resources

Stack Overflow

## Author

- Frontend Mentor - [@JhoellOpeyemi](https://www.frontendmentor.io/profile/JhoellOpeyemi)
- Twitter - [@iam_jhoell](https://www.twitter.com/iam_jhoell)
