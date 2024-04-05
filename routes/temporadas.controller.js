import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import {Router} from "express";

const router = Router();

import Temporadas from "../models/Temporadas.js";

export default router
    .get("/temporadas", checkToken, async (req, res) => await readItems(req, res, Temporadas))
    .get("/temporadas/:id", checkToken, async (req, res) => await readItem(req, res, Temporadas))
    .post("/temporadas", checkToken, async (req, res) => await createItem(req, res, Temporadas))
    .put("/temporadas/:id", checkToken, async (req, res) => await updateItem(req, res, Temporadas))
    .delete("/temporadas/:id", checkToken, async (req, res) => await deleteItem(req, res, Temporadas))

