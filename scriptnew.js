const navbar = document.querySelector('.navbar');
const navbarfit = navbar.PageYOffset;
window.addEventListener('scroll', () => {
  if(window.pageYOffset> navbarfit) {
    navbar.addEventListener('navabrfit');
  } else{
    navbar.removeEventListener('navbarfit');
  }
});;

//  navbar toggling/collapse
const nav = document.querySelector('.nav');
const sticky = nav.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset >sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});;


// icon change

let menuIcon = document.querySelector(".fbar");
let navabr =  document.querySelector(".navbar");

menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
