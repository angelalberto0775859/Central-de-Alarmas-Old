document.addEventListener('DOMContentLoaded', function() {
    // Carrusel Tab
    var splidetab = new Splide('#splidetab', {
        breakpoints: {
            768: {
                perPage: 2,
                perMove: 1,
                gap: '2rem',
                padding: '0rem',
                type: 'loop',
                drag: 'free',
                snap: 'true',
                autoplay: false,
            }
        },

    });
    splidetab.mount();

});