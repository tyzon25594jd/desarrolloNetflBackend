const {pool}=require('../database/conexionDB');


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
function ObtenerUsuario() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM usuario';
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener conexión del pool:', err);
        reject(err);
        return;
      }

      connection.query(sql,(error, results) => {
        // Liberar la conexión al pool
        connection.release();

        if (error) {
          console.error('Error al ejecutar el procedimiento almacenado:', error);
          reject(error);
          return;
        }

       
          resolve(results);
        
      });
    });
  });
}

function insertarUsuario(datosUsuario) {
  return new Promise((resolve, reject) => {
    const sql = 'CALL insertOrUpdateUsuario(?, ?, ?, ?, @parametro_salida)';
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener conexión del pool:', err);
        reject(err);
        return;
      }

      connection.query(sql, [datosUsuario.id, datosUsuario.nombre, datosUsuario.apellido, datosUsuario.correo], (error, results) => {
        // Liberar la conexión al pool
        connection.release();

        if (error) {
          console.error('Error al ejecutar el procedimiento almacenado:', error);
          reject(error);
          return;
        }

        // Obtener el valor del parámetro de salida
        pool.query('SELECT @parametro_salida as out_param', (error, results1) => {
          if (error) {
            console.error('Error al obtener el parámetro de salida:', error);
            reject(error);
            return;
          }

          const parametroSalida = results1[0].out_param;
          console.log('Valor del parámetro de salida:', parametroSalida);

          resolve(parametroSalida);
        });
      });
    });
  });
}


module.exports = { insertarUsuario,ObtenerUsuario };