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

// --- LÓGICA PARA EL BOCADILLO DEL BOTÓN DE WHATSAPP ---

const whatsappMensaje = document.querySelector('.whatsapp-mensaje');

// Hacemos que la función se ejecute cada 10 segundos
setInterval(() => {
    
    // Mostramos el bocadillo añadiendo la clase 'show'
    whatsappMensaje.classList.add('show');

    // Después de 4 segundos, lo ocultamos quitando la clase
    setTimeout(() => {
        whatsappMensaje.classList.remove('show');
    }, 4000); // 4000 milisegundos = 4 segundos

}, 10000); // 10000 milisegundos = 10 segundos



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previene el salto instantáneo por defecto del navegador.
        e.preventDefault();
		
		      // ▼▼ LÍNEAS AÑADIDAS ▼▼
        // Ocultamos el menú y revertimos el ícono de la hamburguesa
        menuLinks.classList.remove('active');
        hamburgerButton.classList.remove('active');
        // ▲▲ FIN DE LÍNEAS AÑADIDAS ▲▲


        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula la altura de la cabecera para que no tape el título de la sección.
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            // Le dice a la ventana que se desplace a la posición calculada con una animación suave.
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Esta es la propiedad clave para la animación.
            });
        }
    });
});