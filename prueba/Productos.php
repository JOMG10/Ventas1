<?php
require_once 'conexion.php';

class Productos extends Conexion {
    public function obtenerProductos() {
        $sql = "SELECT * FROM usuarios";
        $result = $this->conexion->query($sql);

        $productos = array();
        while ($row = $result->fetch_assoc()) {
            $productos[] = $row;
        }

        return $productos;
    }

    // Agrega funciones para insertar, actualizar y eliminar productos...
}
?>
