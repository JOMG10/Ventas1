<?php
require_once 'Conexion.php';
require_once 'Productos.php';

$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

if ($accion === 'obtenerProductos') {
    $productos = new Productos();
    $listaProductos = $productos->obtenerProductos();
    echo json_encode($listaProductos);
} elseif ($accion === 'agregarUsuario') {
    // Obtén los datos del formulario o solicitud AJAX
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $email = $_POST['email'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->agregarUsuario($usuario, $contrasena, $email);
    echo json_encode($resultado);
} elseif ($accion === 'editarUsuario') {
    // Obtén los datos del formulario o solicitud AJAX
    $idUsuario = $_POST['idUsuario'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $email = $_POST['email'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->editarUsuario($idUsuario, $usuario, $contrasena, $email);
    echo json_encode($resultado);
} elseif ($accion === 'borrarUsuario') {
    // Obtén el ID del usuario a borrar
    $idUsuario = $_GET['idUsuario'];

    $usuarios = new Usuarios();
    $resultado = $usuarios->borrarUsuario($idUsuario);
    echo json_encode($resultado);
} else {
    echo json_encode(['msg' => 'Acción no válida']);
}
?>
