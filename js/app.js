// 'use strict';
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const virtualFrag = document.createDocumentFragment();
const navLinks = document.querySelectorAll('menu__link');
const topBtn = document.getElementById('to__top');

sections.forEach(section => {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');
  listLink.href = '#' + section.getAttribute('id');
  listLink.textContent = section.getAttribute('data-nav');
  listLink.classList.add('menu__link');
  listLink.addEventListener('click', e => {
    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
  listItem.appendChild(listLink);
  virtualFrag.appendChild(listItem);
});
nav.appendChild(virtualFrag);
//prevent default action when nav links clicked
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    preventDefault();
  });
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const boundingBox = sec.getBoundingClientRect();
    if (boundingBox.top >= 0 && boundingBox.top < 500) {
      const activeSecDataNav = sec.getAttribute('data-nav');
      sections.forEach(activeSection => {
        activeSection.classList.remove('active__section');
      });
      sec.classList.add('active__section');
      const allLinks = document.querySelectorAll('a');
      allLinks.forEach(link => {
        if (link.textContent == activeSecDataNav) {
          allLinks.forEach(activeLink => {
            activeLink.classList.remove('active');
          });
          link.classList.add('active');
        }
      });
    }
  });
});
// Scroll to anchor ID using scrollTO event
const goToTop = document
  .getElementsByTagName('section')[0]
  .getBoundingClientRect().top;
console.log(goToTop);
topBtn.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo(0, 1000);
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
