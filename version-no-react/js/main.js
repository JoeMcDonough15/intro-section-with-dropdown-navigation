const cardContainer = document.getElementById("card-container");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const navExpansionArrowOne = document.getElementById("nav-expansion-arrow-one");
const navExpansionArrowTwo = document.getElementById("nav-expansion-arrow-two");
const navExpansionOne = document.getElementById("nav-expansion-one");
const navExpansionTwo = document.getElementById("nav-expansion-two");

openModal.addEventListener("click", () => {
  modal.classList.remove("hide");
  openModal.classList.add("hide");
  cardContainer.classList.add("blur");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hide");
  openModal.classList.remove("hide");
  cardContainer.classList.remove("blur");
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

///////  Media Queries //////

// const largeScreen = window.matchMedia("(min-width: 900px)");
// const smallScreen = window.matchMedia("(max-width: 899px)");
// function largeScreenStyles(mediaQuery) {
//   openModal.classList.add("hide");
//   modal.classList.remove("hide");
//   closeModal.classList.add("hide");
// }

// function smallScreenStyles(mediaQuery) {
//   openModal.classList.remove("hide");
//   modal.classList.add("hide");
//   closeModal.classList.remove("hide");
// }

// smallScreen.addEventListener("change", smallScreenStyles);
// largeScreen.addEventListener("change", largeScreenStyles);
