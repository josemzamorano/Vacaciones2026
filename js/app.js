function actualizarContador() {
    const contador = document.getElementById('contador');

    if (!contador) {
        return;
    }

    const fechaViaje = new Date('2026-07-27T00:00:00');
    const ahora = new Date();

    const diferencia = fechaViaje - ahora;

    if (diferencia <= 0) {
        contador.textContent =
            '🎉 ¡Ya estamos de vacaciones!';
        return;
    }

    const dias = Math.ceil(
        diferencia / (1000 * 60 * 60 * 24)
    );

    contador.textContent =
        `⏳ Faltan ${dias} días para las vacaciones`;
}

actualizarContador();

const musica = document.getElementById('musica');
const modal = document.getElementById('bienvenida');
const boton = document.getElementById('btnComenzar');


// Si ya se inició la aventura en esta pestaña,
// ocultamos el modal
if (
    modal &&
    sessionStorage.getItem('aventuraIniciada') === 'si'
) {
    modal.style.display = 'none';
}


// Restaurar la sección del itinerario
window.addEventListener('load', () => {

    const seccion =
        localStorage.getItem('seccion');

    if (seccion) {

        setTimeout(() => {

            const destino =
                document.getElementById(seccion);

            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            localStorage.removeItem('seccion');

        }, 200);
    }
});


// Guardar la posición de la música
if (musica) {

    const tiempo =
        localStorage.getItem('musicaTiempo');

    if (tiempo) {
        musica.currentTime =
            parseFloat(tiempo);
    }

    window.addEventListener(
        'beforeunload',
        () => {

            localStorage.setItem(
                'musicaTiempo',
                musica.currentTime
            );
        }
    );
}


// Botón de comenzar
if (musica && modal && boton) {

    boton.addEventListener('click', () => {

        sessionStorage.setItem(
            'aventuraIniciada',
            'si'
        );

        modal.style.display = 'none';

        musica.play().catch(err => {
            console.log(
                'No se pudo reproducir la música:',
                err
            );
        });
    });
}