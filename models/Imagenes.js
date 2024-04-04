import { DataTypes } from 'sequelize';
import  sequelize  from "../database/database.js";


const Imagenes = sequelize.define('imagenes', {
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
    tamanio: {
        type: DataTypes.STRING
    },
    punto_interes_id: {
        type: DataTypes.INTEGER
    },
    temporada_id: {
        type: DataTypes.INTEGER
    },
    actividad_id: {
        type: DataTypes.INTEGER
    }
})

export default Imagenes