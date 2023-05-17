
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';

import rutatipo_usuario from './rutas/tipo_usuarioRuta.js';
import  rutausuario from './rutas/usuarioRuta.js';
import  rutapersona from './rutas/personaRuta.js';
import  rutaplato from './rutas/platoRuta.js';
import  rutatipo_menu from './rutas/tipo_menuRuta.js';
import  rutacantidad_plato from './rutas/cantidad_platoRuta.js';
import  rutamenu from './rutas/menuRuta.js';
import  rutacredito from './rutas/creditoRuta.js';
import  rutapeso from './rutas/pesoRuta.js';
import  rutatipo_alimento from './rutas/tipo_alimentoRuta.js';
import  rutaalimento from './rutas/alimentoRuta.js';
import  rutaingredientes from './rutas/ingredientesRuta.js';


import { sequelize } from "./base_de_datos/conexion.js";

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', rutatipo_usuario);
app.use('/api',  rutausuario);
app.use('/api', rutapersona);
app.use('/api', rutaplato);
app.use('/api', rutatipo_menu);
app.use('/api', rutacantidad_plato);
app.use('/api', rutamenu);
app.use('/api', rutacredito);
app.use('/api', rutapeso);
app.use('/api', rutatipo_alimento);
app.use('/api', rutaalimento);
app.use('/api', rutaingredientes);


const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('la Base de datos esta correctamente conectada.');
        await sequelize.sync({ force: false })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();

