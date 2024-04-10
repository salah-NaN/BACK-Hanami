import {DataTypes} from "sequelize";
import sequelize from "../database/database.js";
import Temporadas from "./Temporadas.js";
import Imagenes from "./Imagenes.js";
import Resenias from "./Resenias.js";

const Actividades = sequelize.define("actividades", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.ENUM,
    values: ["Bici", "Senderismo"],
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
  temporada_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
Actividades.belongsTo(Temporadas, {foreignKey: "temporada_id"});
Imagenes.hasMany(Actividades, {
  foreignKey: "actividad_id",
  onDelete: "CASCADE",
  hooks: true,
});
Temporadas.hasMany(Actividades, {
  foreignKey: "temporada_id",
  onDelete: "CASCADE",
  hooks: true,
});
Resenias.belongsTo(Actividades, {foreignKey: "actividad_id"});

Resenias.hasMany(Actividades, {
  foreignKey: "actividad_id",
  onDelete: "CASCADE",
  hooks: true,
});

export default Actividades;
