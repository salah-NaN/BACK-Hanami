import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import { Router } from "express";
import checkToken from "../middleware/checkToken.js";

const router = Router();
import Actividades from "../models/Actividades.js";

export default router
    .get("/actividades", checkToken, async (req, res) => await readItems(req, res, actividadesController) )
    .get("/actividades/:id", checkToken, async (req, res) => await readItem(req, res, actividadesController))
    .post("/actividades", checkToken, async (req, res) => await createItem(req, res, actividadesController))
    .put("/actividades/:id", checkToken, async (req, res) => await updateItem(req, res, actividadesController))
    .delete("/actividades/:id", checkToken, async (req, res) => await deleteItem(req, res, actividadesController));
