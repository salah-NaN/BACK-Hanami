import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';

const Flores = sequelize.define('flores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    especie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_cientifico: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

export default Flores