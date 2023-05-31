import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";

export const pesoModelo = sequelize.define("peso",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
},
{
    timestamps:false
}

);
  