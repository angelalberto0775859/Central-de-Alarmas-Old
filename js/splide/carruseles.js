document.addEventListener('DOMContentLoaded', function() {
    // Carrusel 1
    var splide1 = new Splide('#splide1', {
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        padding: '0rem',
        type: 'loop',
        drag: 'free',
        snap: 'true',
        autoplay: true,
        breakpoints: {
            768: {
                perPage: 2,
                gap: '2rem',
            },
            375: {
                perPage: 1,
                gap: '2rem',
            },
        },
    });
    splide1.mount();

});