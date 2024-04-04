import { DataTypes } from 'sequelize';
import { sequelize } from './database.js';

const PuntosInteres = sequelize.define('puntos_interes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
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
    propietario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM,
        values: ['Cerezo', 'Olivo', 'Viña', 'Lavanda']
    }

})

export default PuntosInteres