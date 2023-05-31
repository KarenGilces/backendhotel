import express from 'express';
import { obtenerPersona,crearPersona,editarpersona,eliminarPersona} from '../controladores/personaControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarpersona', obtenerPersona);
rotuer.post('/crearPersona', crearPersona);
rotuer.put('/editarpersona/:id', editarpersona);
rotuer.delete('/eliminarPersona/:id',  eliminarPersona);


export default rotuer;