(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.forEach((Element) => {
    Element.addEventListener('click', toggleModal);
  });

  // Закривання вікна по бекдропу
  //refs.modal.addEventListener('click', removeModal)
 //function removeModal(e) {
  //refs.modal.classList.add('is-hidden')
  //}
  // Закривання вікна по хрестику
  refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll')
  }
})();