
  const menuButton = document.querySelector('[command="show-modal"]');
  const closeButton = document.querySelector('[command="close"]');
  const menu = document.querySelector('#mobile-menu');

  menuButton?.addEventListener('click', () => menu.showModal());
  closeButton?.addEventListener('click', () => menu.close());

