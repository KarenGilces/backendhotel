import { DataTypes } from "sequelize";
import { sequelize } from "../base_de_datos/conexion.js";
import { tipo_menuModelo } from "./tipo_menuModelo.js";
import { cantidad_platoModelo } from "./cantidad_platoModelo.js";
export const menuModelo = sequelize.define("menus",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      habilitado: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
    },
    {
      timestamps: false,
    }
  ); 
 //relacion entre la tabla tipo menu y menu
  tipo_menuModelo.hasMany(menuModelo, { foreignKey: "id_tipomenu" });
  menuModelo.belongsTo(tipo_menuModelo, { foreignKey: "id_tipomenu" });

//relacion entre la tabla cantidad plato y menu
cantidad_platoModelo.hasMany(menuModelo, { foreignKey: "id_cantidadplato" });
  menuModelo.belongsTo(cantidad_platoModelo, { foreignKey: "id_cantidadplato" });