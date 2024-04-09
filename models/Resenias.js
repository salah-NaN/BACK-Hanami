import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";

const Resenias = sequelize.define("resenias", {
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  resenia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  actividad_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Resenias;
