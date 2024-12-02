// Selección de elementos
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Avanzar al siguiente slide
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Retroceder al slide anterior
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

updateCarousel();
