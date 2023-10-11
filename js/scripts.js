const toggle = document.querySelector('.toggle');
const navList = document.querySelector('.navbar-nav');

toggle.addEventListener('click',() => {
    navList.classList.toggle('active');
});