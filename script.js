//

//
document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript is loaded and ready!");

  
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

 
  const menuToggle = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar-collapse");
  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function() {
      navbarMenu.classList.toggle("show");
    });
  }

  // Contact form validation
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission for validation

      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const message = document.querySelector("#message");

      if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        return;
      }

      if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return;
      }

      if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
      }

      if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        return;
      }

      
      contactForm.submit();
    });
  }

  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
