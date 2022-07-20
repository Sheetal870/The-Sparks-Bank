burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
button = document.querySelector('.button')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
button.classList.toggle('v-class');
navList.classList.toggle('v-class');
navbar.classList.toggle('h-nav');


})