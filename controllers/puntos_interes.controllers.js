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
        .json({ message: "No se encontraron puntos de interés" });
    }

    res.status(200).json(puntos_interes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const puntos_interes_propietarios = async (req, res, Model, Propietarios) => {
  try {
    const puntos_interes = await Model.findAll({
      where: { id: req.params.id },
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
        .json({ message: "No se encontraron puntos de interés" });
    }
    res.status(200).json(puntos_interes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { todos_puntos_interes, puntos_interes_propietarios };
