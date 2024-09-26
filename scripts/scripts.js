const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
    console.log('Hamburger button clicked!');
    navMenu.classList.toggle('active');
  });

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
  if (hamburger.classList.contains('open')) {
    hamburger.innerHTML = '<span>X</span>';
  } else {
    hamburger.innerHTML = '<span>☰</span>';
  }
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

