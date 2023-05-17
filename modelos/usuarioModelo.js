import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { tipo_usuarioModelo } from "./tipo_usuarioModelo.js";
import { personaModelo } from "./personaModelo.js";
export const usuarioModelo = sequelize.define("usuarios",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
    },
    {
      timestamps: false,
    }
  ); 
 //relacion entre la tabla tipo persona y usuario 
  tipo_usuarioModelo.hasMany(usuarioModelo, { foreignKey: "id_tipousuario" });
  usuarioModelo.belongsTo(tipo_usuarioModelo, { foreignKey: "id_tipousuario" });

//relacion entre la tabla persona y usuario
personaModelo.hasMany(usuarioModelo, { foreignKey: "id_persona" });
  usuarioModelo.belongsTo(personaModelo, { foreignKey: "id_persona" });