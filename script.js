// toggle bar icon
let menuIcon = document.querySelector(".fbar"); 
let navbar = document.querySelector('.navbar');

document.addEventListener("click", function (event) {
    if (menuIcon.contains(event.target)) {
        menuIcon.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    } 
});

//  navbar toggle/collapse
const nav = document.querySelector('.nav');
const sticky = nav.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset >sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});;


// navbar collapse

const navbarfit = navbar.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > navbarfit) {
  navbar.classList.add('navbarfit');
  } else {
  navbar.classList.remove('navbarfit');
  }
});;


// Form Validations
function handleSubmit(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset();
}



