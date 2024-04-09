import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import checkToken from "../middleware/checkToken.js";
import {Router} from "express";

const router = Router();

import Temporadas from "../models/Temporadas.js";
import Actividades from "../models/Actividades.js";
import PuntosInteres from "../models/Puntos_interes.js";
import Imagenes from "../models/Imagenes.js";

Temporadas.hasMany(Actividades, {
  foreignKey: "temporada_id",
  onDelete: "CASCADE",
  hooks: true,
});
Temporadas.belongsTo(PuntosInteres, {
  foreignKey: "punto_interes_id",
  sourceKey: "id",
});
Temporadas.hasMany(Imagenes, {
  foreignKey: "temporada_id",
  onDelete: "CASCADE",
  hooks: true,
});
export default router
  .get("/temporadas", async (req, res) => await readItems(req, res, Temporadas))
  .get(
    "/temporadas/:id",
    async (req, res) => await readItem(req, res, Temporadas)
  )
  .post(
    "/temporadas",
    async (req, res) => await createItem(req, res, Temporadas)
  )
  .put(
    "/temporadas/:id",
    async (req, res) => await updateItem(req, res, Temporadas)
  )
  .delete(
    "/temporadas/:id",
    async (req, res) => await deleteItem(req, res, Temporadas)
  );
