import { createItem, readItems, readItem, updateItem, deleteItem } from "./generics.controllers.js";
import {Router} from "express";

const router = Router();

import { Propietarios } from "@models/Propietarios.js";

export default router
    .get("/propietarios", readItems(Propietarios))
    .get("/propietarios/:id", readItem(Propietarios))
    .post("/propietarios", createItem(Propietarios))
    .put("/propietarios/:id", updateItem(Propietarios))
    .delete("/propietarios/:id", deleteItem(Propietarios))
    