
    // Función para obtener usuarios
    function obtenerProductos() {
        fetch('http://localhost/proyects/ventas1/instancias/instancias.php?accion=obtenerProductos')
        .then(response => response.json())
            .then(data => {
                mostrarDatos(data)
            })
            .catch(error => console.error('Error:', error));
    }
    obtenerProductos();

    const mostrarDatos =(data)=>{
        console.log(data)
        
        const tbody = document.querySelector('#tablaProductos tbody');
        tbody.innerHTML = '';

        data.forEach((element, i)=>{

            const codigo = element.codigo
            const descripcion = element.descripcion
            const departamento = element.costo
            const costo = element.costo  
            const pVenta = element.precioVenta
            const pMayoreo = element.precioMayoreo
            const existencia = element.existencia
            const invMinimo = element.invMinimo
            const invMaximo = element.invMaximo
            const tipo = element.tipo   

               const row = tbody.insertRow(i);
               const cellCodigo = row.insertCell(0)
               const cellDescripcion = row.insertCell(1);            
               const cellCosto = row.insertCell(2);
               const cellPVenta = row.insertCell(3);
               const cellPMayoreo = row.insertCell(4);
               const cellExistencia = row.insertCell(5);
               const cellInvMinimo = row.insertCell(6);
               const cellInvMaximo = row.insertCell(7);
               const cellTipo = row.insertCell(8);
              

               cellCodigo.textContent = codigo;       
               cellDescripcion.textContent = des;
               cellPrecio.textContent = precio;       
               cellCantidad.textContent = cantidad
        })


    }



