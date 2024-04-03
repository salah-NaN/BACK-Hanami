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
        type: DataTypes.STRING
    },
    imgs: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    descripcion : {
        type: DataTypes.STRING
    },
    ubicacion : {
        type: DataTypes.STRING
    },
    usuario_id : {
        type: DataTypes.INTEGER
    },
    Tipo : {
        type: DataTypes.ENUM,
        values: ['Punto de interés', 'Sitio turístico']
    }
    // AÑADIR FK

})

export default PuntosInteres