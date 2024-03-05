class Producto {
   
    constructor(){
        this.productos =[]
    }

    agregarProductos(nombre, precio, codigo){
        const nuevoProducto={
            nombre:nombre,
            precio:precio,
        codigo:codigo}

        this.productos.push(nuevoProducto)

        console.log('Producto agregado:', nuevoProducto);
    }

}

   

    // console.log('Todos los productos:', productosManager.obtenerProductos());

    // const productoActualizado = productosManager.actualizarProducto(1, 'Producto Actualizado', 25.99);
    // console.log('Todos los productos después de la actualización:', productosManager.obtenerProductos());

    // productosManager.eliminarProducto(2);
    // console.log('Todos los productos después de la eliminación:', productosManager.obtenerProductos());