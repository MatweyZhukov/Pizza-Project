//Importing function from module Cart
import { closeCart } from "./cart";

//Elements
const btnOpenModal = document.querySelector("[data-modal]"),
  inputs = document.querySelectorAll(".inputs_modal"),
  modal = document.querySelector(".modal"),
  btnClose = document.querySelectorAll("[data-close]"),
  modalContent = document.querySelector(".modal_content");

//Function openning modal
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

//Function closing modal
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

//Function clearing inputs, when the modal is closed
function clearInputs() {
  inputs.forEach((item) => {
    item.value = "";
  });
}

const Modal = () => {
  //EventListeners
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
    closeCart();
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
