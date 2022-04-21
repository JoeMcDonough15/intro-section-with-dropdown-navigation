const cardContainer = document.getElementById("card-container");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

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
