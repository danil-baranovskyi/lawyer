const winWidth = window.innerWidth;
const advItems = document.querySelectorAll('.advantages-item');
const servicesItem = document.querySelectorAll('.services-variaty-item');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay')
const menuBtn = document.getElementById('menuBtn');
const menuContainer = document.getElementById('menuContainer');
const mainNavList = document.querySelectorAll('.scroll-item');
const mobileNavList = document.querySelectorAll('.scroll-item-mob');

const aboutMe = document.querySelector('.about-me');
const services = document.querySelector('.services');
const news = document.querySelector('.news');
const contacts = document.querySelector('.form');
const main = document.querySelector('.more');

const scrollToItems =[
    main,
    aboutMe,
    services,
    news,
    contacts,
]

const scrollTo = (el) =>{
    el.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}

const burgerOpen = function() {
    menuBtn.classList.toggle('opened');
    mobileMenu.classList.toggle('mobile-menu-active');
    overlay.classList.toggle('overlay-active');
}
for (let i = 0; i < scrollToItems.length; i++){
    mainNavList[i].addEventListener('click', () => {
        scrollTo(scrollToItems[i])
    })
}
for (let i = 0; i < scrollToItems.length; i++){
    mobileNavList[i].addEventListener('click', () => {
        scrollTo(scrollToItems[i]);
    });
}
menuBtn.addEventListener('click', burgerOpen);
overlay.addEventListener('click', burgerOpen);

if(winWidth < 890){
    advItems[1].dataset.aos = "fade-left";
    advItems[2].dataset.aos = "fade-up";
}
if (winWidth <= 1140){
    servicesItem[1].dataset.aos = "fade-down-left";
    servicesItem[2].dataset.aos = "zoom-in";
}
AOS.init({
    disable: function () {
        let maxWidth = 730;
        return window.innerWidth < maxWidth;
    },
    duration : 800,
    once: true,
});