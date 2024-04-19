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
            {model: Flores},
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
        } /*
        {
          model: Flores,
        },*/,
      ],
    });

    // console.log(punto_interes_sin_flores)
    if (!punto_interes_sin_flores) {
      return res
        .status(404)
        .json({message: "No se ha encontrado el punto de interés"});
    }

    // const punto_interes_respuesta = {
    //     ...punto_interes_sin_flores,
    //     ...flores

    // }
    res.status(200).json({punto_interes_sin_flores});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// endpoint que muestra los puntos de interes(con temporadas y las flores correspondientes) segun los parametros introducidos
const puntos_interes_buscador = async (req, res, Model, Temporadas, Flores) => {
  try {
    //comprueba si los parametros llegan vacios (";") y los sustituye por un "%" o si tenian datos
    const poblacion = req.params.poblacion !== ";" ? req.params.poblacion : "%";
    const fecha =
      req.params.fecha !== ";" ? new Date(req.params.fecha) : new Date();
    const flor = req.params.flor !== ";" ? req.params.flor : "%";

    //creamos constante con la fecha que nos llega
    const condicion = req.params.fecha;

    //preparamos una const que es la fecha dentro de 1 año respecto el dia de hoy
    const mas1Ano = new Date();
    mas1Ano.setFullYear(mas1Ano.getFullYear() + 1);

    const puntos_interes_buscador = await Model.findAll({
      where: {poblacion: {[Op.like]: poblacion}},
      include: [
        {
          model: Temporadas,
          required: true,
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
          ],
        },
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
