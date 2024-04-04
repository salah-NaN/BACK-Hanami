import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";

const Propietarios = sequelize.define("propietarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
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
    type: DataTypes.STRING
  },
  poblacion: {
    type: DataTypes.STRING
  },
  comarca: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.INTEGER,
  }
});


export default Propietarios;