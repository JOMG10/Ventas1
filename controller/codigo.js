

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


document.getElementById('buscarProducto').addEventListener('click', (e) =>{

    e.preventDefault()   

    var tbody = document.querySelector('#tablaBuscar tbody');
    tbody.innerHTML = '';

    const nombreProducto = document.getElementById('inputBuscar').value

    listaDeProductos.forEach((lista)=>{

        if(nombreProducto == lista.nombre){    

            const row = tbody.insertRow();
            columnaNombre = row.insertCell(0);
            columnaPrecio = row.insertCell(1);
            nuevoBoton.textContent = "Eliminar"
           


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

document.getElementById('agregarCompra').addEventListener('click', ()=>{

    const tbody = document.querySelector('#tablaCompras tbody')

    const row = tbody.insertRow()
    const columNombre = row.insertCell(0);
    const columPrecio = row.insertCell(1);
    const columAccion = row.insertCell(2);
    nuevoBoton.textContent = "Eliminar"

    columNombre.textContent = columnaNombre.textContent
    columPrecio.textContent = columnaPrecio.textContent
    columAccion.appendChild(nuevoBoton)
    console.log(columAccion.appendChild(nuevoBoton))

})

nuevoBoton.addEventListener('click',()=>{
    alert("boton pulsado")
})

const crearBoton = (( ) =>{
    const nuevoBoton = document.createElement("button")
    nuevoBoton.textContent = "mi boton"
})

