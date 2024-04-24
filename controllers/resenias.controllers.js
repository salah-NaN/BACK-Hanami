import sequelize from "sequelize";
import {Op, where} from "sequelize";

const crearResenia = async (req, res, Model) => {
  try {
    const idCliente = req.body.id;
    const actividad = req.params.actividadId;
    const resenia = {
      resenia: req.body.resenia,
      puntuacion: req.body.puntuacion,
      fecha: new Date(),
      actividad_id: actividad,
      cliente_id: idCliente,
    };
    if (!isNan(resenia.puntuacion) || !resenia.resenia) {
      return res
        .status(404)
        .json({message: "Faltan campos por rellenar correctamente"});
    }

    const resultado = await Model.create(resenia);
    if (!resultado) {
      res.status(201).json(resultado);
    } else {
      return res.status(400).json({message: "No se ha podido crear"});
    }
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export {crearResenia};
