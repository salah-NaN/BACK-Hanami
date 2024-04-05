import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";

import {Router} from "express";

const router = Router();

import  PuntosInteres  from "../models/Puntos_interes.js";

export default router
    .get("/puntos_interes", checkToken, async (req, res) => await readItems(req, res, PuntosInteres))
    .get("/puntos_interes/:id", checkToken, async (req, res) => await readItem(req, res, PuntosInteres))
    .post("/puntos_interes", checkToken, async (req, res) => await createItem(req, res, PuntosInteres))
    .put("/puntos_interes/:id", checkToken, async (req, res) => await updateItem(req, res, PuntosInteres))
    .delete("/puntos_interes/:id", checkToken, async (req, res) => await deleteItem(req, res, PuntosInteres))
    