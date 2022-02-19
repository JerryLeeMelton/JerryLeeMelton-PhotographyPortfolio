const hamburgerButton = document.getElementsByClassName("hamburger-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

hamburgerButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
