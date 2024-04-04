import { createItem, readItems, readItem, updateItem, deleteItem } from "@controllers/generics.controllers";
import {Router} from "express";

const router = Router();

import { Flores } from "@models/Flores.js";
import { PuntosInteres } from "@models/PuntosInteres.js";

export default router
    // .get("/flores", readItems(Flores))
    // .get("/flores/:id", readItem(Flores))
    // .post("/flores", createItem(Flores))
    // .put("/flores/:id", updateItem(Flores))
    // .delete("/flores/:id", deleteItem(Flores))
    

    // crear endpoints necesarios