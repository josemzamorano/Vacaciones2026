function actualizarContador() {
    const fechaViaje = new Date('2026-06-27T00:00:00');
    const ahora = new Date();

    const diferencia = fechaViaje - ahora;

    if (diferencia <= 0) {
        document.getElementById('contador').textContent =
            '🎉 ¡Ya estamos de vacaciones!';
        return;
    }

    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById('contador').textContent =
        `⏳ Faltan ${dias} días para las vacaciones`;
}

actualizarContador();

const musica = document.getElementById('musica');
const modal = document.getElementById('bienvenida');
const boton = document.getElementById('btnComenzar');

if (musica) {
    // Recuperar el punto donde se quedó la canción
    const tiempo = localStorage.getItem('musicaTiempo');

    if (tiempo) {
        musica.currentTime = parseFloat(tiempo);
    }

    // Guardar la posición antes de salir de la página
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicaTiempo', musica.currentTime);
    });
}

if (musica && modal && boton) {
    boton.addEventListener('click', () => {
        modal.style.display = 'none';

        musica.play().catch(err => {
            console.log('No se pudo reproducir la música:', err);
        });
    });
}