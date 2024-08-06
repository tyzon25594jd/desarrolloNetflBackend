const express=require('express')
const cors = require('cors');
const {insertarUsuarioController,obtenerUsuariosController}=require('./controllers/usuarioControllers')
const PORT=process.env.PORT || 3000
const app=express()
app.use(cors());

app.use(express.json())
app.post('/insertarUsuario', insertarUsuarioController);
app.get('/obtenerUsuarios',obtenerUsuariosController)
app.listen(PORT,()=>{
console.log("Escuchando")
})