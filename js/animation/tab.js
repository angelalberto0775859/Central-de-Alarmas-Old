document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".animation_tab");
    const slides = carousel.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.opacity = "1";
            } else {
                slide.style.opacity = "0";
            }
        });
        console.log("Mostrando slide " + index);
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
        console.log("Siguiente slide: " + currentSlideIndex);
    }

    // Initial setup
    showSlide(currentSlideIndex);

    // Automatic slide change
    setInterval(nextSlide, 4000); // Cambia la imagen cada 4 segundos (ajusta el valor según tus preferencias)
});