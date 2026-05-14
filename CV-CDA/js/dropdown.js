document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los dropdowns del menú hamburguesa
    const dropdowns = document.querySelectorAll('.hamburguesa .dropdown');

    dropdowns.forEach(function (dropdownContainer) {
        const dropdownLink = dropdownContainer.querySelector('a');
        const dropdownContent = dropdownContainer.querySelector('.dropdown-content');
        let caret = dropdownContainer.querySelector('.dropdown-arrow');

        if (!dropdownContent) return;

        const toggle = function (event) {
            event.preventDefault();
            event.stopPropagation();
            dropdownContent.classList.toggle('active');
            dropdownContainer.classList.toggle('active');
        };

        // Si no existe caret, crear uno e insertarlo al final del link
        if (!caret && dropdownLink) {
            caret = document.createElement('span');
            caret.className = 'dropdown-arrow';
            caret.textContent = '▼';
            caret.style.marginLeft = '0.5rem';
            dropdownLink.appendChild(caret);
        }

        // Si hay caret (flecha), usarla para abrir/cerrar el dropdown sin bloquear la navegación del link
        if (caret) {
            caret.style.cursor = 'pointer';
            caret.addEventListener('click', toggle);
        } else if (dropdownLink && !dropdownLink.hasAttribute('href')) {
            // Fallback: Si NO hay caret y el link no navega, usar el link como disparador
            dropdownLink.addEventListener('click', toggle);
        }
    });
});
