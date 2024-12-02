// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Add click event to each image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the enlarged class
        if (image.classList.contains('enlarged')) {
            image.classList.remove('enlarged'); // Remove enlarged view
        } else {
            // Remove enlarged class from other images
            galleryImages.forEach(img => img.classList.remove('enlarged'));
            image.classList.add('enlarged'); // Add enlarged view
        }
    });
});
