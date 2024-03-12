<?php   
require_once 'Productos.php';

$productos = new Productos();
$listaProductos = $productos->obtenerProductos();

echo json_encode($listaProductos);

?>
