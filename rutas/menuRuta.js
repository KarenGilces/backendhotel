import express from 'express';
import { mostrarmenu,crearmenu,editarmenu,eliminarmenu} from '../controladores/menuControlador.js';
import  {verifyToken}  from '../software_intermedio/autenticacion.js';
const rotuer = express.Router();

rotuer.get('/mostrarmenu',mostrarmenu);
rotuer.post('/crearmenu', crearmenu);
rotuer.put('/editarmenu/:id',editarmenu);
rotuer.delete('/eliminarmenu/:id',  eliminarmenu);


export default rotuer;