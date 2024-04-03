import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
import { PuntosInteres } from "./Puntos_interes.js";
import { Actividades } from "./actividades.js";

const Temporada = sequelize.define("temporada", {
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
/*
PuntosInteres.hasMany(Temporada, {
  foreignKey: "temporada_id",
  sourceKey: "id",
});

Actividades.hasMany(Temporada, {
  foreignKey: "actividad_id",
  sourceKey: "id",
});
*/
export default Temporada;
