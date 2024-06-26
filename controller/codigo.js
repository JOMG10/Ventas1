
var columnaNombre =""
var columnaPrecio = ""
var columnaAccion = ""
var nombreProducto = ""
var nuevoBoton = document.createElement("button")
var listaVenta = []
let content = "";
totalVenta.textContent = "0.0"
let total = 0;
var tablaCompras = document.querySelector('#tablaCompras tbody')

var listaDeProductos= []

// boton de agrgar un nuevo producto al inventario de productos 
document.getElementById('agregarProducto').addEventListener('click', () =>{
    
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    const nuevoElemento = {
        nombre:nombre,
        precio:precio
    }

    if(!isNaN(precio) ){
        listaDeProductos.push(nuevoElemento)
        alert("producto agregado correctamente")
        document.getElementById('nombre').value = '';
        document.getElementById('precio').value = '';

    }else{
        alert("el elemento es incorrecto");
    }
})

// boton de listar productos 

document.getElementById('listarProductos').addEventListener('click', () =>{
    
    const tbody = document.querySelector('#tablaProductos tbody');
     tbody.innerHTML = '';

     listaDeProductos.forEach((producto, i) => {
        const row = tbody.insertRow(i);
        const cellNombre = row.insertCell(0);
        const cellPrecio = row.insertCell(1);

        cellNombre.textContent = producto.nombre;
        cellPrecio.textContent = producto.precio;       
    });
})

// boton de buscar un producto para poder agregarlo a la lista de compra 

document.getElementById('buscarProducto').addEventListener('click', (e) =>{

    e.preventDefault()   

    var tbody = document.querySelector('#tablaBuscar tbody');
    tbody.innerHTML = '';

    nombreProducto = document.getElementById('inputBuscar').value

    listaDeProductos.forEach((lista)=>{

        if(nombreProducto == ''){
            console.log("no haas insertado ningun producyo")

        }else{
            if(nombreProducto == lista.nombre){    

                const row = tbody.insertRow();
                columnaNombre = row.insertCell(0);
                columnaPrecio = row.insertCell(1);         
    
                columnaNombre.textContent = lista.nombre;
                columnaPrecio.textContent = lista.precio;
    
                document.getElementById('inputBuscar').value = ''          
    
            }else{
                // alert("el producto no existe")
    
            }

        }

        
    })
})
   
// boton de agregar una nueva compra a mi lista

document.getElementById('agregarCompra').addEventListener('click', ()=>{


    const nombreVenta = columnaNombre.textContent
    const precioVenta = columnaPrecio.textContent

    const nuevoProducto = {
        nombre:nombreVenta,
        precio:precioVenta,
        cantidad:1
    } 

    // Buscar si el producto ya está en la lista
    const productoExistente = listaVenta.find(producto => producto.nombre === nombreVenta);



    if (productoExistente) {
         // Si el producto ya existe, actualizar la cantidad
         productoExistente.cantidad++;

         // Actualizar la cantidad en la tabla
         const filas = tablaCompras.querySelectorAll('tr');
         filas.forEach(fila => {
             const nombreEnFila = fila.querySelector('td:first-child').textContent;
             if (nombreEnFila === nombreVenta) {
                 // Actualizar la cantidad en la fila correspondiente
                 fila.querySelector('td:nth-child(3)').textContent = productoExistente.cantidad;
             }
         });
        
    } else {    

    listaVenta.push(nuevoProducto)
    const nuevaFila = document.createElement("tr");   

    nuevaFila.innerHTML += `
    <td>${nuevoProducto.nombre}</td>
    <td>${nuevoProducto.precio}</td>
    <td>${nuevoProducto.cantidad}</td>
    <td>
    <button class="btn btn-primary" onclick="borrar(this)" value="Borrar">borrar</button>
    <button class="btn btn-primary">editar</button>
    </td>`;     

    tablaCompras.appendChild(nuevaFila);    

   }

   calcularTotal(parseFloat(nuevoProducto.precio)); 

});

const deleteProducto = () =>{
    console.log("dio click en el booton")

}

const calcularTotal = (precio)=>{
      total += precio;    
      totalVenta.textContent = total.toFixed(2); 
}

