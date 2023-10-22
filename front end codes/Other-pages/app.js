


let slide1=document.querySelector('#slide1');

let variable=-1400;
let flag=1;
slide1.style.marginLeft=`${variable}px`;

console.log(`variable = ${variable}`);
function showNextSlide(){
    if(variable>=1450)  
        variable=-1450;
    
    else
    {
        variable=variable+1450;
    }

    
    
        slide1.style.marginLeft=`${variable}px`;
    
    

    console.log(`variable = ${variable}`);
}
setInterval(showNextSlide,3000);
