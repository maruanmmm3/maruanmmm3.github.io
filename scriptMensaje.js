
            // Obtener los elementos
            const showMessageBtn = document.getElementById('showMessageBtn');
            const messageBox = document.getElementById('messageBox');
            const closeBtn = document.getElementById('closeBtn');
            const overlay = document.getElementById('overlay');

            // Mostrar el cuadro de mensaje y el fondo oscuro al hacer clic
            showMessageBtn.addEventListener('click', () => {
                messageBox.style.display = 'block';
                overlay.style.display = 'block';
            });

            // Cerrar el cuadro de mensaje al hacer clic en el botón "Cerrar"
            closeBtn.addEventListener('click', () => {
                messageBox.style.display = 'none';
                overlay.style.display = 'none';
            });

            // Cerrar el cuadro de mensaje al hacer clic fuera del cuadro
            overlay.addEventListener('click', () => {
                messageBox.style.display = 'none';
                overlay.style.display = 'none';
            });
   