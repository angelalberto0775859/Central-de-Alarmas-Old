let newCurrentSlide = 0;

function newMoveSlide(direction) {
    const newCarouselInner = document.querySelector('.new-carousel-inner');
    const newSlides = document.querySelectorAll('.new-carousel-inner .new-card');
    const newTotalSlides = newSlides.length;

    // Update the current slide index
    newCurrentSlide += direction;

    // Loop around if at the end or beginning
    if (newCurrentSlide >= newTotalSlides) {
        newCurrentSlide = 0;
    } else if (newCurrentSlide < 0) {
        newCurrentSlide = newTotalSlides - 1;
    }

    // Move the carousel
    newCarouselInner.style.transform = `translateX(-${newCurrentSlide * 100}%)`;
}

// Optional: Auto slide every 5 second
setInterval(() => {
    newMoveSlide(1);
}, 5000);