<?php
require_once '../conexion/conexion.php';

class Departamento extends Conexion {

    public function obtenerDepartamento() {
        $sql = "SELECT * FROM departamentos";
        $result = $this->conexion->query($sql);

        $departamento = array();
        while ($row = $result->fetch_assoc()) {
            $departamento[] = $row;
        }

        return $departamento;
    }

}
?>