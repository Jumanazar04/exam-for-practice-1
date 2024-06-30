const navbar = document.querySelector('.navbar-1')
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', (e) =>{
    e.preventDefault();

    navbar.classList.add('active-menu');
})

closeBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    navbar.classList.remove('active-menu');
})