
// document.getElementById('calcular').addEventListener('click',()=>{
//     const numero1= parseFloat(document.getElementById('numero1').value)
//     const numero2= parseFloat(document.getElementById('numero2').value)

//     const suma = numero1 + numero2

//     document.getElementById('resultado').innerText = suma

// })

var listaDeProductos = [];
document.getElementById('agregarProducto').addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value
    const precio = document.getElementById('precio').value

    listaDeProductos.push(nombre,precio)


})

document.getElementById('listarProducto').addEventListener('click', ()=>{

    for(var i= 0; i < listaDeProductos.length; i++){

        const lista = listaDeProductos[i]
    
        document.getElementById('nombreProducto').textContent = lista
        document.getElementById('precioProducto').textContent = lista
    
        console.log(lista)
    }
    
})

