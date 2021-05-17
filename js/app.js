let hamburger = document.getElementById('menu');
let list = document.querySelector('header nav')
let close = document.querySelector('.close');




hamburger.addEventListener('click', function(){
    list.classList.toggle('active');
})


close.addEventListener('click', function(){
    list.classList.remove('active')
})