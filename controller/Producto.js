
    // Función para obtener usuarios
    function obtenerProductos() {
        fetch('../instancias/instancias.php?accion=obtenerProductos')
        .then(response => response.json())
            .then(data => {
                mostrarDatos(data)

                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    }
    obtenerProductos();

   const mostrarDatos =(datos)=>{
    console.log(datos)
   }

