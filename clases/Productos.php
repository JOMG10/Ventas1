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

}
?>
