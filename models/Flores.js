import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import PuntosInteres from "./Puntos_interes.js";

const Flores = sequelize.define("flores", {
  especie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre_cientifico: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});
Flores.belongsToMany(PuntosInteres, {
  through: "NM_Flor_Punto_interes",
  foreignKey: "flor_id",
});
PuntosInteres.belongsToMany(Flores, {
  through: "NM_Flor_Punto_interes",
  foreignKey: "punto_interes_id",
  onDelete: "CASCADE",
  hooks: true,
});
export default Flores;
