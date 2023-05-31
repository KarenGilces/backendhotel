import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { platoModelo } from "./platoModelo.js";
import { personaModelo } from "./personaModelo.js";

export const creditoModelo = sequelize.define("credito",{
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
      pagado: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
    },
    {
      timestamps: false,
    }
  );
  

  personaModelo.hasMany(creditoModelo, { foreignKey: "id_persona" });
  creditoModelo.belongsTo(personaModelo, { foreignKey: "id_persona" });

  platoModelo.hasMany(creditoModelo, { foreignKey: "id_plato" });
  creditoModelo.belongsTo(platoModelo, { foreignKey: "id_plato" });
