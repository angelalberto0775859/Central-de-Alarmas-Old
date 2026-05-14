window.onload = function() {
    const marquees = document.querySelectorAll('.marquee-text');
    marquees.forEach(marqueeText => {
        const marqueeContainer = marqueeText.closest('.marquee-container');

        // Calcular el ancho del texto y del contenedor
        const textWidth = marqueeText.offsetWidth;
        const containerWidth = marqueeContainer.offsetWidth;

        // Solo aplicar la animación si el texto es más ancho que el contenedor
        if (textWidth > containerWidth) {
            // Función para iniciar la animación
            function iniciarAnimacion() {
                marqueeText.style.animation = `marquee ${textWidth / 50}s linear`;
            }

            // Función para reiniciar la animación
            function reiniciarAnimacion() {
                marqueeText.style.animation = 'none'; // Detener la animación
                marqueeText.offsetHeight; // Forzar el reflow para reiniciar la animación
                setTimeout(iniciarAnimacion, 5000); // Esperar 5 segundos antes de reiniciar
            }

            // Iniciar la animación después de 5 segundos
            setTimeout(iniciarAnimacion, 5000);

            // Reiniciar la animación cada vez que termine
            marqueeText.addEventListener('animationend', reiniciarAnimacion);
        }
    });
}