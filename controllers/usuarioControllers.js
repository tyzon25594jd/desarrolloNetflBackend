// controllers/usuarioController.js
const { insertarUsuario,ObtenerUsuario } = require('../services/usuarioService'); // Importa el servicio para obtener usuarios desde services/usuarioService.js

// Controlador para obtener todos los usuarios
function insertarUsuarioController(req, res) {
 

  insertarUsuario(req.body)
    .then((result) => {
      res.status(200).json({ message: 'Inserción exitosa', result });
    })
    .catch((error) => {
      console.error('Error al insertar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
}
 function obtenerUsuariosController(req, res) {
  ObtenerUsuario()
  .then((result) => {
    res.status(200).json({ message: 'Inserción exitosa', result });
  })
  .catch((error) => {
    console.error('Error al insertar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  });
}

module.exports = { insertarUsuarioController,obtenerUsuariosController };