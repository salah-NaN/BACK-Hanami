import multer from "multer";

const createImagePuntoInteres = async (req, res, Model) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No se ha subido ninguna imagen" });
    }

    const { nombre, tipo, idPuntoInteres } = req.body;
    const imageUrl =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
    const imageData = {
      nombre: nombre,
      tipo: "." + tipo,
      punto_interes_id: idPuntoInteres,
      imageUrl: imageUrl,
    };

    const item = await Model.create(imageData);
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const createImageActividad = async (req, res, Model) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No se ha subido ninguna imagen" });
    }

    const { nombre, tipo, idActividad } = req.body;
    const imageUrl =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
    const imageData = {
      nombre: nombre,
      tipo: "." + tipo,
      actividad_id: idActividad,
      imageUrl: imageUrl,
    };

    const item = await Model.create(imageData);
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

export { createImagePuntoInteres, createImageActividad };
