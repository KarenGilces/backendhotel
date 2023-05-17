import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { platoModelo } from "./platoModelo.js";
import { alimentoModelo } from "./alimentoModelo.js";
import { pesoModelo } from "./pesoModelo.js";

export const ingredientesModelo = sequelize.define("ingredientes",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
  



  platoModelo.hasMany(ingredientesModelo, { foreignKey: "id_plato" });
  ingredientesModelo.belongsTo(platoModelo, { foreignKey: "id_plato" });


  alimentoModelo.hasMany(ingredientesModelo, { foreignKey: "id_alimento" });
  ingredientesModelo.belongsTo(alimentoModelo, { foreignKey: "id_alimento" });

  pesoModelo.hasMany(ingredientesModelo, { foreignKey: "id_peso" });
  ingredientesModelo.belongsTo(pesoModelo, { foreignKey: "id_peso" });