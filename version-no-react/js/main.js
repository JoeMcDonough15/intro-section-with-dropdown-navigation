const blurContainer = document.getElementById("blur");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const navExpansionArrowOne = document.getElementById("nav-expansion-arrow-one");
const navExpansionArrowTwo = document.getElementById("nav-expansion-arrow-two");
const navExpansionOne = document.getElementById("nav-expansion-one");
const navExpansionTwo = document.getElementById("nav-expansion-two");

openModal.addEventListener("click", () => {
  modal.classList.add("nav-menu-appear");
  openModal.classList.add("hide");
  blurContainer.classList.add("blur");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("nav-menu-appear");
  openModal.classList.remove("hide");
  blurContainer.classList.remove("blur");
});

navExpansionArrowOne.addEventListener("click", () => {
  if (
    navExpansionArrowOne.getAttribute("src") === "images/icon-arrow-down.svg"
  ) {
    navExpansionArrowOne.setAttribute("src", "images/icon-arrow-up.svg");
    navExpansionArrowOne.setAttribute("alt", "clickable arrow pointing up");
  } else if (
    navExpansionArrowOne.getAttribute("src") === "images/icon-arrow-up.svg"
  ) {
    navExpansionArrowOne.setAttribute("src", "images/icon-arrow-down.svg");
    navExpansionArrowOne.setAttribute("alt", "clickable arrow pointing down");
  }
  navExpansionOne.classList.toggle("hide");
});

navExpansionArrowTwo.addEventListener("click", () => {
  if (
    navExpansionArrowTwo.getAttribute("src") === "images/icon-arrow-down.svg"
  ) {
    navExpansionArrowTwo.setAttribute("src", "images/icon-arrow-up.svg");
    navExpansionArrowTwo.setAttribute("alt", "clickable arrow pointing up");
  } else if (
    navExpansionArrowTwo.getAttribute("src") === "images/icon-arrow-up.svg"
  ) {
    navExpansionArrowTwo.setAttribute("src", "images/icon-arrow-down.svg");
    navExpansionArrowTwo.setAttribute("alt", "clickable arrow pointing down");
  }
  navExpansionTwo.classList.toggle("hide");
});
