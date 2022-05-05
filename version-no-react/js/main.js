const blurContainer = document.getElementById("blur");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const navExpansionArrowsFeatures = Array.from(
  document.getElementsByClassName("nav-expansion-arrow-features")
);

const navExpansionArrowsCompany = Array.from(
  document.getElementsByClassName("nav-expansion-arrow-company")
);
const navExpansionFeatures = Array.from(
  document.getElementsByClassName("nav-expansion-features")
);
const navExpansionCompany = Array.from(
  document.getElementsByClassName("nav-expansion-company")
);

openModal.addEventListener("click", () => {
  modal.classList.add("mobile-nav-menu-appear");
  openModal.classList.add("hide");
  blurContainer.classList.add("blur");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("mobile-nav-menu-appear");
  openModal.classList.remove("hide");
  blurContainer.classList.remove("blur");
});

navExpansionArrowsFeatures.forEach((featuresArrow) => {
  featuresArrow.addEventListener("click", () => {
    if (featuresArrow.getAttribute("src") === "images/icon-arrow-down.svg") {
      featuresArrow.setAttribute("src", "images/icon-arrow-up.svg");
      featuresArrow.setAttribute("alt", "clickable arrow pointing up");
    } else if (
      featuresArrow.getAttribute("src") === "images/icon-arrow-up.svg"
    ) {
      featuresArrow.setAttribute("src", "images/icon-arrow-down.svg");
      featuresArrow.setAttribute("alt", "clickable arrow pointing down");
    }
    navExpansionFeatures.forEach((featureExpansion) => {
      featureExpansion.classList.toggle("hide");
    });
  });
});

navExpansionArrowsCompany.forEach((companyArrow) => {
  companyArrow.addEventListener("click", () => {
    if (companyArrow.getAttribute("src") === "images/icon-arrow-down.svg") {
      companyArrow.setAttribute("src", "images/icon-arrow-up.svg");
      companyArrow.setAttribute("alt", "clickable arrow pointing up");
    } else if (
      companyArrow.getAttribute("src") === "images/icon-arrow-up.svg"
    ) {
      companyArrow.setAttribute("src", "images/icon-arrow-down.svg");
      companyArrow.setAttribute("alt", "clickable arrow pointing down");
    }
    navExpansionCompany.forEach((companyExpansion) => {
      companyExpansion.classList.toggle("hide");
    });
  });
});
