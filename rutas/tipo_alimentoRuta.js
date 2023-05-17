import express from 'express';
import { obtenertipo_alimento,creartipo_alimento,editartipo_alimento,eliminartipo_alimento} from '../controladores/tipo_alimentoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrartipo_alimento',obtenertipo_alimento);
rotuer.post('/creartipo_alimento', creartipo_alimento);
rotuer.put('/editartipo_alimento/:id',editartipo_alimento);
rotuer.delete('/eliminartipo_alimento/:id',  eliminartipo_alimento);


export default rotuer; 