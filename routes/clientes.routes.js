import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";

import {Router} from "express";

const router = Router();

import  Clientes  from "../models/Clientes.js";

export default router
    .get("/clientes", async (req, res) => await readItems(req, res, Clientes))
    .get("/clientes/:id", async (req, res) => await readItem(req, res, Clientes))
    .post("/clientes", async (req, res) => await createItem(req, res, Clientes))
    .post("/login", async (req, res) => await createItem(req, res, Clientes))
    .post("/register", async (req, res) => await createItem(req, res, Clientes))
    .put("/clientes/:id", async (req, res) => await updateItem(req, res, Clientes))
    .delete("/clientes/:id", async (req, res) => await deleteItem(req, res, Clientes))