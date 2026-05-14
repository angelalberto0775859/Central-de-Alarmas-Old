function toggleSocialLinks() {
    var floatingButton = document.querySelector('.floating-button');
    var socialLinks = document.querySelector('.social-links');

    socialLinks.style.display = (socialLinks.style.display === 'none' || socialLinks.style.display === '') ? 'block' : 'none';

    // Toggle la clase "rotated" para rotar el botón al hacer clic
    floatingButton.classList.toggle('rotated');
}