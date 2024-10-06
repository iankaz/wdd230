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

// Get the visit count element
const visitCountElement = document.getElementById('visit-count');

// Add an event listener to update the visit count on page load
window.addEventListener('load', () => {
  // Initialize the visit counter
  let visitCount = localStorage.getItem('visitCount');

  // If the visit count is not set, set it to 1
  if (visitCount === null) {
    visitCount = 1;
  } else {
    // Otherwise, increment the visit count
    visitCount = parseInt(visitCount) + 1;
  }

  // Update the visit count in local storage
  localStorage.setItem('visitCount', visitCount);

  // Update the visit count display
  visitCountElement.textContent = `Number of visits: ${visitCount}`;
});

