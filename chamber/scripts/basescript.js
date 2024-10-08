const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav ul');

if (hamburgerMenu && navMenu) {
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
    if (hamburgerMenu.classList.contains('open')) {
      hamburgerMenu.innerHTML = '<span>X</span>';
    } else {
      hamburgerMenu.innerHTML = '<span>☰</span>';
    }
  });
}

// Get the images
const images = document.querySelectorAll('.lazy-load');

// Function to load the images
function loadImages() {
    console.log('Loading images...');
    images.forEach((image) => {
        const src = image.dataset.src;
        console.log(`Loading image: ${src}`);
        image.src = src;
    });
}

// Load the images when the page is scrolled
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const imageGallery = document.querySelector('.image-gallery');
    const imageGalleryTop = imageGallery.offsetTop;
    const imageGalleryBottom = imageGalleryTop + imageGallery.offsetHeight;

    if (scrollPosition + windowHeight >= imageGalleryTop && scrollPosition <= imageGalleryBottom) {
        console.log('Loading images...');
        loadImages();
    }
});

    document.addEventListener("DOMContentLoaded", function() {
        const visitMessageElement = document.getElementById('visit-message');
        const lastVisit = localStorage.getItem('lastVisit');
        const now = Date.now();
        
        if (!lastVisit) {
            // First visit
            visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const lastVisitDate = new Date(parseInt(lastVisit));
            const timeDifference = now - lastVisitDate.getTime();
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            
            if (timeDifference < 24 * 60 * 60 * 1000) {
                // Less than a day
                visitMessageElement.textContent = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                // Exactly one day
                visitMessageElement.textContent = "You last visited 1 day ago.";
            } else {
                // More than one day
                visitMessageElement.textContent = `You last visited ${daysDifference} days ago.`;
            }
        }
        
        // Update the last visit date in localStorage
        localStorage.setItem('lastVisit', now.toString());

        // Date math logic
        const msToDays = 86400000;
        const theDateToday = new Date();

        // Initialize display elements
        const todayElement = document.querySelector("#today");
        const christmasElement = document.querySelector("#christmas");
        const christmasDateElement = document.querySelector("#christmasDate");
        const daysElement = document.querySelector("#daysleft");

        // Processing
        const today = Date.now();
        const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
        // Check if it is the waning days of December, if so ... change to next year.
        if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
            christmasDate.setFullYear(christmasDate.getFullYear() + 1);
        }
        // Find difference between epoch times in ms and convert to days
        let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

        todayElement.textContent = today;
        christmasElement.textContent = christmasDate.getTime();
        christmasDateElement.textContent = christmasDate;
        daysElement.textContent = `${daysleft.toFixed(0)} days`;
    });
