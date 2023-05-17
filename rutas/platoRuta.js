import express from 'express';
import { obtenerplatos,crearplatos,editarplatos,eliminarplatos} from '../controladores/platoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarplato',obtenerplatos);
rotuer.post('/crearplato', crearplatos);
rotuer.put('/editarplato/:id',editarplatos);
rotuer.delete('/eliminarplato/:id',  eliminarplatos);


export default rotuer;