(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnO: document.querySelector('[data-modal-open-o]'),
    openModalBtnT: document.querySelector('[data-modal-open-t]'),
    openModalBtnTh: document.querySelector('[data-modal-open-th]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
      };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnO.addEventListener('click', toggleModal);
  refs.openModalBtnT.addEventListener('click', toggleModal);
  refs.openModalBtnTh.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
       
  }
 })();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-p]'),
    closeModalBtn: document.querySelector('[data-modal-close-p]'),
    modal: document.querySelector('[data-modal-p]'),
      };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
       
  }
 })();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-d]'),
    closeModalBtn: document.querySelector('[data-modal-close-d]'),
    modal: document.querySelector('[data-modal-d]'),
      };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
       
  }
})();
 (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-s]'),
    closeModalBtn: document.querySelector('[data-modal-close-s]'),
    modal: document.querySelector('[data-modal-s]'),
      };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
       
  }
})();
 (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-f]'),
    closeModalBtn: document.querySelector('[data-modal-close-f]'),
    modal: document.querySelector('[data-modal-f]'),
      };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
       
  }
 })();