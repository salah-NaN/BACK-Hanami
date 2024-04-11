import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import Actividades from "./Actividades.js";
import Imagenes from "./Imagenes.js";
import PuntosInteres from "./Puntos_interes.js";

const Temporadas = sequelize.define("temporadas", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  punto_interes_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Temporadas;
