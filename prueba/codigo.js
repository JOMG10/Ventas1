// código.js
document.addEventListener('DOMContentLoaded', function () {
    // Hacer una solicitud AJAX para obtener productos
    // Utiliza la biblioteca que prefieras (por ejemplo, fetch o jQuery)
    fetch('obtenerProductos.php')
        .then(response => response.json())
        .then(data => {
            // Maneja los datos obtenidos (por ejemplo, muestra en la página)
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
});
