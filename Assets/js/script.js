
// burger Menu 
const burgerMenu = document.querySelector('.Menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

// chargement du Dom
const loader = document.getElementById('preloader')
window.addEventListener('load', () =>{
    loader.classList.add('loader-hidden')
})

window.addEventListener('DOMContentLoaded', ()=>{
    loader.classList.remove('loader-hidden')
})