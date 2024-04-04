import { DataTypes } from "sequelize";
import  sequelize  from "../database/database.js";

console.log(sequelize)

const Actividades = sequelize.define("actividades", {
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
  categoria: {
    type: DataTypes.ENUM,
    values: ["Bici", "Senderismo"],
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  },
  latitud: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitud: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poblacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comarca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  temporada_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});
export default Actividades