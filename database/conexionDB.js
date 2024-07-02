// Importa el mÃ³dulo mysql
// conexion/conexion.js
const mysql = require('mysql');

// Función para obtener la conexión a MySQL
function obtenerConexion() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ejemplo'
    });

    // Establecer la conexión
    connection.connect((err) => {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error de conexión
      } else {
        console.log('Conexión a MySQL establecida con el id ' + connection.threadId);
        resolve(connection); // Resolver la promesa con la conexión establecida
      }
    });
  });
}

module.exports = { obtenerConexion };