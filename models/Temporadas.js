import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
import { PuntosInteres } from "./Puntos_interes.js";
import { Actividades } from "./actividades.js";

const Temporadas = sequelize.define("temporada", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  temporada: {
    type: DataTypes.STRING,
  },
  fecha_1: {
    type: DataTypes.DATE,
  },
  fecha_2: {
    type: DataTypes.DATE,
  },
  comments: {
    type: DataTypes.STRING,
  }

  // AÑADIR FK
});

export default Temporadas;
