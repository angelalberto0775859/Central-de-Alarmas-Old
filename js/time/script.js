// Configuración de la fecha y hora en la que el bloque se ocultará
const targetDate = new Date('2024-10-31T18:10:00'); // Año-mes-díaT24-hora:minuto:segundo

function checkTime() {
    const now = new Date();

    // Comparar la fecha y hora actual con la fecha y hora objetivo
    if (now >= targetDate) {
        const elements = document.querySelectorAll('.time');
        elements.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        // Si aún no es tiempo, establecer un temporizador para volver a verificar cada segundo
        setTimeout(checkTime, 1000);
    }
}

// Iniciar la verificación
checkTime();