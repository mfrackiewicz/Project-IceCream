(() => {
  const refs = {
    openModalBtn: document.querySelector('[js-products-open-1]'),
    closeModalBtn: document.querySelector('[js-products-close-1]'),
    modal: document.querySelector('[js-products-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products-is-hidden');
  }
})();
