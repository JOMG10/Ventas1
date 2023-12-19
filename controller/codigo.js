
// document.getElementById('calcular').addEventListener('click',()=>{
//     const numero1= parseFloat(document.getElementById('numero1').value)
//     const numero2= parseFloat(document.getElementById('numero2').value)

//     const suma = numero1 + numero2

//     document.getElementById('resultado').innerText = suma

// })

var listaDeProductos =  [
    {
        nombre: 'jose',
        precio : 23
    },
    {
        nombre: 'juan',
        precio : 25
    }
];
document.getElementById('agregarProducto').addEventListener('click', () =>{
    var nombre = document.getElementById('nombre').value
    var precio = document.getElementById('precio').value

    listaDeProductos.push(nombre,precio)
})

document.getElementById('listarProducto').addEventListener('click', ()=>{

    for(var i= 0; i < listaDeProductos.length; i++){

        const lista = listaDeProductos[i]
    
        document.getElementById('nombreProducto').textContent = lista.nombre
        document.getElementById('precioProducto').textContent = lista.precio
    
        console.log(lista.nombre, lista.precio)
    }
    
})

