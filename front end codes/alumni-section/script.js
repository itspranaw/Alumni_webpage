const navLinks = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});


let count = 0;
let btn = document.querySelectorAll(".fa-solid");

let boxElement = document.querySelectorAll(".box");
btn[1].onclick = function next()
{
  if(count<4)
    {
     for(let i=0;i<boxElement.length;i++)
    {
       boxElement[count].style.background= "lightgray";
    }
  count++;
  boxElement[count].style.background = "yellow"; 
    }
};
btn[0].onclick = function next()
{
  if(count>0)
    {
     for(let i=0;i<boxElement.length;i++)
    {
       boxElement[count].style.background= "lightgray"
    }
  count--;
  boxElement[count].style.background = "yellow"; 
    }
};