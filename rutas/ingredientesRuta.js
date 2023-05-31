import express from 'express';
import { obteneringredientes,crearingredientes,editaringredientes,eliminaringredientes} from '../controladores/ingredientesControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostraringredientes', obteneringredientes);
rotuer.post('/crearingredientes', crearingredientes);
rotuer.put('/editaringredientes/:id', editaringredientes);
rotuer.delete('/eliminaringredientes/:id',  eliminaringredientes);


export default rotuer;