document.addEventListener('DOMContentLoaded', function() {
    // Carrusel Pho
    var splidepho = new Splide('#splidepho', {
        breakpoints: {
            375: {
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
    splidepho.mount();

});