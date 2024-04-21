import {Op, where} from "sequelize";

const actividades_buscador = async (
  req,
  res,
  Model,
  Temporadas,
  Flores,
  PuntosInteres
) => {
  try {
    const poblacion = req.params.poblacion !== ";" ? req.params.poblacion : "%";
    const fecha =
      req.params.fecha !== ";" ? new Date(req.params.fecha) : new Date();
    const flor = req.params.flor !== ";" ? req.params.flor : "%";

    const condicion = req.params.fecha;

    //preparamos una const que es la fecha dentro de 1 año respecto el dia de hoy
    const mas1Ano = new Date();
    mas1Ano.setFullYear(mas1Ano.getFullYear() + 1);

    const actividades_buscador = await Model.findAll({
      where: {
        poblacion: {[Op.like]: poblacion},
      },
      include: [
        {
          model: Temporadas,
          required: false,
          where:
            //miramos si lo que nos llega es un ";", que es si el usuario  ha introducido algun dato
            condicion !== ";"
              ? {
                  [Op.and]: {
                    fecha_inicio: {[Op.lte]: fecha},
                    fecha_fin: {[Op.gte]: fecha},
                  },
                }
              : {
                  [Op.and]: {
                    fecha_inicio: {[Op.gte]: fecha},
                    fecha_fin: {[Op.lte]: mas1Ano},
                  },
                },
          include: [
            {
              model: Flores,
              required: true,
              where: {
                especie: {[Op.like]: flor},
              },
            },
            {
              model: PuntosInteres,
              required: true,
            },
          ],
          
        },

        /*             {
                model: Flores,
                required: false,
                where: {especie: flor},
              }, */
      ],
    });
    if (!actividades_buscador) {
      return res.status(404).json({message: "No se encontraron actividades"});
    }
    const newData = actividades_buscador.filter(pi => pi.temporada !== null)
    res.status(200).json(newData);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// endpoint dedicado a la página de una actividad específica
const actividad_page = async (
  req,
  res,
  Model,
  Temporadas,
  PuntosInteres,
  Imagenes,
  Resenias
) => {
  try {
    const {id} = req.params;
    const actividad = await Model.findByPk(id, {
      include: [
        {
          model: Temporadas,
          include: [
            {
              model: PuntosInteres,
            },
            {
              model: Imagenes,
            },
          ],
        },
        {
          model: Resenias,
        },
        {
          model: Imagenes,
        },
      ],
    });

    if (!actividad) {
      return res.status(404).json({message: "No se encontraron actividades"});
    }
    //codigo de prueba, es borrable
    // const actividad_sola = await Model.findByPk(id)
    // if (!actividad_sola) {
    //   return res.status(404).json({ message: "No se encontraron actividades" });
    // }
    // const resenias = await actividad_sola.get
    res.status(200).json(actividad);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export {actividades_buscador, actividad_page};
