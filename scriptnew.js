const navbar = document.querySelector('.navbar');
const navbarfit = navbar.PageYOffset;
window.addEventListener('scroll', () => {
  if(window.pageYOffset> navbarfit) {
    navbar.addEventListener('navabrfit');
  } else{
    navbar.removeEventListener('navbarfit');
  }
});;


// change icon
let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}