import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {Router} from "express";
import checkToken from "../middleware/checkToken.js";

const router = Router();


import Imagenes from "../models/Imagenes.js";
import PuntosInteres from "../models/Puntos_interes.js";
import Temporadas from "../models/Temporadas.js";
import Actividades from "../models/Actividades.js";

export default router
  .get(
    "/imagenes",
    checkToken,
    async (req, res) => await readItems(req, res, Imagenes)
  )
  .get(
    "/imagenes/:id",
    checkToken,
    async (req, res) => await readItem(req, res, Imagenes)
  )
  .post(
    "/imagenes",
    checkToken,
    async (req, res) => await createItem(req, res, Imagenes)
  )
  .put(
    "/imagenes/:id",
    checkToken,
    async (req, res) => await updateItem(req, res, Imagenes)
  )
  .delete(
    "/imagenes/:id",
    checkToken,
    async (req, res) => await deleteItem(req, res, Imagenes)
  );
