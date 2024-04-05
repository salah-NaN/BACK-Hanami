import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import {Router} from "express";

const router = Router();

import  Imagenes  from "../models/Imagenes.js";

export default router
    .get("/imagenes", async (req, res) => await readItems(req, res, Imagenes))
    .get("/imagenes/:id", async (req, res) => await readItem(req, res, Imagenes))
    .post("/imagenes", async (req, res) => await createItem(req, res, Imagenes))
    .put("/imagenes/:id", async (req, res) => await updateItem(req, res, Imagenes))
    .delete("/imagenes/:id", async (req, res) => await deleteItem(req, res, Imagenes))
    