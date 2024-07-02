const {obtenerConexion}=require('../database/conexionDB')

async function obtenerUsuarios() {
    try {
      const connection = await obtenerConexion(); // Obtiene la conexión utilizando la función obtenerConexion
      const consulta = 'SELECT * FROM usuario';
      return new Promise((resolve, reject) => {
        connection.query(consulta, (err, filas) => {
          connection.end(); // Cierra la conexión después de la consulta
          if (err) {
            console.error('Error al ejecutar consulta:', err);
            reject(err);
          } else {
            resolve(filas); // Resuelve la promesa con las filas obtenidas
          }
        });
      });
    } catch (error) {
      console.error('Error al conectar a MySQL:', error);
      throw error; // Relanza el error para manejarlo en un contexto superior
    }
  }

  module.exports={obtenerUsuarios}