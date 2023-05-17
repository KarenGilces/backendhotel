import express from 'express';
import { obteneralimento,crearalimento,editaralimento,eliminaralimento} from '../controladores/alimentoControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostraralimento',obteneralimento);
rotuer.post('/crearalimento',crearalimento);
rotuer.put('/editaralimento/:id',editaralimento);
rotuer.delete('/eliminaralimento/:id',  eliminaralimento);


export default rotuer;