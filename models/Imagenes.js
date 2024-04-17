import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import PuntosInteres from "./Puntos_interes.js";
import Temporadas from "./Temporadas.js";
import Actividades from "./Actividades.js";

const Imagenes = sequelize.define("imagenes", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tamanio: {
    type: DataTypes.STRING,
  },
  punto_interes_id: {
    type: DataTypes.INTEGER,
  },
  temporada_id: {
    type: DataTypes.INTEGER,
  },
  actividad_id: {
    type: DataTypes.INTEGER,
  },
});
PuntosInteres.hasMany(Imagenes, {foreignKey: "punto_interes_id"});

export default Imagenes;
