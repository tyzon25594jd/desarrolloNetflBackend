// controllers/usuarioController.js
const { obtenerUsuarios } = require('../services/usuarioService'); // Importa el servicio para obtener usuarios desde services/usuarioService.js

// Controlador para obtener todos los usuarios
async function obtenerUsuariosController(req, res) {
  try {
    const usuarios = await obtenerUsuarios(); // Utiliza el servicio para obtener usuarios
    res.json(usuarios);
    // Envía las filas obtenidas como respuesta JSON
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports={obtenerUsuariosController}