import {Op, where} from "sequelize";

const todos_puntos_interes = async (req, res, Model, Temporadas) => {
  try {
    const puntos_interes = await Model.findAll({
      // where: {id: 3} // Incluye todas las temporadas asociadas a los puntos de interés
      include: [
        {
          model: Temporadas,
          required: false,
        },
      ],
    });

    if (!puntos_interes) {
      return res
        .status(404)
        .json({message: "No se encontraron puntos de interés"});
    }

    res.status(200).json(puntos_interes);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
// joel
const puntos_interes_propietarios = async (req, res, Model, Propietarios) => {
  console.log("req.params === ", req.params);
  try {
    const puntos_interes = await Model.findAll({
      where: {propietario_id: req.params.id},
      include: [
        {
          model: Propietarios,
          required: false,
        },
      ],
    });
    if (!puntos_interes) {
      return res
        .status(404)
        .json({message: "No se encontraron puntos de interés"});
    }
    res.status(200).json(puntos_interes);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// salah - endpoint para la página de Pdi específico donde se muestran las actividades etc
const punto_interes_page = async (
  req,
  res,
  Model,
  Propietarios,
  Temporadas,
  Actividades,
  Imagenes,
  Flores
) => {
  const {id} = req.params;

  try {
    // consulta para sacar el Pdi sin las flores asociadas
    const punto_interes_sin_flores = await Model.findByPk(id, {
      include: [
        {
          model: Temporadas,
          include: [
            {
              model: Actividades,
            },
          ],
        },
        // {
        //     model: Propietarios,
        // },
        {
          model: Imagenes,
        },
      ],
    });

    // console.log(punto_interes_sin_flores)
    if (!punto_interes_sin_flores) {
      return res
        .status(404)
        .json({message: "No se ha encontrado el punto de interés"});
    }

    const punto_interes = await Model.findByPk(id);
    if (!punto_interes) {
      return res
        .status(404)
        .json({message: "No se ha encontrado el punto de interés"});
    }
    const flores = await punto_interes.getFlores();

    const structure = {
      punto_interes: null,
      flores_asociadas: null,
    };

    const punto_interes_respuesta = {
      ...structure,
      punto_interes: punto_interes_sin_flores,
      flores_asociadas: flores,
    };

    // const punto_interes_respuesta = {
    //     ...punto_interes_sin_flores,
    //     ...flores

    // }
    res.status(200).json({punto_interes_respuesta});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// manel
const puntos_interes_buscador = async (req, res, Model, Temporadas, Flores) => {
  try {
    const poblacion = req.params.poblacion !== ";" ? req.params.poblacion : "%";
    const fecha = req.params.fecha !== ";" ? req.params.fecha : new Date();
    const flor = req.params.flor !== ";" ? req.params.flor : "%";

    const puntos_interes_buscador = await Model.findAll({
      where: {poblacion: {[Op.like]: poblacion}},
      include: [
        {
          model: Temporadas,
          required: true,
          where: {
            fecha_inicio: {[Op.lte]: fecha},
            fecha_fin: {[Op.gte]: fecha},
          },
          include: [
            {
              model: Flores,
              required: true,
              where: {
                especie: {[Op.like]: flor},
              },
            },
          ],
        },
/*                      {
              model: Flores,
              required: false,
              where: {especie: flor},
            },  */
      ],
    });
    if (!puntos_interes_buscador) {
      return res
        .status(404)
        .json({message: "No se encontraron puntos de interés"});
    }
    res.status(200).json(puntos_interes_buscador);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export {
  todos_puntos_interes,
  puntos_interes_propietarios,
  punto_interes_page,
  puntos_interes_buscador,
};
