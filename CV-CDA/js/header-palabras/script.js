const words = ["hogar", "familia", "negocio", "empresa", "tranquilidad"];
let currentIndex = 0;
const carouselElement = document.getElementById("carousel-word");
const intervalTime = 5000; // Tiempo en milisegundos (2 segundos)

function updateWord() {
    currentIndex = (currentIndex + 1) % words.length;
    carouselElement.textContent = words[currentIndex];
}

setInterval(updateWord, intervalTime);