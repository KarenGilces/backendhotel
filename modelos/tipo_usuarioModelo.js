import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";

export const tipo_usuarioModelo = sequelize.define("tipo_usuarios",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    tipo:{
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
  