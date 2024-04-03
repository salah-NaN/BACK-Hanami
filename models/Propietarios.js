import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";

import { PuntosInteres } from "./Puntos_interes.js";
import { Actividades } from "./actividades.js";

const Propietarios = sequelize.define("propietarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  tipo_documento: {
    type: DataTypes.ENUM,
    values: ["DNI", "CIF", "NIF"],
  },
  num_doc: {
    type: DataTypes.STRING,
  },
  localizacion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  }
});


export default Propietarios;