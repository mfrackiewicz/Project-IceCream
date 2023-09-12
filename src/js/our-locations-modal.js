(() => {
    const refs = {
      openModalBtn: document.querySelector("[locations-data-modal-open]"),
      closeModalBtn: document.querySelector("[locations-data-modal-close]"),
      modal: document.querySelector("[locations-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();