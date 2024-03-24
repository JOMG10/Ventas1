<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

require_once '../conexion/Conexion.php';
require_once '../clases/Productos.php';
require_once '../clases/Departamento.php';

$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

if ($accion === 'obtenerProductos') {
    $productos = new Productos();
    $listaProductos = $productos->obtenerProductos();
    echo json_encode($listaProductos);
    

} elseif ($accion === 'agregarUsuario') {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $email = $_POST['email'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->agregarUsuario($usuario, $contrasena, $email);
    echo json_encode($resultado);
} elseif ($accion === 'editarUsuario') {

    $idUsuario = $_POST['idUsuario'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $email = $_POST['email'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->editarUsuario($idUsuario, $usuario, $contrasena, $email);
    echo json_encode($resultado);
} elseif ($accion === 'borrarUsuario') {

    $idUsuario = $_GET['idUsuario'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->borrarUsuario($idUsuario);
    echo json_encode($resultado);
} else {
    echo json_encode(['msg' => 'Acción no válida']);
}

?>

