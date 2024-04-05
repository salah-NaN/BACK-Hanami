import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";

import {Router} from "express";

const router = Router();

import Flores from "../models/Flores.js";

export default router
    .get("/flores", checkToken, async (req, res) => await readItems(req, res, Flores))
    .get("/flores/:id", checkToken, async (req, res) => await readItem(req, res, Flores))
    .post("/flores", checkToken, async (req, res) => await createItem(req, res, Flores))
    .put("/flores/:id", checkToken, async (req, res) => await updateItem(req, res, Flores))
    .delete("/flores/:id", checkToken, async (req, res) => await deleteItem(req, res, Flores))
    