
// Crear instancia de la clase Usuario
$usuarioClass = new Usuario($conexion);


// Ejemplo de obtener usuario por ID
$idUsuario = 10; // Reemplaza esto con el ID deseado
$usuario = $usuarioClass.obtenerUsuarioPorId($idUsuario);

// Imprimir resultados para prueba
console.log($usuario)
// echo json_encode($usuario);

