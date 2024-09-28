const hamburgerMenu = document.querySelector('.hamburger-menu');
const navUl = document.querySelector('nav ul');

navUl.classList.add('hide');

hamburgerMenu.addEventListener('click', () => {
  navUl.classList.toggle('open');
  if (navUl.classList.contains('open')) {
    hamburgerMenu.setAttribute('aria-expanded', 'true');
  } else {
    hamburgerMenu.setAttribute('aria-expanded', 'false');
  }
});