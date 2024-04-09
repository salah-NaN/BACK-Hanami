import checkToken from "../middleware/checkToken.js";
import { createItem, readItems, readItem, updateItem, deleteItem } from "../controllers/generics.controllers.js";
import { Router } from "express";

const router = Router();

import PuntosInteres from "../models/Puntos_interes.js";
import Temporadas from "../models/Temporadas.js";
import Propietarios from "../models/Propietarios.js";


export default router
    .get("/puntos_interes", checkToken, async (req, res) => await readItems(req, res, PuntosInteres))
    .get("/puntos_interes/:id", checkToken, async (req, res) => await readItem(req, res, PuntosInteres))
    .post("/puntos_interes", checkToken, async (req, res) => await createItem(req, res, PuntosInteres))
    .put("/puntos_interes/:id", checkToken, async (req, res) => await updateItem(req, res, PuntosInteres))
    .delete("/puntos_interes/:id", checkToken, async (req, res) => await deleteItem(req, res, PuntosInteres))




    /*
    Endpoint para poder sacar todos los puntos de interés y todas sus temporadas 
    asociadas
    */

    // .get("/todos_puntos_interes", async (req, res) => {
    //     try {
    //         const puntos_interes = await PuntosInteres.findAll({
    //             include: {
    //                 model: Temporadas,
    //                 where: {id: 'punto_interes_id'}
    //             }
    //         })
    //         if (!puntos_interes) return res.status(404).json({ message: 'No encontrados' })
    //         res.status(201).json(puntos_interes)
    //     } catch (error) {
    //         res.status(400).json({ error: error.message })
    //     }
    // })

    .get("/todos_puntos_interes", async (req, res) => {
        try {
            const puntos_interes = await Propietarios.findAll({
                // where: {id: 3} // Incluye todas las temporadas asociadas a los puntos de interés
                include: {
                    model: PuntosInteres
                }
            });
            
            if (!puntos_interes) {
                return res.status(404).json({ message: 'No se encontraron puntos de interés' });
            }
            
            res.status(200).json(puntos_interes);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
    