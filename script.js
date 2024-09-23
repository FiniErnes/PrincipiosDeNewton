// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los botones desplegables
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    // Agregar evento de clic a cada botón
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
            // Ocultar cualquier submenú abierto
            closeDropdowns();

            // Alternar el estado del submenú actual
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Cierra todos los submenús
    function closeDropdowns() {
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function (content) {
            content.classList.remove('show');
        });
    }

    // Cierra el submenú si se hace clic en otro lugar de la página
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            closeDropdowns();
        }
    });
});
