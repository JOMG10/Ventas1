


const inputBuscar= document.getElementById("inputBuscar");
const buscarProducto=document.getElementById("buscarProducto")

const productos = new Producto()
const listaVenta =[]
const nuevoProducto = {} 

// const btnAgregarProducto= document.getElementById("")

// productos.agregarProductos("jabon",25,2020)
const obtenerProductos = productos.obtenerProductos()


// boton de agregar una nueva compra a mi lista


document.getElementById('buscarProducto').addEventListener('click', (e)=>{
  e.preventDefault()

  const inputBusca = inputBuscar.value

 obtenerProductos.forEach((element)=>{

  if(inputBusca ===element.nombre){

    const nombre =element.nombre
    const precio = element.precio
    agregarfila(nombre, precio)
  }
 }) 

 })

const agregarfila = (nombre, precio)=>{
  var tbody = document.querySelector('#tablaProductos tbody')
  const row = tbody.insertRow();
                columnaNombre = row.insertCell(0);
                columnaPrecio = row.insertCell(1);         
    
                columnaNombre.textContent = nombre;
                columnaPrecio.textContent = precio;
    
                document.getElementById('inputBuscar').value = ''          


}