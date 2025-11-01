
// Obtener todos los botones de categoría
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const galerias = document.querySelectorAll('.galeria');

// Añadir evento click a cada botón
categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remover clase 'active' de todos los botones
        categoriaBtns.forEach(b => b.classList.remove('active'));

        // Añadir clase 'active' al botón clickeado
        this.classList.add('active');

        // Obtener la categoría del atributo data
        const categoria = this.getAttribute('data-categoria');

        // Ocultar todas las galerías
        galerias.forEach(galeria => {
            galeria.classList.add('oculta');
        });

        // Mostrar solo la galería seleccionada
        document.getElementById('galeria-' + categoria).classList.remove('oculta');
    });
});

// Modal para imágenes
const modal = document.getElementById('modal-imagen');
const modalImg = document.getElementById('imagen-grande');
const cerrarModal = document.querySelector('.modal-cerrar');

// Añadir evento click a todas las imágenes de la galería
document.addEventListener('click', function (e) {
    if (e.target.matches('.img-box img')) {
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
