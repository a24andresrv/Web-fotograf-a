// Funcionalidad de navegación entre categorías
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.category-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        document.getElementById(category).classList.add('active');
    });
});

// Funcionalidad de Lightbox para visualizar imágenes en grande
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;
let currentImages = [];

// Crear el lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <span class="lightbox-prev">&#10094;</span>
    <span class="lightbox-next">&#10095;</span>
    <img src="" alt="" class="lightbox-image">
    <div class="lightbox-caption"></div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const closeBtn = lightbox.querySelector('.lightbox-close');
const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

// Función para abrir el lightbox
function openLightbox(index, images) {
    currentImageIndex = index;
    currentImages = images;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

// Función para actualizar la imagen del lightbox
function updateLightboxImage() {
    const img = currentImages[currentImageIndex];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = img.alt;
}

// Función para cerrar el lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
}

// Función para ir a la imagen anterior
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
}

// Función para ir a la siguiente imagen
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateLightboxImage();
}

// Añadir event listeners a todas las imágenes de la galería
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Obtener todas las imágenes de la sección activa actual
        const activeSection = document.querySelector('.category-section.active');
        const activeSectionImages = Array.from(activeSection.querySelectorAll('.gallery-item img'));
        
        // Encontrar el índice de la imagen clickeada dentro de su sección
        const clickedImg = item.querySelector('img');
        const imgIndex = activeSectionImages.indexOf(clickedImg);
        
        openLightbox(imgIndex, activeSectionImages);
    });
});

// Event listeners para los controles del lightbox
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Cerrar lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});
