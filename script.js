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


// Scroll Arrow Functionality
const scrollArrow = document.getElementById('scrollArrow');
let isScrollingDown = true;

// Show/hide the arrow based on scroll position
window.addEventListener('scroll', function() {
  // Show the arrow when scrolled a bit down
  if (window.scrollY >= 0) {
    scrollArrow.style.display = 'flex';
  } else {
    scrollArrow.style.display = 'none';
  }
  
  // Change arrow direction based on scroll position
  if (window.scrollY > (document.body.scrollHeight - window.innerHeight) / 2) {
    scrollArrow.classList.add('up');
    isScrollingDown = false;
  } else {
    scrollArrow.classList.remove('up');
    isScrollingDown = true;
  }
});

// Scroll up or down when arrow is clicked
scrollArrow.addEventListener('click', function() {
  if (isScrollingDown) {
    // Scroll down to middle of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    // Scroll back to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// Initially hide the arrow
scrollArrow.style.display = 'none';