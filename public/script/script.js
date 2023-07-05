const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarList = document.querySelector(".navbar__list");

hamburgerBtn.addEventListener("click", () => {
  navbarList.classList.toggle("hamburger-toggle");
});
