//Importing
import { closeCart } from "./cart";

//Elements
const btnOpenModal = document.querySelector("[data-modal]"),
  inputs = document.querySelectorAll(".inputs_modal"),
  modal = document.querySelector(".modal"),
  btnClose = document.querySelectorAll("[data-close]"),
  modalContent = document.querySelector(".modal_content"),
  navigation = document.querySelector(".navigation");

//Function to show navigation
function showNavigation() {
  navigation.style.right = 30;
}

//Function to hide navigation
function hideNavigation() {
  navigation.style.right = -80;
}

//Function openning modal
function openModal() {
  hideNavigation();
  modal.style.cssText = `
		opacity: 1;
		pointer-events: visible;
	`;
  modalContent.style.cssText = `
		transform: scale(1);
	`;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "10px";
}

//Function closing modal
function closeModal() {
  showNavigation();
  modal.style.cssText = `
		opacity: 0;
		pointer-events: none;
	`;
  modalContent.style.cssText = `
		tranform: scale(0);
	`;
  const paddingModal = setTimeout(() => {
    document.body.style.paddingRight = "0px";
    document.body.style.overflow = "";
    clearTimeout(paddingModal);
  }, 300);
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
