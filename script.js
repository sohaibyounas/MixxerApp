// change icon
let changeIcon = function(icon) {
  icon.classList.toggle('fa-times')
}

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

const navbar = document.querySelector('.navbar');
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



