const openModalBtn = document.querySelector(".openModalBtn");
const modalWindow = document.querySelector(".modalContainer");
const modalBody = document.querySelector(".modalBody");
const closeModalBtn = document.querySelector(".closeModalWindow");

function toggleModalWindow() {
  modalWindow.classList.toggle("modalHidden");

  localStorage.setItem(
    "modalState",
    modalWindow.classList.contains("modalHidden") ? "hidden" : "visible"
  );
}

window.addEventListener("load", () => {
  const modalState = localStorage.getItem("modalState");
  if (modalState === "visible") {
    modalWindow.classList.remove("modalHidden");
  }
});

openModalBtn.addEventListener("click", toggleModalWindow);

modalWindow.addEventListener("click", toggleModalWindow);

modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleModalWindow();
  }
});

closeModalBtn.addEventListener("click", toggleModalWindow);
