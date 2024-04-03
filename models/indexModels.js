import { Actividades } from './Actividades'
import { Clientes } from './Clientes'
import { Propietarios } from './Propietarios'
import { Puntos_interes } from './Puntos_interes'
import { Resenias } from './Resenias'
import { Temporadas } from './Temporadas'

// seccion de lo que tiene el propietario

    // relacion 1 a N 
    Propietarios.hasMany(Puntos_interes)
    Puntos_interes.belongsTo(Propietarios)

    // relacion 1 a N 
    Puntos_interes.hasMany(Temporadas)
    Temporadas.belongsTo(Puntos_interes)

    // relacion 1 a N 
    Temporadas.hasMany(Actividades)
    Actividades.belongsTo(Temporadas)



// seccion de imagenes con cada tabla que lo requiera

    // relacion 1 a N 
    Puntos_interes.hasMany(Imagenes)
    Imagenes.belongsTo(Temporadas)

    // relacion 1 a N 
    Temporadas.hasMany(Imagenes)
    Imagenes.belongsTo(Temporadas)

    // relacion 1 a N 
    Actividades.hasMany(Imagenes)
    Imagenes.belongsTo(Temporadas)

// seccion del cliente con las reseñas - en realidad esto es
// una N a M pero con la tabla Resenias creada manualmente

    // relacion 1 a N 
    Clientes.hasMany(Resenias)
    Resenias.belongsTo(Clientes)

    // relacion 1 a N 
    Puntos_interes.hasMany(Resenias)
    Resenias.belongsTo(Puntos_interes)