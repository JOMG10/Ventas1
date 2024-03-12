<?php

class Producto
{
    private $mysqli;

    public function __construct($mysqli)
    {
        $this->mysqli = $mysqli;
    }

    public function agregarUsuario($usuario, $contrasena, $email)
    {
        $sql = "INSERT INTO usuarios(usuario, contrasena, email) VALUES('$usuario', '$contrasena', '$email')";
        $query = $this->mysqli->query($sql);

        return $query ? ['msg' => 'OK'] : ['msg' => 'Error al agregar usuario'];
    }

    public function editarUsuario($idUsuario, $usuario, $contrasena, $email)
    {
        $sql = "UPDATE usuarios SET usuario='$usuario', contrasena='$contrasena', email='$email' WHERE idUsuario='$idUsuario'";
        $query = $this->mysqli->query($sql);

        return $query ? ['msg' => 'OK'] : ['msg' => 'Error al editar usuario'];
    }

    public function obtenerUsuarioPorId($idUsuario)
    {
        $sql = "SELECT * FROM usuarios WHERE idUsuario='$idUsuario'";
        $result = $this->mysqli->query($sql);

        return $result ? $result->fetch_assoc() : null;
    }
}

// // Uso de la clase
// $usuarioClass = new Usuario($mysqli);

// // Ejemplo de agregar un usuario
// $json = file_get_contents("php://input");
// $objEmpleado = json_decode($json);

// $response = $usuarioClass->agregarUsuario($objEmpleado->usuario, $objEmpleado->contrasena, $objEmpleado->email);

// echo json_encode($response);
