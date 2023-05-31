import express from 'express';
import { obtenerpeso,crearpeso,editarpeso,eliminarpeso} from '../controladores/pesoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarpeso',obtenerpeso);
rotuer.post('/crearpeso', crearpeso);
rotuer.put('/editarpeso/:id',editarpeso);
rotuer.delete('/eliminarpeso/:id',  eliminarpeso);


export default rotuer;