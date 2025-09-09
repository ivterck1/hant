// Archivo: script.js

const hamburgerButton = document.getElementById('hamburger-button');
const menuLinks = document.getElementById('menu-links');

hamburgerButton.addEventListener('click', () => {
    // Alterna la clase 'active' en el botón y el menú
    hamburgerButton.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// --- Animación del Logo al hacer Clic ---

// 1. Seleccionamos el logo por su clase.
const logo = document.querySelector('.logo');

// 2. Le decimos que esté atento a un 'clic'.
logo.addEventListener('click', (event) => {
    // 3. Prevenimos el comportamiento por defecto del link (que no salte la página).
    event.preventDefault(); 
    
    // 4. Añadimos la clase '.spin-logo' para que comience a girar.
    logo.classList.add('spin-logo');
});

// 5. Opcional pero recomendado: Hacemos que la animación se pueda repetir.
//    Escuchamos cuando la transición del giro termina...
logo.addEventListener('transitionend', () => {
    // ...y quitamos la clase para que esté listo para el próximo clic.
    logo.classList.remove('spin-logo');
});