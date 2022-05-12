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
    featuresArrow.classList.toggle("arrow-rotate");
    navExpansionFeatures.forEach((featureExpansion) => {
      featureExpansion.classList.toggle("hide");
    });
  });
});

navExpansionArrowsCompany.forEach((companyArrow) => {
  companyArrow.addEventListener("click", () => {
    companyArrow.classList.toggle("arrow-rotate");
    navExpansionCompany.forEach((companyExpansion) => {
      companyExpansion.classList.toggle("hide");
    });
  });
});
