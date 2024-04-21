// Function to highlight the current active page in the navigation menu
function highlightCurrentPage() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('current');  // Add 'current' class to the navigation link of the current page
        }
    });
}

// Function to apply hover effects to images in the gallery
function setupImageHoverEffects() {
    const galleryImages = document.querySelectorAll('.featured-image');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';  // Scale up the image on mouse enter
            img.style.transition = 'transform 0.5s ease';  // Smooth transition for scaling
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';  // Scale back to normal on mouse leave
        });
    });
}

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    highlightCurrentPage();
    setupImageHoverEffects();
});
