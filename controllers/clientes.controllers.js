import { createItem, readItems, readItem, updateItem, deleteItem } from "./generics.controllers.js";
import {Router} from "express";

const router = Router();

import { Clientes } from "@models/Clientes.js";

export default router
    .get("/clientes", readItems(Clientes))
    .get("/clientes/:id", readItem(Clientes))
    .post("/clientes", createItem(Clientes))
    .put("/clientes/:id", updateItem(Clientes))
    .delete("/clientes/:id", deleteItem(Clientes))
    