import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import {Router} from "express";
import checkToken from "../middleware/checkToken.js";


const router = Router();

import Flores from "../models/Flores.js";
import PuntosInteres from "../models/Puntos_interes.js";

export default router
    // .get("/algo", checkToken, async (req, res) => await readItems(req, res, Flores))
    // .get("/algo/:id", checkToken, async (req, res) => await readItem(req, res, Flores))
    // .post("/algo", checkToken, async (req, res) => await createItem(req, res, Flores))
    // .put("/algo/:id", checkToken, async (req, res) => await updateItem(req, res, Flores))
    // .delete("/algo/:id", checkToken, async (req, res) => await deleteItem(req, res, Flores))

    // crear endpoints necesarios