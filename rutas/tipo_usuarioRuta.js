import express from 'express';
import { obtenerTipodeusuarios,creartipo_usuario,editarTipodeusuarios,eliminarTipodeusuarios} from '../controladores/tipo_usuarioControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrartipo_usuario',obtenerTipodeusuarios);
rotuer.post('/creartipo_usuario', creartipo_usuario);
rotuer.put('/editartipo_usuario/:id',editarTipodeusuarios);
rotuer.delete('/eliminartipo_usuario/:id',  eliminarTipodeusuarios);


export default rotuer;