class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `Nombre: ${this.nombre}, Precio: $${this.precio}`;
    }
}
