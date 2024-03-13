
    // Función para obtener usuarios
    function obtenerProductos() {
        fetch('http://localhost/ventas1/instancias/instancias.php?accion=obtenerProductos')
        .then(response => response.json())
            .then(data => {
                mostrarDatos(data)
                // console.log(data);
            })
            .catch(error => console.error('Error:', error));
    }
    obtenerProductos();

    const mostrarDatos =(data)=>{

        
        const tbody = document.querySelector('#tablaProductos tbody');
        tbody.innerHTML = '';

        data.forEach((element, i)=>{

            const codigo = element.codigo
            const nombre = element.nombre
            const precio = element.precio
            const cantidad = element.cantidad     

               const row = tbody.insertRow(i);
            const cellCodigo = row.insertCell(0)
               const cellNombre = row.insertCell(1);
               const cellPrecio = row.insertCell(2);
               const cellCantidad = row.insertCell(3);

               cellCodigo.textContent = codigo;
       
               cellNombre.textContent = nombre;
               cellPrecio.textContent = precio;       
               cellCantidad.textContent = cantidad
        })


    }



