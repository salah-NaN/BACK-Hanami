import { createItem, readItems, readItem, updateItem, deleteItem } from "./generics.controllers.js";
import {Router} from "express";

const router = Router();

import { Resenias } from "@models/Resenias.js";

export default router
    .get("/resenias", readItems(Resenias))
    .get("/resenias/:id", readItem(Resenias))
    .post("/resenias", createItem(Resenias))
    .put("/resenias/:id", updateItem(Resenias))
    .delete("/resenias/:id", deleteItem(Resenias))
    