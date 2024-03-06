const inputBuscar= document.getElementById("inputBuscar");
const buscarProducto=document.getElementById("buscarProducto")

const productos = new Producto();
const listaVenta =[]
const nuevoProducto = {} 



// const btnAgregarProducto= document.getElementById("")

// productos.agregarProductos("jabon",25,2020)
const obtenerProductos = productos.obtenerProductos()

document.getElementById('buscarProducto').addEventListener('click', (e)=>{
  e.preventDefault()

  const inputBusca = inputBuscar.value

  obtenerProductos.forEach((element)=>{

   if(inputBusca ===element.nombre){

    const codigo = element.codigo
    const nombre =element.nombre
    const precio = element.precio
    const cantidad = element.cantidad
    
    agregarfila(codigo, nombre, precio,cantidad)
  }
 }) 

 })

const agregarfila = (codigo, nombre, precio,cantidad)=>{
  var tbody = document.querySelector('#tablaProductos tbody')
  const row = tbody.insertRow();
                columnaCodigo = row.insertCell(0);
                columnaNombre = row.insertCell(1);
                columnaPrecio = row.insertCell(2);  
                columnaCantidad = row.insertCell(3);

                columnaCodigo.textContent = codigo    
                columnaNombre.textContent = nombre;
                columnaPrecio.textContent = precio;
                columnaCantidad.textContent = cantidad
    
                document.getElementById('inputBuscar').value = ''          


}