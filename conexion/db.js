// db.js
const mysql = require('mysql');
const config = require('./config'); // Archivo de configuración con datos de conexión

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

const producto ="SELECT * FROM productos";
connection.query(producto, function(error, lista){
  if(error){
    throw(error)
  }else{

    console.log(lista)
  }
})

connection.end()
