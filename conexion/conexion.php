<?php
class Conexion {
    private $host = "tu_host";
    private $usuario = "tu_usuario";
    private $contrasena = "tu_contrasena";
    private $baseDatos = "tu_base_de_datos";

    protected $conexion;

    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->usuario, $this->contrasena, $this->baseDatos);

        if ($this->conexion->connect_error) {
            die("Error de conexión: " . $this->conexion->connect_error);
        }
    }
}
?>
