const navbar = document.querySelector('.navbar');
const navbarfit = navbar.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > navbarfit) {
    navbar.classList.add('navbarfit');
  } else {
    navbar.classList.remove('navbarfit');
  }
});;

// change icon
let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}