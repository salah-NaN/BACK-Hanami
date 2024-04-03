import { DataTypes } from "sequelize";
import { sequelize } from "./database.js";


const Resenias = sequelize.define("resenias", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  puntaje: {
    type: DataTypes.INTEGER
  },
  resenia: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.DATE
  },
  actividad_id: {
    type: DataTypes.INTEGER
  }

  // AÑADIR FK
});

export default Resenias