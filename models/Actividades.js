import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
const Actividades = sequelize.define("actividades", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING
  },
  categoria: {
    type: DataTypes.ENUM,
    values: ["Bici"],
  },
  descripcion: {
    type: DataTypes.STRING
  },
  coordenadas: {
    type: DataTypes.STRING
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
  usuario_id: {
    type: DataTypes.INTEGER
  },
  id_temporada: {
    type: DataTypes.INTEGER
  }

  // AÑADIR FK
});
export default Actividades