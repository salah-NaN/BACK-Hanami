import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {
  actividad_page,
  actividades_buscador,
} from "../controllers/actividades.controllers.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";

import Actividades from "../models/Actividades.js";
import Temporadas from "../models/Temporadas.js";
import Imagenes from "../models/Imagenes.js";
import Resenias from "../models/Resenias.js";
import PuntosInteres from "../models/Puntos_interes.js";
import Flores from "../models/Flores.js";
import Propietarios from "../models/Propietarios.js";

const router = Router();

export default router
  .get(
    "/actividades",
    async (req, res) => await readItems(req, res, Actividades)
  )
  .get(
    "/actividades/:id",
    async (req, res) => await readItem(req, res, Actividades)
  )
  .post(
    "/actividades",
    async (req, res) => await createItem(req, res, Actividades)
  )
  .put(
    "/actividades/:id",
    async (req, res) => await updateItem(req, res, Actividades)
  )
  .delete(
    "/actividades/:id",
    async (req, res) => await deleteItem(req, res, Actividades)
  )
  .get(
    "/actividad_page/:id",
    async (req, res) =>
      await actividad_page(
        req,
        res,
        Actividades,
        Temporadas,
        PuntosInteres,
        Imagenes,
        Resenias,
        Propietarios
      )
  )
  .get(
    "/actividades/:poblacion/:fecha/:flor",
    async (req, res) =>
      await actividades_buscador(
        req,
        res,
        Actividades,
        Temporadas,
        Flores,
        PuntosInteres,
        Resenias,
        Imagenes
      )
  );
