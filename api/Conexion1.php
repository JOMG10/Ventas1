<?php

class Conexion
{
    private static $mysqli;

    public static function obtenerConexion()
    {
        if (!self::$mysqli) {
            // Configura los detalles de tu conexión aquí
            $host = 'localhost';
            $usuario = 'root';
            $contrasena = '';
            $baseDeDatos = 'pruebas';

            self::$mysqli = new mysqli($host, $usuario, $contrasena, $baseDeDatos);

            if (self::$mysqli->connect_error) {
                die('Error de conexión: ' . self::$mysqli->connect_error);
            }
        }

        return self::$mysqli;
    }
}