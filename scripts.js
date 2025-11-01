// Encapsulación del código en IIFE para evitar contaminación del scope global
(function() {
    'use strict';

    // Obtener todos los botones de categoría
    const categoriaBtns = document.querySelectorAll('.pf-categoria-btn');
    const galerias = document.querySelectorAll('.pf-galeria');

    // Añadir evento click a cada botón
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover clase 'pf-active' de todos los botones
            categoriaBtns.forEach(b => b.classList.remove('pf-active'));

            // Añadir clase 'pf-active' al botón clickeado
            this.classList.add('pf-active');

            // Obtener la categoría del atributo data
            const categoria = this.getAttribute('data-categoria');

            // Ocultar todas las galerías
            galerias.forEach(galeria => {
                galeria.classList.add('pf-oculta');
            });

            // Mostrar solo la galería seleccionada
            document.getElementById('pf-galeria-' + categoria).classList.remove('pf-oculta');
        });
    });

    // Modal para imágenes
    const modal = document.getElementById('pf-modal-imagen');
    const modalImg = document.getElementById('pf-imagen-grande');
    const cerrarModal = document.querySelector('.pf-modal-cerrar');

    // Añadir evento click a todas las imágenes de la galería
    document.addEventListener('click', function (e) {
        if (e.target.matches('.pf-img-box img')) {
            modal.style.display = 'block';
            modalImg.src = e.target.src;
        }
    });

    // Cerrar modal al hacer clic en la X
    cerrarModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

})();
