// 'use strict';
/**
 * Define Global Variables
 *
 */
const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const virtualFrag = document.createDocumentFragment();
const navLinks = document.querySelectorAll('menu__link');
const topBtn = document.getElementById('to__top');
const goToTop = document.getElementById('top').getBoundingClientRect().top;
const burgerBtn = document.getElementsByClassName('burgerBtn')[0];
const navBar = document.getElementsByClassName('navbar__menu')[0];
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
burgerBtn.addEventListener('click', evt => {
  evt.preventDefault();
  navBar.classList.toggle('active');
  // alert('lol');
});
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach(section => {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');
  listLink.href = '#' + section.getAttribute('id');
  listLink.textContent = section.getAttribute('data-nav');
  listLink.classList.add('menu__link');
  listLink.addEventListener('click', e => {
    e.preventDefault();
    navBar.classList.toggle('active');
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
  if (window.scrollY >= 500) {
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
  }
  console.log(window.scrollY);
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
topBtn.addEventListener('click', event => {
  event.preventDefault();
  // window.scrollTo(0, 1000);
  window.scrollTo({ top: goToTop, left: 0, behavior: 'smooth' });
});
/**
 * End Main Functions
 * Begin Events
 *
 */
