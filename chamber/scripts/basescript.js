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