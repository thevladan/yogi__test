// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__list'),
    hamburger = document.querySelector('.nav-toggle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

});