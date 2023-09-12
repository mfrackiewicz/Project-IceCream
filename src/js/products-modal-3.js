(() => {
  const refs = {
    openModalBtn: document.querySelector('[js-products-open-3]'),
    closeModalBtn: document.querySelector('[js-products-close-3]'),
    modal: document.querySelector('[js-products-3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products-is-hidden');
  }
})();
