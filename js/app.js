'use strict';
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
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const virtualFrag = document.createDocumentFragment();
sections.forEach(function (section) {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');
  listLink.href = '#' + section.getAttribute('id');
  listLink.innerHTML = section.getAttribute('data-nav');
  listLink.classList.add('menu__link');
  listItem.appendChild(listLink);
  virtualFrag.appendChild(listItem);
});
console.log(virtualFrag);
nav.appendChild(virtualFrag);
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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
