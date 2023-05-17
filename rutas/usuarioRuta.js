import express from 'express';
import { obtenerusuario,crearUsuario,editarusuario,eliminarusuario} from '../controladores/usuarioControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarusuario', obtenerusuario);
rotuer.post('/crearUsuario', crearUsuario);
rotuer.put('/editarusuario/:id', editarusuario);
rotuer.delete('/eliminarusuario/:id',  eliminarusuario);


export default rotuer;