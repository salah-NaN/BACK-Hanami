import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import 
  createImage
from "../controllers/imagenes.controllers.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";

const router = Router();

import Imagenes from "../models/Imagenes.js";
import PuntosInteres from "../models/Puntos_interes.js";
import Temporadas from "../models/Temporadas.js";
import Actividades from "../models/Actividades.js";

export default router
  .get("/imagenes", async (req, res) => await readItems(req, res, Imagenes))
  .get("/imagenes/:id", async (req, res) => await readItem(req, res, Imagenes))
  .post("/imagenes", async (req, res) => await createItem(req, res, Imagenes))
  .put(
    "/imagenes/:id",
    async (req, res) => await updateItem(req, res, Imagenes)
  )
  .delete(
    "/imagenes/:id",
    async (req, res) => await deleteItem(req, res, Imagenes)
  )
  .post(
    "/puntos_interes/img/:id",
    async (req, res) => await createImage(req, res, Imagenes)
  );
