import { createItem, readItems, readItem, updateItem, deleteItem } from "@controllers/generics.controllers";
import {Router} from "express";

const router = Router();

import { Imagenes } from "@models/Imagenes.js";

export default router
    .get("/imagenes", readItems(Imagenes))
    .get("/imagenes/:id", readItem(Imagenes))
    .post("/imagenes", createItem(Imagenes))
    .put("/imagenes/:id", updateItem(Imagenes))
    .delete("/imagenes/:id", deleteItem(Imagenes))
    