import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import PuntosInteres from "./Puntos_interes.js";
import Temporadas from "./Temporadas.js";

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



Flores.hasMany(Temporadas, {
  foreignKey: "flor_id",
})
Temporadas.belongsTo(Flores, {
  foreignKey: "flor_id",
})
export default Flores;
