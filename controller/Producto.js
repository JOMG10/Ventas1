
// código.js
document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener usuarios
    function obtenerProductos() {
        fetch('../instancias/instancias.php?accion=obtenerProductos')
        .then(response => response.json())
            .then(data => {
                console.log(data);
                // Aquí puedes manejar los datos obtenidos (p. ej., mostrar en la página)
            })
            .catch(error => console.error('Error:', error));
    }

    obtenerProductos();
});


