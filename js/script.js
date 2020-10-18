'use srtict'
const winWidth = window.innerWidth;
const advItems = document.querySelectorAll('.advantages-item');
const servicesItem = document.querySelectorAll('.services-variaty-item');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay')
let menuBtn = document.getElementById('menuBtn');
let menuContainer = document.getElementById('menuContainer');
 
 
const burgerOpen = function() {
    menuBtn.classList.toggle('opened');
    mobileMenu.classList.toggle('mobile-menu-active');
    overlay.classList.toggle('overlay-active');
}

if(winWidth < 890){
    advItems[1].dataset.aos = "fade-left";
    advItems[2].dataset.aos = "fade-up";
}
if (winWidth <= 1140){
    servicesItem[1].dataset.aos = "fade-down-left";
    servicesItem[2].dataset.aos = "zoom-in";
}

menuBtn.addEventListener('click', burgerOpen);
overlay.addEventListener('click', burgerOpen);

AOS.init({
    disable: function () {
        let maxWidth = 730;
        return window.innerWidth < maxWidth;
    },
    duration : 800,
    once: true,
});