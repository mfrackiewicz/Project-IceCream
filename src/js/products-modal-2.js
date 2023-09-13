(() => {
  const refs = {
    openModalBtn: document.querySelector('[js-products-open-2]'),
    closeModalBtn: document.querySelector('[js-products-close-2]'),
    modal: document.querySelector('[js-products-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products-is-hidden');
  }
})();
