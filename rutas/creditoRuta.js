import express from 'express';
import { obtenercredito,crearcredito,editarcredito,eliminarcredito} from '../controladores/creditoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarcredito', obtenercredito);
rotuer.post('/crearcredito', crearcredito);
rotuer.put('/editarcredito/:id', editarcredito);
rotuer.delete('/eliminarcredito/:id',  eliminarcredito);


export default rotuer;