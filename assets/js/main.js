const menuIcon = document.querySelector('.hamburger-icon');
const navbar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});