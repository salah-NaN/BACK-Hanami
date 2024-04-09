import checkToken from "../middleware/checkToken.js";
import {
  createItem,
  readItems,
  readItem,
  updateItem,
  deleteItem,
} from "../controllers/generics.controllers.js";
import {Router} from "express";

const router = Router();

import Flores from "../models/Flores.js";
import PuntosInteres from "../models/Puntos_interes.js";

Flores.belongsToMany(PuntosInteres, {
  through: "NM_Flor_Punto_interes",
  foreignKey: "flor_id",
});

export default router
  .get(
    "/flores",
    checkToken,
    async (req, res) => await readItems(req, res, Flores)
  )
  .get(
    "/flores/:id",
    checkToken,
    async (req, res) => await readItem(req, res, Flores)
  )
  .post(
    "/flores",
    checkToken,
    async (req, res) => await createItem(req, res, Flores)
  )
  .put(
    "/flores/:id",
    checkToken,
    async (req, res) => await updateItem(req, res, Flores)
  )
  .delete(
    "/flores/:id",
    checkToken,
    async (req, res) => await deleteItem(req, res, Flores)
  );
