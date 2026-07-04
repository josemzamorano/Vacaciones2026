function actualizarContador() {
    const fechaViaje = new Date('2026-07-27T00:00:00');
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
