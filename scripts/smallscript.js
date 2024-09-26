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