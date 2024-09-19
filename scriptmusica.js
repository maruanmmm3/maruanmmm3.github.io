 // Verificar el estado de la música al cargar la página
 window.onload = function() {
    var musicaEnReproduccion = localStorage.getItem('musicaEnReproduccion');
    if (musicaEnReproduccion === 'true') {
        var audio = document.getElementById('miAudio');
        audio.play();
    }
    
};

  // Función para redirigir a 'rosas.html'
  function irARosas() {
    localStorage.setItem('audioTime', document.getElementById('miAudio').currentTime);
    window.location.href = 'rosas.html';
    
}

 // Función para encender la música
/* function encenderMusica() {
    // Acceder al contenido del iframe y ejecutar la función de reproducción
    var audioFrame = document.getElementById('audioFrame');
    audioFrame.contentWindow.reproducirAudio();
} */
 
 // Función para reproducir el audio
 function reproducirAudio() {
    var audio = document.getElementById('miAudio');

    // Recuperar el tiempo guardado de localStorage
    var savedTime = localStorage.getItem('audioTime');

    // Si hay un tiempo guardado, establecerlo en el audio
    if (savedTime) {
        audio.currentTime = savedTime;
    }

    audio.play();
    // Guardar el estado de reproducción en localStorage
    localStorage.setItem('musicaEnReproduccion', 'true');
}

function detenerMusica() {
    var audio = document.getElementById('miAudio');
    
    // Pausar el audio
    audio.pause();
    
    // Guardar el estado de reproducción en localStorage
    /* localStorage.setItem('musicaEnReproduccion', 'false'); */
    
    // Opcional: guardar el tiempo actual de reproducción
    /* localStorage.setItem('audioTime', audio.currentTime); */
    
    // Reiniciar el tiempo de reproducción a 0
    audio.currentTime = 0;
    
    // Guardar el estado de reproducción en localStorage
    localStorage.setItem('audioTime', 0);
}

/* function reproducirAudio() {
    var audio = document.getElementById('miAudio');
    audio.play();
} */
// Hacer que la función esté disponible globalmente
/* window.reproducirAudio = reproducirAudio; */