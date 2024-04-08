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

    public function obtenerProductoID($codigo) {
        $sql = "SELECT * FROM productos WHERE codigo = $codigo"; // Debes concatenar el valor de $id en la consulta SQL
        $result = $this->conexion->query($sql);
    
        if ($result) {
            if ($result->num_rows > 0) {
                $datosProducto = $result->fetch_assoc();
                return $datosProducto;
            } else {
                return ['error' => 'Error en la consulta SQL'];
            }
        } else {
            return ['error' => 'Error en la consulta SQL'];
        }
    }
    

}
?>
