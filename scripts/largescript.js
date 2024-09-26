// Get hamburger button and main menu elements
const hamburger = document.getElementById('hamburger');
const mainMenu = document.getElementById('main-menu');

// Add event listener to hamburger button
hamburger.addEventListener('click', () => {
  // Toggle main menu items
  mainMenu.classList.toggle('show');
  
  // Change hamburger button icon to 'X' when main menu items are shown
  if (mainMenu.classList.contains('show')) {
    hamburger.innerHTML = '<span>&times;</span>';
  } else {
    hamburger.innerHTML = '<span></span><span></span><span></span>';
  }
});

// Show main menu items on desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mainMenu.style.display = 'block';
  } else {
    mainMenu.style.display = 'none';
  }
});

// Get current year and last modified date
const currentYear = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModified');

// Set current year and last modified date
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;