const navLinks = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});


