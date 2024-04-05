import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import {Router} from "express";

const router = Router();

import  Resenias  from "../models/Resenias.js";

export default router
    .get("/resenias", checkToken, async (req, res) => await readItems(req, res, Resenias))
    .get("/resenias/:id", checkToken, async (req, res) => await readItem(req, res, Resenias))
    .post("/resenias", checkToken, async (req, res) => await createItem(req, res, Resenias))
    .put("/resenias/:id", checkToken, async (req, res) => await updateItem(req, res, Resenias))
    .delete("/resenias/:id", checkToken, async (req, res) => await deleteItem(req, res, Resenias))