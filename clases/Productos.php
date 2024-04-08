<?php
require_once '../conexion/conexion.php';

class Productos extends Conexion {

    public function obtenerProductos() {
        $sql = "SELECT * FROM productos p INNER JOIN departamentos d ON p.idDep = d.idDep;";
        $result = $this->conexion->query($sql);

        $productos = array();
        while ($row = $result->fetch_assoc()) {
            $productos[] = $row;
        }

        return $productos;
    }

    public function obtenerProductoID($id) {
        $sql = "SELECT * FROM productos WHERE idProducto = $id"; // Debes concatenar el valor de $id en la consulta SQL
        $result = $this->conexion->query($sql);
    
        // Verificar si la consulta fue exitosa
        if ($result) {
            // Si hay al menos una fila devuelta, obtén y devuelve los datos
            if ($result->num_rows > 0) {
                $datosProducto = $result->fetch_assoc();
                return $datosProducto;
            } else {
                // Si no se encontraron resultados para el ID dado, devuelve un mensaje de error o un arreglo vacío, según sea necesario
                return ['error' => 'Producto no encontrado'];
            }
        } else {
            // Si hay un error en la consulta SQL, devuelve un mensaje de error o un arreglo vacío, según sea necesario
            return ['error' => 'Error en la consulta SQL'];
        }
    }
    

}
?>
