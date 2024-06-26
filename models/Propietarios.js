import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import PuntosInteres from "./Puntos_interes.js";


const Propietarios = sequelize.define("propietarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_documento: {
    type: DataTypes.ENUM,
    values: ["DNI", "CIF", "NIF"],
  },
  num_doc: {
    type: DataTypes.STRING,
  },
  latitud: {
    type: DataTypes.DECIMAL(10, 8),
  },
  longitud: {
    type: DataTypes.DECIMAL(11, 8),
  },
  ubicacion: {
    type: DataTypes.STRING,
  },
  poblacion: {
    type: DataTypes.STRING,
  },
  comarca: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  entidad: {
    type: DataTypes.STRING,
  }
});

export default Propietarios;
