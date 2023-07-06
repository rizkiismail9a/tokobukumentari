const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarList = document.querySelector(".navbar__list");
const popUp = document.getElementById("popUp");
const popUpClose = document.getElementById("popUpClose");

hamburgerBtn.addEventListener("click", () => {
  navbarList.classList.toggle("hamburger-toggle");
});
const showDetail = () => {
  document.querySelector(".popUp").style.top = "0";
};

const closeDetail = () => {
  document.querySelector(".popUp").style.top = "-1000px";
};
