import { Actividades } from './Actividades'
import { Clientes } from './Clientes'
import { Propietarios } from './Propietarios'
import { Puntos_interes } from './Puntos_interes'
import { Resenias } from './Resenias'
import { Temporadas } from './Temporadas'
import { Flores } from './Flores'
import { Imagenes } from './Imagenes'

// seccion de lo que tiene el propietario

    // relacion 1 a N
    Propietarios.hasMany(Puntos_interes, { foreignKey: 'propietario_id' })
    Puntos_interes.belongsTo(Propietarios, { foreignKey: 'propietario_id' })

    // relacion 1 a N 
    Puntos_interes.hasMany(Temporadas, { foreignKey: 'punto_interes_id' })
    Temporadas.belongsTo(Puntos_interes, { foreignKey: 'punto_interes_id' })

    // relacion 1 a N
    Temporadas.hasMany(Actividades, { foreignKey: 'temporada_id' })
    Actividades.belongsTo(Temporadas, { foreignKey: 'temporada_id' })



// seccion de imagenes con cada tabla que lo requiera

    // relacion 1 a N 
    Puntos_interes.hasMany(Imagenes, { foreignKey: 'punto_interes_id' })
    Imagenes.belongsTo(Puntos_interes, { foreignKey: 'punto_interes_id' })

    // relacion 1 a N 
    Temporadas.hasMany(Imagenes, { foreignKey: 'temporada_id' })
    Imagenes.belongsTo(Temporadas, { foreignKey: 'temporada_id' })

    // relacion 1 a N 
    Actividades.hasMany(Imagenes, { foreignKey: 'actividad_id' })
    Imagenes.belongsTo(Actividades, { foreignKey: 'actividad_id' })

// seccion del cliente con las reseñas - en realidad esto es
// una N a M pero con la condicion de que esta tabla Resenias
// es creada manualmente

    // relacion 1 a N 
    Clientes.hasMany(Resenias, { foreignKey: 'cliente_id' })
    Resenias.belongsTo(Clientes, { foreignKey: 'cliente_id' })

    // relacion 1 a N 
    Puntos_interes.hasMany(Resenias, { foreignKey: 'punto_interes_id' })
    Resenias.belongsTo(Puntos_interes, { foreignKey: 'punto_interes_id' })

// seccion de que un punto de interés puede tener varias flores y viceversa
// es una N a M pero con la condicion de que esta tabla intermedia la crea
// sequelize 

    // relacion N a M
    Flores.belongsToMany(Puntos_interes, {through: 'NM_Flor_Punto_interes', foreignKey: 'flor_id'} )
    Puntos_interes.belongsToMany(Flores, {through: 'NM_Flor_Punto_interes', foreignKey: 'punto_interes_id', onDelete: 'CASCADE', hooks: true} )