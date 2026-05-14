document.addEventListener('DOMContentLoaded', function() {
    // Carrusel Tab
    var splidedes = new Splide('#splidedes', {
        breakpoints: {
            1080: {
                perPage: 1,
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
    splidedes.mount();

});