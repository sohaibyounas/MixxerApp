//  Form Validations
      function handleSubmit(event) {
          event.preventDefault();
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
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

    // change icon
let changeIcon = function(icon) {
  icon.classList.toggle('fa-times')
}
