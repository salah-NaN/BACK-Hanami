import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";
const Clientes = sequelize.define("clientes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  }
  // AÑADIR FK
});

export default Clientes