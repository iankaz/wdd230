const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.innerHTML = '<span>X</span>';
  } else {
    hamburgerMenu.innerHTML = '<span>☰</span>';
  }
});
