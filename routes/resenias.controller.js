import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import {Router} from "express";

const router = Router();

import  Resenias  from "../models/Resenias.js";

export default router
    .get("/resenias", async (req, res) => await readItems(req, res, Resenias))
    .get("/resenias/:id", async (req, res) => await readItem(req, res, Resenias))
    .post("/resenias", async (req, res) => await createItem(req, res, Resenias))
    .put("/resenias/:id", async (req, res) => await updateItem(req, res, Resenias))
    .delete("/resenias/:id", async (req, res) => await deleteItem(req, res, Resenias))