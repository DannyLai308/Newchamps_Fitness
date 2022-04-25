const toggle_menu = document.querySelector('#toggle-menu');
const menu_links = document.querySelector('.navbar_menu');
const navbar_logo = document.querySelector('.navbar_logo');
const body = document.querySelector('body');

// Display toggle mennu
const toggleMenu = () => {
    toggle_menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
    body.classList.toggle('active');
}

toggle_menu.addEventListener('click', toggleMenu);
