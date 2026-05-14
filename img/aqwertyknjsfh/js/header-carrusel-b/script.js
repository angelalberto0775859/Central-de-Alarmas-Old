let currentSlide = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-inner .card');
    const totalSlides = slides.length;

    // Update the current slide index
    currentSlide += direction;

    // Loop around if at the end or beginning
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Move the carousel
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}


// Optional: Auto slide every 5 seconds 
/****
setInterval(() => {
    moveSlide(1);
}, 5000);
****/