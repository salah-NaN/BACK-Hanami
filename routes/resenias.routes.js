import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import checkToken from "../middleware/checkToken.js";
import {Router} from "express";
import {crearResenia} from "../controllers/resenias.controllers.js";

import Resenias from "../models/Resenias.js";
import Clientes from "../models/Clientes.js";
import Actividades from "../models/Actividades.js";
const router = Router();

export default router
  .get("/resenias", async (req, res) => await readItems(req, res, Resenias))
  .get("/resenias/:id", async (req, res) => await readItem(req, res, Resenias))
  .post("/resenias", async (req, res) => await createItem(req, res, Resenias))
  .put(
    "/resenias/:id",
    async (req, res) => await updateItem(req, res, Resenias)
  )
  .delete(
    "/resenias/:id",
    async (req, res) => await deleteItem(req, res, Resenias)
  )

  .post(
    "/crearResenia/:idActividad",
    checkToken,
    async (req, res) => await crearResenia(req, res, Resenias)
  );
