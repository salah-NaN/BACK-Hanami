


const cliente_resenias = async (req, res, Model, Resenias, Actividades) => {
  try {
    const idCliente = req.body.cliente_id;


    const resenias = await Resenias.findAll({
      where: {
        cliente_id: idCliente
      },
      // include: [
      //   {
      //     model: Actividades
      //   }
      // ]
    },
    )
    if (!resenias) {
      return res
        .status(404)
        .json({ message: "No se encuentran resenias del cliente" });
    }

    res.status(200).json(resenias);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { cliente_resenias };
