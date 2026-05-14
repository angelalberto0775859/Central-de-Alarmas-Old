const words = ["Solución interactiva de seguridad y confort", "Maneja todo desde una aplicación", "Alarma, Cámaras, Cerraduras, Automatización, Aire acondicionado, horarios, Usuarios", "Control manual de dispositivos inteligentes desde el panel", "Fácil interacción a través de la pantalla touch", "Reproducción de audio vía Bluetooth"];
let currentIndex = 0;
const carouselElement = document.getElementById("carousel-word");
const intervalTime = 5000; // Tiempo en milisegundos (2 segundos)

function updateWord() {
    currentIndex = (currentIndex + 1) % words.length;
    carouselElement.textContent = words[currentIndex];
}

setInterval(updateWord, intervalTime);