

class Producto {
   
    constructor(){
        this.productos =[
            {
                nombre:"papel",
                precio:30,
                codigo:60
            },
            {
                nombre:"jabon",
                precio:50,
                codigo:50
            },
        ]
    }

    agregarProductos(nombre, precio, codigo){
        const nuevoProducto={
            nombre:nombre,
            precio:precio,
        codigo:codigo}

        this.productos.push(nuevoProducto)

        console.log('Producto agregado:', nuevoProducto);
    }

    obtenerProductos() {
        return this.productos;
    }

}







   

    // console.log('Todos los productos:', productosManager.obtenerProductos());

    // const productoActualizado = productosManager.actualizarProducto(1, 'Producto Actualizado', 25.99);
    // console.log('Todos los productos después de la actualización:', productosManager.obtenerProductos());

    // productosManager.eliminarProducto(2);
    // console.log('Todos los productos después de la eliminación:', productosManager.obtenerProductos());