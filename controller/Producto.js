// const db = require('../nexion/db');

class Producto {
  constructor() {
    this.productos = [
      {
        codigo: 2253,
        nombre: "papel",
        precio: 30,
        cantidad: 60,
        existencia: 2
      },
      {
        codigo: 2253,
        nombre: "jabon",
        precio: 50,
        cantidad: 50,
        existencia:3
      },
    ];
  }

  agregarProductos(nombre, precio, codigo, cantidad) {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      codigo: codigo,
    };

    this.productos.push(nuevoProducto);

    console.log("Producto agregado:", nuevoProducto);
  }

  obtenerProductos() {
    return this.productos;
  }
}

//   static obtenerTodos(callback) {
//     const sql = 'SELECT * FROM Productos';
//     db.query(sql, callback);
//   }


// console.log('Todos los productos:', productosManager.obtenerProductos());

// const productoActualizado = productosManager.actualizarProducto(1, 'Producto Actualizado', 25.99);
// console.log('Todos los productos después de la actualización:', productosManager.obtenerProductos());

// productosManager.eliminarProducto(2);
// console.log('Todos los productos después de la eliminación:', productosManager.obtenerProductos());


// producto.js
// const db = require('./db');

// class Producto {
//   constructor() {}

//   static obtenerTodos(callback) {
//     const sql = 'SELECT * FROM Productos';
//     db.query(sql, callback);
//   }

//   static obtenerPorId(id, callback) {
//     const sql = 'SELECT * FROM Productos WHERE id = ?';
//     db.query(sql, [id], callback);
//   }

//   static agregarProducto(producto, callback) {
//     const sql = 'INSERT INTO Productos SET ?';
//     db.query(sql, producto, callback);
//   }

//   static actualizarProducto(id, nuevoProducto, callback) {
//     const sql = 'UPDATE Productos SET ? WHERE id = ?';
//     db.query(sql, [nuevoProducto, id], callback);
//   }

//   static eliminarProducto(id, callback) {
//     const sql = 'DELETE FROM Productos WHERE id = ?';
//     db.query(sql, [id], callback);
//   }
// }

// module.exports = Producto;
