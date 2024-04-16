
import { Op, where } from "sequelize";

const actividades_buscador = async (
  req,
  res,
  Model,
  Temporadas,
  PuntosInteres
) => {
  try {
    const poblacion = req.params.poblacion !== ";" ? req.params.poblacion : "%";
    const fecha = req.params.fecha !== ";" ? req.params.fecha : new Date();
    const flor = req.params.flor !== ";" ? req.params.flor : "%";

    const actividades_buscador = await Model.findAll({
      where: { poblacion: { [Op.like]: poblacion } },
      include: [
        {
          model: Temporadas,
          required: true,
          include: [
            {
              model: PuntosInteres,
              required: true,
              where: { id: { [Op.eq]: Temporadas.id } },
            },
          ],
          where: {
            fecha_inicio: { [Op.lte]: fecha },
            fecha_fin: { [Op.gte]: fecha },
          },
        },

        /*             {
                model: Flores,
                required: false,
                where: {especie: flor},
              }, */
      ],
    });
    if (!actividades_buscador) {
      return res.status(404).json({ message: "No se encontraron actividades" });
    }
    res.status(200).json(actividades_buscador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
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
    const { id } = req.params
    const actividad = await Model.findByPk(id, {
      include: [
        {
          model: Temporadas,
          include: [
            {
              model: PuntosInteres
            }
          ]
        },
        {
          model: Resenias
        }


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
    const { id } = req.params
    const actividad = await Model.findByPk(id, {
      include: [
        {
          model: Temporadas,
          include: [
            {
              model: PuntosInteres
            }
          ]
        },
        {
          model: Resenias
        }
        // {
        //   model: Imagenes
        // }
      ]
    })

    if (!actividad) {
      return res.status(404).json({ message: "No se encontraron actividades" });
    }
    //codigo de prueba, es borrable
    // const actividad_sola = await Model.findByPk(id)
    // if (!actividad_sola) {
    //   return res.status(404).json({ message: "No se encontraron actividades" });
    // }
    // const resenias = await actividad_sola.get
    res.status(200).json(actividad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export {actividades_buscador, actividad_page};
