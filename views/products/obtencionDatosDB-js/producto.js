
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

    const mostrarDatos = (data) => {
        console.log(data);
    
        const tbody = document.querySelector('#tablaProductos tbody');
        tbody.innerHTML = '';
    
        data.forEach((element) => {
            const nuevaFila = document.createElement("tr");
    
            const codigo = element.codigo;
            const descripcion = element.descripcion;
            const departamento = element.decripcion;
            const costo = element.costo;
            const pVenta = element.precioVenta;
            const pMayoreo = element.precioMayoreo;
            const existencia = element.existencia;
            const invMinimo = element.invMinimo;
            const invMaximo = element.invMaximo;
            const tipo = element.tipoVenta;
    
            nuevaFila.innerHTML = `
                <td class="columnaM justificado numeroLetra">${codigo}</td>
                <td class="numeroLetra">${descripcion}</td>
                <td class="columnaM numeroLetra">${departamento}</td>
                <td class="columnaP justDerecho numeroLetra">${costo}</td>
                <td class="columnaP justDerecho numeroLetra">${pVenta}</td>
                <td class="columnaP justDerecho numeroLetra">${pMayoreo}</td>
                <td class="columnaP justDerecho numeroLetra">${existencia}</td>
                <td class="columnaP justDerecho numeroLetra">${invMinimo}</td>
                <td class="columnaP justDerecho numeroLetra">${invMaximo}</td>
                <td class="columnaP justDerecho numeroLetra">${tipo}</td>
            `;
    
            tbody.appendChild(nuevaFila);
        });
    };
    




            //    const row = tbody.insertRow(i);
            //    const cellCodigo = row.insertCell(0)
            //    const cellDescripcion = row.insertCell(1);   
            //    const cellDepartamento = row.insertCell(2)         
            //    const cellCosto = row.insertCell(3);
            //    const cellPVenta = row.insertCell(4);
            //    const cellPMayoreo = row.insertCell(5);
            //    const cellExistencia = row.insertCell(6);
            //    const cellInvMinimo = row.insertCell(7);
            //    const cellInvMaximo = row.insertCell(8);
            //    const cellTipo = row.insertCell(9);
              

            //    cellCodigo.textContent = codigo;       
            //    cellDescripcion.textContent = descripcion;
            //    cellDepartamento.textContent = departamento
            //    cellCosto.textContent = costo;       
            //    cellPVenta.textContent = pVenta;               
            //    cellPMayoreo.textContent = pMayoreo;
            //    cellExistencia.textContent =  existencia;
            //    cellInvMinimo.textContent = invMinimo;
            //    cellInvMaximo.textContent = invMaximo;
            //    cellTipo.textContent = tipo;

               
           