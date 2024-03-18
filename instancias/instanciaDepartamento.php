<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

require_once '../conexion/Conexion.php';
require_once '../clases/Departamento.php';

$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

if ($accion === 'obtenerDepartamento') {
    $departamento = new Departamento();
    $resultado = $departamento->obtenerDepartamento();
    echo json_encode($resultado);

}else {
    echo json_encode(['msg' => 'Acción no válida']);
}

?>

