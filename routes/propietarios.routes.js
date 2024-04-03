import { createItem, readItems, readItem, updateItem, deleteItem } from "./generics.controllers.js";
import {Router} from "express";

const router = Router();

import { Propietarios } from "@models/Propietarios.js";

export default router
    .get("/propietarios", async (req, res) => await readItems(req, res, Propietarios))
    .get("/propietarios/:id", async (req, res) => await readItem(req, res,Propietarios))
    .post("/propietarios", async (req, res) => await createItem(req, res, Propietarios))
    .put("/propietarios/:id", async (req, res) => await updateItem(req, res, Propietarios))
    .delete("/propietarios/:id", async (req, res) => await deleteItem(req, res, Propietarios))