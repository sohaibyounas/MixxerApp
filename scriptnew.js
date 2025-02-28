const navbar = document.querySelector('.navbar');
const navbarfit = navbar.PageYOffset;
window.addEventListener('scroll', () => {
  if(window.pageYOffset> navbarfit) {
    navbar.addEventListener('navabrfit');
  } else{
    navbar.removeEventListener('navbarfit');
  }
});;

// icon change

let menuIcon = document.querySelector(".fbar");
let navabr =  document.querySelector(".navbar");

menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
