/* onload = () => {
    document.body.classList.remove("container");
  }; */

  window.onload = function() {
    var musicaEnReproduccion = localStorage.getItem('musicaEnReproduccion');
    if (musicaEnReproduccion === 'true') {
        
        var audio = document.getElementById('miAudio');

        // Recuperar el tiempo guardado de localStorage
        var savedTime = localStorage.getItem('audioTime');
    
        // Si hay un tiempo guardado, establecerlo en el audio
        if (savedTime) {
            audio.currentTime = savedTime;
        }
    
        audio.play();
    }

    document.body.classList.remove("container");
    
};