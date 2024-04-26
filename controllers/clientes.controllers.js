


const cliente_resenias = async (req, res, Model) => {
    try {
      const idCliente = req.body.cliente_id;
      const actividad = req.params.idActividad;
  
      const resenia = {
        resenia: req.body.resenia,
        puntuacion: req.body.puntuacion,
        fecha: new Date(),
        actividad_id: actividad * 1,
        cliente_id: idCliente,
      };
  
  
      if (isNaN(resenia.puntuacion) || !resenia.resenia) {
        return res
          .status(404)
          .json({message: "Faltan campos por rellenar correctamente"});
      }
  
      const resultado = await Model.create({
        puntuacion: req.body.puntuacion,
        resenia: req.body.resenia,
        fecha: new Date(),
        actividad_id: actividad * 1,
        cliente_id: idCliente,
      });
        res.status(201).json({message: 'Reseña añadida'});
  
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

export {cliente_resenias};
