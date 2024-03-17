
    // funciones para obtener los datos de 
    function obtenerProductos() {
        fetch('http://localhost/proyects/ventas1/instancias/instanciaProductos.php?accion=obtenerProductos')
        .then(response => response.json())
            .then(data => {
                mostrarProductos(data)
            })
            .catch(error => console.error('Error:', error));
    }
    obtenerProductos();

    const obtenerDepartamento =()=>{
        fetch("http://localhost/proyects/ventas1/instancias/instanciaProductos.php?accion=obtenerDepartamento")
        .then(response => response.json())
            .then(data =>{
                mostrarDepartamento(data)
            })
    }
    obtenerDepartamento();


    //funciiones para agregar los datos a las interfaces

    const tbody = document.querySelector('#tablaProductos tbody');
    // const catalogoDepartamento = document.querySelector('#catalogoDepartamento ')


    const mostrarProductos = (data) => {
        console.log(data);
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
                <td class="columnaM numeroLetra justificado">${departamento}</td>
                <td class="columnaP justDerecho numeroLetra">${costo}</td>
                <td class="columnaP justDerecho numeroLetra">${pVenta}</td>
                <td class="columnaP justDerecho numeroLetra">${pMayoreo}</td>
                <td class="columnaP justDerecho numeroLetra">${existencia}</td>
                <td class="columnaP justDerecho numeroLetra">${invMinimo}</td>
                <td class="columnaP justDerecho numeroLetra">${invMaximo}</td>
                <td class="columnaP centrado numeroLetra">${tipo}</td>
            `;
    
            tbody.appendChild(nuevaFila);
        });
    };
    

    const mostrarDepartamento = (data) => {
        const selectDepartamento = document.getElementById('catalogoDepartamento');
    
        // Limpiar opciones anteriores
        selectDepartamento.innerHTML = '';
    
        // Crear una opción por cada departamento en los datos recibidos
        data.forEach((departamento) => {
            const option = document.createElement('option');
            option.value = departamento.id; // Ajusta esto según la estructura de tus datos
            option.textContent = departamento.nombre; // Ajusta esto según la estructura de tus datos
            selectDepartamento.appendChild(option);
        });
    };
    

           