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

export default Flores;
