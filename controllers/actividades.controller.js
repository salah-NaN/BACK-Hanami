
import { createItem, readItems, readItem, updateItem, deleteItem } from ".generics.controllers.js";
import {Router} from "express";

const router = Router();

import { Actividades } from "@models/Actividades.js";

export default router
    .get("/actividades", readItems(Actividades))
    .get("/actividades/:id", readItem(Actividades))
    .post("/actividades", createItem(Actividades))
    .put("/actividades/:id", updateItem(Actividades))
    .delete("/actividades/:id", deleteItem(Actividades))
