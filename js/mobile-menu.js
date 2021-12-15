(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const closeMenuBtnAbout = document.querySelector('.js-close-menu-about');
  const closeMenuBtnPrice = document.querySelector('.js-close-menu-price');
  const closeMenuBtnServices = document.querySelector('.js-close-menu-services');
  const closeMenuBtnGuaranrees = document.querySelector('.js-close-menu-guarantees');
   const closeMenuBtnNews = document.querySelector('.js-close-menu-news');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  closeMenuBtnAbout.addEventListener('click', toggleMenu);
closeMenuBtnPrice.addEventListener('click', toggleMenu);
closeMenuBtnServices.addEventListener('click', toggleMenu);
closeMenuBtnGuaranrees.addEventListener('click', toggleMenu);
closeMenuBtnNews.addEventListener('click', toggleMenu);


  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
