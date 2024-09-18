const navHamburgerIcon = document.querySelector('.nav__hamburgerIcon');
const navHamburger = document.querySelector('.nav__hamburger');

navHamburgerIcon.addEventListener('click', ()=>{

    navHamburgerIcon.classList.toggle('bg-close');
    navHamburger.classList.toggle('hidden');

});