//Importing fetch functions for data
import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

const Form = () => {
  //Getting form from the page
  const form = document.querySelector("form");

  //Messages for form
  const message = {
    loading: "img/form/spinner.svg",
    success: "Thanks for sign in!",
    error: "Something went wrong...",
  };

  bindPostData(form);

  //Posting data from user
  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
			display: block;
			margin: 0 auto;
		`;

      form.append(statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then(() => {
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.error);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  //Showing modal window for user
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal_dialog");

    prevModalDialog.style.display = "none";
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal_dialog");
    thanksModal.innerHTML = `
			<div class="modal__dinamic_content">
				<h1 class="modal_title">${message}</h1>
			</div>
		`;

    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.style.display = "block";
      closeModal();
    }, 3000);
  }
};

export default Form;
