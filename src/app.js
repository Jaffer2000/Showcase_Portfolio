window.addEventListener('DOMContentLoaded', (event) => {
  const menuBtnEl = document.getElementById('hamburger');
  const menuEl = document.getElementById('nav-list');

  menuBtnEl.addEventListener('click', () => menuEl.classList.toggle('show'));
});
