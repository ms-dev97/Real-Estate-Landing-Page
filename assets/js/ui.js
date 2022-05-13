// Responsive Mobile Menu
const menuBtn = document.querySelector('.menu-btn'),
      navMenu = document.querySelector('.header--nav');

menuBtn.addEventListener('pointerdown', () => {
    navMenu.classList.toggle('toggle');
})