import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";

import Propietarios from "./Propietarios.js";
import Imagenes from "./Imagenes.js";
import Temporadas from "./Temporadas.js";


const PuntosInteres = sequelize.define("puntos_interes", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  latitud: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false,
  },
  longitud: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poblacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comarca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  propietario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM,
    values: ["Cerezo", "Olivo", "Viña", "Lavanda"],
  },
});

Propietarios.hasMany(PuntosInteres, {
  foreignKey: "punto_interes_id",
  sourceKey: "id",
});
export default PuntosInteres;
