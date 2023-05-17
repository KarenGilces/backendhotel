import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { tipo_alimentoModelo } from "./tipo_alimentoModelo.js";

export const alimentoModelo = sequelize.define("alimento",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
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
  

  tipo_alimentoModelo.hasMany(alimentoModelo, { foreignKey: "id_tipoalimento" });
  alimentoModelo.belongsTo(tipo_alimentoModelo, { foreignKey: "id_tipoalimento" });


