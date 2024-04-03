import { createItem, readItems, readItem, updateItem, deleteItem } from "./generics.controllers.js";
import {Router} from "express";

const router = Router();

import { PuntosInteres } from "@models/PuntosInteres.js";

export default router
    .get("/puntos_interes", readItems(PuntosInteres))
    .get("/puntos_interes/:id", readItem(PuntosInteres))
    .post("/puntos_interes", createItem(PuntosInteres))
    .put("/puntos_interes/:id", updateItem(PuntosInteres))
    .delete("/puntos_interes/:id", deleteItem(PuntosInteres))
    