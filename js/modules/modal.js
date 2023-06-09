const btnOpenModal = document.querySelector("[data-modal]"),
  inputs = document.querySelectorAll(".inputs_modal"),
  modal = document.querySelector(".modal"),
  btnClose = document.querySelectorAll("[data-close]"),
  modalContent = document.querySelector(".modal_content");

function openModal() {
  modal.style.cssText = `
		opacity: 1;
		pointer-events: visible;
	`;

  modalContent.style.cssText = `
		transform: scale(1);
	`;

  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.cssText = `
		opacity: 0;
		pointer-events: none;
	`;

  modalContent.style.cssText = `
		tranform: scale(0);
	`;

  document.body.style.overflow = "";
}

function clearInputs() {
  inputs.forEach((item) => {
    item.value = "";
  });
}

const Modal = () => {
  btnClose.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
      clearInputs();
    });
  });

  btnOpenModal.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
      clearInputs();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closeModal();
      clearInputs();
    }
  });
};

export default Modal;
export { closeModal };
export { openModal };
