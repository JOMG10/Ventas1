

var listaDeProductos =  [
    {
        nombre: 'jose',
        precio : 23
    },
    {
        nombre: 'juan',
        precio : 25
    },
    {
        nombre: 'juan',
        precio : 25
    }
];

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

document.addEventListener('DOMContentLoaded', () =>{

    
    var tbody = document.querySelector('#tablaProductos tbody');
    tbody.innerHTML = '';

    listaDeProductos.forEach((producto, i) => {
        const row = tbody.insertRow(i);
        const cellNombre = row.insertCell(0);
        const cellPrecio = row.insertCell(1);

        cellNombre.textContent = producto.nombre;
        cellPrecio.textContent = producto.precio;
       
    }); 

})

function listarProductos() {
    const tbody = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
    
    listaDeProductos.forEach((producto, i) => {
        const row = tbody.insertRow(i);
        const cellNombre = row.insertCell(0);
        const cellPrecio = row.insertCell(1);

        cellNombre.textContent = producto.nombre;
        cellPrecio.textContent = producto.precio;
    });
}
   


