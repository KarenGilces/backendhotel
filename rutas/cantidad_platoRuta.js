import express from 'express';
import { obtenercantidadplato,crearcantidadplato,editarcantidadplato,eliminarcantidadplato} from '../controladores/cantidad_platoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarcantidadplato',obtenercantidadplato);
rotuer.post('/crearcantidadplato',crearcantidadplato);
rotuer.put('/editarcantidadplato/:id',editarcantidadplato);
rotuer.delete('/eliminarcantidadplato/:id',  eliminarcantidadplato);


export default rotuer;