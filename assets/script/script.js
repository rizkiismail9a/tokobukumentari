const hamburgerBtn = document.getElementById("hamburger-btn");
const navbarList = document.querySelector(".navbar__list");
const popUp = document.getElementById("popUp");
const popUpClose = document.getElementById("popUpClose");
const subTotal = document.getElementById("sub-total");
const buyAmount = document.getElementById("amount-input");
let subNumber = document.getElementById("subtotalNumber");
hamburgerBtn.addEventListener("click", () => {
  navbarList.classList.toggle("hamburger-toggle");
});
const showDetail = () => {
  document.querySelector(".popUp").style.top = "0";
};

const closeDetail = () => {
  document.querySelector(".popUp").style.top = "-2000px";
};

buyAmount.addEventListener("change", () => {
  let buyValue = buyAmount.value;
  let price = 98000;
  subNumber.innerHTML = price * buyValue;
});
