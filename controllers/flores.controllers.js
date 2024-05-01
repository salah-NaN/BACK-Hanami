import { where } from "sequelize";

const todos_flores = async (req, res, Model, Temporadas, Imagenes) => {
  try {
    const { id } = req.params;
    const { idPunto } = req.params;
    const flores = await Model.findByPk(id, {
      include: [
        {
          model: Temporadas,
          where: { punto_interes_id: idPunto },
          include: [
            {
              model: Imagenes,
            },
          ],
        },
      ],
      distinct: true,
    });
    
    res.status(200).json(flores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { todos_flores };
