import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { platoModelo } from "./platoModelo.js";

export const cantidad_platoModelo = sequelize.define("cantidad_platos",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  
  platoModelo.hasMany(cantidad_platoModelo, { foreignKey: "id_plato" });
  cantidad_platoModelo.belongsTo(platoModelo, { foreignKey: "id_plato" });