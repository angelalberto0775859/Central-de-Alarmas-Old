document.addEventListener("DOMContentLoaded", function() {
    // Fecha y hora programada
    const year = 2024;
    const month = 9; // (meses en JS son 0-11)
    const day = 30;
    const hour = 11;
    const minute = 20;

    // Crear la fecha objetivo
    const targetDate = new Date(year, month - 1, day, hour, minute);

    // Obtener el elemento con la clase "ctime"
    const ctimeElement = document.querySelector('.ctime');

    // Comprobar la fecha actual y deshabilitar si es necesario
    if (new Date() >= targetDate) {
        ctimeElement.classList.add('deshabilitado');
    }
});