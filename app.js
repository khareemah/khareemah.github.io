const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", function() {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
});
