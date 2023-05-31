import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";

export const personaModelo = sequelize.define("persona",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      foto: {
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
  