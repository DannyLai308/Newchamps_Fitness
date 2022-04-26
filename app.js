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

// Animation 
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero',{
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services',{
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 0,
    x: -150,
    stagger: 0.13
});

gsap.from('.animate-img',{
    scrollTrigger: '.animate-img',
    duration: 1.2,
    opacity: 0,
    x: -200,
    stagger: 0.13
});

gsap.from('.animate-membership',{
    scrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-card',{
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from('.animate-trainer',{
    scrollTrigger: '.animate-trainer',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.2,
    delay: 0.2
});

gsap.from('.animate-email',{
    scrollTrigger: '.animate-email',
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.6
});