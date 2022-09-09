//products slider starts here
const slider= document.querySelector('.allproduct2');
const carousel= document.querySelector('.allproductdiv');



const prev=document.querySelector('.pre-btn');
const next=document.querySelector('.nxt-btn');
let direction;

next.addEventListener('click',function(){
    slider.appendChild(slider.firstElementChild);
    slider.style.transform='translate(-25%)';
    
   direction = -1;
  carousel.style.justifyContent = 'flex-start';

    

    
});
prev.addEventListener('click', function() {
  
    slider.appendChild(slider.firstElementChild);
  direction=1;
   
  slider.style.transform = 'translate(25%)';  
 
  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
 // if (direction === 1) {
    //slider.prepend(slider.lastElementChild);
  //} else {
    //slider.appendChild(slider.firstElementChild);
  //}
  
  slider.style.transition = 'none';
  //slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.8s';
  })
}, false);




//// top slider////////

function Show1(){
    document.getElementById('slide1').style.display= "block";
    document.getElementById('slide2').style.display= "block";
    document.getElementById('slide3').style.display= "none";
    



}
function Show2(){
    document.getElementById('slide1').style.display= "none";
    document.getElementById('slide2').style.display= "block";
    document.getElementById('slide3').style.display= "none";
    



}
function Show3(){
    document.getElementById('slide1').style.display= "none";
    document.getElementById('slide2').style.display= "none";
    document.getElementById('slide3').style.display= "block";
    



}
//heart icon click
function openmenu(){
   document.getElementById('heartdrop').style.display= "block";
    
  
}
function closemenu(){
    document.getElementById('heartdrop').style.display= "none";
     
   
 }

 //cart icon click
 function opencart(){
    document.getElementById('heartdrop').style.display= "block";
     
   
 }
 function closecart(){
     document.getElementById('cartdrop').style.display= "none";
      
    
  }
