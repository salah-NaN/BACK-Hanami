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
  }
});


PuntosInteres.belongsTo(Propietarios, {
  foreignKey: "propietario_id"
})

export default PuntosInteres;
