

var listaDeProductos =  [
    {
        nombre: 'papel',
        precio : 23
    },
    {
        nombre: 'jabon',
        precio : 25
        
    },
    {
        nombre: 'refresco',
        precio : 25
    }
];


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

var columnaNombre =""
var columnaPrecio = ""
var columnaAccion = ""

var nombreProducto = ""


document.getElementById('buscarProducto').addEventListener('click', (e) =>{

    e.preventDefault()   

    var tbody = document.querySelector('#tablaBuscar tbody');
    tbody.innerHTML = '';

    nombreProducto = document.getElementById('inputBuscar').value

    listaDeProductos.forEach((lista)=>{

        if(nombreProducto == lista.nombre){    

            const row = tbody.insertRow();
            columnaNombre = row.insertCell(0);
            columnaPrecio = row.insertCell(1);         

            columnaNombre.textContent = lista.nombre;
            columnaPrecio.textContent = "$"+lista.precio;

            document.getElementById('inputBuscar').value = ''          

        }else{
            // console.log(false)
        }
    })
})
   
// boton de agregar una nueva compra a mi lista

var nuevoBoton = document.createElement("button")
var listaVenta = []
let content = "";
document.getElementById('agregarCompra').addEventListener('click', ()=>{

    const tablaCompras = document.querySelector('#tablaCompras tbody')

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
        productoExistente.cantidad++   
        console.log(productoExistente.cantidad++)
        
    } else {    

    listaVenta.push(nuevoProducto)
    const nuevaFila = document.createElement("tr");    

    nuevaFila.innerHTML = `
    <td>${nuevoProducto.nombre}</td>
    <td>${nuevoProducto.precio}</td>
    <td>${nuevoProducto.cantidad}</td>
    <td>
        <button class="btn btn-primary" id="botonBorrar">borrar</button>
        <button class="btn btn-primary">editar</button>
    </td>`;

    tablaCompras.appendChild(nuevaFila);

    }

    
});


nuevoBoton.addEventListener('click',()=>{
    alert("boton pulsado")
})

// const botonBorrar = document.getElementById('botonBorrar');
// botonBorrar.addEventListener('click', ()=>{
//     console.log("boton pulsado de borrar")
// })
