import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import Resenias from "./Resenias.js";

const Clientes = sequelize.define("clientes", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Resenias.belongsTo(Clientes, {foreignKey: "cliente_id"});

export default Clientes;
